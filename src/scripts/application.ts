// Helper to get current language
const getLang = (): string => document.documentElement.lang || "de";

// Main application logic
function initApplication() {
  const lang = getLang();
  const STORAGE_KEY = `application-letter-${lang}`;

  // Format date based on language
  function formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    if (lang === "de") {
      return date.toLocaleDateString("de-CH", options);
    } else if (lang === "es") {
      return date.toLocaleDateString("es-ES", options);
    } else {
      return date.toLocaleDateString("en-GB", options);
    }
  }

  // Update page title
  function updatePageTitle() {
    const recipientInput = document.getElementById(
      "recipient"
    ) as HTMLInputElement;
    const titleEl = document.getElementById("page-title");
    const recipient = recipientInput?.value || "";

    if (!titleEl) return;

    if (recipient) {
      let titlePrefix = "";
      if (lang === "de") {
        titlePrefix = "Bewerbung";
      } else if (lang === "es") {
        titlePrefix = "Aplicación";
      } else {
        titlePrefix = "Application";
      }

      // Format: [Company] - [Prefix] Ricardo Vögeli
      titleEl.textContent = `${recipient} - ${titlePrefix} Ricardo Vögeli`;
    } else {
      const defaultTitle =
        lang === "de"
          ? "Bewerbungsschreiben – Ricardo Vögeli"
          : lang === "es"
          ? "Carta de Aplicación – Ricardo Vögeli"
          : "Application Letter – Ricardo Vögeli";
      titleEl.textContent = defaultTitle;
    }
  }

  // Update preview
  function updatePreview() {
    const ids = ["recipient", "address", "subject", "content"];

    ids.forEach((id) => {
      const input = document.getElementById(id) as
        | HTMLInputElement
        | HTMLTextAreaElement;
      const display = document.getElementById(`${id}-display`);
      if (input && display) {
        display.textContent = input.value || "";
      }
    });

    // Update date
    const today = new Date();
    const dateDisplay = document.getElementById("date-display");
    if (dateDisplay) {
      dateDisplay.textContent = formatDate(today);
    }

    // Update page title
    updatePageTitle();
  }

  // Load from localStorage
  function loadFromStorage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);

        (["recipient", "address", "subject", "content"] as const).forEach(
          (key) => {
            const el = document.getElementById(key) as
              | HTMLInputElement
              | HTMLTextAreaElement;
            if (el && data[key]) {
              el.value = data[key];
            }
          }
        );

        updatePreview();
      }
    } catch (e) {
      console.error("Error loading from storage:", e);
    }
  }

  // Save to localStorage
  function saveToStorage() {
    try {
      const getData = (id: string) =>
        (document.getElementById(id) as HTMLInputElement)?.value || "";

      const data = {
        recipient: getData("recipient"),
        address: getData("address"),
        subject: getData("subject"),
        content: getData("content"),
        lang: lang,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

      // Show save status
      const statusEl = document.getElementById("save-status");
      if (statusEl) {
        statusEl.textContent =
          lang === "de"
            ? "Gespeichert!"
            : lang === "es"
            ? "¡Guardado!"
            : "Saved!";
        statusEl.classList.remove("hidden");
        setTimeout(() => {
          statusEl.classList.add("hidden");
        }, 2000);
      }
    } catch (e) {
      console.error("Error saving to storage:", e);
    }
  }

  // Set today's date initially
  const dateDisplay = document.getElementById("date-display");
  if (dateDisplay) {
    dateDisplay.textContent = formatDate(new Date());
  }

  // Load saved data
  loadFromStorage();

  // Add event listeners
  ["recipient", "address", "subject", "content"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", updatePreview);
    }
  });

  document.getElementById("save-btn")?.addEventListener("click", saveToStorage);
  document.getElementById("print-btn")?.addEventListener("click", () => {
    window.print();
  });

  // Initial preview update
  updatePreview();
}

// Fetch Contact Info
async function fetchContactInfo() {
  const urlParams = new URLSearchParams(window.location.search);
  const key = urlParams.get("key");
  if (!key) return;

  try {
    const response = await fetch(`/api/contact?key=${encodeURIComponent(key)}`);
    if (!response.ok) return;

    const result = await response.json();
    if (!result.success || !result.data.showFull) return;

    const { address, city, email, phone } = result.data;

    const updateEl = (
      id: string,
      value: string | undefined,
      show: boolean = false
    ) => {
      const el = document.getElementById(id);
      if (el && value) {
        el.textContent = value;
        if (show) el.classList.remove("hidden");
      }
    };

    updateEl("contact-address", address, true);
    updateEl("contact-city", city);
    updateEl("contact-email", email);
    updateEl("contact-phone", phone, true);
  } catch (e) {
    console.error("Failed to fetch contact info", e);
  }
}

// Language Selector Logic
function initLanguageSelector() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get("lang");
  const langSelect = document.getElementById(
    "lang-select"
  ) as HTMLSelectElement;

  if (langSelect && langParam && ["de", "en", "es"].includes(langParam)) {
    langSelect.value = langParam;
  }
}

// Init all
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initApplication();
    initLanguageSelector();
    fetchContactInfo();
  });
} else {
  initApplication();
  initLanguageSelector();
  fetchContactInfo();
}
