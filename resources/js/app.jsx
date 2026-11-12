import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

const DEFAULT_TITLE = 'Rafael Guimarães — Desenvolvedor Full Stack Sênior & Especialista em IA | rafaelgcs';

createInertiaApp({
    title: (title) => {
        if (!title || title === 'Laravel') {
            return DEFAULT_TITLE;
        }
        return title.includes('Rafael Guimarães') ? title : `${title} — Rafael Guimarães`;
    },
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: '#253238',
        showSpinner: false,
    },
});
