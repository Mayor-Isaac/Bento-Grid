import "./App.css";
import Grid from "./Components/Grid";
import Grid2 from "./Components/Grid-2";
import Grid3 from "./Components/Grid-3";
import Grid4 from "./Components/Grid-4";
import Grid5 from "./Components/Grid-5";
import Grid6 from "./Components/Grid-6";
import Grid7 from "./Components/Grid-7";
import Grid8 from "./Components/Grid-8";
export default function App() {
  return (
    <div className="App">
      <Grid imgUrl="images/illustration-create-post.webp"
        ImgAlt="Create Post Illustration" w="250" h="100" ps={2} bg="#fed7a6" row="1/3"> Create and schedule content <span style={{color:"hsl(256, 67%, 59%)", fontStyle: "italic"}}>quicker.</span></Grid>
      <Grid2 />
      <Grid3 />
      <Grid4 />
      <Grid5 />
      <Grid6 />
      <Grid7 />
      <Grid8 />
    </div>
  );
}
