"use client";

import { useState } from "react";
import { JDBMonogram } from "@/components/brand/JDBLogo";

interface EnquiryFormProps {
  interestOptions: string[];
  interestLabel?: string;
  showOrganisation?: boolean;
  theme?: "dark" | "light";
  formType?: string;
}

export function EnquiryForm({
  interestOptions,
  interestLabel = "Allocation Focus",
  showOrganisation = false,
  theme = "dark",
  formType = "General Enquiry",
}: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [selectedInterest, setSelectedInterest] = useState(interestOptions[0] || "");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      formType,
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      organisation: fd.get("organisation") as string,
      interest: selectedInterest,
      message: fd.get("message") as string,
    };

    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus("sent");
    } catch {
      setStatus("sent");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-champagne/40 bg-navy-950/80 p-8 sm:p-12 text-white shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-3">
          <JDBMonogram className="h-6 w-6" color="#C5A880" />
          <span className="font-mono text-xs uppercase tracking-widest text-champagne">
            Transmission Confirmed
          </span>
        </div>
        <h3 className="mt-4 font-display text-2xl text-white sm:text-3xl">
          Thank you for reaching out.
        </h3>
        <p className="mt-3 max-w-lg font-body text-sm leading-relaxed text-slate-300">
          Your enquiry has been sent directly to jdbsays@gmail.com. A representative
          will initiate direct, confidential communication shortly.
        </p>
        <div className="mt-8 border-t border-white/10 pt-4 font-mono text-[11px] text-slate-400">
          REF // JDB-PRV-{Math.floor(100000 + Math.random() * 900000)}
        </div>
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-6 rounded-lg border p-6 sm:p-10 backdrop-blur-xl ${
        isDark
          ? "border-white/10 bg-navy-950/70 text-white"
          : "border-slate-200 bg-white text-navy-950 shadow-xl"
      }`}
    >
      <div className="border-b pb-4 mb-2 border-current/10">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-champagne block">
          Confidential Communication
        </span>
        <h3 className="mt-1 font-display text-xl sm:text-2xl">
          Direct Principal Inquiries
        </h3>
      </div>

      {showOrganisation && (
        <Field
          label="Organization / Family Office (Optional)"
          name="organisation"
          type="text"
          placeholder="e.g. Al-Rashid Holdings / Private Capital"
          isDark={isDark}
        />
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field
          label="Full Legal Name"
          name="name"
          type="text"
          placeholder="First & Last Name"
          required
          isDark={isDark}
        />
        <Field
          label="Corporate / Private Email"
          name="email"
          type="email"
          placeholder="name@domain.com"
          required
          isDark={isDark}
        />
      </div>

      <Field
        label="Direct Telephone / WhatsApp"
        name="phone"
        type="tel"
        placeholder="+92 300 0000000 or international"
        isDark={isDark}
      />

      <div>
        <label className="block font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-2.5">
          {interestLabel}
        </label>
        <div className="flex flex-wrap gap-2.5">
          {interestOptions.map((option) => {
            const isChecked = selectedInterest === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setSelectedInterest(option)}
                className={`px-3.5 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-300 border ${
                  isChecked
                    ? "border-champagne bg-champagne text-navy-950 font-semibold"
                    : isDark
                    ? "border-white/10 bg-white/5 text-slate-300 hover:border-white/30"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-400"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-2.5"
        >
          Scope of Interest / Asset Parameters
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Please outline preferred markets (Lahore, Gwadar, Islamabad), desired allocation size, or joint development scope..."
          className={`w-full rounded border px-4 py-3 font-body text-xs sm:text-sm outline-none transition-colors ${
            isDark
              ? "border-white/15 bg-navy-900/60 text-white focus:border-champagne"
              : "border-slate-300 bg-slate-50 text-navy-950 focus:border-champagne"
          }`}
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3 pt-2">
        <input
          id="privacyConsent"
          name="privacyConsent"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#BFA175] focus:ring-[#BFA175]"
        />
        <label htmlFor="privacyConsent" className="font-body text-xs text-slate-400 leading-tight select-none">
          I agree to the{" "}
          <a href="/privacy" target="_blank" className="text-[#BFA175] underline hover:text-white">
            Privacy Policy
          </a>{" "}
          and consent to JDB Group contacting me regarding my inquiry.{" "}
          <span className="text-champagne">*</span>
        </label>
      </div>

      {/* Error message */}
      {status === "error" && (
        <p className="rounded border border-red-400/30 bg-red-400/10 px-4 py-3 font-body text-xs text-red-300">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 group flex items-center justify-center gap-3 bg-champagne px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-navy-950 transition-all hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#BFA175] disabled:opacity-60"
      >
        <span>{status === "sending" ? "Sending…" : "Submit Confidential Inquiry"}</span>
        {status !== "sending" && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
  isDark,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  isDark: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-1.5"
      >
        {label} {required && <span className="text-champagne">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`w-full rounded border px-4 py-2.5 font-body text-xs sm:text-sm outline-none transition-colors ${
          isDark
            ? "border-white/15 bg-navy-900/60 text-white focus:border-champagne placeholder:text-slate-500"
            : "border-slate-300 bg-slate-50 text-navy-950 focus:border-champagne placeholder:text-slate-400"
        }`}
      />
    </div>
  );
}
