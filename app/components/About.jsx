"use client";
import Image from "next/image";
import Arrow from "../ui/Arrow";

const About = () => {
  return (
    <section className="relative px-4 sm:px-6 md:px-10 py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 tracking-tight">
        <span className="bg-gradient-to-r from-gray-900 to-emerald-500 dark:from-emerald-400 dark:to-gray-300 bg-clip-text text-transparent">
          About Me
        </span>
      </h2>

      <div className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/40 shadow-lg rounded-3xl p-6 sm:p-10 mx-auto max-w-6xl flex flex-col lg:flex-row gap-10 items-center border border-gray-200/50 dark:border-gray-700/40">
        
        {/* Profile Image */}
        <div className="flex-shrink-0 flex justify-center items-center">
          <div className="relative group">
            <Image
              width={200}
              height={200}
              src="/profile.jpeg"
              alt="profile"
              className="rounded-full border-4 border-gray-200 dark:border-emerald-700 shadow-xl transition-all duration-500 group-hover:scale-[1.05]"
            />
            <span className="absolute bottom-3 right-3 text-white text-xs bg-gradient-to-br from-gray-800 to-emerald-500 dark:from-emerald-600 dark:to-gray-700 px-3 py-1 rounded-full font-semibold shadow-md">
              DS & AI/ML Engineer
            </span>
          </div>
        </div>

        {/* About Text */}
        <div className="flex-1 w-full">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-emerald-400 mb-4">
            Data Scientist & AI/ML Engineer
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg mb-8">
            I'm a <span className="font-bold text-emerald-600 dark:text-emerald-400">22-year-old Computer Science undergraduate</span> (7th semester) passionate about data, AI, and machine learning.<br />
            Self-motivated with hands-on experience in building ML models, AI-powered applications, and Generative AI solutions using <span className="font-semibold text-gray-900 dark:text-emerald-300">Python, Pandas, Scikit-Learn, TensorFlow, PyTorch, LangChain, FastAPI</span>.<br />
            I enjoy turning data into actionable insights and innovative solutions, and thrive in collaborative, fast-paced, and research-driven environments.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-base sm:text-lg">
            
            <div className="flex gap-3 items-start">
              <Arrow />
              <span className="font-semibold text-gray-900 dark:text-gray-200">Age:</span>
              <span className="text-gray-800 dark:text-gray-300">22</span>
            </div>

            <div className="flex gap-3 items-start">
              <Arrow />
              <span className="font-semibold text-gray-900 dark:text-gray-200">Degree:</span>
              <span className="text-gray-800 dark:text-gray-300">
                Bachelor of Science in Computer Science
              </span>
            </div>

            <div className="flex gap-3 items-start">
              <Arrow />
              <span className="font-semibold text-gray-900 dark:text-gray-200">Location:</span>
              <span className="text-gray-800 dark:text-gray-300">Faisalabad, Pakistan, Asia</span>
            </div>

            <div className="flex gap-3 items-start">
              <Arrow />
              <span className="font-semibold text-gray-900 dark:text-gray-200">Email:</span>
              <a
                href="mailto:chbilalrafique2@gmail.com"
                className="underline text-gray-800 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition"
              >
                chbilalrafique2@gmail.com
              </a>
            </div>

            <div className="flex gap-3 items-start">
              <Arrow />
              <span className="font-semibold text-gray-900 dark:text-gray-200">Phone:</span>
              <a
                href="tel:+923147994691"
                className="font-mono underline text-gray-800 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition"
              >
                +923147994691
              </a>
            </div>

            <div></div>

            <div className="flex gap-4 items-start sm:col-span-2">
              <Arrow />
              <span className="font-semibold text-gray-900 dark:text-gray-200">Job:</span>
              <span className="text-gray-800 dark:text-gray-300">
                Open to work{" "}
                <span className="text-xs text-gray-500">(remote, hybrid & onsite)</span>
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
