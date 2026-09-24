import ExerciseProvider from "@/context/ExerciseContext";
import Banner from "./components/homepage/Banner";
import ExerciseCards from "./components/homepage/ExerciseCards";



export default function Home() {
  return (
    <div>
      
      <Banner />
      <ExerciseCards />
    </div>
  );
}
