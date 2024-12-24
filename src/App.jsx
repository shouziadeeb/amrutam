import { useState } from "react";

import "./App.css";
import Hero from "./components/Hero/Hero";
import AyurvedaComponent from "./components/Section1/AyurvedaComponent";
import Consultations from "./components/Section2/Consultations";
import BookConsultation from "./components/Section3/BookConsultation";
import Approach from "./components/Section4/Approach";
import Stories from "./components/Section5/Stories";
import AyurvedaExperts from "./components/Section6/AyurvedaExperts";
import AmrutamApp from "./components/Section7/AmrutamApp";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <AyurvedaComponent />
      <Consultations />
      <BookConsultation />
      <Approach />
      <Stories />
      <AyurvedaExperts />
      <AmrutamApp />
      <Footer />
    </>
  );
}

export default App;
