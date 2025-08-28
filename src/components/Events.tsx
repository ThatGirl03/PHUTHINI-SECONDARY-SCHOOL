import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const events = [
    {
    title: 'Environmental affairs visit',
    image: ["/assets/Z10.jpeg"],
    description: 'The environmental affairs paid us a wonderful visit and delivered essential gifts for our learners, 2025.'
  },
  {
    title: 'Matric Excursion',
    image: ["/assets/E1.jpg"],
    description: 'Our Grade 12 2024 got the opportunity to visit Bata, the school shoes manufacturing factory.'
  },
  {
    title: 'Debate Competition',
    image: ["/assets/E5.jpg"],
    description: 'We encourage our learners to participate in activities that require them to exchange information amongst themselves and other schools.',
  },
  {
    title: 'Matric Exams',
    image: ["/assets/E4.jpg"],
    description: 'We have a culture of making our matrics obligate themselves on the rules before commencing with their exams.'
  },
  {
    title: 'Fundraising',
    image: ["/assets/F.jpg"],
    description: 'We encourage our learners to lead and plan fundraising events to support their completion travel costs and project prototype requirements, including materials and tools. Through this process, they develop essential skills in leadership, teamwork, financial management, and problem-solving, preparing them for future challenges.'
  },
  {
    title: 'Technology Awareness',
    image: ["/assets/T1.jpg"],
    description: 'SINGAWE Innovative proudly organized a visit with the DUT Student Recruitment Department and ICT students from DUT, focusing on raising awareness about technology. This initiative aimed to encourage DUT enrollment, provide career guidance, and inspire our Grade 12 learners to explore opportunities in the ever-evolving tech landscape.'
  },
  {
    title: 'Sports Day',
    image: ["/assets/N.jpg"],
    description: 'Annual inter-house sports competition promoting physical activity and school spirit.'
  }
];

export default function Events() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="events" className="py-20 bg-black/90" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
        >
          School Events
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black rounded-lg overflow-hidden shadow-lg border border-primary group"
            >
              <div className="relative h-48 overflow-hidden">
              <img
               src={event.image[0]} // Select the first image in the array
               alt={event.title}
               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
                <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                <p className="text-white">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
