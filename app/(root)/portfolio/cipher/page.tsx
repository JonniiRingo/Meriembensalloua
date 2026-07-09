// /Users/jonathansamuels/Web Development Projects/clients/Meriem/mbensalloua/app/(root)/portfolio/cipher/page.tsx

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Github, Lock } from "lucide-react";

export default async function CipherProject() {
  
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
           <h1 className="text-4xl font-serif text-slate-800">Cryptographic Substitution Ciphers</h1>
           <p className="text-slate-500 mt-2">
             Engineering resilient encryption algorithms in Java to secure file I/O operations.
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
             <source src="/assets/cipher.mp4" type="video/mp4" />
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
              The objective of this project was to develop a comprehensive encryption suite capable of encoding and decoding entire files. 
              The application architecture scales in complexity, beginning with a foundational Caesar cipher and expanding into a generalized substitution cipher. 
              To secure the encryption against statistical decryption methods like frequency analysis, a dynamic rotating key system was engineered, ensuring characters map unpredictably throughout the execution lifecycle.
            </Card>
          </section>

          {/* Introduction & Technical Features */}
          <section className="lg:col-span-7 space-y-6">
            <h2 className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">System Architecture</h2>
            <p>
              The foundational layer of the encryption engine relies on a <strong>Caesar Cipher</strong> algorithm. This logic iterates through strings, mapping each letter to a character three positions later in the alphabet. 
              The core `encode` and `decode` methods were fortified to strictly preserve the case sensitivity of upper-case letters and gracefully ignore non-alphabetic characters like punctuation or spacing.
            </p>
            <p>
              However, relying on a static three-position shift is structurally vulnerable. To solve this, the engine was heavily refactored using Object-Oriented principles to act as a <strong>Generalized Substitution Cipher</strong>. 
              By injecting a custom 26-character string into the `Cipher` class constructor, the class dynamically maps the alphabet against roughly 4 &times; 10<sup>26</sup> possible key arrangements.
            </p>
            <p>
              Despite this vast key space, standard substitution ciphers remain susceptible to frequency analysis (e.g., identifying the most common character to deduce the letter 'e'). 
              To neutralize this attack vector, a <strong>Rotating Cipher</strong> mechanism was implemented.
            </p>
            <p className="font-bold text-slate-900 border-t border-slate-100 pt-4">
              A private mutation method was integrated directly into the encoding/decoding loop. After processing a single character, this method physically rotates the stored key field by migrating the first character to the end of the string. 
              Consequently, if the engine processes the same character twice, the encoded output will be entirely different, resulting in a resilient and unpredictable cryptographic output.
            </p>
          </section>
        </div>
      </div>

      {/* FLOATING GITHUB BUTTON */}
      <div className="fixed bottom-8 right-8 z-[9999]">
        <Link href="https://github.com/mbensalloua/substitution-ciphers-Java1Project" target="_blank" rel="noopener noreferrer">
          <Button className="h-14 rounded-full shadow-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-2 px-8 transition-all hover:scale-105 hover:-translate-y-1">
            <Github className="w-5 h-5" />
            <span className="font-semibold text-sm tracking-wide">View Code</span>
          </Button>
        </Link>
      </div>

    </main>
  );
}