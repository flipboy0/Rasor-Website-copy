import logo from './logo.svg';
import './App.css';
import Footer from './components/Home_page/Footer/Footer';
import Hero from './components/Home_page/Hero/hero';
import Update from './components/Home_page/Announcements/section/update';
import Home from './components/Home_page/Blogs/views/home'
//home is the blog component//
import Newsletter from './components/Home_page/Newsletter/App'
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
    <router>
      <hr className='w-24 bg-yellow-500'></hr>
      <Update />
    </router>
    <Research />
    <Home/>
    <Newsletter/>
    <Collaborate />
    <Footer/>
    </>
   
  );
}

export default App;
