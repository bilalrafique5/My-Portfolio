import React from 'react';

const services = [
  {
    title: 'Machine Learning & AI Models',
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path d="M12 3v18M3 12h18M4.5 4.5l15 15M19.5 4.5l-15 15"/>
      </svg>
    ),
    desc: 'Building predictive and classification models using Python, Scikit-Learn, TensorFlow, and PyTorch for real-world datasets.',
    tags: ['Python', 'Scikit-Learn', 'TensorFlow', 'PyTorch', 'Regression', 'Classification']
  },
  {
    title: 'Generative AI & LangChain',
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 0 0 0 20M2 12a10 10 0 0 0 20 0"/>
      </svg>
    ),
    desc: 'Developing AI-powered applications using LangChain, Groq API, and Hugging Face for text generation, restaurant name creation, and other generative tasks.',
    tags: ['LangChain', 'Groq API', 'Hugging Face', 'LLMs', 'Python']
  },
  {
    title: 'NLP & RAG Applications',
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15A7 7 0 0 0 21 12a7 7 0 0 0-1.6-3M4.6 9A7 7 0 0 0 3 12c0 1.1.26 2.1.74 3"/>
      </svg>
    ),
    desc: 'Building chatbots and real-time NLP systems with RAG architecture, FAISS vector databases, and context-aware responses for healthcare and sentiment monitoring.',
    tags: ['RAG', 'NLP', 'FAISS', 'Vector DB', 'Groq API', 'AI Chatbot']
  },
  {
    title: 'Data Analysis & Insights',
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path d="M3 3v18h18"/>
        <path d="M18 18V8H8v10h10z"/>
      </svg>
    ),
    desc: 'Performing exploratory data analysis, feature engineering, and visualization to extract actionable insights and support decision-making.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA', 'Data Visualization']
  }

  
];

const Services = () => {
  return (
    <section className="relative py-10 px-2 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-emerald-400 mb-2 tracking-tight text-center">
          My <span className="bg-gradient-to-r from-blue-600 to-emerald-400 dark:from-emerald-400 dark:to-blue-700 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          I offer a range of AI, machine learning, and data-driven solutions to help you transform data into actionable insights and build intelligent applications.
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((srv, idx) => (
            <div
              key={srv.title}
              className="group relative bg-white/80 dark:bg-gray-900/80 border border-blue-100 dark:border-emerald-900 rounded-3xl shadow-2xl p-8 flex flex-col gap-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-200/60 dark:hover:shadow-emerald-700/40"
            >
              <div className="flex items-center gap-4">
                <div>
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-400 dark:from-emerald-600 dark:to-blue-700 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {srv.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-emerald-300 tracking-tight">{srv.title}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base">{srv.desc}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {srv.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-blue-100 dark:bg-emerald-900/60 text-blue-800 dark:text-emerald-300 text-xs font-semibold tracking-wide shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Decorative Glow */}
              <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl pointer-events-none"
                style={{
                  background: idx % 2 === 0
                    ? 'radial-gradient(circle at 30% 70%, #60a5fa33 0%, transparent 80%)'
                    : 'radial-gradient(circle at 70% 30%, #34d39933 0%, transparent 80%)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
