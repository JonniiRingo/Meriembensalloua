import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, BookOpen, BrainCircuit, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function About() {
  return (
    <section id="about" className="py-24 relative bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        
        {/* TOP SECTION: INTRO & PHOTO */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          
          {/* Left: Text Narrative */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-pink-700 text-sm font-medium">
              <BrainCircuit className="w-4 h-4" />
              <span>Data Scientist & Educator</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              Exploring the beauty of the universe — through data.
            </h2>
            
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                I love traveling and discovering the hidden patterns of the world — it’s the same feeling I get when exploring a complex dataset. Every journey, whether across the globe or through a spreadsheet, reveals stories and connections waiting to be understood.
              </p>
              <p>
                From moving to the United States to pursue my academic dreams to supporting students through remote learning, my mission has always been two-fold: <strong>uncover insights</strong> and <strong>empower others</strong>.
              </p>
              <p>
                As an educator, I don't just teach math and code; I teach confidence. I help students transform from "I'm bad at math" to "I can solve this."
              </p>
            </div>

            <div className="pt-4 flex gap-4">
              <Button asChild className="bg-[#2F4F4F] hover:bg-[#1a2e2e] text-white px-8 h-12 rounded-full text-base">
                <Link href="/portfolio/pulse">Explore My Research</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#2F4F4F] text-[#2F4F4F] hover:bg-[#2F4F4F]/5 px-8 h-12 rounded-full text-base">
                <Link href="/service">Tutoring Services</Link>
              </Button>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative w-full md:w-1/3 aspect-square max-w-sm">
            <div className="absolute inset-0 bg-[#2F4F4F]/5 rounded-full transform translate-x-4 translate-y-4"></div>
            <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image 
                src="/images/content/meriem_2.png" 
                alt="Meriem Bensalloua" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: CREDENTIALS GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Education */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
            <ul className="space-y-4">
              <li className="text-sm text-gray-600">
                <strong className="block text-gray-900">M.S. Discrete Mathematics</strong>
                USTHB, Algeria
              </li>
              <li className="text-sm text-gray-600">
                <strong className="block text-gray-900">B.S. Statistics</strong>
                USTHB, Algeria
              </li>
              <li className="text-sm text-gray-600">
                <strong className="block text-gray-900">Data Science Certificate</strong>
                El Camino College (In Progress)
              </li>
            </ul>
          </div>

          {/* Card 2: Teaching & Impact */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Teaching & Mentoring</h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-600 flex gap-2">
                <span className="text-green-600">•</span>
                Curriculum Design & Lesson Planning
              </li>
              <li className="text-sm text-gray-600 flex gap-2">
                <span className="text-green-600">•</span>
                Inclusive Learning Environments
              </li>
              <li className="text-sm text-gray-600 flex gap-2">
                <span className="text-green-600">•</span>
                Student-Centered Approach
              </li>
              <li className="text-sm text-gray-600 flex gap-2">
                <span className="text-green-600">•</span>
                800+ Hours of Teaching Experience
              </li>
            </ul>
          </div>

          {/* Card 3: Research & Impact */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Research & Impact</h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-600 flex gap-2">
                <span className="text-blue-600">•</span>
                COVID-19 & Racial Disparities Research
              </li>
              <li className="text-sm text-gray-600 flex gap-2">
                <span className="text-blue-600">•</span>
                Data Visualization & Analytics
              </li>
              <li className="text-sm text-gray-600 flex gap-2">
                <span className="text-blue-600">•</span>
                Equity & Inclusion Studies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}