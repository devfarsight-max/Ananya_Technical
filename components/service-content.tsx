import Image from 'next/image';
export function Content({
  points,
  image,
  alt,
}: {
  points: string[];
  image: string;
  alt: string;
}) {
  const arts = image.startsWith('/gallery/');
  return (
    <section className="site-container py-16 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">
            {arts ? 'DISCOVER YOUR CREATIVE SIDE' : 'LEARN WITH UNDERSTANDING'}
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            {arts
              ? 'An art form. A discipline. A way to be yourself.'
              : 'Strong foundations open new possibilities.'}
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#681321]/75">
            {arts
              ? 'Explore the relationship between technique and expression through dance and music. Our performing arts focus reflects a belief that creativity, confidence, and discipline grow together.'
              : 'Academic confidence begins with a clear understanding of the basics. ATS supports school learning through coaching that places conceptual understanding and meaningful progress at the centre.'}
          </p>
          <div className="mt-8 space-y-4">
            {points.map((point, i) => (
              <div
                key={point}
                className="flex gap-4 border-t border-[#681321]/20 pt-4"
              >
                <span className="text-sm font-semibold text-[#681321]/55">
                  0{i + 1}
                </span>
                <h3 className="text-lg font-bold">{point}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-xl bg-brand-soft">
          {arts ? (
            <Image
              src={image}
              alt={alt}
              width={853}
              height={1280}
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="max-h-[520px] w-full object-contain"
            />
          ) : (
            <Image
              src={image}
              alt={alt}
              width={1200}
              height={1000}
              unoptimized
              className="h-[380px] w-full object-cover sm:h-[460px]"
            />
          )}
        </div>
      </div>
    </section>
  );
}
