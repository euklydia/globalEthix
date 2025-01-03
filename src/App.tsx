import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./ui/layouts";
import { HomePage, News, Apropos, Contact } from "./ui/features";

function App() {
  return (
    <Routes>
      <Route path="./" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="./a-propos" element={<Apropos />} />
        <Route path="./contact" element={<Contact />} />
        <Route path="./news" element={<News />} />
      </Route>
    </Routes>
  );
}

export default App;
