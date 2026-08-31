'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Compass,
  Heart,
  Users,
  CheckCircle2,
  ChevronDown,
  BookOpen,
  Landmark,
  Building2,
  Award,
  Send,
  HelpCircle,
  Calendar,
  Target,
  TrendingUp,
  Globe2,
  Sparkles,
  Phone,
  Palette
} from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  bio: string
  colorTheme: string
  photoUrl: string
}

const team: TeamMember[] = [
  {
    name: 'Thais Jellmayer Martins Gonçalves',
    role: 'Líder · Coordenadora',
    photoUrl: '/team/thais.jpeg',
    bio: 'Gestão geral da iniciativa, monitoramento de cronograma, revisão de entregas e condução de reuniões de alinhamento com a equipe e parceiros institucionais.',
    colorTheme: 'from-[#ff0054] to-[#9e0059]'
  },
  {
    name: 'Guilherme Mateus de Souza',
    role: 'Vice-Líder · Gestor de Parcerias',
    photoUrl: '/team/guilherme.jpeg',
    bio: 'Articulação direta com a Estação Cultural, Secretaria de Cultura e Ensino Médio Integrado. Coleta de demandas e alinhamento com artistas locais.',
    colorTheme: 'from-[#390099] to-[#9e0059]'
  },
  {
    name: 'Gabriel Veloso Ferro de Lima',
    role: 'Dev Back-End',
    photoUrl: '/team/gabriel.jpeg',
    bio: 'Modelagem do banco de dados, desenvolvimento de endpoints de catálogo, filtros de busca, regras de segurança e otimização de infraestrutura.',
    colorTheme: 'from-[#9e0059] to-[#390099]'
  },
  {
    name: 'Pedro Henrique Costa Zanluqui',
    role: 'Dev Front-End',
    photoUrl: '/team/pedro.jpeg',
    bio: 'Criação dos protótipos de alta fidelidade, design de interface responsiva, acessibilidade digital (WCAG) e integração com os serviços de back-end.',
    colorTheme: 'from-[#ff5400] to-[#ff0054]'
  },
  {
    name: 'Jeremias Coutinho de Brito',
    role: 'Documentalista',
    photoUrl: '/team/jeremias.jpeg',
    bio: 'Redação formal de requisitos funcionais/não-funcionais, modelagem de Diagramas de Entidade e Relacionamento (DER) e relatórios de extensão.',
    colorTheme: 'from-[#ffbd00] to-[#ff5400]'
  },
  {
    name: 'Matheus Eduardo de Oliveira',
    role: 'Documentalista',
    photoUrl: '/team/matheus.jpeg',
    bio: 'Estruturação dos relatórios parciais e final de extensão, coleta de evidências visuais e acompanhamento de métricas de impacto comunitário.',
    colorTheme: 'from-[#ff0054] to-[#ffbd00]'
  },
]

const projectPhases = [
  {
    fase: '1. Planejamento',
    periodo: '29/08 a 19/09/2026',
    descricao: 'Levantamento de requisitos, arquitetura técnica do software, modelagem de banco de dados e reuniões de alinhamento com a Estação Cultural.'
  },
  {
    fase: '2. Desenvolvimento',
    periodo: '20/09 a 18/11/2026',
    descricao: 'Construção da plataforma web fullstack (Front-End e Back-End), catálogo digital de obras, design responsivo e testes de usabilidade.'
  },
  {
    fase: '3. Implementação',
    periodo: '07/11 a 30/11/2026',
    descricao: 'Publicação do sistema em produção, capacitação de usuários e apoio para o cadastramento inicial dos artistas e suas obras.'
  },
  {
    fase: '4. Encerramento',
    periodo: '01/12 a 11/12/2026',
    descricao: 'Consolidação dos indicadores de impacto comunitário, apresentação pública dos resultados e entrega do relatório final de extensão.'
  }
]

const faqs = [
  {
    question: 'O que é o projeto Conecta Arte?',
    answer: 'É uma proposta de extensão universitária criada por alunos do curso de Análise e Desenvolvimento de Sistemas (ADS) do IFSP Campus Catanduva. O objetivo é desenvolver uma plataforma digital permanente para expor e divulgar a produção artística local de Catanduva, conectando artistas e comunidade.'
  },
  {
    question: 'Qual problema o projeto se propõe a resolver?',
    answer: 'Em Catanduva, a produção artística de oficinas municipais (como a Estação Cultural) e artistas independentes carece de um espaço contínuo de divulgação. As mostras físicas são pontuais e anuais (como a MOARC). O Conecta Arte quebra barreiras geográficas e temporais, tornando o acervo acessível 24h.'
  },
  {
    question: 'O projeto cobra alguma taxa de intermediação ou vendas?',
    answer: 'Não. O Conecta Arte é um projeto acadêmico público, gratuito e sem fins lucrativos. Ele facilita o contato direto entre interessados e artistas, fomentando a economia criativa sem intermediar financeiramente as transações.'
  },
  {
    question: 'Como o projeto se alinha ao curso de ADS?',
    answer: 'O projeto contempla todo o ciclo de desenvolvimento de software: levantamento de requisitos, modelagem de banco de dados (DER), prototipação de interface (UI/UX), implementação Front-End e Back-End com foco em acessibilidade e testes, integrando diversas disciplinas da matriz curricular.'
  },
  {
    question: 'Quais são as instituições e parceiros envolvidos?',
    answer: 'O projeto é desenvolvido no IFSP Campus Catanduva (disciplina CTDEXTE 2026.2), sob orientação do Prof. Kleber Sartorio, com parcerias previstas com a Estação Cultural, Secretaria Municipal de Cultura de Catanduva, coletivos culturais e Boss Tecnologia.'
  }
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const [contactSuccess, setContactSuccess] = useState<boolean>(false)
  const [contactForm, setContactForm] = useState({
    nome: '',
    assunto: 'Dúvida sobre o projeto',
    mensagem: ''
  })

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const textoFormatado = encodeURIComponent(
      `Olá, equipe do Conecta Arte!\n\n*Nome:* ${contactForm.nome}\n*Assunto:* ${contactForm.assunto}\n*Mensagem:* ${contactForm.mensagem}`
    )
    
    window.open(`https://wa.me/5516996380740?text=${textoFormatado}`, '_blank')

    setContactSuccess(true)
    setTimeout(() => {
      setContactSuccess(false)
      setContactForm({ nome: '', assunto: 'Dúvida sobre o projeto', mensagem: '' })
    }, 3000)
  }

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/95 backdrop-blur-md transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 lg:px-10">
          <a href="#inicio" className="flex items-center group py-0.5" aria-label="Conecta Arte, início">
            <img
              src="/logo.png"
              alt="Logo Conecta Arte"
              className="h-8 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex" aria-label="Navegação principal">
            <a href="#projeto" className="transition-colors hover:text-brand-pink">O Projeto</a>
            <a href="#ods" className="transition-colors hover:text-brand-pink">ODS</a>
            <a href="#cronograma" className="transition-colors hover:text-brand-pink">Cronograma</a>
            <a href="#equipe" className="transition-colors hover:text-brand-pink">Equipe</a>
            <a href="#contato" className="transition-colors hover:text-brand-pink">Contato</a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contato"
              className="inline-flex items-center gap-1.5 rounded-full gradient-conecta px-4 py-2 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:opacity-95 hover:shadow-md hover:-translate-y-0.5"
            >
              Fale Conosco
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          <button
            className="rounded-full p-2 text-brand-purple hover:bg-secondary active:scale-95 transition-transform lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-3 border-t border-border bg-background px-5 py-4 text-sm font-semibold lg:hidden shadow-xl animate-in slide-in-from-top duration-200">
            <a href="#projeto" className="text-brand-purple hover:text-brand-pink py-1" onClick={() => setMenuOpen(false)}>O Projeto</a>
            <a href="#ods" className="text-brand-purple hover:text-brand-pink py-1" onClick={() => setMenuOpen(false)}>ODS</a>
            <a href="#cronograma" className="text-brand-purple hover:text-brand-pink py-1" onClick={() => setMenuOpen(false)}>Cronograma</a>
            <a href="#equipe" className="text-brand-purple hover:text-brand-pink py-1" onClick={() => setMenuOpen(false)}>Equipe</a>
            <a href="#contato" className="text-brand-purple hover:text-brand-pink py-1" onClick={() => setMenuOpen(false)}>Contato</a>
          </nav>
        )}
      </header>

      <section id="inicio" className="relative w-full overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-28">
        <div className="pointer-events-none absolute -top-32 right-0 -z-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-brand-pink/15 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -left-20 -z-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-brand-purple/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10 lg:gap-14">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-purple/20 bg-secondary/80 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold text-brand-purple mb-4 sm:mb-6 shadow-sm">
              <img
                src="/icone-site.png"
                alt="Pincel Conecta Arte"
                className="size-4 object-contain shrink-0"
              />
              Proposta de Extensão · CTDEXTE 2026.2
            </div>

            <h1 className="font-serif text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[4.2rem] break-words">
              ConectaArte: aproximando <span className="gradient-text-conecta">artistas locais</span> e comunidade.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
              Um projeto acadêmico de desenvolvimento de software do <strong>IFSP Campus Catanduva</strong>, focado em democratizar o acesso à cultura e valorizar a produção de artes plásticas do município em uma vitrine digital permanente.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#projeto"
                className="inline-flex items-center justify-center gap-2 rounded-full gradient-conecta px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-brand-pink/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-pink/40 hover:-translate-y-0.5"
              >
                <BookOpen className="size-4" />
                Conhecer a Proposta
                <ArrowUpRight className="size-4" />
              </a>

              <a
                href="#equipe"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-purple/25 bg-white/80 px-5 py-3 text-xs sm:text-sm font-bold text-brand-purple transition-all duration-200 hover:border-brand-pink hover:text-brand-pink hover:bg-white hover:shadow-md"
              >
                <Users className="size-4 text-brand-pink" />
                Conheça a Equipe
              </a>
            </div>

            <div className="mt-8 grid w-full grid-cols-3 gap-2 sm:gap-4 border-t border-border/80 pt-5">
              <div className="flex items-center gap-2">
                <div className="grid size-7 place-items-center rounded-lg bg-brand-pink/10 text-brand-pink shrink-0">
                  <Landmark className="size-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-foreground">IFSP Catanduva</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="grid size-7 place-items-center rounded-lg bg-brand-orange/10 text-brand-orange shrink-0">
                  <Globe2 className="size-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-foreground">ODS 8 e ODS 11</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="grid size-7 place-items-center rounded-lg bg-brand-purple/10 text-brand-purple shrink-0">
                  <Building2 className="size-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-foreground">Estação Cultural</span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg lg:ml-auto mt-4 lg:mt-0">
            <div className="art-frame-premium">
              <img
                src="/conecta-arte-hero.png"
                alt="Arte e cultura de Catanduva"
                className="w-full aspect-[4/5] object-cover filter saturate-110"
              />
              <div className="art-watermark-overlay" />
            </div>

            <div className="art-stamp animate-float-slow">
              CA
              <small>2026</small>
            </div>

            <div className="relative mt-4 sm:absolute sm:-bottom-4 sm:-left-4 rounded-2xl glass-card p-3.5 sm:p-4 shadow-lg border border-white/80 max-w-full sm:max-w-[240px]">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-brand-pink animate-ping" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-purple">Fase Atual</span>
              </div>
              <p className="mt-0.5 font-serif text-xs sm:text-sm font-semibold text-foreground">
                Fase 1 — Planejamento
              </p>
              <p className="text-[9px] sm:text-[10px] text-muted-foreground">IFSP Catanduva · 2026.2</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projeto" className="py-14 sm:py-20 lg:py-28 border-t border-border/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
            <div>
              <span className="eyebrow mb-3">
                <Compass className="size-3.5 sm:size-4" />
                Diagnóstico & Justificativa
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-purple">
                A necessidade de uma <span className="gradient-text-conecta">vitrine contínua</span> em Catanduva.
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Em Catanduva (SP), a produção artística local promovida por entidades municipais, como a Estação Cultural, carece de um espaço permanente para exibição e valorização.
              </p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Atualmente, a exposição dessas obras restringe-se a eventos presenciais efêmeros, como a <strong>Mostra de Artes Plásticas de Catanduva (MOARC)</strong>. O projeto Conecta Arte cria um ambiente digital contínuo, democratizando o acesso e fomentando a economia criativa.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
              <div className="rounded-2xl sm:rounded-3xl glass-card p-5 sm:p-7 shadow-sm transition-all hover:shadow-md border-t-4 border-t-brand-purple">
                <div className="inline-grid size-10 sm:size-12 place-items-center rounded-xl sm:rounded-2xl bg-brand-purple/10 text-brand-purple mb-4">
                  <Landmark className="size-5 sm:size-6" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">Acesso Democrático 24h</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Transforma o acervo de artes plásticas em um catálogo digital acessível a qualquer momento pela população.
                </p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl glass-card p-5 sm:p-7 shadow-sm transition-all hover:shadow-md border-t-4 border-t-brand-pink">
                <div className="inline-grid size-10 sm:size-12 place-items-center rounded-xl sm:rounded-2xl bg-brand-pink/10 text-brand-pink mb-4">
                  <Heart className="size-5 sm:size-6" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">Economia Criativa Direta</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Conexão direta entre cidadãos e artistas para aquisições e encomendas, sem taxas ou intermediários financeiros.
                </p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl glass-card p-5 sm:p-7 shadow-sm transition-all hover:shadow-md border-t-4 border-t-brand-orange">
                <div className="inline-grid size-10 sm:size-12 place-items-center rounded-xl sm:rounded-2xl bg-brand-orange/10 text-brand-orange mb-4">
                  <Users className="size-5 sm:size-6" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">Inclusão Digital Real</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Apoio para cadastramento de alunos e artistas idosos ou com pouca familiaridade tecnológica.
                </p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl glass-card p-5 sm:p-7 shadow-sm transition-all hover:shadow-md border-t-4 border-t-brand-yellow">
                <div className="inline-grid size-10 sm:size-12 place-items-center rounded-xl sm:rounded-2xl bg-brand-yellow/20 text-brand-orange mb-4">
                  <BookOpen className="size-5 sm:size-6" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">Prática Acadêmica de ADS</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Integração de disciplinas: Engenharia de Software, Banco de Dados, UI/UX, Acessibilidade e Desenvolvimento Web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="objetivos" className="py-14 sm:py-20 lg:py-28 bg-secondary/40 border-y border-border/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="eyebrow justify-center mb-2 sm:mb-3">
              <Target className="size-3.5 sm:size-4 text-brand-orange" />
              Metas do Projeto
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-purple">
              Objetivos Gerais e <span className="gradient-text-conecta">Específicos</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm sm:text-base text-muted-foreground">
              Diretrizes formais estabelecidas na Fase 1 de submissão do projeto de extensão.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 shadow-sm border border-border flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-xl bg-brand-purple/10 px-3 py-1 font-mono text-[11px] font-bold text-brand-purple mb-3">
                  Objetivo 1
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-foreground">
                  Website Funcional & Responsivo
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Desenvolver e disponibilizar um site web responsivo e acessível para a divulgação dos artistas locais e suas produções.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-border flex items-center gap-2 text-xs font-bold text-brand-purple">
                <CheckCircle2 className="size-4 text-brand-pink shrink-0" />
                Entrega Web Fullstack
              </div>
            </div>

            <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 shadow-sm border border-border flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-xl bg-brand-pink/10 px-3 py-1 font-mono text-[11px] font-bold text-brand-pink mb-3">
                  Objetivo 2
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-foreground">
                  Meta de 10 Artistas e 20 Obras
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Cadastrar no mínimo 10 artistas e 20 obras na plataforma (atingindo 25% do contingente da 12ª MOARC de Catanduva).
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-border flex items-center gap-2 text-xs font-bold text-brand-pink">
                <CheckCircle2 className="size-4 text-brand-pink shrink-0" />
                Acervo Inicial Validado
              </div>
            </div>

            <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 shadow-sm border border-border flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-xl bg-brand-orange/10 px-3 py-1 font-mono text-[11px] font-bold text-brand-orange mb-3">
                  Objetivo 3
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-foreground">
                  Perfis de Artistas e Contato
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Disponibilizar perfis com biografia, tempo de atuação, fotos de obras e canais de contato autorizados pelo criador.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-border flex items-center gap-2 text-xs font-bold text-brand-orange">
                <CheckCircle2 className="size-4 text-brand-orange shrink-0" />
                Autonomia ao Criador
              </div>
            </div>

            <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 shadow-sm border border-border flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-xl bg-brand-yellow/20 px-3 py-1 font-mono text-[11px] font-bold text-brand-purple mb-3">
                  Objetivo 4
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-foreground">
                  Sinalização de Disponibilidade
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Permitir a sinalização de obras disponíveis para compra ou apreciação, sem qualquer intermediação financeira no sistema.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-border flex items-center gap-2 text-xs font-bold text-brand-purple">
                <CheckCircle2 className="size-4 text-brand-yellow shrink-0" />
                Sem Taxas de Terceiros
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ods" className="py-14 sm:py-20 lg:py-28 bg-white border-b border-border/70 cursor-default">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 cursor-default">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 cursor-default">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-purple/20 bg-secondary/80 px-3.5 py-1 text-[11px] sm:text-xs font-bold text-brand-purple mb-3 shadow-xs cursor-default">
              <Globe2 className="size-3.5 text-brand-orange" />
              Compromisso Agenda 2030 · ONU
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-purple cursor-default">
              Alinhamento com os <span className="gradient-text-conecta">Objetivos Sustentáveis</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm sm:text-base text-muted-foreground leading-relaxed cursor-default">
              O projeto Conecta Arte integra extensão universitária com a Agenda 2030, gerando impacto cultural e socioeconômico direto em Catanduva.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 cursor-default">
            <div className="flex flex-col justify-between rounded-3xl bg-secondary/40 p-6 sm:p-8 lg:p-10 border-2 border-brand-pink/40 shadow-sm cursor-default">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 cursor-default">
                  <div className="flex items-center justify-center size-16 rounded-2xl bg-[#A21942] text-white shadow-md shrink-0 cursor-default">
                    <div className="text-center">
                      <span className="block text-[10px] font-black uppercase tracking-wider leading-none">ODS</span>
                      <span className="block text-2xl font-black leading-none mt-0.5">8</span>
                    </div>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#A21942]">
                      <TrendingUp className="size-3.5" />
                      Trabalho Decente & Crescimento Econômico
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground leading-tight mt-1">
                      Fomento à Economia Criativa Local
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Oferece aos artistas e artesãos de Catanduva uma vitrine de alcance ampliado no ambiente digital, superando barreiras físicas e gerando oportunidades autônomas de divulgação e contato direto com interessados.
                </p>

                <div className="mt-6 space-y-3 pt-5 border-t border-border">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#A21942] shrink-0 mt-0.5" />
                    <p className="text-xs font-medium text-foreground/90">
                      <strong>Divulgação sem intermediários:</strong> Conexão direta entre comunidade e criador, sem taxas abusivas de plataformas comerciais.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#A21942] shrink-0 mt-0.5" />
                    <p className="text-xs font-medium text-foreground/90">
                      <strong>Protagonismo ao artista:</strong> Valorização do trabalho manual, de alunos de oficinas e de produtores culturais independentes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#A21942] uppercase tracking-wide">
                  Impacto Socioeconômico
                </span>
                <span className="rounded-full bg-[#A21942]/10 px-3 py-1 text-[10px] font-extrabold text-[#A21942]">
                  Inclusão Produtiva
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl bg-secondary/40 p-6 sm:p-8 lg:p-10 border-2 border-brand-orange/40 shadow-sm cursor-default">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 cursor-default">
                  <div className="flex items-center justify-center size-16 rounded-2xl bg-[#FD6925] text-white shadow-md shrink-0 cursor-default">
                    <div className="text-center">
                      <span className="block text-[10px] font-black uppercase tracking-wider leading-none">ODS</span>
                      <span className="block text-2xl font-black leading-none mt-0.5">11</span>
                    </div>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#FD6925]">
                      <Building2 className="size-3.5" />
                      Cidades & Comunidades Sustentáveis
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground leading-tight mt-1">
                      Preservação da Identidade e Cultura
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Fortalece a identidade cultural de Catanduva, democratizando o acesso contínuo às artes plásticas e garantindo que o acervo das oficinas municipais permaneça vivo e acessível além das mostras pontuais.
                </p>

                <div className="mt-6 space-y-3 pt-5 border-t border-border">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#FD6925] shrink-0 mt-0.5" />
                    <p className="text-xs font-medium text-foreground/90">
                      <strong>Democratização do acesso:</strong> Acervo artístico municipal disponível 24 horas por dia, 100% público e gratuito.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#FD6925] shrink-0 mt-0.5" />
                    <p className="text-xs font-medium text-foreground/90">
                      <strong>Integração com a cidade:</strong> Estreitamento dos laços entre munícipes, Estação Cultural e IFSP Campus Catanduva.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#FD6925] uppercase tracking-wide">
                  Patrimônio & Sociedade
                </span>
                <span className="rounded-full bg-[#FD6925]/10 px-3 py-1 text-[10px] font-extrabold text-[#FD6925]">
                  Cultura Acessível
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-border">
            <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 sm:mb-8">
              Ecossistema e Parceiros da Proposta
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 text-center">
              <div className="rounded-2xl bg-secondary/50 p-4 border border-border flex flex-col items-center justify-center">
                <Landmark className="size-5 sm:size-6 text-brand-purple mb-1.5" />
                <span className="text-xs font-bold text-foreground">IFSP Catanduva</span>
                <span className="text-[9px] sm:text-[10px] text-muted-foreground">Campus Universitário</span>
              </div>
              <div className="rounded-2xl bg-secondary/50 p-4 border border-border flex flex-col items-center justify-center">
                <Building2 className="size-5 sm:size-6 text-brand-pink mb-1.5" />
                <span className="text-xs font-bold text-foreground">Estação Cultural</span>
                <span className="text-[9px] sm:text-[10px] text-muted-foreground">Oficinas Municipais</span>
              </div>
              <div className="rounded-2xl bg-secondary/50 p-4 border border-border flex flex-col items-center justify-center">
                <Award className="size-5 sm:size-6 text-brand-orange mb-1.5" />
                <span className="text-xs font-bold text-foreground">Sec. de Cultura</span>
                <span className="text-[9px] sm:text-[10px] text-muted-foreground">Prefeitura Municipal</span>
              </div>
              <div className="rounded-2xl bg-secondary/50 p-4 border border-border flex flex-col items-center justify-center">
                <Users className="size-5 sm:size-6 text-brand-purple mb-1.5" />
                <span className="text-xs font-bold text-foreground">Artistas Locais</span>
                <span className="text-[9px] sm:text-[10px] text-muted-foreground">Coletivos Culturais</span>
              </div>
              <div className="rounded-2xl bg-secondary/50 p-4 border border-border flex flex-col items-center justify-center col-span-2 sm:col-span-1">
                <img
                  src="/boss.png"
                  alt="Logo Boss Tecnologia"
                  className="h-6 sm:h-7 w-auto object-contain mb-1.5"
                />
                <span className="text-xs font-bold text-foreground">Boss Tecnologia</span>
                <span className="text-[9px] sm:text-[10px] text-muted-foreground">Recursos & Domínio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cronograma" className="py-14 sm:py-20 lg:py-28 bg-secondary/40 border-y border-border/70">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="eyebrow justify-center mb-2 sm:mb-3">
              <Calendar className="size-3.5 sm:size-4 text-brand-orange" />
              Linha do Tempo
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold tracking-tight text-brand-purple">
              Etapas do Projeto
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            {projectPhases.map((phase) => (
              <div
                key={phase.fase}
                className="cronograma-beam-card group"
              >
                <div className="cronograma-beam-inner p-5 sm:p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-3">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-brand-purple group-hover:text-brand-pink transition-colors">
                        {phase.fase}
                      </h3>
                      <span className="rounded-full bg-brand-pink/10 px-3 py-1 text-xs font-bold text-brand-pink shrink-0">
                        {phase.periodo}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {phase.descricao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipe" className="py-14 sm:py-20 lg:py-28 bg-[#180928] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-brand-pink/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-brand-purple/40 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-3xl mb-10 sm:mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#ffbd00] mb-2 sm:mb-3">
              <Users className="size-3.5 sm:size-4" />
              Equipe do Projeto
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Quem faz <span className="gradient-fire-text">acontecer</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm sm:text-base text-white/75 leading-relaxed">
              Estudantes do curso superior de <strong>Análise e Desenvolvimento de Sistemas (ADS)</strong> do <strong>IFSP Campus Catanduva</strong>, unindo desenvolvimento de software e impacto comunitário real.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl sm:rounded-3xl glass-dark-card p-5 sm:p-7 transition-all duration-300 hover:border-brand-pink/60 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 sm:gap-4 mb-4 sm:mb-5">
                    <div className="relative size-14 sm:size-16 rounded-2xl p-0.5 bg-gradient-to-br from-brand-pink via-brand-orange to-brand-yellow shadow-md shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                      <img
                        src={member.photoUrl}
                        alt={`Foto de ${member.name}`}
                        className="w-full h-full object-cover rounded-[14px] bg-[#180928]"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-white leading-tight truncate">
                        {member.name}
                      </h3>
                      <span className="inline-block mt-1 text-[11px] sm:text-xs font-bold text-[#ffbd00] truncate max-w-full">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-[#ffbd00]/30 bg-gradient-to-r from-white/5 to-white/10 p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="grid size-12 sm:size-14 place-items-center rounded-2xl bg-[#ffbd00] text-brand-purple font-serif text-xl sm:text-2xl font-black shrink-0">
                KS
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#ffbd00]">
                  Docente Orientador · IFSP Catanduva
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Prof. Kleber Sartorio
                </h4>
                <p className="text-xs text-white/70">
                  Disciplina CTDEXTE 2026.2 — Introdução à Extensão Universitária
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right sm:border-l sm:border-white/15 sm:pl-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-white/10">
              <span className="text-xs font-semibold text-white/60 block">Instituto Federal de São Paulo</span>
              <span className="text-xs font-bold text-[#ff5400]">Campus Catanduva</span>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-14 sm:py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-16">
            <span className="eyebrow justify-center mb-2 sm:mb-3">
              <HelpCircle className="size-3.5 sm:size-4" />
              Dúvidas Sobre a Proposta
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-purple">
              Perguntas Frequentes
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
              Tudo sobre os objetivos, metodologia acadêmica e parcerias do Conecta Arte.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx
              return (
                <div
                  key={idx}
                  className="rounded-xl sm:rounded-2xl border border-border bg-secondary/30 transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-6 text-left font-serif text-base sm:text-lg font-bold text-brand-purple hover:text-brand-pink transition-colors"
                  >
                    <span className="pr-2">{faq.question}</span>
                    <ChevronDown
                      className={`size-4 sm:size-5 text-brand-pink transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm leading-relaxed text-muted-foreground border-t border-border/60 pt-3 sm:pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="contato" className="py-14 sm:py-20 lg:py-28 bg-secondary/40 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">
            <div>
              <span className="eyebrow mb-2 sm:mb-3">
                <Mail className="size-3.5 sm:size-4" />
                Fale com a Equipe
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-purple">
                Vamos conversar sobre o <span className="gradient-text-conecta">projeto</span>.
              </h2>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm sm:text-base text-muted-foreground leading-relaxed">
                Tem dúvidas sobre a proposta de extensão ou deseja sugerir parcerias? Envie uma mensagem direta para a coordenação!
              </p>

              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                <a
                  href="https://wa.me/5516996380740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 rounded-2xl bg-white p-3.5 sm:p-4 border border-border shadow-xs hover:border-green-500 hover:shadow-sm transition-all"
                >
                  <div className="grid size-10 sm:size-12 place-items-center rounded-xl bg-green-100 text-green-700 shrink-0">
                    <Phone className="size-4 sm:size-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground">WhatsApp do Projeto</span>
                    <p className="font-semibold text-foreground text-xs sm:text-sm truncate">(16) 99638-0740</p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 rounded-2xl bg-white p-3.5 sm:p-4 border border-border shadow-xs">
                  <div className="grid size-10 sm:size-12 place-items-center rounded-xl bg-brand-purple/10 text-brand-purple shrink-0">
                    <Building2 className="size-4 sm:size-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Local de Desenvolvimento</span>
                    <p className="font-semibold text-brand-purple text-xs sm:text-sm">IFSP Campus Catanduva · Laboratório ADS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-xl border border-brand-purple/15 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 gradient-conecta" />
              
              <div className="flex items-center justify-between gap-2 mb-5 pb-3 border-b border-border/80">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-purple">
                  Mensagem Direta
                </h3>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-bold text-green-700 border border-green-200">
                  <span className="size-2 rounded-full bg-green-500 animate-pulse" />
                  WhatsApp
                </div>
              </div>

              {contactSuccess ? (
                <div className="rounded-2xl bg-green-50 p-6 text-center border border-green-200 animate-in zoom-in-95 duration-300">
                  <CheckCircle2 className="mx-auto size-10 text-green-600 mb-2" />
                  <h4 className="font-bold text-green-900 text-base">Abrindo WhatsApp...</h4>
                  <p className="text-xs text-green-700 mt-1">
                    Redirecionando para (16) 99638-0740
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-foreground uppercase tracking-wider mb-1">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome completo"
                      value={contactForm.nome}
                      onChange={(e) => setContactForm({ ...contactForm, nome: e.target.value })}
                      className="w-full rounded-xl border border-border bg-secondary/30 px-3.5 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-pink focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-foreground uppercase tracking-wider mb-1">
                      Assunto
                    </label>
                    <select
                      value={contactForm.assunto}
                      onChange={(e) => setContactForm({ ...contactForm, assunto: e.target.value })}
                      className="w-full rounded-xl border border-border bg-secondary/30 px-3.5 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-pink focus:bg-white focus:outline-none transition-all"
                    >
                      <option value="Dúvida sobre o projeto">Dúvida Geral</option>
                      <option value="Parceria Institucional">Parceria / Apoio</option>
                      <option value="Cadastro de Artista">Cadastro de Artista</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-foreground uppercase tracking-wider mb-1">
                      Mensagem
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Escreva sua mensagem..."
                      value={contactForm.mensagem}
                      onChange={(e) => setContactForm({ ...contactForm, mensagem: e.target.value })}
                      className="w-full rounded-xl border border-border bg-secondary/30 px-3.5 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-pink focus:bg-white focus:outline-none resize-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full gradient-conecta py-3 px-5 text-xs sm:text-sm font-bold text-white shadow-md shadow-brand-pink/30 hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="size-4" />
                    Enviar via WhatsApp
                  </button>
                  <p className="text-center text-[11px] text-muted-foreground pt-2">
                    Ao clicar, o WhatsApp será aberto com o texto formatado para o número <strong>(16) 99638-0740</strong>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#180928] text-white border-t border-white/10 pt-12 pb-8 sm:pt-16 sm:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 pb-8 sm:pb-12 border-b border-white/10">
            <div className="sm:col-span-2">
              <div className="flex items-center">
                <div className="rounded-xl bg-white/95 px-3 py-1.5 shadow-sm inline-block">
                  <img
                    src="/logo.png"
                    alt="Logo Conecta Arte"
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/70 max-w-sm">
                Proposta de Extensão Universitária do curso de Análise e Desenvolvimento de Sistemas (ADS) — IFSP Campus Catanduva (CTDEXTE 2026.2).
              </p>
              <div className="mt-3 flex items-center gap-2 text-[11px] font-bold text-[#ffbd00]">
                <span>ODS 8 & ODS 11</span> · <span>Catanduva, SP</span>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3">Navegação</h4>
              <ul className="space-y-2 text-xs text-white/70">
                <li><a href="#inicio" className="hover:text-brand-pink transition-colors">Início</a></li>
                <li><a href="#projeto" className="hover:text-brand-pink transition-colors">Diagnóstico & Problema</a></li>
                <li><a href="#objetivos" className="hover:text-brand-pink transition-colors">Objetivos & Metas</a></li>
                <li><a href="#ods" className="hover:text-brand-pink transition-colors">Impacto Social (ODS)</a></li>
                <li><a href="#cronograma" className="hover:text-brand-pink transition-colors">Cronograma</a></li>
                <li><a href="#equipe" className="hover:text-brand-pink transition-colors">Equipe ADS</a></li>
                <li><a href="#faq" className="hover:text-brand-pink transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3">Parceiros</h4>
              <ul className="space-y-2 text-xs text-white/70">
                <li>IFSP Campus Catanduva</li>
                <li>Estação Cultural Catanduva</li>
                <li>Secretaria Municipal de Cultura</li>
                <li>Coletivos Artísticos</li>
                <li>Boss Tecnologia</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/50 text-center sm:text-left">
            <p>© 2026 Conecta Arte — Projeto de Extensão ADS · IFSP Catanduva.</p>
            <a href="#inicio" className="text-white hover:text-brand-pink transition-colors">Voltar ao Topo ↑</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
