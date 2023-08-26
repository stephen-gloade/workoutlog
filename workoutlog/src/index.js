import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-eomz8g43fz0hcyd4.us.auth0.com"
    clientId="1UsTa3v0J1zqtAgU7gAsnPtt8HGvF2a0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>,
  </React.StrictMode>
);

