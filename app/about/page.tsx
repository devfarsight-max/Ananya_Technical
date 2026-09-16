import { PageDetails } from '@/components/page-details';
import { PageShell } from '@/components/page-shell';

const areas = [
  ['Quality Education', 'Academic foundations and coaching that help learners grow with confidence.'],
  ['Skill Development', 'Training and youth development programmes focused on meaningful capability.'],
  ['Educational Consultancy', 'Thoughtful guidance for learners and their educational journeys.'],
  ['Performing Arts', 'Creative practice that builds confidence, discipline and expression.'],
];

export default function About() {
  return (
    <PageShell
      eyebrow="ABOUT US"
      title="About ANANYA TECHNICAL SERVICES PRIVATE LIMITED"
      intro="ANANYA TECHNICAL SERVICES PRIVATE LIMITED (ATS) is a registered company dedicated to providing quality education, skill development, youth empowerment, and educational consultancy services."
    >
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <h2 className="text-4xl font-black leading-tight">
            Creating opportunities for students, youth and entrepreneurs.
          </h2>
          <div className="space-y-5 text-lg leading-8 text-[#681321]/70">
            <p>
              The company is committed to empowering students, young professionals, and aspiring entrepreneurs through structured coaching, skill-based training, educational programs, and youth development initiatives. Our approach focuses on nurturing knowledge, confidence, creativity, and practical skills to help individuals achieve their academic, professional, and personal goals.
            </p>
            <p>
              At ATS, we believe in creating meaningful opportunities by bringing together traditional education, modern skill development, technology, and performing arts. Through an integrated and innovative approach to learning, we aim to build a platform where education meets talent, skills meet opportunity, and individuals are empowered to grow and succeed.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-px bg-maroon sm:grid-cols-2">
          {areas.map(([title, text]) => (
            <article key={title} className="bg-[#FAF7EF] p-8">
              <h3 className="text-2xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-[#681321]/65">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 border-l-4 border-[#681321] bg-[#FAF7EF] p-8">
          <h2 className="text-2xl font-black">Our Vision</h2>
          <p className="mt-4 text-2xl font-bold leading-9">
            To create an inclusive and progressive learning ecosystem that inspires individuals to learn, develop, perform, and lead.
          </p>
        </div>
      </section>
    <PageDetails topic="about" /></PageShell>
  );
}
