import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PulseDashboardClient } from "@/components/portfolio/pulse-dashboard-client";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default async function PulseDashboard() {
  
  // 1. Fetch RAW Data necessary for her analysis
  const patients = await db.respondent.findMany({
    select: { 
      birthYear: true, 
      genderIdentity: true,
      area: true,        
      covidLong: true    
    }
  });

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-8">
        <Button asChild variant="ghost" className="mb-4 pl-0 hover:bg-transparent hover:text-[#2F5C4B]">
          <Link href="/portfolio" className="flex items-center gap-2">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </Button>
        <div>
           <h1 className="text-4xl font-serif text-slate-800">Pulse Analytics</h1>
           <p className="text-slate-500 mt-2">
             Replicating socioeconomic risk analysis on <span className="font-bold text-[#2F5C4B]">{patients.length.toLocaleString()}</span> records.
           </p>
        </div>
      </div>

      {/* INTERACTIVE DASHBOARD SECTION (Top) */}
      <div className="max-w-7xl mx-auto mb-16">
        <PulseDashboardClient patients={patients} />
      </div>

      {/* RESEARCH CONTENT SECTION (Bottom) */}
      <div className="max-w-7xl mx-auto">
        <Separator className="mb-12" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-slate-700 leading-relaxed">
          {/* Abstract */}
          <section className="lg:col-span-5">
            <h2 className="text-xs font-bold tracking-[0.2em] text-[#2F5C4B] uppercase mb-4">Abstract</h2>
            <Card className="p-8 border-none bg-white shadow-sm italic font-serif text-lg text-slate-800">
              The objective of this project is to analyze the data and find the percentage of people who have been diagnosed with Long COVID. 
              This objective is achieved by visualizing and pivoting the grouped data between the Long COVID variable and other variables such as area, education, and COVID vaccine status. 
              In doing so, we identified four variables that stood out in the variations of the Long COVID diagnosis: 
              <span className="font-bold text-[#2F5C4B]"> COVID symptoms, household income, gender at birth, and education.</span> 
              Additionally, we found a significant skew toward wealthier populations in this dataset, using inferential statistics to simulate test statistics and construct confidence intervals.
            </Card>
          </section>

          {/* Introduction */}
          <section className="lg:col-span-7 space-y-6">
            <h2 className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">Introduction</h2>
            <p>
              Approximately 18% of individuals infected with COVID-19 have experienced Long COVID, according to an analysis of Pulse data by the CDC. 
              Long COVID is a chronic condition affecting patients for at least three months. Research shows that certain groups—women, 
              Hispanic individuals, and those with pre-existing conditions—are at a higher risk <strong>[1]</strong>. 
              In this project, we address the impact of various factors on Long COVID rates, including demographic, socioeconomic, and health factors.
            </p>
            <p>
              One of the main factors that can impact Long COVID rates is <strong>Demographic Factors</strong>, such as area, birth year, race, and gender. 
              We found a higher proportion of Hispanic individuals in Los Angeles/Riverside, suggesting higher localized risks, 
              whereas white individuals in San Francisco suggest potentially lower relative rates.
            </p>
            <p>
              Another key factor is <strong>Socioeconomic Factors</strong>, such as household income and employment. 
              People with higher household incomes may have lower Long COVID rates, whereas the lowest income groups experience the highest rates. 
              Income correlates strongly with housing stability and healthcare access.
            </p>
            <p>
              Health and COVID-19 are critical influencers. People with severe health conditions—pregnant women, the elderly, and infants—are likely to be more affected. 
              Furthermore, vaccine hesitancy remains a critical factor in Long COVID outcomes.
            </p>
            <p className="font-bold text-slate-900 border-t border-slate-100 pt-4">
              In conclusion, all these variables are correlated. This project aims to discover the most relevant factors 
              influencing Long COVID frequency.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}