
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
      <div className="absolute inset-0 top-0 h-1/2 bg-slate-50"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            <span className="block">Unlock Your Data's</span>
            <span className="block text-primary-600">Full Potential</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-600">
            AnalytixPro provides the insights you need to make smarter decisions.
            Turn complex data into clear, actionable visualisations effortlessly.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              Get Started Free
            </a>
            <a
              href="#dashboard"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-md text-primary-700 bg-primary-50 hover:bg-primary-100 md:py-4 md:text-lg md:px-10"
            >
              See Dashboard
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
