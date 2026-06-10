import './App.css';
import { DeliveryProcess } from './components/process/DeliveryProcess';
import { HowTimeline } from 'components/timeline/HowTimeline';

function App() {
  return (
    <div className="App">
      <HowTimeline />
      <DeliveryProcess />
    </div>
  );
}

export default App;
