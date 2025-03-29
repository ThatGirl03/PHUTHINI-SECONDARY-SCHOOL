import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

const stats = [
  { icon: GraduationCap, label: 'Years Experience', value: '30+' },
  { icon: BookOpen, label: 'Subjects Taught', value: '10' },
  { icon: Users, label: 'Staff Members', value: '16+' },
  { icon: Award, label: 'Awards', value: '15+' }
];

const Team = [
  { name: 'Mr. V.N. Cele', role: 'Principal', image: '/assets/10.jpg', bio: 'Dedicated educator with over three decades of experience, leading Phuthini Secondary School since 2011.' },
  { name: 'Ms. M.S Mdakane', role: 'Learner Support Agent', image: '/assets/D4.jpg' },
  { name: 'Ms. V.J Mnculwane', role: 'Commerce H.O.D', image: '/assets/M8.jpg' },
  { name: 'Mr. S.C Xaba', role: 'Languages H.O.D', image: '/assets/D2.jpg' },
  { name: 'Ms. I.N Cindi', role: 'IsiZulu', image: '/assets/D3.jpg' },
  { name: 'Ms. Z.P Zwane', role: 'IsiZulu', image: '/assets/M1.jpg' },
  { name: 'Mrs. N.A Luthuli', role: 'English', image: '/assets/M00.jpg' },
  { name: 'Mr. S.W Mahlinza', role: 'English & L.O', image: '/assets/M77.jpg' },
  { name: 'Mrs. A.T.K Tembe', role: 'N.S & Technology', image: '/assets/M12.jpg' },
  { name: 'Mrs. N Nxumalo', role: 'E.M.S & Accounting', image: '/assets/M9.jpg' },
  { name: 'Mr. S Mazibuko', role: 'Accounting', image: '/assets/M6.jpg' },
  { name: 'Mr. S.P Madondo', role: 'Business Studies', image: '/assets/M10.jpg' },
  { name: 'Ms. N.P Nikiwe', role: 'Physical Sciences', image: '/assets/M3.jpg' },
  { name: 'Ms. M.B Shabalala', role: 'Mathematics', image: '/assets/M11.jpg' },
  { name: 'Mrs. S.N Mazibuko', role: 'Janitor', image: '/assets/M5.jpg' },
  { name: 'Mr. V.A.T Kubheka', role: 'Security Guard', image: '/assets/M4.jpg' }
];

export default function team() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="team" className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
        >
          Our Team
        </motion.h2>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black p-6 rounded-lg text-center border border-primary"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-white text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Team.map((team, index) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black rounded-lg overflow-hidden shadow-lg border border-primary group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/assets/placeholder.png";
                  }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1">{team.name}</h3>
                <p className="text-white text-sm mb-2">{team.role}</p>
                {team.bio && (
                  <p className="text-white/80 text-sm">{team.bio}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
