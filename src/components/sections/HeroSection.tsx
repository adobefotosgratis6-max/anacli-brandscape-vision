import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { CleanButton } from "@/components/ui/clean-button";
import { SlideButton } from "@/components/ui/slide-button";
import { MinimalButton } from "@/components/ui/minimal-button";
import { GlowBadge } from "@/components/ui/glow-badge";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-primary/5 to-secondary/10 rounded-b-[20px] md:rounded-b-[40px] lg:rounded-b-[128px]">
      {/* Background with glow effect */}
      <div className="absolute inset-0">
        {/* Animated glow orbs - Hidden on mobile for performance */}
        <motion.div
          className="hidden md:block absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="hidden md:block absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Primary Glow Effect at Bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/20 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-32 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-20 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center h-full">
          {/* Left Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 max-w-full lg:max-w-[585px] text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Welcome Text */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex justify-center lg:justify-start">
                <GlowBadge icon={<Sparkles className="w-4 h-4" />}>
                  Bem-vindos ao Laboratório Anacli
                </GlowBadge>
              </div>

              <motion.h1
                className="text-4xl md:text-7xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Compromisso
                <br />
                & Tradição
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  em Saúde
                </span>
              </motion.h1>

              {/* Linha decorativa */}
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto lg:mx-0"></div>
            </div>

            {/* Description */}
            <div className="space-y-2 sm:space-y-4">
              <p className="text-muted-foreground text-base sm:text-lg lg:text-[24px] leading-relaxed lg:leading-[28.8px] tracking-wide lg:tracking-[0.2px]">
                Uma trajetória de <span className="font-bold text-primary-dark">56 anos</span> cuidando
              </p>
              <p className="text-muted-foreground text-base sm:text-lg lg:text-[24px] leading-relaxed lg:leading-[28.8px] tracking-wide lg:tracking-[0.2px]">
                de nossos pacientes.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <SlideButton
                direction="right"
                icon={<ArrowRight className="w-4 h-4" />}
                className="bg-accent hover:bg-accent/90 text-white w-full sm:w-auto"
              >
                Acelere seu atendimento
              </SlideButton>

              <MinimalButton
                variant="secondary"
                icon={<MapPin className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Conheça nossas unidades
              </MinimalButton>
            </div>

            {/* Patient Avatars */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-6 sm:pt-8 lg:pt-[30px]">
              <div className="flex -space-x-2">
                <img
                  src="https://lh3.googleusercontent.com/a-/ALV-UjXEvoW_jJDs7mwp2VvjQJtBXA_SC-bdffW6BBIrFO6BpnbbAmFvOA=w72-h72-p-rp-mo-ba4-br100"
                  alt="Paciente satisfeita"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px] rounded-full border-2 sm:border-[3px] border-white object-cover"
                />
                <img
                  src="https://lh3.googleusercontent.com/a-/ALV-UjVoYenF9K2XQjdCFkPcmxzgiM13GqCNx-v-84udsxRQFapUCOwz7w=w72-h72-p-rp-mo-br100"
                  alt="Paciente satisfeito"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px] rounded-full border-2 sm:border-[3px] border-white object-cover"
                />
                <img
                  src="https://lh3.googleusercontent.com/a-/ALV-UjUwUhvZsF1k5SKuEIRiXKP2rGogV86D1GaIHHR_ndYIS_K-73O2vA=w72-h72-p-rp-mo-ba3-br100"
                  alt="Paciente satisfeita"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px] rounded-full border-2 sm:border-[3px] border-white object-cover"
                />
                <img
                  src="https://lh3.googleusercontent.com/a-/ALV-UjV5jxMHA_6HsEhLUyaB3AuaRhMb9vTJfYkAl3zm2Ua5AVlX1GcaUg=w72-h72-p-rp-mo-br100"
                  alt="Paciente satisfeito"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px] rounded-full border-2 sm:border-[3px] border-white object-cover"
                />
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm lg:text-[13px] leading-relaxed lg:leading-[28.8px] text-center sm:text-left pl-0 sm:pl-[10px]">
                Mais de 10 mil pacientes confiam na gente todos os meses.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Cards */}
          <motion.div
            className="relative flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-[30px] items-center lg:items-start w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Left Column */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[30px] w-full lg:w-[341.98px]">
              {/* Lab Building Image Card */}
              <motion.div
                className="h-[240px] sm:h-[300px] lg:h-[340px] w-full rounded-2xl lg:rounded-[20px] overflow-hidden shadow-xl lg:shadow-2xl relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/assets/unidade.jpg"
                  alt="Fachada do Laboratório Lapac"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Results Access Card */}
              <motion.div
                className="bg-gradient-to-br from-accent via-accent/95 to-accent/90 rounded-3xl p-7 shadow-2xl relative overflow-hidden min-h-[200px] flex flex-col justify-center"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-sm"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/5 rounded-full blur-md"></div>

                {/* Geometric pattern */}
                <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-lg rotate-12 opacity-30"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border border-white/15 rounded rotate-45 opacity-40"></div>

                <div className="relative z-10 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Acesse seu resultado
                    </h3>
                    <p className="text-white/80 text-sm">
                      Consulte seus exames de forma rápida e segura
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <CleanButton
                      variant="outline"
                      size="md"
                      icon={<ArrowRight className="w-4 h-4" />}
                      className="bg-white text-accent border-white hover:bg-accent hover:text-white"
                    >
                      Entrar no Portal
                    </CleanButton>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Interior Card */}
            <motion.div
              className="w-full lg:w-[343.02px] h-[300px] sm:h-[400px] lg:min-h-[650px] rounded-2xl lg:rounded-[20px] overflow-hidden shadow-xl lg:shadow-2xl relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/assets/teste.png"
                alt="Interior do Laboratório Lapac"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;