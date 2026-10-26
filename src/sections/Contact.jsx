import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
  FiCopy,
  FiCheck,
  FiArrowUpRight,
} from "react-icons/fi";
import SectionHeading from "../components/UI/SectionHeading";
import MagneticButton from "../components/UI/MagneticButton";

// EmailJS config — set these in a .env file at project root:
// VITE_EMAILJS_SERVICE_ID=your_service_id
// VITE_EMAILJS_TEMPLATE_ID=your_template_id
// VITE_EMAILJS_PUBLIC_KEY=your_public_key
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMAIL = "abubackermax10@gmail.com";

const socials = [
  {
    name: "GitHub",
    handle: "@abubacker8593",
    href: "https://github.com/abubacker8593",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    handle: "in/abubacker8593",
    href: "https://www.linkedin.com/in/abubacker8593",
    icon: FiLinkedin,
  },
  {
    name: "Email",
    handle: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: FiMail,
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    // Fallback to mailto if EmailJS keys aren't configured yet
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          message: form.message,
          to_name: "Abubacker",
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Couldn't send right now — please email me directly.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section-pad container-px relative cv-auto">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="06 / Contact"
          title="Let's build something unforgettable."
          subtitle="Have a role, freelance project, or ambitious idea? My inbox is always open."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between gap-6 lg:col-span-5"
          >
            <div className="glass glow-border rounded-3xl p-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Available for work
              </span>

              <h3 className="mt-5 font-display text-2xl font-bold text-soft-white">
                Direct line to me
              </h3>
              <p className="mt-2 text-sm text-mist">
                Prefer email? Copy my address with one click or connect on
                socials below.
              </p>

              <button
                onClick={copyEmail}
                data-cursor={copied ? "Copied!" : "Copy"}
                className="mt-5 flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-left font-mono text-xs text-soft-white transition hover:border-violet-400/40"
              >
                <span className="truncate">{EMAIL}</span>
                <span className="ml-2 inline-flex items-center gap-1.5 text-violet-300">
                  {copied ? (
                    <>
                      <FiCheck className="text-emerald-400" /> Copied
                    </>
                  ) : (
                    <>
                      <FiCopy /> Copy
                    </>
                  )}
                </span>
              </button>
            </div>

            <div className="space-y-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor={s.name}
                    className="glass glow-border group flex items-center justify-between rounded-2xl p-4 transition hover:border-violet-400/40"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-300">
                        <Icon />
                      </div>
                      <div>
                        <p className="font-display text-sm font-semibold text-soft-white">
                          {s.name}
                        </p>
                        <p className="font-mono text-xs text-mist">{s.handle}</p>
                      </div>
                    </div>
                    <FiArrowUpRight className="text-mist transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-300" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.form
            ref={formRef}
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass glow-border rounded-3xl p-7 sm:p-9 lg:col-span-7"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-mist">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-soft-white placeholder-mist-dim outline-none transition focus:border-violet-400 focus:bg-white/[0.05]"
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-mist">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-soft-white placeholder-mist-dim outline-none transition focus:border-violet-400 focus:bg-white/[0.05]"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-mist">
                Project or Message
              </label>
              <textarea
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about what you're building..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-soft-white placeholder-mist-dim outline-none transition focus:border-violet-400 focus:bg-white/[0.05]"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-xs text-mist-dim">
                {status === "error" ? (
                  <span className="text-red-400">{errorMsg}</span>
                ) : (
                  "Usually responds within 24 hours."
                )}
              </p>

              <MagneticButton
                as="button"
                type="submit"
                disabled={status === "sending"}
                cursor="Send"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_30px_rgba(124,58,237,0.45)] transition hover:shadow-[0_0_45px_rgba(168,85,247,0.75)] disabled:opacity-60"
              >
                {status === "sending" && "Sending..."}
                {status === "sent" && (
                  <>
                    <FiCheck /> Message Sent!
                  </>
                )}
                {status === "error" && "Try Again"}
                {status === "idle" && (
                  <>
                    Send Message <FiSend className="text-xs" />
                  </>
                )}
              </MagneticButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
