import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        nav: {
          home: 'Home',
          about: 'About Us',
          services: 'Services',
          projects: 'Projects',
          contact: 'Contact Us',
          callNow: 'Call Now',
        },
        chatbot: {
          title: 'Zad Assistant',
          online: 'Online',
          greeting: 'Welcome to Zad Almadina Technical Services! How can I help you today?',
          typeMessage: 'Type a message...',
          newChat: 'Start new chat',
          closeChat: 'Close chat',
          openChat: 'Open chat assistant',
          preferWhatsapp: 'Prefer WhatsApp? Chat with us directly',
          defaultReply: "I'd be happy to help! For specific inquiries, please contact us directly via WhatsApp or phone, and our team will assist you right away.",
          contactUs: 'Contact Us',
        },
      },
    },
    ar: {
      translation: {
        nav: {
          home: 'الرئيسية',
          about: 'من نحن',
          services: 'خدماتنا',
          projects: 'مشاريعنا',
          contact: 'تواصل معنا',
          callNow: 'اتصل الآن',
        },
        chatbot: {
          title: 'مساعد زد',
          online: 'متصل',
          greeting: 'مرحباً بكم في خدمات زد المدينة التقنية! كيف يمكنني مساعدتك اليوم؟',
          typeMessage: 'اكتب رسالة...',
          newChat: 'محادثة جديدة',
          closeChat: 'إغلاق المحادثة',
          openChat: 'افتح المساعد',
          preferWhatsapp: 'تفضل واتساب؟ تحدث معنا مباشرة',
          defaultReply: 'يسعدني مساعدتك! للاستفسارات المحددة، يرجى التواصل معنا مباشرة عبر واتساب أو الهاتف، وسيساعدك فريقنا على الفور.',
          contactUs: 'تواصل معنا',
        },
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
