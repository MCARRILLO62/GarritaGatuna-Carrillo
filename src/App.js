import NavBar from "./components/NavBar/NavBar";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <body>
          <ItemListContainer />
        </body>
      </div>
    </>
  );
}
export default App;
