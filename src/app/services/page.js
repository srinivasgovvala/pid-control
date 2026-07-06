'use client'

import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import { Building, Thermometer, Leaf, BarChart3, Gauge, Wind, Zap, Wrench, Monitor, ClipboardCheck, CheckCircle, ArrowRight } from '@/components/Icons'

const coreServices = [
  {
    id: 'bms', icon: Building,
    title: 'Building Management System (BMS)',
    desc: 'Our BMS solutions provide centralized monitoring and control of all building operations — HVAC, lighting, power systems, security, fire safety, and more. We design and implement comprehensive BMS that deliver real-time visibility, intelligent automation, and data-driven insights.',
    features: ['Centralized monitoring & control', 'Real-time data visualization', 'Automated alerts & notifications', 'Energy consumption tracking', 'System integration & interoperability', 'Remote access & management'],
  },
  {
    id: 'hvac', icon: Thermometer,
    title: 'HVAC Integration',
    desc: 'Maximize HVAC performance while minimizing energy consumption with our smart control strategies. We integrate all HVAC equipment — chillers, boilers, AHUs, FCUs, VAVs, and pumps — into a unified, intelligent control system.',
    features: ['Smart scheduling & setpoint optimization', 'Zone-based temperature control', 'Demand-controlled ventilation', 'Predictive maintenance alerts', 'Energy optimization algorithms', 'Integration with BMS platform'],
  },
  {
    id: 'ems', icon: Leaf,
    title: 'Environmental Monitoring System (EMS)',
    desc: 'Continuous monitoring of environmental parameters ensures compliance with health, safety, and regulatory standards. Our EMS solutions track temperature, humidity, CO2 levels, particulate matter, and more.',
    features: ['Real-time environmental monitoring', 'IAQ parameter tracking', 'Compliance reporting & documentation', 'Automated threshold alerts', 'Historical data analysis', 'Multi-zone monitoring'],
  },
  {
    id: 'enms', icon: BarChart3,
    title: 'Energy Monitoring System (EnMS)',
    desc: 'Gain complete visibility into your energy consumption patterns with our advanced energy monitoring solutions. Track, analyze, and optimize energy usage across all building systems and equipment.',
    features: ['Real-time energy consumption tracking', 'Sub-metering & load profiling', 'Energy analytics & reporting', 'Cost allocation & benchmarking', 'Peak demand management', 'Energy savings verification'],
  },
  {
    id: 'cpm', icon: Gauge,
    title: 'Chiller Plant Manager (CPM)',
    desc: 'Our advanced CPM solutions automate and optimize chiller plant operations for maximum efficiency. Intelligent sequencing, setpoint optimization, and variable speed control deliver significant energy savings.',
    features: ['Intelligent chiller sequencing', 'Optimal setpoint management', 'Variable primary flow control', 'Condenser water temperature optimization', 'Performance analytics & reporting', 'Automated fault detection'],
  },
]

const advancedServices = [
  { icon: Wind, title: 'IAQ Monitoring', desc: 'Indoor Air Quality monitoring solutions for healthier, safer indoor environments. Real-time tracking of CO2, PM2.5/PM10, TVOC, temperature, and humidity.' },
  { icon: Zap, title: 'Control Panels', desc: 'Custom designed and built automation panels, electrical panels, and VFD panels. Fully tested and commissioned to meet your specific project requirements.' },
  { icon: Wrench, title: 'HVAC Products', desc: 'Supply and installation of quality HVAC components including filters, valves, actuators, VRV units, blowers, and associated accessories.' },
  { icon: Monitor, title: 'Engineering Services', desc: 'Comprehensive engineering services including system design, consultancy, project execution, technical support, and site supervision.' },
  { icon: ClipboardCheck, title: 'AMC & CMC Services', desc: 'Annual Maintenance Contracts (AMC) and Comprehensive Maintenance Contracts (CMC) to ensure your systems operate at peak performance year-round.' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our Services" subtitle="Comprehensive building automation and energy management solutions" />

      {/* Core Services */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">Core Service Offerings</h2>
              <p className="section-subtitle mx-auto">Five pillars of our building automation expertise</p>
            </div>
          </ScrollReveal>
          <div className="space-y-16">
            {coreServices.map((S, i) => (
              <section key={S.id} id={S.id}>
                <ScrollReveal>
                  <div className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    <div className={i % 2 === 1 ? 'md:col-start-2' : ''}>
                      <div className="gradient-dark rounded-2xl p-8 md:p-10">
                        <S.icon className="w-12 h-12 text-[#8BC34A] mb-4" />
                        <h3 className="font-heading font-bold text-2xl text-white mb-4">{S.title}</h3>
                        <p className="text-green-200 leading-relaxed">{S.desc}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-[#0B3D24] mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {S.features.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#4CAF50] mt-0.5 shrink-0" />
                            <span className="text-gray-700">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Control & Monitoring */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">Advanced Control & Monitoring Solutions</h2>
              <p className="section-subtitle mx-auto">Complementary solutions that complete our comprehensive service portfolio</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedServices.map((S, i) => (
              <ScrollReveal key={S.title}>
                <div className="card h-full group hover:border-[#4CAF50]/30">
                  <S.icon className="w-10 h-10 text-[#4CAF50] mb-4" />
                  <h3 className="font-heading font-bold text-lg text-[#0B3D24] mb-2">{S.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{S.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-green-200 mb-8 max-w-2xl mx-auto">Our team will design a solution tailored to your facility&apos;s specific requirements</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Discuss Your Project <ArrowRight />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
