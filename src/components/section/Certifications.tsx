import { Link } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { Award, Code, Brain } from 'lucide-react';

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const certifications = [
    {
      id: 'software-engineer-intern',
      title: 'Software Engineer Intern Role Certification',
      issuer: 'HackerRank',
      year: '2026',
      icon: Award,
      color: '#00B4D8',
      slug: 'software-engineer-intern'
    },
    {
      id: 'problem-solving',
      title: 'Problem Solving (Intermediate) Certificate',
      issuer: 'HackerRank',
      year: '2026',
      icon: Brain,
      color: '#2EC4B6',
      slug: 'problem-solving'
    },
    {
      id: 'python-basic',
      title: 'Python (Basic) Certificate',
      issuer: 'HackerRank',
      year: '2026',
      icon: Code,
      color: '#FF6B6B',
      slug: 'python-basic'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative" style={{
      background: themeColors.background.sections?.certifications || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>
          Certifications
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <Link
                  key={cert.id}
                  to={`/certificate/${cert.slug}`}
                  className="rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer no-underline"
                  style={{
                    backgroundColor: themeColors.card.background,
                    border: `1px solid ${themeColors.card.border}`,
                    display: 'block'
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{
                      backgroundColor: `${cert.color}20`,
                      color: cert.color
                    }}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3
                    className="text-base font-semibold mb-2 leading-tight"
                    style={{ color: themeColors.text.primary }}
                  >
                    {cert.title}
                  </h3>

                  <p
                    className="text-sm"
                    style={{ color: themeColors.text.secondary }}
                  >
                    {cert.issuer} · {cert.year}
                  </p>

                  <div
                    className="mt-4 inline-block px-3 py-1 rounded-full text-xs font-medium transition-all hover:scale-105"
                    style={{
                      backgroundColor: `${cert.color}15`,
                      color: cert.color,
                      border: `1px solid ${cert.color}30`
                    }}
                  >
                    🖱️ Click to View
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Certifications;