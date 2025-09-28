import { Link as ScrollLink } from 'react-scroll';
import './App.css';
import IndexPageComponentA from './IndexPageComponentA';
import ComponentAfooter from './componentAfooter';
import ComponentAboutUser from './componentAboutUser';
import ComponentExperience from './componentExperience';
import ComponentProjects from './componentProjects';
import ComponentExperienceJAVA from './componentExperienceJAVA'
import ComponentExperienceSAP from './componentExperienceSAP'
import ComponentExperienceApigee from './componentExperienceApigee'
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import ChangeThemeComponent from './changeTheme';
import ShaderBackgroundImage from './ShadebackroundImage';




function App() {
    const { theme, toggleTheme, setLightTheme, setDarkTheme } = useContext(ThemeContext);

    return (
        <>
            <div className={`root ${theme}`}>
                <div className="divideComponents">
                    <ChangeThemeComponent
                        theme={theme}
                        toggleTheme={toggleTheme}
                        setLightTheme={setLightTheme}
                        setDarkTheme={setDarkTheme}
                    />
                    <div className="componentA">
                        <IndexPageComponentA />
                        <nav>
                            <ul className="custom-list">
                                <ScrollLink to="about" smooth={true} duration={500} activeclassname="active">
                                    <li>About</li>
                                </ScrollLink>
                                <ScrollLink to="experience" smooth={true} duration={500} activeclassname="active">
                                    <li>Experience</li>
                                </ScrollLink>
                                <ScrollLink to="projects" smooth={true} duration={500} activeclassname="active">
                                    <li>Projects</li>
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
                    </div>
                </div>
            </div>
            <ScrollToTopButton />

        </>
    );
}

export default App;
