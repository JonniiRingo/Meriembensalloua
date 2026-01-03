import Link from 'next/link';
import { Mail, Linkedin, MapPin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2F4F4F] text-white pt-16 pb-8.">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">Meriem Bensalloua</h3>
            <p className="text-gray-300 max-w-xs leading-relaxed">
              Empowering students and professionals through data science, mathematics, and mentorship.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-100">Legal</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors w-fit">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors w-fit">
                Terms
              </Link>
            </nav>
          </div>

          {/* Column 3: Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-100">Connect</h4>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:contact@meriem.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors w-fit"
              >
                <Mail className="h-4 w-4" />
                <span>shortcutofsuccess1@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>USA, CA</span>
              </div>
              
              {/* Social Icons */}
              <div className="flex gap-4 mt-2">
                <a 
                  href="https://www.linkedin.com/in/meriem-bensalloua-3a205339/" 
                  target="_blank"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/mbensalloua" 
                  target="_blank"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Meriem Bensalloua. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}