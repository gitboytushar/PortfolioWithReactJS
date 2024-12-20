import { RiCloseLargeLine, RiMenu5Line } from '@remixicon/react'
import { useState } from 'react'
import { NAVIGATION_LINKS } from '../constants/index'
import { motion } from 'motion/react'
import { useLenis } from 'lenis/react'
import { easeInOutCubic } from '../utilities/easing'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const lenis = useLenis() // access lenis instance

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault()

    const targetElement = document.querySelector(href)
    if (targetElement && lenis) {
      const offset = -10 // prev:85
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY + offset

      lenis.scrollTo(offsetPosition, {
        duration: 1.8,
        easing: easeInOutCubic
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div>
      <nav className='fixed left-0 right-0 z-50 top-0 lg:top-4'>
        {/* Desktop Menu */}
        <div className='mx-auto hidden w-fit px-6 items-center justify-center rounded-full border border-white/30 py-2 bg-black/20 backdrop-blur-lg lg:flex'>
          <div className='flex items-center justify-between gap-40'>
            <div className='select-none'>
              <a
                href='/'
                className='text-sm hover:font-bold text-white hover:text-yellow-300 hover:motion-preset-confetti'
              >
                <span>Tushar Verma</span>
              </a>
            </div>
            <div>
              <ul className='flex items-center gap-4 select-none'>
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className='text-sm hover:font-bold text-white hover:text-yellow-300 transition-all duration-300 ease-in-out'
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
        <div className='pt-5 bg-black/20 backdrop-blur-2xl lg:hidden border-b border-white/20'>
          <div className='flex items-center justify-between px-4 pb-2'>
            <div className='-translate-y-1'>
              <a href='/'>
                <span className='ml-1'>Tushar Verma</span>
              </a>
            </div>
            <div className='flex items-center'>
              <button
                className={`focus:outline-none -translate-y-1 transition-transform duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-90' : ''
                }`}
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {isMobileMenuOpen ? (
                  <RiCloseLargeLine className='h-6 w-6 transition-transform duration-300 ease-in-out rotate-90' />
                ) : (
                  <RiMenu5Line className='h-6 w-6 transition-transform duration-300 ease-in-out' />
                )}
              </button>
            </div>
          </div>
          {/* menu options */}
          {isMobileMenuOpen && (
            <motion.ul
              initial='hidden'
              animate='visible'
              variants={{
                hidden: { opacity: 0, y: 50 }, // Fade out and slide up
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
              transition={{ duration: 0.3 }}
              layout='preserve-aspect'
              className='py-16 flex flex-col gap-12 text-center border-t border-white/20'
            >
              {NAVIGATION_LINKS.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <a
                    href={item.href}
                    className='block w-full text-lg'
                    onClick={e => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
