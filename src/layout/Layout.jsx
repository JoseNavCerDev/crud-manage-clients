import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
   <div className='md:flex md:min-h-screen'>
     <div className='md:w-1/4 bg-blue-900 px-5 py-10'>
       <h2 className='text-4xl font-black text-white'>Management Clients</h2>

       <nav className='mt-10 '>
        <Link
          className='text-white text-2xl block mt-2 mb-5 hover:text-blue-300' 
          to='/clientes'          
        >Clientes</Link>
        <Link
          className='text-white text-2xl block mt-2 hover:text-blue-300'
          to='/clientes/nuevo'
        >Nuevo cliente</Link>
       </nav>
     </div>
     <div className='md:w-3/4'>
      2
      <Outlet/>
     </div>

   </div>
  )
}

export default Layout