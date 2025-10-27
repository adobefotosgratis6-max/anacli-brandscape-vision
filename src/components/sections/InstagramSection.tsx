import { motion } from "framer-motion";
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { useState } from "react";

const instagramReels = [
  {
    id: 1,
    title: "Como funciona o exame de sangue",
    thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=600&fit=crop&crop=center",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
  },
  {
    id: 2,
    title: "Preparação para exames laboratoriais",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=600&fit=crop&crop=center",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
  },
  {
    id: 3,
    title: "Tecnologia de ponta em análises",
    thumbnail: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=600&fit=crop&crop=center",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
  },
  {
    id: 4,
    title: "Atendimento humanizado Anacli",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=600&fit=crop&crop=center",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
  },
  {
    id: 5,
    title: "Resultados rápidos e seguros",
    thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=600&fit=crop&crop=center",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
  },
  {
    id: 6,
    title: "Certificações e qualidade",
    thumbnail: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=600&fit=crop&crop=center",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
  }
];

const InstagramSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= instagramReels.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? instagramReels.length - 1 : prev - 1));
  };

  return (
    <section className="relative bg-gray-100 overflow-hidden py-20">
      <div className="flex items-center min-h-screen">
        
        {/* Left Side - Text Content */}
        <div className="w-1/2 px-12 flex items-center justify-center">
          <div className="text-center">
            <motion.h2
              className="text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Siga @lab_anacli
            </motion.h2>

            <motion.p
              className="text-sm text-red-500 uppercase tracking-widest mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ACOMPANHE NOSSO DIA A DIA E FIQUE
              <br />
              POR DENTRO DAS NOVIDADES
            </motion.p>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={prevSlide}
                className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-black" />
              </button>
              <button
                onClick={nextSlide}
                className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-black" />
              </button>
            </div>

            {/* Follow Button */}
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              onClick={() => window.open('https://instagram.com/lab_anacli', '_blank')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Instagram className="w-5 h-5" />
              Seguir no Instagram
            </motion.button>
          </div>
        </div>

        {/* Right Side - Videos extending to edge */}
        <div className="w-1/2 flex items-center relative -mr-16">
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-8"
              animate={{
                x: `${-currentIndex * 320}px`
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {instagramReels.map((reel) => (
                <motion.div
                  key={reel.id}
                  className="flex-shrink-0 group"
                  whileHover={{ y: -6 }}
                >
                  <div className="w-80 h-[500px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <HeroVideoDialog
                      className="w-full h-full"
                      animationStyle="from-center"
                      videoSrc={reel.videoSrc}
                      thumbnailSrc={reel.thumbnail}
                      thumbnailAlt={reel.title}
                    />
                  </div>
                </motion.div>
              ))}
              {/* Duplicate cards for infinite effect */}
              {instagramReels.map((reel) => (
                <motion.div
                  key={`duplicate-${reel.id}`}
                  className="flex-shrink-0 group"
                  whileHover={{ y: -6 }}
                >
                  <div className="w-80 h-[500px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <HeroVideoDialog
                      className="w-full h-full"
                      animationStyle="from-center"
                      videoSrc={reel.videoSrc}
                      thumbnailSrc={reel.thumbnail}
                      thumbnailAlt={reel.title}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;