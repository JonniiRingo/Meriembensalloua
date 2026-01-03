import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, Lock, TrendingUp, Activity } from "lucide-react";
import { ContactBar } from "@/components/sections/contact/contact-bar";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white relative">
      
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/mockups/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* 2. CONTENT CONTAINER */}
      <div className="relative z-10">
        
        {/* Header Section */}
        <section className="container mx-auto px-4 pt-24 pb-16 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
            Selected Work
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A collection of data science projects, full-stack applications, and proprietary research. 
            Focusing on high-impact visualization and algorithmic efficiency.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4 pb-24 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* PROJECT 1: PULSE (The Star Show) */}
            <Card className="group relative overflow-hidden border-2 border-green-50 bg-[#F0FFF4] hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Activity className="w-8 h-8 text-[#2F5C4B]" />
                  </div>
                  <Badge className="bg-[#2F5C4B] hover:bg-[#244a3b]">Live Project</Badge>
                </div>
                <CardTitle className="text-2xl font-serif text-gray-900 group-hover:text-[#2F5C4B] transition-colors">
                  Pulse: Public Health Analytics
                </CardTitle>
                <CardDescription className="text-base text-gray-600 mt-2">
                  A high-performance dashboard processing patient records in real-time. 
                  Features demographic regression analysis, heat-mapping, and live data ingestion.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge variant="secondary" className="bg-white/60">Next.js</Badge>
                  <Badge variant="secondary" className="bg-white/60">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-white/60">Recharts</Badge>
                  <Badge variant="secondary" className="bg-white/60">PostgreSQL</Badge>
                </div>

                <Button asChild className="w-full bg-[#2F5C4B] hover:bg-[#244a3b] text-white h-12 text-base rounded-xl">
                  <Link href="/portfolio/pulse">
                    Launch Dashboard <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* PROJECT 2: Financial Modeling (Placeholder) */}
            <Card className="group relative overflow-hidden border border-gray-100 bg-white hover:shadow-md transition-all">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-gray-400" />
                  </div>
                  <Badge variant="outline" className="text-gray-500 border-gray-200">In Development</Badge>
                </div>
                <CardTitle className="text-2xl font-serif text-gray-400">
                  Market Volatility Models
                </CardTitle>
                <CardDescription className="text-base text-gray-400 mt-2">
                  Stochastic analysis of market trends using historical data sets. 
                  Focusing on predictive accuracy in high-noise environments.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-8 opacity-50">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Pandas</Badge>
                  <Badge variant="outline">SciKit-Learn</Badge>
                </div>

                <Button disabled className="w-full bg-gray-100 text-gray-400 h-12 text-base rounded-xl cursor-not-allowed">
                  <Lock className="mr-2 w-4 h-4" /> Coming Soon
                </Button>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* 3. CONTACT BAR (Reused) */}
        <ContactBar />
      </div>
    </div>
  );
}