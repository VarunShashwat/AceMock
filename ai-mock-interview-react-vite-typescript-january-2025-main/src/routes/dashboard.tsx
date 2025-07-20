import { Headings } from "@/components/headings";
import { InterviewPin } from "@/components/pin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/config/firebase.config";
import { Interview } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Plus, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export const Dashboard = () => { 
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(false);
  const { userId } = useAuth();

  useEffect(() => {
    setLoading(true);
    const interviewQuery = query(
      collection(db, "interviews"),
      where("userId", "==", userId)
    );

    const unsubscribe = onSnapshot(
      interviewQuery,
      (snapshot) => {
        const interviewList: Interview[] = snapshot.docs.map((doc) => {
          const id = doc.id;
          return {
            id,
            ...doc.data(),
          };
        }) as Interview[];
        setInterviews(interviewList);
        setLoading(false);
      },
      (error) => {
        console.log("Error on fetching : ", error);
        toast.error("Error..", {
          description: "Something went wrong.. Try again later..",
        });
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Advanced Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
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

      <div className="relative z-10 p-6 md:p-8 lg:p-12">
        {/* Header Section */}
        <div className="flex w-full items-center justify-between mb-8">
          <div className="space-y-2">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full border border-purple-400/40 backdrop-blur-xl shadow-lg shadow-purple-500/10 mb-4">
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                ✨ AI Interview Dashboard
              </span>
            </div>
            <Headings
              title="Dashboard"
              description="Create and start your AI Mock interview"
            />
          </div>
          
          <Link to={"/generate/create"}>
            <Button className="group px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold rounded-xl shadow-xl shadow-purple-500/25 border border-purple-400/40 hover:shadow-purple-500/40 transition-all duration-500 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center">
                <Plus className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                Add New Interview
              </span>
            </Button>
          </Link>
        </div>



        <Separator className="my-8 bg-gradient-to-r from-transparent via-white/20 to-transparent border-0 h-px" />

        {/* Content Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Your Interview Sessions
            </h2>
            <div className="text-sm text-gray-400">
              {interviews.length} {interviews.length === 1 ? 'interview' : 'interviews'} created
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="h-48 bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-2xl border border-gray-700/50 backdrop-blur-xl">
                    <div className="p-6 space-y-4">
                      <div className="h-4 bg-gradient-to-r from-gray-700/60 to-gray-800/40 rounded-full"></div>
                      <div className="h-3 bg-gradient-to-r from-gray-700/40 to-gray-800/20 rounded-full w-2/3"></div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gradient-to-r from-gray-700/40 to-gray-800/20 rounded-full"></div>
                        <div className="h-2 bg-gradient-to-r from-gray-700/40 to-gray-800/20 rounded-full w-3/4"></div>
                      </div>
                      <div className="h-10 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-xl"></div>
                    </div>
                  </div>
                </div>
              ))
            ) : interviews.length > 0 ? (
              interviews.map((interview) => (
                <div key={interview.id} className="group">
                  <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/40 border border-gray-700/50 backdrop-blur-2xl hover:from-gray-800/90 hover:to-gray-900/60 transition-all duration-700 hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl relative overflow-hidden">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
                    
                    <div className="relative z-10">
                      <InterviewPin interview={interview} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="md:col-span-2 lg:col-span-3 w-full flex flex-grow items-center justify-center py-20 flex-col">
                <div className="relative group">
                  {/* Glow effect behind the image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-3xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  
                  <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-3xl p-12 border border-gray-700/50 backdrop-blur-2xl shadow-2xl">
                    <img
                      src="/assets/svg/not-found.svg"
                      className="w-44 h-44 object-contain mx-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      alt="No interviews found"
                    />
                  </div>
                </div>

                <div className="text-center space-y-4 mt-8">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    No Interviews Yet
                  </h2>

                  <p className="w-full md:w-96 text-center text-gray-400 leading-relaxed">
                    Ready to start your interview journey? Create your first AI-powered mock interview 
                    and take the first step toward landing your dream job.
                  </p>

                  <Link to={"/generate/create"} className="inline-block mt-6">
                    <Button className="group px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-purple-500/30 border border-purple-400/40 hover:shadow-purple-500/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <span className="relative z-10 flex items-center">
                        <Plus className="mr-3 h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                        Create Your First Interview
                        <Sparkles className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>


      </div>
    </div>
  );
};