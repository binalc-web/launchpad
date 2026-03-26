/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        ring: 'var(--ring)',
        'sidebar-border': 'var(--sidebar-border)',
        'sidebar-label': 'var(--sidebar-label)',
        'sidebar-text': 'var(--sidebar-text)',
        'sidebar-badge-bg': 'var(--sidebar-badge-bg)',
        'sidebar-badge-text': 'var(--sidebar-badge-text)',
        'sidebar-scrollbar': 'var(--sidebar-scrollbar)',
      },
      width: {
        'sidebar': '280px',
        'sidebar-options': '240px',
      },
      height: {
        'sidebar': '900px',
        'logo-wrapper': '60px',
        'main-wrapper': '840px',
        'sidebar-group': '30px',
        'sidebar-item': '32px',
        'sidebar-icon': '20px',
        'sidebar-badge': '24px',
      },
      padding: {
        'sidebar-main': '16px 8px 16px 16px',
        'sidebar-group': '7px 12px',
        'sidebar-item': '4px 12px',
      },
      gap: {
        'sidebar-main': '10px',
        'sidebar-options': '8px',
      },
      borderRadius: {
        'sidebar-item': '6px',
        'sidebar-badge': '8px',
      },
    },
  },
  plugins: [],
}
