import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Detail = {
  eyebrow: string;
  title: string;
  intro: string;
  items: [string, string][];
};
const details: Record<string, Detail> = {
  about: {
    eyebrow: 'THE ATS PHILOSOPHY',
    title: 'More than one way to grow.',
    intro:
      'Academic understanding, creative practice, and personal development can support one another. Our purpose is to help individuals find connections between what they learn, what they enjoy, and what they hope to achieve.',
    items: [
      [
        'Knowledge with purpose',
        'Education becomes meaningful when learners can connect ideas, ask thoughtful questions, and apply their understanding. We place strong foundations at the heart of academic growth.',
      ],
      [
        'Space for individuality',
        'Interests and aspirations differ from person to person. A student-centric approach recognises these differences and values confidence, curiosity, and creative expression alongside achievement.',
      ],
      [
        'Skills for the next step',
        'Communication, discipline, and the willingness to keep learning matter across many paths. Our integrated approach aims to support these qualities through education and the arts.',
      ],
    ],
  },
  education: {
    eyebrow: 'A STRONGER START',
    title: 'Understanding comes before achievement.',
    intro:
      'Our academic focus is foundation education for Classes 1 to 12 across CBSE, ICSE, and U.P. Board. Speak with our team about your class, board, subjects, and current learning needs.',
    items: [
      [
        'Conceptual understanding',
        'A strong foundation starts with making sense of the subject. Connecting new topics with existing knowledge helps learners approach questions with greater clarity.',
      ],
      [
        'Practice with intention',
        'Consistent study, revision, and reflection help turn understanding into confidence. Learning is a process of recognising gaps, asking questions, and returning to challenging ideas.',
      ],
      [
        'A thoughtful next step',
        'Whether you are strengthening school learning or exploring future preparation, discuss your goals with ATS. Competitive and entrance exam preparation remain upcoming offerings; ask about availability before planning enrolment.',
      ],
    ],
  },
  arts: {
    eyebrow: 'LEARNING THROUGH EXPRESSION',
    title: 'Build the discipline behind creativity.',
    intro:
      'Performing arts connect movement, rhythm, listening, and expression. They offer a way to explore individuality while developing the patience and attention that regular practice requires.',
    items: [
      [
        'Movement and expression',
        'Classical and semi-classical dance bring together posture, coordination, rhythm, and storytelling. Creative expression grows through attention to both technique and feeling.',
      ],
      [
        'Music and listening',
        'Vocal and instrumental learning invite a closer relationship with rhythm, melody, and attentive listening. Discuss your interests and experience with our team to explore the available options.',
      ],
      [
        'Confidence through practice',
        'A creative journey involves trying, reflecting, and refining. The aim is to nurture confidence, discipline, and self-expression at every stage, from an initial interest to a deeper commitment.',
      ],
    ],
  },
  technical: {
    eyebrow: 'LOOKING AHEAD',
    title: 'A future learning area, developed with purpose.',
    intro:
      'Technological Studies is currently in development. Specific courses, schedules, eligibility requirements, and enrolment dates have not yet been announced.',
    items: [
      [
        'Why this area matters',
        'Technology is part of how people study, communicate, and work. ATS aims to connect its wider commitment to skill development with opportunities for future-focused learning.',
      ],
      [
        'What to expect next',
        'Programme details will be shared once they are available. This page will provide a starting point for understanding the scope and requirements of future offerings.',
      ],
      [
        'Share your interests',
        'Tell us which areas you would like to explore and what you hope to learn. Our team can respond to general enquiries while this learning area is being developed.',
      ],
    ],
  },
  approach: {
    eyebrow: 'FROM INTENTION TO PRACTICE',
    title: 'A learning journey built around people.',
    intro:
      'Meaningful progress begins with understanding an individual’s starting point. Our approach brings educational purpose, creative exploration, and a commitment to personal growth into the same conversation.',
    items: [
      [
        'Begin with the individual',
        'Understand interests, aspirations, and current challenges. A learner’s questions are an important starting point for discussing useful guidance and appropriate learning opportunities.',
      ],
      [
        'Make room for effort',
        'Growth takes time and consistency. We value patient practice, thoughtful feedback, and the confidence to revisit an idea or try a different approach.',
      ],
      [
        'Look beyond a single outcome',
        'Academic progress matters, and so do curiosity, discipline, and self-expression. A broader view of learning helps connect achievement with personal development.',
      ],
    ],
  },
  team: {
    eyebrow: 'A SHARED PURPOSE',
    title: 'Supporting the whole learning journey.',
    intro:
      'ATS brings its educational, creative, and organisational priorities together around a common purpose: helping individuals learn, develop, and grow.',
    items: [
      [
        'Educational direction',
        'Our foundation is a commitment to quality education, strong understanding, and a student-centric environment that values individual learning needs.',
      ],
      [
        'Creative development',
        'The performing arts are part of our wider vision for confident, well-rounded individuals. Creativity and discipline have a place alongside academic study.',
      ],
      [
        'Open conversations',
        'Students, families, and prospective collaborators can contact our team with programme questions, learning interests, or ideas for educational engagement.',
      ],
    ],
  },
  vision: {
    eyebrow: 'OUR PURPOSE IN PRACTICE',
    title: 'One vision. Many possibilities.',
    intro:
      'Our vision and mission connect three priorities: a strong academic foundation, space for artistic expression, and opportunities for individual growth.',
    items: [
      [
        'Empowering minds',
        'Support understanding, critical thinking, and curiosity so that learners can approach new ideas with confidence and continue learning throughout life.',
      ],
      [
        'Nurturing talent',
        'Recognise the value of creativity and provide a place for interests to develop through discipline, practice, and self-expression.',
      ],
      [
        'Building futures',
        'Encourage individuals to connect their knowledge and strengths with meaningful aspirations for their academic, professional, and personal lives.',
      ],
    ],
  },
};

export function PageDetails({ topic }: { topic: string }) {
  const detail = details[topic];
  if (!detail) return null;
  return (
    <section className="border-t border-[#681321]/15 bg-brand-soft py-16 sm:py-20">
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="eyebrow">{detail.eyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            {detail.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#681321]/75">
            {detail.intro}
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {detail.items.map(([title, text], index) => (
            <article className="detail-card" key={title}>
              <p className="text-sm font-semibold text-[#681321]/55">
                0{index + 1}
              </p>
              <h3 className="mt-5 text-2xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 text-[#681321]/75">{text}</p>
            </article>
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 font-bold"
        >
          Discuss your interests <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
