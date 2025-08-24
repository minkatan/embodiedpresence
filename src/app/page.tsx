import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <svg className="absolute -left-20 -top-24 h-[36rem] w-[36rem] opacity-10" viewBox="0 0 200 200" fill="none">
            <path d="M181 71c-24 55-77 88-123 86C12 155-9 110 7 77 24 41 79 16 121 19c34 2 58 22 60 52z" fill="#065f46"/>
          </svg>
          <svg className="absolute right-[-10rem] bottom-[-8rem] h-[28rem] w-[28rem] opacity-10 rotate-6" viewBox="0 0 200 200" fill="none">
            <path d="M174 104c-11 39-53 75-101 79C18 187-7 143 10 109 28 71 83 45 125 49c31 3 51 25 49 55z" fill="#65a30d"/>
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/60 px-3 py-1 text-xs text-stone-600 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-green-700"/> 1:1 Pilates • Gyrotonic® Specialists • Nature‑calm studio
              </p>
              <h1 className="mt-5 text-4xl sm:text-5xl font-semibold leading-tight text-stone-900">
                Move better. <span className="text-green-800">Breathe deeper.</span> Feel grounded.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-stone-700 max-w-prose">
                Private sessions tailored to your body using classical Pilates and the Gyrotonic® Method. A quiet, plant‑filled space designed to soothe your nervous system and rebuild strength with mindful guidance.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="rounded-xl bg-green-700 px-5 py-3 text-stone-50 font-medium shadow hover:bg-green-800">Book a 1:1 Trial</a>
                <a href="#services" className="rounded-xl border border-stone-300 bg-white px-5 py-3 font-medium hover:border-stone-400">Explore Services</a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-xs text-stone-600">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-700"/> Pain‑aware coaching</div>
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-700"/> Nervous‑system calm</div>
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-700"/> Evidence‑informed</div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center shadow-xl ring-1 ring-stone-200" />
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white shadow-lg ring-1 ring-stone-200 p-4 w-[14rem]">
                <p className="text-xs tracking-wide text-stone-500">Specialty</p>
                <p className="mt-1 font-medium">Gyrotonic® Tower &amp; Pulley</p>
                <p className="mt-1 text-xs text-stone-600">Fluid spirals, joint decompression, breath‑led movement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-stone-900">What we offer</h2>
            <p className="mt-3 text-stone-700">Focused, private sessions so you get hands‑on attention and consistent progress.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <ServiceCard
              title="1:1 Pilates"
              desc="Classical reformer, mat, and small apparatus. Rebuild alignment, core support, and ease of motion."
              bullets={["Assessment‑led program","Injury‑aware modifications","Take‑home drills"]}
            />
            <ServiceCard
              title="Gyrotonic® Private"
              desc="Three‑dimensional spiral work on the Tower & Pulley for mobility, decompression, and strength."
              bullets={["Breath‑timed sequences","Spine & joint decompression","Fluid strength & mobility"]}
            />
          </div>
        </div>
      </section>

      {/* STUDIO ETHOS */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-semibold text-stone-900">A nature‑calm studio</h2>
              <p className="mt-3 text-stone-700">
                Biophilic finishes, warm wood, and soft daylight tones support relaxation. We keep sound low and attention high so every breath and cue lands.
              </p>
              <ul className="mt-6 grid gap-3 text-stone-700">
                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-green-700"/> Warm wood floors, stone accents, plants</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-green-700"/> Purified air & gentle, warm lighting</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-green-700"/> Neutral tones with sage/olive accents</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/3] w-full rounded-3xl bg-[url('https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center shadow-xl ring-1 ring-stone-200" />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-stone-900">Pricing</h2>
            <p className="mt-3 text-stone-700">Transparent and simple. All sessions are private, 55 minutes unless noted.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <PriceCard title="First‑time Trial" price="$60" detail="One private session" cta="Book Trial" />
            <PriceCard title="1:1 Pilates" price="$95" detail="Single session • Packs available" cta="Book Now" featured />
            <PriceCard title="Gyrotonic®" price="$110" detail="Single session • Packs available" cta="Book Now" />
          </div>
          <div className="mt-6">
            <a href="/pricing" className="text-sm font-medium text-green-800 hover:underline">See full pricing & policies →</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-stone-900">What clients say</h2>
            <p className="mt-3 text-stone-700">Real results from 1:1 focus and calm coaching.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Quote text="I finally feel spacious in my back and hips. The private focus made all the difference." author="Amelia" />
            <Quote text="Gyrotonic helped my shoulder mobility more than anything I’ve tried." author="Ken" />
            <Quote text="The studio is so soothing—green, quiet, and grounded. I look forward to every session." author="Renee" />
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-semibold text-stone-900">Book your first session</h2>
              <p className="mt-3 text-stone-700">
                We’ll start with a brief chat to learn your goals, body history, and preferences (Pilates or Gyrotonic®). Then we’ll design your plan.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/contact" className="inline-flex w-fit items-center gap-2 rounded-xl bg-green-700 px-5 py-3 text-stone-50 font-medium shadow hover:bg-green-800">
                  Contact us
                </a>
                <a href="/instructor" className="inline-flex w-fit items-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3 font-medium hover:border-stone-400">
                  Meet the teacher
                </a>
              </div>
            </div>
            <div className="rounded-2xl p-6 ring-1 ring-stone-200 bg-stone-50">
              <p className="text-sm text-stone-600">Prefer a scheduler? We can integrate Calendly/Setmore and payments later.</p>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
}

function ServiceCard({ title, desc, bullets }: { title: string; desc: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-stone-900">{title}</h3>
      <p className="mt-2 text-stone-700">{desc}</p>
      <ul className="mt-4 grid gap-2 text-sm text-stone-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-green-700" /> {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PriceCard({
  title, price, detail, cta, featured
}: { title: string; price: string; detail: string; cta: string; featured?: boolean }) {
  return (
    <div className={[
      "rounded-2xl p-6 border shadow-sm",
      featured ? "border-green-700 bg-green-50" : "border-stone-200 bg-stone-50",
    ].join(" ")}>
      {featured && <p className="text-xs font-medium text-green-900">Most popular</p>}
      <h3 className="mt-1 text-xl font-semibold text-stone-900">{title}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-semibold text-stone-900">{price}</span>
        <span className="text-stone-600">/session</span>
      </div>
      <p className="mt-2 text-sm text-stone-700">{detail}</p>
      <a href="/contact" className={[
        "mt-6 inline-flex rounded-xl px-4 py-2 text-sm font-medium",
        featured ? "bg-green-700 text-stone-50 hover:bg-green-800" : "bg-stone-900 text-stone-50 hover:bg-stone-800",
      ].join(" ")}>{cta}</a>
    </div>
  );
}

function Quote({ text, author }: { text: string; author: string }) {
  return (
    <figure className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <blockquote className="text-stone-800">“{text}”</blockquote>
      <figcaption className="mt-4 text-sm text-stone-600">— {author}</figcaption>
    </figure>
  );
}