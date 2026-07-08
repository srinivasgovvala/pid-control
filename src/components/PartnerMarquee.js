'use client'

const partnerLogos = [
  { src: '/images/company1.png', alt: 'Siemens partner' },
  { src: '/images/company2.png', alt: 'Schneider Electric partner' },
  { src: '/images/company3.png', alt: 'ABB partner' },
  { src: '/images/company4.png', alt: 'Honeywell partner' },
  { src: '/images/company5.png', alt: 'Trend partner' },
  { src: '/images/company6.png', alt: 'Belimo partner' },
  { src: '/images/company7.png', alt: 'Dwyer partner' },
  { src: '/images/company8.png', alt: 'Vykon by Tridium partner' },
  { src: '/images/company9.png', alt: 'iSMA Controlli partner' },
]

export default function PartnerMarquee() {
  return (
    <div className="partner-marquee-container">
      <div className="partner-marquee-track">
        {[...partnerLogos, ...partnerLogos].map((logo, i) => (
          <div key={i} className="partner-logo-cell">
            <img src={logo.src} alt={logo.alt} className="partner-logo-img" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}
