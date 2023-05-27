import Image from "next/image";
import ThemeSwitch from "@/components/theme-switch";

type ExperienceBlocProps = {
  title: string;
  place: string;
  date: string;
  description?: string;
};

const ExperienceBloc: React.FC<ExperienceBlocProps> = ({
  title,
  place,
  date,
  description,
}) => {
  return (
    <div className="flex">
      <div className="mr-8 max-w-[100px] w-full text-slate-400 dark:text-slate-400">
        {date}
      </div>
      <div className="flex flex-col flex-1">
        <h4>{title}</h4>
        <p className="text-slate-600 dark:text-gray-400">{place}</p>
        {description ? (
          <p className="text-slate-600 dark:text-gray-400 mt-2">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
};

const ContactSection = () => {
  const CONTACTS = [
    {
      label: "Email",
      value: "julien.thibeaut@gmail.com",
      href: "mailto:julien.thibeaut@gmail.com",
    },
    {
      label: "Twitter",
      value: "ibelick",
      href: "https://twitter.com/ibelick",
    },
    {
      label: "Github",
      value: "ibelick",
      href: "https://github.com/ibelick",
    },
    {
      label: "Read.CV",
      value: "ibelick",
      href: "https://read.cv/ibelick",
    },
  ];

  return (
    <section className="my-14 text-sm">
      <h3 className="mb-6 text-slate-900">Contact</h3>
      <div className="flex flex-col gap-6">
        {CONTACTS.map((contact, index) => {
          return (
            <div className="flex" key={index}>
              <div className="mr-8 max-w-[100px] w-full text-slate-400 dark:text-slate-400">
                {contact.label}
              </div>
              <div className="flex flex-col flex-1 text-slate-900 dark:text-slate-100">
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline inline-flex"
                >
                  {contact.value}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                      className="fill-current text-slate-900 dark:text-slate-100"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <main className="max-w-xl mx-auto px-6 py-20 relative min-h-screen font-light">
        <section className="flex items-center">
          <Image
            alt="Author"
            src={`https://github.com/ibelick.png`}
            width={92}
            height={92}
            className="rounded-full object-cover"
          />
          <div className="ml-4">
            <h1 className="mb-0.5 text-xl text-slate-900 dark:text-slate-100">
              Julien Thibeaut
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Senior Front-End Developer
            </p>
            <span className="text-sm text-slate-400 dark:text-slate-400">
              <a
                href="https://www.julienthibeaut.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                julienthibeaut.xyz
              </a>
            </span>
          </div>
        </section>
        <section className="my-9 text-sm">
          <h3 className="mb-1 text-slate-900 dark:text-slate-100">About</h3>
          <div className="text-slate-600 dark:text-slate-300">
            <p className="mb-4">
              Hey there! I’m Julien, a passionate software developer with a
              focus on front-end development.
            </p>
            <p>
              Favorite technologies: JavaScript, React, React Native, Next.js
              and TypeScript.
            </p>
          </div>
        </section>
        <section className="my-14 text-sm">
          <h3 className="mb-6">Work experience</h3>
          <div className="flex flex-col gap-6">
            <ExperienceBloc
              title="Senior Front-End Developer at Apple"
              place="Remote"
              date="2020 - Now"
              description="Design system, UI dev and web animations."
            />
            <ExperienceBloc
              title="Front-End Developer at Freelance"
              place="Paris, France"
              date="2017 - 2020"
            />
          </div>
        </section>
        <ContactSection />
        <div className="absolute right-4 bottom-4">
          <ThemeSwitch />
        </div>
      </main>
    </>
  );
}
