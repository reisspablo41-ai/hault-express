import Footer from '../Components/Footer';

export const metadata = {
  title: 'Customer Testimonials — Hault Express Delivery',
  description:
    'See what millions of customers say about Hault Express Delivery shipping, tracking, and logistics services.',
};

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'E-commerce Owner',
    location: 'United States',
    quote:
      'Hault Express Delivery completely transformed our fulfillment process. Packages arrive on time, tracking is flawless, and our customers are happier than ever.',
    rating: 5,
    initial: 'S',
    category: 'E-commerce',
  },
  {
    name: 'Marcus Chen',
    role: 'Small Business Owner',
    location: 'San Francisco, CA',
    quote:
      "The pet shipping service was exceptional. Our labrador made the journey safely and stress-free. The team's care and communication was outstanding.",
    rating: 5,
    initial: 'M',
    category: 'Pet Shipping',
  },
  {
    name: 'Amelia Torres',
    role: 'Operations Manager',
    location: 'Miami, FL',
    quote:
      "We've been using Hault Express Delivery for 3 years across our 5 locations. The reliability and competitive pricing makes it our go-to for all business shipping.",
    rating: 5,
    initial: 'A',
    category: 'Business',
  },
  {
    name: 'David Kim',
    role: 'Freelance Artist',
    location: 'Chicago, IL',
    quote:
      'Shipping my artwork internationally felt daunting until Hault Express Delivery. Careful handling, real-time tracking, and everything arrived in perfect condition.',
    rating: 5,
    initial: 'D',
    category: 'International',
  },
  {
    name: 'Priya Nair',
    role: 'Online Retailer',
    location: 'Austin, TX',
    quote:
      "The rates calculator saved us thousands per month. We switched our entire fulfillment to Hault Express Delivery and haven't looked back. Highly recommended.",
    rating: 5,
    initial: 'P',
    category: 'E-commerce',
  },
  {
    name: 'James Okafor',
    role: 'Restaurant Owner',
    location: 'Atlanta, GA',
    quote:
      'Needed to ship specialty ingredients across state lines on short notice. Hault Express Delivery had it there overnight, perfectly packaged. Lifesavers.',
    rating: 5,
    initial: 'J',
    category: 'Business',
  },
  {
    name: 'Linda Park',
    role: 'Moving Coordinator',
    location: 'Seattle, WA',
    quote:
      'We coordinate hundreds of interstate moves a year. Hault Express Delivery is our exclusive partner for fragile and high-value shipments. Zero incidents in two years.',
    rating: 5,
    initial: 'L',
    category: 'Freight',
  },
  {
    name: 'Carlos Mendez',
    role: 'Import/Export Manager',
    location: 'Los Angeles, CA',
    quote:
      'International customs can be a nightmare. The Hault Express Delivery team handled every document and cleared our shipments faster than any carrier we\'ve tried.',
    rating: 5,
    initial: 'C',
    category: 'International',
  },
  {
    name: 'Rachel Thompson',
    role: 'Veterinarian',
    location: 'Denver, CO',
    quote:
      "I regularly need to ship live specimens and sensitive medical samples. Hault Express Delivery's temperature-controlled options are second to none.",
    rating: 5,
    initial: 'R',
    category: 'Pet Shipping',
  },
  {
    name: 'Kevin Smith',
    role: 'Garage Owner',
    location: 'Detroit, MI',
    quote:
      'Shipping heavy auto parts used to be a logistics headache. Hault Express Delivery specializes in oversized freight and they have never missed a deadline.',
    rating: 5,
    initial: 'K',
    category: 'Freight',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Fashion Designer',
    location: 'Milan, Italy',
    quote:
      'Our seasonal collections need to reach global warehouses simultaneously. Hault Express Delivery provides the precision and care that luxury items demand.',
    rating: 5,
    initial: 'E',
    category: 'International',
  },
  {
    name: 'Simon Wright',
    role: 'Pet Breeder',
    location: 'United States',
    quote:
      'Exporting puppies internationally requires strict adherence to regulations. Hault Express Delivery handles the paperwork and climate control perfectly every time.',
    rating: 5,
    initial: 'S',
    category: 'Pet Shipping',
  },
  {
    name: 'Fatima Al-Sayed',
    role: 'Tech Consultant',
    location: 'Dubai, UAE',
    quote:
      'I frequently ship sensitive hardware across the Middle East. The real-time tracking and security protocols at Hault Express Delivery give me complete peace of mind.',
    rating: 5,
    initial: 'F',
    category: 'Business',
  },
  {
    name: 'George Miller',
    role: 'Antique Dealer',
    location: 'Boston, MA',
    quote:
      'Handling 18th-century furniture requires a delicate touch. Hault Express Delivery uses custom crating and white-glove service that is truly world-class.',
    rating: 5,
    initial: 'G',
    category: 'Freight',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Electronics Wholesaler',
    location: 'Tokyo, Japan',
    quote:
      'Consistency is key for our supply chain. Hault Express Delivery provides a reliable bridge between our manufacturing hubs and our global distribution centers.',
    rating: 5,
    initial: 'Y',
    category: 'E-commerce',
  },
  {
    name: 'Oliver Hudson',
    role: 'Dog Trainer',
    location: 'Vancouver, Canada',
    quote:
      'Relocating police dogs requires a high level of expertise. Hault Express Delivery understands the specific needs of working animals during long-haul transit.',
    rating: 5,
    initial: 'O',
    category: 'Pet Shipping',
  },
  {
    name: 'Sofia Rossi',
    role: 'Winery Manager',
    location: 'Florence, Italy',
    quote:
      'Distribution of our vintage reserves is sensitive to temperature and handling. Hault Express Delivery preserves the quality of our product throughout the journey.',
    rating: 5,
    initial: 'S',
    category: 'International',
  },
  {
    name: 'Thomas Berenson',
    role: 'Construction CEO',
    location: 'Dallas, TX',
    quote:
      'We often need heavy machinery parts delivered to remote sites. Hault Express Delivery manages the logistics and delivery to the most difficult-to-reach locations.',
    rating: 5,
    initial: 'T',
    category: 'Business',
  },
  {
    name: 'Isabella Grant',
    role: 'Jewelry Designer',
    location: 'Paris, France',
    quote:
      'Secure shipping for high-value items is non-negotiable. Hault Express Delivery offers insured, tracked, and discreet delivery options that I trust completely.',
    rating: 5,
    initial: 'I',
    category: 'International',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Logistics Analyst',
    location: 'Cairo, Egypt',
    quote:
      'Hault Express Delivery integrates seamlessly with our ERP systems. Their API and dashboard make managing thousands of shipments a breeze.',
    rating: 5,
    initial: 'A',
    category: 'E-commerce',
  },
  {
    name: 'Emily Watson',
    role: 'Rescue Coordinator',
    location: 'United States',
    quote:
      'International pet rescue is challenging. Hault Express Delivery helps us bring animals to their forever homes across borders with compassion and efficiency.',
    rating: 5,
    initial: 'E',
    category: 'Pet Shipping',
  },
  {
    name: 'Liam Peterson',
    role: 'Hardware Store Owner',
    location: 'Portland, OR',
    quote:
      'Local delivery used to be slow. Hault Express Delivery now handles our regional distribution, and our local customers love the same-day tracking updates.',
    rating: 5,
    initial: 'L',
    category: 'Business',
  },
  {
    name: 'Chloe Dubois',
    role: 'Luxury Retailer',
    location: 'Geneva, Switzerland',
    quote:
      'Our clients expect perfection. Hault Express Delivery ensures that the shipping experience is as premium as the products we sell.',
    rating: 5,
    initial: 'C',
    category: 'International',
  },
  {
    name: 'Noah Bennett',
    role: 'Heavy Machinery Dealer',
    location: 'United States',
    quote:
      'Moving tons of steel across the ocean is no small feat. Hault Express Delivery managed the entire maritime freight process with incredible precision.',
    rating: 5,
    initial: 'N',
    category: 'Freight',
  },
  {
    name: 'Ava Martinez',
    role: 'Coffee Roofer',
    location: 'Bogota, Colombia',
    quote:
      'Exporting fresh coffee beans requires speed to preserve aroma. Hault Express Delivery gets our product to roasters worldwide in record time.',
    rating: 5,
    initial: 'A',
    category: 'International',
  },
  {
    name: 'Lucas Kim',
    role: 'Toy Manufacturer',
    location: 'Seoul, South Korea',
    quote:
      'Peak season for toys is incredibly demanding. Hault Express Delivery scales with us every holiday, ensuring every child receives their gift on time.',
    rating: 5,
    initial: 'L',
    category: 'E-commerce',
  },
  {
    name: 'Mia Sullivan',
    role: 'Show Horse Owner',
    location: 'Lexington, KY',
    quote:
      'Shipping high-value horses requires specific climate and care. Hault Express Delivery provided a bespoke trailer and constant updates throughout the trip.',
    rating: 5,
    initial: 'M',
    category: 'Pet Shipping',
  },
  {
    name: 'Ethan Brooks',
    role: 'Solar Farm Developer',
    location: 'Phoenix, AZ',
    quote:
      'We needed thousands of panels delivered to a remote desert location. Hault Express Delivery coordinated the entire multi-stage logistics perfectly.',
    rating: 5,
    initial: 'E',
    category: 'Freight',
  },
  {
    name: 'Zoe Jenkins',
    role: 'Book Publisher',
    location: 'Toronto, Canada',
    quote:
      'Reliable distribution to bookstores is vital. Hault Express Delivery manages our inventory movements with a level of detail that is unmatched by others.',
    rating: 5,
    initial: 'Z',
    category: 'Business',
  },
  {
    name: 'Daniel Wu',
    role: 'Medical Lab Director',
    location: 'Singapore',
    quote:
      'Sensitive medical equipment requires specialized handling. Hault Express Delivery has the certifications and equipment to handle our most critical shipments.',
    rating: 5,
    initial: 'D',
    category: 'International',
  },
  {
    name: 'Grace Taylor',
    role: 'Wedding Planner',
    location: 'Savannah, GA',
    quote:
      'Destination weddings mean shipping delicate dresses and decor globally. Hault Express Delivery is my trusted partner for ensuring everything arrives flawlessly.',
    rating: 5,
    initial: 'G',
    category: 'Business',
  },
  {
    name: 'Henry Wilson',
    role: 'Industrial Parts Supplier',
    location: 'Birmingham, UK',
    quote:
      'Just-in-time manufacturing needs just-in-time delivery. Hault Express Delivery is the backbone of our supply chain, providing zero-delay service.',
    rating: 5,
    initial: 'H',
    category: 'Freight',
  },
  {
    name: 'Ivy Chen',
    role: 'Organic Food Supplier',
    location: 'Auckland, NZ',
    quote:
      'Perishable exports are a race against time. Hault Express Delivery’s cold chain logistics are the only ones I trust to get my products to Asia fresh.',
    rating: 5,
    initial: 'I',
    category: 'International',
  },
  {
    name: 'Jack Robinson',
    role: 'Auto Collector',
    location: 'Miami, FL',
    quote:
      'Shipping a vintage Ferrari across the country is stressful. Hault Express Delivery used an enclosed trailer and provided 24/7 video monitoring. Extraordinary.',
    rating: 5,
    initial: 'J',
    category: 'Freight',
  },
  {
    name: 'Katherine Lee',
    role: 'Subscription Box Founder',
    location: 'United States',
    quote:
      'Consistency and branding are key. Hault Express Delivery helps us deliver 10,000 boxes a month with a 99.9% on-time rate and impeccable packaging.',
    rating: 5,
    initial: 'K',
    category: 'E-commerce',
  },
  {
    name: 'Leo Maxwell',
    role: 'Exotic Pet Store Owner',
    location: 'Las Vegas, NV',
    quote:
      'Shipping rare reptiles requires very specific temperature and humidity. Hault Express Delivery is the only carrier I trust with such sensitive livestock.',
    rating: 5,
    initial: 'L',
    category: 'Pet Shipping',
  },
  {
    name: 'Maya Patel',
    role: 'Solar Tech Export',
    location: 'Mumbai, India',
    quote:
      'Our global infrastructure projects rely on Hault Express Delivery to get specialized equipment to remote sites across different continents efficiently.',
    rating: 5,
    initial: 'M',
    category: 'Business',
  },
  {
    name: 'Nolan Clarke',
    role: 'Renewable Energy CEO',
    location: 'Oslo, Norway',
    quote:
      'Shipping wind turbine components is a massive logistical challenge. Hault Express Delivery handled the oversized freight with precision and expertise.',
    rating: 5,
    initial: 'N',
    category: 'Freight',
  },
  {
    name: 'Olivia Martinez',
    role: 'Boutique Hotelier',
    location: 'Barcelona, Spain',
    quote:
      'Sourcing furniture from designers across Europe meant coordination was a nightmare. Hault Express Delivery consolidated everything perfectly for us.',
    rating: 5,
    initial: 'O',
    category: 'Business',
  },
];

const categoryColors = {
  'E-commerce': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Pet Shipping': 'bg-accent/10 text-accent border-accent/20',
  Business: 'bg-secondary/10 text-secondary border-secondary/20',
  International: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Freight: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
};

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-secondary fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/40 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="inline-block text-secondary text-xs font-semibold tracking-[0.3em] uppercase mb-4 border border-secondary/30 rounded-full px-4 py-1.5 bg-secondary/10">
            Customer Stories
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Trusted by Millions
            <br />
            <span className="text-secondary">Worldwide</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            From individual parcels to enterprise logistics, hear directly from
            the people who ship with Hault Express Delivery every day.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-primary-dark py-10 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 gap-6 text-center">
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '50,000+', label: 'Reviews' },
            { value: '98%', label: 'Would Recommend' },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-3xl font-bold text-secondary">{s.value}</p>
              <p className="text-white/40 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Category badge */}
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4 w-fit ${categoryColors[t.category] || 'bg-gray-100 text-gray-500'
                    }`}
                >
                  {t.category}
                </span>

                {/* Stars */}
                <StarRating count={t.rating} />

                {/* Quote */}
                <blockquote className="text-gray-600 text-sm leading-relaxed italic my-4 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="bg-secondary text-primary-dark font-bold text-base rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-primary font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">
                      {t.role} &middot; {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
