export default function ProjectsSection() {
  const projects = [
    {
      title: "AP Ubatuba",
      description: "Landing page para aluguel de apartamento em Ubatuba.",
      image: "/assets/ap-ubatuba.png",
      stack: ["React", "Tailwind", "EmailJS"],
      link: "https://seudominio.com/ap-ubatuba",
    },
    {
      title: "Estúdio Criativo",
      description: "Página institucional para um estúdio de design moderno.",
      image: "/assets/estudio.png",
      stack: ["Next.js", "Tailwind"],
      link: "#", // pode deixar "#" até o site ficar pronto
    },
  ];

  return (
    <section id="projetos" className="bg-black text-white py-20 px-6 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-400">
          Experimentos em produção
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((proj, index) => (
            <a
              key={index}
              href={proj.link}
              target="_blank"
              className="bg-neutral-900 rounded-xl overflow-hidden shadow-md hover:shadow-orange-500/30 transition-shadow duration-300"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
                <p className="text-neutral-400 text-sm mb-3">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-neutral-400">
                  {proj.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-neutral-800 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
