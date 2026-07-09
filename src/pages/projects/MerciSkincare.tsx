import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import ImageCarousel from '../../components/project/ImageCarousel';
import { Bot, FlaskConical, ShoppingBag } from 'lucide-react';
import { useThemeColors } from '../../hooks/useThemeColors';
import crownMerci from '../../assets/projects/merci/crown.png';

// Import screenshots
import screenshot1 from '../../assets/projects/merci/home.png';
import screenshot2 from '../../assets/projects/merci/ai.png';
import screenshot3 from '../../assets/projects/merci/all.png';
import screenshot4 from '../../assets/projects/merci/prodetail.png';
import screenshot5 from '../../assets/projects/merci/fav.png';
import screenshot6 from '../../assets/projects/merci/cart.png';
import screenshot7 from '../../assets/projects/merci/co.png';
import screenshot8 from '../../assets/projects/merci/order.png';
import screenshot9 from '../../assets/projects/merci/deliv.png';
import screenshot10 from '../../assets/projects/merci/login.png';
import screenshot11 from '../../assets/projects/merci/pair.png';
import screenshot12 from '../../assets/projects/merci/recom.png';

const MerciSkincare = () => {
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
    screenshot9,
    screenshot10,
    screenshot11,
    screenshot12
  ].filter(Boolean);

  return (
    <ProjectLayout>
      <ProjectHeader 
        icon={crownMerci}
        title="MERCI Skincare"
        subtitle="AI-Enhanced Skincare E-Commerce Platform"
        githubUrl="https://github.com/deadeaa/MerciSkincare.git"
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
      
      {/* Screenshots Carousel - Sudah lebih kecil & tanpa thumbnail */}
      {screenshots.length > 0 && (
        <ImageCarousel 
          images={screenshots}
          alt="MERCI Skincare App Screenshots"
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
            MERCI Skincare is an interactive mobile and web e-commerce marketplace powered by Flutter. The application 
            fuses a standard retail environment with conversational AI capabilities, allowing users to query chemical 
            ingredients, get automated product suggestions, and receive ingredient-pairing training.
          </p>
          <p>
            The application hosts a full transaction pipeline featuring user authentication, robust product favoriting, 
            shopping cart management, localized delivery calculations, and checkout/payment wrappers.
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
        <TechStack technologies={["Flutter", "Dart", "Flask", "AI Conversational Agent", "RESTful API", "E-Commerce Architecture"]} />
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
            "Architected an embedded AI Conversational Agent trained on targeted rule-based chemical schemas to prevent harmful skin routine pairings (e.g., Vitamin C + Tretinoin).",
            "Engineered modular backend API endpoints with Flask to support high-concurrency media uploads and structured database queries during live searches.",
            "Deployed a complete e-commerce lifecycle system including modular user shopping cart logic, delivery tracking systems, and favorite repositories."
          ]}
        />
      </div>
    </ProjectLayout>
  );
};

export default MerciSkincare;