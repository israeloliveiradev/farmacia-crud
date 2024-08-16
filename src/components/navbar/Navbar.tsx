import { Link } from "react-router-dom"

function Navbar() {

  return (
    <>
     <div className=' w-full flex justify-center bg-[#1f2937] text-white py-2 border-t-2 border-[#bbbbbb] px-10'>
          <div className="container flex justify-between text-lg">
            <Link to={'/home'}> <div className='text-2xl font-bold uppercase'>Farmacia CRUD</div></Link>
            <div className='flex gap-4'>
                
              <div className='hover:underline'>Produtos</div>

              <Link to='/categorias' className='hover:underline'>Categorias</Link>

              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar