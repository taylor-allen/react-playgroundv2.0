"use client";
import React, {useState} from 'react';
import Dropdown from "@/components/dropdown";
import { tutorialsArray } from "@/tutorials";
import { Tutorial } from '@/types';

const generateTutorialNames = (selectedCategory:string)=>{

  const filteredTutorials = tutorialsArray.filter((tutorial: Tutorial)=> tutorial.category == selectedCategory);
  const availableTutorials = selectedCategory == "All Categories" ? tutorialsArray : filteredTutorials; 
  const tutorialNames = availableTutorials.map(
    (tutorial)=>{
      return tutorial.name
  });
  return tutorialNames;
}



export default function Home() {
  const categoryArray = ["All Categories","Authentication","Security", "UI/UX"];
  const [category, setCategory]=useState("All Categories");
  return (
    <div className="container justify-items-center  ">
        <div className="welcome-container flex justify-center items-center w-8/12">
            <div className="welcome-logo-container"> 
            <img src="/react-logo-play-learn-build.png" style={{width:"100rem"}} alt="react-playground-logo"/>
            </div>
            <div className="welcome-text-container">
              <h1 className="font-bold text-2xl">Level Up Your React Skills—</h1>
              <h1 className="font-bold text-2xl">One Tutorial at a Time</h1>
              <p> We're two self-taught developers on a mission to break down the trickier parts of React—secure
                 logins, chatbots, file uploads, and more. As we learn, we share step-by-step tutorials that are clear, practical, and beginner-friendly.
                  Whether you're leveling up or just curious, join us as we tackle the stuff that used to give us anxiety—so it doesn’t have to give you any. 🚀
              </p>
            </div>
        </div>
        <div className="user-flow-container flex justify-evenly w-full ">
          <div className="choose-program"> 
            <Dropdown 
              dropdownTitle="Choose a category" 
              dropdownArray={categoryArray} 
              setCategory={setCategory}
            />

            </div>
          <div className="choose-tutorial"> 
            <Dropdown 
              dropdownTitle="Choose a tutorial" 
              dropdownArray={generateTutorialNames(category)} 
            />
            </div>
          <div className="navigate-to-tutoril">
            <button>go to tutorial</button>
          </div>
        </div>
    </div>
  );
}
