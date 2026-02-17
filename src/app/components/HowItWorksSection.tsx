import { motion } from "motion/react";
import { UserCircle, FileEdit, Handshake, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserCircle,
    title: "Create your profile",
    description:
      "Sign up and showcase your skills, interests, and the type of projects you're passionate about",
    color: "from-blue-400 to-blue-600",
  },
  {
    number: "02",
    icon: FileEdit,
    title: "Post or join a project",
    description:
      "Share your project ideas or browse existing projects that match your interests and expertise",
    color: "from-pink-400 to-pink-600",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Start collaborating",
    description:
      "Connect with teammates, share resources, and build something amazing together",
    color: "from-purple-400 to-purple-600",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Get started in three simple steps
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Step number */}
                  <motion.div
                    className="text-6xl font-bold text-gray-200 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-1/3 -right-8 z-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  >
                    <ArrowRight className="w-16 h-16 text-gray-300" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
