// /Users/jonathansamuels/Web Development Projects/clients/Meriem/mbensalloua/app/(root)/portfolio/astroid/page.tsx

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default async function AstroidProject() {
  
  // /* DUMMY LOGIC / PLACEHOLDER: 
  //    If you eventually need to fetch high scores, game states, 
  //    or GitHub repo stats from Prisma, you can add that here. 
  //    e.g., const gameStats = await db.gameData.findMany({...})
  // */

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
           <h1 className="text-4xl font-serif text-slate-800">Asteroids Engine Architecture</h1>
           <p className="text-slate-500 mt-2">
             Rebuilding the systems behind a <span className="font-bold text-slate-700">1979 arcade classic</span> using rigorous Object-Oriented design.
           </p>
        </div>
      </div>

      {/* INTERACTIVE DASHBOARD SECTION (Top) */}
      <div className="max-w-7xl mx-auto mb-16">
         {/* DUMMY LOGIC / PLACEHOLDER: 
             If you have a live React/Canvas component of the game, 
             or a screenshot gallery component, render it here.
             <GameCanvasClient /> 
         */}
         <div className="w-full h-64 bg-slate-200 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
            [ Interactive Canvas / Project Visuals Placeholder ]
         </div>
      </div>

      {/* RESEARCH / WRITE-UP CONTENT SECTION (Bottom) */}
      <div className="max-w-7xl mx-auto">
        <Separator className="mb-12" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-slate-700 leading-relaxed">
          {/* Abstract */}
          <section className="lg:col-span-5">
            <h2 className="text-xs font-bold tracking-[0.2em] text-slate-700 uppercase mb-4">Abstract</h2>
            <Card className="p-8 border-none bg-white shadow-sm italic font-serif text-lg text-slate-800">
              The objective of this project was to reinvigorate the 1979 arcade classic, simulating the solitary journey of a ship through space[cite: 2, 3]. 
              This was achieved by implementing a strict class hierarchy that separates game logic from rendering[cite: 14]. 
              By designing custom physics algorithms for movement and refactoring distinct geometric entities into a unified, abstract architecture, the engine successfully processes continuous frames of animation, interactive keyboard listeners, and complex collision detection[cite: 16, 30, 58].
            </Card>
          </section>

          {/* Introduction & Technical Features */}
          <section className="lg:col-span-7 space-y-6">
            <h2 className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">System Architecture</h2>
            <p>
              The foundation of the engine relies on a continuous loop that calls a specialized paint method to draw the next frame of the game's animation on a coordinate system originating at the top-left of the window[cite: 8, 16]. 
              This foundational rendering handles the visual output, but the true complexity lies within the underlying object-oriented design[cite: 21].
            </p>
            <p>
              A core technical feature is the <strong>Vector-Based Physics System</strong>. To create a realistic zero-gravity acceleration effect, the system calculates an acceleration vector[cite: 42]. 
              This vector determines the rate of increase across the X and Y axes at each time step, utilizing trigonometric functions (sine and cosine) combined with the ship's rotation to calculate smooth, continuous momentum[cite: 43, 48]. Furthermore, positional logic was implemented to seamlessly wrap objects around the screen boundaries when they travel out of bounds[cite: 39].
            </p>
            <p>
              Handling interactions required a robust <strong>Collision Detection</strong> mechanism. Initially, a boolean intersection method was designed to calculate overlaps strictly between Polygon objects[cite: 58, 59]. 
              Because the protagonist Ship and the opponent Asteroids share similar geometric properties, abstracting their shared logic into a mutual Polygon class streamlined the rendering and intersection code[cite: 56, 71, 73].
            </p>
            <p>
              However, the introduction of environmental elements like Stars and interactive projectiles like Bullets required a systemic pivot, as neither are polygons; both are circles[cite: 89, 94]. To handle these new data types, a parallel Circle class was constructed, focusing on point-containment logic[cite: 96, 99, 100].
            </p>
            <p className="font-bold text-slate-900 border-t border-slate-100 pt-4">
              To resolve the conflict of calculating intersections across disparate geometric types, the architecture was heavily refactored using polymorphism[cite: 126]. A generalized superclass, Shape, was introduced to govern both Polygons and Circles[cite: 124]. This abstraction allowed the game loop to globally process spatial intersections without needing discrete methods for every possible shape variation, resulting in a highly scalable and resilient codebase[cite: 122, 123, 125].
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}