import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden relative">
      {/* Advanced Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-gradient-to-r from-indigo-500/30 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
        <div className="absolute bottom-1/4 left-2/3 w-48 h-48 bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-full blur-3xl animate-pulse delay-4000"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <Container className="relative z-10">
        <div className="my-16 pt-12">
          <div className="text-center md:text-left space-y-6">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full border border-purple-400/40 backdrop-blur-xl mb-8 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 group">
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:via-pink-200 group-hover:to-blue-200 transition-all duration-300">
                ✨ Next Generation AI Interview Platform - Powered by GPT-4
              </span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black leading-none tracking-tight">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                AI Superpower
              </span>
              <span className="block text-2xl md:text-4xl font-semibold text-gray-300 mt-4 animate-pulse delay-500">
                A revolutionary way to master
              </span>
              <span className="block text-3xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mt-3 animate-pulse delay-1000 drop-shadow-xl">
                interview success
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed mt-10 font-light">
              Revolutionize your interview preparation with <span className="font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">cutting-edge AI technology</span>. 
              Master every conversation, ace every question, and <span className="font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">land your dream role</span> with unshakeable confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link to={"/generate"}>
                <Button className="group px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold text-xl rounded-2xl shadow-2xl shadow-purple-500/30 border border-purple-400/40 hover:shadow-purple-500/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center">
                    Start Your Journey <Sparkles className="ml-3 h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                  </span>
                </Button>
              </Link>
              <Button variant="outline" className="px-10 py-5 bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 font-bold text-xl rounded-2xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl group">
                <span className="group-hover:text-purple-300 transition-colors duration-300">Watch Demo</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 my-20">
          <div className="group text-center p-10 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] border-2 border-white/20 backdrop-blur-2xl hover:from-white/15 hover:to-white/8 transition-all duration-700 hover:scale-110 hover:-translate-y-2 shadow-2xl shadow-emerald-500/10 hover:shadow-emerald-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
                250k+
              </div>
              <div className="text-gray-300 font-semibold text-xl mb-4">Offers Received</div>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-200"></div>
            </div>
          </div>
          <div className="group text-center p-10 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] border-2 border-white/20 backdrop-blur-2xl hover:from-white/15 hover:to-white/8 transition-all duration-700 hover:scale-110 hover:-translate-y-2 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
                1.2M+
              </div>
              <div className="text-gray-300 font-semibold text-xl mb-4">Interviews Aced</div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-200"></div>
            </div>
          </div>
        </div>

        {/* Ultra-Advanced Dashboard Preview Section */}
        <div className="relative w-full mt-16 rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-3xl border-2 border-white/30 shadow-2xl shadow-black/50 overflow-hidden group hover:shadow-purple-500/20 transition-all duration-700 hover:scale-[1.02]">
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
          {/* Mock Dashboard Interface */}
          <div className="p-10 relative z-10">
            {/* Enhanced Top Bar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-red-400 rounded-full shadow-lg shadow-red-400/50 animate-pulse"></div>
                <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 animate-pulse delay-200"></div>
                <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50 animate-pulse delay-400"></div>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl border border-white/30 backdrop-blur-xl shadow-xl">
                <span className="text-white font-bold text-lg bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">Interviews Copilot™</span>
              </div>
            </div>

            {/* Enhanced Main Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-96">
              {/* Left Panel - Enhanced AI Chat */}
              <div className="bg-gradient-to-br from-purple-500/30 to-blue-500/20 rounded-3xl p-8 border-2 border-purple-400/40 backdrop-blur-xl shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                  <h3 className="text-white font-black text-xl">AI Interview Coach</h3>
                  <div className="ml-auto w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/15 rounded-2xl p-4 border border-white/30 backdrop-blur-xl shadow-lg hover:bg-white/20 transition-all duration-300">
                    <p className="text-sm text-white font-medium">Tell me about yourself and your career goals...</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-600/40 to-blue-600/40 rounded-2xl p-4 border border-purple-400/40 ml-6 shadow-xl hover:ml-8 transition-all duration-300">
                    <p className="text-sm text-white font-medium">I'm a passionate software developer with 3 years of experience...</p>
                  </div>
                  <div className="bg-white/15 rounded-2xl p-4 border border-white/30 backdrop-blur-xl shadow-lg hover:bg-white/20 transition-all duration-300">
                    <p className="text-sm text-white font-medium">Great! Let's practice behavioral questions...</p>
                    <div className="flex items-center gap-1 mt-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Panel - Enhanced Analytics */}
              <div className="bg-gradient-to-br from-emerald-500/30 to-teal-500/20 rounded-3xl p-8 border-2 border-emerald-400/40 backdrop-blur-xl shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">📊</span>
                  </div>
                  <h3 className="text-white font-black text-xl">Performance Analytics</h3>
                </div>
                <div className="space-y-5">
                  <div className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold text-sm">Confidence Score</span>
                      <span className="text-emerald-300 font-black text-lg">94%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-3 rounded-full w-[94%] shadow-lg shadow-emerald-400/30 group-hover:shadow-emerald-400/50 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold text-sm">Technical Skills</span>
                      <span className="text-blue-300 font-black text-lg">88%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-3 rounded-full w-[88%] shadow-lg shadow-blue-400/30 group-hover:shadow-blue-400/50 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold text-sm">Communication</span>
                      <span className="text-pink-300 font-black text-lg">92%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-pink-400 to-purple-400 h-3 rounded-full w-[92%] shadow-lg shadow-pink-400/30 group-hover:shadow-pink-400/50 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 animate-pulse delay-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel - Action Items */}
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl p-6 border border-blue-400/30">
                <h3 className="text-white font-bold text-lg mb-4">Recommendations</h3>
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-white text-sm font-medium">Practice STAR Method</span>
                    </div>
                    <p className="text-white/60 text-xs">Focus on behavioral questions</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-white text-sm font-medium">System Design Review</span>
                    </div>
                    <p className="text-white/60 text-xs">Strengthen technical concepts</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white text-sm font-medium">Mock Interview</span>
                    </div>
                    <p className="text-white/60 text-xs">Schedule practice session</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AI</span>
                </div>
                <span className="text-white/80 text-sm">Ready to practice? Let's start your next session!</span>
              </div>
              
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Generate <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Companies Marquee */}
      <div className="w-full my-20 py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative z-10 text-center mb-8">
          <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">
            Trusted by professionals at industry leaders
          </p>
        </div>
        <Marquee pauseOnHover speed={50} gradient={true} gradientColor={[17, 24, 39]} gradientWidth={100}>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      <Container className="py-16 space-y-12 relative z-10">
        <h2 className="text-3xl md:text-4xl text-center font-bold max-w-4xl mx-auto leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
          Unleash your potential with personalized AI insights and targeted
          interview practice that adapts to your career goals.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center mt-16">
          <div className="col-span-1 md:col-span-3">
            {/* Advanced Mock Interview Interface */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-bold text-xl">Live Interview Simulation</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-red-400 text-sm font-medium">RECORDING</span>
                  </div>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-600/50 flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-white font-bold text-xl">AI</span>
                    </div>
                    <p className="text-white/80 text-lg font-medium">Analyzing your responses...</p>
                    <div className="flex items-center justify-center gap-1 mt-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-emerald-400 text-2xl font-bold">8.5/10</div>
                    <div className="text-white/60 text-sm">Clarity</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-blue-400 text-2xl font-bold">9.2/10</div>
                    <div className="text-white/60 text-sm">Relevance</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-purple-400 text-2xl font-bold">8.8/10</div>
                    <div className="text-white/60 text-sm">Confidence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 min-h-96 w-full flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-xl">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Career?</h3>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your competitive edge in
              today's dynamic job market.
            </p>

            <Link to={"/generate"} className="w-full">
              <Button className="w-full h-16 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-xl rounded-2xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-purple-400/30">
                Start Your Journey <Sparkles className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;