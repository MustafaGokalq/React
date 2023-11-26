
import 'bulma/css/bulma.css';
import './App.css'
import Course from './Course';
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Csharp from './images/ccsharp.png';
import Web from './images/kompleweb.jpg';


function App() {


  return (
  
      <div className='App'>
      <section className="hero is-info">
      <div className="hero-body">
        <p className="title">
          Kurslarım
        </p>
      </div>
    </section>
        <div className="container">
          <div className="section">
          <div className="columns">
            <div className="column">
                <Course
              image={Angular}
              title="angular"
              description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam in neque nemo commodi inventore, ab quidem autem deleniti officia."
              />
            </div>

            <div className="column">
            <Course
              image={Bootstrap}
              title="vue"
              description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam in neque nemo commodi inventore, ab quidem autem deleniti officia."
            />
            </div>

            <div className="column">
              <Course
              image={Csharp}
              title="react"
              description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam in neque nemo commodi inventore, ab quidem autem deleniti officia."
            />
            </div>
            
            <div className="column">
                <Course
              image={Web}
              title="javascript"
              description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam in neque nemo commodi inventore, ab quidem autem deleniti officia."
               />
            </div>
          </div>
        </div>      
      </div>
      </div>
  );
}

export default App;
