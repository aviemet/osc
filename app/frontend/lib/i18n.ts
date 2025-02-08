import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"

const defaultLocale = "en"

const localeContext = import.meta.glob<Record<string, Record<string, object>>>("./locales/*.json", { eager: true })

const resources = Object.entries(localeContext).reduce((acc, [path, translation]) => {
	const locale = path.match(/\.\/locales\/(.+)\.json/)?.[1] || defaultLocale
	return {
		...acc,
		[locale]: {
			translation: translation[locale] as object,
		},
	}
}, {})

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: defaultLocale,
		debug: true,
		interpolation: {
			escapeValue: false, // React already escapes values
		},
	})

export default i18n
