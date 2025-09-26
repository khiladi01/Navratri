import { Routes , Route } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./page/home";
import Darshan from "./page/darshan";
import Audio from "./page/audio";

function App() {

  return (
    <>
      <Nav />
      <Audio />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/darshan" element={<Darshan />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
