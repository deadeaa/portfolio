import React from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

interface ProjectOverviewProps {
  children: React.ReactNode;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ children }) => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  return (
    <div className="space-y-4">
      {React.Children.map(children, (child, index) => (
        <p 
          key={index} 
          className="leading-relaxed" 
          style={{ color: isDarkMode ? themeColors.colors.white : themeColors.text.secondary }}
        >
          {child}
        </p>
      ))}
    </div>
  );
};

export default ProjectOverview;