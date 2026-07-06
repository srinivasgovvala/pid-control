'use client'

import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import { Lightbulb, CheckCircle, HeartHandshake, Target, Leaf, Award, Zap, ArrowRight } from '@/components/Icons'

const capabilities = [
  'BMS', 'HVAC Automation', 'Energy Monitoring', 'IAQ Monitoring',
  'Smart Infrastructure', 'System Integration', 'Operational Excellence',
]

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'Continuously adopting cutting-edge technologies to deliver smarter automation solutions that stay ahead of industry trends.' },
  { icon: CheckCircle, title: 'Quality', desc: 'Uncompromising standards in every project — from design and engineering to installation and commissioning.' },
  { icon: HeartHandshake, title: 'Integrity', desc: 'Transparent, honest, and ethical business practices in all our client relationships and project deliveries.' },
  { icon: Target, title: 'Customer Success', desc: 'Our clients\' operational efficiency and energy savings are the true measure of our success.' },
  { icon: Leaf, title: 'Sustainability', desc: 'Committed to creating energy-efficient buildings that reduce environmental impact and operational costs.' },
  { icon: Award, title: 'Excellence', desc: 'Pursuit of perfection in every system we design, every panel we build, and every service we deliver.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Engineering Smarter Buildings for a Sustainable Future"
      />

      {/* Narrative */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="w-full aspect-[4/3] gradient-dark rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 mx-auto mb-4 text-[#4CAF50]" viewBox="0 0 36 36" fill="none">
                    <rect x="2" y="18" width="6" height="16" rx="1" fill="currentColor"/>
                    <rect x="11" y="10" width="6" height="24" rx="1" fill="#66BB6A"/>
                    <rect x="20" y="4" width="6" height="30" rx="1" fill="#8BC34A"/>
                    <rect x="29" y="14" width="6" height="20" rx="1" fill="currentColor"/>
                  </svg>
                  <p className="text-green-200 font-heading font-bold text-2xl">10+ Years of Excellence</p>
                  <p className="text-green-300/70 mt-2">Since 2014</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="section-title mb-6">Engineering Smarter Buildings for a Sustainable Future</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>PID Controls is a Hyderabad-based Building Management System (BMS) and automation company with over 10 years of experience in delivering intelligent building automation and energy management solutions across India.</p>
                <p>Founded with a vision to transform how buildings operate, we have grown into a trusted partner for facility managers, MEP consultants, builders, developers, and industrial plant owners seeking advanced automation, monitoring, and control systems.</p>
                <p>Our team of certified engineers and technicians brings deep expertise in BMS, HVAC automation, energy management, environmental monitoring, and custom control panel engineering. We partner with global leaders including Siemens, Schneider Electric, ABB, Honeywell, and more to deliver world-class solutions.</p>
                <p>From commercial buildings to pharmaceutical facilities, data centers to educational institutions, our solutions have helped clients achieve measurable energy savings, operational excellence, and sustainable performance.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Capability Hub */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">Our Capability Hub</h2>
              <p className="section-subtitle mx-auto">Integrated expertise across the full spectrum of building automation</p>
            </div>
          </ScrollReveal>
          <div className="gradient-dark rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {capabilities.map((c, i) => (
                <ScrollReveal key={c}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center border border-white/10 hover:bg-white/20 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#4CAF50]/30 flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-5 h-5 text-[#8BC34A]" />
                    </div>
                    <p className="text-white font-heading font-semibold text-sm md:text-base">{c}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="card border-l-4 border-l-[#4CAF50] h-full">
                <h3 className="font-heading font-bold text-2xl text-[#0B3D24] mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">To be the most trusted partner in building automation, setting the standard for intelligent, sustainable, and energy-efficient facilities across India and beyond.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="card border-l-4 border-l-[#8BC34A] h-full">
                <h3 className="font-heading font-bold text-2xl text-[#0B3D24] mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">To empower facility owners and operators with cutting-edge automation and energy management solutions that reduce operational costs, enhance comfort, and contribute to a sustainable future.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">Our Core Values</h2>
              <p className="section-subtitle mx-auto">The principles that guide every project and partnership</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((V, i) => (
              <ScrollReveal key={V.title}>
                <div className="card text-center h-full">
                  <div className="w-14 h-14 rounded-2xl gradient-green flex items-center justify-center mx-auto mb-4">
                    <V.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0B3D24] mb-2">{V.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{V.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-dark text-center">
        <div className="container-wide">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Let&apos;s Build Something Smarter</h2>
            <p className="text-green-200 mb-8 max-w-2xl mx-auto">Partner with PID Controls for your next building automation project</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get in Touch <ArrowRight />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
