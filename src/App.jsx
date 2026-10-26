import { Header } from "./components/Header/Headerr";
import "./App.css";
import { Profil } from "./components/Content/Profil";
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";
function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Profil />
      <Footer />
    </div>
  );
}
export default App;
