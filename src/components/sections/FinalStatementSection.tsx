const FinalStatementSection = () => {
  return (
    <section className="editorial-spacing bg-gradient-dark text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-white leading-tight">
            Excelência em análises clínicas é a nossa tradição.
          </h2>
          
          <div className="w-20 h-1 bg-primary mx-auto" />
          
          <p className="text-2xl text-white/80 leading-relaxed font-light">
            O Laboratório Anacli reafirma diariamente seu compromisso com a ciência, 
            a ética e o cuidado com a vida.
          </p>
          
          <div className="pt-8">
            <div className="text-6xl font-bold text-primary/50 mb-2">Anacli</div>
            <div className="text-sm text-white/60 tracking-wider uppercase">
              Laboratório de Análises Clínicas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalStatementSection;
