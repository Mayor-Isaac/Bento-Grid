import "./App.css";

import Grid from "./Components/Grid";

export default function App() {
  return (
    <div className="App">

      {/* GRID 1 */}
      <Grid imgUrl="images/illustration-create-post.webp"
        ImgAlt="Create Post Illustration" w="200" h="100" bg="#fed7a6" row="1/3"> Create and schedule content <span style={{color:"hsl(256, 67%, 59%)", fontStyle: "italic"}}>quicker.</span></Grid>

        {/* GRID 2 */}
        <Grid  imgUrl="images/illustration-five-stars.webp"
        imgAlt="Five stars Illustration"  w="200" h="30" bg="#7650dc" column="2/4" afterText="Over 4,000 5-star reviews" text="white" > Social Media <span style={{color:"#ffcb6b"}}>10x</span> 
        <h3>Faster with AI</h3></Grid>

        {/* GRID 3 */}
       <Grid imgUrl="images/illustration-schedule-posts.webp"
        ImgAlt=" Schedule Posts Illustration" w="270" h="280" ps="side" bg="#dacffc" row="1/4" column="4/-1" afterText=" Optimize post timings to publish content at the perfect time for your
        audience.">Schedule to social media.
      </Grid>

      {/* GRID 4 */}
       <Grid imgUrl="images/illustration-ai-content.webp"
        ImgAlt="AI content Illustration" w="270" h="280" bg="#ffcb6b" row="3/-1">Write your content using AI.
      </Grid>

      {/* GRID 5 */}
       <Grid imgUrl="images/illustration-multiple-platforms.webp"
        ImgAlt="Multiple platform Illustration" w="200" h="40" bg="#ffffff" row="2/4" unique="column-reverse">      
      Manage multiple accounts and platforms.
      </Grid>

      {/* GRID 6 */}
      <Grid imgUrl="images/illustration-consistent-schedule.webp"
        ImgAlt="Consistent Schedule Illustration" w="200" h="80" bg="#ffcb6b" row="2/4" end={true}>Maintain a consistent posting schedule.
      </Grid>

      {/* GRID 7 */}
       <Grid imgUrl="images/illustration-audience-growth.webp"
        ImgAlt="Audience Growth Illustration"w="150" h="40" bg= "#ffffff" afterText="faster audience growth" >  
         >56%
      </Grid>

      {/* GRID 8 */}
       <Grid  imgUrl="images/illustration-grow-followers.webp"
        imgAlt="Grow Followers Illustration"  w="400" h="170" bg="#7650dc" column="3/-1" text="white" side={true}>  
      Grow followers with non-stop content.</Grid>
    </div>
  );
}
