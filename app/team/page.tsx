import Image from 'next/image';
import { PageDetails } from '@/components/page-details';
import { PageShell } from '@/components/page-shell';

const team = [
	{
		name: 'Mr. D. Chakravertee',
		role: 'Director — Operations',
		image: '/gallery/Screenshot 2026-09-18 122620.png',
		alt: 'Mr. D. Chakravertee, Director of Operations',
	},
	{
		name: 'Ms. Ananya Chakravertee',
		role: 'Executive Director',
		image: '/gallery/Screenshot 2026-09-18 122630.png',
		alt: 'Ms. Ananya Chakravertee, Executive Director',
	},
	{
		name: 'Mrs. Nidhi Chakravertee',
		role: 'Director — Education Team',
		image: '/gallery/Screenshot 2026-09-18 122641.png',
		alt: 'Mrs. Nidhi Chakravertee, Director of the Education Team',
	},
];

export default function Team() {
	return (
		<PageShell
			eyebrow="CORE TEAM"
			title="People guiding the work."
			intro="Our leadership team supports every learner’s journey through focused educational and creative programmes."
		>
			<section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
				<div className="grid gap-px bg-maroon md:grid-cols-3">
					{team.map((member, index) => (
						<article key={member.name} className="bg-[#FAF7EF] p-8">
							<p className="font-bold text-brand-accent">0{index + 1}</p>
							<Image
								src={member.image}
								alt={member.alt}
								width={768}
								height={1024}
								sizes="(min-width: 768px) 30vw, 100vw"
								className="mt-6 aspect-3/4 w-full rounded-lg object-cover"
							/>
							<h2 className="mt-8 text-2xl font-black">{member.name}</h2>
							<p className="mt-3 text-maroon/65">{member.role}</p>
						</article>
					))}
				</div>
			</section>
			<PageDetails topic="team" />
		</PageShell>
	);
}
