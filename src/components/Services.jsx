import {
  Code,
  Smartphone,
  Palette,
  Cloud,
  Database,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc:
      "Custom web applications built with React, Next.js, and modern technologies. Scalable, performant, and designed for growth.",
    points: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Ready",
      "Progressive Web Apps",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc:
      "Native and cross-platform mobile apps for iOS and Android. Seamless experiences users love.",
    points: [
      "iOS & Android",
      "React Native",
      "Flutter Development",
      "App Store Deployment",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc:
      "Beautiful, intuitive interfaces crafted with user experience at the core. Design that converts.",
    points: [
      "User Research",
      "Wireframing",
      "Interactive Prototypes",
      "Design Systems",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc:
      "Scalable cloud infrastructure and deployment services. AWS, Azure, and Google Cloud expertise.",
    points: [
      "Cloud Migration",
      "DevOps & CI/CD",
      "Infrastructure as Code",
      "Auto-scaling",
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    desc:
      "Robust server-side solutions with RESTful APIs, GraphQL, and microservices architecture.",
    points: [
      "API Development",
      "Database Design",
      "Authentication & Security",
      "Real-time Systems",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy",
    desc:
      "Comprehensive digital transformation consulting. Strategy that drives measurable results.",
    points: [
      "MVP Development",
      "Product Strategy",
      "Technical Consulting",
      "Agile Methodology",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block mb-4 text-xs font-medium px-4 py-1 rounded-full bg-gray-100">
            OUR SERVICES
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Comprehensive Digital Solutions
          </h2>

          <p className="mt-4 text-gray-600">
            From concept to deployment, we provide end-to-end services that
            transform your digital vision into reality.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-900 text-white mb-6">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  {service.desc}
                </p>

                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-900"
                >
                  Learn More →
                </a>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="px-8 py-3 rounded-full bg-gray-900 text-white text-sm font-medium">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
