import { Target, Users, ShieldCheck, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    desc:
      "We are committed to delivering excellence and innovation in every project we undertake.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    desc:
      "Your success is our priority. We build partnerships based on trust and measurable results.",
  },
  {
    icon: ShieldCheck,
    title: "Quality First",
    desc:
      "We maintain the highest standards in code quality, design, and project delivery.",
  },
  {
    icon: Zap,
    title: "Agile & Fast",
    desc:
      "We move quickly without compromising quality, adapting to your evolving needs.",
  },
];

export default function Values() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 rounded-3xl px-8 py-16 text-white">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl font-bold mb-3">
              Our Core Values
            </h2>
            <p className="text-gray-300 text-sm">
              The principles that guide everything we do
            </p>
          </div>

          {/* Values */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="text-center px-4"
                >
                  <div className="w-12 h-12 mx-auto mb-5 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon size={22} />
                  </div>

                  <h4 className="font-semibold mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-300">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
