import React, { useState, useEffect, useRef } from 'react';
import styles from './Dashboard.module.css';
import { useNavigate } from "react-router-dom";


const Dashboard = () => {

    const navigate = useNavigate();
    const [quote, setQuote] = useState('');
    const intervalRef = useRef(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
        }
      }, [navigate]);
      const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US',   
 { hour12: true });

 useEffect(() => {
    const fetchQuote = async () => {
      try {
        const api_url = "https://zenquotes.io/api/random";
        const response = await fetch(api_url);
        const data = await response.json();
        const randomQuote = data[0];
        setQuote(randomQuote.q);
        
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    // Fetch initial quote
    fetchQuote();

    // Set up interval to fetch quotes every 24 hours
    intervalRef.current = setInterval(fetchQuote, 24 * 60 * 60 * 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const [mood, setMood] = useState('neutral');

  const handleMoodChange = (newMood) => {
    setMood(newMood);
  };
    
    

  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
       <p> <h1> Welcome!</h1>
        <h1 > You have Sucessfully Logged In! </h1></p>
        <div className={styles.topRow}>
          <div className={styles.clock}>
          <h2> {formattedTime}</h2>
          </div>
          <div className={styles.weather}>
            <div className={styles.temperature}>
            What is your Fav Weather?
            </div>
            <div className={styles.details}>
             
             <input type='text'>
             </input>
             <div>I like cold Weather!</div>
            </div>
            <div className={styles.icon}>
              
              <div className={styles.sunIcon}></div>
            </div>
            <div className={styles.extraInfo}>
              
            </div>
          </div>
        </div>
        <div className={styles.bottomRow}>
          <div className={styles.forecast}>
            <h2>Quote Of The Day</h2>
          <p className="quote">{quote}</p>
          
            <ul>
              
            </ul>
          </div>
          <div className={styles.hourly}>
            <h2>How Are you Feeling?</h2>
            <ul>
            <button onClick={() => handleMoodChange('happy')}>Happy</button>
      <button onClick={() => handleMoodChange('neutral')}>Neutral</button>
      <button onClick={() => handleMoodChange('sad')}>Sad</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
