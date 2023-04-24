import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';


const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    text: '#3a3544',
    accentProfile: '#0d1447',
    background: '#f3fafd',
    backgroundAccent: '#194E62',
    yellow: '#ffff33',
  },
  radii: {
    sm: '4px',
    lgTop: '12px 12px 0 0',
    round: '50%',
  },
  paddings: {
    normal: '0 15px 0 15px',
  },
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
