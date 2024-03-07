
import Hero from './Hero/hero';
import Update from './Announcements/update';
import Blog from './Blogs/Blog';
import Newsletter from './Newsletter/Newsletter';
import Research from './Research/research';
import Collaborate from './Collaborate/collaborate';
import '@fontsource-variable/faustina';
import '@fontsource/roboto-condensed';
import '@fontsource-variable/inter';
import '@fontsource-variable/roboto-slab';

function Home() {
    return (
      <>
        <Hero/>
        <Update />
        <Research />
        <Blog/>
        <Newsletter/>
        <Collaborate />
       
      </>
        
    );
  }
  
  export default Home;
  