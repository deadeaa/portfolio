import { useParams, Link } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useThemeColors } from '../hooks/useThemeColors';
import { ArrowLeft } from 'lucide-react';

// Import sertifikat images
import softwareEngineerCert from '../assets/certificate/software_engineer_intern.png';
import problemSolvingCert from '../assets/certificate/problem_solving_intermediate.png';
import pythonBasicCert from '../assets/certificate/python_basic.png';

const certificates = {
  'software-engineer-intern': {
    id: 'software-engineer-intern',
    title: 'Software Engineer Intern Role Certification',
    issuer: 'HackerRank',
    year: '2026',
    image: softwareEngineerCert,
    color: '#00B4D8'
  },
  'problem-solving': {
    id: 'problem-solving',
    title: 'Problem Solving (Intermediate) Certificate',
    issuer: 'HackerRank',
    year: '2026',
    image: problemSolvingCert,
    color: '#2EC4B6'
  },
  'python-basic': {
    id: 'python-basic',
    title: 'Python (Basic) Certificate',
    issuer: 'HackerRank',
    year: '2026',
    image: pythonBasicCert,
    color: '#FF6B6B'
  }
};

const CertificateDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const cert = id ? certificates[id as keyof typeof certificates] : null;

  if (!cert) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        backgroundColor: isDarkMode ? themeColors.colors.dark[950] : themeColors.colors.pink[50]
      }}>
        <div className="text-center">
          <p className="text-xl" style={{ color: themeColors.text.primary }}>Certificate not found</p>
          <Link to="/#certifications" className="mt-4 inline-block px-6 py-3 rounded-lg text-white" style={{ backgroundColor: themeColors.colors.pink[500] }}>
            Back to Certifications
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4" style={{
      backgroundColor: isDarkMode ? themeColors.colors.dark[950] : themeColors.colors.pink[50]
    }}>
      <div className="container mx-auto max-w-5xl">
        {/* Back Button */}
        <Link
          to="/#certifications"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:scale-105 mb-6"
          style={{
            backgroundColor: themeColors.card.background,
            color: themeColors.text.primary,
            border: `1px solid ${themeColors.card.border}`
          }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Certifications
        </Link>

        {/* Certificate Card */}
        <div className="rounded-2xl shadow-2xl overflow-hidden" style={{
          backgroundColor: themeColors.card.background,
          border: `1px solid ${themeColors.card.border}`
        }}>
          {/* Header */}
          <div className="p-6 border-b" style={{ borderColor: themeColors.card.border }}>
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${cert.color}20` }}
              >
                <span className="text-2xl">📜</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold" style={{ color: themeColors.text.primary }}>
                  {cert.title}
                </h1>
                <p className="text-sm" style={{ color: themeColors.text.secondary }}>
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </div>
          </div>

          {/* Certificate Image */}
          <div className="p-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t" style={{ borderColor: themeColors.card.border }}>
            <div className="flex justify-between items-center">
              <p className="text-sm" style={{ color: themeColors.text.secondary }}>
                Verified Certificate · {cert.issuer}
              </p>
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: `${cert.color}20`,
                  color: cert.color
                }}
              >
                ✅ Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDetail;