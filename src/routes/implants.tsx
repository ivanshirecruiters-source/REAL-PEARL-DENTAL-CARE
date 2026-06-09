import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { ChatAssistant } from '~/components/ChatAssistant'

export const Route = createFileRoute('/implants')({
  component: ImplantsPage,
})

function ImplantsPage() {
  const phone = "8799316600"
  const formattedPhone = "87993 16600"

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex-shrink-0 flex flex-col">
              <span className="text-brand-navy text-xl md:text-2xl font-serif font-bold tracking-tighter leading-none">
                REAL PEARL <span className="text-brand-gold">DENTAL CARE</span>
              </span>
            </Link>
            <div className="hidden md:flex space-x-8 items-center text-xs uppercase tracking-widest font-bold">
              <Link to="/" className="text-brand-navy hover:text-brand-gold transition-colors">Home</Link>
              <Link to="/" className="text-brand-navy hover:text-brand-gold transition-colors">Services</Link>
              <Link to="/aligners-and-braces" className="text-brand-navy hover:text-brand-gold transition-colors">Aligners & Braces</Link>
              <a href={`tel:${phone}`} className="text-brand-navy font-bold hover:text-brand-gold">{formattedPhone}</a>
              <Link to="/" className="btn-gold py-2 px-6 rounded-none">Book Now</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=2000" 
            alt="Dental Implant Restoration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <p className="text-brand-gold text-sm font-sans uppercase tracking-[0.4em] mb-4">Dental Implants</p>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
              Restore your smile with <br />
              <span className="text-brand-gold italic">dental</span> implants
            </h1>
            <p className="text-xl text-gray-200 mb-10 font-light leading-relaxed">
              Missing teeth affect your confidence, your bite and your overall health. Dental implants are the most natural, permanent solution — and Dr. Neetu Tanwani has placed hundreds of them successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-gold text-sm tracking-widest uppercase rounded-none px-10">Book a Consultation</button>
              <a href={`tel:${phone}`} className="btn-outline border-white text-white hover:bg-white hover:text-brand-navy text-sm tracking-widest uppercase rounded-none px-10">📞 Call Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Implant Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-gold text-sm font-sans uppercase tracking-[0.4em] mb-4">Implant options</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-navy mb-4">The right implant for you</h3>
            <p className="text-gray-500 max-w-2xl mx-auto">We offer all types of implant solutions — from a single missing tooth to full mouth restoration.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "SINGLE TOOTH IMPLANT", tag: "Most Common", desc: "Replace one missing tooth with a titanium implant and a natural-looking crown. The gold standard in tooth replacement." },
              { title: "IMPLANT-SUPPORTED BRIDGE", tag: "Multiple Teeth", desc: "Two implants support a bridge of 3 or more teeth — ideal when multiple adjacent teeth are missing." },
              { title: "ALL-ON-4 FULL ARCH", tag: "Full Restoration", desc: "A complete set of teeth supported by just 4 implants. The most effective solution for complete tooth loss." },
            ].map((option, idx) => (
              <div key={idx} className="bg-brand-light-gray p-10 border border-gray-100 relative group hover:border-brand-gold transition-all duration-500">
                <span className="absolute top-0 right-0 bg-brand-navy text-white text-[10px] uppercase tracking-widest px-4 py-1">{option.tag}</span>
                <h4 className="text-2xl font-serif text-brand-navy mb-6 uppercase tracking-wider leading-snug">{option.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">{option.desc}</p>
                <div className="w-12 h-[1px] bg-brand-gold group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Implants */}
      <section className="py-24 bg-brand-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-brand-gold text-sm font-sans uppercase tracking-[0.4em] mb-4">Why implants</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-brand-navy mb-8">Benefits of dental implants</h3>
              <p className="text-gray-600 mb-12">
                Unlike dentures or bridges, implants are a permanent solution that look, feel and function like natural teeth.
              </p>
              
              <div className="space-y-10">
                {[
                  { id: "01", title: "Look & feel natural", desc: "Custom-made crowns are matched to the colour and shape of your natural teeth — nobody will know the difference." },
                  { id: "02", title: "Last a lifetime", desc: "With proper care, dental implants can last 20–30 years or more. They are the most durable tooth replacement available." },
                  { id: "03", title: "Preserve jawbone", desc: "Implants stimulate the jawbone just like natural teeth, preventing bone loss that occurs with missing teeth over time." },
                  { id: "04", title: "No diet restrictions", desc: "Eat whatever you like — implants are just as strong as natural teeth. No removing them, no special cleaning required." },
                ].map(benefit => (
                  <div key={benefit.id} className="flex gap-6">
                    <span className="text-brand-gold font-serif text-2xl">{benefit.id}</span>
                    <div>
                      <h4 className="text-xl font-serif text-brand-navy mb-2">{benefit.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-navy p-10 text-white text-center flex flex-col justify-center border-b-4 border-brand-gold">
                <p className="text-5xl font-serif mb-2">98%</p>
                <p className="text-xs uppercase tracking-widest text-brand-gold">Success rate</p>
              </div>
              <div className="bg-white p-10 text-brand-navy text-center flex flex-col justify-center shadow-xl">
                <p className="text-5xl font-serif mb-2">20+</p>
                <p className="text-xs uppercase tracking-widest text-gray-400">Years lifespan</p>
              </div>
              <div className="col-span-2 aspect-video overflow-hidden">
                <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-2 bg-brand-gold p-6 text-white text-center">
                <p className="text-3xl font-serif mb-1">5★</p>
                <p className="text-xs uppercase tracking-widest">Patient rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-brand-gold text-sm font-sans uppercase tracking-[0.4em] mb-4">The process</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-16">What to expect</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { id: "01", title: "Consultation & X-ray", desc: "Dr. Neetu evaluates your bone density and takes digital X-rays to plan the placement." },
              { id: "02", title: "Implant Placement", desc: "A titanium post is placed under local anaesthesia — the procedure is virtually painless." },
              { id: "03", title: "Healing Period", desc: "The implant fuses with the bone over 6–12 weeks. A temporary crown may be placed." },
              { id: "04", title: "Crown Placement", desc: "Your custom-made permanent crown is fitted — and your new smile is complete!" },
            ].map(step => (
              <div key={step.id} className="relative">
                <div className="text-6xl font-serif text-brand-gold/10 absolute top-0 left-1/2 -translate-x-1/2 -z-0">{step.id}</div>
                <div className="relative z-10 pt-10 px-4">
                  <h4 className="text-xl font-serif mb-4 text-brand-gold">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-gold text-sm font-sans uppercase tracking-[0.4em] mb-4">Questions</h2>
            <h3 className="text-4xl font-serif text-brand-navy">Implant FAQs</h3>
          </div>
          <div className="space-y-4">
            {[
              "Are dental implants painful?",
              "How long does the implant process take?",
              "Am I a good candidate for implants?",
              "How much do dental implants cost?",
              "How do I care for my implants?"
            ].map((q, i) => (
              <div key={i} className="border-b border-gray-100 p-6 flex justify-between items-center cursor-pointer hover:bg-brand-light-gray transition-colors">
                <span className="font-serif text-lg text-brand-navy">{q}</span>
                <span className="text-brand-gold text-2xl">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-light-gray text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl md:text-5xl font-serif text-brand-navy mb-8">Ready to restore your smile?</h3>
          <p className="text-xl text-gray-500 mb-12 italic">Book a consultation with Dr. Neetu Tanwani and take the first step towards permanent teeth.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-gold rounded-none px-12 uppercase tracking-widest text-sm">Book Appointment</button>
            <a href={`tel:${phone}`} className="btn-outline border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-none px-12 uppercase tracking-widest text-sm">📞 Call Now</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-xl font-serif font-bold tracking-tighter mb-8 block uppercase">REAL PEARL DENTAL CARE</span>
          <div className="flex justify-center flex-wrap gap-8 mb-8 text-xs uppercase tracking-[0.2em] font-bold">
            <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <Link to="/" className="hover:text-brand-gold transition-colors">Services</Link>
            <Link to="/aligners-and-braces" className="hover:text-brand-gold transition-colors">Aligners & Braces</Link>
            <Link to="/" className="hover:text-brand-gold transition-colors">Book Now</Link>
            <a href="#" className="hover:text-brand-gold transition-colors">Instagram</a>
          </div>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">
            &copy; 2025 REAL PEARL DENTAL CARE, Ahmedabad.
          </p>
        </div>
      </footer>

      <ChatAssistant />
    </div>
  )
}
