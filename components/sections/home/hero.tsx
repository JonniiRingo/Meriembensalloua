import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Users, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center">
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
      
      {/* Background Image Wrapper */}
      <div className="relative z-10 w-full h-100px md:h-125">
        {/* Note: Ensure this image exists in public/assets/ */}
        <Image 
          src="/assets/stanford-bg2.jpg" 
          alt="Stanford Campus" 
          fill
          className="object-cover brightness-75"
          priority
        />
        
        {/* Profile Picture & Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-10">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white overflow-hidden shadow-xl mb-6">
            <Image 
              src="/assets/meriem-profile2.png" 
              alt="Meriem Bensalloua" 
              fill
              className="object-cover"
            />
          </div>
          
          <div className="bg-white/7 backdrop-blur-md border border-white/40 px-8 py-6 rounded-2xl shadow-2xl text-center max-w-4xl mx-4 ring-1 ring-black/5">
            <h1 className="text-3xl md:text-5xl font-serif text-slate-900 mb-2 drop-shadow-sm">
              Meriem Bensalloua M.S. in Mathematics
            </h1>
            <p className="text-lg md:text-xl text-slate-800 font-semibold tracking-wide">
              Educator | Mentor | Data Scientist
            </p>
          </div>

        </div>
      </div>

      {/* Intro Text & CTAs */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mt-12 px-6 space-y-6">
        <p className="text-lg text-slate-600 leading-relaxed">
          As an educator and mentor, I make data science and education accessible to all. 
          From remote learning support to exploring human stories through data analytics, 
          I'm here to guide, inspire, and empower. Let's turn data into insights together.
        </p>
        
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="bg-[#2F5C4B] hover:bg-[#244a3b] text-white rounded-md px-8">
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-pink-200 text-pink-700 hover:bg-pink-50 rounded-md px-8">
            <Link href="/services">Tutoring Services</Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl px-6 mb-20">
        <StatCard icon={<Eye className="w-6 h-6 text-pink-500" />} count="765" label="Total Visitors" />
        <StatCard icon={<BookOpen className="w-6 h-6 text-green-600" />} count="879" label="Students Mentored" />
        <StatCard icon={<Users className="w-6 h-6 text-yellow-600" />} count="835" label="Hours Taught" />
      </div>
    </section>
  );
}

function StatCard({ icon, count, label }: { icon: any, count: string, label: string }) {
  return (
    <Card className="bg-white/50 border-pink-100 shadow-sm">
      <CardContent className="flex flex-col items-center justify-center p-6">
        <div className="bg-white p-3 rounded-full shadow-sm mb-3">
          {icon}
        </div>
        <span className="text-3xl font-bold text-slate-800">{count}</span>
        <span className="text-sm text-slate-500 uppercase tracking-wide">{label}</span>
      </CardContent>
    </Card>
  );
}