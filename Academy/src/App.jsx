import React from "react";
import PromoBanner from "./Promo";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Stats from "./components/Stats";
import Ratings from "./components/Ratings"
export default function App()
{return(<div>
<PromoBanner/>
<Navbar/>
<div className="w-full flex justify-center mt-10">
  <Hero />
</div>
  <Stats/>
  <Ratings/>
</div>
)
}




