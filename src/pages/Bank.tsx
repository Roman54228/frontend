import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { Button } from '@/components/ui/button';
import { Eye, Facebook, Linkedin, MessageCircle, Twitter } from 'lucide-react';

export function Bank() {
  return (
    <div className="min-h-screen">
      <BackgroundGradientAnimation className="py-8" interactive={true}>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 z-10">
          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Header Section */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Eye className="h-4 w-4" />
                <span>260.4K views</span>
              </div>
              <div className="text-gray-500 text-sm">
                5 hours ago
              </div>
            </div>

            {/* Main Question */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              What strategies do you employ to prioritize tasks effectively in high-pressure situations?
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Behavioral
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Asked at Microsoft
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Difficulty: Hard
              </span>
            </div>

            {/* Users Practiced and Share */}
            <div className="flex justify-between items-center mb-8">
              <div className="text-gray-500 text-sm">
                1.7K Users Practiced
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-500 text-sm">Share on</span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="h-4 w-4 text-white" />
                  </button>
                  <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <Twitter className="h-4 w-4 text-white" />
                  </button>
                  <button className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <Linkedin className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Practice Button */}
            <div className="mb-12">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-lg">
                Practice with This Question
              </Button>
            </div>

            {/* Question Explain Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Question Explain</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This question seeks to understand how you handle task management when the pressure is on. 
                Interviewers want to gauge your <strong>decision-making abilities, organizational skills, and stress management strategies.</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Describe a specific high-pressure situation.</li>
                <li>Outline your prioritization techniques (e.g., using a to-do list, categorizing by urgency).</li>
                <li>Explain the impact of your approach on the outcome.</li>
                <li>Highlight any tools or methods you use (e.g., digital planners, time-blocking).</li>
              </ol>
            </div>

            {/* Answer Example 1 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Answer Example 1</h2>
              <p className="text-gray-700 leading-relaxed">
                In my previous role as a project coordinator, I often faced tight deadlines and multiple competing tasks. 
                During one project, we had only one week to prepare for a major client presentation. I began by listing 
                all tasks and categorizing them into <strong>urgent and important</strong> using the <strong>Eisenhower Matrix.</strong> 
                This helped me focus on what needed immediate attention, such as designing presentation slides, while delegating 
                less critical tasks to my team. By doing this, we not only completed the project on time but received positive 
                feedback from the client on our presentation quality.
              </p>
            </div>

            {/* Answer Example 2 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Answer Example 2</h2>
              <p className="text-gray-700 leading-relaxed">
                When I was working as a software engineer during a critical product launch, I had to manage multiple 
                development tasks while coordinating with different teams. I implemented a time-blocking technique 
                where I allocated specific hours to different types of work - coding, code reviews, and team meetings. 
                I also used a priority matrix to categorize tasks by impact and urgency. This systematic approach 
                helped me deliver all features on time while maintaining code quality, and the product launch was 
                successful with zero critical bugs.
              </p>
            </div>

            {/* Answer Example 3 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Answer Example 3</h2>
              <p className="text-gray-700 leading-relaxed">
                As a marketing manager during a crisis situation where our main campaign was failing, I had to quickly 
                pivot our strategy while managing multiple stakeholders' expectations. I used the MoSCoW method (Must have, 
                Should have, Could have, Won't have) to prioritize tasks. I focused on must-have activities like crisis 
                communication and stakeholder updates, while postponing nice-to-have features. This approach helped us 
                recover from the crisis and even exceed our original goals by 15% within the quarter.
              </p>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>

      {/* Other Interview Questions Sections */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Section 1: Microsoft Behavioral Questions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Other interview questions for the Microsoft Behavioral
            </h2>
            
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {/* Question Card 1 */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  What would you do in a case where you disagree with your manager?
                </h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Eye className="h-4 w-4" />
                  <span>129.1K views</span>
                </div>
              </div>

              {/* Question Card 2 */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  Tell me about your biggest failure.
                </h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Eye className="h-4 w-4" />
                  <span>156.9K views</span>
                </div>
              </div>

              {/* Question Card 3 */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  Tell me about one of the most complex projects you've been involved in.
                </h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Eye className="h-4 w-4" />
                  <span>141.9K views</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button variant="outline" className="px-8 py-3 text-gray-700 border-gray-300 hover:bg-gray-50">
                View All
              </Button>
            </div>
          </div>

          {/* Section 2: Behavioral Questions for Other Companies */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Interview questions for the Behavioral role at other companies
            </h2>
            
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {/* Question Card 1 */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  What are your weaknesses and strengths?
                </h3>
                <div className="text-gray-500 text-sm">
                  Asked at Meta (Facebook)
                </div>
              </div>

              {/* Question Card 2 */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  Why do you want to work here?
                </h3>
                <div className="text-gray-500 text-sm">
                  Common behavioral question
                </div>
              </div>

              {/* Question Card 3 */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  Tell me about a time you received negative feedback and how you dealt with it.
                </h3>
                <div className="text-gray-500 text-sm">
                  Asked at Amazon
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button variant="outline" className="px-8 py-3 text-gray-700 border-gray-300 hover:bg-gray-50">
                View All
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105">
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}
