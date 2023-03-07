import React, { useRef, useState } from "react";

function GetData() {
  const dados = JSON.parse(localStorage.getItem("data"));
  const [dado, setDado] = useState(dados ? dados : []);
  const [entrada, setEntrada] = useState(false);
  const [saida, setSaida] = useState(false);
  const [erro, setErro] = useState("");
  const [status, setStatus] = useState("");
  const date = useRef();
  const titulo = useRef();
  const valor = useRef();

  function handleAdd() {
    if (
      date.current.value === "" ||
      titulo.current.value === "" ||
      valor.current.value === ""
    ) {
      setStatus("");
      setErro("Preencha todos os campos");
      return;
    }
    const data = {
      date: date.current.value,
      titulo: titulo.current.value,
      valor: Number(valor.current.value),
      tipo: handleType(),
    };
    const items = [...dado, data];
    localStorage.setItem("data", JSON.stringify(items));
    setStatus("Adicionado com sucesso");
    setErro("");
    setStatus("");
    date.current.value = "";
    titulo.current.value = "";
    valor.current.value = "";
    setEntrada(false);
    setSaida(false);
  }

  function handleType() {
    if (entrada) {
      return "Entrada";
    } else if (saida) {
      return "Saida";
    }
  }
  function ChangeRadioEntrada() {
    setEntrada(true);
    setSaida(false);
  }
  function ChangeRadioSaida() {
    setSaida(true);
    setEntrada(false);
  }

  return (
    <>
      <div className="lg:w-3/4 w-full  h-auto lg:h-36 m-auto px-8 mt-8 shadow-md flex flex-col lg:flex-row gap-6 items-center">
        <div className="flex w-full flex-col items-center justify-center gap-2 lg:w-1/2 lg:flex-row">
          <div className="flex flex-col justify-center w-full space-y-2">
            <label htmlFor="" className="text-xl">
              Data
            </label>
            <input
              type="date"
              ref={date}
              className="border-2 border-slate-200 outline-none rounded pl-2"
            />
          </div>
          <div className="flex flex-col justify-center w-full space-y-2">
            <label htmlFor="" className="text-xl">
              Titulo
            </label>
            <input
              type="text"
              ref={titulo}
              className="border-2 border-slate-200 outline-none rounded pl-2"
            />
          </div>
          <div className="flex flex-col justify-center w-full space-y-2">
            <label htmlFor="" className="text-xl">
              Valor
            </label>
            <input
              type="number"
              ref={valor}
              className="border-2 border-slate-200 outline-none rounded pl-2"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-2 lg:w-1/2">
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex gap-2 justify-start w-full">
              <input
                type="radio"
                className="border-2 border-slate-200 outline-none rounded cursor-pointer"
                onChange={ChangeRadioEntrada}
                checked={entrada}
              />
              <label htmlFor="" className="text-2xl">
                Entrada
              </label>
            </div>
            <div className="flex gap-2 justify-start w-full">
              <input
                type="radio"
                className="border-2 border-slate-200 outline-none rounded cursor-pointer"
                onChange={ChangeRadioSaida}
                checked={saida}
              />
              <label htmlFor="" className="text-2xl">
                Saida
              </label>
            </div>
          </div>
          <button
            className="bg-blue-700 text-white px-4 py-2 w-1/2 h-1/3 rounded-md font-semi text-xl"
            onClick={handleAdd}
          >
            Adicionar
          </button>
        </div>
      </div>
      {status && <p className="text-green-600 m-auto mt-4 w-48">{status}</p>}
      {erro && <p className="text-red-500 m-auto mt-4 w-48">{erro}</p>}
    </>
  );
}

export default GetData;
