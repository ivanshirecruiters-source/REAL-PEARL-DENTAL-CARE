import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { ChatAssistant } from '~/components/ChatAssistant'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const createAppointment = useMutation(api.appointments.create)

  const handleBooking = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    try {
      await createAppointment({
        name: formData.get('name') as string,
        phone: formData.get('phone') as string,
        email: 'neetubhimani@yahoo.com', // fallback or hidden
        treatment: formData.get('service') as string,
        preferredDate: new Date().toISOString(),
        preferredTime: 'Asap',
        message: formData.get('message') as string,
      })
      setSubmitted(true)
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const phone = "8799316600"
  const formattedPhone = "87993 16600"

  return (
    <div className="min-h-screen font-sans text-brand-navy">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex-shrink-0 flex flex-col">
              <span className="text-brand-navy text-xl md:text-2xl font-serif font-bold tracking-tighter leading-none">
                REAL PEARL <span className="text-brand-gold">DENTAL CARE</span>
              </span>
              <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase">Ahmedabad</span>
            </Link>
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="text-brand-navy hover:text-brand-gold font-medium transition-colors text-sm uppercase tracking-wider">Home</Link>
              <div className="group relative">
                <button className="text-brand-navy hover:text-brand-gold font-medium transition-colors text-sm uppercase tracking-wider flex items-center gap-1">
                  Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-2 border-brand-gold">
                  <Link to="/aligners-and-braces" className="block px-6 py-4 hover:bg-brand-light-gray text-sm border-b border-gray-50">Aligners & Braces</Link>
                  <Link to="/implants" className="block px-6 py-4 hover:bg-brand-light-gray text-sm border-b border-gray-50">Dental Implants</Link>
                  <Link to="/" className="block px-6 py-4 hover:bg-brand-light-gray text-sm border-b border-gray-50">Smile Makeovers</Link>
                  <Link to="/" className="block px-6 py-4 hover:bg-brand-light-gray text-sm">Root Canal Treatment</Link>
                </div>
              </div>
              <a href={`tel:${phone}`} className="text-brand-navy font-bold hover:text-brand-gold">{formattedPhone}</a>
              <Link to="/" className="btn-gold py-2 px-6 rounded-none text-xs tracking-[0.2em] uppercase">Book Appointment</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606811841660-1b51e9fd279b?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Dental Clinic" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
              Premium Dental Care for <br />
              <span className="text-brand-gold italic">Healthy, Confident</span> Smiles
            </h1>
            <p className="text-xl text-gray-200 mb-10 font-light leading-relaxed max-w-lg">
              Advanced Dentistry, Personalized Care, and Beautiful Results in Ahmedabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-gold text-sm tracking-widest uppercase rounded-none px-10">Book Appointment</button>
              <a href={`https://wa.me/91${phone}`} className="btn-outline border-white text-white hover:bg-white hover:text-brand-navy text-sm tracking-widest uppercase rounded-none px-10">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 items-start mb-20">
            <div className="lg:col-span-1">
              <h2 className="text-brand-gold text-sm font-sans uppercase tracking-[0.4em] mb-4">Our Services</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-brand-navy mb-6">What we offer</h3>
              <p className="text-gray-600 leading-relaxed">
                From routine cleanings to full smile makeovers, we provide complete care under one roof with the latest technology.
              </p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { id: "01", title: "General Dentistry", desc: "Routine check-ups, cleanings, fillings, and preventive care to keep your teeth healthy long-term." },
                { id: "02", title: "Teeth Whitening", desc: "Professional-grade whitening treatments that deliver noticeably brighter smiles in a single session." },
                { id: "03", title: "Dental Implants", desc: "Permanent, natural-looking tooth replacements that restore both function and confidence.", link: "/implants" },
                { id: "04", title: "Clear Aligners / Invisible Braces", desc: "Straighten teeth discreetly with comfortable, removable clear aligners — no metal, no hassle.", link: "/aligners-and-braces" },
                { id: "05", title: "Cosmetic Dentistry", desc: "Veneers, bonding, and smile design to give you the exact aesthetic result you've envisioned." },
                { id: "06", title: "Root Canal Treatment", desc: "Modern, virtually painless root canal treatments that save teeth and relieve severe discomfort." },
              ].map((service) => (
                <div key={service.id} className="group border-b border-gray-100 pb-8">
                  <span className="text-brand-gold font-serif text-xl mb-4 block">{service.id}</span>
                  <h4 className="text-xl font-serif text-brand-navy mb-3 group-hover:text-brand-gold transition-colors">{service.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                  {service.link && (
                    <Link to={service.link} className="text-brand-gold text-xs uppercase tracking-widest font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                      Read More <span className="text-lg">→</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-light-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-brand-gold text-sm font-sans uppercase tracking-[0.4em] mb-4">The Real Pearl Difference</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-brand-navy mb-8 leading-tight">
                Care that feels different from the first visit
              </h3>
              <p className="text-lg text-gray-600 mb-12">
                Led by Dr. Neetu Tanwani — 15+ years of experience — with over 18 years of trusted dental practice.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-10">
                {[
                  { id: "01", title: "Experienced specialists", desc: "Dr. Neetu Tanwani and our team of qualified dentists bring 18+ years of collective expertise." },
                  { id: "02", title: "State-of-the-art technology", desc: "Digital X-rays and 3D scanning for precise, minimal-discomfort treatments." },
                  { id: "03", title: "Transparent pricing", desc: "No hidden costs. We discuss every treatment plan and cost upfront." },
                  { id: "04", title: "Child-friendly environment", desc: "A warm, welcoming clinic designed to make dental visits stress-free for all ages." },
                ].map(item => (
                  <div key={item.id}>
                    <span className="text-brand-gold font-serif text-lg mb-2 block">{item.id}</span>
                    <h4 className="font-bold text-brand-navy mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-200 pt-10">
                <div>
                  <p className="text-4xl font-serif text-brand-navy">18+</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">Years in Practice</p>
                </div>
                <div>
                  <p className="text-4xl font-serif text-brand-navy">12k+</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">Patients Treated</p>
                </div>
                <div>
                  <p className="text-4xl font-serif text-brand-navy text-brand-gold">5★</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">Google Rating</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-200 rounded-none overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
                  alt="Dr. Neetu Tanwani at Clinic" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 border-[20px] border-white -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-gold -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-gold text-sm font-sans uppercase tracking-[0.4em] mb-4">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-navy mb-4">See our Google Reviews</h3>
            <div className="flex justify-center gap-1 text-brand-gold mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="text-gray-500 uppercase tracking-widest text-xs">4.9 Average Rating (1,200+ Reviews)</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rahul Sharma", text: "Dr. Neetu is incredibly professional. My implant procedure was painless and the result is perfect. Highly recommended for premium dental care.", rating: 5 },
              { name: "Priya Patel", text: "The best dental clinic in Ahmedabad. They use the latest technology and the environment is so relaxing. My teeth whitening results were amazing!", rating: 5 },
              { name: "Anish Shah", text: "Very happy with my clear aligners treatment. Minimal discomfort and Dr. Neetu monitored my progress personally at every step.", rating: 5 },
              { name: "Megha Gupta", text: "Excellent experience for my kids. The staff is very friendly and makes the children feel safe. No more dental fear!", rating: 5 },
              { name: "Vikram Mehta", text: "Truly world-class service. From the reception to the treatment room, everything is luxurious and medically professional.", rating: 5 },
            ].map((review, i) => (
              <div key={i} className="bg-brand-light-gray p-8 relative">
                <div className="text-brand-gold text-5xl font-serif absolute top-4 right-8 opacity-20">“</div>
                <div className="flex gap-1 mb-4 text-brand-gold">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                <p className="font-bold text-brand-navy">{review.name}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Verified Patient</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-gold text-sm font-sans uppercase tracking-[0.4em] mb-4">Got Questions?</h2>
            <h3 className="text-4xl md:text-5xl font-serif">Frequently asked questions</h3>
          </div>

          <div className="space-y-4">
            {[
              { q: "Is the treatment painful?", a: "We use the latest anaesthesia techniques to ensure virtually painless treatments. Most patients are surprised at how comfortable their experience is. Dr. Neetu Tanwani is known for her gentle, patient-first approach." },
              { q: "How long does a typical appointment take?", a: "A routine check-up takes about 30–45 minutes. Procedures like fillings or cleanings take 45–60 minutes. More complex treatments like implants or aligners are discussed in detail during your first consultation." },
              { q: "How do clear aligners / invisible braces work?", a: "Clear aligners are custom-made transparent trays that gradually shift your teeth into the correct position. They are removable, comfortable and virtually invisible. Dr. Neetu will monitor your progress at regular check-ins." },
              { q: "How much do dental implants cost?", a: "The cost of implants varies depending on the number of teeth and complexity of the case. We provide a transparent, detailed cost breakdown during your consultation — no hidden charges." },
              { q: "How often should I visit the dentist?", a: "We recommend visiting every 6 months for a routine check-up and cleaning. Regular visits help catch problems early and keep your smile healthy long-term." },
              { q: "Is the clinic suitable for children?", a: "Absolutely! We have a warm, child-friendly environment. Dr. Neetu is experienced with young patients and ensures every child feels safe and comfortable during their visit." },
              { q: "Do you handle dental emergencies?", a: "Yes! We handle dental emergencies. If you have severe tooth pain, a broken tooth or any urgent dental issue, call us immediately at 87993 16600." },
            ].map((item, i) => (
              <div key={i} className="border border-white/10 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium text-lg">{item.q}</span>
                  <span className={`text-2xl text-brand-gold transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-8 pt-0 text-gray-400 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="py-24 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-brand-gold text-sm font-sans uppercase tracking-[0.4em] mb-4">Contact Us</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-brand-navy mb-8">Book your appointment</h3>
              <p className="text-gray-600 mb-12">
                Ready for a healthier smile? Fill out the form and we'll confirm your slot within 24 hours.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Phone</p>
                  <a href={`tel:${phone}`} className="text-2xl font-serif text-brand-navy hover:text-brand-gold transition-colors">{formattedPhone}</a>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Email</p>
                  <a href="mailto:neetubhimani@yahoo.com" className="text-2xl font-serif text-brand-navy hover:text-brand-gold transition-colors">neetubhimani@yahoo.com</a>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Address</p>
                  <p className="text-xl font-serif text-brand-navy leading-relaxed">
                    Shop-6, Shree Ratna Apt., Opp. Maple Tree,<br />
                    Thaltej, Ahmedabad, Gujarat 380054
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-light-gray p-10 shadow-sm border border-gray-100">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="text-2xl font-serif text-brand-navy mb-2">Request Received</h4>
                  <p className="text-gray-500">We will confirm your slot within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-brand-gold text-xs uppercase tracking-widest font-bold">Send another request</button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleBooking}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Name</label>
                      <input name="name" required className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-brand-gold text-sm" placeholder="Your Name" />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                      <input name="phone" required className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-brand-gold text-sm" placeholder="Your Phone Number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Service Interest</label>
                    <select name="service" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-brand-gold text-sm">
                      <option>Select a Service</option>
                      <option>Clear Aligners</option>
                      <option>Dental Implants</option>
                      <option>Teeth Whitening</option>
                      <option>Root Canal Treatment</option>
                      <option>General Checkup</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Message</label>
                    <textarea name="message" rows={4} className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-brand-gold text-sm" placeholder="Tell us about your dental needs"></textarea>
                  </div>
                  <button disabled={isSubmitting} className="w-full btn-gold py-4 rounded-none text-sm tracking-[0.2em] uppercase disabled:opacity-50">
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <span className="text-2xl font-serif font-bold tracking-tight mb-6 block">
                REAL PEARL <span className="text-brand-gold">DENTAL CARE</span>
              </span>
              <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                Ahmedabad's premier dental clinic for luxury aesthetic and restorative treatments. Dedicated to your perfect smile.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all duration-300">IG</a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all duration-300">FB</a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all duration-300">YT</a>
              </div>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-6 text-brand-gold">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
                <li><Link to="/aligners-and-braces" className="hover:text-brand-gold transition-colors">Aligners & Braces</Link></li>
                <li><Link to="/implants" className="hover:text-brand-gold transition-colors">Dental Implants</Link></li>
                <li><Link to="/" className="hover:text-brand-gold transition-colors">Book Appointment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-6 text-brand-gold">Contact</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold font-bold italic">A</span>
                  <span>Thaltej, Ahmedabad, India 380054</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold font-bold italic">T</span>
                  <a href={`tel:${phone}`} className="hover:text-brand-gold transition-colors">{formattedPhone}</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold font-bold italic">E</span>
                  <a href="mailto:neetubhimani@yahoo.com" className="hover:text-brand-gold transition-colors text-xs">neetubhimani@yahoo.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[10px] uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} REAL PEARL DENTAL CARE, Ahmedabad.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
        <a 
          href={`tel:${phone}`} 
          className="bg-brand-navy text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border border-brand-gold"
          title="Call Now"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        </a>
        <a 
          href={`https://wa.me/91${phone}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border border-white/20"
          title="WhatsApp Us"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>

      <ChatAssistant />
    </div>
  )
}
