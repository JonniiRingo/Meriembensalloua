import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, Github, Instagram, ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  const socialLinks = [
    {
      label: "Email Me",
      href: "mailto:shortcutofsuccess1@gmail.com", // Update with real email
      icon: Mail,
      color: "bg-slate-800 hover:bg-slate-900",
    },
    {
      label: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/meriem-bensalloua-3a205339/", // Update with real URL
      icon: Linkedin,
      color: "bg-[#0077b5] hover:bg-[#006396]", // LinkedIn Blue
    },
    {
      label: "GitHub Repositories",
      href: "https://github.com/mbensalloua", // Update with real URL
      icon: Github,
      color: "bg-[#333] hover:bg-[#222]", // GitHub Black
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/ben202625/", // Update with real URL
      icon: Instagram,
      color: "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90", // Insta Gradient
    },
  ];

  const primaryActions = [
    {
      label: "Book a Tutoring Session",
      href: "/service",
      icon: BookOpen,
      variant: "default", // Uses your theme's primary color (Pink/Dark Green)
      style: "bg-[#2F5C4B] hover:bg-[#244a3b] text-white"
    },
    {
      label: "View Data Science Portfolio",
      href: "/portfolio/pulse",
      icon: GraduationCap,
      variant: "outline",
      style: "bg-white text-slate-900 border-2 border-slate-200 hover:bg-slate-50"
    }
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center py-20 px-4 relative">
      
      {/* 1. Background Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/mockups/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* 2. Glassmorphism Card Container */}
      <Card className="relative z-10 w-full max-w-md bg-white/70 backdrop-blur-md border-white/50 shadow-xl rounded-3xl overflow-hidden">
        <CardContent className="flex flex-col items-center p-8 md:p-12">
          
          {/* Profile Image */}
          <div className="relative w-32 h-32 mb-6">
            <div className="absolute inset-0 rounded-full border-[4px] border-white shadow-md overflow-hidden">
              <Image 
                src="/images/content/meriem_2.png" 
                alt="Meriem Bensalloua" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Header Text */}
          <h1 className="text-2xl font-serif font-bold text-slate-900 mb-2 text-center">
            M. Bensalloua
          </h1>
          <p className="text-slate-600 text-center mb-8 max-w-xs">
            Data Scientist, Educator & Mentor. 
            <br />
            <span className="text-sm opacity-80">Connecting patterns in data & the universe.</span>
          </p>

          {/* Primary Actions (Big Buttons) */}
          <div className="w-full space-y-4 mb-8">
            {primaryActions.map((action) => (
              <Button 
                key={action.label} 
                asChild 
                className={`w-full h-14 rounded-xl text-lg font-medium shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] justify-between px-6 ${action.style}`}
              >
                <Link href={action.href}>
                  <div className="flex items-center gap-3">
                    <action.icon className="w-5 h-5" />
                    {action.label}
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-70" />
                </Link>
              </Button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-slate-200 mb-8" />

          {/* Social Links (Smaller/Colored) */}
          <div className="w-full space-y-3">
            {socialLinks.map((link) => (
              <Button 
                key={link.label} 
                asChild 
                className={`w-full h-12 rounded-xl text-white shadow-sm transition-all hover:opacity-90 justify-start px-6 ${link.color}`}
              >
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-5 h-5 mr-3" />
                  {link.label}
                </Link>
              </Button>
            ))}
          </div>

        </CardContent>
      </Card>
    </div>
  );
}