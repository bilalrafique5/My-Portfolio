import React from 'react'
import TextBox from '../ui/TextBox';

const Resume = () => {
  return (
    <div className="relative my-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-emerald-400 mb-2 tracking-tight text-center">
        <span className="bg-gradient-to-r from-blue-600 to-emerald-400 dark:from-emerald-400 dark:to-blue-700 bg-clip-text text-transparent">Resume</span>
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
        Here are my Skills, Experience & Education!
      </p>
      <div className='flex flex-col lg:flex-row items-center justify-center lg:gap-10 gap-5'>
        {/* Left Side */}
        <div className="w-full lg:w-[45%] space-y-6">
          {/* Education */}
          <div className="p-6 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl backdrop-blur-md border border-blue-100 dark:border-emerald-900">
            <h3 className="text-2xl font-extrabold dark:text-emerald-400 text-blue-800 mb-2 tracking-tight">Education</h3>
            <div className="flex flex-wrap justify-between mb-1">
              <TextBox content="2022 - 2026" />
              <TextBox content="GPA: 3.04/4.0" />
            </div>
            <i className="block text-gray-600 dark:text-gray-300 mb-2">BS Computer Science from NTU, Faisalabad.</i>
            <hr className="my-2 border-t-2 border-blue-700 dark:border-emerald-500 rounded-full" />
            <div className="flex flex-wrap justify-between mb-1">
              <TextBox content="2020 - 2022" />
              <TextBox content="82%" />
            </div>
            <i className="block text-gray-600 dark:text-gray-300">ICS from Govt College Samundari </i>
          </div>
          {/* Skills */}
          <div className="p-6 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl backdrop-blur-md border border-blue-100 dark:border-emerald-900">
            <h3 className="text-2xl font-extrabold dark:text-emerald-400 text-blue-800 mb-2 tracking-tight">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <TextBox content="Python" />
              <TextBox content="c++" />
              <TextBox content="Pandas" />
              <TextBox content="Numpy" />
              <TextBox content="Matplotlib" />
              <TextBox content="Seaborn" />
              <TextBox content="Beautiful Soap" />
              <TextBox content="Selenium" />
              <TextBox content="Sci-kit Learn" />
              <TextBox content="TensorFlow" />
              <TextBox content="Deep Learning" />
              <TextBox content="NLP" />
              <TextBox content="MySQL" />
              <TextBox content="Git" />
              <TextBox content="GitHub" />
              <TextBox content="LangChain" />
              <TextBox content="LangSmith" />
              <TextBox content="RAG" />
              <TextBox content="Html & CSS" />
            </div>
          </div>
        </div>

        {/* Vertical Divider with Dot */}
        <div className="hidden lg:flex flex-col items-center relative h-[420px] w-16">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-700 via-blue-300 to-emerald-400 dark:from-emerald-700 dark:via-emerald-400 dark:to-blue-700 rounded-full shadow-lg"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 border-4 border-blue-700 dark:border-emerald-400 rounded-full flex items-center justify-center shadow-xl z-10">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v4l2 2" />
            </svg>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[45%] p-6 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl backdrop-blur-md border border-blue-100 dark:border-emerald-900">
          <h3 className="text-2xl font-extrabold dark:text-emerald-400 text-blue-800 mb-2 tracking-tight">Experience</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow flex flex-col gap-1">
              <span className="font-semibold text-lg text-blue-700 dark:text-emerald-400">AI/ML Engineer Intern</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Optimum Tech — February 2025 - May 2025</span>
              <span className="text-gray-700 dark:text-gray-300">
                Worked on building and fine-tuning machine learning models and large language models (LLMs) including LLama.
                Developed Retrieval-Augmented Generation (RAG) applications using <span className="font-semibold">LangChain</span> and <span className="font-semibold">LangSmith</span>.
                Created AI-powered insights, experiments, and workflows in <span className="font-semibold">Jupyter Notebooks</span> to optimize model performance and real-time applications.
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Resume;