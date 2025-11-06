
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="pricing" className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="bg-primary-700 rounded-2xl p-8 md:p-12 lg:p-16 shadow-xl overflow-hidden relative">
            <div aria-hidden="true" className="absolute inset-0 -mt-20">
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-primary-600 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-primary-800 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.85 472.086z"
                />
              </svg>
            </div>
          <div className="relative text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Dive In?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-100">
              Start your 14-day free trial today. No credit card required.
              Unleash the power of your data.
            </p>
            <a
              href="#"
              className="mt-8 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 md:py-4 md:text-lg md:px-10 shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
