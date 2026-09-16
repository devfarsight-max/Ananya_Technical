import Image from 'next/image';
import Link from '@/components/site-link';
import { ArrowRight, BookOpen, Sparkles, GraduationCap } from 'lucide-react';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { services } from '@/src/data/services';

const links = [
  '/services/education',
  '/services/performing-arts',
  '/services/technical',
];
const team = [
  ['Mr. D. Chakravertee', 'Director - Operations'],
  ['Ms. Ananya Chakravertee', 'Executive Director'],
  ['Mrs. Nidhi Chakravertee', 'Director - Education Team'],
];

export default function Home() {
  return (
    <main className="bg-[#FAF7EF] text-[#681321]">
      <Header />
      <section className="page-hero">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
          <div>
            <p className="eyebrow">EDUCATION. EXPRESSION. POSSIBILITY.</p>
            <h1 className="hero-title mt-6">
              Where Education Builds You,
              <br />
              <span className="italic">and Art Defines You.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#681321]/75">
              A place to learn with purpose, express yourself with confidence,
              and grow through knowledge and creativity.
            </p>
            <p className="mt-4 max-w-xl leading-7 text-[#681321]/75">
              Ananya Technical Services Private Limited brings together academic
              coaching, skill development, educational guidance, and performing
              arts for students, youth, and aspiring professionals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services/education" className="button-primary">
                Explore learning <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="button-secondary">
                Talk to our team
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#681321]/15 pt-6 text-sm font-semibold">
              <span className="flex items-center gap-2">
                <BookOpen size={17} />
                Quality education
              </span>
              <span className="flex items-center gap-2">
                <Sparkles size={17} />
                Creative expression
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap size={17} />
                Personal growth
              </span>
            </div>
          </div>
          <figure className="mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-t-[10rem] rounded-b-xl border border-[#681321]/15 bg-brand-soft p-3">
              <Image
                src="/gallery/dance-portrait.jpeg"
                alt="Dancer expressing a classical pose in a red and gold costume"
                width={853}
                height={1280}
                priority
                sizes="(min-width: 1024px) 36vw, 90vw"
                className="max-h-[520px] w-full rounded-t-[9.5rem] rounded-b-lg object-contain"
              />
            </div>
            <figcaption className="mt-4 flex justify-between gap-4 text-sm">
              <span className="font-semibold">
                Discipline meets self-expression.
              </span>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 hover:underline"
              >
                Our gallery <ArrowRight size={16} />
              </Link>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="site-container grid gap-10 py-20 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">WELCOME TO ATS</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Learning with purpose.
            <br />
            Growing with confidence.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-[#681321]/75">
          <p>
            Every learner brings a different set of interests, ambitions, and
            abilities. At ATS, we believe education should help individuals
            understand their strengths and discover what they can become.
          </p>
          <p>
            Our work connects traditional education with modern skill
            development and the performing arts. Through coaching, creative
            practice, and educational consultancy, we aim to nurture knowledge,
            confidence, discipline, and practical skills.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-bold text-[#681321]"
          >
            Discover our story <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <section id="services" className="bg-brand-soft py-20">
        <div className="site-container">
          <div className="max-w-2xl">
            <p className="eyebrow">FIND YOUR DIRECTION</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Different interests. Meaningful possibilities.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#681321]/75">
              Explore learning that strengthens academic understanding, develops
              artistic expression, and opens conversations about future skills.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.number}
                  href={links[i]}
                  className="detail-card group flex flex-col transition-shadow hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={30} strokeWidth={1.4} />
                    <span className="text-sm text-[#681321]/60">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-bold">{service.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-[#681321]/75">
                    {service.description}
                  </p>
                  <p className="mt-5 border-t border-[#681321]/15 pt-5 text-sm leading-6">
                    {
                      [
                        'Classes 1–12 · CBSE, ICSE & U.P. Board',
                        'Classical dance · Music · Creative development',
                        'In development · Enquire for future updates',
                      ][i]
                    }
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-bold">
                    {i === 2 ? 'See what is coming' : 'Explore this area'}
                    <ArrowRight size={17} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="site-container py-20">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">THE WAY WE LEARN</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Small steps.
              <br />
              Lasting growth.
            </h2>
            <p className="mt-5 leading-8 text-[#681321]/75">
              Progress is more than a result. It is the confidence to ask
              questions, the discipline to practise, and the courage to try
              again.
            </p>
            <Link
              href="/approach"
              className="mt-6 inline-flex items-center gap-2 font-bold"
            >
              Explore our approach <ArrowRight size={18} />
            </Link>
          </div>
          <div className="space-y-5">
            {[
              [
                'Understand your goals',
                'Begin with your interests, current learning stage, and the areas where you would like support. A clear starting point helps make the next step more meaningful.',
              ],
              [
                'Build through practice',
                'Connect understanding with regular effort. Academic study and creative practice both benefit from patience, reflection, and opportunities to improve.',
              ],
              [
                'Grow beyond the classroom',
                'Develop habits of curiosity, self-expression, and responsibility that can support academic, personal, and professional aspirations.',
              ],
            ].map(([title, text], i) => (
              <article key={title} className="detail-card flex gap-5">
                <span className="font-serif text-3xl text-[#681321]/45">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-[#681321]/75">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-maroon py-20 text-[#FAF7EF]">
        <div className="site-container grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">OUR VISION</p>
            <h2 className="mt-4 font-serif text-4xl">
              Empowering through education & creativity.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#FAF7EF]/80">
              To emerge as a leading institution that empowers individuals
              through quality education, creative expression, and skill
              development, fostering academic excellence and artistic growth.
            </p>
          </div>
          <div>
            <p className="eyebrow">OUR MISSION</p>
            <h2 className="mt-4 font-serif text-4xl">
              A foundation for a fuller future.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#FAF7EF]/80">
              Strong conceptual understanding, creativity through performing
              arts, and a supportive, inclusive learning environment guide our
              work. We aim to help individuals discover their potential and grow
              with confidence.
            </p>
            <Link
              href="/vision-mission"
              className="mt-6 inline-flex items-center gap-2 font-bold underline underline-offset-4"
            >
              Read our vision & mission <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="site-container grid items-center gap-10 py-20 lg:grid-cols-2">
        <Image
          src="/gallery/photo-018.jpeg"
          alt="Award presentation with participants on stage"
          width={1600}
          height={1064}
          sizes="(min-width: 1024px) 45vw, 90vw"
          className="w-full rounded-xl"
        />
        <div className="lg:pl-8">
          <p className="eyebrow">LIFE IN PICTURES</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Expression, effort, and moments worth sharing.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#681321]/75">
            Our gallery brings together performing arts, practice sessions, and
            award events. Take a closer look at the people and creative moments
            behind the ATS story.
          </p>
          <Link href="/gallery" className="button-secondary mt-7">
            Visit our gallery <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <section className="border-t border-[#681321]/15 py-20">
        <div className="site-container">
          <p className="eyebrow">PEOPLE BEHIND THE PURPOSE</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            A shared commitment to learning.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#681321]/75">
            Our leadership brings operations, educational direction, and a
            commitment to individual growth together around the ATS vision.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {team.map(([name, role]) => (
              <article key={name} className="detail-card">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="mt-3 text-[#681321]/75">{role}</p>
              </article>
            ))}
          </div>
          <Link
            href="/team"
            className="mt-7 inline-flex items-center gap-2 font-bold"
          >
            Meet our team <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <section className="bg-brand-soft py-16">
        <div className="site-container flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="eyebrow">LET&apos;S BEGIN</p>
            <h2 className="mt-3 font-serif text-4xl">
              What would you like to learn next?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#681321]/75">
              Talk to us about academic coaching, performing arts, or
              educational guidance. Share your goals and ask about current
              programme availability.
            </p>
          </div>
          <Link href="/contact" className="button-primary shrink-0">
            Start a conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
