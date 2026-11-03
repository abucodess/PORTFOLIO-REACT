import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiGlobe,
  FiPhone,
  FiMapPin,
  FiArrowRight,
  FiCopy,
  FiCheck,
  FiSend,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile, getWhatsAppUrl } from "../data/profile";

const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_eb34hfi";
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_83w87tl";
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "3W3wjcBedEML5ogym";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const whatsappHref = getWhatsAppUrl();

  const copyEmail = () => {
    navigator.clipboard?.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendViaWhatsApp = () => {
    const customText = form.name || form.message
      ? `Hi Aboobacker! I'm ${form.name || "reaching out"}${
          form.email ? ` (${form.email})` : ""
        }. ${form.message || "I'd love to discuss a project with you."}`
      : profile.whatsappMessage;
    return getWhatsAppUrl(customText);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          name: form.name,
          user_name: form.name,
          from_email: form.email,
          email: form.email,
          user_email: form.email,
          reply_to: form.email,
          message: form.message,
          title: `Portfolio Inquiry from ${form.name}`,
          to_name: "Aboobacker",
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="section-pad relative z-10 border-t border-white/10"
    >
      <div className="container-px mx-auto max-w-7xl">
        {/* 12-COLUMN EDITORIAL CONTACT SECTION (Matches "LET'S WORK TOGETHER ✦" in reference) */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT COLUMN (4 cols): LET'S WORK TOGETHER ✦ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between lg:col-span-4"
          >
            <div>
              <h2 className="font-condensed text-4xl font-extrabold uppercase leading-[0.95] tracking-wide text-soft-white sm:text-5xl">
                LET&apos;S WORK
                <br />
                TOGETHER <span className="text-violet-400">✦</span>
              </h2>

              <p className="mt-4 max-w-sm text-xs leading-relaxed text-mist sm:text-sm">
                I&apos;m currently open for freelance projects, client web
                applications, and Frontend / React Developer roles. Let&apos;s
                build something fast, scalable, and memorable.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="WhatsApp"
                className="group inline-flex w-fit items-center gap-3 rounded-xl bg-violet-600 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(124,58,237,0.45)] transition-all hover:bg-violet-500 whitespace-nowrap"
              >
                <FaWhatsapp className="text-base text-emerald-300" />
                <span>Message on WhatsApp</span>
                <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <div className="mt-2 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-violet-300">
                <span className="grid h-6 w-6 place-items-center rounded-full border border-violet-400/40 text-violet-300">
                  →
                </span>
                <span>AVAILABLE FOR FREELANCE &amp; FULL-TIME</span>
              </div>
            </div>
          </motion.div>

          {/* MIDDLE COLUMN (4 cols): DIRECT CONTACT LIST (Matches circular icon rows in reference) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="divide-y divide-white/10 border-y border-white/10 lg:col-span-4"
          >
            {/* Email Row with Copy */}
            <div className="flex items-center justify-between gap-3 py-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex min-w-0 items-center gap-3.5 text-xs text-soft-white transition-colors hover:text-violet-300"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-violet-400/35 bg-violet-500/10 text-violet-300">
                  <FiMail size={14} />
                </span>
                <span className="truncate font-mono">{profile.email}</span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="ml-2 inline-flex items-center gap-1 rounded border border-white/10 px-2 py-1 font-mono text-[10px] text-mist hover:border-violet-400 hover:text-white whitespace-nowrap shrink-0"
              >
                {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* WhatsApp / Phone Row */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="WhatsApp"
              className="flex items-center justify-between gap-3.5 py-4 text-xs text-soft-white transition-colors hover:text-violet-300"
            >
              <div className="flex items-center gap-3.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-violet-400/35 bg-violet-500/10 text-emerald-300">
                  <FiPhone size={14} />
                </span>
                <span className="font-mono tabular-nums">
                  {profile.phoneDisplay} (WhatsApp)
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-violet-400">
                Chat ↗
              </span>
            </a>

            {/* GitHub & Portfolio Row */}
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GitHub"
              className="flex items-center justify-between gap-3.5 py-4 text-xs text-soft-white transition-colors hover:text-violet-300"
            >
              <div className="flex items-center gap-3.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-violet-400/35 bg-violet-500/10 text-violet-300">
                  <FiGlobe size={14} />
                </span>
                <span className="font-mono">github.com/abucodess</span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-mist">
                GitHub ↗
              </span>
            </a>

            {/* Location Row */}
            <div className="flex items-center gap-3.5 py-4 text-xs text-mist">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-violet-400/35 bg-violet-500/10 text-violet-300">
                <FiMapPin size={14} />
              </span>
              <span className="font-mono">{profile.location} · Remote</span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN (4 cols): QUICK PROJECT BRIEF FORM */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-white/10 bg-surface/70 p-6 lg:col-span-4"
          >
            <p className="font-condensed text-lg font-bold uppercase tracking-wider text-soft-white">
              SEND A QUICK BRIEF
            </p>

            <div className="mt-4 space-y-3.5">
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your Name or Company"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-soft-white placeholder-mist-dim outline-none transition focus:border-violet-400"
              />
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Your Email Address"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-soft-white placeholder-mist-dim outline-none transition focus:border-violet-400"
              />
              <textarea
                rows={3}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project, timeline, or role..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-soft-white placeholder-mist-dim outline-none transition focus:border-violet-400"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-violet-500 whitespace-nowrap"
              >
                <FiSend size={12} />
                <span>
                  {status === "sending"
                    ? "Sending..."
                    : status === "sent"
                    ? "Sent!"
                    : "Send Email"}
                </span>
              </button>

              <a
                href={sendViaWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-soft-white transition hover:border-emerald-400/50 hover:text-emerald-300 whitespace-nowrap"
              >
                <FaWhatsapp className="text-sm text-emerald-400" />
                <span>Send via WhatsApp</span>
              </a>
            </div>

            {status === "sent" && (
              <p className="mt-3 font-mono text-[11px] text-emerald-400">
                ✓ Message delivered directly to Aboobacker&apos;s inbox.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 font-mono text-[11px] text-rose-400">
                ✕ Could not send email right now — please click &quot;Send via WhatsApp&quot; above.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
