import React from "react";
import PromoBanner from "./Promo";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Stats from "./components/Stats";
import Ratings from "./components/Ratings"
import TechStack from "./components/Techstack";
import TrendingCourses from "./components/Trendingcourses";
import Logo from "./components/Logo"
import GrowSkillSection from "./components/Growskills";
export default function App()
{return(<div>
<PromoBanner/>
<Navbar/>
<div className="w-full flex justify-center mt-10">
  <Hero />
</div>
  <Stats/>
 <Ratings/>
 <TechStack/>
 <TrendingCourses/>
 <Logo/>
 <GrowSkillSection/>
</div>
)
}




