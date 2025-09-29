import React from "react";
import data from './data/en.json';
import portfolioScreenshot from '../src/assets/sentiments.png';
import sourceLogo from '../src/assets/icons8-github-link.png';


class ComponentSentimentAnalyis extends React.Component {

    constructor(props) {
        super(props);
        this.text = data;
      }

      
    // Function to open an external window
    openWindowToExternalDomain = (url) => {
        url && window.open(url, url)
    }

    render() {
        return (
            <div className="SentimentsAppSection" style={{
                fontFamily: 'Arial Narrow, Arial, sans-serif',
                color: '#000',
                background: '#0c1a2263',
                borderRadius: 10,
                margin: '2rem 2rem 2rem 0',
                padding: '2rem 1.5rem',
                boxShadow: '2px 0 8px 0 rgba(0,0,0,0.03)',
                maxWidth: 900,
                width: '100%'
            }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.2rem', margin: 0, color: '#d6dde4ff' }}>Sentiment Analysis Project</h3>
                <p style={{ margin: '0.5rem 0', color: '#d6dde4ff' }}>{this.text.SentimentsProject}</p>
                <p style={{ margin: '0.5rem 0', color: '#d6dde4ff' }}>{this.text.SentimentsProject2}</p>
                <p style={{ margin: '0.5rem 0', color: '#d6dde4ff' }}>{this.text.SentimentsProject3}</p>
                <div style={{ margin: '0.5rem 0 1rem 0' }}>
                    <a href="https://github.com/nhngcobo/SentimentsReact.git" target="_blank" rel="noopener noreferrer" style={{ color: '#d6dde4ff', fontWeight: 'bold', textDecoration: 'underline', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        <img src={sourceLogo} alt="Github" style={{ height: '1.3rem', verticalAlign: 'middle' }} />
                        https://github.com/nhngcobo/SentimentsReact.git
                    </a>
                </div>
                <img src={portfolioScreenshot} alt="Sentiment Analysis Screenshot" style={{ width: '100%', maxWidth: 320, borderRadius: 8, marginTop: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
            </div>
        )
    }
}

export default ComponentSentimentAnalyis;