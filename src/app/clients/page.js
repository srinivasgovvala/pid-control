'use client'

import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import { ArrowRight } from '@/components/Icons'

const clients = [
  { src: '/images/aurigene.jpg', name: 'Aurigene Pharmaceutical Services' },
  { src: '/images/camfil.jpg', name: 'Camfil Air Pollution Control' },
  { src: '/images/ichor.png', name: 'Ichor Biologics' },
  { src: '/images/ilean.jpg', name: 'iClean / Takasago Thermal Engineering' },
  { src: '/images/popvax.png', name: 'PopVax' },
]

export default function ClientsPage() {
  return (
    <>
      <PageHeader title="Our Clients" subtitle="Trusted by leading organizations across pharmaceutical, healthcare, industrial, and engineering sectors" />

      <section className="section-padding bg-white relative">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
        <div className="container-wide relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="section-title mb-4">Trusted Organizations</h2>
              <p className="section-subtitle mx-auto">
                We are proud to work with organizations that value reliable automation, intelligent control, operational efficiency, and sustainable performance.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {clients.map((client, i) => {
                const isLastAndOdd = i === clients.length - 1 && clients.length % 2 !== 0
                return (
                  <ScrollReveal key={client.name}>
                    <div className={`card group text-center h-full flex flex-col items-center justify-center ${isLastAndOdd ? 'lg:col-start-2' : ''}`}>
                      <div className="w-full h-40 sm:h-44 md:h-48 flex items-center justify-center p-6 md:p-8">
                        <img
                          src={client.src}
                          alt={`${client.name} - Valued Client of PID Controls`}
                          className="max-w-full max-h-full w-auto h-auto object-contain transition-all duration-300 group-hover:scale-105"
                          loading={i < 2 ? 'eager' : 'lazy'}
                          width={280}
                          height={120}
                        />
                      </div>
                      <h3 className="font-heading font-bold text-base md:text-lg text-[#0B3D24] mt-2">
                        {client.name}
                      </h3>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-dark text-center">
        <div className="container-wide">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Join Our Growing Client Network
            </h2>
            <p className="text-green-200 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how PID Controls can deliver intelligent automation solutions for your organization.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get in Touch <ArrowRight />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
