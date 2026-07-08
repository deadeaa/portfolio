import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { ScanFace, Mic, Brain } from 'lucide-react';

const NaraCalendar = () => {
  return (
    <ProjectLayout>
      <ProjectHeader 
        icon="/images/projects/nara-icon.png" // Ganti dengan path icon yang benar
        title="Nara Calendar"
        subtitle="AI-Powered Biometric & Emotion Planner"
        githubUrl="https://github.com/deadeaa/Nara-Calendar.git"
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

      <TechStack technologies={["Python", "Flask", "MySQL", "Computer Vision", "Emotion Analysis", "Voice-to-Text"]} />

      <TechnicalHighlights 
        highlights={[
          "Integrated Computer Vision face-matching algorithms to handle biometric authentication and emotional telemetry capture during user sign-in.",
          "Designed backend decision-making logic using Flask and structured MySQL databases to translate complex schedule densities into targeted health summaries.",
          "Developed dual modal ingestion modules allowing seamless text typing and processing of raw audio speech data for hands-free event logging."
        ]}
      />
    </ProjectLayout>
  );
};

export default NaraCalendar;