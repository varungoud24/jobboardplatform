import { useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;