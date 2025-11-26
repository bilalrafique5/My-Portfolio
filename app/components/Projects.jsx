import React from 'react'
import Image from 'next/image'
// If using shadcn/ui carousel:
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const projects = [
  {
    title: "Real-Time Sentiment Monitoring",
    desc: "A real-time sentiment monitoring system using X (Twitter) data, NLP models, and live dashboard updates.",
    image: "/projects/sentiment.png",
    tags: ["NLP", "Real-Time Data", "Streamlit", "X(Formerly Twitter) API Integration"],
    link: "https://real-time-sentiment-monitoring-systemgit-nfi28r3xlbsrni3rmg3ap.streamlit.app/",
    github: "https://github.com/bilalrafique5/Real-Time-Sentiment-Monitoring-System.git"
  },
  {
    title: "Medical Charges Prediction",
    desc: "A regression-based ML model that predicts medical insurance charges using demographic and health-related attributes.",
    image: "/projects/charges.png",
    tags: ["Regression", "Scikit-Learn", "EDA", "Feature Engineering"],
    github: "https://github.com/bilalrafique5/Charges-Prediction.git"
  },
  {
    title: "FastAPI ML Deployment",
    desc: "Built and deployed machine learning models using FastAPI, enabling real-time inference and RESTful API communication.",
    image: "/projects/fastapi.png",
    tags: ["FastAPI", "ML Deployment", "Python"],
    github: "https://github.com/bilalrafique5/FastAPI-backend.git"
  },
  {
    title: "Image Classification MNIST",
    desc: "A deep learning model trained on MNIST using convolutional neural networks (CNNs) for handwritten digit recognition.",
    image: "/projects/mnist.png",
    tags: ["Deep Learning", "CNN", "TensorFlow", "Keras"],
    link: "https://bilalrafique456.streamlit.app/",
    github: "https://github.com/bilalrafique5/MNIST.git"
  },
  {
    title: "Pima Indians Diabetes Prediction",
    desc: "A supervised learning model predicting diabetes using the Pima Indians dataset with strong feature engineering.",
    image: "/projects/diabetes.png",
    tags: ["Classification", "EDA", "Scikit-Learn", "Python"],
    github: "https://github.com/bilalrafique5/Pima-Indian-Diabetes-model.git"
  },
  {
    title: "Salary Prediction",
    desc: "A regression model predicting salaries based on experience, skill level, and domain.",
    image: "/projects/salary.png",
    tags: ["Regression", "Data Preprocessing", "ML Models"],
    github: "https://github.com/bilalrafique5/Salary-Prediction-on-the-basis-of-yearsExperience-.git"
  },
  {
    title: "LangChain + Groq — AI Restaurant Builder",
    desc: "An AI-powered app that generates restaurant names, taglines, menus, and logos fully based on the user's selected cuisine and theme. Uses LangChain for orchestration, Groq LLM API for fast text generation, and Hugging Face models for image/logo generation.",
    image: "/projects/restaurant.png",
    tags: ["LangChain", "Groq API", "Hugging Face", "LLMs", "AI", "Python"],
    github: "https://github.com/bilalrafique5/langchain-groq-restaurant-namer.git"
  },
  {
    title: "MediMind — RAG Healthcare Chatbot",
    desc: "An intelligent medical chatbot built using RAG (Retrieval-Augmented Generation) with short-term memory support. The system uses LangChain, custom embeddings, vector search, and Groq LLMs to provide context-aware medical insights and answers.",
    image: "/projects/medimind.png",
    tags: ["RAG", "LangChain", "FAISS", "Groq API", "Memory", "AI Chatbot"],
    github: "https://github.com/bilalrafique5/MediMind-ChatBot.git"
  }
]

const Projects = () => {
  return (
    <section className="relative py-10 px-6 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-emerald-400 mb-2 tracking-tight text-center">
          <span className="bg-gradient-to-r from-blue-600 to-emerald-400 dark:from-emerald-400 dark:to-blue-700 bg-clip-text text-transparent">My Projects</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Here are some of my featured projects, highlighting my work in machine learning, artificial intelligence, natural language processing, and AI-powered applications. Each project demonstrates creative problem-solving, practical implementation, and cutting-edge technology.
        </p>

        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((proj, idx) => (
              <CarouselItem key={proj.title} className="flex justify-center lg:py-10">
                <div className="group relative bg-white/90 dark:bg-gray-900/90 border border-blue-100 dark:border-emerald-900 rounded-3xl shadow-2xl w-full max-w-md flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-200/60 dark:hover:shadow-emerald-700/40">
                  
                  {/* Project Image */}
                  <div className="overflow-hidden rounded-t-3xl w-full h-48 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      width={480}
                      height={192}
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-emerald-300 tracking-tight mb-2">{proj.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-base mb-4 flex-1">{proj.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proj.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-blue-100 dark:bg-emerald-900 text-blue-800 dark:text-emerald-300 text-xs font-semibold tracking-wide shadow"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-auto">
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-400 dark:from-emerald-600 dark:to-blue-700 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                          Live
                          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      )}
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-blue-400 dark:border-emerald-400 text-blue-700 dark:text-emerald-300 font-bold hover:bg-blue-50 dark:hover:bg-emerald-950 transition"
                      >
                        Code
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M16 18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12z" />
                          <path d="M8 10h8M8 14h6" />
                        </svg>
                      </a>
                    </div>
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default Projects
