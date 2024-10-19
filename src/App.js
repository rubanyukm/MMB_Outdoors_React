
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import { Test } from './pages/test.js';
import { Layout } from './Layout.js'
import { keepTheme } from './utils/themes';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    keepTheme();
  })

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Test id="root"/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
