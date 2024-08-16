import React, { useEffect, useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import Categorias from '../../models/Categorias';
import { buscar } from '../../services/Service';
import CardCategoria from '../cardCategoria/CardCategoria';

function ListaCategorias() {
  const [categorias, setCategoria] = useState<Categorias[]>([]);
  const navigate = useNavigate();

  async function buscarTemas() {
    try {
      await buscar('/categorias', setCategoria, {});
    } catch (error: any) {
      console.error('Erro ao buscar categorias:', error);
    }
  }

  useEffect(() => {
    buscarTemas();
  }, []);

  return (
    <>
      {categorias.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <MagnifyingGlass
            visible={true}
            height="200"
            width="200"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper mx-auto"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      ) : (
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categorias.map((categoria) => (
                <CardCategoria key={categoria.id} categoria={categoria} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListaCategorias;
