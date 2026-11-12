<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Portfolio', [
            'profile' => [
                'name' => 'Rafael Guimarães',
                'domain' => 'rafaelgcs.com.br',
                'siteUrl' => url('/'),
                'ogImageUrl' => asset('brand/og-cover.png'),
                'email' => 'contato@rafaelgcs.com.br',
                'phone' => '+55 (71) 99706-5007',
                'whatsappUrl' => 'https://wa.me/5571997065007?text=Ol%C3%A1%20Rafael!%20Vi%20seu%20portf%C3%B3lio%20em%20rafaelgcs.com.br%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.',
                'linkedinUrl' => 'https://www.linkedin.com/in/rafaelgcs',
                'githubUrl' => 'https://github.com/rafaelgcs',
                'location' => 'Salvador, Bahia, Brasil (Remoto / Híbrido)',
                'cvPtUrl' => '/Rafael_Guimaraes_CV_PT.pdf',
                'cvEnUrl' => '/Rafael_Guimaraes_CV_EN.pdf',
                'logoUrl' => '/brand/logo-rafaelgcs.png',
                'iconUrl' => '/brand/icon-rg.png',
                'avatarUrl' => '/brand/rafael-avatar.png',
            ],
        ]);
    }

    public function contact(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email', 'max:160'],
            'company' => ['nullable', 'string', 'max:120'],
            'message' => ['required', 'string', 'max:2000'],
        ]);

        Log::info('Novo contato recebido pelo portfólio rafaelgcs.com.br', $validated);

        return back()->with('success', 'Mensagem recebida com sucesso! Retornarei o contato em breve.');
    }
}
