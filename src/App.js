
import './App.css';
import { Button, Jumbotron } from 'react-bootstrap';
import News from './component/news/News';
import Chart from './component/Chart/Chart';
import Chart2 from './component/Chart2/Chart2';



function App() {

  return (
    <div className="App">
      <Jumbotron>
        <h1> NewsApi</h1>
        <Button onClick={()=>window.location.reload()}>Reload</Button> {/*hard refresh */}
        <Button onClick={App}>App Realod</Button> {/*state reload refresh*/}
      </Jumbotron>
      <Chart></Chart>
      <Chart2></Chart2>
      <News></News>
    
    </div>
  );
}

export default App;
