
import './App.css';
import { Button, Jumbotron } from 'react-bootstrap';
import News from './component/news/News';



function App() {

  return (
    <div className="App">
      <Jumbotron>
        <h1> NewsApi</h1>
      </Jumbotron>
     <Button>Hello</Button>
      <News></News>
    </div>
  );
}

export default App;
