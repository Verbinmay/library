import "./App.css";
import img from "./cat.jpg";
function App() {
  return (
    <div className="App">
      <section className="section1">
        <div className="mycontainer">
          <div className="wrap">
            <img className="img" src={img} alt="cat" />
            <div className="text-wrap">
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus ut vero, commodi nobis, suscipit ipsum odio vitae et
                quam ab porro minus voluptas dolorem hic qui molestiae,
                inventore quidem error.
              </p>
              <button className="btn">Click me</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
