document.addEventListener("DOMContentLoaded", () => {

    const langButtons = document.querySelectorAll('.lang-btn');
    const currentLangSpan = document.getElementById('current-lang');
    const mobileCurrentLang = document.getElementById('mobile-current-lang');

    let currentLang = localStorage.getItem('preferredLanguage') || 'en';

    async function setLanguage(lang) {
        try {
            const response = await fetch(`lang/${lang}.json`);
            const translations = await response.json();

            document.querySelectorAll("[data-i18n]").forEach(el => {
                const key = el.getAttribute("data-i18n");
                const val = key.split(".").reduce((o, k) => o?.[k], translations);
                if (val) el.textContent = val;
            });

            if (currentLangSpan) currentLangSpan.textContent = lang.toUpperCase();
            if (mobileCurrentLang) mobileCurrentLang.textContent = lang.toUpperCase();

            localStorage.setItem("preferredLanguage", lang);
            currentLang = lang;

        } catch (err) {
            console.error("Language load error:", err);
        }
    }

    // Add event listeners
    langButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const selected = btn.dataset.lang;
            setLanguage(selected);
        });
    });

    // Load language
    setLanguage(currentLang);
});
