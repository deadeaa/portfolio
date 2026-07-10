import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import ImageCarousel from '../../components/project/ImageCarousel';
import { Eye, Cpu, Zap } from 'lucide-react';
import { useThemeColors } from '../../hooks/useThemeColors';

// Import screenshots - Sesuaikan dengan path file kamu di asset
import screenshot1 from '../../assets/projects/vr-iot/vriot.jpeg';
import screenshot2 from '../../assets/projects/vr-iot/set.jpeg';
import screenshot3 from '../../assets/projects/vr-iot/setup.jpeg';
import screenshot4 from '../../assets/projects/vr-iot/trash.jpeg';
import screenshot5 from '../../assets/projects/vr-iot/unity.jpeg';
import screenshot6 from '../../assets/projects/vr-iot/roomvr.jpeg';
import screenshot7 from '../../assets/projects/vr-iot/haltevr.jpeg';
import screenshot8 from '../../assets/projects/vr-iot/doku.jpeg';
import iconImg from '../../assets/projects/vr-iot/icon.jpeg';

const VirtualCity = () => {
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
        title="VR x IoT Smart City"
        subtitle="Real-Time XR Digital Twin Ecosystem"
        githubUrl="https://github.com/deadeaa/SmartPublicInfrastucture.git"
        features={[
          {
            icon: Eye,
            title: "Immersive VR Simulation",
            description: "Fully interactive environment built in Unity with realistic player physics and triggers"
          },
          {
            icon: Cpu,
            title: "Hardware Integration",
            description: "ESP32 microcontrollers driven by ultrasonic sensors and automated actuator loops"
          },
          {
            icon: Zap,
            title: "Real-time MQTTX Pipeline",
            description: "Sub-second bidirectional data synchronization between virtual state and physical hardware"
          }
        ]}
      />
      
      {/* Screenshots Carousel */}
      {screenshots.length > 0 && (
        <ImageCarousel 
          images={screenshots}
          alt="VR x IoT Smart City Screenshots"
          title="Project Screenshots"
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
            This project is a high-fidelity Digital Twin prototype that bridges immersive Virtual Reality (VR) environments 
            with physical hardware in real-time. Built using Unity, the user begins in a fully rendered virtual room before 
            transitioning to an outdoor smart bus stop infrastructure designed to demonstrate smart-city automation and energy efficiency.
          </p>
          <p>
            The ecosystem features a bidirectional data synchronization pipeline powered by MQTTX. When a user navigates and triggers 
            proximity boundaries inside the VR world, a physical ESP32 microcontroller processes the state changes instantly, 
            driving ultrasonic sensors and physical components to mirror the actions in the real world simultaneously.
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
        <TechStack technologies={["Unity", "C# (Unity)", "ESP32", "Arduino (C/C++)", "MQTTX Protocol", "Ultrasonic Sensors"]} />
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
            "Architected a real-time bidirectional Digital Twin workflow linking virtual environment telemetry with physical hardware microcontrollers via MQTTX.",
            "Developed energy-efficient automated dimming loops for the bus stop lighting infrastructure that scales illumination up or down based on proximity sensor data.",
            "Engineered an automated touchless waste bin mechanics block using ultrasonic sensor tracking and servo triggers to maintain hygienic physical-to-virtual operations.",
            "Programmed seamless spatial multi-scene switching and user interaction physics (walking, grabbing, dropping objects) within Unity VR framework."
          ]}
        />
      </div>
    </ProjectLayout>
  );
};

export default VirtualCity;