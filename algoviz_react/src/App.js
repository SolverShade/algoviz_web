import logo from './logo.svg';
//import './App.css';
import { MSortPage } from "./pages/MergeSortPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();

  if (location.pathname === "/mergeSort") {
    return <MSortPage />;
  }

  return (
    <div>
      <ul>
        <li>
          <Link to="/mergeSort">MergeSort</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/mergeSort" element={<MSortPage />} />
      </Routes>
    </div>
  );
}

export default App;
