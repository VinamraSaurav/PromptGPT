import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="w-full flex-center flex-col ">
        <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black dark:text-white sm:text-6xl text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <span className=" bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent text-center">
            {" "}
            AI-Powered Prompts
          </span>
        </h1>
        <p className="mt-5 text-lg text-gray-600 dark:text-white/65 sm:text-xl max-w-2xl text-center">
          Promptopia is an open-source AI prompting tool for modern world to
          discover, create and share creative prompts
        </p>
      </section>
    </div>
  );
}
