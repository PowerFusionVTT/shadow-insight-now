import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Search, Shield, Heart, MessageSquare, Camera, AlertTriangle, CheckCircle, Users, Clock, Zap } from "lucide-react";
import heroImage from "@/assets/hero-suspicion.jpg";
import phoneMockup from "@/assets/phone-mockup.png";

const SpyLanding = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">SpyInsta</span>
          </div>
          <div className="flex gap-4">
            <Badge variant="secondary" className="animate-pulse">
              <MessageSquare className="h-3 w-3 mr-1" />
              Mensagem deletada
            </Badge>
            <Badge variant="outline" className="animate-pulse delay-200">
              <Heart className="h-3 w-3 mr-1 text-primary" />
              Curtida oculta
            </Badge>
            <Badge variant="outline" className="animate-pulse delay-500">
              <Eye className="h-3 w-3 mr-1 text-warning" />
              Visualização secreta
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  👀 Ele(a) está te{" "}
                  <span className="text-primary">escondendo</span>{" "}
                  algo?
                </h1>
                <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                  Descubra agora mesmo.
                </h2>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Espie conversas, curtidas e interações no Instagram — 100% anônimo e sem deixar rastros.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-lg">
                  <Search className="h-5 w-5 text-primary" />
                  <span>Mensagens secretas e conversas deletadas</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <Heart className="h-5 w-5 text-danger" />
                  <span>Curtidas e interações ocultas</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <Eye className="h-5 w-5 text-warning" />
                  <span>Quem realmente visita o perfil</span>
                </div>
              </div>

              <Button variant="cta" size="xl" className="text-xl">
                🔍 Quero Saber a Verdade Agora
              </Button>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-cta" />
                  <span>100% Anônimo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cta" />
                  <span>Sem Instalação</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-cta" />
                  <span>Resultado Imediato</span>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up delay-300">
              <div className="relative">
                <img 
                  src={phoneMockup}
                  alt="Mockup do App"
                  className="w-full max-w-sm mx-auto drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Não viva na dúvida. <span className="text-primary">Veja com seus próprios olhos.</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Descubra com quem ele(a) fala quando você não está por perto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Rastreio de Stalkers</h3>
                <p className="text-muted-foreground">
                  👀 Saiba quem está entrando no perfil, mesmo que não seja seguidor. Descubra quem está te espionando.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-danger/20 hover:border-danger/40 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-danger/20 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-danger" />
                </div>
                <h3 className="text-xl font-semibold">Mensagens Deletadas</h3>
                <p className="text-muted-foreground">
                  💬 Veja mensagens, curtidas e seguidores ocultos. Nem mesmo deletar vai esconder de você.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-warning/20 hover:border-warning/40 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-warning/20 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-warning" />
                </div>
                <h3 className="text-xl font-semibold">Alertas em Tempo Real</h3>
                <p className="text-muted-foreground">
                  🔔 Receba alertas no seu celular sobre qualquer atividade nova. Saiba na hora quando algo acontecer.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Quem Deixou de Seguir</h3>
                <p className="text-muted-foreground">
                  💔 Saiba quem são os perfis que deixaram de seguir ou bloquearam. Descubra ex-relacionamentos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-danger/20 hover:border-danger/40 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-danger/20 rounded-lg flex items-center justify-center">
                  <Camera className="h-6 w-6 text-danger" />
                </div>
                <h3 className="text-xl font-semibold">Alertas de Prints</h3>
                <p className="text-muted-foreground">
                  📸 Veja quem tirou prints dos posts, directs ou stories. Nada passa despercebido.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-warning/20 hover:border-warning/40 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-warning/20 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-warning" />
                </div>
                <h3 className="text-xl font-semibold">Interações Ocultas</h3>
                <p className="text-muted-foreground">
                  💝 Saiba todos os posts que ele(a) curtiu, comentou ou salvou. Até as interações mais secretas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/80 backdrop-blur rounded-2xl p-8 border border-cta/20">
              <Shield className="h-16 w-16 text-cta mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                🔒 100% Anônimo e Seguro
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Nenhum app instalado na outra pessoa. Sem rastros. Ninguém saberá que você acessou.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cta mt-1" />
                  <div>
                    <h4 className="font-semibold">Sem Detecção</h4>
                    <p className="text-sm text-muted-foreground">Totalmente invisível</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cta mt-1" />
                  <div>
                    <h4 className="font-semibold">Sem Instalação</h4>
                    <p className="text-sm text-muted-foreground">Funciona pelo navegador</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cta mt-1" />
                  <div>
                    <h4 className="font-semibold">Dados Seguros</h4>
                    <p className="text-sm text-muted-foreground">Criptografado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              O que nossos usuários descobriram
            </h2>
            <p className="text-xl text-muted-foreground">
              Histórias reais de pessoas que descobriram a verdade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-bold">J</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Júlia, SP</h4>
                    <div className="flex text-warning">
                      {"★".repeat(5)}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Descobri que ele trocava mensagens com uma ex. Esse app abriu meus olhos. Agora sei a verdade."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-bold">M</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Marcos, RJ</h4>
                    <div className="flex text-warning">
                      {"★".repeat(5)}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Ela disse que não tinha Instagram, mas estava curtindo fotos de outros caras. Obrigado por me mostrar isso."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ana, MG</h4>
                    <div className="flex text-warning">
                      {"★".repeat(5)}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Finalmente consegui provas do que eu suspeitava. Não precisei mais viver na dúvida."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Pare de sofrer em silêncio
            </h2>
            <p className="text-xl text-muted-foreground">
              A verdade pode doer, mas a dúvida dói mais. Descubra agora e tenha paz de espírito.
            </p>
            
            <div className="space-y-6">
              <Button variant="cta" size="xl" className="text-xl animate-pulse-glow">
                🔍 Descobrir a Verdade Agora
              </Button>
              
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-cta" />
                  <span>Resultado em 5 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-cta" />
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-cta" />
                  <span>Totalmente Anônimo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Eye className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">SpyInsta</span>
            </div>
            <div className="text-sm text-muted-foreground text-center">
              © 2024 SpyInsta. Todos os direitos reservados. Use com responsabilidade.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SpyLanding;