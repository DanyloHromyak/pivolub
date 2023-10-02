import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Employees from "./components/Employees";
import Schedule from "./components/Schedule";

const App = () => {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <Hero />
      <Employees />
      <Schedule />
    </div>
  )
}

export default App;