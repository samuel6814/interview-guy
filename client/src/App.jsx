import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- Imports ---
import App from './App';
import HomeLayout from './pages/home/HomeLayout';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <GlobalStyles/>
      <Routes>
        {/* App acts as the global layout wrapper */}
        <Route path="/" element={<App />}>
          
          {/* The 'index' route renders exactly at the parent's path ("/") */}
          {/* This injects HomeLayout directly into the <Outlet /> in App.jsx */}
          <Route index element={<HomeLayout />} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);