import { Button } from '@/components/ui/button';
import {
    CheckCircle,
    Clock,
    MessageSquare,
    Mic,
    MicOff,
    PlayCircle,
    User,
    Volume2,
    XCircle
} from 'lucide-react';
import { useState } from 'react';

export function MockInterview() {
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const interviewQuestions = [
    "Расскажите о себе и вашем опыте работы",
    "Почему вы хотите работать в нашей компании?", 
    "Какие ваши самые сильные стороны?",
    "Расскажите о сложной задаче, которую вы решили",
    "Где вы видите себя через 5 лет?"
  ];

  const nextQuestion = () => {
    if (currentQuestion < interviewQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <Button variant="ghost" className="mr-2" onClick={() => window.location.href = '/'}>
            ← Главная
          </Button>
          <Button variant="ghost" className="mr-4" onClick={() => window.location.href = '/dashboard'}>
            ← Back to Dashboard
          </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Mock Interview</h1>
              <p className="text-gray-600">AI-powered interview practice session</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              <Clock className="h-4 w-4 inline mr-1" />
              Question {currentQuestion + 1} of {interviewQuestions.length}
            </div>
            <Button className="bg-red-600 hover:bg-red-700">
              <MessageSquare className="h-4 w-4 mr-2" />
              End Session
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-8">
        {/* Interview Session */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm mb-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h<｜tool▁sep｜>8 w-8 text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Virtual Interviewer</h2>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Volume2 className="h-4 w-4" />
              <span>Audio Quality: Good</span>
            </div>
          </div>

          {/* Current Question */}
          <div className="bg-orange-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Question {currentQuestion + 1}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {interviewQuestions[currentQuestion]}
            </p>
          </div>

          {/* Recording Controls */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-6">
              <Button
                size="lg"
                onClick={toggleRecording}
                className={`w-48 h-48 rounded-full text-2xl font-semibold transition-all duration-300 ${
                  isRecording
                    ? 'bg-red-600 hover:bg-red-700 text-white animate-pulse'
                    : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white'
                }`}
              >
                {isRecording ? (
                  <>
                    <MicOff className="h-8 w-8 mr-3" />
                    Stop Recording
                  </>
                ) : (
                  <>
                    <Mic className="h-8 w-8 mr-3" />
                    Start Recording
                  </>
                )}
              </Button>
            </div>
            
            {isRecording && (
              <div className="mt-4">
                <div className="flex items-center justify-center gap-2 text-red-600">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
                  <span className="font-medium">Recording in progress...</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Your response will be analyzed for improvements</p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              onClick={prevQuestion}
              variant="outline"
              disabled={currentQuestion === 0}
              className="border-gray-300"
            >
              ← Previous Question
            </Button>
            
            <Button
              onClick={nextQuestion}
              disabled={currentQuestion === interviewQuestions.length - 1}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
            >
              Next Question →
            </Button>
          </div>
        </div>

        {/* AI Feedback Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Feedback</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            {answers[currentQuestion] ? (
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-green-800">Strengths</p>
                    <p className="text-gray-700">Your answer shows good technical understanding and clear communication.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-red-800">Areas for Improvement</p>
                    <p className="text-gray-700">Consider adding specific examples and metrics to strengthen your response.</p>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-800">
                    <strong>Suggestion:</strong> Try structuring your answers using the STAR method (Situation, Task, Action, Result).
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <PlayCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p>Record an answer to see AI feedback and suggestions</p>
              </div>
            )}
          </div>
        </div>

        {/* Interview Tips */}
        <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Interview Tips</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-gray-900">Speak Clearly</p>
                  <p className="text-sm text-gray-600">Articulate your thoughts clearly and at a comfortable pace</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-gray-900">Use Examples</p>
                  <p className="text-sm text-gray-600">Support your answers with specific examples from your experience</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-900 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-gray-900">Stay Positive</p>
                  <p className="text-sm text-gray-600">Maintain a positive attitude throughout the interview</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-gray-900">Ask Questions</p>
                  <p className="text-sm text-gray-600">Prepare thoughtful questions about the role and company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
