import "./App.scss";
import PageHome from "./page/Home/PageHome";
import Header from "./components/Header/Header";
import PageUpload from "./page/Upload/PageUpload";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/video/:id" element={<PageHome />} />
          <Route path="/upload" element={<PageUpload />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
