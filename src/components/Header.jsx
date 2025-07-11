import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/80 backdrop-blur px-6 py-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Nome no lugar da logo */}
        <a
          href="#"
          className="text-white text-xl sm:text-2xl font-bold tracking-tight hover:text-green-400 transition"
        >
          Renan Teixeira
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#sobre" className="hover:text-green-400">
            Sobre
          </a>
          <a href="#projetos" className="hover:text-green-400">
            Projetos
          </a>
          <a href="#skills" className="hover:text-green-400">
            Skills
          </a>
          <a href="#contato" className="hover:text-green-400">
            Contato
          </a>
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden z-50 relative w-8 h-8"
          onClick={toggleMenu}
        >
          <motion.span
            className="block absolute h-[2px] w-8 bg-white rounded"
            initial={false}
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block absolute h-[2px] w-8 bg-white rounded"
            initial={false}
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.25 }}
            style={{ top: "8px" }}
          />
          <motion.span
            className="block absolute h-[2px] w-8 bg-white rounded"
            initial={false}
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 16 }}
            transition={{ duration: 0.25 }}
          />
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-start gap-4 px-6 pt-4 pb-6 text-white text-sm"
          >
            <a
              href="#sobre"
              onClick={closeMenu}
              className="hover:text-green-400"
            >
              Sobre
            </a>
            <a
              href="#projetos"
              onClick={closeMenu}
              className="hover:text-green-400"
            >
              Projetos
            </a>
            <a
              href="#skills"
              onClick={closeMenu}
              className="hover:text-green-400"
            >
              Skills
            </a>
            <a
              href="#contato"
              onClick={closeMenu}
              className="hover:text-green-400"
            >
              Contato
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
