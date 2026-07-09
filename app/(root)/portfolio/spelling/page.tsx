// /Users/jonathansamuels/Web Development Projects/clients/Meriem/mbensalloua/app/(root)/portfolio/spelling/page.tsx

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Github } from "lucide-react";

export default async function SpellingBeeProject() {
  
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
           <h1 className="text-4xl font-serif text-slate-800">Spelling Bee Engine Architecture</h1>
           <p className="text-slate-500 mt-2">
             Engineering an interactive, dictionary-validated puzzle game using <span className="font-bold text-slate-700">Java data structures and string processing</span>.
           </p>
        </div>
      </div>

                  {/* INTERACTIVE DASHBOARD SECTION (Top) */}
    <div className="w-full max-w-2xl mx-auto aspect-video bg-slate-950 rounded-xl border-2 border-slate-200 overflow-hidden shadow-lg relative">
           <video 
             className="w-full h-full object-cover"
             autoPlay 
             loop 
             muted 
             playsInline
           >
             <source src="/assets/spelling.mp4" type="video/mp4" />
             Your browser does not support the video tag.
           </video>
           
           {/* Optional: A subtle overlay to make it look embedded in a monitor */}
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
              The objective of this project was to implement an interactive puzzle application that allows users to construct words from a seven-letter beehive layout. 
              The engine validates user input against a standard English dictionary, enforcing strict rules such as minimum word length, specific character constraints, and mandatory inclusion of a designated center letter.
            </Card>
          </section>

          {/* Introduction & Technical Features */}
          <section className="lg:col-span-7 space-y-6">
            <h2 className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">System Architecture</h2>
            <p>
              The application architecture is built upon robust string processing and file I/O operations in Java. To determine if a user's inputted word is legal, the program parses a text-based English dictionary into a searchable data structure. It then iterates through this dataset, checking each entry against rigorous constraints to ensure no forbidden letters are used.
            </p>
            <p>
              A core technical feature is the implementation of <strong>Event-Driven Interactivity</strong>. The system utilizes callback functions and Java arrow (lambda) functions to handle user interactions dynamically. 
              When a user submits a puzzle string or a guessed word, these lambda functions route the input directly to processing methods, executing operations on the client's behalf without stalling the application.
            </p>
            <p>
              To evaluate valid words, a <strong>Dynamic Scoring Algorithm</strong> was engineered. Words containing exactly four letters yield a baseline of one point, while longer words score proportionally to their character count. 
              Furthermore, a bonus system was implemented to detect "pangrams"—words utilizing all seven available letters—awarding an additional seven points and highlighting them in the UI.
            </p>
            <p className="font-bold text-slate-900 border-t border-slate-100 pt-4">
              As the application scaled from an auto-solver to an interactive user-driven game, the codebase required strategic refactoring. The scoring logic was modularized into separate, callable functions, ensuring the game state, scores, and dictionary validations updated dynamically after every individual user submission.
            </p>
          </section>
        </div>
      </div>

      {/* FLOATING GITHUB BUTTON */}
      <div className="fixed bottom-8 right-8 z-[9999]">
        <Link href="https://github.com/mbensalloua/spelling-bee-Java2Project-" target="_blank" rel="noopener noreferrer">
          <Button className="h-14 rounded-full shadow-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-2 px-8 transition-all hover:scale-105 hover:-translate-y-1">
            <Github className="w-5 h-5" />
            <span className="font-semibold text-sm tracking-wide">View Code</span>
          </Button>
        </Link>
      </div>

    </main>
  );
}