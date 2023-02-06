import { useState, useEffect, useRef } from "react";
import axios from "axios";
import NavScroll from "./components/Navbar";
import ValorDolar from "./components/MiApi";

function App() {
  const [valores, setValores] = useState([]);
  const valoresRef = useRef([]);

  useEffect(() => {
    axios.get("https://mindicador.cl/api/dolar").then((res) => {
      const data = res.data;
      valoresRef.current = res.data.serie;
      setValores(data.serie);
    });
  }, []);

  const handleSearch = (keyword) => {
    const newValores = valoresRef.current.filter(({ fecha }) => {
      const dateValor = new Date(fecha);
      const timeValor = dateValor.getTime();
      return (
        timeValor >= keyword[0].getTime() && timeValor <= keyword[1].getTime()
      );
    });

    setValores(newValores);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1647462652019-72bdb84235ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE4fHxkb2xhcnxlbnwwfHx8fDE2NjEzNjk5OTQ&ixlib=rb-1.2.1&q=80&w=2000")`
      }}
    >
      <NavScroll onSearch={handleSearch} />
      <h1 className="text-center">API Indicador Economico "Dolar"</h1>
      <hr />

  

      <div className="m-5">
        <ValorDolar valores={valores} />
      </div>
    </div>
  );
}
export default App;
