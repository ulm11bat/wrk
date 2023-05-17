import { Navbar, Home } from "./pages";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";


function App() {
  return (
    <div className="Container">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route index element={<Home />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
