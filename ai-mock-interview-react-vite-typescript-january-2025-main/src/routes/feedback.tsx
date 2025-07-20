import { db } from "@/config/firebase.config";
import { Interview, UserAnswer } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { LoaderPage } from "./loader-page";
import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import { Headings } from "@/components/headings";
import { InterviewPin } from "@/components/pin";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { CircleCheck, Star } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export const Feedback = () => {
  const { interviewId } = useParams<{ interviewId: string }>();
  const [interview, setInterview] = useState<Interview | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [feedbacks, setFeedbacks] = useState<UserAnswer[]>([]);
  const [activeFeed, setActiveFeed] = useState("");
  const { userId } = useAuth();
  const navigate = useNavigate();

  if (!interviewId) {
    navigate("/generate", { replace: true });
  }
  
  useEffect(() => {
    if (interviewId) {
      const fetchInterview = async () => {
        if (interviewId) {
          try {
            const interviewDoc = await getDoc(
              doc(db, "interviews", interviewId)
            );
            if (interviewDoc.exists()) {
              setInterview({
                id: interviewDoc.id,
                ...interviewDoc.data(),
              } as Interview);
            }
          } catch (error) {
            console.log(error);
          }
        }
      };

      const fetchFeedbacks = async () => {
        setIsLoading(true);
        try {
          const querSanpRef = query(
            collection(db, "userAnswers"),
            where("userId", "==", userId),
            where("mockIdRef", "==", interviewId)
          );

          const querySnap = await getDocs(querSanpRef);

          const interviewData: UserAnswer[] = querySnap.docs.map((doc) => {
            return { id: doc.id, ...doc.data() } as UserAnswer;
          });

          setFeedbacks(interviewData);
        } catch (error) {
          console.log(error);
          toast("Error", {
            description: "Something went wrong. Please try again later..",
          });
        } finally {
          setIsLoading(false);
        }
      };
      fetchInterview();
      fetchFeedbacks();
    }
  }, [interviewId, navigate, userId]);

  // calculate the ratings out of 10
  const overAllRating = useMemo(() => {
    if (feedbacks.length === 0) return "0.0";

    const totalRatings = feedbacks.reduce(
      (acc, feedback) => acc + feedback.rating,
      0
    );

    return (totalRatings / feedbacks.length).toFixed(1);
  }, [feedbacks]);

  if (isLoading) {
    return <LoaderPage className="w-full h-[70vh]" />;
  }

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col w-full gap-8">
            
            {/* Breadcrumb */}
            <div className="flex items-center justify-between w-full gap-2">
              <CustomBreadCrumb
                breadCrumbPage={"Feedback"}
                breadCrumpItems={[
                  { label: "Mock Interviews", link: "/generate" },
                  {
                    label: `${interview?.position}`,
                    link: `/generate/interview/${interview?.id}`,
                  },
                ]}
              />
            </div>

            {/* Main Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-green-500 rounded-full"></div>
                <h1 className="text-3xl font-bold text-white">Congratulations!</h1>
              </div>
              <p className="text-slate-300 text-lg mb-6">
                Your personalized feedback is now available. Dive in to see your strengths, areas for improvement, and tips to help you ace your next interview.
              </p>
              
              {/* Overall Rating Card */}
              <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-slate-300 text-lg">
                  Your overall interview rating:{" "}
                  <span className="text-emerald-400 font-bold text-2xl ml-2">
                    {overAllRating} / 10
                  </span>
                </p>
              </div>
            </div>

            {/* Interview Pin */}
            {interview && (
              <div className="mb-8">
                <InterviewPin interview={interview} onMockPage />
              </div>
            )}

            {/* Interview Feedback Section */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-white">Interview Feedback</h2>
              </div>

              {feedbacks && (
                <Accordion type="single" collapsible className="space-y-4">
                  {feedbacks.map((feed) => (
                    <AccordionItem
                      key={feed.id}
                      value={feed.id}
                      className="border border-slate-700/60 rounded-xl bg-slate-800/30 backdrop-blur-sm shadow-lg"
                    >
                      <AccordionTrigger
                        onClick={() => setActiveFeed(feed.id)}
                        className={cn(
                          "px-6 py-4 flex items-center justify-between text-base rounded-t-xl transition-all duration-200 hover:no-underline",
                          activeFeed === feed.id
                            ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white"
                            : "hover:bg-slate-700/30 text-slate-200"
                        )}
                      >
                        <span className="font-medium">{feed.question}</span>
                      </AccordionTrigger>

                      <AccordionContent className="px-6 py-6 bg-slate-800/20 rounded-b-xl space-y-6">
                        {/* Rating */}
                        <div className="flex items-center gap-2 text-lg font-semibold text-yellow-400">
                          <Star className="w-5 h-5 fill-current" />
                          Rating: {feed.rating}
                        </div>

                        {/* Expected Answer */}
                        <Card className="border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm rounded-xl shadow-lg">
                          <div className="p-5 space-y-3">
                            <CardTitle className="flex items-center text-lg text-emerald-400">
                              <CircleCheck className="mr-3 w-5 h-5" />
                              Expected Answer
                            </CardTitle>
                            <CardDescription className="text-slate-300 font-medium leading-relaxed">
                              {feed.correct_ans}
                            </CardDescription>
                          </div>
                        </Card>

                        {/* User Answer */}
                        <Card className="border border-blue-500/30 bg-blue-500/5 backdrop-blur-sm rounded-xl shadow-lg">
                          <div className="p-5 space-y-3">
                            <CardTitle className="flex items-center text-lg text-blue-400">
                              <CircleCheck className="mr-3 w-5 h-5" />
                              Your Answer
                            </CardTitle>
                            <CardDescription className="text-slate-300 font-medium leading-relaxed">
                              {feed.user_ans}
                            </CardDescription>
                          </div>
                        </Card>

                        {/* Feedback */}
                        <Card className="border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm rounded-xl shadow-lg">
                          <div className="p-5 space-y-3">
                            <CardTitle className="flex items-center text-lg text-orange-400">
                              <CircleCheck className="mr-3 w-5 h-5" />
                              Feedback
                            </CardTitle>
                            <CardDescription className="text-slate-300 font-medium leading-relaxed">
                              {feed.feedback}
                            </CardDescription>
                          </div>
                        </Card>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>

            {/* Decorative gradient line */}
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};