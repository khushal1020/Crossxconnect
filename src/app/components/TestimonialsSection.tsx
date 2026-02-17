import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Hamza Khan",
    role: "Computer Science Student",
    university: "IIT BHU",
    quote:
      "CrossXConnect helped me find amazing teammates for my machine learning project. We're now building something that could change the industry!",
    avatar: "bg-gradient-to-br from-blue-400 to-purple-500",
    rating: 5,
  },
  {
    name: "Ojas Morey",
    role: "Engineering Student",
    university: "SIT Nagpur",
    quote:
      "I found a mentor through CrossXConnect who guided me through my first startup. The platform is incredible for networking across campuses.",
    avatar: "bg-gradient-to-br from-pink-400 to-red-500",
    rating: 5,
  },
  {
    name: "Gauri Mulchandani",
    role: "Design Student",
    university: "PICT PUNE",
    quote:
      "As a designer, I always struggled to find developers. CrossXConnect made it so easy to connect with talented engineers who share my vision.",
    avatar: "bg-gradient-to-br from-purple-400 to-pink-500",
    rating: 5,
  },
];

export function TestimonialsSection() {
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
            Loved by Students
          </h2>
          <p className="text-xl text-gray-600">
            See what our community has to say
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow h-full"
                whileHover={{ y: -5 }}
              >
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-purple-300 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.div
                    className={`w-12 h-12 rounded-full ${testimonial.avatar} flex items-center justify-center text-white font-semibold shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-purple-600">
                      {testimonial.university}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}