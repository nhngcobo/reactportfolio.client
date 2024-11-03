import { useEffect, useState } from 'react';
import './App.css';
import  IndexPageComponentA from'./IndexPageComponentA';

function App() {
    const [forecasts, setForecasts] = useState();

    useEffect(() => {
        //populateWeatherData();

        const handleMouseMove = (e) => {
            const gradient = `radial-gradient(circle ${500}px  at ${e.clientX}px ${e.clientY}px, #304c64, #132335)`;
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
        <div className='divideComponents'>
            <div className='componentA'>            
                <IndexPageComponentA/>
            </div>
            <div className='componentB'>
                <IndexPageComponentA/>
            </div>
        </div>
    );
    

    
    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setForecasts(data);
    }
    
    
}

export default App;