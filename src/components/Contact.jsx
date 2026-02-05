import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "3efb102b-700f-4a8a-8812-b69c5673105b");
    formData.append("subject", "New Contact Form Submission - Sarvaj");
    formData.append("from_name", "Sarvaj Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully. We’ll contact you soon.");
        event.target.reset();
      } else {
        setResult("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("❌ Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block mb-4 text-xs font-medium px-4 py-1 rounded-full bg-gray-200">
            GET IN TOUCH
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Build Something Great Together
          </h2>

          <p className="mt-4 text-gray-600">
            Have a project in mind? Fill out the form and we’ll get back to you
            within 24 hours.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* FORM */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full border rounded-lg px-4 py-3 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full border rounded-lg px-4 py-3 text-sm"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company"
                    className="w-full border rounded-lg px-4 py-3 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className="w-full border rounded-lg px-4 py-3 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Service Interested In *
                </label>
                <select
                  name="service"
                  required
                  className="w-full border rounded-lg px-4 py-3 text-sm"
                >
                  <option value="">Select a service</option>
                  <option>Web Development</option>
                  <option>Mobile Development</option>
                  <option>UI/UX Design</option>
                  <option>Cloud Solutions</option>
                  <option>Digital Strategy</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full border rounded-lg px-4 py-3 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-full text-sm font-medium"
              >
                Send Message →
              </button>

              {result && (
                <p className="text-sm text-center mt-2">
                  {result}
                </p>
              )}
            </form>
          </div>

          {/* INFO */}
          <div className="space-y-6">
            <InfoCard icon={Mail} title="Email Us" text="info@sarvaj.com" />
            <InfoCard icon={Phone} title="Call Us" text="+1 (555) 123-4567" />
            <InfoCard
              icon={MapPin}
              title="Visit Us"
              text="123 Business Street, San Francisco, CA"
            />
            <InfoCard
              icon={Clock}
              title="Business Hours"
              text="Mon–Fri: 9:00 AM – 6:00 PM"
            />

            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-semibold mb-2">
                Ready to Start?
              </h3>
              <p className="text-sm text-gray-300 mb-6">
                Book a free consultation call with our experts.
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-medium">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Small reusable card */
function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
      <Icon className="text-gray-900" />
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
}
