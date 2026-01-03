import Link from 'next/link';
import { BookOpen, BrainCircuit, Lightbulb } from 'lucide-react';

const services = [
  {
    title: 'Tutoring',
    icon: BookOpen,
    description: 'Personalized math and data tutoring designed to help students build confidence, clarity, and problem-solving skills.',
    href: '/service'
  },
  {
    title: 'Data Science & Machine Learning',
    icon: BrainCircuit,
    description: 'Hands-on guidance in data analytics, visualization, and applied machine learning projects for research or career development.',
    href: '/service'
  },
  {
    title: 'Mentoring',
    icon: Lightbulb,
    description: 'Career and academic mentorship that inspires growth, focus, and leadership through collaboration and curiosity.',
    href: '/service'
  }
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-white relative">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/mockups/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service) => (
            <Link 
              key={service.title} 
              href={service.href}
              className="group relative flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                <service.icon className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}