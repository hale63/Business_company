// Language Switcher Script
class TranslationManager {
    constructor() {
        this.currentLang = 'en';
        this.translations = {};
        this.init();
    }

    async init() {
        const savedLang = localStorage.getItem('preferred-language');
        const browserLang = navigator.language.split('-')[0];

        if (savedLang) {
            this.currentLang = savedLang;
        } else if (['en', 'ar', 'nl'].includes(browserLang)) {
            this.currentLang = browserLang;
        }

        await this.loadLanguage(this.currentLang);
    }

    async loadLanguage(lang) {
        try {
            const response = await fetch(`./languages/${lang}.json`);
            this.translations = await response.json();

            this.applyTranslations();
            this.updateDirection(lang);
            this.updateLanguageButtons(lang);

            localStorage.setItem('preferred-language', lang);
            this.currentLang = lang;
        } catch (error) {
            console.error("Error loading language file:", error);
        }
    }

    applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const keys = el.getAttribute('data-i18n').split('.');
            let translation = this.translations;

            keys.forEach(key => {
                if (translation && translation[key]) {
                    translation = translation[key];
                }
            });

            if (typeof translation === "string") {
                el.textContent = translation;
            }
        });
    }

    updateDirection(lang) {
        if (lang === 'ar') {
            document.body.classList.add("rtl");
        } else {
            document.body.classList.remove("rtl");
        }
    }

    updateLanguageButtons(lang) {
        document.querySelectorAll('.language-display').forEach(el => {
            el.textContent = lang.toUpperCase();
        });
    }
}

// Initialize Manager
const translationManager = new TranslationManager();

// Public Function for HTML onclick
function changeLanguage(lang) {
    translationManager.loadLanguage(lang);
}
