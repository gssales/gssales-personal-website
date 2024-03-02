import './App.css';
import Content from '../Content/Content';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';

function App() {
  return (
    <div className="bg-dark_green min-h-screen">
      <Nav />
      <Header />
      <Content />
    </div>
  );
}

export default App;
