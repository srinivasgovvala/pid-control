'use client'

import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import { Building2, Hospital, FlaskConical, Factory, BookOpen, Server, ArrowRight } from '@/components/Icons'

const industries = [
  { id: 'commercial', icon: Building2, title: 'Commercial Buildings', desc: 'Smart BMS and HVAC automation for office complexes, malls, hotels, and mixed-use developments. Reduce operational costs while enhancing occupant comfort and building performance.' },
  { id: 'healthcare', icon: Hospital, title: 'Healthcare Facilities', desc: 'Critical environment monitoring and control for hospitals, clinics, and medical facilities. Precise temperature, humidity, and IAQ management for patient safety and regulatory compliance.' },
  { id: 'pharma', icon: FlaskConical, title: 'Pharmaceutical & Life Sciences', desc: 'GMP-compliant automation solutions for pharmaceutical manufacturing, clean rooms, and laboratory environments. 24/7 environmental monitoring with full validation support.' },
  { id: 'industrial', icon: Factory, title: 'Industrial Facilities', desc: 'Robust automation and control systems for factories, warehouses, and production plants. Energy optimization, process monitoring, and integrated plant management.' },
  { id: 'education', icon: BookOpen, title: 'Educational Institutions', desc: 'Comprehensive building management for campuses, universities, and research centers. Centralized control of HVAC, lighting, and energy systems across multiple buildings.' },
  { id: 'datacenter', icon: Server, title: 'Data Centers & Critical Infrastructure', desc: 'Precision cooling control, environmental monitoring, and power management for data centers. Ensure uptime, efficiency, and compliance with industry standards.' },
]

export default function IndustriesPage() {
  return (
    <>
      <PageHeader title="Industries We Serve" subtitle="Delivering intelligent automation solutions across diverse sectors" />
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((I) => (
              <section key={I.id} id={I.id}>
                <ScrollReveal>
                  <div className="card group h-full hover:border-[#4CAF50]/30">
                    <div className="w-16 h-16 rounded-2xl gradient-green flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <I.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#0B3D24] mb-3">{I.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{I.desc}</p>
                  </div>
                </ScrollReveal>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-dark text-center">
        <div className="container-wide">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Not Sure Which Solution Fits Your Industry?</h2>
            <p className="text-green-200 mb-8 max-w-2xl mx-auto">Our team has experience across diverse sectors. Let&apos;s discuss your specific requirements.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Schedule a Consultation <ArrowRight />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
