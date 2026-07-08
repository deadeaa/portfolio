import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { Activity, Users, AlertTriangle } from 'lucide-react';

const OxyWatch = () => {
  return (
    <ProjectLayout>
      <ProjectHeader 
        icon="/images/projects/oxywatch-icon.png" // Ganti dengan path icon yang benar
        title="OxyWatch"
        subtitle="Cross-Platform Smartwatch Telehealth App"
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

      <TechStack technologies={["Flutter", "Dart", "RESTful API", "IoT Telemetry", "Data Streaming"]} />

      <TechnicalHighlights 
        highlights={[
          "Engineered a dual-user access pipeline (Parents and Doctors) to streamline biometric telemetry distribution and clinical consultation loops.",
          "Implemented a tiered alerting architecture classifying statuses into Low, Medium, and High, complete with automated fallback hospital routing maps for critical thresholds.",
          "Optimized high-frequency smartwatch data ingestion streams and crafted local caching layers to sustain app performance during network blackouts."
        ]}
      />
    </ProjectLayout>
  );
};

export default OxyWatch;