import "./App.css";
import Deshboard from "./Layouts/Deshboard";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Navi from "./Layouts/Navi/Navi";
import Footer from "./Layouts/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="fluid">
        <Deshboard />
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
