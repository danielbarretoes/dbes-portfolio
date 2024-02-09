import "./index.css";
import Hero from "./layout/Hero";
import Tech from "./layout/Tech";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen h-auto">
      <Hero />
      <Tech />
    </div>
  );
};

export default App;
