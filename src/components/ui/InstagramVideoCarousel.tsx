"use client"

import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules' // Apenas Navigation é necessária para este método
import { Instagram, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation' // Essencial para o módulo de navegação

// --- INTERFACES (sem alterações) ---
interface VideoData {
  id: number
  title: string
  thumbnail: string
  videoSrc: string
}

interface InstagramVideoCarouselProps {
  videos: VideoData[]
  subtitle?: string
  instagramUrl?: string
  onVideoClick?: (video: VideoData) => void
}

const InstagramVideoCarousel = ({
  videos,
  subtitle = "ACOMPANHE NOSSO DIA A DIA E FIQUE\nPOR DENTRO DAS NOVIDADES",
  instagramUrl = "https://instagram.com/lab_anacli",
  onVideoClick
}: InstagramVideoCarouselProps) => {
  // Mantemos o state apenas para controlar a APARÊNCIA dos botões
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleVideoClick = (video: VideoData) => {
    if (onVideoClick) {
      onVideoClick(video)
    }
  }

  // Esta função agora SÓ atualiza o estado visual
  const handleSwiperUpdate = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  return (
    <section className="bg-primary/5 py-20 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-center w-full">
        {/* Left Column */}
        <div className="relative z-10 space-y-8 max-w-7xl mx-auto px-6 lg:px-0 lg:pl-[max(1.5rem,calc((100vw-80rem)/2))]">
          {/* ... (Título e subtítulo sem alterações) ... */}
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-900">Siga </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              @lab_anacli
            </span>
          </h2>
          <p className="text-sm text-red-500 uppercase tracking-widest leading-relaxed">
            {subtitle.split('\n').map((line, index) => (
              <span key={index}>{line}{index < subtitle.split('\n').length - 1 && <br />}</span>
            ))}
          </p>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            {/* CORREÇÃO 1: Adicionamos uma classe única para o Swiper encontrar o botão */}
            <button
              className={`swiper-button-prev-custom w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform ${isBeginning
                ? 'bg-gray-200 text-gray-400 opacity-50 cursor-not-allowed'
                : 'bg-gray-300 text-black hover:bg-primary hover:text-white hover:scale-105 active:scale-95'
                }`}
              aria-label="Slide anterior"
              disabled={isBeginning}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            {/* CORREÇÃO 1: E aqui também */}
            <button
              className={`swiper-button-next-custom w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform ${isEnd
                ? 'bg-gray-200 text-gray-400 opacity-50 cursor-not-allowed'
                : 'bg-gray-300 text-black hover:bg-primary hover:text-white hover:scale-105 active:scale-95'
                }`}
              aria-label="Próximo slide"
              disabled={isEnd}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          {/* ... (Botão CTA do Instagram sem alterações) ... */}
           <button
             className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
             onClick={() => window.open(instagramUrl, '_blank')}
           >
             <Instagram className="w-5 h-5" />
             Seguir no Instagram
           </button>
        </div>

        {/* Right Column */}
        <div className="relative">
          <Swiper
            onSwiper={handleSwiperUpdate}
            onSlideChange={handleSwiperUpdate}
            modules={[Navigation]} // Módulo de Navegação é essencial
            
            // CORREÇÃO 2: A MÁGICA ACONTECE AQUI.
            // Dizemos ao Swiper para usar os botões com as classes que definimos.
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            
            slidesPerView="auto"
            spaceBetween={20}
            loop={false}
            speed={600}
            className="instagram-carousel pr-6"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id} className="!w-64">
                <VideoCard
                  video={video}
                  onClick={() => handleVideoClick(video)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

// --- VideoCard Component (sem alterações) ---
interface VideoCardProps {
  video: VideoData
  onClick: () => void
}

const VideoCard = ({ video, onClick }: VideoCardProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative w-full h-96 rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300"
    >
       <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${video.thumbnail})` }} />
       <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
       <div className="absolute inset-0 flex items-center justify-center">
         <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
           <div className="bg-primary rounded-full p-3 group-hover:bg-primary/90 transition-colors">
             <Play className="w-6 h-6 text-white fill-white" />
           </div>
         </div>
       </div>
       <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
         <h3 className="text-white text-sm font-medium text-left leading-tight">{video.title}</h3>
       </div>
    </button>
  )
}

export default InstagramVideoCarousel