'use client';

import { useState, useTransition } from 'react'; // Added useTransition
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronRight, ArrowLeft, Send, CheckCircle2, Loader2 } from 'lucide-react'; // Added icons
import { sendEmail } from '@/actions/send-email';

export function ContactBar() {
  const [step, setStep] = useState(1);
  const [isPending, startTransition] = useTransition(); // Handle loading state
  const [isSuccess, setIsSuccess] = useState(false); // Handle success state
  
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    phone: '',
    message: ''
  });

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step === 1 && (!formData.name || !formData.service)) return;
    if (step === 2 && !formData.phone) return;
    setStep(prev => prev + 1);
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(prev => prev - 1);
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Manually construct FormData because previous steps are hidden from DOM
    const data = new FormData();
    data.append('name', formData.name);
    data.append('service', formData.service);
    data.append('phone', formData.phone);
    data.append('message', formData.message);

    startTransition(async () => {
      const result = await sendEmail(data);
      if (result.success) {
        setIsSuccess(true);
        setStep(4); // Move to a "Success" view
      } else {
        alert("Failed to send: " + JSON.stringify(result.error)); // Simple fallback error handling
      }
    });
  };

  // Success View
  if (isSuccess) {
    return (
      <section id="contact" className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
             <div className="max-w-5xl mx-auto bg-[#F9F9F7] rounded-[2rem] p-12 shadow-sm border border-[#EBEBE6] flex flex-col items-center justify-center">
                <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
                <h2 className="text-3xl font-serif text-[#1A1A1A]">Message Received!</h2>
                <p className="text-gray-500 mt-2">We'll get back to you shortly.</p>
             </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-16 bg-white relative overflow-hidden scroll-mt-24">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/mockups/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-full opacity-50 pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-full opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-[#F9F9F7] rounded-[2rem] p-4 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm border border-[#EBEBE6]">
          
          <div className="md:w-1/4 text-center md:text-left transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A]">
              {step === 1 ? "Contact" : step === 2 ? "Your Details" : "Final Step"}
            </h2>
            <p className="text-sm text-gray-500 mt-2 hidden md:block">
              {step === 1 ? "Let's start with your name." : step === 2 ? "How can we reach you?" : "Anything else to add?"}
            </p>
          </div>

          <div className="flex-1 w-full bg-white rounded-2xl p-2 shadow-sm border border-gray-100 min-h-[80px] flex items-center">
            <form className="flex flex-col md:flex-row gap-2 p-2 w-full items-center relative">
              
              {/* STEP 1 */}
              {step === 1 && (
                <>
                  <div className="flex-1 w-full animate-in fade-in slide-in-from-right-4 duration-300">
                    <Input 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      type="text" 
                      placeholder="Name" 
                      className="border-0 bg-transparent shadow-none focus-visible:ring-0 text-gray-600 placeholder:text-gray-400 h-12 text-base"
                    />
                  </div>

                  <div className="hidden md:block w-px bg-gray-200 h-8 mx-2"></div>

                  <div className="flex-1 w-full min-w-[200px] animate-in fade-in slide-in-from-right-8 duration-300">
                    <Select 
                      value={formData.service} 
                      onValueChange={(val) => setFormData({...formData, service: val})}
                    >
                      <SelectTrigger className="border-0 bg-transparent shadow-none focus:ring-0 text-gray-600 h-12 text-base">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tutoring">Tutoring</SelectItem>
                        <SelectItem value="datascience">Data Science</SelectItem>
                        <SelectItem value="mentoring">Mentoring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={handleNext}
                    className="bg-[#2F4F4F] hover:bg-[#1a2e2e] text-white rounded-xl px-6 h-12 text-base font-medium ml-2"
                  >
                    Next <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <>
                   <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={handleBack} 
                    className="mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </Button>

                  <div className="flex-1 w-full animate-in fade-in slide-in-from-right-4 duration-300">
                    <Input 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      type="tel" 
                      placeholder="Phone Number (e.g. 555-0123)" 
                      className="border-0 bg-transparent shadow-none focus-visible:ring-0 text-gray-600 placeholder:text-gray-400 h-12 text-base"
                      autoFocus
                    />
                  </div>

                  <Button 
                    onClick={handleNext}
                    className="bg-[#2F4F4F] hover:bg-[#1a2e2e] text-white rounded-xl px-6 h-12 text-base font-medium ml-2"
                  >
                    Next <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={handleBack} 
                    className="mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </Button>

                  <div className="flex-1 w-full animate-in fade-in slide-in-from-right-4 duration-300">
                    <Input 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      type="text" 
                      placeholder="Optional Message..." 
                      className="border-0 bg-transparent shadow-none focus-visible:ring-0 text-gray-600 placeholder:text-gray-400 h-12 text-base"
                      autoFocus
                    />
                  </div>

                  <Button 
                    onClick={onSubmit} // Use the manual handler
                    disabled={isPending}
                    className="bg-[#2F4F4F] hover:bg-[#1a2e2e] text-white rounded-xl px-8 h-12 text-base font-medium ml-2"
                  >
                    {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Send <Send className="w-4 h-4 ml-2" /></>}
                  </Button>
                </>
              )}

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}