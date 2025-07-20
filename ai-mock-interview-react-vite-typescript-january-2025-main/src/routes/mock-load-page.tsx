/* eslint-disable @typescript-eslint/no-unused-vars */
import { db } from "@/config/firebase.config";
import { Interview } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LoaderPage } from "./loader-page";
import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import { Button } from "@/components/ui/button";
import { Lightbulb, Sparkles, Video } from "lucide-react";
import { InterviewPin } from "@/components/pin";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import WebCam from "react-webcam";

export const MockLoadPage = () => {
  const { interviewId } = useParams<{ interviewId: string }>();
  const [interview, setInterview] = useState<Interview | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isWebCamEnabled, setIsWebCamEnabled] = useState(false);

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
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <LoaderPage className="w-full h-[70vh]" />
      </div>
    );
  }

  if (!interviewId) {
    navigate("/generate", { replace: true });
  }

  if (!interview) {
    navigate("/generate", { replace: true });
  }

  return (
    <div className="min-h-screen bg-[#1a2332]">
      <div className="flex flex-col w-full gap-8 py-8 px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between w-full gap-2">
          <CustomBreadCrumb
            breadCrumbPage={interview?.position || ""}
            breadCrumpItems={[{ label: "Mock Interviews", link: "/generate" }]}
          />

          <Link to={`/generate/interview/${interviewId}/start`}>
            <Button size={"sm"} className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0">
              Start <Sparkles />
            </Button>
          </Link>
        </div>

        {interview && <InterviewPin interview={interview} onMockPage />}

        <Alert className="bg-blue-900/30 border border-blue-700/50 p-4 rounded-lg flex items-start gap-3 -mt-3">
          <Lightbulb className="h-5 w-5 text-blue-400" />
          <div>
            <AlertTitle className="text-white font-semibold">
              Important Information
            </AlertTitle>
            <AlertDescription className="text-sm text-gray-300 mt-1">
              Please enable your webcam and microphone to start the AI-generated
              mock interview. The interview consists of five questions. You'll
              receive a personalized report based on your responses at the end.{" "}
              <br />
              <br />
              <span className="font-medium text-blue-300">Note:</span> Your video is{" "}
              <strong className="text-white">never recorded</strong>. You can disable your webcam at any
              time.
            </AlertDescription>
          </div>
        </Alert>

        <div className="flex items-center justify-center w-full h-full">
          <div className="w-full h-[400px] md:w-96 flex flex-col items-center justify-center border border-gray-600 p-4 bg-[#2a3441] rounded-lg">
            {isWebCamEnabled ? (
              <WebCam
                onUserMedia={() => setIsWebCamEnabled(true)}
                onUserMediaError={() => setIsWebCamEnabled(false)}
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <Video className="min-w-24 min-h-24 text-gray-500" />
            )}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button 
            onClick={() => setIsWebCamEnabled(!isWebCamEnabled)}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2.5 border-0"
          >
            {isWebCamEnabled ? "Disable Webcam" : "Enable Webcam"}
          </Button>
        </div>
      </div>
    </div>
  );
};