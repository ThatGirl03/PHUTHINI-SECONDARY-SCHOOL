import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

function useTypewriterEffect(text: string, speed: number = 50) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const visionText = "Aim to create an educated citizenry.";
  const missionText =
    "We are committed to teaching pupils to be responsible, positive adults who are disciplined, self-confident, motivated, highly qualified and willing to serve the community.";

  const historyParagraphs = [
    "In 1997, during a parents' meeting at Lukazi Primary School, a proposal was made to establish Phuthini Secondary School in the Enyezane area. The school was named in honor of the late Inkosi Phuthini.",
    "Parents were concerned about their children's 20-kilometer journey to Sizathina High School, which involved crossing the dangerous Injisuthi River. This led to various challenges including drowning risks and loss of school materials.",
    "After years of persistent effort and community involvement, including support from local leadership and education officials, Phuthini Secondary School was officially registered in 2009.",
    "Today, the school stands as a testament to the community's dedication to education and the safety of its children."
  ];

  const visionTypedText = useTypewriterEffect(visionText);
  const missionTypedText = useTypewriterEffect(missionText);
  const historyTypedText = historyParagraphs.map((paragraph) => useTypewriterEffect(paragraph, 30));

  return (
    <section id="vision-mission" className="section" ref={ref}>
      <div className="grid md:grid-cols-2 gap-8 mb-16 text-center">
        {/* Vision Box */}
        <motion.div
          initial={{ opacity: 0, rotateY: 90 }}
          animate={inView ? { opacity: 1, rotateY: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-black p-8 rounded-lg shadow-lg border border-primary"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
          <p className="text-white text-center">{visionTypedText}</p>
        </motion.div>

        {/* Mission Box */}
        <motion.div
          initial={{ opacity: 0, rotateY: -90 }}
          animate={inView ? { opacity: 1, rotateY: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-black p-8 rounded-lg shadow-lg border border-primary"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
          <p className="text-white text-center">{missionTypedText}</p>
        </motion.div>
      </div>

      {/* History Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative rounded-lg overflow-hidden text-center"
      >
        <div className="absolute inset-0">
          <img
            src="/assets/V.jpg"
            alt="School History"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Our History</h2>
          <div className="prose prose-lg text-white max-w-none text-center space-y-4">
            {historyTypedText.map((paragraph, index) => (
              <p key={index} className="text-center">{paragraph}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
