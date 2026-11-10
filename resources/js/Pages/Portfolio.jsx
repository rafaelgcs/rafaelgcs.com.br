import React, { useState, useRef } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import {
    Globe,
    Download,
    Mail,
    MessageSquare,
    CheckCircle2,
    Briefcase,
    GraduationCap,
    Layers,
    Terminal,
    Database,
    MapPin,
    Send,
    X,
    Award,
    Bot,
    ExternalLink,
    Sparkles,
    Smartphone,
    Code2,
    Coffee,
    Compass,
    Eye,
    FolderGit2,
    Zap
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

/* Visual Figurative Preview Components for the Project Showcase */
function ProjectVisualPreview({ type }) {
    if (type === 'whatsapp-ai') {
        return (
            <div className="h-52 bg-gradient-to-br from-emerald-50 via-teal-50/70 to-indigo-50 p-4 flex flex-col justify-between border-b border-slate-200 relative overflow-hidden">
                <div className="flex items-center justify-between bg-white/90 backdrop-blur-xs px-3 py-2 rounded-xl border border-emerald-200/80 shadow-2xs">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span className="text-xs font-bold text-slate-800">Assistente IA • WhatsApp</span>
                    </div>
                    <span className="text-[10px] font-mono font-semibold bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full">
                        Gemini + Vertex AI
                    </span>
                </div>

                <div className="space-y-2 my-auto py-2">
                    <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-xs px-3.5 py-2 text-xs text-slate-700 max-w-[82%] shadow-2xs">
                        Olá! Preciso consultar o status da Ordem #4821 no Maximo.
                    </div>
                    <div className="bg-emerald-600 text-white rounded-2xl rounded-tr-xs px-3.5 py-2 text-xs ml-auto max-w-[88%] shadow-xs">
                        <span className="font-semibold block text-[10px] text-emerald-100 mb-0.5">
                            ⚡ Vertex AI Agent • 0.8s
                        </span>
                        OS #4821 localizada! Equipe técnica já está em rota. Deseja receber alertas em tempo real?
                    </div>
                </div>
            </div>
        );
    }

    if (type === 'maximo-eam') {
        return (
            <div className="h-52 bg-gradient-to-br from-indigo-50 via-slate-50 to-sky-50 p-4 flex flex-col justify-between border-b border-slate-200 relative overflow-hidden">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="ml-2 text-[11px] font-mono font-semibold text-slate-600">
                            eam-portal.almaviva.internal
                        </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded">
                        Django + React
                    </span>
                </div>

                <div className="grid grid-cols-3 gap-2 my-auto">
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                        <span className="text-[10px] text-slate-500 block">Ativos Sinc.</span>
                        <span className="text-sm font-extrabold text-slate-900">99.8%</span>
                        <span className="w-full h-1.5 bg-emerald-100 rounded-full mt-1.5 block overflow-hidden">
                            <span className="w-11/12 h-full bg-emerald-500 block" />
                        </span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                        <span className="text-[10px] text-slate-500 block">Filas REST</span>
                        <span className="text-sm font-extrabold text-indigo-700">142 ms</span>
                        <span className="w-full h-1.5 bg-indigo-100 rounded-full mt-1.5 block overflow-hidden">
                            <span className="w-4/5 h-full bg-indigo-600 block" />
                        </span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                        <span className="text-[10px] text-slate-500 block">IBM Maximo</span>
                        <span className="text-xs font-bold text-emerald-700 mt-0.5 block">● Online</span>
                        <span className="text-[10px] font-mono text-slate-400">API v2</span>
                    </div>
                </div>

                <div className="bg-white/90 border border-slate-200 rounded-lg px-3 py-1.5 flex items-center justify-between text-[11px] text-slate-600">
                    <span className="font-mono">POST /api/v1/maximo/workorders</span>
                    <span className="text-emerald-700 font-bold">200 OK</span>
                </div>
            </div>
        );
    }

    if (type === 'villa-encantada') {
        return (
            <div className="h-52 bg-gradient-to-br from-amber-50 via-orange-50/60 to-rose-50 p-4 flex flex-col justify-between border-b border-slate-200 relative overflow-hidden">
                <div className="bg-white/95 border border-amber-200 rounded-full px-3 py-1 flex items-center justify-between text-xs shadow-2xs">
                    <span className="font-mono text-[11px] text-slate-600 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-amber-600" />
                        escolavillaencantada.com.br
                    </span>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                        Em Produção
                    </span>
                </div>

                <div className="bg-white border border-amber-200/80 rounded-2xl p-3.5 shadow-xs space-y-2 my-auto">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-slate-900">
                            🏰 Escola Villa Encantada
                        </span>
                        <div className="flex gap-1">
                            <span className="w-6 h-2 rounded-full bg-amber-400" />
                            <span className="w-4 h-2 rounded-full bg-rose-400" />
                            <span className="w-4 h-2 rounded-full bg-sky-400" />
                        </div>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                        Portal institucional, matrículas e comunicação escolar desenvolvido sob medida para cliente real.
                    </p>
                </div>
            </div>
        );
    }

    if (type === 'capgemini-banking') {
        return (
            <div className="h-52 bg-gradient-to-br from-sky-50 via-blue-50/60 to-indigo-50 p-4 flex flex-col justify-between border-b border-slate-200 relative overflow-hidden">
                <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-sky-900 bg-sky-100 border border-sky-200 px-2.5 py-0.5 rounded-md">
                        Enterprise Core • Capgemini
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">.NET Core + React</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 my-auto">
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Micro-Frontend</div>
                        <div className="text-xs font-bold text-slate-900">Design System</div>
                        <div className="flex gap-1 pt-1">
                            <span className="px-1.5 py-0.5 text-[10px] bg-sky-50 text-sky-700 rounded border border-sky-200 font-mono">
                                React
                            </span>
                            <span className="px-1.5 py-0.5 text-[10px] bg-indigo-50 text-indigo-700 rounded border border-indigo-200 font-mono">
                                Angular
                            </span>
                        </div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Back-End API</div>
                        <div className="text-xs font-bold text-slate-900">C# .NET Core</div>
                        <div className="text-[11px] text-emerald-700 font-semibold pt-1">
                            ✓ Alta Concorrência
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Default: Mobile & Dashboards (SENAI CIMATEC / EJC&T)
    return (
        <div className="h-52 bg-gradient-to-br from-violet-50 via-purple-50/50 to-indigo-50 p-4 flex items-center justify-center gap-4 border-b border-slate-200 relative overflow-hidden">
            {/* Mini Mobile Phone Frame */}
            <div className="w-28 h-40 bg-white rounded-2xl border-2 border-slate-800 shadow-md p-2 flex flex-col justify-between">
                <div className="w-8 h-1 bg-slate-300 rounded-full mx-auto" />
                <div className="space-y-1.5 my-auto">
                    <div className="h-6 bg-indigo-600 rounded-lg flex items-center justify-center text-[9px] font-bold text-white">
                        Flutter / RN
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                        <div className="h-8 bg-violet-100 rounded-md" />
                        <div className="h-8 bg-emerald-100 rounded-md" />
                    </div>
                </div>
                <div className="w-10 h-1 bg-slate-800 rounded-full mx-auto" />
            </div>

            {/* Mini Web Dashboard Card */}
            <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-xs p-3 space-y-2">
                <span className="text-[10px] font-mono font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded">
                    SENAI CIMATEC • P&D
                </span>
                <p className="text-xs font-bold text-slate-900 leading-tight">
                    Apps & Dashboards Material UI
                </p>
                <div className="flex items-end gap-1.5 h-10 pt-1">
                    <span className="w-3 h-5 bg-indigo-200 rounded-t" />
                    <span className="w-3 h-8 bg-indigo-400 rounded-t" />
                    <span className="w-3 h-6 bg-indigo-300 rounded-t" />
                    <span className="w-3 h-10 bg-indigo-600 rounded-t" />
                    <span className="w-3 h-7 bg-emerald-500 rounded-t" />
                </div>
            </div>
        </div>
    );
}

const CONTENT = {
    pt: {
        nav: {
            about: 'Como Eu Trabalho',
            projects: 'Galeria de Projetos',
            playground: 'Jornada Interativa',
            experience: 'Carreira',
            cta: 'Conversar Agora',
        },
        hero: {
            greeting: 'Olá! Eu sou o Rafael Guimarães 👋',
            badge: 'Disponível para novos projetos & vagas Sênior (Remoto / Híbrido)',
            headlinePart1: 'Transformo problemas complexos em ',
            headlineHighlight: 'sistemas web & agentes de IA',
            headlinePart2: ' que as pessoas adoram usar.',
            description:
                'Nascido e criado em Salvador-BA, comecei pelo Design Gráfico e UI/UX antes de mergulhar fundo em Engenharia de Software no SENAI CIMATEC e na UFBA. Hoje somo +6 anos construindo plataformas Full Stack (Python, React, Node.js, .NET e Laravel) e inteligências conversacionais (Gemini, Vertex AI e Watson) para grandes operações.',
            primaryCta: 'Vamos tomar um café virtual?',
            cvPtBtn: 'Currículo (PT-BR)',
            cvEnBtn: 'Resume (EN)',
            polaroidCaption: 'Salvador, BA • Engenheiro Full Stack & IA',
            stickerTop: '🎨 Base em Design + 🧠 Cérebro de Engenheiro',
            stickerBottom: '⚡ +6 anos de código em produção',
            funFacts: [
                {
                    emoji: '🎨 ➡️ 💻',
                    title: 'Do Design ao Código',
                    text: 'Comecei estudando Design Gráfico e UI/UX (2016) antes de virar dev — por isso me importo tanto com a experiência de quem usa o sistema.',
                },
                {
                    emoji: '🚀',
                    title: 'Ex-CEO de Empresa Júnior',
                    text: 'Aos 20 anos co-fundei e presidi a EJC&T, aprendendo na prática a conversar com clientes, liderar squads e entregar projetos no prazo.',
                },
                {
                    emoji: '📈',
                    title: '3 Promoções em Consultorias',
                    text: 'Cresci rápido tanto na Capgemini quanto na AlmaViva porque foco em resolver a dor real do negócio, não apenas fechar tickets.',
                },
                {
                    emoji: '🤖',
                    title: 'Pioneiro em IA no WhatsApp',
                    text: 'Construo assistentes inteligentes desde a época do IBM Watson até a geração atual de agentes com Google Gemini e Vertex AI.',
                },
            ],
        },
        projects: {
            sectionTag: 'VITRINE DE PROJETOS & CASES REAIS',
            title: 'O que eu já construí na prática',
            subtitle:
                'Filtre por área para explorar desde sistemas comerciais e sites reais até arquiteturas de Inteligência Artificial e integrações corporativas.',
            filters: [
                { id: 'all', label: 'Todos os Projetos (5)' },
                { id: 'ai', label: '🤖 IA & Chatbots' },
                { id: 'web', label: '🌐 Web & Full Stack' },
                { id: 'mobile', label: '📱 Mobile & UI/UX' },
            ],
            viewDetailsBtn: 'Ver bastidores técnicos',
            liveLinkBtn: 'Visitar site ao vivo',
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
                    stack: ['Python', 'Django', 'Google Vertex AI', 'Gemini API', 'IBM Watson', 'WhatsApp API', 'React.js'],
                    liveUrl: null,
                },
                {
                    id: 'villa-encantada',
                    category: 'web',
                    visualType: 'villa-encantada',
                    badge: 'Projeto Web em Produção',
                    client: 'Escola Villa Encantada',
                    year: 'Projeto Real',
                    title: 'Plataforma Web Institucional — Escola Villa Encantada',
                    shortDesc:
                        'Desenvolvimento completo da presença digital e plataforma web para instituição de ensino em Salvador, do protótipo UI/UX ao deploy.',
                    challenge:
                        'A instituição precisava de uma plataforma digital acolhedora, rápida e responsiva para apresentar sua proposta pedagógica e captar novas matrículas.',
                    solution:
                        'Apliquei metodologias ágeis e todo o ciclo de engenharia de software para desenhar a interface, codificar o front-end/back-end e colocar o domínio em produção.',
                    impact: 'Projeto real entregue e publicado, servindo famílias e alunos da instituição.',
                    stack: ['JavaScript', 'HTML5 & CSS3', 'Bootstrap', 'UI/UX Design', 'PHP / Web', 'SEO'],
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
                    stack: ['Python 3', 'Django', 'Angular', 'React.js', 'IBM Maximo', 'REST APIs', 'GitLab'],
                    liveUrl: null,
                },
                {
                    id: 'capgemini-modernization',
                    category: 'web',
                    visualType: 'capgemini-banking',
                    badge: 'Consultoria Global',
                    client: 'Capgemini',
                    year: '2020 – 2022',
                    title: 'Modernização de Sistemas Corporativos (.NET & React/Angular)',
                    shortDesc:
                        'Evolução de arquiteturas front-end (React, Angular, Node.js) e serviços back-end em C# (.NET Core / ASP.NET) para clientes enterprise.',
                    challenge:
                        'Sistemas corporativos de grande porte precisavam de novas funcionalidades e modernização visual mantendo estabilidade e prazos rigorosos de sprint.',
                    solution:
                        'Atuação em squads ágeis (Scrum/Jira) criando componentes reutilizáveis em React/Angular e APIs performáticas em .NET Core.',
                    impact: 'Conquista de duas promoções consecutivas em menos de 2 anos (Programador I → Analista I → Consultor III).',
                    stack: ['React.js', 'Angular', 'Node.js', 'C#', '.NET Core', 'ASP.NET', 'Jira / Scrum'],
                    liveUrl: null,
                },
                {
                    id: 'cimatec-mobile',
                    category: 'mobile',
                    visualType: 'cimatec-mobile',
                    badge: 'P&D & Startups',
                    client: 'SENAI CIMATEC & EJC&T',
                    year: '2019 – 2021',
                    title: 'Aplicativos Mobile (Flutter/React Native) & Dashboards Analíticos',
                    shortDesc:
                        'Criação de aplicativos multiplataforma e painéis de visualização de dados com Material Design, Laravel, Django e .NET Core.',
                    challenge:
                        'Transformar ideias de projetos de pesquisa e demandas de clientes reais em aplicativos móveis fluidos e painéis web intuitivos.',
                    solution:
                        'Prototipação UI/UX seguida de implementação mobile com React Native e Flutter, integrados a back-ends em Node.js, Django e Laravel.',
                    impact: 'Dezenas de telas e módulos entregues em um dos maiores centros de inovação tecnológica do país.',
                    stack: ['Flutter', 'React Native', 'React.js', 'Laravel (PHP)', 'Node.js', 'Material Design'],
                    liveUrl: null,
                },
            ],
        },
        playground: {
            sectionTag: 'EXPLORE DE FORMA LÚDICA',
            title: 'Por dentro de como uma requisição ganha vida',
            subtitle:
                'Clique em cada etapa abaixo para ver como eu conecto as tecnologias na prática quando estou desenhando uma solução:',
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
            sectionTag: 'LINHA DO TEMPO',
            title: 'Minha Caminhada Profissional & Acadêmica',
            jobs: [
                {
                    company: 'AlmaViva Solutions',
                    role: 'Senior Full Stack & AI Developer (Analista de Big Data PL III → PL IV)',
                    period: 'Mai 2022 – Nov 2026 (4 anos e 7 meses)',
                    badge: 'Promovido ao Nível IV',
                    summary:
                        'Liderança técnica em projetos Full Stack (Python/Django, React, Angular), integrações com IBM Maximo e automações de IA Generativa e Conversacional (Vertex AI, Gemini, IBM Watson e WhatsApp).',
                },
                {
                    company: 'Capgemini',
                    role: 'Consultor de Soluções Digitais III (Programador I → Analista I → Consultor III)',
                    period: 'Mar 2020 – Mai 2022 (2 anos e 3 meses)',
                    badge: '2 Promoções em < 2 anos',
                    summary:
                        'Desenvolvimento e modernização de aplicações corporativas utilizando React.js, Angular, Node.js, C#, ASP.NET e .NET Core em squads ágeis globais.',
                },
                {
                    company: 'EJC&T (Empresa Júnior de Computação)',
                    role: 'Diretor Presidente (CEO) & Co-Fundador / Gerente de Software',
                    period: 'Abr 2019 – Fev 2021 (1 ano e 11 meses)',
                    badge: 'Liderança & Empreendedorismo',
                    summary:
                        'Co-fundação da empresa júnior, gestão de times de desenvolvimento e arquitetura de projetos reais com React, Flutter, Node.js, Django e Laravel.',
                },
                {
                    company: 'SENAI CIMATEC',
                    role: 'Estagiário de Desenvolvimento de Software & Técnico em Informática',
                    period: '2017 – Mar 2020',
                    badge: 'Berço Técnico & Inovação',
                    summary:
                        'Formação técnica e estágio desenvolvendo aplicações web/mobile (.NET Core, Angular, React, React Native) e interfaces UI/UX com Material Design.',
                },
            ],
            educationBox: {
                title: 'Formação Universitária',
                items: [
                    '🎓 Análise e Desenvolvimento de Sistemas (ADS) — Estácio (2024 – Dez 2026)',
                    '🏛️ Bacharelado Interdisciplinar em Ciência e Tecnologia — UFBA (2019 – 2026)',
                    '💻 Técnico em Desenvolvimento de Software — SENAI CIMATEC (2017 – 2019)',
                ],
            },
        },
        contact: {
            sectionTag: 'BORA CONVERSAR?',
            title: 'Gostou do meu trabalho? Vamos construir algo juntos!',
            subtitle:
                'Estou disponível imediatamente para atuar em projetos desafiadores ou vagas Full-Time (Remoto ou Híbrido).',
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
        nav: {
            about: 'How I Work',
            projects: 'Project Gallery',
            playground: 'Interactive Flow',
            experience: 'Journey',
            cta: 'Let’s Talk',
        },
        hero: {
            greeting: 'Hi there! I’m Rafael Guimarães 👋',
            badge: 'Immediate Availability for Senior Roles & Projects (Remote / Hybrid)',
            headlinePart1: 'Turning complex business challenges into ',
            headlineHighlight: 'web platforms & AI agents',
            headlinePart2: ' people actually love using.',
            description:
                'Based in Salvador, Brazil, I started out in Graphic Design and UI/UX before diving deep into Software Engineering at SENAI CIMATEC and UFBA. Today I bring 6+ years of experience building Full Stack systems (Python, React, Node.js, .NET, Laravel) and conversational AI (Gemini, Vertex AI, Watson) at scale.',
            primaryCta: 'Grab a virtual coffee?',
            cvPtBtn: 'Baixar CV (PT-BR)',
            cvEnBtn: 'Download CV (EN)',
            polaroidCaption: 'Salvador, Brazil • Full Stack & AI Engineer',
            stickerTop: '🎨 Designer’s Eye + 🧠 Engineer’s Brain',
            stickerBottom: '⚡ 6+ years shipping production code',
            funFacts: [
                {
                    emoji: '🎨 ➡️ 💻',
                    title: 'From Design to Engineering',
                    text: 'I studied Graphic Design and UI/UX (2016) before becoming a software engineer—which is why user experience and polish matter so much to me.',
                },
                {
                    emoji: '🚀',
                    title: 'Former Junior Enterprise CEO',
                    text: 'Co-founded and led EJC&T in university, learning firsthand how to lead agile squads, talk to clients, and ship real products.',
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
            sectionTag: 'PROJECT SHOWCASE & CASE STUDIES',
            title: 'Featured Projects & Delivered Architectures',
            subtitle:
                'Filter by category to explore commercial websites, enterprise platforms, and Generative AI orchestrations.',
            filters: [
                { id: 'all', label: 'All Projects (5)' },
                { id: 'ai', label: '🤖 AI & Chatbots' },
                { id: 'web', label: '🌐 Web & Full Stack' },
                { id: 'mobile', label: '📱 Mobile & UI/UX' },
            ],
            viewDetailsBtn: 'Read technical case study',
            liveLinkBtn: 'Visit live website',
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
                    stack: ['Python', 'Django', 'Google Vertex AI', 'Gemini API', 'IBM Watson', 'WhatsApp API', 'React.js'],
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
                    stack: ['JavaScript', 'HTML5 & CSS3', 'Bootstrap', 'UI/UX Design', 'PHP / Web', 'SEO'],
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
                    stack: ['Python 3', 'Django', 'Angular', 'React.js', 'IBM Maximo', 'REST APIs', 'GitLab'],
                    liveUrl: null,
                },
                {
                    id: 'capgemini-modernization',
                    category: 'web',
                    visualType: 'capgemini-banking',
                    badge: 'Global IT Consultancy',
                    client: 'Capgemini',
                    year: '2020 – 2022',
                    title: 'Enterprise Application Modernization (.NET & React/Angular)',
                    shortDesc:
                        'Modernized front-end architectures (React, Angular, Node.js) and C# (.NET Core / ASP.NET) back-end services for enterprise clients.',
                    challenge:
                        'Large-scale enterprise systems required new features and UI modernization while maintaining strict SLA and sprint commitments.',
                    solution:
                        'Delivered reusable React/Angular components and high-performance .NET Core APIs within Agile/Scrum squads.',
                    impact: 'Earned two consecutive promotions in under 2 years (Developer I → Analyst I → Consultant III).',
                    stack: ['React.js', 'Angular', 'Node.js', 'C#', '.NET Core', 'ASP.NET', 'Jira / Scrum'],
                    liveUrl: null,
                },
                {
                    id: 'cimatec-mobile',
                    category: 'mobile',
                    visualType: 'cimatec-mobile',
                    badge: 'R&D & Startups',
                    client: 'SENAI CIMATEC & EJC&T',
                    year: '2019 – 2021',
                    title: 'Cross-Platform Mobile Apps (Flutter/RN) & Analytical Dashboards',
                    shortDesc:
                        'Built cross-platform mobile applications and Material Design data dashboards powered by Laravel, Django, and .NET Core.',
                    challenge:
                        'Turn R&D research concepts and startup client requirements into polished mobile apps and intuitive web dashboards.',
                    solution:
                        'Combined UI/UX prototyping with React Native and Flutter mobile development backed by Node.js, Django, and Laravel APIs.',
                    impact: 'Delivered production-ready applications inside one of Brazil’s leading technology centers.',
                    stack: ['Flutter', 'React Native', 'React.js', 'Laravel (PHP)', 'Node.js', 'Material Design'],
                    liveUrl: null,
                },
            ],
        },
        playground: {
            sectionTag: 'INTERACTIVE ARCHITECTURE WALKTHROUGH',
            title: 'How a Request Comes to Life in My Stack',
            subtitle:
                'Click each step below to see how I connect front-end, AI agents, back-end APIs, and enterprise databases in real projects:',
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
            sectionTag: 'CAREER TIMELINE',
            title: 'My Professional & Academic Journey',
            jobs: [
                {
                    company: 'AlmaViva Solutions',
                    role: 'Senior Full Stack & AI Developer (Big Data Analyst III → IV)',
                    period: 'May 2022 – Nov 2026 (4 yrs 7 mos)',
                    badge: 'Promoted to Level IV',
                    summary:
                        'Technical ownership across Full Stack platforms (Python/Django, React, Angular), IBM Maximo integrations, and Generative/Conversational AI (Vertex AI, Gemini, Watson, WhatsApp).',
                },
                {
                    company: 'Capgemini',
                    role: 'Digital Solutions Consultant III (Developer I → Analyst I → Consultant III)',
                    period: 'Mar 2020 – May 2022 (2 yrs 3 mos)',
                    badge: '2 Promotions in < 2 yrs',
                    summary:
                        'Built and modernized enterprise applications using React.js, Angular, Node.js, C#, ASP.NET, and .NET Core in global Agile squads.',
                },
                {
                    company: 'EJC&T (Junior Enterprise)',
                    role: 'Chief Executive Officer (CEO) & Co-Founder / Software Manager',
                    period: 'Apr 2019 – Feb 2021 (1 yr 11 mos)',
                    badge: 'Leadership & Co-Founder',
                    summary:
                        'Co-founded the junior enterprise, led agile developer squads, and architected web/mobile client projects using React, Flutter, Node.js, Django, and Laravel.',
                },
                {
                    company: 'SENAI CIMATEC',
                    role: 'Software Development Intern & Computer Technician',
                    period: '2017 – Mar 2020',
                    badge: 'Technical Foundation',
                    summary:
                        'Technical degree and internship building web/mobile apps (.NET Core, Angular, React, React Native) and Material Design UI/UX dashboards.',
                },
            ],
            educationBox: {
                title: 'University & Technical Education',
                items: [
                    '🎓 Systems Analysis and Development (ADS) — Estácio (2024 – Dec 2026)',
                    '🏛️ Bachelor of Science & Technology — UFBA (2019 – 2026)',
                    '💻 Computer Science Technical Diploma — SENAI CIMATEC (2017 – 2019)',
                ],
            },
        },
        contact: {
            sectionTag: 'LET’S CONNECT',
            title: 'Liked my work? Let’s build something great together!',
            subtitle:
                'Available immediately for challenging projects or Senior Full-Time roles (Remote or Hybrid).',
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
    const [activeStep, setActiveStep] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);

    const t = CONTENT[lang];
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
            <Head title="Rafael Guimarães — Portfólio & Projetos" />

            {/* Warm Craft Light Background */}
            <div className="min-h-screen bg-craft-dots text-slate-900 relative overflow-x-hidden">
                {/* Soft Decorative Watercolor Blobs */}
                <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                    <div className="absolute -top-32 right-[10%] w-96 h-96 bg-amber-200/35 blur-[110px] rounded-full" />
                    <div className="absolute top-[30%] -left-24 w-96 h-96 bg-indigo-200/35 blur-[120px] rounded-full" />
                    <div className="absolute bottom-10 right-[15%] w-96 h-96 bg-emerald-200/30 blur-[120px] rounded-full" />
                </div>

                {/* Sticky Header with Personal Brand Logo */}
                <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-[#faf9f5]/90 backdrop-blur-md">
                    <nav
                        className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between"
                        aria-label="Navegação Principal"
                    >
                        <a href="#" className="flex items-center gap-3 group">
                            <img
                                src={profile.logoUrl}
                                alt="rafaelgcs — Rafael Guimarães"
                                width={185}
                                height={46}
                                fetchPriority="high"
                                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                            />
                        </a>

                        <ul className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
                            <li>
                                <a href="#projects" className="hover:text-indigo-700 transition-colors">
                                    {t.nav.projects}
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-indigo-700 transition-colors">
                                    {t.nav.about}
                                </a>
                            </li>
                            <li>
                                <a href="#playground" className="hover:text-indigo-700 transition-colors">
                                    {t.nav.playground}
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="hover:text-indigo-700 transition-colors">
                                    {t.nav.experience}
                                </a>
                            </li>
                        </ul>

                        <div className="flex items-center gap-3">
                            {/* Language Switcher */}
                            <div
                                className="inline-flex rounded-xl bg-white p-1 border border-slate-200 shadow-2xs"
                                role="group"
                                aria-label="Idioma"
                            >
                                <button
                                    type="button"
                                    onClick={() => setLang('pt')}
                                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                                        lang === 'pt'
                                            ? 'bg-[#1e262c] text-white'
                                            : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    PT
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setLang('en')}
                                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                                        lang === 'en'
                                            ? 'bg-[#1e262c] text-white'
                                            : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    EN
                                </button>
                            </div>

                            <button
                                type="button"
                                onClick={openContactModal}
                                className="hidden sm:inline-flex items-center gap-2 bg-[#1e262c] hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
                            >
                                <Coffee className="w-4 h-4 text-amber-300" aria-hidden="true" />
                                <span>{t.nav.cta}</span>
                            </button>
                        </div>
                    </nav>
                </header>

                <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-24 space-y-24">
                    {/* HERO SECTION: HUMAN, FIGURATIVE & PLAYFUL */}
                    <section aria-labelledby="hero-heading" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left Column: Story & CTAs */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold shadow-2xs">
                                <span className="w-2 h-2 rounded-full bg-emerald-600 pulse-dot" aria-hidden="true" />
                                <span>{t.hero.badge}</span>
                            </div>

                            <p className="text-base sm:text-lg font-bold text-indigo-700 flex items-center gap-2">
                                <span>{t.hero.greeting}</span>
                            </p>

                            <h1
                                id="hero-heading"
                                className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.14]"
                            >
                                {t.hero.headlinePart1}
                                <span className="underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-8 text-indigo-700">
                                    {t.hero.headlineHighlight}
                                </span>
                                {t.hero.headlinePart2}
                            </h1>

                            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                                {t.hero.description}
                            </p>

                            {/* Tactile Action Buttons */}
                            <div className="flex flex-wrap items-center gap-3.5 pt-2">
                                <button
                                    type="button"
                                    onClick={openContactModal}
                                    className="inline-flex items-center gap-2.5 bg-[#1e262c] hover:bg-slate-800 text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-md transition-transform active:scale-95 cursor-pointer"
                                >
                                    <Coffee className="w-4 h-4 text-amber-300" aria-hidden="true" />
                                    <span>{t.hero.primaryCta}</span>
                                </button>

                                <a
                                    href={profile.cvPtUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white hover:bg-amber-50/60 text-slate-900 border-2 border-slate-300 font-bold text-sm px-4 py-3 rounded-2xl transition-colors"
                                >
                                    <Download className="w-4 h-4 text-indigo-600" aria-hidden="true" />
                                    <span>{t.hero.cvPtBtn}</span>
                                </a>

                                <a
                                    href={profile.cvEnUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50/60 text-slate-900 border-2 border-slate-300 font-bold text-sm px-4 py-3 rounded-2xl transition-colors"
                                >
                                    <Download className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                                    <span>{t.hero.cvEnBtn}</span>
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm font-semibold text-slate-600">
                                <a
                                    href={profile.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-indigo-700 transition-colors"
                                >
                                    <LinkedinIcon className="w-4 h-4 text-sky-600" />
                                    <span>/in/rafaelgcs</span>
                                </a>
                                <a
                                    href={profile.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-slate-950 transition-colors"
                                >
                                    <GithubIcon className="w-4 h-4 text-slate-800" />
                                    <span>github.com/rafaelgcs</span>
                                </a>
                                <span className="inline-flex items-center gap-1.5">
                                    <MapPin className="w-4 h-4 text-rose-500" aria-hidden="true" />
                                    <span>Salvador, Bahia 🇧🇷</span>
                                </span>
                            </div>
                        </div>

                        {/* Right Column: Figurative Polaroid Photo + Floating Stickers */}
                        <div className="lg:col-span-5 flex justify-center">
                            <div className="relative w-full max-w-sm">
                                {/* Floating Sticker Top-Left */}
                                <div className="float-badge absolute -top-5 -left-4 z-20 bg-amber-100 border-2 border-amber-300 text-amber-950 text-xs font-extrabold px-3.5 py-2 rounded-2xl shadow-md">
                                    {t.hero.stickerTop}
                                </div>

                                {/* Main Polaroid / Studio Card */}
                                <figure className="craft-card rounded-3xl p-5 bg-white rotate-1 hover:rotate-0 transition-transform duration-300">
                                    <div className="relative rounded-2xl bg-gradient-to-tr from-amber-100 via-indigo-50 to-emerald-50 p-6 flex flex-col items-center justify-center border border-slate-200 overflow-hidden">
                                        {/* Watermark Monogram Icon in corner */}
                                        <img
                                            src={profile.iconUrl}
                                            alt=""
                                            width={48}
                                            height={74}
                                            className="absolute top-3 right-3 h-10 w-auto opacity-15"
                                        />

                                        {/* Rafael's Real Portrait Photo */}
                                        <div className="relative">
                                            <img
                                                src={profile.avatarUrl}
                                                alt="Foto de Rafael Guimarães sorrindo"
                                                width={180}
                                                height={180}
                                                fetchPriority="high"
                                                className="w-40 h-40 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-white shadow-lg"
                                            />
                                            <span
                                                className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-base"
                                                aria-hidden="true"
                                            >
                                                🚀
                                            </span>
                                        </div>

                                        {/* Mini Tech Badges inside the card */}
                                        <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                                            <span className="px-2.5 py-0.5 text-[11px] font-bold bg-white text-slate-800 rounded-full border border-slate-200 shadow-2xs">
                                                🐍 Python
                                            </span>
                                            <span className="px-2.5 py-0.5 text-[11px] font-bold bg-white text-slate-800 rounded-full border border-slate-200 shadow-2xs">
                                                ⚛️ React & Inertia
                                            </span>
                                            <span className="px-2.5 py-0.5 text-[11px] font-bold bg-white text-slate-800 rounded-full border border-slate-200 shadow-2xs">
                                                ✨ Gemini & Vertex AI
                                            </span>
                                        </div>
                                    </div>

                                    <figcaption className="pt-4 pb-1 text-center">
                                        <p className="font-extrabold text-slate-900 text-base">Rafael Guimarães</p>
                                        <p className="font-mono text-xs text-slate-500 mt-0.5">
                                            {t.hero.polaroidCaption}
                                        </p>
                                    </figcaption>
                                </figure>

                                {/* Floating Sticker Bottom-Right */}
                                <div className="float-badge-delayed absolute -bottom-4 -right-3 z-20 bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-lg">
                                    {t.hero.stickerBottom}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* DEDICATED PROJECT SHOWCASE WITH VISUAL PREVIEWS & FILTER TABS */}
                    <section id="projects" aria-labelledby="projects-heading" className="space-y-8 scroll-mt-24">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="space-y-2 max-w-2xl">
                                <p className="font-mono text-xs uppercase tracking-widest text-indigo-700 font-bold flex items-center gap-1.5">
                                    <FolderGit2 className="w-4 h-4" aria-hidden="true" />
                                    <span>{t.projects.sectionTag}</span>
                                </p>
                                <h2 id="projects-heading" className="text-2xl sm:text-4xl font-extrabold text-slate-950">
                                    {t.projects.title}
                                </h2>
                                <p className="text-slate-600 text-sm sm:text-base">{t.projects.subtitle}</p>
                            </div>

                            {/* Interactive Category Tabs */}
                            <div
                                className="flex flex-wrap gap-2"
                                role="group"
                                aria-label="Filtrar projetos por categoria"
                            >
                                {t.projects.filters.map((f) => (
                                    <button
                                        key={f.id}
                                        type="button"
                                        onClick={() => setActiveFilter(f.id)}
                                        className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                                            activeFilter === f.id
                                                ? 'bg-[#1e262c] text-white shadow-sm scale-[1.02]'
                                                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                                        }`}
                                    >
                                        {f.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Project Gallery Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {filteredProjects.map((proj) => (
                                <article
                                    key={proj.id}
                                    className="craft-card rounded-3xl overflow-hidden flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Figurative Visual Mockup Header */}
                                        <ProjectVisualPreview type={proj.visualType} />

                                        {/* Card Content */}
                                        <div className="p-6 space-y-3">
                                            <div className="flex items-center justify-between text-xs">
                                                <span className="font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
                                                    {proj.badge}
                                                </span>
                                                <span className="font-mono text-slate-500 font-semibold">
                                                    {proj.client}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                                                {proj.title}
                                            </h3>

                                            <p className="text-sm text-slate-600 leading-relaxed">
                                                {proj.shortDesc}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="px-6 pb-6 pt-2 space-y-4">
                                        <ul className="flex flex-wrap gap-1.5">
                                            {proj.stack.slice(0, 5).map((tech) => (
                                                <li
                                                    key={tech}
                                                    className="text-[11px] font-mono font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200"
                                                >
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                                            <button
                                                type="button"
                                                onClick={() => openProjectModal(proj)}
                                                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs py-2.5 px-3 rounded-xl transition-colors cursor-pointer"
                                            >
                                                <Eye className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
                                                <span>{t.projects.viewDetailsBtn}</span>
                                            </button>

                                            {proj.liveUrl && (
                                                <a
                                                    href={proj.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center gap-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs py-2.5 px-3 rounded-xl transition-colors"
                                                >
                                                    <span>Site</span>
                                                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* PLAYFUL STORYTELLING CARDS: CURIOSITIES & DNA */}
                    <section id="about" aria-labelledby="about-heading" className="space-y-8 scroll-mt-24">
                        <div className="space-y-2 max-w-2xl">
                            <p className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold">
                                ✨ LADO HUMANO & DIFERENCIAIS
                            </p>
                            <h2 id="about-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                                4 Fatos Curiosos Sobre Minha Trajetória
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {t.hero.funFacts.map((fact, idx) => (
                                <article
                                    key={idx}
                                    className="craft-card rounded-3xl p-6 space-y-3 bg-white"
                                >
                                    <div className="text-2xl bg-amber-50 border border-amber-200 w-12 h-12 rounded-2xl flex items-center justify-center">
                                        {fact.emoji}
                                    </div>
                                    <h3 className="text-base font-extrabold text-slate-900">
                                        {fact.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {fact.text}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* INTERACTIVE ARCHITECTURE PLAYGROUND */}
                    <section id="playground" aria-labelledby="playground-heading" className="space-y-8 scroll-mt-24">
                        <div className="craft-card rounded-3xl p-6 sm:p-10 bg-white space-y-8">
                            <div className="space-y-2 max-w-2xl">
                                <p className="font-mono text-xs uppercase tracking-widest text-emerald-700 font-bold flex items-center gap-1.5">
                                    <Zap className="w-4 h-4" aria-hidden="true" />
                                    <span>{t.playground.sectionTag}</span>
                                </p>
                                <h2 id="playground-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                                    {t.playground.title}
                                </h2>
                                <p className="text-slate-600 text-sm sm:text-base">
                                    {t.playground.subtitle}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                                {/* Step Selector Buttons */}
                                <div className="lg:col-span-5 space-y-3">
                                    {t.playground.steps.map((s, idx) => (
                                        <button
                                            key={s.step}
                                            type="button"
                                            onClick={() => setActiveStep(idx)}
                                            className={`w-full text-left p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-4 ${
                                                activeStep === idx
                                                    ? 'bg-indigo-50/90 border-indigo-600 shadow-xs'
                                                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                                            }`}
                                        >
                                            <span
                                                className={`w-9 h-9 rounded-xl font-mono text-xs font-extrabold flex items-center justify-center shrink-0 ${
                                                    activeStep === idx
                                                        ? 'bg-indigo-600 text-white'
                                                        : 'bg-white text-slate-600 border border-slate-200'
                                                }`}
                                            >
                                                {s.step}
                                            </span>
                                            <div>
                                                <p className="font-bold text-sm text-slate-900">{s.title}</p>
                                                <p className="font-mono text-[11px] text-indigo-700 mt-0.5">
                                                    {s.tech}
                                                </p>
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                {/* Interactive Stage Display */}
                                <div className="lg:col-span-7 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-7 sm:p-9 space-y-5 shadow-xl">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-xs uppercase tracking-widest text-amber-300 font-bold">
                                            ETAPA {t.playground.steps[activeStep].step} DE 04
                                        </span>
                                        <span className="text-xs font-mono bg-white/10 px-3 py-1 rounded-full text-indigo-200">
                                            {t.playground.steps[activeStep].tech}
                                        </span>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-extrabold">
                                        {t.playground.steps[activeStep].title}
                                    </h3>

                                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                                        {t.playground.steps[activeStep].story}
                                    </p>

                                    {/* Visual Progress Dots */}
                                    <div className="flex items-center gap-2 pt-3">
                                        {[0, 1, 2, 3].map((dot) => (
                                            <span
                                                key={dot}
                                                className={`h-2 rounded-full transition-all ${
                                                    activeStep === dot
                                                        ? 'w-10 bg-amber-400'
                                                        : 'w-2 bg-slate-700'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* COMPACT VISUAL CAREER TIMELINE */}
                    <section id="experience" aria-labelledby="experience-heading" className="space-y-8 scroll-mt-24">
                        <div className="space-y-2 max-w-2xl">
                            <p className="font-mono text-xs uppercase tracking-widest text-indigo-700 font-bold">
                                {t.experience.sectionTag}
                            </p>
                            <h2 id="experience-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                                {t.experience.title}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {t.experience.jobs.map((job, idx) => (
                                <article
                                    key={idx}
                                    className="craft-card rounded-3xl p-6 space-y-3 bg-white"
                                >
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                                            {job.period}
                                        </span>
                                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                                            {job.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-extrabold text-slate-950">{job.company}</h3>
                                    <p className="text-xs font-bold text-slate-700">{job.role}</p>
                                    <p className="text-sm text-slate-600 leading-relaxed">{job.summary}</p>
                                </article>
                            ))}
                        </div>

                        {/* Academic Box */}
                        <div className="craft-card rounded-3xl p-6 sm:p-8 bg-amber-50/50 border-amber-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="space-y-2">
                                <h3 className="text-lg font-extrabold text-slate-950 flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5 text-indigo-700" aria-hidden="true" />
                                    <span>{t.experience.educationBox.title}</span>
                                </h3>
                                <ul className="space-y-1.5 text-sm font-medium text-slate-700">
                                    {t.experience.educationBox.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={profile.cvPtUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-bold text-xs px-4 py-3 rounded-xl shadow-2xs"
                                >
                                    <Download className="w-4 h-4 text-indigo-600" aria-hidden="true" />
                                    <span>CV Completo (PT)</span>
                                </a>
                                <a
                                    href={profile.cvEnUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-bold text-xs px-4 py-3 rounded-xl shadow-2xs"
                                >
                                    <Download className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                                    <span>Full Resume (EN)</span>
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* CONTACT SECTION */}
                    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24">
                        <div className="craft-card rounded-3xl bg-white p-8 sm:p-12 text-center space-y-6">
                            <div className="flex justify-center">
                                <img
                                    src={profile.iconUrl}
                                    alt=""
                                    width={42}
                                    height={64}
                                    loading="lazy"
                                    className="h-14 w-auto object-contain"
                                />
                            </div>
                            <p className="font-mono text-xs uppercase tracking-widest text-indigo-700 font-bold">
                                {t.contact.sectionTag}
                            </p>
                            <h2
                                id="contact-heading"
                                className="text-2xl sm:text-4xl font-extrabold text-slate-950 max-w-2xl mx-auto"
                            >
                                {t.contact.title}
                            </h2>
                            <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
                                {t.contact.subtitle}
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                                <button
                                    type="button"
                                    onClick={openContactModal}
                                    className="inline-flex items-center gap-2 bg-[#1e262c] hover:bg-slate-800 text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-md transition-colors cursor-pointer"
                                >
                                    <Send className="w-4 h-4 text-amber-300" aria-hidden="true" />
                                    <span>{t.contact.openModalBtn}</span>
                                </button>

                                <a
                                    href={profile.whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-md transition-colors"
                                >
                                    <MessageSquare className="w-4 h-4" aria-hidden="true" />
                                    <span>{t.contact.whatsappBtn}</span>
                                </a>

                                <a
                                    href={`mailto:${profile.email}`}
                                    className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm px-5 py-3.5 rounded-2xl transition-colors"
                                >
                                    <Mail className="w-4 h-4 text-indigo-600" aria-hidden="true" />
                                    <span>{profile.email}</span>
                                </a>
                            </div>
                        </div>
                    </section>
                </main>

                {/* PROJECT CASE STUDY MODAL (<dialog>) */}
                <dialog
                    ref={projectDialogRef}
                    {...({ closedby: 'any' })}
                    className="contact-modal m-auto w-full max-w-xl rounded-3xl bg-white border border-slate-200 text-slate-900 p-6 sm:p-8 shadow-2xl"
                    aria-labelledby="project-modal-title"
                >
                    {selectedProject && (
                        <div className="space-y-5">
                            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
                                <div>
                                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                                        {selectedProject.badge} • {selectedProject.client}
                                    </span>
                                    <h2 id="project-modal-title" className="text-xl font-extrabold text-slate-950 mt-2">
                                        {selectedProject.title}
                                    </h2>
                                </div>
                                <button
                                    type="button"
                                    onClick={closeProjectModal}
                                    className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
                                >
                                    <X className="w-5 h-5" aria-hidden="true" />
                                </button>
                            </div>

                            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                                    <p className="font-extrabold text-slate-900 text-xs uppercase mb-1">
                                        🎯 O Desafio
                                    </p>
                                    <p>{selectedProject.challenge}</p>
                                </div>

                                <div className="bg-indigo-50/60 p-4 rounded-2xl border border-indigo-200">
                                    <p className="font-extrabold text-indigo-950 text-xs uppercase mb-1">
                                        🛠️ Como Eu Construí
                                    </p>
                                    <p>{selectedProject.solution}</p>
                                </div>

                                <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200">
                                    <p className="font-extrabold text-emerald-950 text-xs uppercase mb-1">
                                        🚀 Resultado & Impacto
                                    </p>
                                    <p>{selectedProject.impact}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase mb-2">
                                    Tecnologias Utilizadas:
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {selectedProject.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-mono font-semibold bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg border border-slate-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                                {selectedProject.liveUrl && (
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl"
                                    >
                                        <span>Visitar Site Real</span>
                                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                                    </a>
                                )}
                                <button
                                    type="button"
                                    onClick={closeProjectModal}
                                    className="px-4 py-2.5 rounded-xl bg-[#1e262c] text-white text-xs font-bold cursor-pointer"
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
                    className="contact-modal m-auto w-full max-w-lg rounded-3xl bg-white border border-slate-200 text-slate-900 p-6 sm:p-8 shadow-2xl"
                    aria-labelledby="modal-contact-title"
                >
                    <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
                        <div className="flex items-center gap-3">
                            <img
                                src={profile.iconUrl}
                                alt=""
                                width={24}
                                height={36}
                                className="h-7 w-auto object-contain"
                            />
                            <div>
                                <h2 id="modal-contact-title" className="text-lg font-extrabold text-slate-950">
                                    {t.contact.dialogTitle}
                                </h2>
                                <p className="text-xs text-slate-500 mt-0.5">{t.contact.dialogSubtitle}</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={closeContactModal}
                            aria-label={t.contact.closeBtn}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
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
                            <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                                {t.contact.nameLabel}
                            </label>
                            <input
                                id="contact-name"
                                type="text"
                                required
                                autoComplete="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="w-full rounded-xl bg-slate-50 border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white"
                            />
                            {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1.5">
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
                                    className="w-full rounded-xl bg-slate-50 border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white"
                                />
                                {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="contact-company" className="block text-xs font-bold text-slate-700 mb-1.5">
                                    {t.contact.companyLabel}
                                </label>
                                <input
                                    id="contact-company"
                                    type="text"
                                autoComplete="organization"
                                    value={data.company}
                                    onChange={(e) => setData('company', e.target.value)}
                                    className="w-full rounded-xl bg-slate-50 border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1.5">
                                {t.contact.messageLabel}
                            </label>
                            <textarea
                                id="contact-message"
                                rows={4}
                                required
                                value={data.message}
                                onChange={(e) => setData('message', e.target.value)}
                                className="w-full rounded-xl bg-slate-50 border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white"
                            />
                            {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
                        </div>

                        <div className="flex items-center justify-end gap-3 pt-2">
                            <button
                                type="button"
                                onClick={closeContactModal}
                                className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                            >
                                {t.contact.closeBtn}
                            </button>
                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1e262c] hover:bg-slate-800 disabled:opacity-50 text-xs font-semibold text-white transition-colors cursor-pointer"
                            >
                                <Send className="w-3.5 h-3.5" aria-hidden="true" />
                                <span>{processing ? t.contact.submittingBtn : t.contact.submitBtn}</span>
                            </button>
                        </div>
                    </form>
                </dialog>

                {/* FOOTER */}
                <footer className="relative z-10 border-t border-slate-200 bg-white py-10">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-600">
                        <div className="flex items-center gap-4">
                            <img
                                src={profile.logoUrl}
                                alt="rafaelgcs"
                                width={130}
                                height={32}
                                loading="lazy"
                                className="h-7 w-auto object-contain"
                            />
                            <span className="text-slate-300">|</span>
                            <p>
                                Feito com ☕ em Salvador-BA por <strong>Rafael Guimarães</strong> ({profile.domain})
                            </p>
                        </div>
                        <div className="flex items-center gap-5 font-semibold text-slate-700">
                            <a
                                href={profile.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-indigo-700 transition-colors"
                            >
                                LinkedIn
                            </a>
                            <a
                                href={profile.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-indigo-700 transition-colors"
                            >
                                GitHub
                            </a>
                            <a href={profile.cvPtUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-700 transition-colors">
                                CV (PT)
                            </a>
                            <a href={profile.cvEnUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-700 transition-colors">
                                CV (EN)
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
