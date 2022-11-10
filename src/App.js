import "./App.scss";
import Home from "./page/Home/Home";
import Header from "./components/Header/Header";
import Upload from "./page/Upload/Upload";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
