import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Progress from './pages/Progress';
import Setting from './pages/Setting';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Account from './pages/Account';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/account" element={<Account />} />
          <Route path="**" element={
            <div className="flex flex-col items-center justify-center min-h-screen">
              <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
              <a href="/" className="text-primary-purple hover:underline">Go to Home</a>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;