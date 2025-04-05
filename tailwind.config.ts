
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// John Wick themed colors
				wick: {
					background: '#121214',
					foreground: '#e9e9ea',
					dark: '#0c0c0e',
					charcoal: '#1e1e22',
					blue: '#1EAEDB',
					gold: '#d4af37',
					red: '#ea384c',
					gray: '#8E9196',
					border: '#333333',
					card: '#222222',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Rajdhani', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'text-reveal': {
					'0%': { 
						width: '0%',
						visibility: 'hidden',
					},
					'100%': { 
						width: '100%',
						visibility: 'visible',
					}
				},
				'fade-in': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(10px)',
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)',
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(30, 174, 219, 0.5)',
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(30, 174, 219, 0.8), 0 0 30px rgba(30, 174, 219, 0.6)',
					}
				},
				'glitch': {
					'0%, 100%': { 
						transform: 'translate(0)',
					},
					'20%': { 
						transform: 'translate(-5px, 5px)',
					},
					'40%': { 
						transform: 'translate(-5px, -5px)',
					},
					'60%': { 
						transform: 'translate(5px, 5px)',
					},
					'80%': { 
						transform: 'translate(5px, -5px)',
					}
				},
				'flicker': {
					'0%, 100%': { 
						opacity: '1',
					},
					'33%': { 
						opacity: '0.9',
					},
					'66%': { 
						opacity: '0.8',
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'text-reveal': 'text-reveal 2s ease-out forwards',
				'fade-in': 'fade-in 0.6s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'glitch': 'glitch 0.5s ease-in-out',
				'flicker': 'flicker 2s infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
