import { Routes , Route } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./page/home";
import Darshan from "./page/darshan";

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/darshan" element={<Darshan />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
