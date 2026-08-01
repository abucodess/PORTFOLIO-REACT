import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiCheck, FiMail } from "react-icons/fi";
import SectionHeading from "../components/UI/SectionHeading";
import emailjs from "@emailjs/browser";
import MagneticButton from "../components/UI/MagneticButton";

function FloatingField({ label, type = "text", textarea = false, value, onChange, name }) {
  const [focused, setFocused] = useState(false);
  const filled = value?.length > 0;
  const Tag = textarea ? "textarea" : "input";

  return (
    <div className="relative">
      <Tag
        name={name}
        type={!textarea ? type : undefined}
        rows={textarea ? 5 : undefined}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
        className="peer w-full resize-none rounded-xl border border-line bg-surface-2/60 px-4 pb-2.5 pt-6 text-sm text-soft-white outline-none transition-colors focus:border-violet-400/60"
      />
      <label
        className={`pointer-events-none absolute left-4 font-mono transition-all duration-200 ${
          focused || filled
            ? "top-2.5 text-[11px] text-violet-300"
            : "top-1/2 -translate-y-1/2 text-sm text-mist-dim"
        }`}
      >
        {label}
      </label>
      <span
        className={`pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300 ${
          focused ? "opacity-100" : "opacity-0"
        }`}
        style={{ boxShadow: "0 0 0 1px rgba(168,85,247,0.4), 0 0 20px rgba(124,58,237,0.25)" }}
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

 const handleSubmit = (e) => {
  e.preventDefault();
  setStatus("sending");

  const templateParams = {
    name: form.name,
    email: form.email,
    message: form.message,
  };

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.log(error);
      setStatus("idle");
    });
};

  return (
    <section id="contact" className="section-pad relative z-10">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Let's build something worth shipping."
          description="Have a role, a project, or just want to talk React and AI? My inbox is open."
        />

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glow-border relative mt-14 overflow-hidden rounded-3xl border border-line bg-surface/60 p-8 backdrop-blur-xl sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <FloatingField label="Your name" name="name" value={form.name} onChange={handleChange} />
            <FloatingField label="Your email" name="email" type="email" value={form.email} onChange={handleChange} />
            <div className="sm:col-span-2">
              <FloatingField label="Message" name="message" textarea value={form.message} onChange={handleChange} />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="hidden font-mono text-xs text-mist-dim sm:block">
              <FiMail className="mr-1.5 inline" /> Typically replies within 24h
            </p>
            <MagneticButton type="submit" className="ml-auto" disabled={status !== "idle"}>
              <AnimatePresence mode="wait" initial={false}>
                {status === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2"
                  >
                    Send Message <FiSend />
                  </motion.span>
                )}
                {status === "sending" && (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2"
                  >
                    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-soft-white/30 border-t-soft-white" />
                    Sending...
                  </motion.span>
                )}
                {status === "sent" && (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2"
                  >
                    Sent <FiCheck />
                  </motion.span>
                )}
              </AnimatePresence>
            </MagneticButton>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
