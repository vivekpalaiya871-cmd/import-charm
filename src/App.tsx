import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Contact from "@/pages/Contact";
import Departments from "@/pages/Departments";
import Doctors from "@/pages/Doctors";
import Treatments from "@/pages/Treatments";
import NotFound from "@/pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/treatments" element={<Treatments />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;