"use client";

import { useId, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Button from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  business: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialValues: FormState = {
  name: "",
  email: "",
  business: "",
  service: "",
  message: "",
};

const serviceOptions = [
  "General inquiry",
  "Data Cleanup & CRM Organization",
  "Pipeline & Workflow Design",
  "Outreach Campaigns",
  "AI Readiness Prep",
  "Market & Audience Research",
  "Customer Experience & Retention",
  "Team Systems & Onboarding",
  "Something else",
];

const inputClassName =
  "h-11 w-full min-w-0 rounded-[7px] border border-border bg-background px-3.5 text-[14px] text-foreground placeholder:text-muted-foreground transition-[border-color,box-shadow] duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15";

const labelClassName = "text-[13px] font-semibold text-foreground";

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.business.trim()) errors.business = "Please enter your business name.";
  if (!values.service) errors.service = "Please choose an option.";
  if (!values.message.trim()) errors.message = "Please tell me a bit about your goals.";

  return errors;
}

/**
 * No form backend exists yet in this project. This stub validates and holds
 * the submission locally so the UI/UX is complete; swap the body for a real
 * request once an endpoint is connected.
 */
async function submitContactMessage(values: FormState) {
  return Promise.resolve(values);
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        d="m5.5 9 6.5 6.5L18.5 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <rect x="5" y="10.5" width="14" height="9.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function ContactForm() {
  const idPrefix = useId();
  const [values, setValues] = useState<FormState>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    await submitContactMessage(values);
    setStatus("submitted");
  }

  const cardClassName =
    "w-full rounded-[12px] border border-border bg-white px-7 py-7 shadow-[0_2px_24px_rgba(23,62,42,0.06)] sm:px-8 sm:py-8";

  if (status === "submitted") {
    return (
      <div className={`${cardClassName} animate-fade-in [--enter-y:6px]`}>
        <h2 className="text-[30px] leading-[1.15] text-foreground sm:text-[32px]">
          Thank you.
        </h2>
        <span aria-hidden="true" className="mt-3 block h-px w-10 bg-[#b99a57]" />
        <p className="mt-4 text-[14.5px] leading-[1.65] text-muted-foreground">
          I&rsquo;ve got your message and will get back to you within 1&ndash;2
          business days.
        </p>
      </div>
    );
  }

  return (
    <div className={cardClassName}>
      <h2 className="text-[30px] leading-[1.1] text-primary sm:text-[32px]">
        Send a message
      </h2>
      <span aria-hidden="true" className="mt-2.5 block h-px w-10 bg-[#b99a57]" />
      <p className="mt-2.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        All fields are required.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-4 flex flex-col gap-3.5">
        {/* Row 1 */}
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <div className="min-w-0">
            <label htmlFor={`${idPrefix}-name`} className={labelClassName}>
              Your Name
            </label>
            <input
              id={`${idPrefix}-name`}
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? `${idPrefix}-name-error` : undefined}
              className={`${inputClassName} mt-1.5`}
            />
            {errors.name ? (
              <p id={`${idPrefix}-name-error`} className="animate-fade-in mt-1 text-[12px] text-red-600 [--enter-duration:300ms] [--enter-y:2px]">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div className="min-w-0">
            <label htmlFor={`${idPrefix}-email`} className={labelClassName}>
              Email Address
            </label>
            <input
              id={`${idPrefix}-email`}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined}
              className={`${inputClassName} mt-1.5`}
            />
            {errors.email ? (
              <p id={`${idPrefix}-email-error`} className="animate-fade-in mt-1 text-[12px] text-red-600 [--enter-duration:300ms] [--enter-y:2px]">
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>

        {/* Row 2 — full width */}
        <div className="min-w-0">
          <label htmlFor={`${idPrefix}-business`} className={labelClassName}>
            Business Name
          </label>
          <input
            id={`${idPrefix}-business`}
            name="business"
            type="text"
            value={values.business}
            onChange={handleChange}
            aria-invalid={Boolean(errors.business)}
            aria-describedby={errors.business ? `${idPrefix}-business-error` : undefined}
            className={`${inputClassName} mt-1.5`}
          />
          {errors.business ? (
            <p id={`${idPrefix}-business-error`} className="animate-fade-in mt-1 text-[12px] text-red-600 [--enter-duration:300ms] [--enter-y:2px]">
              {errors.business}
            </p>
          ) : null}
        </div>

        {/* Row 3 — select */}
        <div className="min-w-0">
          <label htmlFor={`${idPrefix}-service`} className={labelClassName}>
            What can I help you with?
          </label>
          <div className="relative mt-1.5">
            <select
              id={`${idPrefix}-service`}
              name="service"
              value={values.service}
              onChange={handleChange}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? `${idPrefix}-service-error` : undefined}
              className={`${inputClassName} appearance-none pr-9 ${
                values.service ? "" : "text-muted-foreground"
              }`}
            >
              <option value="" disabled>
                What can I help you with?
              </option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-muted-foreground">
              <ChevronDownIcon />
            </span>
          </div>
          {errors.service ? (
            <p id={`${idPrefix}-service-error`} className="animate-fade-in mt-1 text-[12px] text-red-600 [--enter-duration:300ms] [--enter-y:2px]">
              {errors.service}
            </p>
          ) : null}
        </div>

        {/* Row 4 — message */}
        <div className="min-w-0">
          <label htmlFor={`${idPrefix}-message`} className={labelClassName}>
            Tell me a little about your business and your goals&hellip;
          </label>
          <textarea
            id={`${idPrefix}-message`}
            name="message"
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${idPrefix}-message-error` : undefined}
            className={`${inputClassName} mt-1.5 h-[120px] resize-none py-2.5`}
          />
          {errors.message ? (
            <p id={`${idPrefix}-message-error`} className="animate-fade-in mt-1 text-[12px] text-red-600 [--enter-duration:300ms] [--enter-y:2px]">
              {errors.message}
            </p>
          ) : null}
        </div>

        <Button
          type="submit"
          variant="primary"
          disabled={status === "submitting"}
          className="mt-0.5 h-12 w-full justify-center text-[15px] !text-white"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </Button>

        <p className="flex items-center justify-center gap-1.5 text-center text-[12px] text-muted-foreground">
          <LockIcon />
          Your information is safe and confidential.
        </p>
      </form>
    </div>
  );
}
