'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '../context/language-context';
import { AppBar, Toolbar, Box, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import SvgEn from './animations/svg-language/svg-en';
import SvgEs from './animations/svg-language/svg-es';
import { navItems } from '@/data/header';

export default function Header() {
  const { lang, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLangChange = (newLang) => {
    if ((lang==='es'&& newLang==='en')||(lang==='en'&& newLang==='es')) {
      toggleLang();
    }
  };
  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header>
      <AppBar
        position="fixed"
        sx={{
          top: 0, left: 0, width: '100%',
          backgroundColor: 'white',
          color: '#333',
          transform: 'translateZ(0)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: 1200
        }}
        elevation={0}
      >
        {/* Logo y navbar alineados horizontalmente */}
        <Toolbar 
          sx={{  
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            px: { xs: 2, md: 2, lg: 4 },
            minHeight: { md: '70px' },
            gap: { md: 2, lg: 4 }
          }}
        >
          {/* Logo a la izquierda */}
          <Box 
            className="flex items-center p-1 md:py-2"
            sx={{ 
              flexShrink: 0,
              width: { md: '140px', lg: '180px' }
            }}
          >
            <Link href="/">
              <Image
                src="/logos/logo-acrear.svg"
                alt="Logo"
                width={160} height={70} 
                priority quality={100}
                className="w-32 scale-125 sm:scale-125  md:scale-[1.2] lg:scale-[1.8] pl-2 sm:w-32 md:w-32 lg:w-40 lg:pl-6 lg:h-16"
              />
            </Link>
          </Box>

          {/* Barra azul a la derecha */}
          <Box
            className="hidden md:flex "
            sx={{
              alignItems: 'center',
              background: 'var(--color-primary)',
              borderRadius: '2rem',
              px: { md: 2, lg: 3 },
              py: { md: 1, lg: 1.5 },
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              justifyContent: 'space-between',
              gap: { md: 1, lg: 2 },
              maxWidth: { md: 'calc(100% - 160px)', lg: 'none' },
              flexGrow: { md: 0, lg: 0 }
            }}
          >
            {/* NavItems */}
            <Box sx={{ 
              display: 'flex', 
              gap: { md: 1, lg: 3 },
              flexShrink: 1
            }}>
              {navItems.map((item) => (
                <Link key={item.key} href={item.href}>
                  <Button
                    sx={{
                      color: 'white',
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: { md: '0.85rem', lg: '1rem' },
                      fontWeight: 700,
                      textTransform: 'none',
                      background: 'transparent',
                      whiteSpace: 'nowrap',
                      padding: { md: '4px 6px', lg: '6px 12px' },
                      minWidth: { md: 'auto' },
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        color: 'var(--color-accent)'
                      }
                    }}
                    disableRipple
                  >
                    {item.label[lang]}
                  </Button>
                </Link>
              ))}
            </Box>
            {/* Banderas de idioma */}
            <Box className="flex items-center gap-0.5 lg:gap-2">
              <IconButton 
                onClick={()=>handleLangChange('en')}
                sx={{ 
                  color: 'white', 
                  padding: { md: '4px', lg: '8px' },
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' } 
                }}
              >
                <SvgEn/>
              </IconButton>
              <IconButton 
                onClick={()=>handleLangChange('es')}
                sx={{ 
                  color: 'white', 
                  padding: { md: '4px', lg: '8px' },
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' } 
                }}
              >
                <SvgEs/>
              </IconButton>
            </Box>
          </Box>

          {/* Mobile menu (hamburguesa) */}
          <Box className="flex md:hidden items-center justify-end  z-55">
            <IconButton
              onClick={toggleMobileMenu}
              sx={{ color: 'var(--color-accent)' ,
                 background: 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)',
                  color: 'var(--color-accent)'
                }}}
            >
              {mobileOpen
                ? <CloseIcon sx={{ fontSize: 28}} />
                : <MenuIcon sx={{ fontSize: 28}} />
              }
            </IconButton>
          </Box>
        </Toolbar>

        {/* Mobile menu + backdrop */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black z-40"
                onClick={toggleMobileMenu}
              />

              {/* Sliding menu */}
              <motion.div
                key="menu"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed top-0 right-0 bg-[var(--color-primary)] rounded-bl-2xl rounded-tl-2xl max-w-xs  w-2/3 z-50 p-4 flex flex-col"
              >
                {navItems.map((item) => (
                  <Link key={item.key} href={item.href} onClick={toggleMobileMenu}>
                    <Button
                      fullWidth
                      sx={{
                        justifyContent: 'flex-start',
                        color: 'white',
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: '1rem',
                        fontWeight: 700,
                        textTransform: 'none',
                        background: 'transparent',
                        '&:hover': {
                          backgroundColor: 'rgba(0,0,0,0.04)',
                          color: 'var(--color-accent)'
                        }
                      }}
                    >
                      {item.label[lang]}
                    </Button>
                  </Link>
                ))}
                {/* Language selectors */}
                <Box className="flex gap-4 mt-auto">
                  <IconButton 
                    onClick={()=>handleLangChange('en')}
                    sx={{ color: 'var(--color-primary)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' } }}
                  >
                    <SvgEn/>
                  </IconButton>
                  <IconButton 
                    onClick={()=>handleLangChange('es')}
                    sx={{ color: 'var(--color-primary)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' } }}
                  >
                    <SvgEs/>
                  </IconButton>
                </Box>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </AppBar>
    </header>
  );
}
