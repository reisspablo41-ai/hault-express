import Link from 'next/link';
import Image from 'next/image';
import {
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';
import NewsletterForm from './NewsLetter';

const footerLinks = [
  {
    heading: 'Services',
    links: [
      { label: 'Ship a Package', href: '/ship/sending-package' },
      { label: 'Track Shipment', href: '/Track' },
      { label: 'Schedule Pickup', href: '/dashboard/schedule-package-delivery' },
      { label: 'Pet Shipping', href: '/ContactUs' },
      { label: 'Rates Calculator', href: '/' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Hault Express Delivery', href: '/about-citizen-cargo' },
      { label: 'Newsroom', href: '/newsroom' },
      { label: 'Service Alerts', href: '/service-alerts' },
      { label: 'Business Solutions', href: '/buisness/weekend-pickup-deliveries' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Contact Us', href: '/ContactUs' },
      { label: 'FAQs', href: '/Faqs' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'File a Claim', href: '/ContactUs/FileClaim' },
      { label: 'Accessibility', href: '/accessibility-statement' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Requirements & Policies', href: '/shipment-protection-handling-policy' },
      { label: 'Terms of Use', href: '/terms-of-use' },
    ],
  },
];

const socials = [
  {
    Icon: FaFacebook,
    href: 'https://wwww.facebook.com/share/1E2yHUswVX/?mibextid=wwXIfr',
  },
  { Icon: FaInstagram, href: '#' },
  { Icon: FaTwitter, href: '#' },
  { Icon: FaLinkedin, href: '#' },
];

function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid md:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/">
              <Image
                src="/hault-logo.png"
                width={120}
                height={50}
                alt="Hault Express Delivery"
                className="mb-4"
                unoptimized
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Premium global shipping and logistics solutions trusted by
              millions. Fast, reliable, and always trackable.
            </p>
            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="w-9 h-9 bg-white/8 hover:bg-secondary hover:text-primary-dark rounded-lg flex items-center justify-center transition-all duration-300 border border-white/10"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  <Icon className="text-sm" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((col, i) => (
            <div key={i} className="border-t border-white/10 pt-6 md:border-0 md:pt-0">
              <p className="text-white font-semibold text-xs mb-5 uppercase tracking-widest pb-2 border-b border-white/10">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-white/40 hover:text-secondary text-sm transition-colors duration-200"
                    >
                      <FiArrowRight className="text-xs opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter strip */}
      <div className="border-t border-white/8" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-white font-semibold mb-1">Stay in the loop</p>
              <p className="text-white/40 text-sm">
                Get shipping tips, service updates, and exclusive offers.
              </p>
            </div>
            <div className="md:w-96 flex-shrink-0">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Hault Express Delivery. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:haultexpressdelivery@gmail.com"
              className="flex items-center gap-2 text-white/30 hover:text-white/60 text-xs transition-colors"
            >
              <MdEmail className="text-secondary" />
              haultexpressdelivery@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
