import logo from './logo.svg';
//import './App.css';
import { MSortPage } from "./pages/MergeSortPage";
//import { Circle } from './widgets/Circle';

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
    <div style={style}>
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

const style = {
  backgroundImage: `url(${process.env.PUBLIC_URL + '/space.png'})`,
  height: "120vh",
  marginTop: "0px",
  fontSize: "50px",
  //backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  imageRendering: "pixelated",
};

export default App;
