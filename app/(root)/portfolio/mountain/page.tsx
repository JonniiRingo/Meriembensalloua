// /Users/jonathansamuels/Web Development Projects/clients/Meriem/mbensalloua/app/(root)/portfolio/mountain/page.tsx

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Github } from "lucide-react";

export default async function MountainPathsProject() {
  
  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-8">
        <Button asChild variant="ghost" className="mb-4 pl-0 hover:bg-transparent hover:text-slate-700">
          <Link href="/portfolio" className="flex items-center gap-2">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </Button>
        <div>
           <h1 className="text-4xl font-serif text-slate-800">Mountain Paths: Topographic Routing</h1>
           <p className="text-slate-500 mt-2">
             Engineering a greedy algorithm to visualize paths of least resistance through <span className="font-bold text-slate-700">Colorado's mountainous terrain</span>.
           </p>
        </div>
      </div>

      {/* INTERACTIVE DASHBOARD SECTION (Top) */}
      <div className="w-full max-w-2xl mx-auto aspect-video bg-slate-950 rounded-xl border-2 border-slate-200 overflow-hidden shadow-lg relative">
           {/* DUMMY LOGIC / PLACEHOLDER: 
               If you have a video of the Mountain Paths visualizer generating the map/lines, place it in the assets folder.
           */}
           <video 
             className="w-full h-full object-cover"
             autoPlay 
             loop 
             muted 
             playsInline
           >
             <source src="/assets/MountainPathsVideo.mp4" type="video/mp4" />
             Your browser does not support the video tag.
           </video>
           
           <div className="absolute inset-0 bg-slate-900/10 pointer-events-none mix-blend-overlay border border-white/5 rounded-xl"></div>
      </div>

      {/* RESEARCH / WRITE-UP CONTENT SECTION (Bottom) */}
      <div className="max-w-7xl mx-auto">
        <Separator className="mb-12 mt-12" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-slate-700 leading-relaxed">
          {/* Abstract */}
          <section className="lg:col-span-5">
            <h2 className="text-xs font-bold tracking-[0.2em] text-slate-700 uppercase mb-4">Abstract</h2>
            <Card className="p-8 border-none bg-white shadow-sm italic font-serif text-lg text-slate-800">
              The objective of this project was to ingest raw topographic land elevation data into a 2D array and compute the most efficient way to travel over the terrain[cite: 360, 366]. 
              The application processes these vast datasets to calculate a "greedy lowest-elevation-change walk" from the western side of the map to the eastern side, acting as a calculated path of least resistance[cite: 367, 368].
            </Card>
          </section>

          {/* Introduction & Technical Features */}
          <section className="lg:col-span-7 space-y-6">
            <h2 className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">System Architecture</h2>
            <p>
              The application begins with robust <strong>Data Ingestion</strong>. The program processes a large dataset consisting of 403,200 integers representing a 480-row by 844-column grid[cite: 457]. It utilizes Java's `Scanner` to parse the continuous stream of space-separated integers, mapping them precisely into a 2D array in row-major order[cite: 450, 461].
            </p>
            <p>
              To render the map via <strong>Data Visualization</strong>, the engine identifies the absolute minimum and maximum elevations present in the 2D array[cite: 468]. It then scales each integer to a proportionate grayscale value between 0 (black) and 255 (white), allowing the topographic data to be drawn dynamically as filled rectangles mapped to x,y coordinates[cite: 478, 481, 482].
            </p>
            <p>
              Pathfinding is governed by a <strong>Greedy Algorithm</strong>, meaning the system makes the most optimal local choice at each individual step[cite: 372]. Starting from the left edge, the path steps into one of three adjacent cells in the next column (forward, forward-up, or forward-down), always selecting the cell whose elevation is closest to the current standing position[cite: 374, 381]. Tie-breakers are resolved by defaulting to a straight-forward step or utilizing a randomized coin flip[cite: 383, 384].
            </p>
            <p className="font-bold text-slate-900 border-t border-slate-100 pt-4">
              To determine the absolute most efficient route, the system evaluates optimization metrics. It uses absolute values to track the cumulative elevation changes experienced across a given path[cite: 507, 509]. By iterating through every possible starting row (0 to 480) on the western edge, the algorithm identifies and highlights the single lowest-elevation-change path across the entire map[cite: 513, 515].
            </p>
          </section>
        </div>
      </div>

      {/* FLOATING GITHUB BUTTON */}
      <div className="fixed bottom-8 right-8 z-[9999]">
        <Link href="https://github.com/mbensalloua/java-mountain-paths" target="_blank" rel="noopener noreferrer">
          <Button className="h-14 rounded-full shadow-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-2 px-8 transition-all hover:scale-105 hover:-translate-y-1">
            <Github className="w-5 h-5" />
            <span className="font-semibold text-sm tracking-wide">View Code</span>
          </Button>
        </Link>
      </div>

    </main>
  );
}