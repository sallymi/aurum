//import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa'

export default function Consultation() {
  return (
    <section id="consultation" className="relative bg-gray-900 text-white py-16">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Get a Consultation</h2>
        <p className="mb-8">Contact form via Email / WhatsApp / WeChat</p>
        <form className="grid md:grid-cols-2 gap-4">
          <input className="px-4 py-3 rounded bg-white/10 border border-white/20" placeholder="Name" />
          <input className="px-4 py-3 rounded bg-white/10 border border-white/20" placeholder="Email" />
          <textarea className="md:col-span-2 px-4 py-3 rounded bg-white/10 border border-white/20" placeholder="How can we help?" rows={4}></textarea>
          <button type="submit" className="md:col-span-2 px-6 py-3 rounded bg-sky-500 text-white hover:bg-sky-600 transition">Send</button>
        </form>
        <div className="flex justify-center gap-6 text-3xl mt-8"><FaInstagram /><FaWhatsapp /><FaLinkedin /></div>
      </div>
    </section>
  )
}
// 代替三个图标
const FaInstagram = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.986 15.667 24 15.26 24 12s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.26 0 12 0z"/></svg>
const FaWhatsapp  = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.166 1.24 8.413 3.488 2.247 2.248 3.486 5.233 3.485 8.414-.003 6.558-5.342 11.892-11.896 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.238 1.58zm10.794-5.001c-.447 0-.884-.105-1.278-.305l-3.076 1.003 1.018-2.987c-.204-.39-.313-.824-.313-1.278 0-2.485 2.02-4.505 4.505-4.505.983 0 1.91.315 2.682.881.772.565 1.324 1.353 1.58 2.267.256.914.27 1.891.04 2.813-.23.922-.73 1.748-1.423 2.372-.693.624-1.58 1.025-2.54 1.15z"/></svg>
const FaLinkedin = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>