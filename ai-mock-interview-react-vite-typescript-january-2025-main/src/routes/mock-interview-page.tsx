/* eslint-disable @typescript-eslint/no-unused-vars */
import { Interview } from "@/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoaderPage } from "./loader-page";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase.config";
import { CustomBreadCrumb } from "@/components/custom-bread-crumb";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb } from "lucide-react";
import { QuestionSection } from "@/components/question-section";

export const MockInterviewPage = () => {
  const { interviewId } = useParams<{ interviewId: string }>();
  const [interview, setInterview] = useState<Interview | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const fetchInterview = async () => {
      if (interviewId) {
        try {
          const interviewDoc = await getDoc(doc(db, "interviews", interviewId));
          if (interviewDoc.exists()) {
            setInterview({
              id: interviewDoc.id,
              ...interviewDoc.data(),
            } as Interview);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchInterview();
  }, [interviewId, navigate]);

  if (isLoading) {
    return <LoaderPage className="w-full h-[70vh]" />;
  }

  if (!interviewId) {
    navigate("/generate", { replace: true });
  }

  if (!interview) {
    navigate("/generate", { replace: true });
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="flex flex-col w-full gap-8 py-5 px-6 max-w-7xl mx-auto">
        {/* Breadcrumb with dark theme styling */}
        <div className="text-gray-300">
          <CustomBreadCrumb
            breadCrumbPage="Start"
            breadCrumpItems={[
              { label: "Mock Interviews", link: "/generate" },
              {
                label: interview?.position || "",
                link: `/generate/interview/${interview?.id}`,
              },
            ]}
          />
        </div>

        {/* Interview Header Card - matching dashboard card style */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">
                {interview?.position || "Mock Interview"}
              </h1>
              <p className="text-gray-400">Start your AI Mock Interview</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium text-sm transition-colors">
              Start Interview
            </div>
          </div>
          
          {/* Questions count */}
          {interview?.questions && (
            <div className="text-gray-400 text-sm">
              {interview.questions.length} questions prepared
            </div>
          )}
        </div>

        {/* Alert Section - dark theme */}
        <div className="w-full">
          <Alert className="bg-slate-800 border border-slate-700 p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                <Lightbulb className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <AlertTitle className="text-white font-semibold text-lg mb-3">
                  Important Note
                </AlertTitle>
                <AlertDescription className="text-gray-300 leading-relaxed">
                  Press "Record Answer" to begin answering the question. Once you
                  finish the interview, you&apos;ll receive feedback comparing your
                  responses with the ideal answers.
                  <br />
                  <br />
                  <strong className="text-white">Note:</strong>{" "}
                  <span className="font-medium text-white">Your video is never recorded.</span>{" "}
                  You can disable the webcam anytime if preferred.
                </AlertDescription>
              </div>
            </div>
          </Alert>
        </div>

        {/* Questions Section - dark theme card */}
        {interview?.questions && interview?.questions.length > 0 && (
          <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white">Interview Questions</h2>
              <p className="text-gray-400 text-sm mt-1">Answer each question thoughtfully</p>
            </div>
            <div className="p-6">
              <QuestionSection questions={interview?.questions} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};