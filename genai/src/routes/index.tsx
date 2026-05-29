import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircleHeart, Bell } from "lucide-react";
import heroImg from "@/assets/hero-kitchen.jpg";
import { WaitlistForm } from "@/components/WaitlistForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DailyRing — Know your mom is okay without having to ask" },
      { name: "description", content: "DailyRing makes a gentle phone call to your aging parent every day, listens for small changes, and lets you know when something deserves attention." },
      { property: "og:title", content: "DailyRing — A daily check-in for the people you love" },
      { property: "og:description", content: "A warm daily phone call for aging parents. You hear about what matters." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Flagged />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="font-serif text-xl tracking-tight">DailyRing</span>
        </a>
        <a
          href="#waitlist"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-95"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-warm-gray">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            A gentle daily check-in
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Know your mom is okay <em className="not-italic text-primary">without having to ask.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-gray">
            DailyRing makes a gentle phone call every day, listens for small changes, and lets you
            know when something deserves attention.
          </p>
          <div id="waitlist" className="mt-8 max-w-md">
            <WaitlistForm id="hero" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/30 blur-2xl" />
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[var(--shadow-card)]">
            <img
              src={heroImg}
              alt="A warm kitchen table at golden hour with a phone, a small lamp, an open book and a steaming mug of tea"
              width={1536}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="border-y border-border/60 bg-cream">
      <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
          “I'm fine” can hide a lot.
        </h2>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-warm-gray">
          <p>
            Family calls are loving, but they can become predictable. You ask how they are. They
            say they're fine. Everyone hangs up feeling okay.
          </p>
          <p>
            But aging parents often downplay pain, confusion, loneliness, poor sleep, or dizziness
            because they don't want to worry you — and they don't want to lose independence.
          </p>
          <p className="text-foreground">
            Small changes can become big problems before anyone realizes they were happening.
          </p>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    icon: Phone,
    title: "Your parent gets a daily call",
    body: "DailyRing calls at the time they choose. No app, no screen, no new habit to learn.",
  },
  {
    icon: MessageCircleHeart,
    title: "The conversation feels natural",
    body: "It gently asks about sleep, pain, meals, mood, plans, and anything unusual.",
  },
  {
    icon: Bell,
    title: "You hear about what matters",
    body: "You get a simple family dashboard and alerts when a pattern looks concerning.",
  },
];

function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="max-w-2xl">
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl">
          A simple daily rhythm.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="font-serif text-sm text-warm-gray">Step {i + 1}</span>
            </div>
            <h3 className="mt-5 font-serif text-2xl leading-snug">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-warm-gray">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const signs = [
  "Confusion or unusual forgetfulness",
  "Mentions of falls or near-falls",
  "Dizziness or weakness",
  "Mood changes or loneliness",
  "Missed meals or poor appetite",
  "Repeated pain or complaints",
  "Changes in sleep",
  "Unusual daily routine changes",
];

function Flagged() {
  return (
    <section className="bg-cream border-y border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Small signs DailyRing can notice.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-warm-gray">
            DailyRing is not trying to replace family. It helps surface the things that may not
            come up in normal calls.
          </p>
        </div>
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {signs.map((s) => (
            <li
              key={s}
              className="rounded-xl border border-border bg-card px-5 py-4 text-card-foreground shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-start gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                <span className="leading-snug">{s}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl text-warm-gray">
          <span className="font-medium text-foreground">You decide what deserves attention.</span>{" "}
          DailyRing simply helps you notice sooner.
        </p>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:py-28 text-center">
      <h2 className="font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl">
        Built to be easy to keep.
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-warm-gray">
        DailyRing is planned at{" "}
        <span className="font-medium text-foreground">$29.99/month</span>, cancel anytime.
      </p>
      <p className="mt-3 text-sm text-warm-gray">
        Less than many families spend on one takeout meal — for one more daily touchpoint with
        someone you love.
      </p>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-5 pb-24">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-border bg-gradient-to-b from-card to-cream p-10 text-center shadow-[var(--shadow-card)] md:p-16">
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl">
          Get early access to DailyRing.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-warm-gray">
          Be among the first families to try a calmer way to keep an eye on aging parents who
          still live independently.
        </p>
        <div className="mx-auto mt-8 max-w-md">
          <WaitlistForm id="final" />
        </div>
        <p className="mt-4 text-sm text-warm-gray">Early access spots will open gradually.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
            <span className="h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-serif text-lg">DailyRing</span>
        </div>
        <p className="text-sm text-warm-gray">
          Daily check-ins for independent aging parents.
        </p>
        <a href="mailto:hello@dailyring.com" className="text-sm text-warm-gray hover:text-primary">
          hello@dailyring.com
        </a>
      </div>
    </footer>
  );
}
