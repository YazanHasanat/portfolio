// app/page.jsx

import Navbar from './components/Navbar'; // Make sure the path is correct
import Hero from './components/Hero';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      {/* Call the Navbar component */}
      <Navbar />

      {/* Main page 
      content (Hero Section) will go here */}
      <Hero/>
      {/* Other sections for navigation */}
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}