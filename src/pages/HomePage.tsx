import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import {
    Briefcase,
    Calculator,
    Check,
    FileText,
    HelpCircle,
    MessageSquare,
    Monitor,
    User,
    Wand2
} from 'lucide-react';

import { handleStartTrial } from '@/api/trialAPI';

export function HomePage() {
  const navItems = [
    {
      title: "Interview",
      items: [
        { title: "Interview Copilot", icon: Monitor, href: "/dashboard" },
        { title: "Mock Interview", icon: MessageSquare, href: "/mock-interview" },
      ]
    },
    {
      title: "Tools",
      items: [
        { title: "AI Resume Builder", icon: FileText, href: "/dashboard" },
        { title: "AI Material Generator", icon: Wand2, href: "/dashboard" },
        { title: "AI Job Hunter", icon: Briefcase, href: "/dashboard" },
        { title: "AI Salary Calculator", icon: Calculator, href: "/dashboard" },
      ]
    },
    {
      title: "Resources",
      items: [
        { title: "Preparation Hub", icon: User, href: "/dashboard" },
        { title: "Question Bank", icon: HelpCircle, href: "/dashboard" },
      ]
    }
  ];

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
          <path d="M11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V13C9 13.5523 9.44772 14 10 14H14C14.5523 14 15 13.5523 15 13C15 12.4477 14.5523 12 14 12H11V8Z" fill="currentColor"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M4 3C2.89543 3 2 3.89595143 2 5V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3H4ZM4 5H20V16H4V5Z" fill="currentColor"/>
          <path d="M2 19C1.44772 19 1 19.4477 1 20C1 20.5523 1.44772 21 2 21H22C22.5523 21 23 20.5523 23 20C23 19.4477 22.5523 19 22 19H2Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Interview Copilot',
      description: 'Get real-time AI assistance during your interviews with intelligent suggestions and guidance.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
          <path d="M8.6 7.2C8.29787 6.9727 7.89176 6.93619 7.55298 7.10558C7.21419 7.27498 7 7.62124 7 8V13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13V10L11.5 11.8C11.8362 12.0667 12.3245 12.0667 12.6607 11.8L15.1607 10V13C15.1607 13.5523 15.6084 14 16.1607 14C16.713 14 17.1607 13.5523 17.1607 13V8C17.1607 7.62124 16.9465 7.27498 16.6077 7.10558C16.2689 6.93619 15.8628 6.9727 15.5607 7.2L12 9.75L8.6 7.2Z" fill="currentColor"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M4 3C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3H4ZM4 5H20V16H4V5Z" fill="currentColor"/>
          <path d="M2 19C1.44772 19 1 19.4477 1 20C1 20.5523 1.44772 21 2 21H22C22.5523 21 23 20.5523 23 20C23 19.4477 22.5523 19 22 19H2Z" fill="currentColor"/>
        </svg>
      ),
      title: 'AI Mock Interview',
      description: 'Practice with realistic AI-powered mock interviews tailored to your target role and company.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
          <path d="M17.1429 3.6H7.2C5.87452 3.6 4.8 4.67452 4.8 6V22.8C4.8 24.1255 5.87452 25.2 7.2 25.2H21.6C22.9255 25.2 24 24.1255 24 22.8V10.35" stroke="currentColor" strokeWidth="2.4"/>
          <path d="M21.3852 2.83164C21.4734 2.65423 21.7266 2.65423 21.8148 2.83164L22.7605 4.73153C22.7838 4.78228 22.8239 4.82236 22.8747 4.84571L24.7484 5.79115C24.9257 5.87945 24.9257 6.13273 24.7484 6.22103L22.8747 7.16647C22.8239 7.18982 22.7838 7.2299 22.7605 7.28065L21.8148 9.18054C21.7266 9.35795 21.4734 9.35795 21.3852 9.18054L20.4395 7.28065C20.4162 7.2299 20.3761 7.18982 20.3253 7.16647L18.4516 6.22103C18.2743 6.13273 18.2743 5.87945 18.4516 5.79115L20.3253 4.84571C20.3761 4.82236 20.4162 4.78228 20.4395 4.73153L21.3852 2.83164Z" fill="currentColor"/>
          <path d="M9.6 20.4H19.2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square"/>
          <path d="M9.6 15.6H16.22.4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square"/>
        </svg>
      ),
      title: 'AI Resume Builder',
      description: 'Create ATS-optimized resumes that get noticed by recruiters and pass automated screening.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.8284 2H18C19.6569 2 21 3.34315 21 5V13H18.2V5C18.2 4.44772 17.7523 4 17.2 4H11V7C11 8.65685 9.65685 10 8 10H5V19C5 19.5523 5.44772 20 6 20H13V23H6C4.34315 23 3 21.6569 3 20V9.82843C3 9.03278 3.31607 8.26972 3.87868 7.70711L8.70711 2.87868C9.26972 2.31607 10.0328 2 10.8284 2ZM6.41421 8H8C8.55228 8 9 7.55228 9 7V5.41421L6.41421 8Z" fill="currentColor"/>
          <path d="M18.7797 15.1364C18.8703 14.9546 19.1298 14.9546 19.2204 15.1364L20.394 17.4951C20.4182 17.5429 20.459 17.5836 20.5069 17.6078L22.8656 18.7797C23.0474 18.8703 23.0474 19.1298 22.8656 19.2204L20.5069 20.3943C20.459 20.4184 20.4182 20.4592 20.394 20.507L19.2204 22.8657C19.1298 23.0475 18.8703 23.0475 18.7797 22.8657L17.6078 20.507C17.5836 20.4592 17.5429 20.4184 17.4951 20.3943C17.4951 20.3943C15.1364 19.2204C14.9546 19.1298 14.9546 18.8703 15.1364 18.7797L17.4951 17.6078C17.5429 17.5836 17.5836 17.5429 17.6078 17.4951L18.7797 15.1364Z" fill="currentColor"/>
        </svg>
      ),
      title: 'AI Material Generator',
      description: 'Generate personalized interview prep materials, cover letters, and follow-up emails instantly.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer at Google',
      content: 'The Interview Copilot was a game-changer. I felt so much more confident during my interviews and landed my dream job!',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager at Meta',
      content: 'The mock interviews were incredibly realistic. The AI feedback helped me improve my answers and communication style.',
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Scientist at Amazon',
      content: 'The resume builder helped me get past ATS systems. I went from 0 callbacks to multiple interviews within weeks!',
      avatar: 'ER'
    }
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      features: [
        'Basic mock interviews',
        'Resume templates',
        '5 AI generations per month',
        'Community support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/month',
      features: [
        'Unlimited mock interviews',
        'Real-time interview copilot',
        'Unlimited AI generations',
        'ATS-optimized resume builder',
        'Priority support',
        'Interview question bank'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'Custom integrations',
        'Team analytics',
        'White-label options',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar className="border-r border-gray-200">
          <SidebarContent className="bg-white">
            <div className="p-4">
              <h1 className="text-xl font-bold text-orange-600">
                InterviewAI
              </h1>
            </div>

            {navItems.map((section, idx) => (
              <SidebarGroup key={idx}>
                <SidebarGroupLabel className="text-xs uppercase text-gray-600">
                  {section.title}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild tooltip={item.title}>
                          <a href={item.href} className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>

          <SidebarFooter className="border-t border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold">
                  JD
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">John Doe</span>
                  <span className="text-xs text-gray-500">john@example.com</span>
                </div>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex-1">
          <div className="min-h-screen bg-white">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 px-4 md:px-6">
              <div className="flex h-16 items-center justify-between gap-4">
                {/* Left side */}
                <div className="flex items-center gap-2">
                  {/* Mobile menu trigger */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        className="group size-8 md:hidden text-gray-900 hover:bg-orange-50"
                        variant="ghost"
                        size="icon"
                      >
                        <svg
                          className="pointer-events-none"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 12L20 12"
                            className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                          />
                          <path
                            d="M4 12H20"
                            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                          />
                          <path
                            d="M4 12H20"
                            className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                          />
                        </svg>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-48 p-1 md:hidden bg-white border-gray-200">
                      <NavigationMenu className="max-w-none *:w-full">
                        <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                          <NavigationMenuItem className="w-full">
                            <NavigationMenuLink
                              href="#features"
                              className="py-1.5 text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                            >
                              Features
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                          <NavigationMenuItem className="w-full">
                            <NavigationMenuLink
                              href="#testimonials"
                              className="py-1.5 text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                            >
                              Testimonials
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                          <NavigationMenuItem className="w-full">
                            <NavigationMenuLink
                              href="#pricing"
                              className="py-1.5 text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                            >
                              Pricing
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                    </PopoverContent>
                  </Popover>
                  {/* Main nav */}
                  <div className="flex items-center gap-6">
                    <SidebarTrigger className="h-6 w-6 text-gray-900 hidden md:block" />
                    <h1 className="text-xl font-bold text-orange-600">
                      InterviewAI
                    </h1>
                    {/* Navigation menu */}
                    <NavigationMenu className="max-md:hidden">
                      <NavigationMenuList className="gap-2">
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            href="#features"
                            className="text-gray-700 hover:text-orange-600 py-1.5 font-medium"
                          >
                            Features
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            href="#testimonials"
                            className="text-gray-700 hover:text-orange-600 py-1.5 font-medium"
                          >
                            Testimonials
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            href="#pricing"
                            className="text-gray-700 hover:text-orange-600 py-1.5 font-medium"
                          >
                            Pricing
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>
                </div>
                {/* Right side */}
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50">
                    Sign In
                  </Button>
                  <Button size="sm" className="text-sm bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    Get Started
                  </Button>
                </div>
              </div>
            </header>

            {/* Hero Section */}
            <BackgroundGradientAnimation className="py-20 sm:py-32" interactive={true}>
              <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
                <div className="text-center">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="block">Подготовься к собесу</span>
                    <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                      С ИИ-интервьюером
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
                    Get real-time AI assistance, practice with mock interviews, optimize your resume, 
                    and land your dream job with our comprehensive interview preparation platform.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700" onClick={handleStartTrial}>
                      Start Free Trial
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-gray-300 text-gray-900 hover:bg-gray-50">
                      Watch Demo
                    </Button>
                  </div>
                  <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-orange-500" />
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-orange-500" />
                      <span>14-day free trial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-orange-500" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </div>
              </div>
            </BackgroundGradientAnimation>

            {/* Stats Section */}
            <section className="border-b border-gray-200 py-12 bg-white">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600">500K+</div>
                    <div className="mt-2 text-sm text-gray-600">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600">92%</div>
                    <div className="mt-2 text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600">1M+</div>
                    <div className="mt-2 text-sm text-gray-600">Mock Interviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600">4.9/5</div>
                    <div className="mt-2 text-sm text-gray-600">User Rating</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-gray-50">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Everything You Need to Succeed
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Comprehensive tools to help you prepare, practice, and perform your best
                  </p>
                </div>
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md hover:border-orange-500/50 transition-all"
                    >
                      <div className="text-orange-600">{feature.icon}</div>
                      <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                      <p className="mt-2 text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 bg-white">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Loved by Job Seekers Worldwide
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Join thousands who have landed their dream jobs
                  </p>
                </div>
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-gray-200 bg-gradient-to-br from-orange-50 to-white p-8"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-500">{testimonial.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-gray-50">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Simple, Form Pricing
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Choose the plan that's right for you
                  </p>
                </div>
                <div className="mt-16 grid gap-8 md:grid-cols-3">
                  {pricingPlans.map((plan, index) => (
                    <div
                      key={index}
                      className={`rounded-2xl border border-gray-200 bg-white p-8 ${
                        plan.popular ? 'ring-2 ring-orange-500 shadow-lg scale-105' : ''
                      }`}
                    >
                      {plan.popular && (
                        <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1 text-sm font-semibold text-white">
                          Most Popular
                        </div>
                      )}
                      <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                      <div className="mt-4 flex items-baseline">
                        <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                        <span className="ml-1 text-xl text-gray-600">{plan.period}</span>
                      </div>
                      <ul className="mt-8 space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <Check className="h-5 w-5 flex-shrink-0 text-orange-600" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`mt-8 w-full ${
                          plan.popular
                            ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
                            : 'border-gray-300 text-gray-900 hover:bg-gray-50'
                        }`}
                        variant={plan.popular ? 'default' : 'outline'}
                        size="lg"
                      >
                        {plan.cta}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Ready to Ace Your Next Interview?
                  </h2>
                  <p className="mt-4 text-lg text-orange-100">
                    Join thousands of successful job seekers and start your journey today
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg px-8 py-6 bg-gray-900 text-white hover:bg-gray-800">
                      Start Free Trial
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                      Schedule Demo
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-200 bg-white py-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-4">
                  <div>
                    <h3 className="text-lg font-bold text-orange-600">
                      InterviewAI
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Your AI-powered interview preparation platform
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Product</h4>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li><a href="#" className="hover:text-orange-600">Features</a></li>
                      <li><a href="#" className="hover:text-orange-600">Pricing</a></li>
                      <li><a href="#" className="hover:text-orange-600">FAQ</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Company</h4>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li><a href="#" className="hover:text-orange-600">About</a></li>
                      <li><a href="#" className="hover:text-orange-600">Blog</a></li>
                      <li><a href="#" className="hover:text-orange-600">Careers</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Legal</h4>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li><a href="#" className="hover:text-orange-600">Privacy</a></li>
                      <li><a href="#" className="hover:text-orange-600">Terms</a></li>
                      <li><a href="#" className="hover:text-orange-600">Security</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
                  © 2024 InterviewAI. All rights reserved.
                </div>
              </div>
            </footer>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
