import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {children}
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}