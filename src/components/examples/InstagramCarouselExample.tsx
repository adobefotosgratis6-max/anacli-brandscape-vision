import { useState } from 'react'
import InstagramVideoCarousel from '@/components/ui/InstagramVideoCarousel'
import { VideoModal } from '@/components/ui/video-modal'

const exampleVideos = [
  {
    id: 1,
    title: "Como funciona o exame de sangue",
    thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=600&fit=crop&crop=center",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Preparação para exames laboratoriais",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=600&fit=crop&crop=center",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Tecnologia de ponta em análises",
    thumbnail: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=600&fit=crop&crop=center",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Atendimento humanizado Anacli",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=600&fit=crop&crop=center",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Resultados rápidos e seguros",
    thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=600&fit=crop&crop=center",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 6,
    title: "Certificações e qualidade",
    thumbnail: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=600&fit=crop&crop=center",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  }
]

const InstagramCarouselExample = () => {
  const [selectedVideo, setSelectedVideo] = useState<{src: string, title: string} | null>(null)

  const handleVideoClick = (video: typeof exampleVideos[0]) => {
    setSelectedVideo({ src: video.videoSrc, title: video.title })
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <>
      <InstagramVideoCarousel
        videos={exampleVideos}
        title="Siga @lab_anacli"
        subtitle="Acompanhe nosso dia a dia e fique por dentro das novidades."
        instagramUrl="https://instagram.com/lab_anacli"
        onVideoClick={handleVideoClick}
      />

      {/* Video Modal */}
      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={closeVideo}
        videoSrc={selectedVideo?.src || ""}
        title={selectedVideo?.title || ""}
      />
    </>
  )
}

export default InstagramCarouselExample