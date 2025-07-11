// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contato" className="bg-black text-white py-20 px-6 md:px-0">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">
          Vamos conversar?
        </h2>
        <p className="text-neutral-300 text-lg mb-8">
          Seja para criar uma landing page ou trocar uma ideia sobre código — me
          chama!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.a
            href="https://wa.me/seunumero"
            target="_blank"
            className="flex items-center gap-2 bg-green-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp
          </motion.a>

          <motion.a
            href="https://github.com/seuusuario"
            target="_blank"
            className="flex items-center gap-2 border border-neutral-600 text-white px-6 py-3 rounded-xl hover:bg-neutral-800 transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaGithub className="text-xl" />
            GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
}
