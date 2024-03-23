import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { LoggedProvider } from './Components/Login-SignUp/LoggedContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoggedProvider>
        <GoogleOAuthProvider clientId="810152862388-0eomepn0d2hkm5j2bau5vasn9br3j0c6.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
    </LoggedProvider>
  </React.StrictMode>
);
reportWebVitals();
