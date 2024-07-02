import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Tvshows from "./Pages/Tvshows";
import ComingSoon from "./Pages/ComingSoon";
import Details from "./Pages/Details";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Tvshows" element={<Tvshows />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
        <Route path="Details/:id" element={<Details />}></Route>

        <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
