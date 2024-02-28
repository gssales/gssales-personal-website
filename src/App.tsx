import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

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
