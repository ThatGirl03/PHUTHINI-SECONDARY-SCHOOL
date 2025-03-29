import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const subjects = [
  { name: 'Mathematics', description: 'Develops problem-solving, analytical, and logical thinking skills.' },
  { name: 'Accounting', description: 'Teaches financial literacy, budgeting, and business management.' },
  { name: 'Physical Sciences', description: 'Enhances critical thinking, problem-solving, and practical experimentation skills.' },
  { name: 'Business Studies', description: 'Develops entrepreneurship, business management, and marketing skills.' },
  { name: 'Economics', description: 'Teaches economic principles, decision-making, and financial awareness.' },
  { name: 'Mathematics Literacy', description: 'Provides real-life numerical skills for banking, shopping, and budgeting.' },
  { name: 'English FAL', description: 'Medium of instruction for all subjects at the school.' },
  { name: 'IsiZulu HL', description: 'Develops communication and writing skills in IsiZulu.' },
  { name: 'Life Orientation', description: 'Focuses on personal well-being, health, career choices, and social responsibility.' },
  { name: 'Life Sciences', description: 'Teaches biological concepts, environmental awareness, and human anatomy.' },
  { name: 'Computer Literacy', description: 'Introduces basic computer skills, software applications, and internet safety.', future: true },
  { name: 'Robotics', description: 'Covers programming, automation, and hands-on robotics projects.', future: true }
];

export default function Subjects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="subjects-offered" className="container mx-auto py-20 px-4" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
      >
        Subjects Offered
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group perspective relative"
          >
            <div className="card-container relative">
              {/* Front of the Card */}
              <div className={`card-front relative ${subject.future ? 'opacity-50' : ''}`}>
                <h3 className="text-xl font-bold text-gold relative z-10">{subject.name}</h3>
              </div>

              {/* Back of the Card */}
              <div className="card-back">
                <p>{subject.description}</p>
              </div>
            </div>

            {/* Status Labels */}
            <div className={`absolute bottom-0 left-0 right-0 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${subject.future ? 'bg-red-600' : 'bg-green-600'}`}>
              {subject.future ? 'Future Offering' : 'Offered'}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}