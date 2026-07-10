'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from './usePrefersReducedMotion'

const COPIES = 3

export default function ServiceCarousel({ services }) {
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const cardRefs = useRef([])
  const offsetRef = useRef(0)
  const reduced = usePrefersReducedMotion()

  const pausedRef = useRef(false)
  const draggingRef = useRef(false)
  const movedRef = useRef(false)
  const startXRef = useRef(0)
  const startOffsetRef = useRef(0)
  const resumeTimer = useRef(null)

  const metrics = useRef({ stride: 0, cardW: 0, setW: 0, W: 0, N: services.length })

  const list = []
  for (let c = 0; c < COPIES; c++) {
    services.forEach((s, i) => list.push({ ...s, key: `${c}-${i}`, clone: c !== 0 }))
  }

  const measure = () => {
    const vp = viewportRef.current
    const track = trackRef.current
    if (!vp || !track || !cardRefs.current[0]) return
    const cardEl = cardRefs.current[0]
    const cardW = cardEl.getBoundingClientRect().width
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0') || 0
    const stride = cardW + gap
    const N = services.length
    const setW = N * stride
    const W = vp.clientWidth
    metrics.current = { stride, cardW, setW, W, N }

    // Center the middle copy so there is content on both sides from the start.
    const startIndex = Math.floor(COPIES / 2) * N
    offsetRef.current = startIndex * stride + cardW / 2 - W / 2
    if (offsetRef.current < 0) offsetRef.current += setW
    if (offsetRef.current >= setW) offsetRef.current -= setW
    if (track) track.style.transform = `translate3d(${-offsetRef.current}px,0,0)`
    applyStyles()
  }

  const applyStyles = () => {
    const { stride, cardW, W } = metrics.current
    const off = offsetRef.current
    cardRefs.current.forEach((el) => {
      if (!el) return
      const i = Number(el.dataset.index)
      const center = -off + i * stride + cardW / 2
      const d = center - W / 2
      const nd = Math.abs(d) / stride
      const t = Math.min(nd, 2)
      const scale = 1.14 - (1.14 - 0.82) * (t / 2)
      const opacity = 1 - (1 - 0.45) * (t / 2)
      const ty = -6 * (1 - Math.min(nd, 1))
      let filter = 'none'
      if (nd < 1.15) {
        const g = 1 - nd / 1.15
        filter = `drop-shadow(0 0 ${10 * g}px rgba(76,175,80,${0.5 * g})) drop-shadow(0 0 ${22 * g}px rgba(120,200,180,${0.32 * g}))`
      } else if (nd > 0.5) {
        const b = Math.min(1.4, (nd - 0.5) * 1.4)
        filter = `blur(${b}px)`
      }
      el.style.transform = `scale(${scale.toFixed(4)}) translateY(${ty.toFixed(2)}px)`
      el.style.opacity = opacity.toFixed(3)
      el.style.filter = filter
      el.style.zIndex = String(120 - Math.round(nd * 10))
    })
  }

  useEffect(() => {
    measure()
    const onResize = () => measure()
    window.addEventListener('resize', onResize)

    let raf
    let last = performance.now()
    const loop = (now) => {
      const dt = Math.min(now - last, 50)
      last = now
      const { setW } = metrics.current
      if (!reduced && !pausedRef.current && !draggingRef.current && setW > 0) {
        offsetRef.current += (setW / 24000) * dt
        if (offsetRef.current >= setW) offsetRef.current -= setW
        if (offsetRef.current < 0) offsetRef.current += setW
        if (trackRef.current) trackRef.current.style.transform = `translate3d(${-offsetRef.current}px,0,0)`
      }
      applyStyles()
      raf = requestAnimationFrame(loop)
    }
    if (!reduced) {
      raf = requestAnimationFrame(loop)
    } else {
      applyStyles()
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      if (resumeTimer.current) clearTimeout(resumeTimer.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, services.length])

  const onPointerDown = (e) => {
    draggingRef.current = true
    movedRef.current = false
    startXRef.current = e.clientX
    startOffsetRef.current = offsetRef.current
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
  }
  const onPointerMove = (e) => {
    if (!draggingRef.current) return
    const dx = startXRef.current - e.clientX
    if (Math.abs(dx) > 6) movedRef.current = true
    const { setW } = metrics.current
    if (!setW) return
    let next = startOffsetRef.current + dx
    next = ((next % setW) + setW) % setW
    offsetRef.current = next
    if (trackRef.current) trackRef.current.style.transform = `translate3d(${-next}px,0,0)`
    applyStyles()
  }
  const endDrag = () => {
    if (!draggingRef.current) return
    draggingRef.current = false
    pausedRef.current = true
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => { pausedRef.current = false }, 2500)
  }

  return (
    <div
      ref={viewportRef}
      className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
      style={{ touchAction: 'pan-y' }}
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerCancel={endDrag}
    >
      <div
        ref={trackRef}
        className="flex gap-4 md:gap-6 will-change-transform"
        style={{ transform: 'translate3d(0,0,0)' }}
      >
        {list.map((S, i) => (
          <Link
            key={S.key}
            href={S.href}
            data-index={i}
            ref={(el) => { cardRefs.current[i] = el; if (el) el.dataset.index = String(i) }}
            aria-hidden={S.clone || undefined}
            tabIndex={S.clone ? -1 : undefined}
            onClick={(e) => { if (movedRef.current) { e.preventDefault(); } }}
            className="shrink-0 w-[78%] sm:w-[42%] lg:w-[30%] block outline-none"
          >
            <div className={`group h-full rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-xl transition-shadow duration-300 ${S.clone ? '' : 'ring-1 ring-transparent'}`}>
              {S.image ? (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={S.image} alt={S.label} className="w-full h-full object-cover" loading={i < 3 ? 'eager' : 'lazy'} draggable={false} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D24]/85 via-[#0B3D24]/25 to-transparent" />
                </div>
              ) : (
                <div className="relative aspect-[4/3] gradient-dark flex items-center justify-center overflow-hidden">
                  <S.icon className="w-16 h-16 text-[#8BC34A]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D24]/85 to-transparent" />
                </div>
              )}
              <div className="p-4 md:p-5 bg-white">
                <div className="flex items-center gap-2 mb-1">
                  <S.icon className="w-5 h-5 text-[#4CAF50]" />
                  <h3 className="font-heading font-bold text-sm md:text-base text-[#0B3D24]">{S.label}</h3>
                </div>
                <p className="text-xs text-gray-500">{S.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#4CAF50]">
                  Explore Service
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-gray-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-gray-50 to-transparent" />
    </div>
  )
}
