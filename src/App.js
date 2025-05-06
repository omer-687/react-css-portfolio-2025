import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageTitleProvider } from './context/PageTitleContext';
import Header from './Layout/Header'; // Change 'layouts' to 'Layout'
import Footer from './Layout/Footer'; // Change 'layouts' to 'Layout'
import SideNav from './Layout/SideNav'; // Change 'layouts' to 'Layout'
import { Box, CircularProgress } from '@mui/material';

const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/Education'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <PageTitleProvider>
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Box sx={{ display: 'flex', flex: 1 }}>
            <SideNav />
            <Box component="main" sx={{ flex: 1, p: 2 }}>
              <Suspense fallback={<CircularProgress />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </Box>
          </Box>
          <Footer />
        </Box>
      </Router>
    </PageTitleProvider>
  );
}

export default App;