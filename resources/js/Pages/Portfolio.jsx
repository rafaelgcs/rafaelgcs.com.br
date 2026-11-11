import React, { useState, useRef, useEffect } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import {
    Globe,
    Download,
    Mail,
    MessageSquare,
    CheckCircle2,
    Briefcase,
    GraduationCap,
    MapPin,
    Send,
    X,
    ExternalLink,
    Coffee,
    Eye,
    FolderGit2,
    Zap,
    ChevronDown,
    ChevronUp,
    ChevronLeft,
    ChevronRight,
    Sparkles
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

/* Visual Figurative Stage Previews harmonized with Brand Palette (#253238) */
function ProjectVisualPreview({ type }) {
    if (type === 'whatsapp-ai') {
        return (
            <div className="h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-[#eceff1] via-[#f5f7f8] to-emerald-50/70 p-4 sm:p-5 flex flex-col justify-between border border-[#cfd8dc] shadow-inner relative overflow-hidden">
                <div className="flex items-center justify-between bg-white/95 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-[#cfd8dc] shadow-2xs">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                        <span className="text-xs font-bold text-[#253238]">Assistente IA • WhatsApp</span>
                    </div>
                    <span className="text-[10px] font-mono font-semibold bg-[#253238] text-white px-2.5 py-0.5 rounded-full">
                        Gemini + Vertex AI
                    </span>
                </div>

                <div className="space-y-2.5 my-auto py-2">
                    <div className="bg-white border border-[#cfd8dc] rounded-2xl rounded-tl-xs px-3.5 py-2 text-xs text-[#253238] max-w-[85%] shadow-2xs">
                        Olá! Preciso consultar o status da Ordem #4821 no Maximo.
                    </div>
                    <div className="bg-[#253238] text-white rounded-2xl rounded-tr-xs px-3.5 py-2.5 text-xs ml-auto max-w-[90%] shadow-sm">
                        <span className="font-semibold block text-[10px] text-emerald-300 mb-0.5">
                            ⚡ Vertex AI Agent • 0.8s
                        </span>
                        OS #4821 localizada! Equipe técnica já está em rota. Deseja receber alertas em tempo real?
                    </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#455055] px-1">
                    <span>Webhook: Python/Django REST</span>
                    <span>Status: 99.9% Uptime</span>
                </div>
            </div>
        );
    }

    if (type === 'maximo-eam') {
        return (
            <div className="h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-[#eceff1] via-white to-[#f5f7f8] p-4 sm:p-5 flex flex-col justify-between border border-[#cfd8dc] shadow-inner relative overflow-hidden">
                <div className="flex items-center justify-between bg-white/95 px-3 py-2 rounded-xl border border-[#cfd8dc]">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#253238]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#455055]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#607d8b]" />
                        <span className="ml-1.5 text-[11px] font-mono font-semibold text-[#455055]">
                            eam-portal.almaviva
                        </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-[#eceff1] border border-[#cfd8dc] text-[#253238] px-2 py-0.5 rounded">
                        Django + React
                    </span>
                </div>

                <div className="grid grid-cols-3 gap-2.5 my-auto">
                    <div className="bg-white p-3 rounded-xl border border-[#cfd8dc] shadow-2xs">
                        <span className="text-[10px] text-[#455055] block">Ativos Sinc.</span>
                        <span className="text-sm sm:text-base font-extrabold text-[#253238]">99.8%</span>
                        <span className="w-full h-1.5 bg-[#eceff1] rounded-full mt-1.5 block overflow-hidden">
                            <span className="w-11/12 h-full bg-[#253238] block" />
                        </span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-[#cfd8dc] shadow-2xs">
                        <span className="text-[10px] text-[#455055] block">Filas REST</span>
                        <span className="text-sm sm:text-base font-extrabold text-[#253238]">142 ms</span>
                        <span className="w-full h-1.5 bg-[#eceff1] rounded-full mt-1.5 block overflow-hidden">
                            <span className="w-4/5 h-full bg-[#455055] block" />
                        </span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-[#cfd8dc] shadow-2xs">
                        <span className="text-[10px] text-[#455055] block">IBM Maximo</span>
                        <span className="text-xs font-bold text-emerald-700 mt-1 block">● Online</span>
                        <span className="text-[9px] font-mono text-[#607d8b]">EAM Core</span>
                    </div>
                </div>

                <div className="bg-white/95 border border-[#cfd8dc] rounded-xl px-3 py-2 flex items-center justify-between text-[11px] text-[#455055]">
                    <span className="font-mono">POST /api/v1/maximo/workorders</span>
                    <span className="text-emerald-700 font-bold">200 OK</span>
                </div>
            </div>
        );
    }

    if (type === 'villa-encantada') {
        return (
            <div className="h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-[#f5f7f8] via-amber-50/50 to-[#eceff1] p-4 sm:p-5 flex flex-col justify-between border border-[#cfd8dc] shadow-inner relative overflow-hidden">
                <div className="bg-white/95 border border-[#cfd8dc] rounded-full px-3.5 py-1.5 flex items-center justify-between text-xs shadow-2xs">
                    <span className="font-mono text-[11px] text-[#253238] flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-[#455055]" />
                        escolavillaencantada.com.br
                    </span>
                    <span className="text-[10px] font-bold text-[#253238] bg-[#eceff1] px-2.5 py-0.5 rounded-full">
                        Em Produção
                    </span>
                </div>

                <div className="bg-white border border-[#cfd8dc] rounded-2xl p-4 shadow-xs space-y-2 my-auto">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-extrabold text-[#253238]">
                            🏰 Escola Villa Encantada
                        </span>
                        <div className="flex gap-1">
                            <span className="w-6 h-2 rounded-full bg-[#253238]" />
                            <span className="w-4 h-2 rounded-full bg-[#607d8b]" />
                        </div>
                    </div>
                    <p className="text-xs text-[#455055] leading-relaxed">
                        Portal institucional, proposta pedagógica e captação de matrículas desenvolvido sob medida para cliente real em Salvador.
                    </p>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#455055] px-1">
                    <span>Design UI/UX + Front-End + Back-End</span>
                    <span>100% Responsivo</span>
                </div>
            </div>
        );
    }

    if (type === 'capgemini-banking') {
        return (
            <div className="h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-[#eceff1] via-[#f5f7f8] to-white p-4 sm:p-5 flex flex-col justify-between border border-[#cfd8dc] shadow-inner relative overflow-hidden">
                <div className="flex items-center justify-between bg-white/95 px-3 py-1.5 rounded-xl border border-[#cfd8dc]">
                    <span className="text-[11px] font-mono font-bold text-[#253238]">
                        Enterprise Core • Capgemini
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-white bg-[#253238] px-2 py-0.5 rounded">
                        .NET Core + React
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-3 my-auto">
                    <div className="bg-white p-3.5 rounded-xl border border-[#cfd8dc] shadow-2xs space-y-1.5">
                        <div className="text-[10px] font-bold text-[#607d8b] uppercase">Micro-Frontend</div>
                        <div className="text-xs sm:text-sm font-extrabold text-[#253238]">Design System</div>
                        <div className="flex gap-1 pt-1">
                            <span className="px-2 py-0.5 text-[10px] bg-[#eceff1] text-[#253238] rounded border border-[#cfd8dc] font-mono">
                                React
                            </span>
                            <span className="px-2 py-0.5 text-[10px] bg-[#eceff1] text-[#253238] rounded border border-[#cfd8dc] font-mono">
                                Angular
                            </span>
                        </div>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-[#cfd8dc] shadow-2xs space-y-1.5">
                        <div className="text-[10px] font-bold text-[#607d8b] uppercase">Back-End API</div>
                        <div className="text-xs sm:text-sm font-extrabold text-[#253238]">C# .NET Core</div>
                        <div className="text-[11px] text-emerald-700 font-bold pt-1">
                            ✓ Alta Escala
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#455055] px-1">
                    <span>Squads Ágeis (Scrum / Jira)</span>
                    <span>2 Promoções em &lt; 2 anos</span>
                </div>
            </div>
        );
    }

    return (
        <div className="h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-[#eceff1] via-[#f5f7f8] to-white p-4 sm:p-5 flex items-center justify-center gap-4 border border-[#cfd8dc] shadow-inner relative overflow-hidden">
            <div className="w-28 h-44 bg-white rounded-2xl border-2 border-[#253238] shadow-md p-2 flex flex-col justify-between shrink-0">
                <div className="w-8 h-1 bg-[#cfd8dc] rounded-full mx-auto" />
                <div className="space-y-1.5 my-auto">
                    <div className="h-6 bg-[#253238] rounded-lg flex items-center justify-center text-[9px] font-bold text-white">
                        Flutter / RN
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                        <div className="h-8 bg-[#eceff1] rounded" />
                        <div className="h-8 bg-[#cfd8dc] rounded" />
                    </div>
                </div>
                <div className="w-10 h-1 bg-[#253238] rounded-full mx-auto" />
            </div>

            <div className="flex-1 bg-white rounded-xl border border-[#cfd8dc] shadow-xs p-3.5 space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#253238] bg-[#eceff1] px-2 py-0.5 rounded inline-block">
                    SENAI CIMATEC • P&D
                </span>
                <p className="text-xs sm:text-sm font-extrabold text-[#253238] leading-tight">
                    Apps & Dashboards Material UI
                </p>
                <div className="flex items-end gap-1.5 h-12 pt-1">
                    <span className="w-3.5 h-5 bg-[#cfd8dc] rounded-t" />
                    <span className="w-3.5 h-8 bg-[#607d8b] rounded-t" />
                    <span className="w-3.5 h-6 bg-[#455055] rounded-t" />
                    <span className="w-3.5 h-11 bg-[#253238] rounded-t" />
                    <span className="w-3.5 h-7 bg-emerald-600 rounded-t" />
                </div>
            </div>
        </div>
    );
}

const CONTENT = {
    pt: {
        slides: [
            { id: 'slide-intro', label: 'Início' },
            { id: 'slide-projects', label: 'Projetos' },
            { id: 'slide-story', label: 'Sobre Mim' },
            { id: 'slide-playground', label: 'Arquitetura' },
            { id: 'slide-career', label: 'Carreira & Contato' },
        ],
        nav: {
            cta: 'Falar Comigo',
            nextSlideHint: 'Role para explorar meus projetos',
        },
        hero: {
            greeting: 'Olá! Eu sou o Rafael Guimarães 👋',
            badge: 'Disponível para novos projetos & vagas Sênior (Remoto / Híbrido)',
            headlinePart1: 'Transformo problemas complexos em ',
            headlineHighlight: 'sistemas web & agentes de IA',
            headlinePart2: ' que as pessoas adoram usar.',
            description:
                'Nascido e criado em Salvador-BA, comecei pelo Design Gráfico e UI/UX antes de mergulhar fundo em Engenharia de Software no SENAI CIMATEC e na UFBA. Hoje somo +6 anos construindo plataformas Full Stack (Python, React, Node.js, .NET e Laravel) e inteligências conversacionais (Gemini, Vertex AI e Watson) para grandes operações.',
            primaryCta: 'Explorar Meus Projetos',
            cvPtBtn: 'Currículo (PT-BR)',
            cvEnBtn: 'Resume (EN)',
            polaroidCaption: 'github.com/rafaelgcs • Salvador, BA',
            stickerTop: '🎨 Base em Design + 🧠 Cérebro de Engenheiro',
            stickerBottom: '⚡ +6 anos de código em produção',
            funFacts: [
                {
                    emoji: '🎨 ➡️ 💻',
                    title: 'Do Design ao Código',
                    text: 'Comecei estudando Design Gráfico e UI/UX (2016) na SAGA antes de virar dev — por isso me importo tanto com a experiência visual e usabilidade de quem usa o sistema.',
                },
                {
                    emoji: '🚀',
                    title: 'Ex-CEO de Empresa Júnior',
                    text: 'Aos 20 anos co-fundei e presidi a EJC&T, aprendendo na prática a negociar com clientes reais, liderar squads e entregar softwares completos.',
                },
                {
                    emoji: '📈',
                    title: '3 Promoções em Consultorias',
                    text: 'Cresci rápido tanto na Capgemini quanto na AlmaViva porque foco em resolver a dor real do negócio e ajudar o time inteiro a performar.',
                },
                {
                    emoji: '🤖',
                    title: 'Pioneiro em IA no WhatsApp',
                    text: 'Construo assistentes inteligentes desde a época do IBM Watson até a geração atual de agentes autônomos com Google Gemini e Vertex AI.',
                },
            ],
        },
        projects: {
            sectionTag: 'PORTFÓLIO & ENTREGAS REAIS',
            title: 'O que eu já construí na prática',
            subtitle:
                'Selecione um projeto na lista ao lado para inspecionar a arquitetura, o desafio e o impacto gerado:',
            filters: [
                { id: 'all', label: 'Todos (5)' },
                { id: 'ai', label: '🤖 IA & Chatbots' },
                { id: 'web', label: '🌐 Web & Full Stack' },
                { id: 'mobile', label: '📱 Mobile & UI/UX' },
            ],
            viewDetailsBtn: 'Ver ficha técnica completa',
            items: [
                {
                    id: 'genai-whatsapp',
                    category: 'ai',
                    visualType: 'whatsapp-ai',
                    badge: 'IA Generativa & WhatsApp',
                    client: 'AlmaViva Solutions',
                    year: '2024 – 2026',
                    title: 'Agentes Conversacionais com Gemini, Vertex AI & Watson',
                    shortDesc:
                        'Orquestração de assistentes inteligentes no WhatsApp integrados a APIs REST em Python/Django para automatizar atendimento em larga escala.',
                    challenge:
                        'Operações de atendimento precisavam responder milhares de solicitações diárias no WhatsApp sem perder o contexto e integrando dados de sistemas legados.',
                    solution:
                        'Desenvolvi uma arquitetura híbrida conectando IBM Watson Assistant, Google Vertex AI e modelos Gemini a microsserviços em Python (Django) e interfaces gerenciais em React/Angular.',
                    impact: 'Redução drástica no tempo de triagem e automação de ponta a ponta no canal preferido dos clientes.',
                    stack: ['Python', 'Django', 'Google Vertex AI', 'Gemini API', 'IBM Watson', 'WhatsApp API'],
                    liveUrl: null,
                },
                {
                    id: 'villa-encantada',
                    category: 'web',
                    visualType: 'villa-encantada',
                    badge: 'Projeto Web Ao Vivo',
                    client: 'Escola Villa Encantada',
                    year: 'Em Produção',
                    title: 'Plataforma Web — Escola Villa Encantada',
                    shortDesc:
                        'Desenvolvimento completo da presença digital e plataforma web para instituição de ensino em Salvador, do protótipo UI/UX ao deploy.',
                    challenge:
                        'A instituição precisava de uma plataforma digital acolhedora, rápida e responsiva para apresentar sua proposta pedagógica e captar novas matrículas.',
                    solution:
                        'Apliquei metodologias ágeis e todo o ciclo de engenharia de software para desenhar a interface, codificar o front-end/back-end e colocar o domínio em produção.',
                    impact: 'Projeto real entregue e publicado em escolavillaencantada.com.br.',
                    stack: ['JavaScript', 'HTML5 & CSS3', 'Bootstrap', 'UI/UX Design', 'Web'],
                    liveUrl: 'https://escolavillaencantada.com.br',
                },
                {
                    id: 'maximo-integration',
                    category: 'web',
                    visualType: 'maximo-eam',
                    badge: 'Sistemas Críticos & EAM',
                    client: 'AlmaViva Solutions',
                    year: '2022 – 2026',
                    title: 'Ecossistema Web Integrado ao IBM Maximo',
                    shortDesc:
                        'Portal Full Stack em Django, React e Angular conectado ao IBM Maximo para controle de ativos corporativos e ordens de serviço.',
                    challenge:
                        'Conectar equipes de operação e gestão de ativos a fluxos complexos do IBM Maximo através de interfaces web modernas e rápidas.',
                    solution:
                        'Construção de APIs RESTful robustas em Python (Django) e módulos visuais em Angular e React.js com controle de versão rigoroso no GitLab/GitHub.',
                    impact: 'Maior confiabilidade operacional e reconhecimento interno com promoção para Analista Nível IV.',
                    stack: ['Python 3', 'Django', 'Angular', 'React.js', 'IBM Maximo', 'REST APIs'],
                    liveUrl: null,
                },
                {
                    id: 'capgemini-modernization',
                    category: 'web',
                    visualType: 'capgemini-banking',
                    badge: 'Consultoria Global',
                    client: 'Capgemini',
                    year: '2020 – 2022',
                    title: 'Modernização de Sistemas Corporativos (.NET & React)',
                    shortDesc:
                        'Evolução de arquiteturas front-end (React, Angular, Node.js) e serviços back-end em C# (.NET Core / ASP.NET) para clientes enterprise.',
                    challenge:
                        'Sistemas corporativos de grande porte precisavam de novas funcionalidades e modernização visual mantendo estabilidade e prazos rigorosos de sprint.',
                    solution:
                        'Atuação em squads ágeis (Scrum/Jira) criando componentes reutilizáveis em React/Angular e APIs performáticas em .NET Core.',
                    impact: 'Conquista de duas promoções consecutivas em menos de 2 anos (Programador I → Analista I → Consultor III).',
                    stack: ['React.js', 'Angular', 'Node.js', 'C#', '.NET Core', 'ASP.NET'],
                    liveUrl: null,
                },
                {
                    id: 'cimatec-mobile',
                    category: 'mobile',
                    visualType: 'cimatec-mobile',
                    badge: 'P&D & Startups',
                    client: 'SENAI CIMATEC & EJC&T',
                    year: '2019 – 2021',
                    title: 'Apps Mobile (Flutter/RN) & Dashboards Analíticos',
                    shortDesc:
                        'Criação de aplicativos multiplataforma e painéis de visualização de dados com Material Design, Laravel, Django e .NET Core.',
                    challenge:
                        'Transformar ideias de projetos de pesquisa e demandas de clientes reais em aplicativos móveis fluidos e painéis web intuitivos.',
                    solution:
                        'Prototipação UI/UX seguida de implementação mobile com React Native e Flutter, integrados a back-ends em Node.js, Django e Laravel.',
                    impact: 'Dezenas de telas e módulos entregues em um dos maiores centros de inovação tecnológica do país.',
                    stack: ['Flutter', 'React Native', 'React.js', 'Laravel (PHP)', 'Node.js'],
                    liveUrl: null,
                },
            ],
        },
        storySlide: {
            sectionTag: 'DNA & TRAJETÓRIA',
            title: 'Muito além das linhas de código',
            subtitle:
                'Uma combinação rara entre sensibilidade visual de Designer, visão de negócios de Co-Fundador e rigor técnico de Engenheiro Sênior.',
        },
        playground: {
            sectionTag: 'ENGENHARIA DE PONTA A PONTA',
            title: 'Por dentro de como uma requisição ganha vida',
            subtitle:
                'Clique em cada camada abaixo para ver como eu conecto Front-End, Agentes de IA, Back-End e Bancos de Dados:',
            steps: [
                {
                    step: '01',
                    title: 'Experiência do Usuário (Web, Mobile ou WhatsApp)',
                    tech: 'React.js • Inertia • Angular • Flutter • WhatsApp',
                    story:
                        'Tudo começa onde o usuário toca: seja uma interface web limpa em React + Tailwind, um app em Flutter ou uma conversa natural direto no WhatsApp da empresa.',
                },
                {
                    step: '02',
                    title: 'Cérebro de IA & Entendimento de Contexto',
                    tech: 'Google Vertex AI • Gemini API • IBM Watson',
                    story:
                        'Quando o problema exige inteligência, eu conecto agentes com Gemini e Vertex AI para interpretar intenções, consultar bases de conhecimento e tomar decisões em milissegundos.',
                },
                {
                    step: '03',
                    title: 'Engenharia Back-End & Regras de Negócio',
                    tech: 'Python (Django, FastAPI) • Node.js • C# (.NET Core) • Laravel',
                    story:
                        'O coração da aplicação: APIs RESTful bem estruturadas, seguras e testadas que orquestram autenticações, filas e regras complexas sem gargalos.',
                },
                {
                    step: '04',
                    title: 'Dados & Sistemas Corporativos Críticos',
                    tech: 'MySQL • SQL • IBM Maximo • Big Data Workflows',
                    story:
                        'Persistência confiável em bancos relacionais e integração direta com plataformas de missão crítica como o IBM Maximo para que toda a empresa opere em sincronia.',
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
                    company: 'EJC&T (Empresa Júnior)',
                    role: 'Diretor Presidente (CEO) & Co-Fundador',
                    period: 'Abr 2019 – Fev 2021 (1a 11m)',
                    badge: 'Liderança & Startups',
                    summary:
                        'Gestão executiva/técnica e arquitetura de projetos reais com React, Flutter, Node.js, Django e Laravel.',
                },
                {
                    company: 'SENAI CIMATEC',
                    role: 'Estágio em Engenharia de Software & Técnico',
                    period: '2017 – Mar 2020',
                    badge: 'Centro de P&D',
                    summary:
                        'Desenvolvimento de aplicações web/mobile (.NET Core, Angular, React, React Native) e dashboards Material UI.',
                },
            ],
        },
        contact: {
            title: 'Vamos construir o próximo grande projeto juntos?',
            subtitle:
                'Disponibilidade imediata para atuar como Senior Full Stack Developer, Python Engineer ou AI Solutions Engineer.',
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
            { id: 'slide-story', label: 'About Me' },
            { id: 'slide-playground', label: 'Architecture' },
            { id: 'slide-career', label: 'Career & Contact' },
        ],
        nav: {
            cta: 'Let’s Talk',
            nextSlideHint: 'Scroll down to explore my projects',
        },
        hero: {
            greeting: 'Hi there! I’m Rafael Guimarães 👋',
            badge: 'Immediate Availability for Senior Roles & Projects (Remote / Hybrid)',
            headlinePart1: 'Turning complex business challenges into ',
            headlineHighlight: 'web platforms & AI agents',
            headlinePart2: ' people actually love using.',
            description:
                'Based in Salvador, Brazil, I started out in Graphic Design and UI/UX before diving deep into Software Engineering at SENAI CIMATEC and UFBA. Today I bring 6+ years of experience building Full Stack systems (Python, React, Node.js, .NET, Laravel) and conversational AI (Gemini, Vertex AI, Watson) at scale.',
            primaryCta: 'Explore My Projects',
            cvPtBtn: 'Baixar CV (PT-BR)',
            cvEnBtn: 'Download CV (EN)',
            polaroidCaption: 'github.com/rafaelgcs • Salvador, Brazil',
            stickerTop: '🎨 Designer’s Eye + 🧠 Engineer’s Brain',
            stickerBottom: '⚡ 6+ years shipping production code',
            funFacts: [
                {
                    emoji: '🎨 ➡️ 💻',
                    title: 'From Design to Engineering',
                    text: 'I studied Graphic Design and UI/UX (2016) before becoming a software engineer—which is why user experience and visual polish matter so much to me.',
                },
                {
                    emoji: '🚀',
                    title: 'Former Junior Enterprise CEO',
                    text: 'Co-founded and led EJC&T in university, learning firsthand how to lead agile squads, negotiate with clients, and ship real products.',
                },
                {
                    emoji: '📈',
                    title: '3 Promotions in Global Consultancies',
                    text: 'Earned rapid promotions at both Capgemini and AlmaViva by focusing on real business outcomes rather than just closing tickets.',
                },
                {
                    emoji: '🤖',
                    title: 'Conversational AI Pioneer',
                    text: 'Building intelligent WhatsApp assistants from the IBM Watson era all the way to modern Google Gemini & Vertex AI agents.',
                },
            ],
        },
        projects: {
            sectionTag: 'PORTFOLIO & DELIVERED PROJECTS',
            title: 'Featured Projects & Architectures',
            subtitle:
                'Select any project on the left to inspect its architecture, challenge, and impact:',
            filters: [
                { id: 'all', label: 'All (5)' },
                { id: 'ai', label: '🤖 AI & Chatbots' },
                { id: 'web', label: '🌐 Web & Full Stack' },
                { id: 'mobile', label: '📱 Mobile & UI/UX' },
            ],
            viewDetailsBtn: 'Open full technical sheet',
            items: [
                {
                    id: 'genai-whatsapp',
                    category: 'ai',
                    visualType: 'whatsapp-ai',
                    badge: 'Generative AI & WhatsApp',
                    client: 'AlmaViva Solutions',
                    year: '2024 – 2026',
                    title: 'Conversational AI Agents with Gemini, Vertex AI & Watson',
                    shortDesc:
                        'Orchestrated intelligent WhatsApp assistants backed by Python/Django REST APIs to automate high-volume customer operations.',
                    challenge:
                        'Enterprise operations needed to handle thousands of daily WhatsApp inquiries while maintaining context and querying legacy backends.',
                    solution:
                        'Engineered a hybrid conversational architecture connecting IBM Watson Assistant, Google Vertex AI, and Gemini models to Python (Django) services and React/Angular dashboards.',
                    impact: 'Drastically reduced triage times and automated end-to-end customer journeys.',
                    stack: ['Python', 'Django', 'Google Vertex AI', 'Gemini API', 'IBM Watson', 'WhatsApp API'],
                    liveUrl: null,
                },
                {
                    id: 'villa-encantada',
                    category: 'web',
                    visualType: 'villa-encantada',
                    badge: 'Live Web Project',
                    client: 'Escola Villa Encantada',
                    year: 'Production',
                    title: 'Institutional Web Platform — Escola Villa Encantada',
                    shortDesc:
                        'End-to-end design and full-stack web development for an educational institution in Salvador, from UI/UX prototyping to live deployment.',
                    challenge:
                        'The school needed a warm, fast, and mobile-friendly digital presence to showcase its pedagogy and streamline student enrollment.',
                    solution:
                        'Applied agile practices and full SDLC ownership to design the UI, build the web platform, and launch the production domain.',
                    impact: 'Live production website actively serving families and students.',
                    stack: ['JavaScript', 'HTML5 & CSS3', 'Bootstrap', 'UI/UX Design', 'Web'],
                    liveUrl: 'https://escolavillaencantada.com.br',
                },
                {
                    id: 'maximo-integration',
                    category: 'web',
                    visualType: 'maximo-eam',
                    badge: 'Enterprise EAM Systems',
                    client: 'AlmaViva Solutions',
                    year: '2022 – 2026',
                    title: 'Full Stack Portal & IBM Maximo EAM Integration',
                    shortDesc:
                        'Full-stack web platform in Django, React, and Angular integrated with IBM Maximo for enterprise asset and work-order management.',
                    challenge:
                        'Bridge field operations and asset management teams with complex IBM Maximo workflows through responsive modern web interfaces.',
                    solution:
                        'Built scalable Python (Django) REST APIs and interactive Angular/React front-end modules with strict GitLab/GitHub workflows.',
                    impact: 'Improved operational reliability and earned internal promotion to Level IV Analyst.',
                    stack: ['Python 3', 'Django', 'Angular', 'React.js', 'IBM Maximo', 'REST APIs'],
                    liveUrl: null,
                },
                {
                    id: 'capgemini-modernization',
                    category: 'web',
                    visualType: 'capgemini-banking',
                    badge: 'Global IT Consultancy',
                    client: 'Capgemini',
                    year: '2020 – 2022',
                    title: 'Enterprise Application Modernization (.NET & React)',
                    shortDesc:
                        'Modernized front-end architectures (React, Angular, Node.js) and C# (.NET Core / ASP.NET) back-end services for enterprise clients.',
                    challenge:
                        'Large-scale enterprise systems required new features and UI modernization while maintaining strict SLA and sprint commitments.',
                    solution:
                        'Delivered reusable React/Angular components and high-performance .NET Core APIs within Agile/Scrum squads.',
                    impact: 'Earned two consecutive promotions in under 2 years (Developer I → Analyst I → Consultant III).',
                    stack: ['React.js', 'Angular', 'Node.js', 'C#', '.NET Core', 'ASP.NET'],
                    liveUrl: null,
                },
                {
                    id: 'cimatec-mobile',
                    category: 'mobile',
                    visualType: 'cimatec-mobile',
                    badge: 'R&D & Startups',
                    client: 'SENAI CIMATEC & EJC&T',
                    year: '2019 – 2021',
                    title: 'Cross-Platform Mobile Apps (Flutter/RN) & Dashboards',
                    shortDesc:
                        'Built cross-platform mobile applications and Material Design data dashboards powered by Laravel, Django, and .NET Core.',
                    challenge:
                        'Turn R&D research concepts and startup client requirements into polished mobile apps and intuitive web dashboards.',
                    solution:
                        'Combined UI/UX prototyping with React Native and Flutter mobile development backed by Node.js, Django, and Laravel APIs.',
                    impact: 'Delivered production-ready applications inside one of Brazil’s leading technology centers.',
                    stack: ['Flutter', 'React Native', 'React.js', 'Laravel (PHP)', 'Node.js'],
                    liveUrl: null,
                },
            ],
        },
        storySlide: {
            sectionTag: 'DNA & STORYTELLING',
            title: 'Much More Than Lines of Code',
            subtitle:
                'A rare blend of a Designer’s visual sensitivity, a Co-Founder’s business mindset, and a Senior Engineer’s technical rigor.',
        },
        playground: {
            sectionTag: 'END-TO-END ENGINEERING',
            title: 'How a Request Comes to Life in My Stack',
            subtitle:
                'Click each layer below to see how I connect front-end interfaces, AI agents, back-end APIs, and enterprise databases:',
            steps: [
                {
                    step: '01',
                    title: 'Human Touchpoint (Web, Mobile, or WhatsApp)',
                    tech: 'React.js • Inertia • Angular • Flutter • WhatsApp',
                    story:
                        'Everything starts where the user interacts: whether a clean React + Tailwind web app, a Flutter mobile app, or a natural conversation on WhatsApp.',
                },
                {
                    step: '02',
                    title: 'AI Brain & Context Understanding',
                    tech: 'Google Vertex AI • Gemini API • IBM Watson',
                    story:
                        'When a workflow needs intelligence, I orchestrate Gemini and Vertex AI agents to parse intent, retrieve context, and make decisions in milliseconds.',
                },
                {
                    step: '03',
                    title: 'Back-End Engineering & Business Logic',
                    tech: 'Python (Django, FastAPI) • Node.js • C# (.NET Core) • Laravel',
                    story:
                        'The engine room: clean, well-tested RESTful APIs that handle authentication, queues, and complex domain rules without bottlenecks.',
                },
                {
                    step: '04',
                    title: 'Data Persistence & Enterprise Core',
                    tech: 'MySQL • SQL • IBM Maximo • Big Data Workflows',
                    story:
                        'Reliable relational storage and seamless integration with mission-critical platforms like IBM Maximo so the entire operation stays in sync.',
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
                    company: 'EJC&T (Junior Enterprise)',
                    role: 'CEO & Co-Founder / Software Manager',
                    period: 'Apr 2019 – Feb 2021 (1y 11m)',
                    badge: 'Leadership & Co-Founder',
                    summary:
                        'Co-founded the junior enterprise, led agile developer squads, and architected projects with React, Flutter, Node.js, Django, and Laravel.',
                },
                {
                    company: 'SENAI CIMATEC',
                    role: 'Software Development Intern & Technician',
                    period: '2017 – Mar 2020',
                    badge: 'R&D Foundation',
                    summary:
                        'Built web/mobile apps (.NET Core, Angular, React, React Native) and Material Design UI/UX dashboards.',
                },
            ],
        },
        contact: {
            title: 'Let’s build something great together!',
            subtitle:
                'Available immediately for Senior Full Stack Developer, Python Engineer, or AI Solutions Engineer roles.',
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
    const [activeFilter, setActiveFilter] = useState('all');
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

                    {/* Center: Clean Desktop Navigation Links (No slide numbers) */}
                    <nav aria-label="Menu Principal" className="hidden md:flex items-center">
                        <ul className="flex items-center gap-1 lg:gap-2">
                            {t.slides.map((s, idx) => {
                                const isActive = activeSlideIndex === idx;
                                return (
                                    <li key={s.id}>
                                        <button
                                            type="button"
                                            onClick={() => scrollToSlide(idx)}
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

            {/* Subtle Right-Side Section Dots (No slide counter text) */}
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
                {/* Soft Ambient Glows using Brand #253238 / #607d8b tones */}
                <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                    <div className="absolute -top-32 right-[10%] w-96 h-96 bg-[#cfd8dc]/45 blur-[110px] rounded-full" />
                    <div className="absolute top-[30%] -left-24 w-96 h-96 bg-[#eceff1]/70 blur-[120px] rounded-full" />
                    <div className="absolute bottom-10 right-[15%] w-96 h-96 bg-emerald-100/40 blur-[120px] rounded-full" />
                </div>

                <main className="relative z-10">
                    {/* =========================================================
                        SECTION 01: INTRODUCTION & GITHUB PROFILE PHOTO CARD
                       ========================================================= */}
                    <section
                        id="slide-intro"
                        aria-labelledby="hero-heading"
                        className="deck-slide max-w-6xl mx-auto px-4 sm:px-6"
                    >
                        <div className="slide-stage grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
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
                                            {/* Overlay Stack Pills */}
                                            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap justify-center gap-1.5">
                                                <span className="px-2.5 py-1 text-[11px] font-bold bg-white/95 backdrop-blur-xs text-[#253238] rounded-full shadow-sm">
                                                    🐍 Python
                                                </span>
                                                <span className="px-2.5 py-1 text-[11px] font-bold bg-white/95 backdrop-blur-xs text-[#253238] rounded-full shadow-sm">
                                                    ⚛️ React & Inertia
                                                </span>
                                                <span className="px-2.5 py-1 text-[11px] font-bold bg-white/95 backdrop-blur-xs text-[#253238] rounded-full shadow-sm">
                                                    ✨ Gemini & Vertex AI
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
                        <div className="mt-6 flex justify-center">
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
                        SECTION 02: SINGLE-VIEWPORT INTERACTIVE PROJECT SHOWCASE
                       ========================================================= */}
                    <section
                        id="slide-projects"
                        aria-labelledby="projects-heading"
                        className="deck-slide max-w-6xl mx-auto px-4 sm:px-6"
                    >
                        <div className="slide-stage space-y-5">
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
                                {/* Left Column: Compact Project Selector List */}
                                <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
                                    {filteredProjects.map((proj, idx) => {
                                        const isSelected = idx === safeProjectIndex;
                                        return (
                                            <button
                                                key={proj.id}
                                                type="button"
                                                onClick={() => setActiveProjectIndex(idx)}
                                                className={`w-full text-left p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                                                    isSelected
                                                        ? 'bg-white border-[#253238] shadow-md scale-[1.01]'
                                                        : 'bg-white/75 border-[#dfe5e8] hover:bg-white hover:border-[#b0bec5]'
                                                }`}
                                            >
                                                <div className="min-w-0">
                                                    <div className="flex items-center gap-2 text-[10px] font-mono">
                                                        <span
                                                            className={`font-bold px-2 py-0.5 rounded ${
                                                                isSelected
                                                                    ? 'bg-[#253238] text-white'
                                                                    : 'bg-[#eceff1] text-[#455055]'
                                                            }`}
                                                        >
                                                            0{idx + 1}
                                                        </span>
                                                        <span className="text-[#253238] font-bold truncate">
                                                            {proj.badge}
                                                        </span>
                                                        <span className="text-[#607d8b]">•</span>
                                                        <span className="text-[#455055] truncate">{proj.client}</span>
                                                    </div>
                                                    <p className="text-xs sm:text-sm font-extrabold text-[#253238] mt-1 truncate">
                                                        {proj.title}
                                                    </p>
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
                                        {/* Visual Mockup Preview */}
                                        <div className="sm:col-span-6">
                                            <ProjectVisualPreview type={currentProject.visualType} />
                                        </div>

                                        {/* Project Story & Impact */}
                                        <div className="sm:col-span-6 space-y-3">
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

                                            <div className="bg-[#f5f7f8] border border-[#cfd8dc] rounded-xl p-3 text-xs text-[#253238]">
                                                <span className="font-extrabold block text-[10px] uppercase text-[#455055] mb-0.5">
                                                    🚀 Resultado & Impacto
                                                </span>
                                                {currentProject.impact}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Bar: Stack Pills + Prev/Next Controls + Modal/Live Buttons */}
                                    <div className="mt-5 pt-4 border-t border-[#eceff1] flex flex-wrap items-center justify-between gap-3">
                                        <ul className="flex flex-wrap gap-1.5">
                                            {currentProject.stack.map((tech) => (
                                                <li
                                                    key={tech}
                                                    className="text-[11px] font-mono font-semibold text-[#253238] bg-[#f5f7f8] px-2.5 py-1 rounded-md border border-[#cfd8dc]"
                                                >
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>

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
                                                className="inline-flex items-center gap-1.5 bg-[#253238] hover:bg-[#182126] text-white font-bold text-xs py-2.5 px-3.5 rounded-xl transition-colors cursor-pointer"
                                            >
                                                <Eye className="w-3.5 h-3.5 text-[#cfd8dc]" aria-hidden="true" />
                                                <span>{t.projects.viewDetailsBtn}</span>
                                            </button>

                                            {currentProject.liveUrl && (
                                                <a
                                                    href={currentProject.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 bg-[#eceff1] hover:bg-[#cfd8dc] text-[#253238] border border-[#cfd8dc] font-bold text-xs py-2.5 px-3.5 rounded-xl transition-colors"
                                                >
                                                    <span>Site</span>
                                                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>

                    {/* =========================================================
                        SECTION 03: PLAYFUL STORYTELLING & DNA
                       ========================================================= */}
                    <section
                        id="slide-story"
                        aria-labelledby="story-heading"
                        className="deck-slide max-w-6xl mx-auto px-4 sm:px-6"
                    >
                        <div className="slide-stage space-y-8">
                            <div className="space-y-2 max-w-2xl">
                                <span className="font-mono text-[11px] font-extrabold text-[#455055] uppercase tracking-wider">
                                    {t.storySlide.sectionTag}
                                </span>
                                <h2 id="story-heading" className="text-2xl sm:text-4xl font-extrabold text-[#253238]">
                                    {t.storySlide.title}
                                </h2>
                                <p className="text-[#455055] text-sm sm:text-base">
                                    {t.storySlide.subtitle}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {t.hero.funFacts.map((fact, idx) => (
                                    <article
                                        key={idx}
                                        className="craft-card rounded-3xl p-6 space-y-3 bg-white flex flex-col justify-between"
                                    >
                                        <div className="space-y-3">
                                            <div className="text-2xl bg-[#f5f7f8] border border-[#cfd8dc] w-12 h-12 rounded-2xl flex items-center justify-center">
                                                {fact.emoji}
                                            </div>
                                            <h3 className="text-lg font-extrabold text-[#253238]">
                                                {fact.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-[#455055] leading-relaxed">
                                                {fact.text}
                                            </p>
                                        </div>
                                        <span className="font-mono text-[11px] font-bold text-[#607d8b] pt-2">
                                            #0{idx + 1} • Rafael Guimarães
                                        </span>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* =========================================================
                        SECTION 04: INTERACTIVE ARCHITECTURE PLAYGROUND
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
                                            className={`w-full text-left p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-3.5 ${
                                                activeStep === idx
                                                    ? 'bg-[#eceff1] border-[#253238] shadow-xs'
                                                    : 'bg-[#f5f7f8] border-[#dfe5e8] hover:bg-[#eceff1]/60'
                                            }`}
                                        >
                                            <span
                                                className={`w-8 h-8 rounded-xl font-mono text-xs font-extrabold flex items-center justify-center shrink-0 ${
                                                    activeStep === idx
                                                        ? 'bg-[#253238] text-white'
                                                        : 'bg-white text-[#455055] border border-[#cfd8dc]'
                                                }`}
                                            >
                                                {s.step}
                                            </span>
                                            <div>
                                                <p className="font-bold text-xs sm:text-sm text-[#253238]">{s.title}</p>
                                                <p className="font-mono text-[11px] text-[#455055] mt-0.5">
                                                    {s.tech}
                                                </p>
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                <div className="lg:col-span-7 bg-gradient-to-br from-[#253238] via-[#2b333f] to-[#182126] text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
                                    <div className="flex items-center justify-between">
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

                                    <div className="flex items-center gap-2 pt-2">
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
                    <div className="space-y-5">
                        <div className="flex items-start justify-between gap-4 border-b border-[#eceff1] pb-4">
                            <div>
                                <span className="text-xs font-bold text-[#253238] bg-[#eceff1] px-2.5 py-0.5 rounded-full">
                                    {selectedProject.badge} • {selectedProject.client}
                                </span>
                                <h2 id="project-modal-title" className="text-xl font-extrabold text-[#253238] mt-2">
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

                        <div className="space-y-4 text-sm text-[#455055] leading-relaxed">
                            <div className="bg-[#f5f7f8] p-4 rounded-2xl border border-[#cfd8dc]">
                                <p className="font-extrabold text-[#253238] text-xs uppercase mb-1">
                                    🎯 O Desafio
                                </p>
                                <p>{selectedProject.challenge}</p>
                            </div>

                            <div className="bg-[#eceff1]/70 p-4 rounded-2xl border border-[#cfd8dc]">
                                <p className="font-extrabold text-[#253238] text-xs uppercase mb-1">
                                    🛠️ Como Eu Construí
                                </p>
                                <p>{selectedProject.solution}</p>
                            </div>

                            <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200">
                                <p className="font-extrabold text-emerald-950 text-xs uppercase mb-1">
                                    🚀 Resultado & Impacto
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
                                    <span
                                        key={tech}
                                        className="text-xs font-mono font-semibold bg-[#f5f7f8] text-[#253238] px-2.5 py-1 rounded-lg border border-[#cfd8dc]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#eceff1]">
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
                            className="w-full rounded-xl bg-[#f5f7f8] border border-[#cfd8dc] px-3.5 py-2.5 text-sm text-[#253238] focus:outline-none focus:border-[#253238] focus:bg-white"
                        />
                        {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={closeContactModal}
                            className="px-4 py-2.5 rounded-xl border border-[#cfd8dc] text-xs font-semibold text-[#455055] hover:bg-[#eceff1] transition-colors cursor-pointer"
                        >
                            {t.contact.closeBtn}
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#253238] hover:bg-[#182126] disabled:opacity-50 text-xs font-semibold text-white transition-colors cursor-pointer"
                        >
                            <Send className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>{processing ? t.contact.submittingBtn : t.contact.submitBtn}</span>
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    );
}
