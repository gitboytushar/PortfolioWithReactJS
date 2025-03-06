import { RiCloseLargeLine, RiMenu5Line } from '@remixicon/react'
import { useState } from 'react'
import { NAVIGATION_LINKS } from '../constants/index'
import { motion } from 'motion/react'
import { useLenis } from 'lenis/react'
import { easeInOutCubic } from '../utilities/easing'
import { MailIcon } from 'lucide-react'

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
        {/* ------------- Desktop Menu ------------ */}
        <div className='mx-auto hidden w-[1200px] h-12 py-2 px-1.5 items-center justify-between rounded-lg border-none bg-white/10 backdrop-blur-3xl lg:flex'>
          <div className='select-none'>
            <a
              href='/'
              className='text-md py-2 px-3 rounded-[5px] text-white bg-none'
            >
              <span>Tushar Verma</span>
            </a>
          </div>

          <div>
            <ul className='flex items-center gap-1 select-none'>
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  {item.href === '#contact' ? (
                    <a
                      className='text-md py-2 px-3 rounded-[5px] text-white font-medium bg-violet-600 hover:bg-white/10 transition-colors duration-200 ease-linear'
                      href={item.href}
                      onClick={e => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      className='text-md py-2 px-3 rounded-[5px] text-white bg-none hover:bg-white/10 transition-all duration-200 ease-in-out'
                      href={item.href}
                      onClick={e => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ----------- Mobile Menu bar ------------ */}
        <div className='pt-5 bg-black/20 backdrop-blur-3xl lg:hidden border-b border-white/20'>
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
                    staggerChildren: 0.1,
                    ease: 'anticipate'
                  }
                }
              }}
              transition={{ duration: 0.6 }}
              layout='preserve-aspect'
              className='py-16 flex flex-col gap-10 text-center border-t border-white/20'
            >
              {NAVIGATION_LINKS.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  {item.href === '#contact' ? (
                    <div className='flex flex-col items-center justify-center gap-10'>
                      <p className='bg-white/10 h-0.5 w-1/2 rounded-full'></p>
                      <a
                        href={item.href}
                        className='flex items-center justify-center gap-2 w-full text-lg'
                        onClick={e => handleLinkClick(e, item.href)}
                      >
                        <MailIcon size={20} className='text-yellow-400' />
                        {item.label}
                      </a>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className='block w-full text-lg'
                      onClick={e => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  )}
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
