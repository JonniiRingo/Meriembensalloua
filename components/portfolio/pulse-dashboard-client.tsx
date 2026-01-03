'use client';

import { useState, useMemo } from 'react';
import { Card } from "@/components/ui/card";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

interface Patient {
  birthYear: number;
  genderIdentity: string | null;
  area: string;
  covidLong: string | null;
}

export function PulseDashboardClient({ patients }: { patients: Patient[] }) {
  const [filter, setFilter] = useState('All');

  // Generate unique list of areas for buttons
  const areas = ['All', ...Array.from(new Set(patients.map(p => p.area)))];

  // Logic to handle dynamic filtering of the graph and risk profiles
  const analysisData = useMemo(() => {
    let cohortsToAnalyze: { key: string, label: string }[] = [];

    if (filter === 'All') {
      // Default view: Replicate the SF vs Riverside comparison
      cohortsToAnalyze = [
        { key: 'Urban Core', label: 'San Francisco' },
        { key: 'Rural North', label: 'Riverside' }
      ];
    } else {
      // Isolate the specifically selected area
      cohortsToAnalyze = [{ key: filter, label: filter }];
    }
    
    return cohortsToAnalyze.map(pair => {
      const cohort = patients.filter(p => p.area === pair.key);
      const longCovidCount = cohort.filter(p => p.covidLong === 'Yes').length;
      const total = cohort.length;
      const noSymptomsCount = total - longCovidCount;

      return {
        name: pair.label,
        'Long COVID Detected': longCovidCount,
        'No Symptoms': noSymptomsCount,
        percentage: total > 0 ? ((longCovidCount / total) * 100).toFixed(1) : "0"
      };
    });
  }, [patients, filter]); // Dependency on filter ensures the UI updates on click

  return (
    <div className="space-y-6">
      {/* 1. COHORT FILTER */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="font-bold text-slate-800">Cohort Filter</h3>
            <p className="text-sm text-slate-500">Isolate specific demographic groups for analysis.</p>
          </div>
          <div className="flex gap-2 flex-wrap justify-start md:justify-end">
            {areas.map(a => (
              <button
                key={a}
                onClick={() => setFilter(a)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  filter === a 
                  ? 'bg-[#2F5C4B] text-white shadow-md' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* 2. CHART SECTION */}
      <Card className="p-8">
        <div className="mb-8 text-center md:text-left">
          <h3 className="font-bold text-slate-800 text-xl">Socioeconomic Risk Visualization</h3>
          <p className="text-sm text-slate-500 mt-1">
            Comparing <span className="text-red-700 font-bold">Long COVID rates</span> across geographical cohorts.
          </p>
        </div>

        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={analysisData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#64748b', fontSize: 12}}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#64748b', fontSize: 12}}
              />
              <Tooltip 
                cursor={{fill: '#f8fafc'}}
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: 'none', 
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                  padding: '12px'
                }}
              />
              <Legend verticalAlign="bottom" align="center" height={36} iconType="circle" />
              <Bar dataKey="Long COVID Detected" fill="#991b1b" radius={[4, 4, 0, 0]} barSize={filter === 'All' ? 60 : 100} />
              <Bar dataKey="No Symptoms" fill="#2F5C4B" radius={[4, 4, 0, 0]} barSize={filter === 'All' ? 60 : 100} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* 3. DYNAMIC RISK PROFILE STATS */}
      <div className={`grid gap-6 ${filter === 'All' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
        {analysisData.map(stat => (
          <Card key={stat.name} className="p-8 border-l-4 border-[#2F5C4B] bg-white shadow-sm overflow-hidden relative">
            <div className="relative z-10">
              <p className="text-xs text-slate-400 uppercase font-black tracking-widest">{stat.name} Risk Level</p>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-5xl font-black text-slate-900">{stat.percentage}%</span>
                <span className="text-slate-500 font-medium text-sm">Prevalence</span>
              </div>
              <div className="mt-6 h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-[#2F5C4B] transition-all duration-700 ease-out" 
                   style={{ width: `${stat.percentage}%` }}
                 />
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-5">
               <div className="text-8xl font-black">{stat.name[0]}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}