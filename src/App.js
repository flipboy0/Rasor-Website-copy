import logo from './logo.svg';
import './App.css';
import Footer from './components/Home_page/Footer/Footer';
import Hero from './components/Home_page/Hero/hero';
import Update from './components/Home_page/Announcements/update';
import Blog from './components/Home_page/Blogs/Blog'
//home is the blog component//
import Newsletter from './components/Home_page/Newsletter/Newsletter'
import Teams from './components/Home_page/Teams/Teams'
import Research from './components/Home_page/Research/research'
import Collaborate from './components/Home_page/Collaborate/collaborate'

import '@fontsource-variable/faustina';
import '@fontsource/roboto-condensed';
import '@fontsource-variable/inter';
import '@fontsource-variable/roboto-slab';


function App() {
  return (
    <>
    <Hero/>
    <Update />
    <Research />
    <Blog/>
    <Teams/>
    <Newsletter/>
    <Collaborate />
    <Footer/>
    </>
   
  );
}

export default App;
