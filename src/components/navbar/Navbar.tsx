import React from 'react'


function Navbar() {
 
  

  return (
    <>
     <div className=' w-full flex justify-center bg-[#1f2937] text-white py-2 border-t-2 border-[#bbbbbb] px-10'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmacia CRUD</div>
            <div className='flex gap-4'>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Categorias</div>
              <div className='hover:underline'>Cadastrar categorias</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar