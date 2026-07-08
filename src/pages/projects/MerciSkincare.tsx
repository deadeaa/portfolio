import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { Bot, FlaskConical, ShoppingBag } from 'lucide-react';

const MerciSkincare = () => {
  return (
    <ProjectLayout>
      <ProjectHeader 
        icon="/images/projects/merci-icon.png" // Ganti dengan path icon yang benar
        title="MERCI Skincare"
        subtitle="AI-Enhanced Skincare E-Commerce Platform"
        githubUrl="https://github.com/deadeaa/MERCI.git"
        features={[
          {
            icon: Bot,
            title: "AI Conversational Agent",
            description: "Rule-based chemical pairing assistant for safe skincare routines"
          },
          {
            icon: FlaskConical,
            title: "Chemical Ingredient Pairing",
            description: "Smart ingredient analysis to prevent harmful combinations"
          },
          {
            icon: ShoppingBag,
            title: "Full E-Commerce Cycle",
            description: "Complete transaction pipeline with cart, favorites, and delivery"
          }
        ]}
      />
      
      <ProjectOverview>
        <p>
          MERCI Skincare is an interactive mobile and web e-commerce marketplace powered by Flutter. The application 
          fuses a standard retail environment with conversational AI capabilities, allowing users to query chemical 
          ingredients, get automated product suggestions, and receive ingredient-pairing training.
        </p>
        <p>
          The application hosts a full transaction pipeline featuring user authentication, robust product favoriting, 
          shopping cart management, localized delivery calculations, and checkout/payment wrappers.
        </p>
      </ProjectOverview>

      <TechStack technologies={["Flutter", "Dart", "Flask", "AI Conversational Agent", "RESTful API", "E-Commerce Architecture"]} />

      <TechnicalHighlights 
        highlights={[
          "Architected an embedded AI Conversational Agent trained on targeted rule-based chemical schemas to prevent harmful skin routine pairings (e.g., Vitamin C + Tretinoin).",
          "Engineered modular backend API endpoints with Flask to support high-concurrency media uploads and structured database queries during live searches.",
          "Deployed a complete e-commerce lifecycle system including modular user shopping cart logic, delivery tracking systems, and favorite repositories."
        ]}
      />
    </ProjectLayout>
  );
};

export default MerciSkincare;