import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import ImageCarousel from '../../components/project/ImageCarousel';
import { ScanFace, Mic, Brain } from 'lucide-react';
import { useThemeColors } from '../../hooks/useThemeColors';

import dashImg from '../../assets/projects/nara/dashh.png';
import faceLoginImg from '../../assets/projects/nara/login.png';
import voiceInputImg from '../../assets/projects/nara/voice.png';
import emotionTrackerImg from '../../assets/projects/nara/emo.png';
import iconImg from '../../assets/projects/nara/icon.png';
import dasImg from '../../assets/projects/nara/dash.png';

const NaraCalendar = () => {
  const themeColors = useThemeColors();

  // Kumpulkan semua screenshot dalam array untuk carousel
  const screenshots = [
    dasImg,
    faceLoginImg,
    dashImg,
    voiceInputImg,
    emotionTrackerImg,
  ].filter(Boolean);

  return (
    <ProjectLayout>
      <ProjectHeader 
        icon={iconImg}
        title="Nara Calendar"
        subtitle="AI-Powered Biometric & Emotion Planner"
        githubUrl="https://github.com/deadeaa/NaRaCalendar.git"
        features={[
          {
            icon: ScanFace,
            title: "Face Recognition Login",
            description: "Secure biometric authentication with emotional telemetry capture"
          },
          {
            icon: Mic,
            title: "Voice & Text Ingestion",
            description: "Dual modal input for seamless hands-free event logging"
          },
          {
            icon: Brain,
            title: "Proactive Wellness Engine",
            description: "AI-driven recommendations for hydration breaks and rest cycles"
          }
        ]}
      />
      
      {/* Screenshots Carousel - pake ImageCarousel yang sama dengan MERCI */}
      {screenshots.length > 0 && (
        <ImageCarousel 
          images={screenshots}
          alt="Nara Calendar App Screenshots"
          title="App Screenshots"
        />
      )}

      {/* Overview Section */}
      <div className="rounded-lg shadow-lg p-8 mb-8" style={{ 
        backgroundColor: themeColors.card.background,
        border: `1px solid ${themeColors.card.border}`
      }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: themeColors.text.primary }}>
          Overview
        </h2>
        <ProjectOverview>
          <p>
            Nara Calendar is a contextual, AI-driven daily planner designed to transform how users manage their time 
            and mental energy. Upon logging in via secure Face Recognition, the application evaluates user emotion 
            telemetry data to serve as an anchor metric for personalized calendar logging and mood history mapping.
          </p>
          <p>
            The planner allows users to log schedule items effortlessly using text inputs or voice processing. 
            By monitoring structural calendar load factors and user-provided sleep quality records, an intelligent 
            recommendation engine steps in to proactively suggest hydration breaks or rest cycles.
          </p>
        </ProjectOverview>
      </div>

      {/* Tech Stack Section */}
      <div className="rounded-lg shadow-lg p-8 mb-8" style={{ 
        backgroundColor: themeColors.card.background,
        border: `1px solid ${themeColors.card.border}`
      }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: themeColors.text.primary }}>
          Tech Stack
        </h2>
        <TechStack technologies={["Python", "Flask", "MySQL", "Computer Vision", "Emotion Analysis", "Voice-to-Text"]} />
      </div>

      {/* Technical Highlights Section */}
      <div className="rounded-lg shadow-lg p-8" style={{ 
        backgroundColor: themeColors.card.background,
        border: `1px solid ${themeColors.card.border}`
      }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: themeColors.text.primary }}>
          Technical Highlights
        </h2>
        <TechnicalHighlights 
          highlights={[
            "Integrated Computer Vision face-matching algorithms to handle biometric authentication and emotional telemetry capture during user sign-in.",
            "Designed backend decision-making logic using Flask and structured MySQL databases to translate complex schedule densities into targeted health summaries.",
            "Developed dual modal ingestion modules allowing seamless text typing and processing of raw audio speech data for hands-free event logging."
          ]}
        />
      </div>
    </ProjectLayout>
  );
};

export default NaraCalendar;