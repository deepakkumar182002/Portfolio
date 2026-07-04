import { useRef, useState } from 'react';
import useRevealAnimation from '../hooks/useRevealAnimation';

const CONTACT_ITEMS = [
  { icon: 'mail', title: 'Email', content: <a href="mailto:kumar041232@gmail.com" style={{ color: 'var(--text)' }}>kumar041232@gmail.com</a> },
  { icon: 'phone', title: 'Phone', content: <a href="tel:+918273243959" style={{ color: 'var(--text)' }}>+91 82732 43959</a> },
  { icon: 'message-square', title: 'WhatsApp', content: <a href="https://wa.me/918273243959" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)' }}>+91 82732 43959</a> },
  { icon: 'map-pin', title: 'Address', content: 'Agra 282007, Uttar Pradesh, India' },
  { icon: 'clock', title: 'Availability', content: 'Mon–Sat, 9:00 AM – 7:00 PM (IST)' },
];

const FAQS = [
  { q: 'How long does a project take?', a: 'It depends on scope — a simple website takes 1–2 weeks, while complex apps can take 2–4 months. I will provide a clear timeline in the proposal.' },
  { q: 'Do you offer revisions?', a: "Yes — all projects include revision rounds at each milestone. I work until you're satisfied with the result." },
  { q: 'What payment methods do you accept?', a: 'I accept bank transfer, UPI, and international payments via Wise or PayPal. I work on a milestone-based payment plan.' },
  { q: 'Do you provide post-launch support?', a: 'Yes — I offer a free 30-day support period after launch, and ongoing maintenance packages for clients who need continued assistance.' },
  { q: 'Can I hire you for just design (no development)?', a: 'Absolutely. I provide standalone UI/UX design, logo design, and graphics services independently of development work.' },
  { q: 'How do we communicate during a project?', a: 'You can reach me via WhatsApp, email, or a project management tool like Notion or Trello — whatever works best for you. Regular updates are guaranteed.' },
];

export default function Contact() {
  useRevealAnimation();
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: null, message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const formData = new FormData(form);
      formData.append('_subject', 'New Project Inquiry - Kamwale.tech');
      formData.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/ajax/kumar041232@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      const result = await response.json();
      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error(result.message || 'Unable to send message right now.');
      }

      form.reset();
      setStatus({ type: 'success', message: '✓ Thank you! I have received your message and will contact you within 24 hours.' });
      setTimeout(() => setStatus({ type: null, message: '' }), 5000);
    } catch (err) {
      const fname = form.fname?.value || '';
      const lname = form.lname?.value || '';
      const fallbackBody = [
        `Name: ${fname} ${lname}`.trim(),
        `Email: ${form.email?.value || ''}`,
        `Phone: ${form.phone?.value || ''}`,
        `Service: ${form.service?.value || ''}`,
        `Budget: ${form.budget?.value || ''}`,
        '',
        'Project Details:',
        form.message?.value || '',
      ].join('\n');

      const mailtoUrl = `mailto:kumar041232@gmail.com?subject=${encodeURIComponent('New Project Inquiry - Kamwale.tech')}&body=${encodeURIComponent(fallbackBody)}`;

      setStatus({ type: 'error', message: 'Direct submit failed. Opening your email app with a pre-filled message.' });
      window.location.href = mailtoUrl;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ══ PAGE HERO ════════════════════════════════════════ */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Get In Touch</span>
          <h1>Let's Discuss Your<br />Project</h1>
          <p style={{ maxWidth: 500, marginTop: 16 }}>
            Share your project details. I typically respond within 24 hours and
            provide a free initial consultation for new inquiries.
          </p>
        </div>
      </section>

      {/* ══ CONTACT SECTION ══════════════════════════════════ */}
      <section style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="contact-layout">
            {/* LEFT: Info */}
            <div>
              <h3>Contact Information</h3>
              <p>Reach me through any channel below, or use the form and I will get back to you shortly.</p>

              {CONTACT_ITEMS.map((item) => (
                <div className="contact-item reveal" key={item.title}>
                  <div className="contact-item-icon">
                    <img src={`https://cdn.jsdelivr.net/npm/lucide-static@0.344.0/icons/${item.icon}.svg`} alt={item.title} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 36 }}>
                <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text)', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Connect
                </p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <a href="https://www.linkedin.com/in/deepakkumar2244/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ background: 'var(--bg-soft)', border: '1px solid var(--border)', color: 'var(--text-muted)' }} title="LinkedIn">in</a>
                  <a href="#" className="social-icon" style={{ background: 'var(--bg-soft)', border: '1px solid var(--border)', color: 'var(--text-muted)' }} title="Twitter/X">𝕏</a>
                  <a href="#" className="social-icon" style={{ background: 'var(--bg-soft)', border: '1px solid var(--border)', color: 'var(--text-muted)' }} title="Instagram">ig</a>
                  <a href="https://github.com/deepakkumar182002" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ background: 'var(--bg-soft)', border: '1px solid var(--border)', color: 'var(--text-muted)' }} title="GitHub">gh</a>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="contact-form-card reveal">
              <h3>Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fname">First Name *</label>
                    <input type="text" id="fname" name="fname" placeholder="Deepak" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lname">Last Name *</label>
                    <input type="text" id="lname" name="lname" placeholder="Kumar" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" placeholder="name@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Needed *</label>
                  <select id="service" name="service" defaultValue="" required>
                    <option value="" disabled>Select a service…</option>
                    <option value="website">Static Website Development</option>
                    <option value="dynamic">Dynamic Website Development</option>
                    <option value="custom">Custom Website Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="admin">Admin Panel / Dashboard</option>
                    <option value="crms">CRMS Development</option>
                    <option value="erp">Company ERP Development</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Estimated Budget</label>
                  <select id="budget" name="budget" defaultValue="">
                    <option value="" disabled>Select a range…</option>
                    <option value="under1000">Under ₹ 1,000</option>
                    <option value="1000-1500">₹ 1,000 – ₹ 1,500</option>
                    <option value="5000-10000">₹ 5,000 – ₹ 10,000</option>
                    <option value="10000-20000">₹ 10,000 – ₹ 20,000</option>
                    <option value="25000-50000">₹ 25,000 – ₹ 50,000</option>
                    <option value="50000-100000">₹ 50,000 – ₹ 1,00,000</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, goals, timeline, and any relevant details…"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center' }} disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
                {status.type === 'success' && (
                  <div className="form-success" style={{ display: 'block' }}>{status.message}</div>
                )}
                {status.type === 'error' && (
                  <div style={{ display: 'block', marginTop: 12, color: '#c91d1d', fontSize: '0.9rem', fontWeight: 500 }}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Common Questions</h2>
          <div className="grid-2" style={{ marginTop: 48, gap: 32 }}>
            {FAQS.map((faq) => (
              <div className="value-card reveal" key={faq.q}>
                <h3 style={{ fontSize: '0.95rem', marginBottom: 10 }}>{faq.q}</h3>
                <p style={{ fontSize: '0.87rem' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
