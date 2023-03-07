import { useEffect, useState } from "react";
import GetData from "./components/GetData";
import CurrentData from "./components/CurrentData";
import TableItems from "./components/TableItems";

function App() {

  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalEntrada, setTotalEntrada] = useState(0);
  const [totalSaida, setTotalSaida] = useState(0);

  useEffect(() => {
    const dataStorage = JSON.parse(localStorage.getItem('data'));
    if(dataStorage){
      setData(dataStorage);
    }

    const saidaValue = data.filter(item => item.tipo === 'Saida').map(item => item.valor);
    const entradaValue = data.filter(item => item.tipo === 'Entrada').map(item => item.valor);

    const entrada = entradaValue.reduce((a, b) => a + b, 0);
    const saida = saidaValue.reduce((a, b) => a + b, 0);

    setTotalEntrada(entrada);
    setTotalSaida(saida);
    setTotal(entrada - saida);
  }, [data])



  return (
    <div className="w-full h-screen">
    <header className='bg-blue-700 w-full h-1/3 flex justify-center items-center pt-10 lg:items-start'>
      <h1 className="text-5xl text-white font-bold">Controle financeiro</h1>
    </header>
    <CurrentData entrada={totalEntrada} saida={totalSaida} total={total}/>
    <GetData setData={setData} item={data}/>
    <TableItems items={data}/>
  </div>
  );
}

export default App;
