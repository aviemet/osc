import { type Money } from "@/types"

export type UseCurrencyOptions = Omit<Intl.NumberFormatOptions, "style" | "currency">

interface UseCurrencyProps {
	amount: number | Money | null
	currency?: string
	locale?: string
	options?: UseCurrencyOptions
}

type OmittedOptions = Pick<Intl.NumberFormatOptions, "style" | "currency">

const useCurrency = ({
	amount,
	currency = "USD",
	locale = "en-US",
	options = {},
}: UseCurrencyProps): [amount: number, formatter: Intl.NumberFormat] => {
	let currencyIso = currency
	if(typeof amount !== "number" && amount?.hasOwnProperty("currency_iso")) {
		currencyIso = amount.currency_iso
	}

	let value = 0
	if(typeof amount === "number") {
		value = amount
	} else if(amount?.hasOwnProperty("amount")) {
		value = amount.amount
	}

	const baseOptions: OmittedOptions = {
		style: "currency",
		currency: currencyIso,
	}

	const formatterOptions: Intl.NumberFormatOptions = Object.assign(options, baseOptions)

	const currencyFormatter = new Intl.NumberFormat(locale, formatterOptions)

	return [value, currencyFormatter]
}

export default useCurrency
