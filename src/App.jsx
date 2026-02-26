import { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

// Reusable Button Component
const Button = ({ children, href, icon: Icon, primary = true }) => {
  return (
    <a
      href={href}
      className={`btn ${!primary ? 'bg-oatmeal text-ink border-2 border-ink' : ''}`}
    >
      {children}
      {Icon && <Icon className="btn-icon w-4 h-4" />}
    </a>
  )
}

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // SEO Injection
  useEffect(() => {
    document.title = "Leaf | The Mindful, Phone-First Book Reader App"
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = "description"
      document.head.appendChild(metaDescription)
    }
    metaDescription.content = "Discover leaf, the best vertical scroll e-reader iOS offers. A minimalist e-reader app acting as a true digital sanctuary for classics and deep focus."
  }, [])

  return (
    <>
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference text-[var(--color-oatmeal)]">
        <div className="font-serif text-2xl tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>leaf</div>
      </nav>

      {/* Hero Section */}
      <section className="section flex-col justify-center items-center text-center" style={{ minHeight: '100vh', display: 'flex', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-12)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>Reading, Reimagined<br />for the Thumb.</h1>
            <p style={{ margin: '0 auto var(--space-8)' }}>
              Enter a digital sanctuary built for deep contemplation. Experience a phone-first book reader that aligns with your natural cadence, offering pure silence for the thoughtful mind.
            </p>
            <Button href="#download" icon={ArrowRight}>Experience the Flow</Button>
          </motion.div>

          <motion.div
            style={{
              opacity,
              marginTop: 'var(--space-16)',
              marginInline: 'auto',
              width: '100%',
              maxWidth: '320px',
              aspectRatio: '9/19',
              background: 'rgba(255,255,255,0.4)',
              borderRadius: '3rem',
              border: '8px solid rgba(255,255,255,0.2)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'rgba(43,43,43,0.4)', padding: 'var(--space-4)' }}>
              (15s ambient loop of vertical glide)
            </span>
          </motion.div>
        </div>
      </section>

      {/* Core Problem */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.3)' }}>
        <div className="container flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <h2 className="text-center" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Why does mobile reading<br />feel so clunky?</h2>

            <div style={{ marginTop: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <p>For over a decade, digital reading has been constrained by an obsolete metaphor. We have forced physical skeuomorphic page turns onto vertical, modern glass screens.</p>
              <p>This friction interrupts the rhythm of prose, abruptly fracturing sentences mid-thought simply because they reached the bottom edge of a device. If you have been seeking a distracted reading app solution, the answer lies not in adding features, but in removing the artifice.</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--color-ink)', textAlign: 'center', marginTop: 'var(--space-8)' }}>
                It is time to read the way we naturally hold our phones.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="spacer-md"></div>

      {/* LeafEngine */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-12)', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Meet the LeafEngine:<br />Paging with Intention.</h2>
              <p>At the technical and philosophical heart of <i>leaf</i> is a custom text-chunking algorithm that respects the author's original rhythm.</p>
              <p>Rather than arbitrarily slicing a paragraph at the screen's edge, the LeafEngine ensures that every swipe ends strictly upon a completed thought or logical paragraph break. We call this "The First Breath"—the precise moment a page pauses right where your mind naturally rests.</p>
              <p style={{ color: 'var(--color-ink)', fontWeight: 500, paddingTop: 'var(--space-4)' }}>No mid-sentence fractures. Just pure, immersive flow.</p>
            </motion.div>

            {/* Mock Slider */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                background: 'rgba(255,255,255,0.5)',
                aspectRatio: '1',
                borderRadius: '1.5rem',
                border: '1px solid rgba(43,43,43,0.05)',
                display: 'flex',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ display: 'flex', width: '100%', height: '100%', padding: 'var(--space-6)', position: 'relative' }}>
                {/* Split */}
                <div style={{ width: '50%', paddingRight: 'var(--space-4)', opacity: 0.5, borderRight: '1px dashed rgba(43,43,43,0.2)' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--color-accent)' }}>Standard Reader</span>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', marginTop: 'var(--space-4)', marginBottom: 0 }}>...the mind is troubled by the thought of what is to come. And so we find ourselves constantly—</p>
                  <div style={{ borderBottom: '2px dashed #f87171', margin: 'var(--space-2) 0' }}></div>
                </div>
                <div style={{ width: '50%', paddingLeft: 'var(--space-4)' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--color-accent)' }}>LeafEngine</span>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)', color: 'var(--color-ink)' }}>...the mind is troubled by the thought of what is to come.</p>
                  <div style={{ borderBottom: '1px solid var(--color-accent)', width: '40px', marginBottom: 'var(--space-4)' }}></div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--color-ink)' }}>And so we find ourselves constantly seeking peace in external things...</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="spacer-md"></div>

      {/* The 3 Flows */}
      <section className="section">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-12)' }}
          >
            {[
              { title: "Glide", desc: "A smooth vertical slide with a gentle snap to logical paragraph breaks." },
              { title: "Leaf", desc: "A traditional page-curl animation that reduces screen motion and marks your progress." },
              { title: "Stream", desc: "Continuous, uninterrupted vertical flow, still subtly organized by the LeafEngine." }
            ].map((flow, i) => (
              <div key={i} className="flex-col items-center">
                <div style={{
                  width: '100%',
                  maxWidth: '260px',
                  aspectRatio: '9/16',
                  margin: '0 auto var(--space-6)',
                  background: 'rgba(255,255,255,0.4)',
                  borderRadius: '2rem',
                  border: '6px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.875rem', color: 'rgba(43,43,43,0.3)' }}>({flow.title} GIF)</span>
                </div>
                <h3>{flow.title}</h3>
                <p style={{ fontSize: '1rem', margin: '0 auto' }}>{flow.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="spacer-md"></div>

      {/* Aesthetic */}
      <section className="section" style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-oatmeal)' }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <h2 style={{ color: 'var(--color-white)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>A Quiet Place<br />for Great Thoughts.</h2>
            <div style={{ marginTop: 'var(--space-8)' }}>
              <p style={{ color: 'rgba(244, 241, 234, 0.8)' }}>True mindfulness requires absolute stillness. <i>leaf</i> is a minimalist e-reader app designed with total digital silence.</p>
              <p style={{ color: 'rgba(244, 241, 234, 0.8)' }}>There are no reading streaks. No algorithmic tracking. No advertisements. No noise. Your eyes are greeted by a meticulously curated typography pairing: Lexend Deca for pristine structural legibility, and Lora for elegant, editorial grace. All of this rests upon a warm, unobtrusive background.</p>
              <p style={{ color: 'var(--color-white)', marginTop: 'var(--space-6)' }}>With our hand-vetted LEAF Editions of timeless works—such as Marcus Aurelius's <i>Meditations</i>—this is not merely software. It is a digital sanctuary for classics.</p>
            </div>

            <div style={{
              marginTop: 'var(--space-16)',
              height: '300px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'rgba(244, 241, 234, 0.4)' }}>(Shelf of curated classics screenshot)</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="spacer-md"></div>

      {/* Founder */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ maxWidth: '600px', margin: '0 auto', borderLeft: '2px solid rgba(139, 115, 85, 0.3)', paddingLeft: 'var(--space-8)' }}
          >
            <h2>Built by a single reader,<br />in Melbourne.</h2>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginTop: 'var(--space-6)' }}>
              <p>leaf was not engineered in a boardroom. It was crafted by hand, born out of a personal frustration with the noise and friction of modern digital reading.</p>
              <p>I desired a space that revered the written word—a mindful reading app and pocket-sized retreat tailored to the cadence of great literature. It was built with absolute intent for those who seek depth over distraction.</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 'var(--space-6)', color: 'var(--color-ink)' }}>
                — From the Developer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="spacer-md"></div>

      {/* Final CTA */}
      <section id="download" className="section" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'linear-gradient(to bottom, var(--color-oatmeal), #ffffff)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Transform your device.<br />Rediscover deep reading.</h2>
            <div style={{ marginTop: 'var(--space-8)' }}>
              <Button href="#" icon={Download}>Download leaf (It's Free)</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer style={{ padding: 'var(--space-8) 0', textAlign: 'center', background: '#ffffff', color: 'rgba(43,43,43,0.4)', fontSize: '0.875rem' }}>
        <p>© {new Date().getFullYear()} Leaf. Made with intent in Melbourne.</p>
      </footer>
    </>
  )
}

export default App
