import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, BookOpen, ClipboardList, Settings } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "1-on-1 Tutoring",
      price: "$60",
      description: "1 hour session",
      icon: <BookOpen className="w-10 h-10 text-[#2F5C4B]" />, 
      features: [
        "Personalized, one-on-one instruction",
        "Focus on your chosen subject (Math, Python, R)",
        "Problem-solving and guided practice"
      ],
      cta: "Get Started",
      color: "bg-pink-50 border-pink-100", 
      btnColor: "bg-[#2F5C4B] hover:bg-[#244a3b]"
    },
    {
      title: "4-hour Package",
      price: "$199",
      description: "Four 1 hour sessions",
      icon: <ClipboardList className="w-10 h-10 text-[#2F5C4B]" />,
      features: [
        "Custom learning plan for your goals",
        "Weekly progress tracking",
        "Q&A and feedback between sessions"
      ],
      cta: "Get Started",
      color: "bg-green-50 border-green-100", 
      btnColor: "bg-[#2F5C4B] hover:bg-[#244a3b]"
    },
    {
      title: "Fully Customized Plan",
      price: "$200+",
      description: "Starts at $200+",
      icon: <Settings className="w-10 h-10 text-[#2F5C4B]" />,
      features: [
        "Comprehensive assessment of needs",
        "Custom study plan and materials",
        "Ongoing mentorship & tracking",
        "Support in multiple areas (Math, Stats, Data Science)"
      ],
      cta: "Get Started",
      color: "bg-pink-50 border-pink-100", 
      btnColor: "bg-[#2F5C4B] hover:bg-[#244a3b]"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-slate-800 mb-4">Tutoring Services</h2>
          <p className="text-slate-600">Guidance in data analytics and applied machine learning — helping you develop the skills needed to excel.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`relative border-2 ${service.color} shadow-sm hover:shadow-md transition-shadow`}>
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-white p-4 rounded-full shadow-sm w-fit mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-serif text-slate-800">{service.title}</CardTitle>
                <CardDescription className="text-slate-600 font-medium mt-2">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pt-4">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-[#2F5C4B]">{service.price}</span>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4 pb-8">
                <Button className={`w-full ${service.btnColor} text-white`}>
                  {service.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}