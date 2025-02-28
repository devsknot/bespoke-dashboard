/**
 * Configuración centralizada de la marca blanca
 * Este archivo contiene todas las configuraciones relacionadas con la marca
 * que se utilizan en toda la aplicación.
 */

export const brandConfig = {
  // Información básica
  name: "BespokeDashboard",
  shortName: "Bespoke",
  
  // URLs
  url: "https://bespoke-dashboard.com",
  
  // Contacto
  email: "admin@bespoke-dashboard.com",
  supportEmail: "support@bespoke-dashboard.com",
  password: "password", // Contraseña por defecto para ejemplos
  
  // Rutas
  mainRoute: "/dashboard",
  analyticsRoute: "/dashboard/analytics",
  
  // Textos
  welcomeText: "Welcome to BespokeDashboard",
  signInTitle: "Sign in",
  signInText: "Sign in to your account to start using BespokeDashboard",
  signInButtonText: "Sign In",
  signUpTitle: "Sign up",
  signUpText: "Create an account to start using BespokeDashboard",
  signUpButtonText: "Sign Up",
  resetPasswordText: "Reset Password with BespokeDashboard",
  resetPasswordButtonText: "Send Recovery Email",
  copyrightText: (year: number) => `Copyright ${year}, BespokeDashboard All Rights Reserved.`,
  
  // Clases CSS
  cssPrefix: "bespoke-dashboard",
  appClass: "bespoke-dashboard-app",
  
  // Metadatos
  metaTitle: "BespokeDashboard - Admin Dashboard",
  metaDescription: "BespokeDashboard is a modern admin dashboard template",
  
  // Configuración de localización
  localeHeader: "bespoke-locale",
  defaultLocale: "en",
  locales: ["en", "ar"],
  
  // Textos para preguntas frecuentes
  faqTexts: {
    howItWorks: "How does BespokeDashboard work?",
    whereToLearn: "Where I can learn more about using BespokeDashboard?",
    whyImportant: "Why BespokeDashboard is so important?",
    whereToFind: "Where I can find BespokeDashboard?",
  },
  
  // Redes sociales
  socialLinks: {
    twitter: "https://twitter.com/bespoke-dashboard",
    facebook: "https://facebook.com/bespoke-dashboard",
    instagram: "https://instagram.com/bespoke-dashboard",
    linkedin: "https://linkedin.com/company/bespoke-dashboard",
  }
};

export default brandConfig;
