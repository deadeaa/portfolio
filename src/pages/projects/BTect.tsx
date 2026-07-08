import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { Bone, Flame, Workflow } from 'lucide-react';

const BTect = () => {
  return (
    <ProjectLayout>
      <ProjectHeader 
        icon="/images/projects/btect-icon.png" // Ganti dengan path icon yang benar
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

      <TechStack technologies={["Python", "Computer Vision", "Object Detection", "Image Segmentation", "Structured Logic"]} />

      <TechnicalHighlights 
        highlights={[
          "Developed automated Computer Vision models to detect and predict root causes of bone fractures across X-ray images (Dislocation, Ballistic, or Normal trauma).",
          "Implemented object detection pipelines with bounding boxes to classify and visualize distinct skin burn trauma states ranging from Degree 1 to Degree 4.",
          "Optimized backend data pipelines to handle raw medical image uploads, outputting structural diagnostic bounds with low execution latency."
        ]}
      />
    </ProjectLayout>
  );
};

export default BTect;