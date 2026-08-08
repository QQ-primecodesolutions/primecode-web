"use client";

import { useRef, useState } from "react";
import { CircleCheck, TriangleAlert, LoaderCircle, Send } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const response = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await response.json().catch(() => null);
        const message =
          data?.errors?.map((e: { message: string }) => e.message).join(", ") ||
          "Something went wrong. Please try again or email us directly.";
        setErrorMessage(message);
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    } finally {
      requestAnimationFrame(() => {
        messageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }

  return (
    <div className="rounded-[20px] border border-border bg-card p-8 shadow-lg sm:p-10">
      <h3 className="mb-6 text-2xl font-bold text-text-primary">Send us a Message</h3>

      <div ref={messageRef}>
        {status === "success" && (
          <div className="mb-6 flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
            <CircleCheck size={20} className="mt-0.5 shrink-0" />
            <p>
              <strong>Message sent successfully!</strong> We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="mb-6 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
            <TriangleAlert size={20} className="mt-0.5 shrink-0" />
            <p>
              <strong>Oops!</strong> {errorMessage}
            </p>
          </div>
        )}
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block font-semibold text-text-primary">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your full name"
            className="w-full rounded-xl border-2 border-border bg-bg-light p-4 transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block font-semibold text-text-primary">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email address"
            className="w-full rounded-xl border-2 border-border bg-bg-light p-4 transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
          />
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block font-semibold text-text-primary">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            placeholder="What is this about?"
            className="w-full rounded-xl border-2 border-border bg-bg-light p-4 transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block font-semibold text-text-primary">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Tell us about your project or inquiry..."
            className="min-h-[120px] w-full resize-y rounded-xl border-2 border-border bg-bg-light p-4 transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-primary to-secondary px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(37,99,235,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <LoaderCircle size={18} className="animate-spin" /> Sending...
            </>
          ) : (
            <>
              <Send size={18} /> Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
