import Image from "next/image";
import Link from "next/link";
import { GraduationCap, BookOpen, BrainCircuit, Award, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ContactBar } from "@/components/sections/contact/contact-bar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white relative">
      
      {/* 1. BACKGROUND IMAGE LAYER (Matching Service Page) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/mockups/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* 2. CONTENT CONTAINER (Relative z-10 to sit above background) */}
      <div className="relative z-10">
        
        {/* HERO SECTION: Intro & Photo */}
        <section className="container mx-auto px-4 py-20 md:py-24">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-6xl mx-auto mb-20">
            
            {/* Left: Text Narrative */}
            <div className="flex-1 space-y-8 text-center md:text-left">
              <div className="space-y-4">
                <h1 className="text-5xl font-serif font-medium text-gray-900 leading-tight">
                  Exploring the beauty of the universe — through data.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Every journey, whether across the globe or through a dataset, reveals patterns waiting to be understood. My mission is to uncover insights and empower students to do the same.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                <Button asChild className="bg-[#2F4F4F] hover:bg-[#1a2e2e] text-white rounded-xl px-8 h-12 text-base">
                  <Link href="/portfolio/pulse">View Portfolio</Link>
                </Button>
                <Button asChild variant="outline" className="border-[#2F4F4F] text-[#2F4F4F] hover:bg-[#2F4F4F]/5 rounded-xl px-8 h-12 text-base">
                  <a href="/images/certs/resume.pdf" target="_blank" rel="noopener noreferrer">
                    View Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Circular Photo (Consistent Style) */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-xl">
                  <Image 
                    src="/images/content/meriem_2.png" 
                    alt="Meriem Bensalloua" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CREDENTIALS GRID (The Service Page Convention) */}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">Credentials & Expertise</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Card 1: Education (Pink) */}
              <div className="bg-[#FFF5FA] rounded-3xl p-8 flex flex-col border border-pink-50 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-center mb-6">
                  <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <GraduationCap className="h-6 w-6 text-pink-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Education</h3>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    'M.S. Discrete Mathematics & Optimization (USTHB)',
                    'B.S. Statistics (USTHB)',
                    'Data Wrangling Certificate (Cal Poly Pomona)',
                    'Data Science Certificate (El Camino College)'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: Teaching (Green - Highlighted) */}
              <div className="bg-[#F0FFF4] rounded-3xl p-8 flex flex-col border border-green-50 relative transform md:-translate-y-4 shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Teaching & Mentoring</h3>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    'Classroom management & Curriculum Design',
                    'Experience with diverse learning needs',
                    'Peer tutoring & Academic mentoring',
                    'Women in Data Science (WiDS) Advocate'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3: Data Science (Pink) */}
              <div className="bg-[#FFF5FA] rounded-3xl p-8 flex flex-col border border-pink-50 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-center mb-6">
                  <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <BrainCircuit className="h-6 w-6 text-pink-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Data Science</h3>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    'Python, R, SQL, & Excel',
                    'Machine Learning (Regression, Classification)',
                    'Data Storytelling & Visualization',
                    'Statistical Modeling & Inference'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 3. About me Section */}
        <div className="max-w-4xl mx-auto text-center space-y-8 pb-12">
                <h2 className="text-3xl font-serif font-medium text-gray-900">My Philosophy</h2>
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                        <p>
                            I love traveling and discovering the hidden patterns of the world — it’s the same feeling I get when exploring a complex dataset. Every journey, whether across the globe or through a spreadsheet, reveals stories and connections waiting to be understood.
                        </p>
                        <p>
                            From moving to the United States to pursue my academic dreams to supporting students through remote learning, my mission has always been two-fold: <strong>uncover insights</strong> and <strong>empower others</strong>.
                        </p>
                        <p>
                            As an educator, I don't just teach math and code; I teach confidence. I help students transform from "I'm bad at math" to "I can solve this." Whether we are tackling Calculus I or building Machine Learning models, we turn data into clarity together.
                        </p>
                </div>
        </div>


    {/*4. CERTIFICATIONS CAROUSEL */}
          <section className="container mx-auto px-4 py-16 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-medium text-gray-900">Certifications</h2>
            </div>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {[
                  "/images/certs/cert_1.png",
                  "/images/certs/cert_2.png",
                  "/images/certs/cert_3.png",
                  "/images/certs/cert_4.png",
                  "/images/certs/cert_5.png",
                  "/images/certs/cert_6.png",
                  "/images/certs/cert_7.jpg",
                  "/images/certs/cert_8.jpg",

                ].map((cert, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="border-0 shadow-none bg-transparent">
                        <CardContent className="flex aspect-4/3 items-center justify-center p-0 relative overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                          <Image
                            src={cert}
                            alt={`Certification ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 border-gray-200 hover:bg-gray-50 text-gray-600" />
              <CarouselNext className="hidden md:flex -right-12 border-gray-200 hover:bg-gray-50 text-gray-600" />
            </Carousel>
          </section>

        {/* 5. CONTACT BAR (Reused at Bottom) */}
        <ContactBar />
      </div>
    </div>
  );
}