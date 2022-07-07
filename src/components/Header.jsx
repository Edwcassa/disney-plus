import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  // https://www.hartdev.site/source-code/tailwindcss-components/navigation-toggling-without-javascript/
  // https://jsfiddle.net/209hgeyw/
  const [navbar, setNavbar] = useState('bg-transparent')
  const [isOpen, setIsOpen] = useState(false)

  const changeBackground = () => {
    if (window.scrollY <= 12) {
      setNavbar('bg-transparent')
    } else {
      setNavbar('bg-[#040714]')
    }
  }
  window.addEventListener('scroll', changeBackground)

  const navigate = useNavigate()

  const goLogin = () => {
    console.log('go')
    navigate('/login', { replace: true })
  }

  const cla = `fixed top-0 left-0 ${navbar} z-50 transition duration-300 w-[100%]`
  /* <h1 className='pl-8 py-4 text-xl font-bold'>midudev</h1> */
  /* <h1 className='pl-8 py-4 text-xl font-bold'>yuridev PLUS</h1> */
  /* <i class='fa-solid fa-house-user text-white text-lg'>mama</i> */
  // my-2 sm:my-2 md:my-4 lg:my-2
  // w-5/12 sm:w-8/12 md:w-8/12 lg:w-6/12   img dr
  return (
    <nav className={cla}>
      <div className=' mx-1 flex justify-between items-center text-white my-2 sm:my-2 sm:mx-5 md:my-4 md:mx-5 lg:my-3 lg:mx-10 '>
        <div className=' flex items-center'>
          <img src='/favicon.ico' alt='' className=' block sm:hidden md:hidden lg:hidden' />
          <img src='/logo.svg' alt='' className='w-3/12 hidden sm:w-[15%] sm:block md:w-[12%] md:block lg:w-[12%] lg:block' />
          <ul className=' ml-4 flex items-center text-base font-semibold cursor-pointer sm:ml-20 md:ml-6 lg:ml-16'>
            <Link to='/' className='header-link group mr-8'><i className='icon-h fa-solid fa-house ' /><span className='span hidden sm:hidden md:block lg:block '>Home</span></Link>
            <a className='header-link group mr-8'><i className='icon-h fa-solid fa-magnifying-glass ' /><span className='span hidden sm:hidden md:block lg:block'>Search</span></a>
            <a className='header-link group mr-8'><i className='icon-h fa-solid fa-plus ' /><span className='span hidden sm:hidden md:block lg:block '>WatchList</span></a>
            <a className='header-link group mr-8'><i className='icon-h fa-solid fa-star ' /><span className='span hidden sm:hidden md:block lg:block '>Originals</span></a>
            <a className='header-link group '><i className='fa-solid fa-film ' /><span className='span hidden sm:hidden md:block lg:block'>Series</span></a>
          </ul>
        </div>
        <div className=' relative'>
          <button onMouseEnter={() => setIsOpen(!isOpen)} onClick={() => setIsOpen(!isOpen)} className=' w-12 h-12 sm:w-12 md:w-12 lg:w-24 relative z-10 block rounded-full overflow-hidden cursor-default '>
            <div className=' w-12 h-12 absolute right-0 top-0'>
              <img
                className=' h-full w-full object-cover'
                src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ECA649992C3ECF9D41FEF7629CAA0E7561824A2F5811140849FCB0C27F8A5266/scale?width=96&format=png'
                alt=''
              />
            </div>
          </button>
          <button style={{ display: isOpen ? 'block' : 'none' }} tabIndex='-1' onMouseEnter={() => setIsOpen(false)} onClick={() => setIsOpen(false)} className=' fixed inset-0 h-full w-full  cursor-default ' />
          <div style={{ display: isOpen ? 'block' : 'none' }} className=' absolute right-0 mt-0 py-2 w-48 bg-[#131313] rounded-lg shadow-xl  transition duration-100 ease-out '>
            <a href='#' className='  block px-4 py-2 text-[#cacaca] hover:bg-[#252525] hover:text-white'>Create profile</a>
            <a href='#' className='  block px-4 py-2 text-[#cacaca] hover:bg-[#252525] hover:text-white'>Edit profiles</a>
            <a href='#' className='  block px-4 py-2 text-[#cacaca] hover:bg-[#252525] hover:text-white'>Account setting</a>
            <a href='#' className='  block px-4 py-2 text-[#cacaca] hover:bg-[#252525] hover:text-white'>Help</a>
            <button onClick={() => goLogin()} className='block w-full text-left px-4 py-2 text-[#cacaca] hover:bg-[#252525] hover:text-white'> Sign out</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
