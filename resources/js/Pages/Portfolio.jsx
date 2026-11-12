import React, { useState, useRef, useEffect } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import {
    Globe,
    Download,
    Mail,
    MessageSquare,
    CheckCircle2,
    MapPin,
    Send,
    X,
    ExternalLink,
    Eye,
    FolderGit2,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

function LinkedinIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
    );
}

function GithubIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
    );
}

/* Official Tech Stack SVG Map (from /public/stacks/*.svg) */
const STACK_ICON_MAP = {
    'React.js': '/stacks/react.svg',
    React: '/stacks/react.svg',
    'React Native': '/stacks/react.svg',
    TypeScript: '/stacks/typescript.svg',
    JavaScript: '/stacks/javascript.svg',
    'Node.js': '/stacks/nodejs.svg',
    NodeJS: '/stacks/nodejs.svg',
    PHP: '/stacks/php.svg',
    Laravel: '/stacks/laravel.svg',
    'Lumen / Laravel': '/stacks/laravel.svg',
    'Laravel (PHP)': '/stacks/laravel.svg',
    Python: '/stacks/python.svg',
    'Python 3': '/stacks/python.svg',
    Django: '/stacks/django.svg',
    'C#': '/stacks/csharp.svg',
    '.NET Core': '/stacks/dotnetcore.svg',
    'ASP.NET MVC': '/stacks/dotnetcore.svg',
    Flutter: '/stacks/flutter.svg',
    Angular: '/stacks/angular.svg',
    HTML5: '/stacks/html5.svg',
    CSS3: '/stacks/css3.svg',
    'HTML5 & CSS3': '/stacks/html5.svg',
    'Tailwind CSS': '/stacks/tailwindcss.svg',
    PostgreSQL: '/stacks/postgresql.svg',
    MySQL: '/stacks/mysql.svg',
    SQL: '/stacks/mysql.svg',
    Docker: '/stacks/docker.svg',
    AWS: '/stacks/aws.svg',
    Git: '/stacks/git.svg',
    Figma: '/stacks/figma.svg',
    'UI/UX Design': '/stacks/figma.svg',
};

const ALL_STACKS = [
    { name: 'React.js', sub: 'Front-End & SPA', icon: '/stacks/react.svg' },
    { name: 'React Native', sub: 'Mobile iOS/Android', icon: '/stacks/react.svg' },
    { name: 'Flutter', sub: 'Cross-Platform', icon: '/stacks/flutter.svg' },
    { name: 'Angular', sub: 'Enterprise UI', icon: '/stacks/angular.svg' },
    { name: 'TypeScript', sub: 'Tipagem Forte', icon: '/stacks/typescript.svg' },
    { name: 'JavaScript', sub: 'ES6+ / Web', icon: '/stacks/javascript.svg' },
    { name: 'PHP', sub: 'Back-End Web', icon: '/stacks/php.svg' },
    { name: 'Laravel & Lumen', sub: 'APIs & Inertia', icon: '/stacks/laravel.svg' },
    { name: 'Node.js', sub: 'Microsserviços', icon: '/stacks/nodejs.svg' },
    { name: '.NET Core', sub: 'ASP.NET MVC', icon: '/stacks/dotnetcore.svg' },
    { name: 'C#', sub: 'Back-End Enterprise', icon: '/stacks/csharp.svg' },
    { name: 'Python', sub: 'IA & Automação', icon: '/stacks/python.svg' },
    { name: 'Django', sub: 'REST Framework', icon: '/stacks/django.svg' },
    { name: 'HTML5', sub: 'Semântica Web', icon: '/stacks/html5.svg' },
    { name: 'CSS3', sub: 'Animações & UI', icon: '/stacks/css3.svg' },
    { name: 'MySQL & SQL', sub: 'Dados Relacionais', icon: '/stacks/mysql.svg' },
    { name: 'Docker', sub: 'Containers', icon: '/stacks/docker.svg' },
    { name: 'Figma & UI/UX', sub: 'Prototipação', icon: '/stacks/figma.svg' },
];

function StackChip({ tech, size = 'sm' }) {
    const iconUrl = STACK_ICON_MAP[tech];
    const paddingClass = size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs';
    return (
        <span
            className={`inline-flex items-center gap-1.5 font-mono font-semibold text-[#253238] bg-[#f5f7f8] rounded-lg border border-[#cfd8dc] ${paddingClass}`}
        >
            {iconUrl && (
                <img
                    src={iconUrl}
                    alt=""
                    width={14}
                    height={14}
                    loading="lazy"
                    className="w-3.5 h-3.5 object-contain shrink-0"
                />
            )}
            <span>{tech}</span>
        </span>
    );
}

/* Visual Preview Component supporting Real Screenshots from rafaelgcs repository + System Previews */
function ProjectVisualPreview({ project }) {
    if (project.imageUrl) {
        return (
            <div className="h-56 sm:h-64 rounded-2xl bg-[#eceff1] border border-[#cfd8dc] shadow-inner overflow-hidden flex flex-col justify-between group relative">
                {/* Browser Window Top Bar */}
                <div className="bg-white/95 border-b border-[#cfd8dc] px-3 py-1.5 flex items-center justify-between gap-2 shrink-0">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="font-mono text-[10px] text-[#455055] truncate max-w-[180px] bg-[#f5f7f8] px-2 py-0.5 rounded border border-[#dfe5e8]">
                        {project.domainLabel || 'rafaelgcs.com.br'}
                    </span>
                    <span className="text-[9px] font-mono font-bold text-[#253238] bg-[#eceff1] px-1.5 py-0.5 rounded">
                        REAL
                    </span>
                </div>

                {/* Actual Screenshot from Rafael's GitHub Portfolio */}
                <div className="relative flex-1 overflow-hidden bg-[#253238]">
                    <img
                        src={project.imageUrl}
                        alt={`Captura de tela do projeto ${project.title}`}
                        width={640}
                        height={360}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>
        );
    }

    if (project.visualType === 'propostas-system') {
        return (
            <div className="h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-[#eceff1] via-white to-[#f5f7f8] p-4 flex flex-col justify-between border border-[#cfd8dc] shadow-inner relative overflow-hidden">
                <div className="flex items-center justify-between bg-white px-3 py-1.5 rounded-xl border border-[#cfd8dc]">
                    <span className="text-[11px] font-mono font-bold text-[#253238]">
                        propostas.rafaelgcs.com
                    </span>
                    <div className="flex items-center gap-1">
                        <img src="/stacks/react.svg" alt="" width={14} height={14} loading="lazy" className="w-3.5 h-3.5" />
                        <img src="/stacks/laravel.svg" alt="" width={14} height={14} loading="lazy" className="w-3.5 h-3.5" />
                    </div>
                </div>

                <div className="bg-white border border-[#cfd8dc] rounded-2xl p-3.5 shadow-2xs space-y-2 my-auto">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-[#253238]">
                            📄 Portal & API de Propostas
                        </span>
                        <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                            JWT Auth
                        </span>
                    </div>
                    <p className="text-[11px] text-[#455055] leading-relaxed">
                        Front-end em React + Material UI consumindo API REST em PHP (Lumen/Laravel) com validação por código de cliente e painel admin.
                    </p>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#455055] px-1">
                    <span>github.com/rafaelgcs</span>
                    <span>React + Lumen API</span>
                </div>
            </div>
        );
    }

    if (project.visualType === 'whatsapp-ai') {
        return (
            <div className="h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-[#eceff1] via-[#f5f7f8] to-emerald-50/70 p-4 flex flex-col justify-between border border-[#cfd8dc] shadow-inner relative overflow-hidden">
                <div className="flex items-center justify-between bg-white/95 px-3 py-1.5 rounded-xl border border-[#cfd8dc] shadow-2xs">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                        <span className="text-xs font-bold text-[#253238]">IA & IBM Maximo</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src="/stacks/python.svg" alt="" width={14} height={14} loading="lazy" className="w-3.5 h-3.5" />
                        <img src="/stacks/django.svg" alt="" width={14} height={14} loading="lazy" className="w-3.5 h-3.5" />
                    </div>
                </div>

                <div className="space-y-2 my-auto py-1">
                    <div className="bg-white border border-[#cfd8dc] rounded-2xl rounded-tl-xs px-3 py-1.5 text-[11px] text-[#253238] max-w-[85%] shadow-2xs">
                        Consultar status da Ordem #4821 no IBM Maximo.
                    </div>
                    <div className="bg-[#253238] text-white rounded-2xl rounded-tr-xs px-3 py-2 text-[11px] ml-auto max-w-[90%] shadow-sm">
                        <span className="font-semibold block text-[10px] text-emerald-300 mb-0.5">
                            ⚡ Gemini + Vertex AI • 0.8s
                        </span>
                        OS #4821 localizada e sincronizada via API REST Django!
                    </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#455055] px-1">
                    <span>Python + Django + React</span>
                    <span>AlmaViva Solutions</span>
                </div>
            </div>
        );
    }

    return (
        <div className="h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-[#eceff1] via-[#f5f7f8] to-white p-4 flex flex-col justify-between border border-[#cfd8dc] shadow-inner relative overflow-hidden">
            <div className="flex items-center justify-between bg-white/95 px-3 py-1.5 rounded-xl border border-[#cfd8dc]">
                <span className="text-[11px] font-mono font-bold text-[#253238]">
                    Enterprise & Mobile
                </span>
                <div className="flex items-center gap-1.5">
                    <img src="/stacks/dotnetcore.svg" alt="" width={14} height={14} loading="lazy" className="w-3.5 h-3.5" />
                    <img src="/stacks/flutter.svg" alt="" width={14} height={14} loading="lazy" className="w-3.5 h-3.5" />
                    <img src="/stacks/react.svg" alt="" width={14} height={14} loading="lazy" className="w-3.5 h-3.5" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 my-auto">
                <div className="bg-white p-3 rounded-xl border border-[#cfd8dc] shadow-2xs space-y-1">
                    <div className="text-[10px] font-bold text-[#607d8b] uppercase">Web & Mobile</div>
                    <div className="text-xs font-extrabold text-[#253238]">React, Angular & Flutter</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#cfd8dc] shadow-2xs space-y-1">
                    <div className="text-[10px] font-bold text-[#607d8b] uppercase">Back-End</div>
                    <div className="text-xs font-extrabold text-[#253238]">C# .NET Core & Node</div>
                </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#455055] px-1">
                <span>Capgemini & SENAI CIMATEC</span>
                <span>Alta Escala</span>
            </div>
        </div>
    );
}

const CONTENT = {
    pt: {
        slides: [
            { id: 'slide-intro', label: 'Início' },
            { id: 'slide-projects', label: 'Projetos' },
            { id: 'slide-story', label: 'Sobre & Stacks' },
            { id: 'slide-playground', label: 'Arquitetura' },
            { id: 'slide-career', label: 'Carreira & Contato' },
        ],
        nav: {
            cta: 'Falar Comigo',
            nextSlideHint: 'Role para ver meus projetos reais',
        },
        hero: {
            greeting: 'Olá! Eu sou o Rafael Guimarães 👋',
            badge: 'Disponível para novos projetos & vagas Sênior (Remoto / Híbrido)',
            headlinePart1: 'Transformo ideias e desafios em ',
            headlineHighlight: 'sistemas web, apps & agentes de IA',
            headlinePart2: ' com foco total na experiência do usuário.',
            description:
                'Graduando em Análise e Desenvolvimento de Sistemas (Estácio) e em Ciência e Tecnologia (UFBA), Técnico em Desenvolvimento de Software pelo SENAI CIMATEC e Design na SAGA. Somo +6 anos construindo aplicações Full Stack (React, React Native, Flutter, Angular, PHP/Laravel, .NET Core, Node.js e Python/Django) e soluções de IA.',
            primaryCta: 'Ver Projetos Realizados',
            cvPtBtn: 'Currículo (PT-BR)',
            cvEnBtn: 'Resume (EN)',
            polaroidCaption: 'github.com/rafaelgcs • Salvador, BA',
            stickerTop: '🎨 Base em Design + 🧠 Engenharia de Software',
            stickerBottom: '⚡ +6 anos de código em produção',
            funFacts: [
                {
                    emoji: '🎨 ➡️ 💻',
                    title: 'Da SAGA ao Front & Full Stack',
                    text: 'Após o curso de Arte Digital e Design na SAGA (2018), tomei gosto por UI/UX e acessibilidade, unindo design apurado ao código no SENAI CIMATEC e na UFBA.',
                },
                {
                    emoji: '🚀',
                    title: 'Ex-Presidente da EJC&T (UFBA)',
                    text: 'Co-fundei e presidi a primeira Empresa Júnior de Ciência e Tecnologia da UFBA, criando sua marca, seu primeiro portal e liderando entregas reais.',
                },
                {
                    emoji: '📈',
                    title: '3 Promoções em Consultorias',
                    text: 'Cresci rapidamente na Capgemini (2 promoções em <2 anos) e na AlmaViva Solutions (Nível IV) entregando sistemas críticos.',
                },
                {
                    emoji: '🤖',
                    title: 'Sistemas Web, Mobile & IA',
                    text: 'Atuação versátil desde portais institucionais e apps em Flutter/React Native até integrações com IBM Maximo, Watson, Vertex AI e Gemini.',
                },
            ],
        },
        projects: {
            sectionTag: 'PORTFÓLIO & PROJETOS REAIS',
            title: 'Alguns dos meus trabalhos já desenvolvidos',
            subtitle:
                'Produtos SaaS, sistemas com IA e portais web em produção que desenvolvi ou liderei:',
            filters: [
                { id: 'portfolio', label: '🌐 Produtos, SaaS & Web (9)' },
                { id: 'systems', label: '⚙️ Corporativo & GitHub (3)' },
                { id: 'all', label: 'Todos (12)' },
            ],
            viewDetailsBtn: 'Detalhes do projeto',
            items: [
                {
                    id: 'atende-miucore',
                    category: 'portfolio',
                    imageUrl: '/projects/view-atende-miucore.svg',
                    domainLabel: 'atende.miucore.com.br',
                    badge: 'SaaS & IA WhatsApp',
                    client: 'MiuCore',
                    year: 'Em Produção',
                    title: 'MiuCore Atende — Atendimento Automático com IA',
                    shortDesc:
                        'Plataforma SaaS multi-empresa de atendimento inteligente para WhatsApp com agentes de IA, base de conhecimento, agendamento automático, inbox unificado e KPIs de conversão.',
                    challenge:
                        'Centralizar o atendimento via WhatsApp de múltiplas empresas clientes, automatizando respostas e agendamentos 24/7 com Inteligência Artificial e permitindo transbordo humano em tempo real.',
                    solution:
                        'Desenvolvi o sistema completo com Inbox de Atendimentos (Equipe + IA), conexão WhatsApp via QR Code, Base de Conhecimento treinável para a IA, gestão multi-tenant e dashboard de KPIs/ROI.',
                    impact: 'Atendimento automatizado 24/7 com agendamento inteligente, funil de conversão e métricas de ROI em tempo real.',
                    stack: ['React.js', 'TypeScript', 'Node.js', 'Python', 'Docker'],
                    liveUrl: 'https://atende.miucore.com.br',
                    repoUrl: null,
                },
                {
                    id: 'psieasy-app',
                    category: 'portfolio',
                    imageUrl: '/projects/view-psieasy.jpg',
                    domainLabel: 'psieasy.app',
                    badge: 'HealthTech SaaS & IA',
                    client: 'PsiEasy',
                    year: 'Em Produção',
                    title: 'PsiEasy — Software & Prontuário Eletrônico com IA',
                    shortDesc:
                        'Plataforma SaaS completa em Laravel + Inertia + React para psicólogos e clínicas: prontuário eletrônico com transcrição por IA, agenda inteligente, lembretes no WhatsApp e financeiro.',
                    challenge:
                        'Simplificar a rotina clínica e administrativa de psicólogos garantindo total conformidade com a LGPD, criptografia de dados sensíveis e automação de evoluções clínicas.',
                    solution:
                        'Arquitetura Full Stack com Laravel, Inertia.js, React e Tailwind CSS, integrando transcrição e resumo clínico por Inteligência Artificial, agenda inteligente com WhatsApp e controle financeiro.',
                    impact: 'Produto SaaS em produção (Web e Microsoft Store) atendendo psicólogos e clínicas em todo o Brasil.',
                    stack: ['Laravel', 'PHP', 'React.js', 'Tailwind CSS', 'MySQL'],
                    liveUrl: 'https://psieasy.app',
                    repoUrl: null,
                },
                {
                    id: 'ellegance-hotel',
                    category: 'portfolio',
                    imageUrl: '/projects/view-ellegance-hotel.jpeg',
                    domainLabel: 'ellegancehotel.com.br',
                    badge: 'Hotelaria & Reservas',
                    client: 'Ellegance Hotel',
                    year: 'Em Produção',
                    title: 'Ellegance Hotel — Plataforma Web & Reservas',
                    shortDesc:
                        'Aplicação web moderna em Laravel + Inertia + React para o Ellegance Hotel (Itapuã, Salvador), com catálogo dinâmico de acomodações, tarifas e integração de reservas.',
                    challenge:
                        'Transmitir o conforto e a sofisticação do hotel localizado próximo à Lagoa do Abaeté em Salvador, facilitando a consulta de suítes, comodidades e reservas diretas.',
                    solution:
                        'Desenvolvimento Full Stack com Laravel e Inertia React, estruturando vitrine interativa de quartos (Econômico, Standard, Triplo, Superior), tarifários dinâmicos e integração com Booking/WhatsApp.',
                    impact: 'Aumento na conversão de reservas diretas e presença digital de alto padrão para o hotel.',
                    stack: ['Laravel', 'PHP', 'React.js', 'Tailwind CSS', 'UI/UX Design'],
                    liveUrl: 'https://ellegancehotel.com.br',
                    repoUrl: null,
                },
                {
                    id: 'escola-reino-encantado',
                    category: 'portfolio',
                    imageUrl: '/projects/view-reino-encantado.png',
                    domainLabel: 'escolareinoencantado.com.br',
                    badge: 'Portal Educacional',
                    client: 'Escola Reino Encantado',
                    year: 'Em Produção',
                    title: 'Escola Reino Encantado — Portal Institucional',
                    shortDesc:
                        'Portal web oficial da Escola Reino Encantado (Pituba, Salvador), apresentando a proposta de Pedagogia Afetiva do Berçário ao Ensino Fundamental, infraestrutura e matrículas.',
                    challenge:
                        'Construir uma experiência digital acolhedora, segura e veloz que refletisse a proposta de educação humanizada da escola e facilitasse o agendamento de visitas pelas famílias.',
                    solution:
                        'Desenvolvimento em React / Next.js com otimização avançada de imagens (WebP), galeria interativa dos espaços pedagógicos, apresentação dos segmentos de ensino e captação de matrículas.',
                    impact: 'Portal ativo em produção fortalecendo a captação de alunos na Pituba, Salvador.',
                    stack: ['React.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'UI/UX Design'],
                    liveUrl: 'https://escolareinoencantado.com.br',
                    repoUrl: null,
                },
                {
                    id: 'villa-encantada',
                    category: 'portfolio',
                    imageUrl: '/projects/view-villa-encantada.png',
                    domainLabel: 'escolavillaencantada.com.br',
                    badge: 'Site Institucional',
                    client: 'Escola Villa Encantada',
                    year: 'Em Produção',
                    title: 'Escola Villa Encantada',
                    shortDesc:
                        'Site oficial da instituição de ensino creche e escola Escola Villa Encantada em Salvador, com área da família, galeria, notícias e matrículas.',
                    challenge:
                        'A instituição de ensino precisava de uma presença digital lúdica, acolhedora e responsiva para apresentar sua proposta pedagógica às famílias e facilitar matrículas.',
                    solution:
                        'Desenvolvi o layout completo, a identidade interativa da página e toda a implementação web responsiva com foco em usabilidade e performance.',
                    impact: 'Site publicado e ativo em produção atendendo pais, alunos e equipe pedagógica.',
                    stack: ['JavaScript', 'HTML5', 'CSS3', 'React.js', 'UI/UX Design'],
                    liveUrl: 'https://www.escolavillaencantada.com.br',
                    repoUrl: null,
                },
                {
                    id: 'quality-tour',
                    category: 'portfolio',
                    imageUrl: '/projects/view-quality-tour.png',
                    domainLabel: 'qualitytourbahia.com.br',
                    badge: 'Turismo & Viagens',
                    client: 'QualityTour Bahia',
                    year: 'Portfólio Web',
                    title: 'QualityTour Bahia',
                    shortDesc:
                        'Site da empresa de turismo e receptivo QualityTour Bahia em Salvador, sendo o primeiro contato oficial da empresa com a Web.',
                    challenge:
                        'Criar a primeira vitrine digital da empresa de turismo na Bahia, exibindo passeios, City Tour, Transfer In/Out e solicitação rápida de orçamento via WhatsApp.',
                    solution:
                        'Construção de uma aplicação web moderna com destaque visual para os pontos turísticos da Bahia, navegação intuitiva e conversão direta para atendimento.',
                    impact: 'Digitalização da empresa de turismo com captação direta de orçamentos online.',
                    stack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'UI/UX Design'],
                    liveUrl: 'https://www.qualitytourbahia.com.br',
                    repoUrl: null,
                },
                {
                    id: 'site-ejcet',
                    category: 'portfolio',
                    imageUrl: '/projects/view-ejcet.png',
                    domainLabel: 'ejcet.com.br',
                    badge: 'Portal Universitário',
                    client: 'EJC&T — UFBA',
                    year: 'UFBA / IHAC',
                    title: 'Portal Web — EJC&T (Empresa Júnior da UFBA)',
                    shortDesc:
                        'A primeira versão do site da Empresa Júnior de Ciências e Tecnologia da UFBA (IHAC), apresentando serviços, portfólio e processo seletivo.',
                    challenge:
                        'Posicionar a primeira Empresa Júnior do Instituto de Humanidades, Artes e Ciências (IHAC) da UFBA na web para captar clientes e novos membros universitários.',
                    solution:
                        'Idealização e desenvolvimento completo do portal em React.js com animações fluidas, seção institucional e integração de contato.',
                    impact: 'Base digital que consolidou a presença da EJC&T no ecossistema de empresas juniores da UFBA.',
                    stack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
                    liveUrl: 'https://www.ejcet.com.br',
                    repoUrl: null,
                },
                {
                    id: 'logo-3lines',
                    category: 'portfolio',
                    imageUrl: '/projects/view-logo-3lines.png',
                    domainLabel: '3lines.io',
                    badge: 'Branding & Web',
                    client: '3lines',
                    year: 'Design & Front-End',
                    title: 'Logo & Splash Web — 3lines',
                    shortDesc:
                        'Criação da identidade visual (logo) e desenvolvimento da página splash web da empresa de tecnologia 3lines.',
                    challenge:
                        'Criar uma marca minimalista e tecnológica que representasse o conceito da 3lines, acompanhada de uma página web de apresentação.',
                    solution:
                        'Desenvolvimento do conceito geométrico da marca na SAGA/Figma e codificação da splash page responsiva disponível no meu GitHub (3lines-splash-web).',
                    impact: 'Identidade visual consolidada e código aberto publicado no GitHub.',
                    stack: ['Figma', 'HTML5', 'CSS3', 'JavaScript', 'UI/UX Design'],
                    liveUrl: 'https://www.3lines.io',
                    repoUrl: 'https://github.com/rafaelgcs/3lines-splash-web',
                },
                {
                    id: 'logo-ejcet',
                    category: 'portfolio',
                    imageUrl: '/projects/view-logo-ejcet.png',
                    domainLabel: 'ejcet.com.br',
                    badge: 'Identidade Visual',
                    client: 'EJC&T — UFBA',
                    year: 'Branding',
                    title: 'Criação da Logo — EJC&T UFBA',
                    shortDesc:
                        'Criação da identidade visual oficial da Empresa Júnior de Ciência e Tecnologia da UFBA, unindo circuitos tecnológicos e modernidade.',
                    challenge:
                        'Representar visualmente a união entre Ciência, Tecnologia e Inovação estudantil dentro da Universidade Federal da Bahia.',
                    solution:
                        'Design vetorial completo da marca e manual de aplicação visual utilizado no site, redes sociais e documentos oficiais da empresa júnior.',
                    impact: 'Marca adotada oficialmente pela Empresa Júnior de Ciência e Tecnologia da UFBA.',
                    stack: ['Figma', 'UI/UX Design', 'HTML5', 'CSS3'],
                    liveUrl: 'https://www.ejcet.com.br',
                    repoUrl: null,
                },
                {
                    id: 'propostas-rafaelgcs',
                    category: 'systems',
                    visualType: 'propostas-system',
                    badge: 'Full Stack Autoral',
                    client: 'rafaelgcs.com',
                    year: 'GitHub Open Source',
                    title: 'Sistema Web & API de Propostas Comerciais',
                    shortDesc:
                        'Plataforma completa em React.js + API RESTful em PHP (Lumen/Laravel) para gestão, envio e validação de propostas comerciais com painel admin.',
                    challenge:
                        'Automatizar a apresentação e aprovação de propostas de software para clientes com acesso protegido por código e painel gerencial.',
                    solution:
                        'Arquitetura desacoplada com front-end em React (propostas.rafaelgcs.com) e back-end RESTful em PHP Lumen/Laravel (api.propostas.rafaelgcs.com) com autenticação JWT.',
                    impact: 'Repositórios públicos de front-end e back-end demonstrando domínio da stack React + PHP/Laravel.',
                    stack: ['React.js', 'PHP', 'Laravel', 'JavaScript', 'MySQL'],
                    liveUrl: null,
                    repoUrl: 'https://github.com/rafaelgcs/propostas.rafaelgcs.com',
                },
                {
                    id: 'almaviva-ai-maximo',
                    category: 'systems',
                    visualType: 'whatsapp-ai',
                    badge: 'IA & Sistemas Críticos',
                    client: 'AlmaViva Solutions',
                    year: '2022 – 2026',
                    title: 'Agentes de IA (Gemini/Vertex/Watson) & IBM Maximo',
                    shortDesc:
                        'Desenvolvimento Full Stack em Python (Django), React e Angular integrado ao IBM Maximo e assistentes inteligentes no WhatsApp.',
                    challenge:
                        'Integrar atendimento automatizado de alta escala no WhatsApp e gestão de ativos corporativos (IBM Maximo) com baixa latência.',
                    solution:
                        'Construção de microsserviços e APIs REST em Python/Django, dashboards em React/Angular e fluxos conversacionais com Google Vertex AI, Gemini e Watson.',
                    impact: 'Promoção para Analista Nível IV e automação de operações críticas.',
                    stack: ['Python', 'Django', 'React.js', 'Angular', 'Docker'],
                    liveUrl: null,
                    repoUrl: null,
                },
                {
                    id: 'capgemini-cimatec',
                    category: 'systems',
                    visualType: 'capgemini-banking',
                    badge: 'Enterprise & Mobile',
                    client: 'Capgemini & SENAI CIMATEC',
                    year: '2019 – 2022',
                    title: 'Sistemas Corporativos (.NET/React) & Apps Flutter',
                    shortDesc:
                        'Modernização de sistemas corporativos com C# (.NET Core / ASP.NET), React.js, Angular e aplicativos móveis em Flutter e React Native.',
                    challenge:
                        'Entregar aplicações web e mobile escaláveis para grandes clientes corporativos e projetos de P&D cumprindo rigorosos padrões de qualidade.',
                    solution:
                        'Desenvolvimento de APIs em .NET Core e Node.js, interfaces em React e Angular, e aplicativos multiplataforma em Flutter (como DevQuiz e conversores no GitHub).',
                    impact: 'Duas promoções consecutivas na Capgemini em menos de 2 anos.',
                    stack: ['.NET Core', 'C#', 'React.js', 'Flutter', 'Node.js'],
                    liveUrl: null,
                    repoUrl: 'https://github.com/rafaelgcs?tab=repositories',
                },
            ],
        },
        storySlide: {
            sectionTag: 'SOBRE MIM & TECNOLOGIAS',
            title: 'Minhas Competências & Stacks que Domino',
            subtitle:
                'Venho unindo Design Digital (SAGA), Engenharia de Software (SENAI CIMATEC / UFBA) e experiência prática nas stacks abaixo:',
        },
        playground: {
            sectionTag: 'ENGENHARIA DE PONTA A PONTA',
            title: 'Como conecto cada tecnologia na prática',
            subtitle:
                'Clique em cada camada para explorar as linguagens e frameworks que utilizo no Front-End, Back-End, Mobile e IA:',
            steps: [
                {
                    step: '01',
                    title: 'Front-End Web & Experiência UI/UX',
                    tech: 'React.js • Angular • TypeScript • HTML5 • CSS3',
                    icons: ['/stacks/react.svg', '/stacks/angular.svg', '/stacks/typescript.svg', '/stacks/html5.svg', '/stacks/css3.svg'],
                    story:
                        'Foco total na melhor interface e acessibilidade para o usuário final, combinando React.js, Angular, TypeScript, Material Design, Tailwind CSS e prototipação no Figma.',
                },
                {
                    step: '02',
                    title: 'Aplicações Mobile Multiplataforma',
                    tech: 'Flutter • React Native • iOS & Android',
                    icons: ['/stacks/flutter.svg', '/stacks/react.svg', '/stacks/figma.svg'],
                    story:
                        'Desenvolvimento de aplicativos móveis nativos e híbridos com Flutter (Dart) e React Native, consumindo APIs REST com fluidez e animações nativas.',
                },
                {
                    step: '03',
                    title: 'Back-End, APIs REST & Arquitetura',
                    tech: 'PHP (Laravel/Lumen) • Python (Django) • .NET Core (C#) • Node.js',
                    icons: ['/stacks/php.svg', '/stacks/laravel.svg', '/stacks/python.svg', '/stacks/dotnetcore.svg', '/stacks/nodejs.svg'],
                    story:
                        'Construção de back-ends robustos e escaláveis utilizando Laravel/Lumen (PHP), Django (Python), ASP.NET MVC / .NET Core com Entity Framework (C#) e Node.js.',
                },
                {
                    step: '04',
                    title: 'Dados, Containers & Inteligência Artificial',
                    tech: 'MySQL • PostgreSQL • Docker • Gemini & Vertex AI',
                    icons: ['/stacks/mysql.svg', '/stacks/postgresql.svg', '/stacks/docker.svg', '/stacks/git.svg'],
                    story:
                        'Modelagem de dados relacionais (MySQL, PostgreSQL, SQL Server), containerização com Docker, CI/CD com Git e orquestração de agentes de IA (Vertex AI, Gemini e Watson).',
                },
            ],
        },
        experience: {
            sectionTag: 'EXPERIÊNCIA & CONTATO',
            title: 'Minha Caminhada & Próximo Capítulo',
            jobs: [
                {
                    company: 'AlmaViva Solutions',
                    role: 'Senior Full Stack & AI Developer (PL III → PL IV)',
                    period: 'Mai 2022 – Nov 2026 (4a 7m)',
                    badge: 'Promovido ao Nível IV',
                    summary:
                        'Liderança técnica em projetos Full Stack (Python/Django, React, Angular), IBM Maximo e IA Generativa (Vertex AI, Gemini, Watson e WhatsApp).',
                },
                {
                    company: 'Capgemini',
                    role: 'Consultor de Soluções Digitais III',
                    period: 'Mar 2020 – Mai 2022 (2a 3m)',
                    badge: '2 Promoções em < 2 anos',
                    summary:
                        'Modernização de sistemas corporativos com React.js, Angular, Node.js, C#, ASP.NET e .NET Core em squads ágeis globais.',
                },
                {
                    company: 'SENAI CIMATEC',
                    role: 'Desenvolvedor de Software (Estágio) & Técnico',
                    period: 'Abr 2019 – Mar 2020 (Técnico 2017–2019)',
                    badge: 'P&D & Engenharia',
                    summary:
                        'Implementação e manutenção de aplicações web e mobile com C#, .NET Core, Angular, React.js e React Native em um dos maiores centros de inovação do país.',
                },
                {
                    company: 'EJC&T (UFBA) & Projetos SaaS',
                    role: 'Diretor Presidente (CEO), Co-Fundador & Tech Lead',
                    period: 'Abr 2019 – Fev 2021 • SaaS Ativos',
                    badge: 'CEO & Produtos SaaS',
                    summary:
                        'Co-fundação da EJC&T e arquitetura de plataformas SaaS e portais (MiuCore Atende, PsiEasy, Ellegance Hotel, Reino Encantado, Villa Encantada) com Laravel, React e IA.',
                },
            ],
        },
        contact: {
            title: 'Vamos construir o próximo grande projeto juntos?',
            subtitle:
                'Disponibilidade imediata para atuar como Senior Full Stack Developer, Python/PHP Engineer ou Front-End/Mobile Specialist.',
            openModalBtn: 'Mandar Mensagem pelo Site',
            whatsappBtn: 'Chamar no WhatsApp',
            dialogTitle: 'Falar com Rafael Guimarães',
            dialogSubtitle: 'Respondo rápido! Ou envie direto para contato@rafaelgcs.com.br',
            nameLabel: 'Seu Nome',
            emailLabel: 'Seu E-mail',
            companyLabel: 'Empresa / Projeto (Opcional)',
            messageLabel: 'Como posso ajudar?',
            submitBtn: 'Enviar Mensagem',
            submittingBtn: 'Enviando...',
            closeBtn: 'Fechar',
        },
    },
    en: {
        slides: [
            { id: 'slide-intro', label: 'Home' },
            { id: 'slide-projects', label: 'Projects' },
            { id: 'slide-story', label: 'About & Stacks' },
            { id: 'slide-playground', label: 'Architecture' },
            { id: 'slide-career', label: 'Career & Contact' },
        ],
        nav: {
            cta: 'Let’s Talk',
            nextSlideHint: 'Scroll down to see my real projects',
        },
        hero: {
            greeting: 'Hi there! I’m Rafael Guimarães 👋',
            badge: 'Immediate Availability for Senior Roles & Projects (Remote / Hybrid)',
            headlinePart1: 'Turning complex ideas into ',
            headlineHighlight: 'web platforms, mobile apps & AI agents',
            headlinePart2: ' with a strong UI/UX foundation.',
            description:
                'Systems Analysis & Development (ADS — Estácio) and Science & Technology (UFBA) student, Software Development Technician at SENAI CIMATEC, and Designer trained at SAGA. 6+ years building Full Stack applications (React, React Native, Flutter, Angular, PHP/Laravel, .NET Core, Node.js, Python/Django) and AI solutions.',
            primaryCta: 'Explore Delivered Projects',
            cvPtBtn: 'Baixar CV (PT-BR)',
            cvEnBtn: 'Download CV (EN)',
            polaroidCaption: 'github.com/rafaelgcs • Salvador, Brazil',
            stickerTop: '🎨 UI/UX Design Roots + 🧠 Software Engineering',
            stickerBottom: '⚡ 6+ years shipping production code',
            funFacts: [
                {
                    emoji: '🎨 ➡️ 💻',
                    title: 'From Digital Art to Full Stack',
                    text: 'After studying Digital Art & Design at SAGA (2018), I fell in love with UI/UX and accessibility—bringing visual polish into software engineering at SENAI CIMATEC & UFBA.',
                },
                {
                    emoji: '🚀',
                    title: 'Former CEO at EJC&T (UFBA)',
                    text: 'Co-founded and presided over UFBA’s Junior Enterprise of Science & Technology, designing its brand, building its first portal, and leading client deliveries.',
                },
                {
                    emoji: '📈',
                    title: '3 Promotions in Global Consultancies',
                    text: 'Earned rapid promotions at both Capgemini (2 promotions in <2 years) and AlmaViva Solutions (Level IV) delivering mission-critical software.',
                },
                {
                    emoji: '🤖',
                    title: 'Web, Mobile & Conversational AI',
                    text: 'Versatile track record spanning institutional web portals and Flutter/React Native apps to IBM Maximo, Watson, Vertex AI, and Gemini integrations.',
                },
            ],
        },
        projects: {
            sectionTag: 'PORTFOLIO & REAL DELIVERIES',
            title: 'Featured Works & Delivered Projects',
            subtitle:
                'Production SaaS platforms, AI systems, and web portals I architected, designed, or led:',
            filters: [
                { id: 'portfolio', label: '🌐 SaaS, Products & Web (9)' },
                { id: 'systems', label: '⚙️ Enterprise & GitHub (3)' },
                { id: 'all', label: 'All (12)' },
            ],
            viewDetailsBtn: 'Project details',
            items: [
                {
                    id: 'atende-miucore',
                    category: 'portfolio',
                    imageUrl: '/projects/view-atende-miucore.svg',
                    domainLabel: 'atende.miucore.com.br',
                    badge: 'SaaS & WhatsApp AI',
                    client: 'MiuCore',
                    year: 'Live in Production',
                    title: 'MiuCore Atende — AI WhatsApp Customer Platform',
                    shortDesc:
                        'Multi-tenant SaaS platform for automated WhatsApp customer service powered by AI agents, knowledge base training, smart scheduling, unified inbox, and conversion KPIs.',
                    challenge:
                        'Centralize multi-company WhatsApp operations, automating 24/7 customer answers and appointment booking with AI while supporting seamless human handoff.',
                    solution:
                        'Built the full system featuring a Unified Team + AI Inbox, QR-Code WhatsApp Web connection, customizable AI Knowledge Base, multi-tenant administration, and ROI analytics.',
                    impact: '24/7 automated WhatsApp attendance, smart scheduling, and real-time conversion funnel tracking.',
                    stack: ['React.js', 'TypeScript', 'Node.js', 'Python', 'Docker'],
                    liveUrl: 'https://atende.miucore.com.br',
                    repoUrl: null,
                },
                {
                    id: 'psieasy-app',
                    category: 'portfolio',
                    imageUrl: '/projects/view-psieasy.jpg',
                    domainLabel: 'psieasy.app',
                    badge: 'HealthTech SaaS & AI',
                    client: 'PsiEasy',
                    year: 'Live in Production',
                    title: 'PsiEasy — Psychologist SaaS & AI Electronic Health Record',
                    shortDesc:
                        'Complete SaaS platform built with Laravel + Inertia + React for psychologists: AI-powered session transcription & clinical records, smart scheduling, WhatsApp reminders, and billing.',
                    challenge:
                        'Streamline clinical and financial management for mental health professionals with strict LGPD data privacy, encryption, and automated session notes.',
                    solution:
                        'Full-stack architecture with Laravel, Inertia.js, React, and Tailwind CSS integrating AI clinical transcription, automated WhatsApp reminders, and financial dashboards.',
                    impact: 'Live SaaS platform (Web & Microsoft Store) serving psychologists and clinics across Brazil.',
                    stack: ['Laravel', 'PHP', 'React.js', 'Tailwind CSS', 'MySQL'],
                    liveUrl: 'https://psieasy.app',
                    repoUrl: null,
                },
                {
                    id: 'ellegance-hotel',
                    category: 'portfolio',
                    imageUrl: '/projects/view-ellegance-hotel.jpeg',
                    domainLabel: 'ellegancehotel.com.br',
                    badge: 'Hospitality & Booking',
                    client: 'Ellegance Hotel',
                    year: 'Live in Production',
                    title: 'Ellegance Hotel — Web Platform & Booking Engine',
                    shortDesc:
                        'Modern web application built with Laravel + Inertia + React for Ellegance Hotel (Itapuã, Salvador), featuring dynamic room catalogs, pricing tiers, and booking integration.',
                    challenge:
                        'Showcase the hotel’s accommodations near Lagoa do Abaeté in Salvador while streamlining room discovery and direct reservation requests.',
                    solution:
                        'Developed a Full Stack Laravel + Inertia React platform with dynamic room showcases, amenity filtering, and integrated Booking/WhatsApp reservation flows.',
                    impact: 'Boosted direct online bookings and elevated the hotel’s digital brand in Salvador.',
                    stack: ['Laravel', 'PHP', 'React.js', 'Tailwind CSS', 'UI/UX Design'],
                    liveUrl: 'https://ellegancehotel.com.br',
                    repoUrl: null,
                },
                {
                    id: 'escola-reino-encantado',
                    category: 'portfolio',
                    imageUrl: '/projects/view-reino-encantado.png',
                    domainLabel: 'escolareinoencantado.com.br',
                    badge: 'Education Portal',
                    client: 'Escola Reino Encantado',
                    year: 'Live in Production',
                    title: 'Escola Reino Encantado — Official Web Portal',
                    shortDesc:
                        'Official web portal for Escola Reino Encantado (Pituba, Salvador), presenting its affective pedagogy from Nursery to Elementary School, campus gallery, and enrollment.',
                    challenge:
                        'Create a welcoming, fast, and trustworthy digital presence reflecting the school’s humanized educational philosophy and simplifying family campus visits.',
                    solution:
                        'Engineered with React / Next.js featuring WebP image optimization, interactive facility galleries, educational stage breakdowns, and direct enrollment conversion.',
                    impact: 'Live production portal driving new student enrollments in Salvador.',
                    stack: ['React.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'UI/UX Design'],
                    liveUrl: 'https://escolareinoencantado.com.br',
                    repoUrl: null,
                },
                {
                    id: 'villa-encantada',
                    category: 'portfolio',
                    imageUrl: '/projects/view-villa-encantada.png',
                    domainLabel: 'escolavillaencantada.com.br',
                    badge: 'Institutional Website',
                    client: 'Escola Villa Encantada',
                    year: 'Live in Production',
                    title: 'Escola Villa Encantada',
                    shortDesc:
                        'Official website for the Kindergarten and Elementary School Escola Villa Encantada in Salvador, featuring family portal, gallery, news, and enrollment.',
                    challenge:
                        'The school needed a warm, playful, and responsive web platform to showcase its educational approach and streamline new student enrollments.',
                    solution:
                        'Designed the UI/UX and implemented the responsive front-end and web platform from scratch with a focus on accessibility and speed.',
                    impact: 'Live production website actively used by families, students, and educators.',
                    stack: ['JavaScript', 'HTML5', 'CSS3', 'React.js', 'UI/UX Design'],
                    liveUrl: 'https://www.escolavillaencantada.com.br',
                    repoUrl: null,
                },
                {
                    id: 'quality-tour',
                    category: 'portfolio',
                    imageUrl: '/projects/view-quality-tour.png',
                    domainLabel: 'qualitytourbahia.com.br',
                    badge: 'Tourism & Travel',
                    client: 'QualityTour Bahia',
                    year: 'Web Portfolio',
                    title: 'QualityTour Bahia',
                    shortDesc:
                        'Official website for the tourism agency QualityTour Bahia in Salvador, marking the company’s very first presence on the Web.',
                    challenge:
                        'Build the company’s first digital storefront showcasing Bahia tours, City Tours, Airport Transfers, and instant quote requests.',
                    solution:
                        'Created a responsive, image-rich web experience highlighting Salvador’s landmarks with direct WhatsApp and quote conversion flows.',
                    impact: 'Established the agency’s online presence and automated incoming travel quote requests.',
                    stack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'UI/UX Design'],
                    liveUrl: 'https://www.qualitytourbahia.com.br',
                    repoUrl: null,
                },
                {
                    id: 'site-ejcet',
                    category: 'portfolio',
                    imageUrl: '/projects/view-ejcet.png',
                    domainLabel: 'ejcet.com.br',
                    badge: 'Junior Enterprise Portal',
                    client: 'EJC&T — UFBA',
                    year: 'UFBA / IHAC',
                    title: 'EJC&T — UFBA Junior Enterprise Website',
                    shortDesc:
                        'First official website of the Junior Enterprise of Science and Technology at UFBA, presenting its software services and recruitment process.',
                    challenge:
                        'Launch the digital presence of the first Junior Enterprise of UFBA’s Institute of Humanities, Arts, and Sciences (IHAC).',
                    solution:
                        'Architected and built the responsive React web application featuring animated sections, service catalog, and member recruitment.',
                    impact: 'Positioned EJC&T digitally to attract real software clients and university talent.',
                    stack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
                    liveUrl: 'https://www.ejcet.com.br',
                    repoUrl: null,
                },
                {
                    id: 'logo-3lines',
                    category: 'portfolio',
                    imageUrl: '/projects/view-logo-3lines.png',
                    domainLabel: '3lines.io',
                    badge: 'Branding & Splash Web',
                    client: '3lines',
                    year: 'Design & Front-End',
                    title: '3lines — Brand Logo & Splash Web',
                    shortDesc:
                        'Brand logo creation and responsive splash page development for the technology company 3lines.',
                    challenge:
                        'Design a clean, geometric brand identity for 3lines and ship its accompanying web splash page.',
                    solution:
                        'Created the vector brand identity and coded the responsive splash page (available on my GitHub at 3lines-splash-web).',
                    impact: 'Delivered complete visual identity and open-source web implementation.',
                    stack: ['Figma', 'HTML5', 'CSS3', 'JavaScript', 'UI/UX Design'],
                    liveUrl: 'https://www.3lines.io',
                    repoUrl: 'https://github.com/rafaelgcs/3lines-splash-web',
                },
                {
                    id: 'logo-ejcet',
                    category: 'portfolio',
                    imageUrl: '/projects/view-logo-ejcet.png',
                    domainLabel: 'ejcet.com.br',
                    badge: 'Brand Identity',
                    client: 'EJC&T — UFBA',
                    year: 'Branding',
                    title: 'EJC&T UFBA — Official Brand Identity',
                    shortDesc:
                        'Creation of the official logo and visual identity for UFBA’s Junior Enterprise of Science and Technology.',
                    challenge:
                        'Visually represent Science, Technology, and university innovation in a memorable brand mark.',
                    solution:
                        'Designed the circuit-inspired emblem and typography system used across the website, social media, and official documents.',
                    impact: 'Adopted as the permanent visual identity of EJC&T at UFBA.',
                    stack: ['Figma', 'UI/UX Design', 'HTML5', 'CSS3'],
                    liveUrl: 'https://www.ejcet.com.br',
                    repoUrl: null,
                },
                {
                    id: 'propostas-rafaelgcs',
                    category: 'systems',
                    visualType: 'propostas-system',
                    badge: 'Full Stack Platform',
                    client: 'rafaelgcs.com',
                    year: 'GitHub Open Source',
                    title: 'Commercial Proposals Web App & REST API',
                    shortDesc:
                        'Full-stack platform built with React.js and a PHP (Lumen/Laravel) REST API for managing and validating client proposals.',
                    challenge:
                        'Streamline software proposal delivery with client-code validation and an administrative dashboard.',
                    solution:
                        'Built a decoupled React front-end (propostas.rafaelgcs.com) paired with a JWT-secured Lumen/Laravel REST API (api.propostas.rafaelgcs.com).',
                    impact: 'Open-source repositories showcasing end-to-end React + PHP/Laravel architecture.',
                    stack: ['React.js', 'PHP', 'Laravel', 'JavaScript', 'MySQL'],
                    liveUrl: null,
                    repoUrl: 'https://github.com/rafaelgcs/propostas.rafaelgcs.com',
                },
                {
                    id: 'almaviva-ai-maximo',
                    category: 'systems',
                    visualType: 'whatsapp-ai',
                    badge: 'AI & Enterprise EAM',
                    client: 'AlmaViva Solutions',
                    year: '2022 – 2026',
                    title: 'AI Agents (Gemini/Vertex/Watson) & IBM Maximo',
                    shortDesc:
                        'Full Stack engineering in Python (Django), React, and Angular integrated with IBM Maximo and WhatsApp AI assistants.',
                    challenge:
                        'Connect high-volume WhatsApp customer operations and IBM Maximo asset management with low-latency APIs.',
                    solution:
                        'Engineered Python/Django REST services, React/Angular portals, and conversational agents powered by Google Vertex AI, Gemini, and Watson.',
                    impact: 'Promoted to Level IV Analyst while automating mission-critical workflows.',
                    stack: ['Python', 'Django', 'React.js', 'Angular', 'Docker'],
                    liveUrl: null,
                    repoUrl: null,
                },
                {
                    id: 'capgemini-cimatec',
                    category: 'systems',
                    visualType: 'capgemini-banking',
                    badge: 'Enterprise & Mobile',
                    client: 'Capgemini & SENAI CIMATEC',
                    year: '2019 – 2022',
                    title: 'Enterprise Systems (.NET/React) & Flutter Apps',
                    shortDesc:
                        'Modernized enterprise platforms with C# (.NET Core / ASP.NET), React.js, Angular, and cross-platform Flutter / React Native apps.',
                    challenge:
                        'Deliver scalable web and mobile solutions for global enterprise clients and R&D initiatives.',
                    solution:
                        'Developed .NET Core and Node.js APIs, reusable React/Angular components, and Flutter mobile apps.',
                    impact: 'Earned two consecutive promotions at Capgemini in under 2 years.',
                    stack: ['.NET Core', 'C#', 'React.js', 'Flutter', 'Node.js'],
                    liveUrl: null,
                    repoUrl: 'https://github.com/rafaelgcs?tab=repositories',
                },
            ],
        },
        storySlide: {
            sectionTag: 'ABOUT ME & TECH STACK',
            title: 'Core Competencies & Technologies I Use',
            subtitle:
                'Combining Digital Design (SAGA), Software Engineering (SENAI CIMATEC / UFBA), and hands-on production experience across these stacks:',
        },
        playground: {
            sectionTag: 'END-TO-END ENGINEERING',
            title: 'How I Connect Each Technology in Practice',
            subtitle:
                'Click each layer below to explore the languages and frameworks I use across Front-End, Mobile, Back-End, and AI:',
            steps: [
                {
                    step: '01',
                    title: 'Front-End Web & UI/UX Engineering',
                    tech: 'React.js • Angular • TypeScript • HTML5 • CSS3',
                    icons: ['/stacks/react.svg', '/stacks/angular.svg', '/stacks/typescript.svg', '/stacks/html5.svg', '/stacks/css3.svg'],
                    story:
                        'Focused on crafting accessible, high-converting user interfaces with React.js, Angular, TypeScript, Material Design, Tailwind CSS, and Figma.',
                },
                {
                    step: '02',
                    title: 'Cross-Platform Mobile Applications',
                    tech: 'Flutter • React Native • iOS & Android',
                    icons: ['/stacks/flutter.svg', '/stacks/react.svg', '/stacks/figma.svg'],
                    story:
                        'Building fluid mobile experiences for iOS and Android using Flutter (Dart) and React Native integrated with RESTful back-ends.',
                },
                {
                    step: '03',
                    title: 'Back-End APIs & Enterprise Architecture',
                    tech: 'PHP (Laravel/Lumen) • Python (Django) • .NET Core (C#) • Node.js',
                    icons: ['/stacks/php.svg', '/stacks/laravel.svg', '/stacks/python.svg', '/stacks/dotnetcore.svg', '/stacks/nodejs.svg'],
                    story:
                        'Designing clean RESTful APIs and microservices using Laravel/Lumen (PHP), Django (Python), ASP.NET MVC / .NET Core (C#), and Node.js.',
                },
                {
                    step: '04',
                    title: 'Databases, Containers & Generative AI',
                    tech: 'MySQL • PostgreSQL • Docker • Gemini & Vertex AI',
                    icons: ['/stacks/mysql.svg', '/stacks/postgresql.svg', '/stacks/docker.svg', '/stacks/git.svg'],
                    story:
                        'Relational data modeling (MySQL, PostgreSQL, SQL), Docker containerization, Git workflows, and intelligent agents with Vertex AI, Gemini, and Watson.',
                },
            ],
        },
        experience: {
            sectionTag: 'CAREER & CONTACT',
            title: 'My Journey & Next Chapter',
            jobs: [
                {
                    company: 'AlmaViva Solutions',
                    role: 'Senior Full Stack & AI Developer (PL III → IV)',
                    period: 'May 2022 – Nov 2026 (4y 7m)',
                    badge: 'Promoted to Level IV',
                    summary:
                        'Technical ownership across Full Stack platforms (Python/Django, React, Angular), IBM Maximo integrations, and Generative AI (Vertex AI, Gemini, Watson, WhatsApp).',
                },
                {
                    company: 'Capgemini',
                    role: 'Digital Solutions Consultant III',
                    period: 'Mar 2020 – May 2022 (2y 3m)',
                    badge: '2 Promotions in < 2 yrs',
                    summary:
                        'Modernized enterprise applications using React.js, Angular, Node.js, C#, ASP.NET, and .NET Core in global Agile squads.',
                },
                {
                    company: 'SENAI CIMATEC',
                    role: 'Software Development Intern & Technician',
                    period: 'Apr 2019 – Mar 2020 (Tech 2017–2019)',
                    badge: 'R&D & Engineering',
                    summary:
                        'Implemented and maintained full-stack web and mobile apps using C#, .NET Core, Angular, React.js, and React Native at a premier R&D innovation center.',
                },
                {
                    company: 'EJC&T (UFBA) & SaaS Products',
                    role: 'CEO, Co-Founder & SaaS Architect',
                    period: 'Apr 2019 – Feb 2021 • Active SaaS',
                    badge: 'CEO & SaaS Products',
                    summary:
                        'Co-founded UFBA’s junior enterprise and architected production SaaS & web platforms (MiuCore Atende, PsiEasy, Ellegance Hotel, Reino Encantado) with Laravel, React, and AI.',
                },
            ],
        },
        contact: {
            title: 'Let’s build something great together!',
            subtitle:
                'Available immediately for Senior Full Stack Developer, Python/PHP Engineer, or Front-End/Mobile Specialist roles.',
            openModalBtn: 'Send Message on Site',
            whatsappBtn: 'Chat on WhatsApp',
            dialogTitle: 'Message Rafael Guimarães',
            dialogSubtitle: 'I reply fast! Or email me directly at contato@rafaelgcs.com.br',
            nameLabel: 'Your Name',
            emailLabel: 'Your Email',
            companyLabel: 'Company / Project (Optional)',
            messageLabel: 'How can I help you?',
            submitBtn: 'Send Message',
            submittingBtn: 'Sending...',
            closeBtn: 'Close',
        },
    },
};

export default function Portfolio({ profile }) {
    const [lang, setLang] = useState('pt');
    const [activeFilter, setActiveFilter] = useState('portfolio');
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);
    const [activeStep, setActiveStep] = useState(0);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);

    const t = CONTENT[lang];
    const scrollerRef = useRef(null);
    const progressBarRef = useRef(null);
    const contactDialogRef = useRef(null);
    const projectDialogRef = useRef(null);
    const { flash } = usePage().props;

    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const filteredProjects =
        activeFilter === 'all'
            ? t.projects.items
            : t.projects.items.filter((item) => item.category === activeFilter);

    const safeProjectIndex =
        activeProjectIndex >= filteredProjects.length ? 0 : activeProjectIndex;
    const currentProject = filteredProjects[safeProjectIndex] || t.projects.items[0];

    const handleFilterChange = (filterId) => {
        setActiveFilter(filterId);
        setActiveProjectIndex(0);
    };

    // Track active section via IntersectionObserver + fallback for Scroll Progress & ViewTimeline
    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        const slides = Array.from(scroller.querySelectorAll('.deck-slide'));
        const stages = Array.from(scroller.querySelectorAll('.slide-stage'));

        const slideObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
                        const idx = slides.indexOf(entry.target);
                        if (idx !== -1) {
                            setActiveSlideIndex(idx);
                        }
                    }
                });
            },
            {
                root: scroller,
                threshold: [0.45, 0.65],
            }
        );

        slides.forEach((s) => slideObserver.observe(s));

        // Progressive fallback for browsers without native CSS animation-timeline: view()
        let stageFallbackObserver = null;
        const supportsViewTimeline =
            typeof CSS !== 'undefined' &&
            CSS.supports('(animation-timeline: view()) and (animation-range: entry)');
        const prefersNoMotion =
            typeof window !== 'undefined' &&
            window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

        if (!supportsViewTimeline && prefersNoMotion) {
            stageFallbackObserver = new IntersectionObserver(
                (entries) => {
                    for (const entry of entries) {
                        const ratio = Math.min(1, Math.max(0, entry.intersectionRatio));
                        entry.target.style.opacity = String(0.2 + ratio * 0.8);
                        entry.target.style.transform = `translateY(${(1 - ratio) * 28}px) scale(${0.96 + ratio * 0.04})`;
                    }
                },
                {
                    root: scroller,
                    threshold: Array.from({ length: 21 }, (_, i) => i / 20),
                }
            );
            stages.forEach((st) => stageFallbackObserver.observe(st));
        }

        // Progressive fallback for browsers without native CSS animation-timeline: scroll()
        const supportsScrollTimeline =
            typeof CSS !== 'undefined' && CSS.supports('animation-timeline', 'scroll()');
        const handleScrollFallback = () => {
            if (!supportsScrollTimeline && progressBarRef.current) {
                const scrollable = scroller.scrollHeight - scroller.clientHeight;
                const progress = scrollable > 0 ? scroller.scrollTop / scrollable : 0;
                progressBarRef.current.style.transform = `scaleX(${progress})`;
            }
        };

        scroller.addEventListener('scroll', handleScrollFallback, { passive: true });

        return () => {
            slideObserver.disconnect();
            if (stageFallbackObserver) stageFallbackObserver.disconnect();
            scroller.removeEventListener('scroll', handleScrollFallback);
        };
    }, []);

    // Keyboard Arrow Up / Down navigation between sections
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (
                contactDialogRef.current?.open ||
                projectDialogRef.current?.open ||
                ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)
            ) {
                return;
            }
            if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                e.preventDefault();
                scrollToSlide(Math.min(t.slides.length - 1, activeSlideIndex + 1));
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                scrollToSlide(Math.max(0, activeSlideIndex - 1));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeSlideIndex, t.slides.length]);

    const scrollToSlide = (index) => {
        const scroller = scrollerRef.current;
        if (!scroller) return;
        const target = scroller.querySelector(`#${t.slides[index].id}`);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const openContactModal = () => {
        if (contactDialogRef.current) {
            contactDialogRef.current.showModal();
        }
    };

    const closeContactModal = () => {
        if (contactDialogRef.current) {
            contactDialogRef.current.close();
        }
    };

    const openProjectModal = (proj) => {
        setSelectedProject(proj);
        if (projectDialogRef.current) {
            projectDialogRef.current.showModal();
        }
    };

    const closeProjectModal = () => {
        if (projectDialogRef.current) {
            projectDialogRef.current.close();
        }
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <>
            <Head title="Rafael Guimarães — Portfólio & Engenharia de Software" />

            {/* Top Scroll-Driven Progress Bar */}
            <div id="scroll-progress-bar" ref={progressBarRef} aria-hidden="true" />

            {/* Refined Desktop Header aligned with Brand #253238 */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#dfe5e8] bg-white/90 backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
                    {/* Left: Brand Logo */}
                    <button
                        type="button"
                        onClick={() => scrollToSlide(0)}
                        className="flex items-center gap-3 group cursor-pointer shrink-0 focus:outline-none"
                    >
                        <img
                            src={profile.logoUrl}
                            alt="rafaelgcs — Rafael Guimarães"
                            width={168}
                            height={42}
                            fetchPriority="high"
                            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                        />
                    </button>

                    {/* Center: Clean Desktop Navigation Links */}
                    <nav aria-label="Menu Principal" className="hidden md:flex items-center">
                        <ul className="flex items-center gap-1 lg:gap-2">
                            {t.slides.map((s, idx) => {
                                const isActive = activeSlideIndex === idx;
                                return (
                                    <li key={s.id}>
                                        <button
                                            type="button"
                                            onClick={() => scrollToSlide(idx)}
                                            aria-current={isActive ? 'page' : undefined}
                                            className={`relative px-3.5 py-2 rounded-xl text-xs lg:text-sm font-bold transition-all cursor-pointer ${
                                                isActive
                                                    ? 'text-[#253238] bg-[#eceff1]'
                                                    : 'text-[#455055] hover:text-[#253238] hover:bg-[#f5f7f8]'
                                            }`}
                                        >
                                            {s.label}
                                            {isActive && (
                                                <span
                                                    className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#253238] rounded-full"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Right: Language Switcher & Brand CTA */}
                    <div className="flex items-center gap-2.5 shrink-0">
                        <div
                            className="inline-flex rounded-xl bg-[#f5f7f8] p-0.5 border border-[#cfd8dc]"
                            role="group"
                            aria-label="Idioma"
                        >
                            <button
                                type="button"
                                onClick={() => setLang('pt')}
                                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                                    lang === 'pt'
                                        ? 'bg-[#253238] text-white'
                                        : 'text-[#455055] hover:text-[#253238]'
                                }`}
                            >
                                PT
                            </button>
                            <button
                                type="button"
                                onClick={() => setLang('en')}
                                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                                    lang === 'en'
                                        ? 'bg-[#253238] text-white'
                                        : 'text-[#455055] hover:text-[#253238]'
                                }`}
                            >
                                EN
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={openContactModal}
                            className="hidden sm:inline-flex items-center gap-2 bg-[#253238] hover:bg-[#182126] text-white font-semibold text-xs lg:text-sm px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
                        >
                            <Mail className="w-3.5 h-3.5 text-[#cfd8dc]" aria-hidden="true" />
                            <span>{t.nav.cta}</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Subtle Right-Side Section Dots */}
            <aside
                aria-label="Navegação rápida por seção"
                className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-2"
            >
                <div className="bg-white/90 backdrop-blur-md border border-[#cfd8dc] shadow-md rounded-full py-3 px-2 flex flex-col items-center gap-2.5">
                    {t.slides.map((s, idx) => {
                        const isActive = activeSlideIndex === idx;
                        return (
                            <button
                                key={s.id}
                                type="button"
                                onClick={() => scrollToSlide(idx)}
                                aria-label={s.label}
                                aria-current={isActive ? 'true' : undefined}
                                className="group relative flex items-center justify-end cursor-pointer"
                            >
                                <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap bg-[#253238] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md">
                                    {s.label}
                                </span>
                                <span
                                    className={`w-2.5 rounded-full transition-all ${
                                        isActive
                                            ? 'h-6 bg-[#253238]'
                                            : 'h-2.5 bg-[#cfd8dc] hover:bg-[#607d8b]'
                                    }`}
                                />
                            </button>
                        );
                    })}
                </div>
            </aside>

            {/* MAIN FULL-VIEWPORT SCROLLER */}
            <div ref={scrollerRef} className="deck-scroller bg-craft-dots text-[#253238] relative">
                {/* Soft Ambient Glows */}
                <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                    <div className="absolute -top-32 right-[10%] w-96 h-96 bg-[#cfd8dc]/45 blur-[110px] rounded-full" />
                    <div className="absolute top-[30%] -left-24 w-96 h-96 bg-[#eceff1]/70 blur-[120px] rounded-full" />
                    <div className="absolute bottom-10 right-[15%] w-96 h-96 bg-emerald-100/40 blur-[120px] rounded-full" />
                </div>

                <main className="relative z-10">
                    {/* =========================================================
                        SECTION 01: INTRODUCTION, GITHUB PHOTO & STACK STRIP
                       ========================================================= */}
                    <section
                        id="slide-intro"
                        aria-labelledby="hero-heading"
                        className="deck-slide max-w-6xl mx-auto px-4 sm:px-6"
                    >
                        <div className="slide-stage grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold">
                                    <span className="w-2 h-2 rounded-full bg-emerald-600 pulse-dot" aria-hidden="true" />
                                    <span>{t.hero.badge}</span>
                                </div>

                                <p className="text-base sm:text-lg font-bold text-[#455055]">
                                    {t.hero.greeting}
                                </p>

                                <h1
                                    id="hero-heading"
                                    className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#253238] leading-[1.12]"
                                >
                                    {t.hero.headlinePart1}
                                    <span className="underline decoration-[#607d8b] decoration-wavy decoration-2 underline-offset-8 text-[#2b333f]">
                                        {t.hero.headlineHighlight}
                                    </span>
                                    {t.hero.headlinePart2}
                                </h1>

                                <p className="text-sm sm:text-base text-[#455055] leading-relaxed">
                                    {t.hero.description}
                                </p>

                                {/* Visual Tech Stack Icons Strip */}
                                <div className="pt-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                        {[
                                            { label: 'React', icon: '/stacks/react.svg' },
                                            { label: 'Flutter', icon: '/stacks/flutter.svg' },
                                            { label: 'Angular', icon: '/stacks/angular.svg' },
                                            { label: 'TypeScript', icon: '/stacks/typescript.svg' },
                                            { label: 'PHP / Laravel', icon: '/stacks/laravel.svg' },
                                            { label: 'Node.js', icon: '/stacks/nodejs.svg' },
                                            { label: '.NET Core / C#', icon: '/stacks/dotnetcore.svg' },
                                            { label: 'Python / Django', icon: '/stacks/python.svg' },
                                        ].map((item) => (
                                            <span
                                                key={item.label}
                                                className="inline-flex items-center gap-1.5 bg-white border border-[#cfd8dc] px-2.5 py-1 rounded-xl text-xs font-bold text-[#253238] shadow-2xs"
                                            >
                                                <img
                                                    src={item.icon}
                                                    alt=""
                                                    width={16}
                                                    height={16}
                                                    className="w-4 h-4 object-contain shrink-0"
                                                />
                                                <span>{item.label}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-3 pt-1">
                                    <button
                                        type="button"
                                        onClick={() => scrollToSlide(1)}
                                        className="inline-flex items-center gap-2 bg-[#253238] hover:bg-[#182126] text-white font-bold text-sm px-5 py-3 rounded-2xl shadow-md transition-transform active:scale-95 cursor-pointer"
                                    >
                                        <FolderGit2 className="w-4 h-4 text-[#cfd8dc]" aria-hidden="true" />
                                        <span>{t.hero.primaryCta}</span>
                                    </button>

                                    <a
                                        href={profile.cvPtUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-white hover:bg-[#eceff1] text-[#253238] border-2 border-[#cfd8dc] font-bold text-sm px-4 py-2.5 rounded-2xl transition-colors"
                                    >
                                        <Download className="w-4 h-4 text-[#253238]" aria-hidden="true" />
                                        <span>{t.hero.cvPtBtn}</span>
                                    </a>

                                    <a
                                        href={profile.cvEnUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-white hover:bg-[#eceff1] text-[#253238] border-2 border-[#cfd8dc] font-bold text-sm px-4 py-2.5 rounded-2xl transition-colors"
                                    >
                                        <Download className="w-4 h-4 text-[#455055]" aria-hidden="true" />
                                        <span>{t.hero.cvEnBtn}</span>
                                    </a>
                                </div>

                                <div className="flex flex-wrap items-center gap-5 pt-1 text-xs sm:text-sm font-semibold text-[#455055]">
                                    <a
                                        href={profile.linkedinUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 hover:text-[#253238] transition-colors"
                                    >
                                        <LinkedinIcon className="w-4 h-4 text-[#253238]" />
                                        <span>/in/rafaelgcs</span>
                                    </a>
                                    <a
                                        href={profile.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 hover:text-[#253238] transition-colors"
                                    >
                                        <GithubIcon className="w-4 h-4 text-[#253238]" />
                                        <span>github.com/rafaelgcs</span>
                                    </a>
                                    <span className="inline-flex items-center gap-1">
                                        <MapPin className="w-4 h-4 text-[#455055]" aria-hidden="true" />
                                        <span>Salvador, Bahia 🇧🇷</span>
                                    </span>
                                </div>
                            </div>

                            {/* GitHub Profile Photo Framed Card */}
                            <div className="lg:col-span-5 flex justify-center">
                                <div className="relative w-full max-w-sm">
                                    <div className="float-badge absolute -top-4 -left-3 z-20 bg-[#eceff1] border-2 border-[#cfd8dc] text-[#253238] text-xs font-extrabold px-3 py-1.5 rounded-2xl shadow-md">
                                        {t.hero.stickerTop}
                                    </div>

                                    <figure className="craft-card rounded-3xl p-4 bg-white rotate-1 hover:rotate-0 transition-transform duration-300">
                                        <div className="relative rounded-2xl overflow-hidden border border-[#cfd8dc] bg-[#253238]">
                                            <img
                                                src={profile.avatarUrl}
                                                alt="Rafael Guimarães no seu setup de desenvolvimento (Foto oficial do GitHub)"
                                                width={360}
                                                height={360}
                                                fetchPriority="high"
                                                className="w-full h-64 sm:h-72 object-cover object-center"
                                            />
                                            {/* Brand Icon Watermark Badge */}
                                            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs p-2 rounded-xl border border-[#cfd8dc] shadow-sm">
                                                <img
                                                    src={profile.iconUrl}
                                                    alt=""
                                                    width={20}
                                                    height={30}
                                                    className="h-5 w-auto object-contain"
                                                />
                                            </div>
                                            {/* Overlay Stack Pills with SVG Icons */}
                                            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap justify-center gap-1.5">
                                                <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold bg-white/95 backdrop-blur-xs text-[#253238] rounded-full shadow-sm">
                                                    <img src="/stacks/react.svg" alt="" width={12} height={12} className="w-3 h-3" />
                                                    <span>React & RN</span>
                                                </span>
                                                <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold bg-white/95 backdrop-blur-xs text-[#253238] rounded-full shadow-sm">
                                                    <img src="/stacks/laravel.svg" alt="" width={12} height={12} className="w-3 h-3" />
                                                    <span>Laravel & PHP</span>
                                                </span>
                                                <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold bg-white/95 backdrop-blur-xs text-[#253238] rounded-full shadow-sm">
                                                    <img src="/stacks/python.svg" alt="" width={12} height={12} className="w-3 h-3" />
                                                    <span>Python & IA</span>
                                                </span>
                                            </div>
                                        </div>

                                        <figcaption className="pt-3 text-center">
                                            <p className="font-extrabold text-[#253238] text-base">Rafael Guimarães</p>
                                            <p className="font-mono text-xs text-[#607d8b]">
                                                {t.hero.polaroidCaption}
                                            </p>
                                        </figcaption>
                                    </figure>

                                    <div className="float-badge-delayed absolute -bottom-3 -right-2 z-20 bg-[#253238] text-white text-xs font-bold px-3.5 py-1.5 rounded-2xl shadow-lg">
                                        {t.hero.stickerBottom}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Scroll Cue */}
                        <div className="mt-5 flex justify-center">
                            <button
                                type="button"
                                onClick={() => scrollToSlide(1)}
                                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#455055] hover:text-[#253238] bg-white/90 border border-[#cfd8dc] px-4 py-1.5 rounded-full shadow-2xs transition-colors cursor-pointer"
                            >
                                <span>{t.nav.nextSlideHint}</span>
                                <ChevronDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
                            </button>
                        </div>
                    </section>

                    {/* =========================================================
                        SECTION 02: REAL PORTFOLIO PROJECTS (WITH ORIGINAL SCREENSHOTS)
                       ========================================================= */}
                    <section
                        id="slide-projects"
                        aria-labelledby="projects-heading"
                        className="deck-slide max-w-6xl mx-auto px-4 sm:px-6"
                    >
                        <div className="slide-stage space-y-4">
                            {/* Header + Category Filter Pills */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
                                <div className="space-y-1 max-w-2xl">
                                    <span className="font-mono text-[11px] font-extrabold text-[#455055] uppercase tracking-wider">
                                        {t.projects.sectionTag}
                                    </span>
                                    <h2 id="projects-heading" className="text-2xl sm:text-3xl font-extrabold text-[#253238]">
                                        {t.projects.title}
                                    </h2>
                                    <p className="text-[#455055] text-xs sm:text-sm">{t.projects.subtitle}</p>
                                </div>

                                <div
                                    className="flex flex-wrap gap-1.5"
                                    role="group"
                                    aria-label="Filtrar projetos por categoria"
                                >
                                    {t.projects.filters.map((f) => (
                                        <button
                                            key={f.id}
                                            type="button"
                                            onClick={() => handleFilterChange(f.id)}
                                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                                activeFilter === f.id
                                                    ? 'bg-[#253238] text-white shadow-sm'
                                                    : 'bg-white text-[#455055] border border-[#cfd8dc] hover:bg-[#eceff1]'
                                            }`}
                                        >
                                            {f.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Split Interactive Stage */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                                {/* Left Column: Compact Project Selector List with Thumbnail */}
                                <div className="lg:col-span-5 flex flex-col gap-2 max-h-[370px] overflow-y-auto pr-1">
                                    {filteredProjects.map((proj, idx) => {
                                        const isSelected = idx === safeProjectIndex;
                                        return (
                                            <button
                                                key={proj.id}
                                                type="button"
                                                onClick={() => setActiveProjectIndex(idx)}
                                                className={`w-full text-left p-2.5 sm:p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                                                    isSelected
                                                        ? 'bg-white border-[#253238] shadow-md'
                                                        : 'bg-white/75 border-[#dfe5e8] hover:bg-white hover:border-[#b0bec5]'
                                                }`}
                                            >
                                                <div className="flex items-center gap-3 min-w-0">
                                                    {proj.imageUrl ? (
                                                        <img
                                                            src={proj.imageUrl}
                                                            alt=""
                                                            width={48}
                                                            height={36}
                                                            loading="lazy"
                                                            className="w-12 h-9 rounded-lg object-cover border border-[#cfd8dc] shrink-0"
                                                        />
                                                    ) : (
                                                        <span
                                                            className={`w-10 h-9 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                                                                isSelected
                                                                    ? 'bg-[#253238] text-white'
                                                                    : 'bg-[#eceff1] text-[#455055]'
                                                            }`}
                                                        >
                                                            {String(idx + 1).padStart(2, '0')}
                                                        </span>
                                                    )}

                                                    <div className="min-w-0">
                                                        <div className="flex items-center gap-1.5 text-[10px] font-mono">
                                                            <span className="text-[#253238] font-bold truncate">
                                                                {proj.badge}
                                                            </span>
                                                            <span className="text-[#607d8b]">•</span>
                                                            <span className="text-[#455055] truncate">{proj.client}</span>
                                                        </div>
                                                        <p className="text-xs sm:text-sm font-extrabold text-[#253238] mt-0.5 truncate">
                                                            {proj.title}
                                                        </p>
                                                    </div>
                                                </div>

                                                <ChevronRight
                                                    className={`w-4 h-4 shrink-0 transition-transform ${
                                                        isSelected ? 'text-[#253238] translate-x-0.5' : 'text-[#607d8b]'
                                                    }`}
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Right Column: Active Project Spotlight Stage */}
                                <article className="lg:col-span-7 craft-card rounded-3xl p-5 sm:p-6 bg-white flex flex-col justify-between">
                                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                                        {/* Real Screenshot / Visual Mockup Preview */}
                                        <div className="sm:col-span-6">
                                            <ProjectVisualPreview project={currentProject} />
                                        </div>

                                        {/* Project Story & Impact */}
                                        <div className="sm:col-span-6 space-y-2.5">
                                            <div className="flex items-center justify-between text-xs">
                                                <span className="font-bold text-[#253238] bg-[#eceff1] border border-[#cfd8dc] px-2.5 py-0.5 rounded-full">
                                                    {currentProject.badge}
                                                </span>
                                                <span className="font-mono text-xs text-[#455055] font-semibold">
                                                    {currentProject.year}
                                                </span>
                                            </div>

                                            <h3 className="text-lg sm:text-xl font-extrabold text-[#253238] leading-snug">
                                                {currentProject.title}
                                            </h3>

                                            <p className="text-xs sm:text-sm text-[#455055] leading-relaxed">
                                                {currentProject.shortDesc}
                                            </p>

                                            <div className="bg-[#f5f7f8] border border-[#cfd8dc] rounded-xl p-2.5 text-xs text-[#253238]">
                                                <span className="font-extrabold block text-[10px] uppercase text-[#455055] mb-0.5">
                                                    🚀 Entrega & Resultado
                                                </span>
                                                {currentProject.impact}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Bar: Stack Pills with Icons + Prev/Next Controls + Modal/Live Buttons */}
                                    <div className="mt-4 pt-3.5 border-t border-[#eceff1] flex flex-wrap items-center justify-between gap-3">
                                        <div className="flex flex-wrap gap-1.5">
                                            {currentProject.stack.map((tech) => (
                                                <StackChip key={tech} tech={tech} size="sm" />
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2 ml-auto">
                                            <div className="inline-flex items-center rounded-xl border border-[#cfd8dc] bg-[#f5f7f8] p-0.5">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setActiveProjectIndex(
                                                            (safeProjectIndex - 1 + filteredProjects.length) %
                                                                filteredProjects.length
                                                        )
                                                    }
                                                    aria-label="Projeto anterior"
                                                    className="p-1.5 text-[#455055] hover:text-[#253238] cursor-pointer"
                                                >
                                                    <ChevronLeft className="w-4 h-4" />
                                                </button>
                                                <span className="font-mono text-[11px] font-bold text-[#253238] px-2">
                                                    {safeProjectIndex + 1}/{filteredProjects.length}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setActiveProjectIndex(
                                                            (safeProjectIndex + 1) % filteredProjects.length
                                                        )
                                                    }
                                                    aria-label="Próximo projeto"
                                                    className="p-1.5 text-[#455055] hover:text-[#253238] cursor-pointer"
                                                >
                                                    <ChevronRight className="w-4 h-4" />
                                                </button>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => openProjectModal(currentProject)}
                                                className="inline-flex items-center gap-1.5 bg-[#253238] hover:bg-[#182126] text-white font-bold text-xs py-2 px-3 rounded-xl transition-colors cursor-pointer"
                                            >
                                                <Eye className="w-3.5 h-3.5 text-[#cfd8dc]" aria-hidden="true" />
                                                <span>{t.projects.viewDetailsBtn}</span>
                                            </button>

                                            {currentProject.liveUrl && (
                                                <a
                                                    href={currentProject.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 bg-[#eceff1] hover:bg-[#cfd8dc] text-[#253238] border border-[#cfd8dc] font-bold text-xs py-2 px-3 rounded-xl transition-colors"
                                                >
                                                    <span>Visualizar</span>
                                                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                                                </a>
                                            )}

                                            {currentProject.repoUrl && (
                                                <a
                                                    href={currentProject.repoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 bg-white hover:bg-[#eceff1] text-[#253238] border border-[#cfd8dc] font-bold text-xs py-2 px-3 rounded-xl transition-colors"
                                                >
                                                    <GithubIcon className="w-3.5 h-3.5" />
                                                    <span>GitHub</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>

                    {/* =========================================================
                        SECTION 03: ABOUT ME & VISUAL TECH STACK WALL (WITH LOGOS)
                       ========================================================= */}
                    <section
                        id="slide-story"
                        aria-labelledby="story-heading"
                        className="deck-slide max-w-6xl mx-auto px-4 sm:px-6"
                    >
                        <div className="slide-stage space-y-5">
                            <div className="space-y-1 max-w-3xl">
                                <span className="font-mono text-[11px] font-extrabold text-[#455055] uppercase tracking-wider">
                                    {t.storySlide.sectionTag}
                                </span>
                                <h2 id="story-heading" className="text-2xl sm:text-3xl font-extrabold text-[#253238]">
                                    {t.storySlide.title}
                                </h2>
                                <p className="text-[#455055] text-xs sm:text-sm">
                                    {t.storySlide.subtitle}
                                </p>
                            </div>

                            {/* Visual Grid of Tech Stack Logos (18 Stacks from rafaelgcs.com & CV) */}
                            <div className="craft-card rounded-3xl p-4 sm:p-5 bg-white">
                                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                                    {ALL_STACKS.map((st) => (
                                        <div
                                            key={st.name}
                                            className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-[#f5f7f8] border border-[#dfe5e8] hover:border-[#253238] hover:bg-white transition-all"
                                        >
                                            <img
                                                src={st.icon}
                                                alt={st.name}
                                                width={28}
                                                height={28}
                                                loading="lazy"
                                                className="w-6 h-6 sm:w-7 sm:h-7 object-contain shrink-0"
                                            />
                                            <div className="min-w-0">
                                                <p className="text-xs font-extrabold text-[#253238] truncate">
                                                    {st.name}
                                                </p>
                                                <p className="text-[10px] font-mono text-[#607d8b] truncate">
                                                    {st.sub}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 4 Compact DNA Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {t.hero.funFacts.map((fact, idx) => (
                                    <article
                                        key={idx}
                                        className="craft-card rounded-2xl p-4 space-y-2 bg-white flex flex-col justify-between"
                                    >
                                        <div className="space-y-1.5">
                                            <div className="flex items-center justify-between">
                                                <span className="text-lg bg-[#f5f7f8] border border-[#cfd8dc] w-9 h-9 rounded-xl flex items-center justify-center">
                                                    {fact.emoji}
                                                </span>
                                                <span className="font-mono text-[10px] font-bold text-[#607d8b]">
                                                    0{idx + 1}
                                                </span>
                                            </div>
                                            <h3 className="text-sm sm:text-base font-extrabold text-[#253238]">
                                                {fact.title}
                                            </h3>
                                            <p className="text-xs text-[#455055] leading-relaxed">
                                                {fact.text}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* =========================================================
                        SECTION 04: INTERACTIVE ARCHITECTURE PLAYGROUND WITH STACK LOGOS
                       ========================================================= */}
                    <section
                        id="slide-playground"
                        aria-labelledby="playground-heading"
                        className="deck-slide max-w-6xl mx-auto px-4 sm:px-6"
                    >
                        <div className="slide-stage craft-card rounded-3xl p-6 sm:p-9 bg-white space-y-6">
                            <div className="space-y-1.5 max-w-2xl">
                                <span className="font-mono text-[11px] font-extrabold text-[#455055] uppercase tracking-wider">
                                    {t.playground.sectionTag}
                                </span>
                                <h2 id="playground-heading" className="text-2xl sm:text-3xl font-extrabold text-[#253238]">
                                    {t.playground.title}
                                </h2>
                                <p className="text-[#455055] text-xs sm:text-sm">
                                    {t.playground.subtitle}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                                <div className="lg:col-span-5 space-y-2.5">
                                    {t.playground.steps.map((s, idx) => (
                                        <button
                                            key={s.step}
                                            type="button"
                                            onClick={() => setActiveStep(idx)}
                                            className={`w-full text-left p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                                                activeStep === idx
                                                    ? 'bg-[#eceff1] border-[#253238] shadow-xs'
                                                    : 'bg-[#f5f7f8] border-[#dfe5e8] hover:bg-[#eceff1]/60'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3 min-w-0">
                                                <span
                                                    className={`w-8 h-8 rounded-xl font-mono text-xs font-extrabold flex items-center justify-center shrink-0 ${
                                                        activeStep === idx
                                                            ? 'bg-[#253238] text-white'
                                                            : 'bg-white text-[#455055] border border-[#cfd8dc]'
                                                    }`}
                                                >
                                                    {s.step}
                                                </span>
                                                <div className="min-w-0">
                                                    <p className="font-bold text-xs sm:text-sm text-[#253238] truncate">
                                                        {s.title}
                                                    </p>
                                                    <p className="font-mono text-[11px] text-[#455055] mt-0.5 truncate">
                                                        {s.tech}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="hidden sm:flex items-center -space-x-1.5 shrink-0">
                                                {s.icons.slice(0, 3).map((ic, i) => (
                                                    <span
                                                        key={i}
                                                        className="w-6 h-6 rounded-full bg-white border border-[#cfd8dc] flex items-center justify-center p-1 shadow-2xs"
                                                    >
                                                        <img
                                                            src={ic}
                                                            alt=""
                                                            width={14}
                                                            height={14}
                                                            loading="lazy"
                                                            className="w-3.5 h-3.5 object-contain"
                                                        />
                                                    </span>
                                                ))}
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                <div className="lg:col-span-7 bg-gradient-to-br from-[#253238] via-[#2b333f] to-[#182126] text-white rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <span className="font-mono text-xs uppercase tracking-widest text-[#cfd8dc] font-bold">
                                            CAMADA {t.playground.steps[activeStep].step} DE 04
                                        </span>
                                        <span className="text-xs font-mono bg-white/10 px-3 py-1 rounded-full text-[#eceff1]">
                                            {t.playground.steps[activeStep].tech}
                                        </span>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-extrabold">
                                        {t.playground.steps[activeStep].title}
                                    </h3>

                                    <p className="text-[#eceff1] text-sm sm:text-base leading-relaxed">
                                        {t.playground.steps[activeStep].story}
                                    </p>

                                    {/* Layer Stack Icons Showcase */}
                                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                                        {t.playground.steps[activeStep].icons.map((ic, idx) => (
                                            <div
                                                key={idx}
                                                className="w-10 h-10 rounded-2xl bg-white/95 p-2 flex items-center justify-center shadow-md"
                                            >
                                                <img
                                                    src={ic}
                                                    alt=""
                                                    width={24}
                                                    height={24}
                                                    loading="lazy"
                                                    className="w-6 h-6 object-contain"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-2 pt-1">
                                        {[0, 1, 2, 3].map((dot) => (
                                            <span
                                                key={dot}
                                                className={`h-2 rounded-full transition-all ${
                                                    activeStep === dot
                                                        ? 'w-10 bg-white'
                                                        : 'w-2 bg-white/30'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* =========================================================
                        SECTION 05: CAREER TIMELINE & FINAL CALL TO ACTION
                       ========================================================= */}
                    <section
                        id="slide-career"
                        aria-labelledby="experience-heading"
                        className="deck-slide max-w-6xl mx-auto px-4 sm:px-6"
                    >
                        <div className="slide-stage space-y-5">
                            <div className="space-y-1">
                                <span className="font-mono text-[11px] font-extrabold text-[#455055] uppercase tracking-wider">
                                    {t.experience.sectionTag}
                                </span>
                                <h2 id="experience-heading" className="text-2xl sm:text-3xl font-extrabold text-[#253238]">
                                    {t.experience.title}
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {t.experience.jobs.map((job, idx) => (
                                    <article
                                        key={idx}
                                        className="craft-card rounded-2xl p-4 space-y-2 bg-white flex flex-col justify-between"
                                    >
                                        <div className="space-y-1.5">
                                            <span className="text-[10px] font-bold text-[#253238] bg-[#eceff1] border border-[#cfd8dc] px-2 py-0.5 rounded inline-block">
                                                {job.badge}
                                            </span>
                                            <h3 className="text-base font-extrabold text-[#253238]">{job.company}</h3>
                                            <p className="text-xs font-bold text-[#455055]">{job.role}</p>
                                            <p className="text-xs text-[#455055] leading-relaxed">{job.summary}</p>
                                        </div>
                                        <p className="text-[10px] font-mono text-[#607d8b] pt-2 border-t border-[#eceff1]">
                                            {job.period}
                                        </p>
                                    </article>
                                ))}
                            </div>

                            {/* Final Contact Banner */}
                            <div className="craft-card rounded-3xl bg-white p-5 sm:p-7 flex flex-col lg:flex-row items-center justify-between gap-5">
                                <div className="flex items-center gap-4 text-center lg:text-left flex-col sm:flex-row">
                                    <img
                                        src={profile.iconUrl}
                                        alt=""
                                        width={36}
                                        height={54}
                                        loading="lazy"
                                        className="h-11 w-auto object-contain shrink-0"
                                    />
                                    <div>
                                        <h3 className="text-lg sm:text-2xl font-extrabold text-[#253238]">
                                            {t.contact.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-[#455055] mt-0.5">
                                            {t.contact.subtitle}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                                    <button
                                        type="button"
                                        onClick={openContactModal}
                                        className="inline-flex items-center gap-2 bg-[#253238] hover:bg-[#182126] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-md transition-colors cursor-pointer"
                                    >
                                        <Send className="w-4 h-4 text-[#cfd8dc]" aria-hidden="true" />
                                        <span>{t.contact.openModalBtn}</span>
                                    </button>

                                    <a
                                        href={profile.whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-md transition-colors"
                                    >
                                        <MessageSquare className="w-4 h-4" aria-hidden="true" />
                                        <span>{t.contact.whatsappBtn}</span>
                                    </a>
                                </div>
                            </div>

                            {/* Compact Footer */}
                            <footer className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#455055]">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={profile.logoUrl}
                                        alt="rafaelgcs"
                                        width={110}
                                        height={28}
                                        loading="lazy"
                                        className="h-6 w-auto object-contain"
                                    />
                                    <span>•</span>
                                    <span>Feito com ☕ em Salvador-BA ({profile.domain})</span>
                                </div>
                                <div className="flex items-center gap-4 font-semibold text-[#253238]">
                                    <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        LinkedIn
                                    </a>
                                    <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        GitHub
                                    </a>
                                    <a href={profile.cvPtUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        CV (PT)
                                    </a>
                                    <a href={profile.cvEnUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        CV (EN)
                                    </a>
                                </div>
                            </footer>
                        </div>
                    </section>
                </main>
            </div>

            {/* PROJECT CASE STUDY MODAL (<dialog>) */}
            <dialog
                ref={projectDialogRef}
                {...({ closedby: 'any' })}
                className="contact-modal m-auto w-full max-w-xl rounded-3xl bg-white border border-[#cfd8dc] text-[#253238] p-6 sm:p-8 shadow-2xl"
                aria-labelledby="project-modal-title"
            >
                {selectedProject && (
                    <div className="space-y-4">
                        <div className="flex items-start justify-between gap-4 border-b border-[#eceff1] pb-3">
                            <div>
                                <span className="text-xs font-bold text-[#253238] bg-[#eceff1] px-2.5 py-0.5 rounded-full">
                                    {selectedProject.badge} • {selectedProject.client}
                                </span>
                                <h2 id="project-modal-title" className="text-xl font-extrabold text-[#253238] mt-1.5">
                                    {selectedProject.title}
                                </h2>
                            </div>
                            <button
                                type="button"
                                onClick={closeProjectModal}
                                className="p-1.5 rounded-xl text-[#455055] hover:text-[#253238] hover:bg-[#eceff1] cursor-pointer"
                            >
                                <X className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>

                        {selectedProject.imageUrl && (
                            <div className="rounded-2xl overflow-hidden border border-[#cfd8dc] bg-[#eceff1]">
                                <img
                                    src={selectedProject.imageUrl}
                                    alt={selectedProject.title}
                                    width={640}
                                    height={360}
                                    loading="lazy"
                                    className="w-full h-48 sm:h-56 object-cover object-top"
                                />
                            </div>
                        )}

                        <div className="space-y-3 text-xs sm:text-sm text-[#455055] leading-relaxed">
                            <div className="bg-[#f5f7f8] p-3.5 rounded-2xl border border-[#cfd8dc]">
                                <p className="font-extrabold text-[#253238] text-xs uppercase mb-1">
                                    🎯 O Desafio
                                </p>
                                <p>{selectedProject.challenge}</p>
                            </div>

                            <div className="bg-[#eceff1]/70 p-3.5 rounded-2xl border border-[#cfd8dc]">
                                <p className="font-extrabold text-[#253238] text-xs uppercase mb-1">
                                    🛠️ Como Eu Construí
                                </p>
                                <p>{selectedProject.solution}</p>
                            </div>

                            <div className="bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-200">
                                <p className="font-extrabold text-emerald-950 text-xs uppercase mb-1">
                                    🚀 Entrega & Resultado
                                </p>
                                <p className="text-emerald-900">{selectedProject.impact}</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-xs font-bold text-[#455055] uppercase mb-2">
                                Tecnologias Utilizadas:
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {selectedProject.stack.map((tech) => (
                                    <StackChip key={tech} tech={tech} size="md" />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-end gap-2.5 pt-3 border-t border-[#eceff1]">
                            {selectedProject.repoUrl && (
                                <a
                                    href={selectedProject.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 bg-white hover:bg-[#eceff1] text-[#253238] border border-[#cfd8dc] font-bold text-xs px-4 py-2.5 rounded-xl"
                                >
                                    <GithubIcon className="w-3.5 h-3.5" />
                                    <span>Ver Repositório</span>
                                </a>
                            )}
                            {selectedProject.liveUrl && (
                                <a
                                    href={selectedProject.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 bg-[#eceff1] hover:bg-[#cfd8dc] text-[#253238] font-bold text-xs px-4 py-2.5 rounded-xl"
                                >
                                    <span>Visitar Site Real</span>
                                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                                </a>
                            )}
                            <button
                                type="button"
                                onClick={closeProjectModal}
                                className="px-4 py-2.5 rounded-xl bg-[#253238] text-white text-xs font-bold cursor-pointer"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
            </dialog>

            {/* CONTACT MODAL (<dialog>) */}
            <dialog
                ref={contactDialogRef}
                {...({ closedby: 'any' })}
                className="contact-modal m-auto w-full max-w-lg rounded-3xl bg-white border border-[#cfd8dc] text-[#253238] p-6 sm:p-8 shadow-2xl"
                aria-labelledby="modal-contact-title"
            >
                <div className="flex items-start justify-between gap-4 border-b border-[#eceff1] pb-4">
                    <div className="flex items-center gap-3">
                        <img
                            src={profile.iconUrl}
                            alt=""
                            width={24}
                            height={36}
                            className="h-7 w-auto object-contain"
                        />
                        <div>
                            <h2 id="modal-contact-title" className="text-lg font-extrabold text-[#253238]">
                                {t.contact.dialogTitle}
                            </h2>
                            <p className="text-xs text-[#455055] mt-0.5">{t.contact.dialogSubtitle}</p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={closeContactModal}
                        aria-label={t.contact.closeBtn}
                        className="p-1.5 rounded-lg text-[#455055] hover:text-[#253238] hover:bg-[#eceff1] transition-colors cursor-pointer"
                    >
                        <X className="w-5 h-5" aria-hidden="true" />
                    </button>
                </div>

                {flash?.success && (
                    <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm flex items-center gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />
                        <span>{flash.success}</span>
                    </div>
                )}

                <form onSubmit={handleContactSubmit} className="mt-5 space-y-4">
                    <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold text-[#253238] mb-1.5">
                            {t.contact.nameLabel}
                        </label>
                        <input
                            id="contact-name"
                            type="text"
                            required
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="w-full rounded-xl bg-[#f5f7f8] border border-[#cfd8dc] px-3.5 py-2.5 text-sm text-[#253238] focus:outline-none focus:border-[#253238] focus:bg-white"
                        />
                        {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="contact-email" className="block text-xs font-bold text-[#253238] mb-1.5">
                                {t.contact.emailLabel}
                            </label>
                            <input
                                id="contact-email"
                                type="email"
                                inputMode="email"
                                autoComplete="email"
                                required
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full rounded-xl bg-[#f5f7f8] border border-[#cfd8dc] px-3.5 py-2.5 text-sm text-[#253238] focus:outline-none focus:border-[#253238] focus:bg-white"
                            />
                            {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="contact-company" className="block text-xs font-bold text-[#253238] mb-1.5">
                                {t.contact.companyLabel}
                            </label>
                            <input
                                id="contact-company"
                                type="text"
                                autoComplete="organization"
                                value={data.company}
                                onChange={(e) => setData('company', e.target.value)}
                                className="w-full rounded-xl bg-[#f5f7f8] border border-[#cfd8dc] px-3.5 py-2.5 text-sm text-[#253238] focus:outline-none focus:border-[#253238] focus:bg-white"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="contact-message" className="block text-xs font-bold text-[#253238] mb-1.5">
                            {t.contact.messageLabel}
                        </label>
                        <textarea
                            id="contact-message"
                            rows={4}
                            required
                            value={data.message}
                            onChange={(e) => setData('message', e.target.value)}
                            className="w-full rounded-xl bg-[#f5f7f8] border border-[#cfd8dc] px-3.5 py-2.5 text-sm text-[#253238] focus:outline-none focus:border-[#253238] focus:bg-white resize-none"
                        />
                        {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={closeContactModal}
                            className="px-4 py-2.5 rounded-xl border border-[#cfd8dc] text-xs font-bold text-[#455055] hover:text-[#253238] hover:bg-[#eceff1] transition-colors cursor-pointer"
                        >
                            {t.contact.closeBtn}
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex items-center gap-2 bg-[#253238] hover:bg-[#182126] disabled:opacity-50 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                        >
                            <Send className="w-3.5 h-3.5 text-[#cfd8dc]" aria-hidden="true" />
                            <span>{processing ? t.contact.submittingBtn : t.contact.submitBtn}</span>
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    );
}
