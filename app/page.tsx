import Hero from "./components/Hero";
import MostRelevant from "./components/MostRelevant";
import Navbar from "./components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
        <Hero />
      <div className="w-full m-auto px-5 lg:px-[150px] xl:px-10px max-w-screen-xl">
        <MostRelevant />
      </div>
    </div>
  )
}

export default HomePage;