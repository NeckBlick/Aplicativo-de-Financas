import React from 'react';
import { FiArrowUpCircle } from 'react-icons/fi'


export default function CurrentData({entrada, saida,total}) {
  return(
    <div className='lg:w-3/4 h-auto w-full items-center justify-center m-auto lg:items-center lg:justify-center lg:-mt-20 rounded-lg flex flex-col lg:flex-row md:flex-row sm:mt-10 sm:flex-col sm:h-auto sm:w-full sm:items-center gap-6 '>
        <div className='flex flex-col items-center justify-center h-44 w-4/5 lg:w-1/3 lg:h-40 bg-white shadow-md rounded gap-y-8'>
            <div className='flex justify-around items-center w-full px-2'>
                <h1 className='text-4xl font-bold'>Entrada</h1>
                <FiArrowUpCircle size={40}/>
            </div>
                <p className='text-black text-5xl font-bold w-full text-center'>R${entrada.toFixed(2)}</p>
        </div>
        <div className='flex flex-col items-center justify-center h-44 w-4/5 lg:w-1/3 lg:h-40 bg-white shadow-md gap-y-8'>
        <div className='flex justify-around items-center w-full px-2'>
                <h1 className='text-4xl font-bold'>Saida</h1>
                <FiArrowUpCircle size={40}/>
            </div>
                <p className='text-black text-5xl font-bold w-full text-center'>R${saida.toFixed(2)}</p>
        </div>
        <div className='flex flex-col items-center justify-center h-44 w-4/5 lg:w-1/3 lg:h-40 bg-white shadow-md gap-y-8'>
        <div className='flex justify-around items-center w-full px-2'>
                <h1 className='text-4xl font-bold'>Total</h1>
                <FiArrowUpCircle size={40}/>
            </div>
                <p className={total < 0 ? 'text-red-500 text-5xl font-bold w-full text-center': 'text-green-700 text-5xl font-bold w-full text-center'}>R${total.toFixed(2)}</p>
        </div>
    </div>
  )
}
