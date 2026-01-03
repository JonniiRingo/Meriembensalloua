import Link from "next/link";
import { db } from "@/lib/db"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // You might need to install this component
import { ArrowRight, Database, BarChart3, Lock } from "lucide-react";

export async function Portfolio() {
  // 1. REAL TIME DATA FETCH
  // We grab the actual count from your seeded database
  const patientCount = await db.respondent.count();
  
  // Quick format for numbers (e.g. 5,020)
  const formatNum = (num: number) => new Intl.NumberFormat('en-US').format(num);

  return (
    <section className="py-20 px-6 bg-slate-50 relative" id="portfolio">
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
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif text-slate-800 mb-4">Selected Work</h2>
            <p className="text-slate-600">
              A collection of data science projects, full-stack applications, and research papers.
              Focusing on high-impact visualization and proprietary algorithms.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* PROJECT 1: THE BIG DATA DASHBOARD (Live) */}
          <Card className="group relative overflow-hidden border-2 border-slate-200 hover:border-[#2F5C4B] transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Database className="w-32 h-32 text-[#2F5C4B]" />
            </div>
            
            <CardHeader>
              <div className="flex gap-2 mb-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">Medical Data</Badge>
                <Badge variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-100">Big Data</Badge>
              </div>
              <CardTitle className="text-2xl font-serif text-slate-800">
                Pulse: Public Health Analytics
              </CardTitle>
              <CardDescription className="text-base mt-2">
                A high-performance dashboard processing {formatNum(patientCount)} patient records in real-time. 
                Features demographic regression analysis and heat-mapping.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="mt-4">
              <div className="flex gap-6 mb-8 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#2F5C4B]" />
                  <span>SQLite / Prisma</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#2F5C4B]" />
                  <span>Recharts Visualization</span>
                </div>
              </div>

              <Button asChild className="w-full bg-[#2F5C4B] hover:bg-[#244a3b] text-white">
                <Link href="/portfolio/pulse">
                  Launch Dashboard
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* PROJECT 2: COMING SOON (Placeholder) */}
          <Card className="bg-slate-50 border-dashed border-2 border-slate-300 flex flex-col justify-center items-center p-12 text-center opacity-70">
            <div className="bg-slate-200 p-4 rounded-full mb-4">
              <Lock className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-500">Proprietary Research</h3>
            <p className="text-slate-400 mt-2">Analysis pending publication.</p>
          </Card>

        </div>
        
        <div className="mt-8 md:hidden">
          <Button variant="outline" className="w-full gap-2">
             View All Projects <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}