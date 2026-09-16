import { PageDetails } from '@/components/page-details';
import { PageShell } from '@/components/page-shell';

const vision = [
  {
    title: 'Empowering Through Education & Creativity',
    description:
      'To emerge as a leading institution that empowers individuals through quality education, creative expression, and skill development, fostering academic excellence and artistic growth.',
  },
  {
    title: 'Shaping Well-Rounded Individuals',
    description:
      'To create a holistic learning environment that nurtures knowledge, confidence, creativity, and talent, preparing individuals to achieve meaningful and sustainable success in the future.',
  },
];

const mission = [
  {
    title: 'Excellence in Foundational Education',
    description:
      'To provide high-quality foundation education that develops strong conceptual understanding, critical thinking, and a solid foundation for lifelong academic excellence.',
  },
  {
    title: 'Nurturing Creativity Through Performing Arts',
    description:
      'To foster creativity, confidence, discipline, and self-expression through structured dance training and comprehensive artistic development.',
  },
  {
    title: 'Student-Centric Growth & Development',
    description:
      'To create a supportive, inclusive, and student-centric learning environment that provides personalized guidance and opportunities for individuals to discover their potential and achieve overall growth and success.',
  },
];

export default function VisionMission() {
  return (
    <PageShell
      eyebrow="OUR PURPOSE"
      title="Vision & Mission"
      intro="A learning environment shaped by academic confidence, creative expression and individual growth."
    >
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <List title="OUR VISION" items={vision} />
          <List title="OUR MISSION" items={mission} />
        </div>
        <blockquote className="mt-16 border-l-4 border-[#681321] bg-brand-soft p-8 text-2xl font-bold leading-relaxed sm:p-10 sm:text-3xl">
          &ldquo;Empowering Minds. Nurturing Talent. Building Futures.&rdquo;
        </blockquote>
      </section>
      <PageDetails topic="vision" />
    </PageShell>
  );
}

function List({
  title,
  items,
}: {
  title: string;
  items: { title: string; description: string }[];
}) {
  return (
    <div>
      <h2 className="text-3xl font-black sm:text-4xl">{title}</h2>
      <ol className="mt-8">
        {items.map((item, index) => (
          <li key={item.title} className="border-t border-[#681321]/25 py-7">
            <h3 className="text-xl font-bold leading-8 sm:text-2xl">
              <span className="mr-3 text-brand-accent">
                {String(index + 1).padStart(2, '0')}.
              </span>
              {item.title}
            </h3>
            <p className="mt-3 text-lg leading-8 text-[#681321]/80">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
