import Details from "./Components/Details";
import AddMoivies from "./Components/AddMovies";
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addmovie" element={<AddMoivies />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
