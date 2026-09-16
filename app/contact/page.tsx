import Image from 'next/image';
import { PageShell } from '@/components/page-shell';
import { Phone, Mail, MapPin } from 'lucide-react';
export default function Contact() {
  return (
    <PageShell
      eyebrow="CONTACT"
      title="Let's start a learning journey."
      intro="Have a question about academic coaching, performing arts, or educational guidance? Share your interests and explore the next step with our team."
    >
      <section className="site-container grid gap-10 py-16 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow">WE WOULD LIKE TO HEAR FROM YOU</p>
          <h2 className="mt-4 font-serif text-4xl">
            Bring your questions.
            <br />
            Share your goals.
          </h2>
          <p className="mt-5 leading-8 text-[#681321]/75">
            Tell us the programme you are interested in, your current learning
            stage, and what you hope to achieve. For course availability,
            timings, and fees, please contact our team directly.
          </p>
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <Phone size={22} />
              <div>
                <h3 className="font-bold">Call our team</h3>
                <a
                  className="mt-2 block hover:underline"
                  href="tel:05442796809"
                >
                  05442-796809
                </a>
                <a
                  className="mt-1 block hover:underline"
                  href="tel:+917522001459"
                >
                  +91 7522001459
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail size={22} />
              <div>
                <h3 className="font-bold">Email us</h3>
                <a
                  className="mt-2 block break-all hover:underline"
                  href="mailto:info@atspvl.com"
                >
                  info@atspvl.com
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin size={22} />
              <div>
                <h3 className="font-bold">Find us in Mirzapur</h3>
                <p className="mt-2 leading-7">
                  House No. 1528/21, Ward No. 9,
                  <br />
                  Ghurahupatti, Mirzapur,
                  <br />
                  Uttar Pradesh
                </p>
                <p className="mt-3 text-sm leading-6 text-[#681321]/75">
                  Please call ahead to discuss your enquiry and confirm a
                  suitable time to visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="site-container pb-20">
        <div className="max-w-2xl">
          <p className="eyebrow">FOLLOW OUR CHANNELS</p>
          <h2 className="mt-4 font-serif text-4xl">
            Connect with us on Instagram.
          </h2>
          <p className="mt-4 leading-7 text-[#681321]/75">
            Scan the QR code or open the handle to follow the right page for
            performing arts and legal learning.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Performing Arts Instagram',
              handle: '@ghungrootales.by_ananya',
              image: '/gallery/instagram-performing-arts.png',
              href: 'https://www.instagram.com/ghungrootales.by_ananya/',
            },
            {
              title: 'Legal Instagram',
              handle: '@nyaya.simplified_byats',
              image: '/gallery/instagram-legal.png',
              href: 'https://www.instagram.com/nyaya.simplified_byats/',
            },
          ].map((channel) => (
            <article key={channel.handle} className="detail-card">
              <h3 className="text-xl font-bold">{channel.title}</h3>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-semibold hover:underline"
              >
                {channel.handle}
              </a>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={'Open ' + channel.title}
                className="mt-5 block overflow-hidden rounded-lg bg-brand-soft"
              >
                <Image
                  src={channel.image}
                  alt={channel.title + ' QR code'}
                  width={768}
                  height={1024}
                  className="mx-auto aspect-[3/4] w-full max-w-sm object-contain"
                />
              </a>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="font-serif text-4xl">Watch our YouTube channels.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <a
              href="https://youtube.com/@ghungrootales.by_ananya?si=Qgr-7cMWKZBdImtO"
              target="_blank"
              rel="noopener noreferrer"
              className="detail-card block transition-shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">Performing Arts YouTube</h3>
              <p className="mt-2 leading-7 text-[#681321]/75">
                Ghungroo Tales by Ananya
              </p>
            </a>
            <a
              href="https://youtube.com/@nyaya.simplified_byats?si=4-gADF8BkUpm1NOg"
              target="_blank"
              rel="noopener noreferrer"
              className="detail-card block transition-shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">Legal YouTube</h3>
              <p className="mt-2 leading-7 text-[#681321]/75">
                Nyaya Simplified by ATS
              </p>
            </a>
          </div>
        </div>
      </section>
      <section className="site-container pb-20">
        <h2 className="font-serif text-4xl">Before you get in touch</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            [
              'Academic enquiries',
              'Share the student’s class, education board, subjects, and the areas where support is needed.',
            ],
            [
              'Performing arts enquiries',
              'Let us know whether you are interested in dance or music, your experience level, and what you would like to explore.',
            ],
            [
              'Future programmes',
              'Technological Studies, theatre, and examination preparation include upcoming offerings. Ask our team for the latest availability.',
            ],
          ].map(([title, text]) => (
            <article key={title} className="detail-card">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 text-[#681321]/75">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
