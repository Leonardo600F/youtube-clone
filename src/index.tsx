import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CategoryProvider } from './context/searchCategories';
import { SearchProvider } from './context/searchContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <CategoryProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </CategoryProvider>
  </React.StrictMode>
); 
