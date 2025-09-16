import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          muted: "hsl(var(--text-muted))",
        },
        
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          border: "hsl(var(--card-border))",
        },
        
        button: {
          primary: "hsl(var(--button-primary))",
          "primary-foreground": "hsl(var(--button-primary-foreground))",
          "primary-hover": "hsl(var(--button-primary-hover))",
          secondary: "hsl(var(--button-secondary))",
          "secondary-foreground": "hsl(var(--button-secondary-foreground))",
          "secondary-hover": "hsl(var(--button-secondary-hover))",
        },
        
        input: {
          border: "hsl(var(--input-border))",
          focus: "hsl(var(--input-focus))",
        },
        
        nav: {
          active: "hsl(var(--nav-active))",
          "active-foreground": "hsl(var(--nav-active-foreground))",
          inactive: "hsl(var(--nav-inactive))",
          "inactive-hover": "hsl(var(--nav-inactive-hover))",
        },
      },
      
      boxShadow: {
        'project': 'var(--project-shadow)',
        'project-hover': 'var(--project-shadow-hover)',
      },
      
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
