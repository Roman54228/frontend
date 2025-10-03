import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { HomePage } from './pages/HomePage';
import { MockInterview } from './pages/MockInterview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mock-interview" element={<MockInterview />} />
      </Routes>
    </Router>
  );
}

export default App;