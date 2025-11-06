
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "AnalytixPro has completely transformed how we approach data. The insights are clear, actionable, and have directly impacted our bottom line. It's an indispensable tool for our team.",
    author: 'Sarah Johnson',
    role: 'CEO, Innovate Inc.',
    avatarUrl: 'https://picsum.photos/id/1027/100/100',
  },
  {
    quote: "The user interface is incredibly intuitive. We were able to set up our dashboards and start generating reports within minutes. The support team is also top-notch!",
    author: 'Michael Chen',
    role: 'Head of Marketing, Growth Co.',
    avatarUrl: 'https://picsum.photos/id/1005/100/100',
  },
   {
    quote: "Finally, a BI tool that doesn't require a data science degree to use. The AI-powered insights feature is a game-changer, helping us spot trends we would have otherwise missed.",
    author: 'Jessica Rodriguez',
    role: 'Product Manager, Future Solutions',
    avatarUrl: 'https://picsum.photos/id/1011/100/100',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-slate-50 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Loved by Teams Worldwide</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-white p-8 rounded-xl shadow-md border border-slate-100 flex flex-col">
              <div className="flex-grow">
                <svg className="h-8 w-8 text-primary-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.33 12.28a3.97 3.97 0 00-3.93 4.07v5.33h5.27v-5.46a3.97 3.97 0 00-1.34-3.94zM24 12.28a3.97 3.97 0 00-3.93 4.07v5.33h5.26v-5.46a3.97 3.97 0 00-1.33-3.94z" />
                </svg>
                <p className="mt-6 text-slate-600 italic">"{testimonial.quote}"</p>
              </div>
              <div className="mt-8 flex items-center">
                <img className="h-12 w-12 rounded-full" src={testimonial.avatarUrl} alt={testimonial.author} />
                <div className="ml-4">
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
