import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">

      <Card className="border-none shadow-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-serif">Terms of Use</CardTitle>
          <p className="text-muted-foreground text-sm">Last updated: January 2nd, 2026</p>
        </CardHeader>
        <Separator className="my-2" />
        <CardContent className="prose prose-slate dark:prose-invert max-w-none pt-6 space-y-6 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold">1. Welcome</h2>
            <p>
              By accessing or using this website and any services provided through it, you agree to these Terms of Use. 
              If you do not agree with these terms, please do not use the website or services. This website is operated 
              by Meriem Bensalloua (referred to as &quot;the Service Provider&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. Services Offered</h2>
            <p>
              The services offered through this website include mathematics tutoring (such as statistics, algebra, calculus, and Python), 
              data science and data analysis consulting, and professional mentoring or coaching. All services are provided for 
              educational and informational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. Academic Integrity</h2>
            <p>
              The Service Provider is committed to academic integrity; tutoring and mentoring services are designed to support 
              the client&apos;s learning process, and the Service Provider will not complete exams, graded quizzes, or assignments 
              on behalf of a student in violation of their institution&apos;s academic integrity policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. Consultations & Liability</h2>
            <p>
              All new clients are required to attend a brief consultation meeting prior to booking. While every effort is made 
              to provide accurate services, no guarantees are made regarding academic results, grades, employment outcomes, 
              or business success. Data science outputs are provided &quot;as is.&quot;
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of California. For questions, please contact: 
              <span className="font-semibold"> shortcutofsuccess1@gmail.com</span>.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}

