
import React from 'react';
import homeLogo from '../../assets/home.png'



function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja Bem Vindo a Farmcia CRUD!</h2>

              <div className="flex justify-around gap-4">
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver Categorias</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src="https://faculdadeimes.org.br/wp-content/uploads/2023/06/36-atencao-area-de-teste.jpg" alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;
