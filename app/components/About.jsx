import Image from 'next/image'
import React from 'react'
import Arrow from '../ui/Arrow'

const About = () => {
  return (
    <section className="relative py-8 px-2">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-emerald-400 mb-2 tracking-tight text-center">
        <span className="bg-gradient-to-r from-blue-600 to-emerald-400 dark:from-emerald-400 dark:to-blue-700 bg-clip-text text-transparent">About Me</span>
      </h2>
      <div className="backdrop-blur-md flex flex-col lg:flex-row items-center gap-8 transition-all duration-700">
        {/* Profile Image */}
        <div className="flex-shrink-0 flex justify-center items-center w-full md:w-auto">
          <div className="relative group">
            <Image
              width={180}
              height={180}
              src='/profile.jpeg'
              alt='profile'
              className="rounded-full border-4 border-blue-200 dark:border-emerald-700 shadow-xl transition-transform duration-500 group-hover:scale-105 bg-white"
            />
            <span className="absolute bottom-2 right-2 bg-gradient-to-tr from-blue-600 to-emerald-400 dark:from-emerald-600 dark:to-blue-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              Data Scientist
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 w-full">
          <h3 className="text-xl sm:text-2xl mt-4 font-extrabold text-blue-950/90 dark:text-emerald-400 mb-3 tracking-tight">
            Data Scientist & Machine Learning Engineer
          </h3>
          <p className="mb-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a <span className="font-bold text-blue-700 dark:text-emerald-400">22-year-old Computer Science undergraduate</span> (7th semester) passionate about data, AI, and machine learning.<br className="hidden sm:inline" />
            Self-motivated with hands-on experience in building ML models, AI-powered applications, and Generative AI solutions using <span className="font-semibold text-blue-700 dark:text-emerald-400">Python, Pandas, Scikit-Learn, TensorFlow, PyTorch, LangChain, FastAPI</span>.<br className="hidden md:inline" />
            I enjoy turning data into actionable insights and innovative solutions, and thrive in collaborative, fast-paced, and research-driven environments.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg">
            {/* Age */}
            <div className="flex items-top gap-2">
              <Arrow />
              <span className="font-bold">Age:</span>
              <span>22</span>
            </div>
            {/* Degree */}
            <div className="flex items-top gap-2">
              <Arrow />
              <span className="font-bold">Degree:</span>
              <span>BSCS</span>
            </div>
            {/* Location */}
            <div className="flex items-top gap-2">
              <Arrow />
              <span className="font-bold">Location:</span>
              <span>Faisalabad, Pakistan, Asia</span>
            </div>
            {/* Email */}
            <div className="flex items-top gap-2">
              <Arrow />
              <span className="font-bold">Email:</span>
              <a
                href="mailto:chbilalrafique2@gmail.com"
                className="underline break-all hover:text-blue-700 dark:hover:text-emerald-400 transition"
              >
                chbilalrafique2@gmail.com
              </a>
            </div>
            {/* Phone */}
            <div className="flex items-top gap-2">
              <Arrow />
              <span className="font-bold">Phone:</span>
              <a href="tel:+923147994691" className="font-mono underline break-all hover:text-blue-700 dark:hover:text-emerald-400 transition">+923147994691</a>
            </div>
            {/* Freelance */}
            <div className="flex items-top gap-2">

            </div>
            {/* Job */}
            <div className="flex items-top gap-2 col-span-1 sm:col-span-2">
              <Arrow />
              <span className="font-bold">Job:</span>
              <span>Open to work <span className="text-xs text-gray-500">(remote, hybrid & onsite)</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About