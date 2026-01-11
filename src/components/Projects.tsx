import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";

const Projects = () => {
  const projects = [
    {
      image: projectResidential,
      title: "Modern Family Residence",
      category: "For Sale",
      location: "Kitengela",
    },
    {
      image: projectCommercial,
      title: "Commercial Rental Units",
      category: "For Rent",
      location: "Athi River",
    },
    {
      image: projectInfrastructure,
      title: "Residential Estate",
      category: "For Sale",
      location: "Near Great Wall Gardens",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase mb-4">
            Our Properties
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Featured Properties
          </h2>
          <p className="text-muted-foreground">
            Explore our portfolio of residential homes and commercial units 
            available for rent and sale across our service regions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl card-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-primary-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
