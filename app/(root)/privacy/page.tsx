import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">


      <Card className="border-none shadow-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-serif">Privacy Policy</CardTitle>
          <p className="text-muted-foreground text-sm">Last updated: January 2nd, 2026</p>
        </CardHeader>
        <Separator className="my-2" />
        <CardContent className="prose prose-slate dark:prose-invert max-w-none pt-6 space-y-6 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold">Data Collection</h2>
            <p>
              Information collected may include your name, email address, billing information, and any project-related data 
              or datasets you voluntarily provide for tutoring, mentoring, or data science services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Data Usage</h2>
            <p>
              Personal information is used solely to respond to inquiries, conduct mandatory consultations, and provide services. 
              Your personal data is never sold or shared with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Security & Confidentiality</h2>
            <p>
              In the context of data science projects, all client-provided data is treated as strictly confidential. 
              Clients are encouraged to anonymize or mask any sensitive PII within datasets before sharing them. 
              Unless a long-term agreement is in place, project-related files will be permanently deleted within 30 days of completion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">California Privacy Rights</h2>
            <p>
              Residents of California have the right under the CCPA to request access to personal information collected, 
              request deletion, and opt-out of data sales (though we do not sell data).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p>
              For privacy-related questions, please contact: <span className="font-semibold">shortcutofsuccess1@gmail.com</span>.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}