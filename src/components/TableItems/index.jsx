import React, { useEffect, useState } from 'react';

function TableItems() {
    const [items, setItems] = useState([])
    useEffect(() => {
        const data = localStorage.getItem("data")
        setItems(JSON.parse(data) || [])
    },[items])
  return(
    <div className='w-3/4 m-auto my-8 overflow-auto'>
        <table className='w-full mb-20 '>
            <thead>
                <tr >
                    <th className='bg-blue-700 px-4 py-2 text-2xl rounded-tl-md'>Data</th>
                    <th className='bg-blue-700 px-4 py-2 text-2xl'>Titulo</th>
                    <th className='bg-blue-700 px-4 py-2 text-2xl'>Tipo</th>
                    <th className='bg-blue-700 px-4 py-2 text-2xl rounded-tr-md'>Valor</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => {
                    return(
                        <tr>
                            <td className='text-center font-medium px-4 py-2 text-xl'>{item.date}</td>
                            <td className='text-center px-4 py-2 text-xl'>{item.titulo}</td>
                            <td data-type={item.tipo} className='text-center font-medium px-4 py-2 text-xl data-[type=Entrada]:text-green-700 data-[type=Saida]:text-red-700'>{item.tipo}</td>
                            <td className='text-center font-medium px-4 py-2 text-xl'>R$ {item.valor}</td>
                            
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default TableItems;