import Image from 'next/image';
import { PageShell } from '@/components/page-shell';
import { galleryPhotos } from '@/src/data/gallery';

export const metadata = {
  title: 'Achievements | Ananya Technical Services',
  description:
    'Explore performing arts, practice sessions, and award events at Ananya Technical Services Private Limited.',
};

const sections = [
  {
    title: 'Performing Arts',
    id: 'performing-arts',
    description:
      'Movement, costume, and expression come together in these moments of dance and performance.',
  },
  {
    title: 'Practice Sessions',
    id: 'practice-sessions',
    description:
      'A closer look at the patient practice behind creative expression: exploring gestures, posture, and rhythm.',
  },
  {
    title: 'Awards & Recognition',
    id: 'awards',
    description:
      'Photographs and shared coverage from award presentations, events, and moments of recognition.',
  },
];

export default function Achievements() {
  return (
    <PageShell
      eyebrow="OUR ACHIEVEMENTS"
      title="Moments of expression and achievement."
      intro="Explore our performing arts, practice sessions, and celebrations. Select any photo to view it at full size."
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
        <nav
          aria-label="Achievement categories"
          className="mb-14 flex flex-wrap gap-3 border-b border-[#681321]/15 pb-8"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={'#' + section.id}
              className="border border-[#681321]/20 px-5 py-3 text-sm font-bold transition-colors hover:border-[#681321] hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#681321]"
            >
              {section.title}
            </a>
          ))}
        </nav>
        <div className="space-y-20">
          {sections.map((section, sectionIndex) => {
            const photos = galleryPhotos.filter(
              (photo) => photo.category === section.title,
            );
            return (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={section.id + '-heading'}
                className="scroll-mt-28"
              >
                <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
                  <h2
                    id={section.id + '-heading'}
                    className="text-3xl font-black tracking-tight sm:text-4xl"
                  >
                    {section.title}
                  </h2>
                  <p className="text-sm text-[#681321]/60">
                    {photos.length} photos
                  </p>
                </div>
                <p className="mb-7 max-w-2xl text-lg leading-8 text-[#681321]/75">
                  {section.description}
                </p>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {photos.map((photo, index) => (
                    <a
                      key={photo.src}
                      href={photo.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={
                        photo.alt + ' - open full-size image in a new tab'
                      }
                      className="group flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl border border-[#681321]/10 bg-maroon transition-shadow hover:shadow-xl focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#681321]"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        loading={
                          sectionIndex === 0 && index < 3 ? 'eager' : 'lazy'
                        }
                        decoding="async"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="h-full w-full object-contain transition-opacity group-hover:opacity-90"
                      />
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}