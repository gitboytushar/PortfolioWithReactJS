import { RiCloseLargeLine, RiMenu5Line } from '@remixicon/react'
import { useState } from 'react'
import { NAVIGATION_LINKS } from '../constants/index'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault()

    const targetElement = document.querySelector(href)
    if (targetElement) {
      const offset = -20 // prev:85
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY + offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div>
      <nav className='fixed left-0 right-0 z-50 lg:top-4'>
        {/* Desktop Menu */}
        <div className='mx-auto hidden w-fit px-6 items-center justify-center rounded-full border border-white/30 py-2 backdrop-blur-lg lg:flex'>
          <div className='flex items-center justify-between gap-40'>
            <div>
              <a href='/'>
                <span>Tushar Verma</span>
              </a>
            </div>
            <div>
              <ul className='flex items-center gap-4'>
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className='text-sm hover:text-stone-300'
                      href={item.href}
                      onClick={e => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className='pt-3 backdrop-blur-lg lg:hidden'>
          <div className='flex items-center justify-between px-4'>
            <div className='-translate-y-1'>
              <a href='#'>
                <span className='ml-1'>Tushar Verma</span>
              </a>
            </div>
            <div className='flex items-center'>
              <button
                className='focus:outline-none lg:hidden -translate-y-1'
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {isMobileMenuOpen ? (
                  <RiCloseLargeLine className='h-6 w-5' />
                ) : (
                  <RiMenu5Line className='h-6 w-5' />
                )}
              </button>
            </div>
          </div>
          {/* menu options */}
          {isMobileMenuOpen && (
            <ul className='mt-16 mx-2 pb-16 flex flex-col gap-9 text-center border-b border-white/40 rounded-3xl'>
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className='block w-full text-lg'
                    onClick={e => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
