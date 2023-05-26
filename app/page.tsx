import Image from "next/image";
import ThemeSwitch from "@/components/theme-switch";

type ExperienceBlocProps = {
  title: string;
  company: string;
  date: string;
  description: string;
};

const ExperienceBloc: React.FC<ExperienceBlocProps> = ({
  title,
  company,
  date,
  description,
}) => {
  return (
    <div className="flex">
      <div className="mr-8 max-w-[100px] w-full">{date}</div>
      <div className="flex flex-col flex-1">
        <h4 className="font-bold">{title}</h4>
        <p className="text-gray-500 dark:text-gray-400 ">{company}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <main className="max-w-xl mx-auto px-6 py-20 relative min-h-screen">
        <section className="flex items-center">
          <Image
            alt="Author"
            src={`https://github.com/ibelick.png`}
            width={92}
            height={92}
            className="rounded-full object-cover"
          />
          <div className="ml-4">
            <h1 className="mb-0.5 text-xl">Julien Thibeaut</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Senior Front-End Developer
            </p>
            <span className="text-sm">
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
          <h3 className="mb-1">About</h3>
          <div>
            <p className="mb-4">
              Hey there! I’m Julien, a passionate software developer with a
              focus on front-end development.
            </p>
            <p>
              Favorite technologies: JavaScript, React, React Native, Next.js,
              TypeScript, web3
            </p>
          </div>
        </section>
        <section className="my-14 text-sm">
          <h3 className="mb-6">Work experience</h3>
          <div className="flex flex-col gap-8">
            <ExperienceBloc
              title="Senior Front-End Developer"
              company="Sorare"
              date="2020 - Now"
              description="Sorare is a global fantasy football game where you can trade official digital collectibles. I'm working on the web app, the mobile app and the NFT marketplace."
            />
            <ExperienceBloc
              title="Front-End Developer"
              company="Sorare"
              date="2019 - 2020"
              description="Sorare is a global fantasy football game where you can trade official digital collectibles. I'm working on the web app, the mobile app and the NFT marketplace."
            />
          </div>
        </section>
        <div className="absolute right-4 bottom-4">
          <ThemeSwitch />
        </div>
      </main>
    </>
  );
}
