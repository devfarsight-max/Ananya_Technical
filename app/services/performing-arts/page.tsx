import Image from 'next/image';
import { PageDetails } from '@/components/page-details';
import { PageShell } from '@/components/page-shell';
import { Content } from '@/components/service-content';

const disciplines = [
	['Dance', 'Classical: Kathak, Bharatanatyam. Semi-Classical: Bollywood, Classical Fusions. Western Classical: Starting Soon.'],
	['Music', 'Vocal: Shastriya Sangeet. Instrumental: Guitar, Harmonium, Tabla.'],
	['Theatre & Drama', 'Starting Soon.'],
];

const kathakClassImage = '/gallery/WhatsApp Image 2026-09-17 at 5.53.38 PM.jpeg';

export default function PerformingArts() {
	return (
		<PageShell
			eyebrow="PERFORMING ARTS"
			title="Where Creativity Takes Center Stage."
			intro="Dance, music and performing arts programmes that nurture creativity, confidence and discipline."
		>
			<Content
				points={['Classical & Semi-Classical Dance', 'Vocal & Instrumental Music', 'Theatre & Drama — starting soon']}
				image="/gallery/dance-portrait.jpeg"
				alt="Classical dance pose in a traditional red and gold costume"
			/>
			<section className="site-container py-16 sm:py-20">
				<div className="grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
					<div>
						<p className="eyebrow">LEARNING THROUGH EXPRESSION</p>
						<h2 className="mt-4 font-serif text-4xl sm:text-5xl">
							Technique grows through practice and shared attention.
						</h2>
						<p className="mt-5 text-lg leading-8 text-maroon/75">
							Our classes create space for disciplined practice, cultural connection,
							and the confidence to express each movement with meaning.
						</p>
					</div>
					<div className="overflow-hidden rounded-xl bg-brand-soft">
						<Image
							src={kathakClassImage}
							alt="Kathak teacher guiding students through expressive hand movements"
							width={1456}
							height={1088}
							sizes="(min-width: 1024px) 55vw, 100vw"
							className="aspect-4/3 w-full object-cover"
						/>
					</div>
				</div>
			</section>
			<section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
				<div className="grid gap-6 md:grid-cols-3">
					{disciplines.map(([title, text], i) => (
						<article key={title} className="border-t-2 border-maroon pt-6">
							<p className="font-bold text-brand-accent">0{i + 1}</p>
							<h2 className="mt-4 text-3xl font-black">{title}</h2>
							<p className="mt-4 leading-7 text-maroon/70">{text}</p>
						</article>
					))}
				</div>
				<div className="mt-16 border-t border-maroon/15 pt-10">
					<h2 className="font-serif text-4xl">Follow our performing arts channels.</h2>
					<div className="mt-6 grid gap-6 md:grid-cols-2">
						<a href="https://youtube.com/@ghungrootales.by_ananya?si=Qgr-7cMWKZBdImtO" target="_blank" rel="noopener noreferrer" className="detail-card transition-shadow hover:shadow-lg">
							<p className="eyebrow">PERFORMING ARTS YOUTUBE</p>
							<h3 className="mt-4 text-2xl font-black">Ghungroo Tales by Ananya</h3>
							<p className="mt-3 leading-7 text-maroon/75">Watch performing arts classes, dance practice, and creative learning.</p>
						</a>
						<a href="https://www.instagram.com/ghungrootales.by_ananya/" target="_blank" rel="noopener noreferrer" className="detail-card transition-shadow hover:shadow-lg">
							<p className="eyebrow">PERFORMING ARTS INSTAGRAM</p>
							<h3 className="mt-4 text-2xl font-black">@ghungrootales.by_ananya</h3>
							<p className="mt-3 leading-7 text-maroon/75">Follow the performing arts page for updates and new content.</p>
						</a>
					</div>
				</div>
			</section>
			<PageDetails topic="arts" />
		</PageShell>
	);
}
