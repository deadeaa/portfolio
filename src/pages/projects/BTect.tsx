import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import ImageCarousel from '../../components/project/ImageCarousel';
import { Bone, Flame, Workflow } from 'lucide-react';
import { useThemeColors } from '../../hooks/useThemeColors';

// Import screenshots - Sesuaikan dengan path file kamu
import iconImg from '../../assets/projects/btect/icon.png';
import burnImg from '../../assets/projects/btect/burnn.png';
import detectionImg from '../../assets/projects/btect/frac.png';
import normalImg from '../../assets/projects/btect/normalbone.png';
import dashImg from '../../assets/projects/btect/dash.png';

const BTect = () => {
  const themeColors = useThemeColors();

  // Kumpulkan semua screenshot dalam array untuk carousel
  const screenshots = [
    dashImg,
    burnImg,
    detectionImg,
    normalImg,
  ].filter(Boolean);

  return (
    <ProjectLayout>
      <ProjectHeader 
        icon={iconImg}
        title="B-Tect"
        subtitle="AI Medical Imaging & Computer Vision Tracker"
        githubUrl="https://github.com/deadeaa/B-Tect.git"
        features={[
          {
            icon: Bone,
            title: "X-Ray Fracture Analysis",
            description: "Automated detection of dislocation, ballistic, or normal trauma"
          },
          {
            icon: Flame,
            title: "Burn Severity Bounding Boxes",
            description: "Classification and visualization of burns from Degree 1 to 4"
          },
          {
            icon: Workflow,
            title: "Automated Workflows",
            description: "End-to-end medical image processing with low execution latency"
          }
        ]}
      />
      
      {/* Screenshots Carousel */}
      {screenshots.length > 0 && (
        <ImageCarousel 
          images={screenshots}
          alt="B-Tect Medical Imaging Screenshots"
          title="Medical Imaging Analysis"
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
            B-Tect is an advanced artificial intelligence computer vision system tailored for medical imaging. 
            The platform parses and scans digital health photos to deliver rapid automated analysis regarding 
            skeletal fractures and burn trauma classifications, optimizing triage efficiency.
          </p>
          <p>
            The application incorporates intelligent object localization pipelines. By feeding raw images into the system, 
            it isolates affected tissue and flags severe clinical boundaries, providing helpful secondary data 
            verification for medical administrators.
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
        <TechStack technologies={["Python", "Computer Vision", "Object Detection", "Image Segmentation", "Structured Logic"]} />
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
            "Developed automated Computer Vision models to detect and predict root causes of bone fractures across X-ray images (Dislocation, Ballistic, or Normal trauma).",
            "Implemented object detection pipelines with bounding boxes to classify and visualize distinct skin burn trauma states ranging from Degree 1 to Degree 4.",
            "Optimized backend data pipelines to handle raw medical image uploads, outputting structural diagnostic bounds with low execution latency."
          ]}
        />
      </div>
    </ProjectLayout>
  );
};

export default BTect;