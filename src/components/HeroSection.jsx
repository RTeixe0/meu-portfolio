// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-black px-4 py-20"
    >
      {/* Logo grande */}
      <motion.img
        src={Logo}
        alt="Logo Renan"
        className="h-44 md:h-60 mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Headline */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Oi, eu sou o <span className="text-green-400">Renan</span>
      </motion.h1>

      {/* Subtítulo atualizado */}
      <motion.p
        className="text-lg md:text-xl text-neutral-300 max-w-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Eu crio sites rápidos, bonitos e estratégicos para negócios que querem
        atrair mais clientes.
        <br />
        Ideal para quem precisa apresentar um serviço, produto ou ideia com
        impacto.
      </motion.p>

      {/* Botão WhatsApp */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <a
          href="https://wa.me/seunumero"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-xl text-base transition"
        >
          Criar um site para meu negócio
        </a>
      </motion.div>
    </section>
  );
}
