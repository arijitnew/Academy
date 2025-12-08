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
import Course from "./components/Course";
import TopCourses from "./components/TopCourses";
import FAQSection from "./components/FAQsection";
import Footer from "./components/Footer";
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
 <Course/>
 <TopCourses/>
 <FAQSection/>
 <Footer/>
</div>
)
}




