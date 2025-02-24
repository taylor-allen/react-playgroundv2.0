import { tutorialsArray } from "@/app/assets/tutorials";
import { Tutorial } from "@/app/assets/types";
import TransitionCards from "@/components/transitionCards";

export default function SingleTutorial({ params }: { params: { id: string } }) {
  const { id } = params; 
  const idToInt:number = parseInt(id); 
  
  const selectedTutorial: Tutorial = tutorialsArray.filter((filterTutorial)=> filterTutorial.id == idToInt)[0];


  return (
    <div className="container justify-items-center m-8 mx-auto w-3/4">
      <TransitionCards  tutorial={selectedTutorial}/>
    </div>
  );
}
