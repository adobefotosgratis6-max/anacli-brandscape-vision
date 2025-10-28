import { Phone, MapPin, ArrowRight, Mail } from "lucide-react";
import { HierarchicalButton } from "@/components/ui/hierarchical-button";

const ButtonHierarchyExample = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Sistema de Hierarquia de Botões - Anacli
          </h1>
          <p className="text-gray-600">
            Demonstração da padronização e hierarquia visual dos botões
          </p>
        </div>

        {/* Primary Buttons */}
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            1. Botões Primários - Ações Mais Importantes
          </h2>
          <div className="flex flex-wrap gap-4">
            <HierarchicalButton
              hierarchy="primary"
              size="lg"
              icon={<Phone className="w-5 h-5" />}
              iconPosition="left"
            >
              Ligar Agora
            </HierarchicalButton>
            
            <HierarchicalButton
              hierarchy="primary"
              size="md"
              icon={<Mail className="w-4 h-4" />}
              iconPosition="left"
              className="bg-green-500 hover:bg-green-600 focus:ring-green-500"
            >
              WhatsApp
            </HierarchicalButton>
            
            <HierarchicalButton
              hierarchy="primary"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Agendar Exame
            </HierarchicalButton>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Usados para CTAs principais, ações de conversão e contato direto
          </p>
        </div>

        {/* Secondary Buttons */}
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            2. Botões Secundários - Ações Importantes
          </h2>
          <div className="flex flex-wrap gap-4">
            <HierarchicalButton
              hierarchy="secondary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Ver todas as notícias
            </HierarchicalButton>
            
            <HierarchicalButton
              hierarchy="secondary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Entrar no Portal
            </HierarchicalButton>
            
            <HierarchicalButton
              hierarchy="secondary"
              size="sm"
            >
              Resultados de Exames
            </HierarchicalButton>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Usados para navegação importante e ações secundárias relevantes
          </p>
        </div>

        {/* Tertiary Buttons */}
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            3. Botões Terciários - Ações de Apoio
          </h2>
          <div className="flex flex-wrap gap-4">
            <HierarchicalButton
              hierarchy="tertiary"
              size="lg"
              icon={<MapPin className="w-5 h-5" />}
              iconPosition="left"
            >
              Ver Localização
            </HierarchicalButton>
            
            <HierarchicalButton
              hierarchy="tertiary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Ver todos os Convênios
            </HierarchicalButton>
            
            <HierarchicalButton
              hierarchy="tertiary"
              size="sm"
            >
              Ver no Maps
            </HierarchicalButton>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Usados para links de apoio, navegação secundária e ações complementares. Hover: fundo magenta + texto branco.
          </p>
        </div>

        {/* Ghost Buttons */}
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            4. Botões Fantasma - Ações Sutis
          </h2>
          <div className="flex flex-wrap gap-4">
            <HierarchicalButton
              hierarchy="ghost"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Ler mais
            </HierarchicalButton>
            
            <HierarchicalButton
              hierarchy="ghost"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Saiba mais
            </HierarchicalButton>
            
            <HierarchicalButton
              hierarchy="ghost"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Detalhes
            </HierarchicalButton>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Usados para links de leitura, navegação discreta e ações menos importantes. Hover: fundo magenta + texto branco.
          </p>
        </div>

        {/* States Demo */}
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            5. Estados Especiais
          </h2>
          <div className="flex flex-wrap gap-4">
            <HierarchicalButton
              hierarchy="primary"
              size="md"
              loading={true}
            >
              Carregando...
            </HierarchicalButton>
            
            <HierarchicalButton
              hierarchy="secondary"
              size="md"
              disabled={true}
            >
              Desabilitado
            </HierarchicalButton>
            
            <HierarchicalButton
              hierarchy="tertiary"
              size="md"
              fullWidth={true}
              className="max-w-xs"
            >
              Largura Total
            </HierarchicalButton>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Estados de loading, disabled e fullWidth disponíveis para todos os tipos
          </p>
        </div>

        {/* Usage Example */}
        <div className="bg-gray-900 p-8 rounded-2xl text-white">
          <h2 className="text-xl font-semibold mb-6">
            Exemplo de Uso em Contexto
          </h2>
          <div className="bg-white p-6 rounded-xl">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Pronto para cuidar da sua saúde?
              </h3>
              <p className="text-gray-600">
                Entre em contato conosco e agende seus exames
              </p>
              
              {/* Hierarquia clara: Primary > Tertiary > Ghost */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <HierarchicalButton
                  hierarchy="primary"
                  size="lg"
                  icon={<Phone className="w-5 h-5" />}
                  iconPosition="left"
                >
                  Ligar Agora
                </HierarchicalButton>
                
                <HierarchicalButton
                  hierarchy="tertiary"
                  size="lg"
                  icon={<MapPin className="w-5 h-5" />}
                  iconPosition="left"
                >
                  Ver Localização
                </HierarchicalButton>
              </div>
              
              <HierarchicalButton
                hierarchy="ghost"
                size="sm"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Saiba mais sobre nossos serviços
              </HierarchicalButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonHierarchyExample;