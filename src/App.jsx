import { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll
import './App.css';
import IndexPageComponentA from './IndexPageComponentA';
import ComponentAfooter from './componentAfooter';
import ComponentAboutUser from './componentAboutUser';
import ComponentExperience from './componentExperience';
import ComponentProjects from './componentProjects';
import data from '../src/data/en.json';


function App() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const gradient = `radial-gradient(circle ${500}px at ${e.clientX}px ${e.clientY}px, #304c64, #132335)`;
            document.body.style.background = gradient;
        };

        const handleMouseLeave = () => {
            document.body.style.background = ''; // Reset background when not hovering
        };

        document.body.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.body.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="divideComponents">
            <div className="componentA">
                <IndexPageComponentA />
                <nav>
                    <ul className="custom-list">
                        <li>
                            <ScrollLink
                                to="about"
                                smooth={true}
                                duration={500}
                                activeClass="active"
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="experience"
                                smooth={true}
                                duration={500}
                                activeClass="active"
                            >
                                Experience
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="projects"
                                smooth={true}
                                duration={500}
                                activeClass="active"
                            >
                                Projects
                            </ScrollLink>
                        </li>
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
                </div>
                <div id="projects" className="component-section">
                    <ComponentProjects/>
                </div>
            </div>
        </div>
    );
}

export default App;
