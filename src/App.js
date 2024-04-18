
import './App.css';
import Collaborate from './components/Home/Collaborate/Collaborate';
import Announcement from './components/Home/Announcement/Announcement';
import Events from './components/Home/Events/Events';
import Vision from './components/Home/Vision/Vision';
import Counter from './components/Home/Counter/Counter';
import RecentEvents from './components/Home/Events/RecentEvents';

function App() {
  return (
   <> 
    <Announcement />
    <Vision />
    <Events />
    <RecentEvents />
    <Collaborate />
    <Counter />
   </>
  );
}

export default App;
