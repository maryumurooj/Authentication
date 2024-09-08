import React, { useState } from 'react';
import styles from './Signup.module.css';
import authService from '../services/authServices';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }
    try {
      const response = await authService.signup({ email, password });
      console.log('Signup successful:', response);
      // Redirect or show success message
    } catch (err) {
      console.error('Signup failed:', err.response ? err.response.data : err.message);
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className={styles.body}>
        <svg className={styles.blob} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#8A3FFC" d="M34.3,-60.4C44.9,-53.4,54,-44.9,61.5,-34.6C68.9,-24.3,74.6,-12.2,76.3,1C77.9,14.1,75.5,28.1,68.3,38.9C61.1,49.6,49.2,57,37,60.7C24.8,64.4,12.4,64.3,-1.4,66.8C-15.3,69.3,-30.5,74.2,-42.5,70.4C-54.4,66.6,-63.1,54,-69.3,40.8C-75.5,27.6,-79.2,13.8,-75.2,2.3C-71.2,-9.1,-59.4,-18.3,-51.5,-28.7C-43.7,-39.2,-39.9,-50.9,-32,-59.4C-24.1,-68,-12,-73.3,-0.1,-73.2C11.9,-73.1,23.8,-67.5,34.3,-60.4Z" transform="translate(100 100)" />
</svg>
<svg className={styles.blob1} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F1C21B" d="M42,-73.4C54.6,-65.5,64.9,-54.5,70.3,-41.7C75.7,-29,76.3,-14.5,76.5,0.1C76.7,14.7,76.6,29.5,70.7,41.4C64.8,53.3,53.1,62.5,40.3,71.6C27.6,80.7,13.8,89.6,-0.9,91.3C-15.7,92.9,-31.3,87.2,-43.4,77.7C-55.5,68.2,-64,55,-72.3,41.4C-80.6,27.9,-88.7,13.9,-87.5,0.7C-86.3,-12.6,-75.8,-25.1,-66.6,-37.2C-57.5,-49.3,-49.6,-60.8,-38.7,-69.6C-27.9,-78.5,-13.9,-84.6,0.4,-85.3C14.7,-86,29.5,-81.3,42,-73.4Z" transform="translate(100 100)" />
</svg>

<svg className={styles.blob2} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FA4D56" d="M42.6,-73.5C52,-68.4,54.1,-50.4,60.6,-36C67.2,-21.6,78.2,-10.8,76.4,-1C74.6,8.7,60,17.5,50.4,26.6C40.8,35.7,36.2,45.2,28.6,50.7C21.1,56.1,10.5,57.5,0.3,57C-9.9,56.5,-19.8,54,-28.8,49.3C-37.7,44.7,-45.6,37.8,-52.5,29.2C-59.4,20.6,-65.2,10.3,-67,-1.1C-68.8,-12.4,-66.7,-24.8,-59.7,-33.2C-52.6,-41.5,-40.7,-45.7,-30,-50C-19.2,-54.3,-9.6,-58.7,3.5,-64.8C16.6,-70.9,33.3,-78.7,42.6,-73.5Z" transform="translate(100 100)" />
</svg>

<svg className={styles.blob2} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#8A3FFC" d="M34.3,-60.4C44.9,-53.4,54,-44.9,61.5,-34.6C68.9,-24.3,74.6,-12.2,76.3,1C77.9,14.1,75.5,28.1,68.3,38.9C61.1,49.6,49.2,57,37,60.7C24.8,64.4,12.4,64.3,-1.4,66.8C-15.3,69.3,-30.5,74.2,-42.5,70.4C-54.4,66.6,-63.1,54,-69.3,40.8C-75.5,27.6,-79.2,13.8,-75.2,2.3C-71.2,-9.1,-59.4,-18.3,-51.5,-28.7C-43.7,-39.2,-39.9,-50.9,-32,-59.4C-24.1,-68,-12,-73.3,-0.1,-73.2C11.9,-73.1,23.8,-67.5,34.3,-60.4Z" transform="translate(100 100)" />
</svg>
<svg className={styles.blob1} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F1C21B" d="M42,-73.4C54.6,-65.5,64.9,-54.5,70.3,-41.7C75.7,-29,76.3,-14.5,76.5,0.1C76.7,14.7,76.6,29.5,70.7,41.4C64.8,53.3,53.1,62.5,40.3,71.6C27.6,80.7,13.8,89.6,-0.9,91.3C-15.7,92.9,-31.3,87.2,-43.4,77.7C-55.5,68.2,-64,55,-72.3,41.4C-80.6,27.9,-88.7,13.9,-87.5,0.7C-86.3,-12.6,-75.8,-25.1,-66.6,-37.2C-57.5,-49.3,-49.6,-60.8,-38.7,-69.6C-27.9,-78.5,-13.9,-84.6,0.4,-85.3C14.7,-86,29.5,-81.3,42,-73.4Z" transform="translate(100 100)" />
</svg>

<svg className={styles.blob} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FA4d56" d="M42.6,-73.5C52,-68.4,54.1,-50.4,60.6,-36C67.2,-21.6,78.2,-10.8,76.4,-1C74.6,8.7,60,17.5,50.4,26.6C40.8,35.7,36.2,45.2,28.6,50.7C21.1,56.1,10.5,57.5,0.3,57C-9.9,56.5,-19.8,54,-28.8,49.3C-37.7,44.7,-45.6,37.8,-52.5,29.2C-59.4,20.6,-65.2,10.3,-67,-1.1C-68.8,-12.4,-66.7,-24.8,-59.7,-33.2C-52.6,-41.5,-40.7,-45.7,-30,-50C-19.2,-54.3,-9.6,-58.7,3.5,-64.8C16.6,-70.9,33.3,-78.7,42.6,-73.5Z" transform="translate(100 100)" />
</svg>


<svg className={styles.blob2} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#8A3FFC" d="M34.3,-60.4C44.9,-53.4,54,-44.9,61.5,-34.6C68.9,-24.3,74.6,-12.2,76.3,1C77.9,14.1,75.5,28.1,68.3,38.9C61.1,49.6,49.2,57,37,60.7C24.8,64.4,12.4,64.3,-1.4,66.8C-15.3,69.3,-30.5,74.2,-42.5,70.4C-54.4,66.6,-63.1,54,-69.3,40.8C-75.5,27.6,-79.2,13.8,-75.2,2.3C-71.2,-9.1,-59.4,-18.3,-51.5,-28.7C-43.7,-39.2,-39.9,-50.9,-32,-59.4C-24.1,-68,-12,-73.3,-0.1,-73.2C11.9,-73.1,23.8,-67.5,34.3,-60.4Z" transform="translate(100 100)" />
</svg>
<svg className={styles.blob} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F1C21B" d="M42,-73.4C54.6,-65.5,64.9,-54.5,70.3,-41.7C75.7,-29,76.3,-14.5,76.5,0.1C76.7,14.7,76.6,29.5,70.7,41.4C64.8,53.3,53.1,62.5,40.3,71.6C27.6,80.7,13.8,89.6,-0.9,91.3C-15.7,92.9,-31.3,87.2,-43.4,77.7C-55.5,68.2,-64,55,-72.3,41.4C-80.6,27.9,-88.7,13.9,-87.5,0.7C-86.3,-12.6,-75.8,-25.1,-66.6,-37.2C-57.5,-49.3,-49.6,-60.8,-38.7,-69.6C-27.9,-78.5,-13.9,-84.6,0.4,-85.3C14.7,-86,29.5,-81.3,42,-73.4Z" transform="translate(100 100)" />
</svg>

<svg className={styles.blob1} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FA4d56" d="M42.6,-73.5C52,-68.4,54.1,-50.4,60.6,-36C67.2,-21.6,78.2,-10.8,76.4,-1C74.6,8.7,60,17.5,50.4,26.6C40.8,35.7,36.2,45.2,28.6,50.7C21.1,56.1,10.5,57.5,0.3,57C-9.9,56.5,-19.8,54,-28.8,49.3C-37.7,44.7,-45.6,37.8,-52.5,29.2C-59.4,20.6,-65.2,10.3,-67,-1.1C-68.8,-12.4,-66.7,-24.8,-59.7,-33.2C-52.6,-41.5,-40.7,-45.7,-30,-50C-19.2,-54.3,-9.6,-58.7,3.5,-64.8C16.6,-70.9,33.3,-78.7,42.6,-73.5Z" transform="translate(100 100)" />
</svg>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Sign Up</h2>
          <form className={styles.form} onSubmit={handleSignup}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className={styles.input}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={styles.input}
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>Sign Up</button>
          </form>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Signup;
