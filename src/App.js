
import './App.css';
import Collaborate from './components/Home/Collaborate/Collaborate';
import Announcement from './components/Home/Announcement/Announcement';
import Events from './components/Home/Events/Events';
import Vision from './components/Home/Vision/Vision';

function App() {
  return (
   <> 
    <Announcement />
    <Vision />
    <Events />
    <Collaborate />
   </>
  );
}

export default App;
