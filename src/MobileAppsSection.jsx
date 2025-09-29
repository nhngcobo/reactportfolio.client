
import React from "react";
import teamMatchingScreenshot from "./assets/04-team-matching-results.png";
import summitHome from "./assets/home.png";
import summitAgenda from "./assets/agenda.png";
import summitSpeakers from "./assets/speakers.png";
import summitSpeakerBio from "./assets/speaker-bio.png";
import summitMindfulness from "./assets/mindfulness.png";

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
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12 }}>
          <img src={teamMatchingScreenshot} alt="TalentSync App Screenshot" style={{ width: '100%', maxWidth: 180, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
          <a href="https://github.com/nhngcobo/PAApp.git" target="_blank" rel="noopener noreferrer" style={{ color: '#213547', fontWeight: 'bold', wordBreak: 'break-all', fontSize: 14 }}>
            https://github.com/nhngcobo/PAApp.git
          </a>
        </div>
      </div>

      {/* AD-D Summit App */}
      <div style={{ marginBottom: '1.5rem', background: '#eaf4fb', borderRadius: '8px', padding: '1rem' }}>
        <h3 style={{ margin: 0 }}>AD-D Summit App</h3>
        <p style={{ margin: '0.5rem 0' }}>
          <b>Summary:</b> AD-D Summit is a cross-platform event management application for the Deloitte Africa Consulting Services Leadership Summit 2025. Built with React Native (Expo) and ASP.NET Core Web API, it provides a modern, interactive experience for attendees, speakers, and organizers. Features include a dynamic agenda, speaker engagement, mindfulness activities, attendee registration, and real-time event stats. The UI is mobile-first, Deloitte-branded, and highly responsive.
        </p>
        <ul style={{ margin: '0.5rem 0 1rem 1.2rem', color: '#22201f', fontSize: '1rem' }}>
          <li>Dynamic event agenda and breakout room schedule</li>
          <li>Speaker grid and detailed speaker bios</li>
          <li>Mindfulness activities and wellness sessions</li>
          <li>Attendee registration, authentication, and contact form</li>
          <li>Live attendee stats, event countdown, and quick actions</li>
          <li>Modern, Deloitte-branded, mobile-first UI</li>
          <li>Cross-platform: React Native (Expo) for iOS, Android, and tablets</li>
        </ul>
        <p style={{ fontStyle: 'italic', color: '#555' }}>Platforms: Android, iOS, Tablets</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 12 }}>
          <img src={summitHome} alt="AD-D Summit Home Screenshot" style={{ width: '100%', maxWidth: 120, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
          <img src={summitAgenda} alt="AD-D Summit Agenda Screenshot" style={{ width: '100%', maxWidth: 120, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
          <img src={summitSpeakers} alt="AD-D Summit Speakers Screenshot" style={{ width: '100%', maxWidth: 120, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
          <img src={summitSpeakerBio} alt="AD-D Summit Speaker Bio Screenshot" style={{ width: '100%', maxWidth: 120, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
          <img src={summitMindfulness} alt="AD-D Summit Mindfulness Screenshot" style={{ width: '100%', maxWidth: 120, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
        </div>
        <a href="https://github.com/nhngcobo/ad-d-summit.git" target="_blank" rel="noopener noreferrer" style={{ color: '#213547', fontWeight: 'bold', wordBreak: 'break-all', fontSize: 14, marginTop: 12, display: 'inline-block' }}>
          https://github.com/nhngcobo/ad-d-summit.git
        </a>
      </div>
    </div>
  );
};

export default MobileAppsSection;
