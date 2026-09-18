import Image from 'next/image';
import { PageDetails } from '@/components/page-details';
import { PageShell } from '@/components/page-shell';
import { Content } from '@/components/service-content';

const competitive = ['IIT', 'JEE', 'NEET — UG & PG', 'UPSC', 'PCS-J', 'TET', 'Super TET'];
const entrance = ['CUET — UG & PG', 'CLAT — UG & PG', 'AILET', 'CAT', 'IPMAT'];

const learningPhotos = [
	{
		src: '/gallery/WhatsApp Image 2026-09-17 at 5.53.39 PM.jpeg',
		alt: 'Teacher explaining computer fundamentals to students in a classroom',
		width: 1600,
		height: 1064,
	},
	{
		src: '/gallery/WhatsApp Image 2026-09-17 at 5.53.40 PM (1).jpeg',
		alt: 'Teacher writing about types of computers on a classroom whiteboard',
		width: 1600,
		height: 1064,
	},
	{
		src: '/gallery/image.png',
		alt: 'Teacher explaining types of accounts to students in a classroom',
		width: 629,
		height: 471,
	},
];

const studentAchievements = [
	{
		src: '/gallery/WhatsApp Image 2026-09-18 at 10.53.56 AM.jpeg',
		alt: 'Students receiving first, second, and third rank recognition',
		width: 1200,
		height: 1600,
	},
	{
		src: '/gallery/WhatsApp Image 2026-09-18 at 10.53.57 AM (1).jpeg',
		alt: 'Std-9 rankers celebrating their academic results',
		width: 1200,
		height: 1600,
	},
	{
		src: '/gallery/WhatsApp Image 2026-09-18 at 10.53.57 AM (2).jpeg',
		alt: 'School leaders presenting an award at a recognition ceremony',
		width: 1600,
		height: 1200,
	},
	{
		src: '/gallery/WhatsApp Image 2026-09-18 at 10.53.57 AM.jpeg',
		alt: 'Student celebrating a strong Class 10 board result with a teacher',
		width: 1200,
		height: 1600,
	},
	{
		src: '/gallery/WhatsApp Image 2026-09-18 at 10.53.58 AM (1).jpeg',
		alt: 'Students and teachers gathered for a school achievement ceremony',
		width: 1600,
		height: 1200,
	},
	{
		src: '/gallery/WhatsApp Image 2026-09-18 at 10.53.58 AM.jpeg',
		alt: 'Students in traditional dress with teachers at a school event',
		width: 1600,
		height: 1200,
	},
	{
		src: '/gallery/WhatsApp Image 2026-09-18 at 10.53.59 AM (1).jpeg',
		alt: 'Students and teachers posing together at school',
		width: 1200,
		height: 1600,
	},
	{
		src: '/gallery/WhatsApp Image 2026-09-18 at 10.53.59 AM.jpeg',
		alt: 'CBSE Class 10 board result toppers and their scores',
		width: 1200,
		height: 1600,
	},
];

export default function Education() {
	return (
		<PageShell
			eyebrow="EDUCATIONAL STUDIES"
			title="Build Strong Foundations. Reach Further."
			intro="Quality academic coaching for students from Class 1 to Class 12 across CBSE, ICSE and U.P. Board."
		>
			<Content
				points={['Traditional Coaching', 'CBSE, ICSE & U.P. Board', 'Classes 1–12']}
				image={learningPhotos[0].src}
				alt={learningPhotos[0].alt}
			/>
			<section className="site-container py-16 sm:py-20">
				<div className="max-w-2xl">
					<p className="eyebrow">LEARNING IN ACTION</p>
					<h2 className="mt-4 font-serif text-4xl sm:text-5xl">
						Classrooms where knowledge comes alive.
					</h2>
					<p className="mt-5 text-lg leading-8 text-maroon/75">
						From computer fundamentals to creative practice, our sessions bring
						clear explanations, focused attention, and confident participation
						together.
					</p>
				</div>
				<div className="mt-10 grid gap-5 md:grid-cols-3">
					{learningPhotos.map((photo) => (
						<figure key={photo.src} className="overflow-hidden rounded-xl bg-brand-soft">
							<Image
								src={photo.src}
								alt={photo.alt}
								width={photo.width}
								height={photo.height}
								sizes="(min-width: 768px) 33vw, 100vw"
								className="aspect-4/3 w-full object-cover"
							/>
						</figure>
					))}
				</div>
			</section>
			<section className="bg-brand-soft py-16 sm:py-20">
				<div className="site-container">
					<div className="max-w-2xl">
						<p className="eyebrow">STUDENT ACHIEVEMENTS</p>
						<h2 className="mt-4 font-serif text-4xl sm:text-5xl">
							Celebrating effort, progress, and excellence.
						</h2>
						<p className="mt-5 text-lg leading-8 text-maroon/75">
							Every result reflects commitment from students, families, and
							teachers. These moments celebrate the journeys behind the marks.
						</p>
					</div>
					<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{studentAchievements.map((photo) => (
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
			<section className="bg-[#FAF7EF] px-5 py-24 sm:px-8">
				<div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
					<Exam title="Competitive Exam Preparation" items={competitive} />
					<Exam title="Entrance Exam Preparation" items={entrance} />
				</div>
				<p className="mx-auto mt-8 max-w-7xl border-l-4 border-maroon pl-5 font-bold">
					Both preparation areas are launching soon.
				</p>
			</section>
			<PageDetails topic="education" />
		</PageShell>
	);
}

function Exam({ title, items }: { title: string; items: string[] }) {
	return (
		<article className="border-t-2 border-maroon pt-6">
			<p className="text-xs font-bold tracking-[.2em] text-brand-accent">LAUNCHING SOON</p>
			<h2 className="mt-3 text-3xl font-black">{title}</h2>
			<div className="mt-6 flex flex-wrap gap-2">
				{items.map((item) => (
					<span key={item} className="border border-maroon/20 px-3 py-2 text-sm">
						{item}
					</span>
				))}
			</div>
		</article>
	);
}
