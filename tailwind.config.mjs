/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
    		screens: {
    			xs: '375px'
    		},
    		colors: {
    			bg: '#E3E5F2',
    			bgDark: '#1A1A1A',
    			accent: {
    				DEFAULT: '#2A3FF4',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			accentDark: '#003A8F',
    			accentLight: '#5B8FD9',
    			accentSubtle: '#E6EDF5',
    			text: '#1A1A1A',
    			textMuted: '#4A4A4A',
    			textLight: '#6A6A6A',
    			warm: '#F5E6D3',
    			warmDark: '#E8D4B8',
    			blue: {
    				'50': '#F0F5FA',
    				'100': '#E6EDF5',
    				'200': '#C4D4E8',
    				'300': '#9BB5D6',
    				'400': '#5B8FD9',
    				'500': '#0047AB',
    				'600': '#003A8F',
    				'700': '#002D73'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontFamily: {
    			headline: [
    				'NotoSerif-Medium',
    				'serif'
    			],
    			body: [
    				'Inter',
    				'system-ui',
    				'sans-serif'
    			]
    		},
    		// Section typography – reuse across homepage sections
    		fontSize: {
    			'section-tiny': ['14px', { lineHeight: '20px' }],
    			'section-header': ['36px', { lineHeight: '40px' }],
    			'section-subheading': ['18px', { lineHeight: '24px' }],
    			'section-inner-title': ['24px', { lineHeight: '32px' }],
    			'section-body': ['16px', { lineHeight: '24px' }]
    		},
    		borderRadius: {
    			pill: '9999px',
    			bento: '32px',
    			organic: '48px',
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		backgroundImage: {
    			'gradient-mesh': 'radial-gradient(at 0% 0%, rgba(0, 71, 171, 0.08) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(91, 143, 217, 0.06) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(230, 237, 245, 0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(0, 71, 171, 0.05) 0px, transparent 50%)',
    			'gradient-mesh-dark': 'radial-gradient(at 0% 0%, rgba(0, 71, 171, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 58, 143, 0.12) 0px, transparent 50%)',
    			'gradient-mesh-subtle': 'radial-gradient(at 0% 0%, rgba(0, 71, 171, 0.04) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(230, 237, 245, 0.1) 0px, transparent 50%)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};

