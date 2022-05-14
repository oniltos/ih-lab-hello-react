import './App.css';
import ironhackLogo from './images/ironhack-logo-xs.png'
import menuIcon from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'



function App() {
  return (
    <div className="App">
      <div className="App-hero">
        <nav>
          <img src={ironhackLogo} alt="logo" className='logo' />
          <img src={menuIcon} alt="menu icon" />
        </nav>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button>Awesome!</button>
      </div>
      <div className="App-features">
        <div>
          <img src={icon1} alt="icon1" className='icon' />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div> 
        <div>
          <img src={icon2} alt="icon2" className='icon' />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>  
        <div>
          <img src={icon3} alt="icon3" className='icon' />  
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's</p>
        </div>  
        <div>
          <img src={icon4} alt="icon4" className='icon' />
          <h2>JSX</h2>
          <p>Statically-typed designed to run on mondern browsers</p>
        </div>   
      </div>
    </div>
  );
}

export default App;
