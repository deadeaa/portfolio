import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import ImageCarousel from '../../components/project/ImageCarousel';
import { Activity, Users, AlertTriangle } from 'lucide-react';
import { useThemeColors } from '../../hooks/useThemeColors';

// Import screenshots - Sesuaikan dengan path file kamu
import screenshot1 from '../../assets/projects/oxy/akun.png';
import screenshot2 from '../../assets/projects/oxy/dash.png';
import screenshot3 from '../../assets/projects/oxy/monitor.png';
import screenshot4 from '../../assets/projects/oxy/riwayat.png';
import screenshot5 from '../../assets/projects/oxy/profile.png';
import screenshot6 from '../../assets/projects/oxy/notif.png';
import screenshot7 from '../../assets/projects/oxy/drdash.png';
import screenshot8 from '../../assets/projects/oxy/chat.png';
import iconImg from '../../assets/projects/oxy/icon.png';

const OxyWatch = () => {
  const themeColors = useThemeColors();

  // Kumpulkan semua screenshot dalam array
  const screenshots = [
    screenshot1,
    screenshot2,
    screenshot3,
    screenshot4,
    screenshot5,
    screenshot6,
    screenshot7,
    screenshot8,
  ].filter(Boolean);

  return (
    <ProjectLayout>
      <ProjectHeader 
        icon={iconImg}
        title="OxyWatch"
        subtitle="Cross-Platform Smartwatch Telehealth App (Ongoing)"
        githubUrl="https://github.com/deadeaa/OxyWatch.git"
        features={[
          {
            icon: Activity,
            title: "Real-time Streaming",
            description: "Continuous heart rate and SpO2 monitoring with low-latency data transmission"
          },
          {
            icon: Users,
            title: "Multi-user Architecture",
            description: "Dual pipeline for parents and physicians with role-based access"
          },
          {
            icon: AlertTriangle,
            title: "Biometric Severity Alerting",
            description: "Tiered alert system with automated hospital routing for critical thresholds"
          }
        ]}
      />
      
      {/* Screenshots Carousel */}
      {screenshots.length > 0 && (
        <ImageCarousel 
          images={screenshots}
          alt="OxyWatch App Screenshots"
          title="App Screenshots"
        />
      )}
      
      {/* Overview Section - pakai card */}
      <div className="rounded-lg shadow-lg p-8 mb-8" style={{ 
        backgroundColor: themeColors.card.background,
        border: `1px solid ${themeColors.card.border}`
      }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: themeColors.text.primary }}>
          Overview
        </h2>
        <ProjectOverview>
          <p>
            OxyWatch is a comprehensive cross-platform telehealth ecosystem built with Flutter that seamlessly 
            integrates smartwatch hardware interfaces with digital applications. Designed initially for pediatric 
            care but scalable to adults, it monitors continuous real-time heart rate and oxygen saturation (SpO2) 
            streams to diagnose early risks of hypoxemia.
          </p>
          <p>
            The system implements a distinct multi-user pipeline architecture split between parents and physicians. 
            Parents can monitor biometric trends, receive instant severity logs, and consult medical professionals 
            directly within an interactive environment.
          </p>
        </ProjectOverview>
      </div>

      {/* Tech Stack Section - pakai card */}
      <div className="rounded-lg shadow-lg p-8 mb-8" style={{ 
        backgroundColor: themeColors.card.background,
        border: `1px solid ${themeColors.card.border}`
      }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: themeColors.text.primary }}>
          Tech Stack
        </h2>
        <TechStack technologies={["Flutter", "Dart", "RESTful API", "IoT Telemetry", "Data Streaming"]} />
      </div>

      {/* Technical Highlights Section - pakai card */}
      <div className="rounded-lg shadow-lg p-8" style={{ 
        backgroundColor: themeColors.card.background,
        border: `1px solid ${themeColors.card.border}`
      }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: themeColors.text.primary }}>
          Technical Highlights
        </h2>
        <TechnicalHighlights 
          highlights={[
            "Engineered a dual-user access pipeline (Parents and Doctors) to streamline biometric telemetry distribution and clinical consultation loops.",
            "Implemented a tiered alerting architecture classifying statuses into Low, Medium, and High, complete with automated fallback hospital routing maps for critical thresholds.",
            "Optimized high-frequency smartwatch data ingestion streams and crafted local caching layers to sustain app performance during network blackouts."
          ]}
        />
      </div>
    </ProjectLayout>
  );
};

export default OxyWatch;