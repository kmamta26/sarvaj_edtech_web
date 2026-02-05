import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block mb-4 text-xs font-medium px-4 py-1 rounded-full bg-gray-100">
            ABOUT SARVAJ
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Trusted Technology Partner
          </h2>

          <p className="text-gray-600 text-sm">
            We are a dynamic private limited service company transforming
            businesses through innovative digital solutions.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid gap-20 lg:grid-cols-2 items-center mb-24">
          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Team working"
              className="rounded-2xl shadow-lg"
            />

            {/* FLOATING CARD */}
            <div className="absolute -bottom-8 right-8 bg-slate-900 text-white px-6 py-5 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">5+</p>
              <p className="text-xs mt-1 opacity-80">
                Years of Excellence <br />
                in Digital Innovation
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Crafting Digital Solutions That Drive Growth
            </h3>

            <div className="space-y-4 text-sm text-gray-600 mb-6">
              <p>
                Sarvaj is a leading service-based company specializing in web
                development, mobile applications, and comprehensive digital
                solutions. With over 5 years of experience, we’ve helped
                businesses of all sizes achieve their digital transformation
                goals.
              </p>

              <p>
                Our team of expert developers, designers, and strategists work
                collaboratively to deliver projects that not only meet but
                exceed expectations. We combine technical excellence with
                creative innovation to build solutions that make a real impact.
              </p>

              <p>
                From startups to enterprises, we’ve partnered with diverse
                clients across industries, delivering scalable, secure, and
                user-centric applications that drive business success.
              </p>
            </div>

            {/* BULLETS */}
            <ul className="space-y-3 text-sm">
              {[
                "Award-winning design and development team",
                "Agile methodology for faster delivery",
                "24/7 support and maintenance services",
                "Proven track record across multiple industries",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-gray-900 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* STATS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Stat value="150+" title="Projects Completed" desc="Successfully delivered across industries" />
          <Stat value="50+" title="Happy Clients" desc="Long-term partnerships worldwide" />
          <Stat value="25+" title="Team Members" desc="Expert developers and designers" />
          <Stat value="98%" title="Success Rate" desc="On-time and within budget" />
        </div>
      </div>
    </section>
  );
}

/* STAT CARD */
function Stat({ value, title, desc }) {
  return (
    <div className="border rounded-xl p-6 text-center">
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm font-medium mt-1">{title}</p>
      <p className="text-xs text-gray-500 mt-2">{desc}</p>
    </div>
  );
}
