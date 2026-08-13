import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import TeamPage from './pages/TeamPage';
import GalleryPage from './pages/GalleryPage';
import ParentsPage from './pages/ParentsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/parents" element={<ParentsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}
