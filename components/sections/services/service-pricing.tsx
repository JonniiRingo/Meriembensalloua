import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ServicePricing() {
  return (
    <section className="py-24 bg-white relative">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/mockups/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative z-10 container mx-auto px-4 space-y-32">
        
        {/* =========================================
            SECTION 1: TUTORING (Your Provided Code)
           ========================================= */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium text-gray-900 mb-4">Tutoring Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guidance in data analytics and applied machine learning — helping you develop the skills needed to excel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1: 1-on-1 Tutoring (Pink) */}
            <div className="bg-[#FFF5FA] rounded-3xl p-8 flex flex-col border border-pink-50">
              <div className="flex justify-center mb-6">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-2xl">📖</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">1-on-1 Tutoring</h3>
              <p className="text-center text-gray-500 mb-6">1 hour session</p>
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-gray-900">$60</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {['Personalized, one-on-one instruction', 'Focus on your chosen subject (Math, Python, R)', 'Problem-solving and guided practice'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#2F4F4F] hover:bg-[#1a2e2e] text-white py-6 rounded-xl">
                Get Started
              </Button>
            </div>

            {/* Card 2: 4-hour Package (Green - Highlighted) */}
            <div className="bg-[#F0FFF4] rounded-3xl p-8 flex flex-col border border-green-50 relative transform md:-translate-y-4 shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-2xl">📋</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">4-hour Package</h3>
              <p className="text-center text-gray-500 mb-6">Four 1 hour sessions</p>
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-gray-900">$199</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {['Custom learning plan for your goals', 'Weekly progress tracking', 'Q&A and feedback between sessions'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#2F4F4F] hover:bg-[#1a2e2e] text-white py-6 rounded-xl">
                Get Started
              </Button>
            </div>

            {/* Card 3: Custom Plan (Pink) */}
            <div className="bg-[#FFF5FA] rounded-3xl p-8 flex flex-col border border-pink-50">
              <div className="flex justify-center mb-6">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-2xl">⚙️</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Fully Customized Plan</h3>
              <p className="text-center text-gray-500 mb-6">Starts at $200+</p>
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-gray-900">$200+</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {['Comprehensive assessment of needs', 'Custom study plan and materials', 'Ongoing mentorship & tracking', 'Support in multiple areas'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#2F4F4F] hover:bg-[#1a2e2e] text-white py-6 rounded-xl">
                Get Started
              </Button>
            </div>
          </div>
        </div>

        {/* =========================================
            SECTION 2: DATA SCIENCE (New Styling Applied)
           ========================================= */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium text-gray-900 mb-4">Data Science & Machine Learning</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hands-on guidance in data analytics, visualization, and applied machine learning projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* DS Card 1: Starter (Pink) */}
            <div className="bg-[#FFF5FA] rounded-3xl p-8 flex flex-col border border-pink-50">
              <div className="flex justify-center mb-6">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-2xl">📊</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Starter</h3>
              <p className="text-center text-gray-500 mb-6">Project Basics</p>
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-gray-900">$200</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {['Introduction to Python or R for Data Science', 'Help with data cleaning and visualization', 'Support on small academic or personal projects', '2 personalized 1-on-1 sessions'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#2F4F4F] hover:bg-[#1a2e2e] text-white py-6 rounded-xl">
                Get Started
              </Button>
            </div>

            {/* DS Card 2: Pro-Package (Green Highlight) */}
            <div className="bg-[#F0FFF4] rounded-3xl p-8 flex flex-col border border-green-50 relative transform md:-translate-y-4 shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-2xl">🧠</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Pro-Package</h3>
              <p className="text-center text-gray-500 mb-6">End-to-End Support</p>
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-gray-900">$600</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {['Hands-on guidance through end-to-end data projects', 'Support in machine learning algorithms (regression, classification)', 'Project structure, evaluation, and optimization', 'Up to 6 personalized sessions'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#2F4F4F] hover:bg-[#1a2e2e] text-white py-6 rounded-xl">
                Get Started
              </Button>
            </div>

            {/* DS Card 3: Custom (Pink) */}
            <div className="bg-[#FFF5FA] rounded-3xl p-8 flex flex-col border border-pink-50">
              <div className="flex justify-center mb-6">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Fully Customized</h3>
              <p className="text-center text-gray-500 mb-6">Deep Dive Consulting</p>
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-gray-900">$1,500</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {['Deep-dive consulting or project mentorship', 'Custom machine learning model development', 'Guidance in data storytelling and visualization', 'Ongoing communication & project support'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#2F4F4F] hover:bg-[#1a2e2e] text-white py-6 rounded-xl">
                Get Started
              </Button>
            </div>
          </div>
        </div>

        {/* =========================================
            SECTION 3: MENTORING (New Styling Applied)
           ========================================= */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium text-gray-900 mb-4">Mentoring</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Career and academic mentorship that inspires growth, focus, and leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Mentor Card 1: Counseling (Pink) */}
            <div className="bg-[#FFF5FA] rounded-3xl p-8 flex flex-col border border-pink-50">
              <div className="flex justify-center mb-6">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-2xl">💭</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Counseling</h3>
              <p className="text-center text-gray-500 mb-6">Two 1-hour sessions</p>
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-gray-900">$80–$100</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {['Two 1-hour mentoring sessions', 'Personalized academic or career guidance', 'Q&A and action steps to help you move forward', 'Follow-up email summary and resources'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#2F4F4F] hover:bg-[#1a2e2e] text-white py-6 rounded-xl">
                Get Started
              </Button>
            </div>

            {/* Mentor Card 2: Advisor (Green Highlight) */}
            <div className="bg-[#F0FFF4] rounded-3xl p-8 flex flex-col border border-green-50 relative transform md:-translate-y-4 shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-2xl">🧭</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Advisor</h3>
              <p className="text-center text-gray-500 mb-6">Four 1-hour sessions</p>
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-gray-900">$199</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {['Goal-setting and progress tracking', 'Career and learning plan development', 'Feedback on projects, resumes, or research ideas', 'Structured roadmap for success'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#2F4F4F] hover:bg-[#1a2e2e] text-white py-6 rounded-xl">
                Get Started
              </Button>
            </div>

            {/* Mentor Card 3: Mentor (Pink) */}
            <div className="bg-[#FFF5FA] rounded-3xl p-8 flex flex-col border border-pink-50">
              <div className="flex justify-center mb-6">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-2xl">🎓</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Mentor</h3>
              <p className="text-center text-gray-500 mb-6">Twelve 1-hour sessions</p>
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-gray-900">$550–$600</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {['Fully customized plan based on your goals', 'Guidance in academic success & data science projects', 'Priority access to feedback and communication', 'Long-term strategic partnership'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#2F4F4F] hover:bg-[#1a2e2e] text-white py-6 rounded-xl">
                Get Started
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}