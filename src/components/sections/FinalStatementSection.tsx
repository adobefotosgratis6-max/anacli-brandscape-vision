import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

const FinalStatementSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-primary/5 to-secondary/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            <span className="text-gray-900">Excelência em análises clínicas</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              é a nossa tradição.
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Pronto para cuidar da sua saúde?
          </h3>
          <p className="text-gray-600 mb-6">
            Entre em contato conosco e agende seus exames com a qualidade e confiança 
            que você merece.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="tel:+5575999999999"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Ligar Agora
            </motion.a>
            
            <motion.a
              href="#contato"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border border-gray-300 hover:bg-gray-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="w-5 h-5" />
              Ver Localização
            </motion.a>
          </div>
        </motion.div>

        {/* Brand Footer */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <img 
              src="/src/assets/logo02.svg" 
              alt="Anacli Laboratório" 
              className="h-16 w-auto"
            />
          </div>
          <div className="text-sm text-gray-500 tracking-wider">
            Laboratório de Análises Clínicas
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalStatementSection;
