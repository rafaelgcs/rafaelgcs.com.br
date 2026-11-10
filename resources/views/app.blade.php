<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title inertia>{{ config('app.name', 'Rafael Guimarães | Senior Full Stack & AI Engineer') }}</title>
    <meta name="description" content="Portfólio de Rafael Guimarães (rafaelgcs) — Desenvolvedor Full Stack Sênior & Especialista em Soluções de Inteligência Artificial (Python, React, Node.js, C#, Google Vertex AI, Gemini, IBM Watson).">
    <link rel="icon" type="image/png" href="/favicon.png">
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700,800|jetbrains-mono:400,500,600&display=swap" rel="stylesheet" />
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead
</head>
<body class="bg-slate-50 text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
    @inertia
</body>
</html>
