import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react"; // Close icon

type Folder = {
  title: string;
  images: string[];
};

const folders: Folder[] = [
  
   {
    title: "School Construction Site 2025",
    images: ["/assets/Z11.jpeg", "/assets/Z12.jpeg", "/assets/Z1.jpeg", "/assets/Z3.jpeg"],
  },
  {
    title: "School Visits & Representation 2025",
    images: [ "/assets/Z17.jpeg", "/assets/Z10.jpeg", "/assets/Z5.jpeg", "/assets/Z6.jpeg", "/assets/Z7.jpeg", "/assets/Z8.jpeg", "/assets/Z9.jpeg", "/assets/Z13.jpeg", "/assets/Z14.jpeg"],
  },
  {
    title: "Educators's Academic Excellence",
    images: ["/assets/x.jpg"],
  },
  {
    title: "Learner's Academic Excellence",
    images: ["/assets/Z18.jpeg", "/assets/Z20.jpeg", "/assets/A1.jpg", "/assets/A5.jpg", "/assets/A3.jpg", "/assets/A4.jpg", "/assets/A2.jpg", "/assets/C1.jpg"],
  },
  {
    title: "Debate Champions",
    images: ["/assets/Z16.jpeg", "/assets/Z17.jpeg", "/assets/E2.jpg", "/assets/E3.jpg"],
  },
  {
    title: "Competition Participation",
    images: ["/assets/Z21.jpeg", "/assets/Z22.jpeg", "/assets/C00.jpg"],
  },
  {
    title: "Sports Achievement",
    images: ["/assets/S.jpg", "/assets/N.jpg"],
  },
  {
    title: "Wall of Awards",
    images: ["/assets/W03.jpg"],
  },
  
];


export default function Gallery() {
  const [selectedFolder, setSelectedFolder] = useState<Folder | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modals on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedFolder(null);
        setSelectedImage(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-12"
        >
          Gallery
        </motion.h2>

        {/* Folder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {folders.map((folder, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg group bg-gray-800 cursor-pointer focus:outline-none"
              onClick={() => setSelectedFolder(folder)}
              type="button"
              aria-label={`Open ${folder.title} gallery`}
            >
              <img
                src={folder.images[0]} // First image as thumbnail
                alt={folder.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/80 backdrop-blur-md">
                <h3 className="text-lg font-bold text-primary">{folder.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Folder Modal */}
        {selectedFolder && !selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setSelectedFolder(null)}
          >
            <div
              className="bg-gray-900 p-6 rounded-lg max-w-2xl w-full shadow-lg relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button
                onClick={() => setSelectedFolder(null)}
                className="absolute top-4 right-4 text-white hover:text-primary focus:outline-none"
                type="button"
                aria-label="Close folder modal"
              >
                <X size={24} />
              </button>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
                Gallery
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {selectedFolder.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className="focus:outline-none"
                    type="button"
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index}`}
                      className="w-full h-32 object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-primary focus:outline-none"
                type="button"
                aria-label="Close image modal"
              >
                <X size={32} />
              </button>
              <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen rounded-lg shadow-lg" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
