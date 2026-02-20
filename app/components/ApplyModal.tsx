"use client";

import { useState, useEffect, useRef } from "react";

const FORMSPREE_ID = "mreaajdp";

type Status = "idle" | "submitting" | "success" | "error";

interface Props {
  label?: string;
  className?: string;
}

export default function ApplyModal({
  label = "Apply for a project →",
  className = "",
}: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    idea: "",
    success: "",
    timeline: "",
  });

  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          idea: form.idea,
          success_looks_like: form.success,
          timeline: form.timeline,
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setOpen(false);
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", idea: "", success: "", timeline: "" });
    }, 300);
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className={className}
        type="button"
      >
        {label}
      </button>

      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={(e) => { if (e.target === overlayRef.current) reset(); }}
        className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(26,26,24,0.6)", backdropFilter: "blur(4px)" }}
        aria-modal="true"
        role="dialog"
        aria-label="Apply for a project"
      >
        {/* Modal */}
        <div
          className={`relative w-full sm:max-w-lg bg-[#F9F7F3] rounded-t-3xl sm:rounded-3xl shadow-2xl transition-transform duration-300 ease-out overflow-hidden ${
            open ? "translate-y-0" : "translate-y-8 sm:translate-y-4"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#E5E2DB]">
            <div>
              <h2
                className="text-xl font-medium text-[#1A1A18]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Apply for a project
              </h2>
              <p className="text-sm text-[#8a8a80] mt-0.5">
                $4,500 flat · 2–3 weeks · limited spots
              </p>
            </div>
            <button
              onClick={reset}
              className="text-[#8a8a80] hover:text-[#1A1A18] transition-colors p-1 -mr-1 rounded-full"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[80vh] sm:max-h-[70vh] px-6 py-6">
            {status === "success" ? (
              <div className="py-8 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3
                  className="text-2xl mb-2 text-[#1A1A18]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Application received.
                </h3>
                <p className="text-[#6a6a62] mb-8">
                  We'll review your idea and get back to you within 1 business day.
                </p>
                <button
                  onClick={reset}
                  className="text-sm font-medium text-[#8a8a80] hover:text-[#1A1A18] transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#4a4a44] mb-1.5">
                      Your name <span className="text-[#c0bdb6]">*</span>
                    </label>
                    <input
                      ref={firstInputRef}
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Taylor"
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E2DB] bg-white text-[#1A1A18] placeholder-[#c0bdb6] text-sm focus:outline-none focus:border-[#1A1A18] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4a4a44] mb-1.5">
                      Email <span className="text-[#c0bdb6]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E2DB] bg-white text-[#1A1A18] placeholder-[#c0bdb6] text-sm focus:outline-none focus:border-[#1A1A18] transition-colors"
                    />
                  </div>
                </div>

                {/* Idea */}
                <div>
                  <label className="block text-sm font-medium text-[#4a4a44] mb-1.5">
                    Describe your idea <span className="text-[#c0bdb6]">*</span>
                  </label>
                  <textarea
                    name="idea"
                    required
                    value={form.idea}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What do you want to build? What problem does it solve, and who's it for?"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E2DB] bg-white text-[#1A1A18] placeholder-[#c0bdb6] text-sm focus:outline-none focus:border-[#1A1A18] transition-colors resize-none"
                  />
                </div>

                {/* Success */}
                <div>
                  <label className="block text-sm font-medium text-[#4a4a44] mb-1.5">
                    What does success look like?{" "}
                    <span className="text-[#c0bdb6]">*</span>
                  </label>
                  <textarea
                    name="success"
                    required
                    value={form.success}
                    onChange={handleChange}
                    rows={3}
                    placeholder="What would make this project a win for you?"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E2DB] bg-white text-[#1A1A18] placeholder-[#c0bdb6] text-sm focus:outline-none focus:border-[#1A1A18] transition-colors resize-none"
                  />
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-medium text-[#4a4a44] mb-1.5">
                    When are you hoping to launch?
                  </label>
                  <input
                    type="text"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    placeholder="e.g. ASAP, next month, Q2…"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E2DB] bg-white text-[#1A1A18] placeholder-[#c0bdb6] text-sm focus:outline-none focus:border-[#1A1A18] transition-colors"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Something went wrong — try again or email hello@getpolished.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#1A1A18] text-[#F9F7F3] py-4 rounded-full text-sm font-medium hover:bg-[#3a3a36] disabled:opacity-50 transition-colors"
                >
                  {status === "submitting" ? "Sending…" : "Submit application →"}
                </button>

                <p className="text-xs text-[#b0ada6] text-center">
                  We'll review and respond within 1 business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
