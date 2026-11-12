@php
    $rawAppName = config('app.name');
    $defaultTitle = ($rawAppName && $rawAppName !== 'Laravel')
        ? $rawAppName
        : 'Rafael Guimarães — Desenvolvedor Full Stack Sênior & Especialista em IA | rafaelgcs';
    $defaultDescription = 'Portfólio oficial de Rafael Guimarães (rafaelgcs) — Desenvolvedor Full Stack Sênior & Especialista em Soluções de Inteligência Artificial (+6 anos com React, Next.js, PHP/Laravel, Python/Django, .NET Core, Node.js, Flutter e Agentes de IA).';
    $canonicalUrl = url()->current() ?: 'https://rafaelgcs.com.br';
    $ogImageUrl = asset('brand/og-cover.png');
@endphp
<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Primary SEO Meta Tags -->
    <title inertia>{{ $defaultTitle }}</title>
    <meta name="description" content="{{ $defaultDescription }}" inertia>
    <meta name="keywords" content="Rafael Guimarães, rafaelgcs, Desenvolvedor Full Stack Sênior, Senior Full Stack Developer, Engenheiro de Software, Especialista em IA, React, React Native, Flutter, Angular, TypeScript, PHP, Laravel, Inertia, Python, Django, .NET Core, C#, Node.js, MiuCore Atende, PsiEasy, Salvador Bahia" inertia>
    <meta name="author" content="Rafael Guimarães (rafaelgcs)">
    <meta name="creator" content="Rafael Guimarães">
    <meta name="publisher" content="Rafael Guimarães">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="theme-color" content="#253238">
    <meta name="format-detection" content="telephone=no">

    <!-- Canonical & Internationalization Links -->
    <link rel="canonical" href="{{ $canonicalUrl }}" inertia>
    <link rel="alternate" hreflang="pt-BR" href="https://rafaelgcs.com.br">
    <link rel="alternate" hreflang="en" href="https://rafaelgcs.com.br">
    <link rel="alternate" hreflang="x-default" href="https://rafaelgcs.com.br">

    <!-- Open Graph / WhatsApp / LinkedIn / Facebook / Discord -->
    <meta property="og:type" content="website" inertia>
    <meta property="og:site_name" content="Rafael Guimarães • rafaelgcs.com.br" inertia>
    <meta property="og:locale" content="pt_BR" inertia>
    <meta property="og:locale:alternate" content="en_US">
    <meta property="og:url" content="{{ $canonicalUrl }}" inertia>
    <meta property="og:title" content="Rafael Guimarães — Desenvolvedor Full Stack Sênior & Especialista em IA" inertia>
    <meta property="og:description" content="{{ $defaultDescription }}" inertia>
    <meta property="og:image" content="{{ $ogImageUrl }}" inertia>
    <meta property="og:image:secure_url" content="{{ $ogImageUrl }}">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Rafael Guimarães — Senior Full Stack Developer & AI Solutions Engineer (rafaelgcs.com.br)" inertia>

    <!-- Twitter / X Large Summary Card -->
    <meta name="twitter:card" content="summary_large_image" inertia>
    <meta name="twitter:url" content="{{ $canonicalUrl }}" inertia>
    <meta name="twitter:title" content="Rafael Guimarães — Desenvolvedor Full Stack Sênior & Especialista em IA" inertia>
    <meta name="twitter:description" content="{{ $defaultDescription }}" inertia>
    <meta name="twitter:image" content="{{ $ogImageUrl }}" inertia>
    <meta name="twitter:image:alt" content="Rafael Guimarães — Senior Full Stack Developer & AI Solutions Engineer (rafaelgcs.com.br)">

    <!-- Favicons & Web App Manifest -->
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png">
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/brand/icon-rg.png">
    <link rel="manifest" href="/site.webmanifest">

    <!-- Preconnect & Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700,800|jetbrains-mono:400,500,600&display=swap" rel="stylesheet" />

    <!-- Structured Data (Schema.org JSON-LD for Google Rich Results) -->
    <script type="application/ld+json">
    {!! json_encode([
        '@context' => 'https://schema.org',
        '@graph' => [
            [
                '@type' => 'WebSite',
                '@id' => 'https://rafaelgcs.com.br/#website',
                'url' => 'https://rafaelgcs.com.br/',
                'name' => 'Rafael Guimarães • Portfólio & Engenharia de Software',
                'alternateName' => 'rafaelgcs',
                'description' => $defaultDescription,
                'inLanguage' => ['pt-BR', 'en-US'],
            ],
            [
                '@type' => 'ProfilePage',
                '@id' => 'https://rafaelgcs.com.br/#profilepage',
                'url' => 'https://rafaelgcs.com.br/',
                'name' => 'Rafael Guimarães — Desenvolvedor Full Stack Sênior & Especialista em IA',
                'isPartOf' => ['@id' => 'https://rafaelgcs.com.br/#website'],
                'mainEntity' => ['@id' => 'https://rafaelgcs.com.br/#person'],
            ],
            [
                '@type' => 'Person',
                '@id' => 'https://rafaelgcs.com.br/#person',
                'name' => 'Rafael Guimarães',
                'alternateName' => 'rafaelgcs',
                'jobTitle' => 'Desenvolvedor Full Stack Sênior & Especialista em Soluções de IA',
                'description' => $defaultDescription,
                'url' => 'https://rafaelgcs.com.br/',
                'image' => $ogImageUrl,
                'email' => 'mailto:contato@rafaelgcs.com.br',
                'telephone' => '+55-71-99706-5007',
                'address' => [
                    '@type' => 'PostalAddress',
                    'addressLocality' => 'Salvador',
                    'addressRegion' => 'BA',
                    'addressCountry' => 'BR',
                ],
                'sameAs' => [
                    'https://www.linkedin.com/in/rafaelgcs',
                    'https://github.com/rafaelgcs',
                ],
                'alumniOf' => [
                    ['@type' => 'CollegeOrUniversity', 'name' => 'Universidade Federal da Bahia (UFBA)'],
                    ['@type' => 'CollegeOrUniversity', 'name' => 'Universidade Estácio de Sá'],
                    ['@type' => 'CollegeOrUniversity', 'name' => 'SENAI CIMATEC'],
                ],
                'knowsAbout' => [
                    'React.js', 'React Native', 'Flutter', 'Angular', 'TypeScript', 'JavaScript',
                    'PHP', 'Laravel', 'Inertia.js', 'Python', 'Django', '.NET Core', 'C#', 'Node.js',
                    'Google Vertex AI', 'Gemini API', 'IBM Watson', 'IBM Maximo', 'UI/UX Design',
                ],
            ],
            [
                '@type' => 'ItemList',
                '@id' => 'https://rafaelgcs.com.br/#portfolio-projects',
                'name' => 'Projetos Desenvolvidos por Rafael Guimarães',
                'itemListElement' => [
                    ['@type' => 'ListItem', 'position' => 1, 'name' => 'MiuCore Atende — Sistema de Atendimento Automático com IA para WhatsApp', 'url' => 'https://atende.miucore.com.br'],
                    ['@type' => 'ListItem', 'position' => 2, 'name' => 'PsiEasy — Software para Psicólogos & Prontuário Eletrônico com IA', 'url' => 'https://psieasy.app'],
                    ['@type' => 'ListItem', 'position' => 3, 'name' => 'Ellegance Hotel — Plataforma Web & Reservas em Salvador', 'url' => 'https://ellegancehotel.com.br'],
                    ['@type' => 'ListItem', 'position' => 4, 'name' => 'Escola Reino Encantado — Portal Institucional', 'url' => 'https://escolareinoencantado.com.br'],
                    ['@type' => 'ListItem', 'position' => 5, 'name' => 'Escola Villa Encantada', 'url' => 'https://www.escolavillaencantada.com.br'],
                    ['@type' => 'ListItem', 'position' => 6, 'name' => 'QualityTour Bahia', 'url' => 'https://www.qualitytourbahia.com.br'],
                    ['@type' => 'ListItem', 'position' => 7, 'name' => 'EJC&T — Empresa Júnior da UFBA', 'url' => 'https://www.ejcet.com.br'],
                ],
            ],
        ],
    ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) !!}
    </script>

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead
</head>
<body class="bg-[#f5f7f8] text-[#253238] antialiased selection:bg-[#253238] selection:text-white">
    @inertia
</body>
</html>
