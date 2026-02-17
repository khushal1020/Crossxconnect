import { motion } from "motion/react";
import { Sparkles, Heart, Star, Zap } from "lucide-react";

export function CTAFooter() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 text-white/20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-16 h-16" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 text-white/20"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -360, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart className="w-20 h-20" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-1/4 text-white/20"
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star className="w-12 h-12" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-1/3 text-white/20"
        animate={{
          y: [0, 25, 0],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Zap className="w-14 h-14" />
      </motion.div>

      {/* Floating avatars */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            top: `${15 + i * 12}%`,
            left: `${5 + i * 15}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Start your first collaboration today
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12">
            Join thousands of students building the future together
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.button
              className="px-10 py-5 bg-white text-purple-600 rounded-full shadow-2xl hover:shadow-3xl transition-shadow text-lg font-semibold"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up Free
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div>
              <p className="text-4xl font-bold text-white mb-2">10K+</p>
              <p className="text-white/80">Active Students</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">2.5K+</p>
              <p className="text-white/80">Projects Created</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">500+</p>
              <p className="text-white/80">Mentors Available</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer text */}
      <motion.div
        className="relative z-10 text-center mt-20 text-white/60 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <p>© 2026 CollabHub. Built with ❤️ for students everywhere.</p>
      </motion.div>
    </section>
  );
}
