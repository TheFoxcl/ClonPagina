import './App.css';
import {Testimonio} from "./componentes/Testimonios.jsx";

function App() {
  return (
    <div className="App">
      <div className="contenedor">
        <h1>Esto es lo que desean los perssonajes de Twisted Metal:</h1>
        <Testimonio
        nombre="Sweet Thoot"
        lugar="Hospital"
        imagen="sweetthoot"
        deseo="Matar a la que se le escapo"
        testimonio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste accusantium ea animi, adipisci cupiditate nihil error numquam vitae dolore dolor, fuga architecto quam eveniet perspiciatis repellat, non a molestiae."
        />
         <Testimonio
        nombre="DollFace"
        lugar="Camerino"
        imagen="dollface"
        deseo="Ser la mas famosa"
        testimonio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste accusantium ea animi, adipisci cupiditate nihil error numquam vitae dolore dolor, fuga architecto quam eveniet perspiciatis repellat, non a molestiae."
        />
        <Testimonio
        nombre="Mr Grimm"
        lugar="Carretera"
        imagen="mrgrimm"
        deseo="Salvar a su padre"
        testimonio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste accusantium ea animi, adipisci cupiditate nihil error numquam vitae dolore dolor, fuga architecto quam eveniet perspiciatis repellat, non a molestiae."
        />
      </div>
    </div>
  );
}

export default App;
