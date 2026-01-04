import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Globe, Users } from "lucide-react";

export function About() {
  return (
    <section className="py-20 px-6 bg-[#2F5C4B] text-white relative" id="about">
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
      {/* Frosted Green Overlay for Text Legibility */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          backgroundColor: 'rgba(47, 79, 79, 0.85)',
          backdropFilter: 'blur(2px)',
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Bio Text */}
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-green-800/50 rounded-full text-green-100 text-sm font-medium mb-2">
            The Professional
          </div>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight">
            Bridging the gap between <span className="text-green-200">Theory</span> and <span className="text-green-200">Practice</span>.
          </h2>
          <p className="text-lg text-green-50/90 leading-relaxed">
            I am a Data Scientist and Educator with a passion for uncovering the stories hidden within data. 
            With a Master's from USTHB and a background in Mathematics, I specialize in translating complex analytical concepts into actionable insights.
          </p>
          <p className="text-lg text-green-50/90 leading-relaxed">
            Whether I am building predictive models or mentoring the next generation of engineers, 
            my goal remains the same: to empower others through knowledge.
          </p>
        </div>

        {/* Right: Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CredentialCard 
            icon={<GraduationCap className="w-8 h-8 text-[#2F5C4B]" />}
            title="USTHB"
            desc="UCI TA in Data Science"
          />
          <CredentialCard 
            icon={<Award className="w-8 h-8 text-[#2F5C4B]" />}
            title="Data Science"
            desc="Data wrangling Pomona university "
          />
          <CredentialCard 
            icon={<Globe className="w-8 h-8 text-[#2F5C4B]" />}
            title="Research"
            desc="Stanford university"
          />
          <CredentialCard 
            icon={<Users className="w-8 h-8 text-[#2F5C4B]" />}
            title="Mentorship"
            desc="800+ Hours Taught"
          />
        </div>
      </div>
    </section>
  );
}

// Sub-component for the white cards
function CredentialCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <Card className="bg-white border-none shadow-xl hover:scale-105 transition-transform duration-300">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="bg-green-50 p-3 rounded-full mb-3">
          {icon}
        </div>
        <h3 className="font-bold text-slate-800">{title}</h3>
        <p className="text-sm text-slate-500">{desc}</p>
      </CardContent>
    </Card>
  );
}