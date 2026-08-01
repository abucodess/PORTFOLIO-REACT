import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const script = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "abubacker — full-stack developer, react engineer" },
  { type: "cmd", text: "cat role.json" },
  {
    type: "out",
    text: '{ "student": "B.Tech CSE, KTU", "building": "React + AI", "status": "shipping" }',
  },
  { type: "cmd", text: "ls skills/" },
  { type: "out", text: "frontend/  backend/  database/  tools/  learning/" },
  { type: "cmd", text: "git log --oneline -3" },
  { type: "out", text: "a1c9e2f  feat: ship Bike Mode workshop site" },
  { type: "out", text: "7fd0b31  feat: build TalkToMe AI assistant" },
  { type: "out", text: "3e88d10  feat: clone Netflix UI + Firebase auth" },
  { type: "cmd", text: "echo $NEXT_STEP" },
  { type: "out", text: "becoming an AI engineer, one commit at a time." },
];

export default function TerminalWindow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lines, setLines] = useState([]);
  const [typingLine, setTypingLine] = useState("");
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    let cancelled = false;
    let lineIndex = 0;

    async function run() {
      while (lineIndex < script.length && !cancelled) {
        const entry = script[lineIndex];

        if (entry.type === "cmd") {
          let current = "";
          for (const char of entry.text) {
            if (cancelled) return;
            current += char;
            setTypingLine(current);
            await wait(28 + Math.random() * 35);
          }
          await wait(150);
          setLines((prev) => [...prev, entry]);
          setTypingLine("");
          await wait(180);
        } else {
          setLines((prev) => [...prev, entry]);
          await wait(90);
        }

        lineIndex += 1;
      }
      if (!cancelled) setDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotateX: 6 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="glow-border w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-[#08080c]/90 shadow-[0_20px_80px_-20px_rgba(124,58,237,0.4)]"
    >
      <div className="flex items-center gap-2 border-b border-line bg-surface-2/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-[11px] text-mist-dim">
          abubacker@portfolio — zsh
        </span>
      </div>

      <div className="h-[280px] overflow-y-auto px-5 py-4 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.map((line, i) =>
          line.type === "cmd" ? (
            <div key={i} className="flex gap-2 text-soft-white">
              <span className="text-violet-400">➜</span>
              <span>{line.text}</span>
            </div>
          ) : (
            <div key={i} className="pl-5 text-mist">
              {line.text}
            </div>
          )
        )}

        {typingLine && (
          <div className="flex gap-2 text-soft-white">
            <span className="text-violet-400">➜</span>
            <span>{typingLine}</span>
            <span className="inline-block h-4 w-[7px] animate-blink bg-violet-400" />
          </div>
        )}

        {done && (
          <div className="flex gap-2 text-soft-white">
            <span className="text-violet-400">➜</span>
            <span className="inline-block h-4 w-[7px] animate-blink bg-violet-400" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
