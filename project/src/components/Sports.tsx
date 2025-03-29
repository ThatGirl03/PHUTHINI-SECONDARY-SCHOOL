import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const sports = [
  {
    name: 'Soccer',
    image: ["/assets/S1.jpeg"],
    description: 'Improves cardiovascular health and fosters social skills by encouraging collaboration and strategic thinking.'
  },
  {
    name: 'Netball',
    image: ["/assets/N2.jpeg"],
    description: 'Promotes teamwork and enhances physical fitness through dynamic, fast-paced play.'
  }
];

export default function Sports() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="sports" className="container mx-auto py-20 px-4" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
      >
        Sports Offered
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sports.map((sport, index) => (
          <motion.div
            key={sport.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-black rounded-lg overflow-hidden shadow-lg border border-primary"
          >
            <div className="relative h-64">
            <img
              src={sport.image[0]} // Use the first image in the array
              alt={sport.name}
              className="w-full h-full object-cover"
            />
              <div className="absolute inset-0 bg-black/50" />
              <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-primary">
                {sport.name}
              </h3>
            </div>
            <div className="p-6">
              <p className="text-white">{sport.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}