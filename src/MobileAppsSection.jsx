import React from "react";
import teamMatchingScreenshot from "./assets/04-team-matching-results.png";

const MobileAppsSection = () => {
  return (
    <div className="MobileAppsSection" style={{ marginTop: '2rem' }}>
      <h2>Mobile Apps</h2>
      <div style={{ marginBottom: '1.5rem', background: '#eaf4fb', borderRadius: '8px', padding: '1rem' }}>
        <h3 style={{ margin: 0 }}>TalentSync</h3>
        <p style={{ margin: '0.5rem 0' }}>
          <b>Summary:</b> TalentSync is a modern, AI-powered talent matching application for project managers and HR professionals. Built with React Native (Expo) and .NET Core, it leverages Azure OpenAI for intelligent employee-project matching based on skills, technologies, availability, and project requirements. The app features advanced search, real-time availability tracking, a professional dark theme, and a mobile-first, responsive design for iOS, Android, and web.
        </p>
        <ul style={{ margin: '0.5rem 0 1rem 1.2rem', color: '#22201f', fontSize: '1rem' }}>
          <li>AI-powered matching with Azure OpenAI and smart scoring</li>
          <li>Advanced search and dynamic filtering by skills, tech, and availability</li>
          <li>Real-time employee availability and project status tracking</li>
          <li>Modern, responsive UI with dark theme and professional design</li>
          <li>Cross-platform: React Native (Expo) for iOS, Android, and web</li>
        </ul>
        <p style={{ fontStyle: 'italic', color: '#555' }}>Platforms: Android, iOS, Web</p>
  <img src={teamMatchingScreenshot} alt="TalentSync App Screenshot" style={{ width: '100%', maxWidth: 320, borderRadius: 8, marginTop: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
      </div>
    </div>
  );
};

export default MobileAppsSection;
