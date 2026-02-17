import { motion } from "motion/react";
import { FileText, Users, Search, GraduationCap } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Post a Project",
    description: "Share your ideas and find collaborators who share your vision",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Users,
    title: "Find Teammates",
    description: "Connect with talented students from different institutes",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: Search,
    title: "Skill-Based Search",
    description: "Discover projects that match your skills and interests",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: GraduationCap,
    title: "Request Mentors",
    description: "Get guidance from experienced students and professionals",
    color: "from-mint-400 to-green-500",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600">
            Build amazing projects together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow h-full">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
