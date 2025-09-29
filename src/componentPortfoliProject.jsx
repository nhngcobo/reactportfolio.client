import React from "react";
import data from './data/en.json';
import portfolioScreenshotDark from '../src/assets/portfoliScreenshot.png';
import portfolioScreenshot from '../src/assets/portfolioSS.png';

import sourceLogo from '../src/assets/icons8-github-link.png';


class ComponentPortfoliProject extends React.Component {

    constructor(props) {
        super(props);
        this.text = data;
      }

    // Function to open an external window
    openWindowToExternalDomain = (url) => {
        url && window.open(url, url)
    }
      
    render() {
        const { theme } = this.props;
        const screenshot = theme === "light" ? portfolioScreenshotDark : portfolioScreenshot;
        return (
            <div className="PortfolioAppSection" style={{
                fontFamily: 'Arial Narrow, Arial, sans-serif',
                color: '#e6d7d7ff',
                background: '#0c1a2263',
                borderRadius: 10,
                margin: '2rem 0',
                padding: '2rem 1.5rem',
                boxShadow: '2px 0 8px 0 rgba(0,0,0,0.03)',
                maxWidth: 900,
                width: '100%'
            }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.2rem', margin: 0, color: '#d6dde4ff' }}>Portfolio Website</h3>
                <p style={{ margin: '0.5rem 0', color: '#d6dde4ff' }}>{this.text.PortfolioProject}</p>
                <div style={{ margin: '0.5rem 0 1rem 0' }}>
                    <a href="https://github.com/nhngcobo/reactportfolio.client.git" target="_blank" rel="noopener noreferrer" style={{ color: '#d6dde4ff', fontWeight: 'bold', textDecoration: 'underline', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        <img src={sourceLogo} alt="Github" style={{ height: '1.3rem', verticalAlign: 'middle' }} />
                        https://github.com/nhngcobo/reactportfolio.client.git
                    </a>
                </div>
                <img src={screenshot} alt="Portfolio Screenshot" style={{ width: '100%', maxWidth: 320, borderRadius: 8, marginTop: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
            </div>
        )
    }
}

export default ComponentPortfoliProject;