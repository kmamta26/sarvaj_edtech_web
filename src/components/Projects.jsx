import { ArrowUpRight } from "lucide-react";

const featuredProject = {
  title: "Enterprise E-Commerce Platform",
  category: "WEB DEVELOPMENT · GLOBAL RETAIL CORP",
  desc:
    "Full-stack e-commerce solution with AI-powered recommendations and real-time inventory management.",
  tags: ["React", "Node.js", "AWS", "PostgreSQL"],
  result: "300% increase in online sales",
  image:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
};

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    subtitle: "UI/UX DESIGN",
    metric: "85% user satisfaction",
    desc:
      "Comprehensive analytics platform with customizable widgets and real-time data visualization.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "FinTech Mobile Banking",
    subtitle: "APP DEVELOPMENT",
    metric: "500K+ active users",
    desc:
      "Secure and scalable mobile banking application with real-time insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Healthcare Management System",
    subtitle: "WEB DEVELOPMENT",
    metric: "10K+ patients served",
    desc:
      "End-to-end healthcare system improving operational efficiency.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
  },
  {
    title: "Enterprise CRM Solution",
    subtitle: "CLOUD SOLUTIONS",
    metric: "40% productivity boost",
    desc:
      "CRM platform designed to streamline enterprise workflows.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block mb-4 text-xs font-medium px-4 py-1 rounded-full bg-gray-100">
            PORTFOLIO
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-4 text-gray-600">
            Showcasing our expertise through successful project deliveries
            and client satisfaction.
          </p>
        </div>

        {/* Featured project */}
        <div className="grid gap-10 lg:grid-cols-2 mb-24 bg-white rounded-3xl overflow-hidden shadow">
          <div className="relative">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="w-full h-full object-cover"
            />

            <span className="absolute top-4 left-4 bg-white text-gray-900 text-xs font-medium px-3 py-1 rounded-full">
              Featured
            </span>
          </div>

          <div className="p-10 flex flex-col justify-center">
            <span className="text-xs text-gray-500 mb-3">
              {featuredProject.category}
            </span>

            <h3 className="text-2xl font-bold mb-4">
              {featuredProject.title}
            </h3>

            <p className="text-gray-600 mb-6">
              {featuredProject.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                {featuredProject.result}
              </span>

              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium"
              >
                View Case Study <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Grid projects */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 mb-20">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <span className="text-xs opacity-80">
                  {project.subtitle}
                </span>

                <h4 className="font-semibold mt-1">
                  {project.title}
                </h4>

                <p className="text-xs text-gray-200 mt-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {project.desc}
                </p>

                <p className="text-xs opacity-80 mt-2">
                  {project.metric}
                </p>
              </div>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition">
                <div className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center shadow">
                  👁
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-3 rounded-full bg-gray-900 text-white text-sm font-medium">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
