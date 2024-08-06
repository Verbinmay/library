import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="flex-container">
        <div className="myDiv">Im DIV</div>
        <img
          className="myImg"
          src="https://www.glossary-internet.ru/upload/medialibrary/7ab/7ab1525b231954f9fd31c01157093b20.jpg"
          alt="img"
        />
        <input className="myInput" type="text" placeholder="Im input" />
        <p className="myText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          magnam! Libero sint deserunt perspiciatis commodi? Neque a animi
          laborum quas dolorem at accusantium, omnis rerum et, fugit sequi velit
          eos!
        </p>
        <span className="mySpan">Im span</span>
      </div>
    </div>
  );
}

export default App;
