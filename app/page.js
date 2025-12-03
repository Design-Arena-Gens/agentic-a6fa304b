'use client'

export default function Home() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        * {
          box-sizing: border-box;
        }
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          margin: 0;
          padding: 0;
        }
      `}</style>
      <div style={styles.container}>

      {/* Hero Section */}
      <section style={styles.hero}>
        <nav style={styles.nav}>
          <div style={styles.logo}>AI WebDev</div>
          <div style={styles.navLinks}>
            <a href="#services" style={styles.navLink}>Services</a>
            <a href="#features" style={styles.navLink}>Features</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </div>
        </nav>

        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Build Your Future with <span style={styles.gradient}>AI-Powered</span> Websites
          </h1>
          <p style={styles.heroSubtitle}>
            Transform your business with intelligent, responsive, and cutting-edge web solutions.
            Harness the power of artificial intelligence to create websites that adapt, learn, and grow.
          </p>
          <div style={styles.ctaButtons}>
            <a href="#contact" style={styles.primaryButton}>Get Started</a>
            <a href="#services" style={styles.secondaryButton}>Learn More</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={styles.features}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Why Choose AI-Powered Development?</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <div style={styles.icon}>🤖</div>
              <h3 style={styles.cardTitle}>AI Integration</h3>
              <p style={styles.cardText}>
                Seamlessly integrate chatbots, recommendation engines, and intelligent automation into your website.
              </p>
            </div>
            <div style={styles.card}>
              <div style={styles.icon}>⚡</div>
              <h3 style={styles.cardTitle}>Lightning Fast</h3>
              <p style={styles.cardText}>
                Optimized performance with AI-driven code optimization and intelligent caching strategies.
              </p>
            </div>
            <div style={styles.card}>
              <div style={styles.icon}>📱</div>
              <h3 style={styles.cardTitle}>Responsive Design</h3>
              <p style={styles.cardText}>
                Pixel-perfect designs that adapt beautifully across all devices and screen sizes.
              </p>
            </div>
            <div style={styles.card}>
              <div style={styles.icon}>🔒</div>
              <h3 style={styles.cardTitle}>Secure & Scalable</h3>
              <p style={styles.cardText}>
                Enterprise-grade security with AI-powered threat detection and automatic scaling.
              </p>
            </div>
            <div style={styles.card}>
              <div style={styles.icon}>🎨</div>
              <h3 style={styles.cardTitle}>AI-Generated Content</h3>
              <p style={styles.cardText}>
                Leverage AI for dynamic content generation, personalization, and user experiences.
              </p>
            </div>
            <div style={styles.card}>
              <div style={styles.icon}>📊</div>
              <h3 style={styles.cardTitle}>Smart Analytics</h3>
              <p style={styles.cardText}>
                AI-powered insights and predictive analytics to understand your users better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={styles.services}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Services</h2>
          <div style={styles.serviceGrid}>
            <div style={styles.serviceCard}>
              <h3 style={styles.serviceTitle}>AI Chatbot Development</h3>
              <p style={styles.serviceText}>
                Intelligent conversational interfaces that understand context, learn from interactions,
                and provide 24/7 customer support.
              </p>
              <ul style={styles.serviceList}>
                <li>Natural Language Processing</li>
                <li>Multi-language Support</li>
                <li>Custom Training & Integration</li>
                <li>Analytics Dashboard</li>
              </ul>
            </div>
            <div style={styles.serviceCard}>
              <h3 style={styles.serviceTitle}>Smart Web Applications</h3>
              <p style={styles.serviceText}>
                Full-stack web applications with AI capabilities including recommendation systems,
                predictive analytics, and automated workflows.
              </p>
              <ul style={styles.serviceList}>
                <li>Custom AI Models</li>
                <li>Real-time Processing</li>
                <li>API Integration</li>
                <li>Cloud Deployment</li>
              </ul>
            </div>
            <div style={styles.serviceCard}>
              <h3 style={styles.serviceTitle}>E-Commerce AI Solutions</h3>
              <p style={styles.serviceText}>
                Transform your online store with personalized shopping experiences, dynamic pricing,
                and intelligent inventory management.
              </p>
              <ul style={styles.serviceList}>
                <li>Product Recommendations</li>
                <li>Visual Search</li>
                <li>Price Optimization</li>
                <li>Customer Insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section style={styles.techStack}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Technologies We Use</h2>
          <div style={styles.techGrid}>
            <div style={styles.techItem}>Next.js</div>
            <div style={styles.techItem}>React</div>
            <div style={styles.techItem}>OpenAI</div>
            <div style={styles.techItem}>TensorFlow</div>
            <div style={styles.techItem}>Python</div>
            <div style={styles.techItem}>Node.js</div>
            <div style={styles.techItem}>PostgreSQL</div>
            <div style={styles.techItem}>AWS</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contact}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Ready to Build Something Amazing?</h2>
          <p style={styles.contactSubtitle}>
            Let's discuss how AI can transform your web presence
          </p>
          <div style={styles.contactForm}>
            <input type="text" placeholder="Your Name" style={styles.input} />
            <input type="email" placeholder="Your Email" style={styles.input} />
            <input type="text" placeholder="Company Name" style={styles.input} />
            <textarea placeholder="Tell us about your project..." style={styles.textarea} rows="5"></textarea>
            <button style={styles.submitButton}>Send Message</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2024 AI WebDev. All rights reserved. | Powered by AI Technology</p>
      </footer>
      </div>
    </>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
  },
  hero: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '0 20px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 0',
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
  },
  logo: {
    fontSize: '24px',
    fontWeight: '800',
    letterSpacing: '-0.5px',
  },
  navLinks: {
    display: 'flex',
    gap: '30px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'opacity 0.2s',
    opacity: 0.9,
  },
  heroContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 20px',
  },
  heroTitle: {
    fontSize: '64px',
    fontWeight: '800',
    lineHeight: '1.2',
    marginBottom: '24px',
    letterSpacing: '-2px',
  },
  gradient: {
    background: 'linear-gradient(135deg, #ffd89b 0%, #19547b 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroSubtitle: {
    fontSize: '20px',
    lineHeight: '1.6',
    marginBottom: '40px',
    opacity: 0.95,
    maxWidth: '700px',
  },
  ctaButtons: {
    display: 'flex',
    gap: '20px',
  },
  primaryButton: {
    padding: '16px 40px',
    fontSize: '18px',
    fontWeight: '700',
    background: '#fff',
    color: '#667eea',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  },
  secondaryButton: {
    padding: '16px 40px',
    fontSize: '18px',
    fontWeight: '700',
    background: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
    borderRadius: '50px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'transform 0.2s, background 0.2s',
  },
  features: {
    background: '#fff',
    color: '#333',
    padding: '100px 20px',
  },
  sectionTitle: {
    fontSize: '48px',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: '60px',
    letterSpacing: '-1px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
  },
  icon: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '16px',
  },
  cardText: {
    fontSize: '16px',
    lineHeight: '1.6',
    opacity: 0.95,
  },
  services: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '100px 20px',
  },
  serviceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  serviceCard: {
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    padding: '40px',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.2)',
  },
  serviceTitle: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '16px',
  },
  serviceText: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '24px',
    opacity: 0.9,
  },
  serviceList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  techStack: {
    background: '#fff',
    color: '#333',
    padding: '100px 20px',
  },
  techGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  techItem: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    padding: '24px',
    borderRadius: '12px',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: '700',
  },
  contact: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '100px 20px',
  },
  contactSubtitle: {
    fontSize: '20px',
    textAlign: 'center',
    marginBottom: '40px',
    opacity: 0.9,
  },
  contactForm: {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  input: {
    padding: '16px 24px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.9)',
    color: '#333',
  },
  textarea: {
    padding: '16px 24px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.9)',
    color: '#333',
    resize: 'vertical',
    fontFamily: 'inherit',
  },
  submitButton: {
    padding: '16px 40px',
    fontSize: '18px',
    fontWeight: '700',
    background: '#fff',
    color: '#667eea',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  },
  footer: {
    background: 'rgba(0,0,0,0.2)',
    padding: '40px 20px',
    textAlign: 'center',
    color: '#fff',
  },
}
