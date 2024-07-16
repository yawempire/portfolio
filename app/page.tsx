import Image from 'next/image';
import Screenshot from 'public/assets/screenshot.png';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <section>
      {/* <PreloadResources /> */}
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Hello, I'm Emmanuel 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I am a final-year Accounting student at KNUST with a passion for
        software engineering. Proficient in JavaScript and Python, I am
        currently delving into Frontend and Cloud Engineering. I strive to merge
        my love for numbers and technology to create innovative solutions.
      </p>
      <br />
      <p className="prose prose-neutral dark:prose-invert">
        When I’m not coding or studying (which is rare), you can find me
        enjoying episodes of Two and a Half Men. Welcome to my portfolio, where
        you can explore my journey and projects in the dynamic world of software
        development.
      </p>
      <div className="flex flex-col justify-center items-center w-full">
        <p className='mt-6 text-3xl font-semibold'>My Project</p>
        <a href="https://eatwell-app-emmanuel-asantes-projects-d1e20e3c.vercel.app/">
          <div className="bg-slate-900/70 hover:bg-slate-800/70 flex flex-col justify-center items-center w-fit p-5 rounded-lg mt-10 cursor-pointer">
            <Image
              alt=""
              src={Screenshot}
              width={500}
              className="rounded-lg object-cover"
            />
            <p className="font-bold my-2">Eat Well</p>
            <p className="font-light text-sm text-center">
              An online application store for vegetables, meat, and foodstuffs
              to enhance convenience and accessibility for customers also
              provides with opportunities for growth, efficiency, and customer
              engagement in the competitive food retail industry
            </p>
          </div>
        </a>
      </div>
      <div className="prose prose-neutral dark:prose-invert"></div>

      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/yawempire"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">follow me</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
