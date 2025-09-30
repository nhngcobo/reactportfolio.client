import { Link as ScrollLink } from 'react-scroll';
import './App.css';
import IndexPageComponentA from './IndexPageComponentA';
import ComponentAfooter from './componentAfooter';
import ComponentAboutUser from './componentAboutUser';
import ComponentExperience from './componentExperience';
import ComponentProjects from './componentProjects';

import ComponentExperienceJAVA from './componentExperienceJAVA';
import ComponentExperienceSAP from './componentExperienceSAP';
import ComponentExperienceApigee from './componentExperienceApigee';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import ShaderBackgroundImage from './ShadebackroundImage';
import MobileAppsSection from './MobileAppsSection';




function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <ShaderBackgroundImage />
            <div className={`root ${theme}`}>
                <div className="divideComponents">
                    {/* Theme toggle removed */}
                    <div className="componentA">
                        <IndexPageComponentA />
                        <nav>
                            <ul className="custom-list">
                                <ScrollLink to="about" smooth={true} duration={500} spy={true} activeClass="active-nav">
                                    <li>About</li>
                                </ScrollLink>
                                <ScrollLink to="experience" smooth={true} duration={500} spy={true} activeClass="active-nav">
                                    <li>Experience</li>
                                </ScrollLink>
                                <ScrollLink to="projects" smooth={true} duration={500} spy={true} activeClass="active-nav">
                                    <li>Projects</li>
                                </ScrollLink>
                                <ScrollLink to="mobileapps" smooth={true} duration={500} spy={true} activeClass="active-nav">
                                    <li>Mobile Apps</li>
                                </ScrollLink>
                            </ul>
                        </nav>
                        <ComponentAfooter />
                    </div>

                    <div className="componentB">
                        <div id="about" className="component-section">
                            <ComponentAboutUser />
                        </div>
                        <div id="experience" className="component-section">
                            <ComponentExperience />
                            <ComponentExperienceJAVA />
                            <ComponentExperienceSAP />
                            <ComponentExperienceApigee />
                        </div>
                        <div id="projects" className="component-section">
                            <ComponentProjects  theme={theme}/>
                        </div>
                        <div id="mobileapps" className="component-section">
                            <MobileAppsSection />
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTopButton />
        </>
    );
}

export default App;
