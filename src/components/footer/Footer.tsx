import "../../index.css";
import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react';

function Footer() {


  return (
    <>
    <footer>
      <div className="relative w-full z-[1000] flex justify-center bg-gray-800 text-white py-2 border-t-2 border-[#bbbbbb]">
        <div className="container text-center">
          <p className="mb-2">&copy; 2024 Todos os Direitos Reservados | Farmacia CRUD.</p>
          <div className='flex justify-center py-2 items-center'>
            <GithubLogo size={30} weight='bold' />
            <LinkedinLogo size={30} weight='bold' />
          </div>
        </div>
      </div >
      </footer>
    </>
  );
}

export default Footer;