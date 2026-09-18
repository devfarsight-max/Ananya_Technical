import Image from 'next/image';
import { PageDetails } from '@/components/page-details';
import { PageShell } from '@/components/page-shell';

const youtubeUrl =
  'https://youtube.com/@nyaya.simplified_byats?si=4-gADF8BkUpm1NOg';
const instagramUrl = 'https://www.instagram.com/nyaya.simplified_byats/';

const legalPhotos = [
  {
    src: '/gallery/WhatsApp Image 2026-09-18 at 10.55.33 AM.jpeg',
    alt: 'Law student and mentor at an inter-college debate competition',
    width: 1280,
    height: 960,
  },
  {
    src: '/gallery/WhatsApp Image 2026-09-18 at 10.55.34 AM (1).jpeg',
    alt: 'Law student standing beside a Vidhi Vimash debate competition banner',
    width: 960,
    height: 1280,
  },
  {
    src: '/gallery/WhatsApp Image 2026-09-18 at 10.55.34 AM.jpeg',
    alt: 'Law student presenting beside a debate competition banner',
    width: 960,
    height: 1280,
  },
  {
    src: '/gallery/WhatsApp Image 2026-09-18 at 10.55.35 AM (1).jpeg',
    alt: 'Law student holding a participation certificate outdoors',
    width: 960,
    height: 1280,
  },
  {
    src: '/gallery/WhatsApp Image 2026-09-18 at 10.55.35 AM (2).jpeg',
    alt: 'Law student attending an event in an auditorium',
    width: 1280,
    height: 960,
  },
  {
    src: '/gallery/WhatsApp Image 2026-09-18 at 10.55.35 AM.jpeg',
    alt: 'Law student posing during a youth parliament event',
    width: 1280,
    height: 960,
  },
  {
    src: '/gallery/WhatsApp Image 2026-09-18 at 10.55.36 AM.jpeg',
    alt: 'Law student receiving a National Excellence Achievers Award',
    width: 960,
    height: 1280,
  },
  {
    src: '/gallery/WhatsApp Image 2026-09-18 at 10.55.40 AM.jpeg',
    alt: 'Law student studying and writing notes',
    width: 960,
    height: 1280,
  },
  {
    src: '/gallery/WhatsApp Image 2026-09-18 at 10.55.47 AM.jpeg',
    alt: 'Law student holding a certificate at an academic event',
    width: 960,
    height: 1280,
  },
  {
    src: '/gallery/WhatsApp Image 2026-09-18 at 10.55.51 AM.jpeg',
    alt: 'Law student posing with a youth parliament certificate',
    width: 960,
    height: 1280,
  },
  {
    src: '/gallery/WhatsApp Image 2026-09-18 at 10.55.54 AM.jpeg',
    alt: 'Law student at a youth parliament event',
    width: 1280,
    height: 960,
  },
  {
    src: '/gallery/WhatsApp Image 2026-09-18 at 10.55.59 AM.jpeg',
    alt: 'Law student seated at a youth parliament event',
    width: 1280,
    height: 960,
  },
  {
    src: '/gallery/WhatsApp Image 2026-09-18 at 10.56.02 AM.jpeg',
    alt: 'Law student receiving a certificate of publication',
    width: 1600,
    height: 1200,
  },
  {
    src: '/gallery/WhatsApp Image 2026-09-18 at 10.56.10 AM.jpeg',
    alt: 'Law student holding a certificate at a formal event',
    width: 960,
    height: 1280,
  },
  {
    src: '/gallery/WhatsApp Image 2026-09-18 at 10.56.11 AM.jpeg',
    alt: 'Certificate of publication presented to Ananya Chakravertee',
    width: 1600,
    height: 1200,
  },
];

export default function LegalStudies() {
  return (
    <PageShell
      eyebrow="LEGAL STUDIES"
      title="Understand the law with clarity."
      intro="Explore accessible law and legal awareness content through Nyaya Simplified by ATS."
    >
      <section className="site-container py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">YOUR ONE-STOP PLATFORM</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Your One-Stop Platform for Legal Studies &amp; Updates
          </h2>
          <p className="mt-6 text-lg leading-8 text-maroon/75">
            Get comprehensive and easy-to-understand notes on law-related
            subjects, along with daily current legal updates, Legal GK,
            important case laws, and landmark judgments.
          </p>
          <p className="mt-4 text-lg leading-8 text-maroon/75">
            Stay updated with the latest developments in the legal field and
            strengthen your understanding of law through simplified and
            informative content.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['Law Subject Notes', 'Build a strong foundation across important law subjects.'],
            ['Daily Legal Updates', 'Keep up with the latest developments in the legal field.'],
            ['Landmark Judgments & Case Laws', 'Understand important decisions and their wider impact.'],
            ['Legal GK & Important Facts', 'Revise essential legal facts and general knowledge.'],
            ['Exam-Oriented Study Material', 'Prepare with focused and informative learning resources.'],
            ['Simplified Legal Concepts', 'Learn complex legal ideas through clear explanations.'],
          ].map(([title, text], index) => (
            <article key={title} className="detail-card">
              <p className="text-sm font-semibold text-maroon/55">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-maroon/75">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center font-serif text-2xl sm:text-3xl">
          Learn. Understand. Stay Legally Updated.
        </p>
      </section>
    <section className="bg-brand-soft py-16 sm:py-20">
      <div className="site-container">
        <div className="max-w-2xl">
          <p className="eyebrow">LEGAL LEARNING IN ACTION</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Learning law through participation and practice.
          </h2>
          <p className="mt-5 text-lg leading-8 text-maroon/75">
            Explore moments from debate competitions, youth parliament, legal
            study, and academic recognition.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {legalPhotos.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-xl bg-[#FAF7EF]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-4/3 w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
      <section className="site-container py-16 sm:py-20">
        <h2 className="font-serif text-4xl">Follow our legal channels.</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="detail-card transition-shadow hover:shadow-lg"
          >
            <p className="eyebrow">LEGAL YOUTUBE</p>
            <h2 className="mt-4 text-3xl font-black">Nyaya Simplified by ATS</h2>
            <p className="mt-4 leading-7 text-maroon/75">
              Watch simple explanations and practical legal awareness content.
            </p>
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="detail-card transition-shadow hover:shadow-lg"
          >
            <p className="eyebrow">LEGAL INSTAGRAM</p>
            <h2 className="mt-4 text-3xl font-black">@nyaya.simplified_byats</h2>
            <p className="mt-4 leading-7 text-maroon/75">
              Follow the legal learning page for updates and new content.
            </p>
          </a>
        </div>
      </section>
      <PageDetails topic="technical" />
    </PageShell>
  );
}