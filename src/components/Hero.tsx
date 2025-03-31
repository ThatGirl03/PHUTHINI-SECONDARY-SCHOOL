import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, GraduationCap } from 'lucide-react';
<meta name="google-site-verification" content="W7l2CMG86l4fSZAiMDMigMhw719XgYCpnSmsiERbvXQ" />
const stats = [
  { icon: TrendingUp, label: 'Pass Rate', value: '85%' },
  { icon: Users, label: 'Learners', value: '370+' },
  { icon: GraduationCap, label: 'Team', value: '25+' },
];

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white py-20"
      ref={ref}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/E4.jpg"
          alt="School Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            PHUTHINI SECONDARY SCHOOL
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-white">
            STUDY AND PRAY
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col items-center p-6 bg-black/50 rounded-lg backdrop-blur-sm hover-effect"
              >
                <stat.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-primary">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
