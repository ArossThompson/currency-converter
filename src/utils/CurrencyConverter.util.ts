const currencyListOptions = {
  "AED": "United Arab Emirates Dirham",
  "AFN": "Afghan Afghani",
  "ALL": "Albanian Lek",
  "AMD": "Armenian Dram",
  "ANG": "Netherlands Antillean Guilder",
  "AOA": "Angolan Kwanza",
  "ARS": "Argentine Peso",
  "AUD": "Australian Dollar",
  "AWG": "Aruban Florin",
  "AZN": "Azerbaijani Manat",
  "BAM": "Bosnia-Herzegovina Convertible Mark",
  "BBD": "Barbadian Dollar",
  "BDT": "Bangladeshi Taka",
  "BGN": "Bulgarian Lev",
  "BHD": "Bahraini Dinar",
  "BIF": "Burundian Franc",
  "BMD": "Bermudan Dollar",
  "BND": "Brunei Dollar",
  "BOB": "Bolivian Boliviano",
  "BRL": "Brazilian Real",
  "BSD": "Bahamian Dollar",
  "BTC": "Bitcoin",
  "BTN": "Bhutanese Ngultrum",
  "BWP": "Botswanan Pula",
  "BYN": "Belarusian Ruble",
  "BZD": "Belize Dollar",
  "CAD": "Canadian Dollar",
  "CDF": "Congolese Franc",
  "CHF": "Swiss Franc",
  "CLF": "Chilean Unit of Account (UF)",
  "CLP": "Chilean Peso",
  "CNH": "Chinese Yuan (Offshore)",
  "CNY": "Chinese Yuan",
  "COP": "Colombian Peso",
  "CRC": "Costa Rican Colón",
  "CUC": "Cuban Convertible Peso",
  "CUP": "Cuban Peso",
  "CVE": "Cape Verdean Escudo",
  "CZK": "Czech Republic Koruna",
  "DJF": "Djiboutian Franc",
  "DKK": "Danish Krone",
  "DOP": "Dominican Peso",
  "DZD": "Algerian Dinar",
  "EGP": "Egyptian Pound",
  "ERN": "Eritrean Nakfa",
  "ETB": "Ethiopian Birr",
  "EUR": "Euro",
  "FJD": "Fijian Dollar",
  "FKP": "Falkland Islands Pound",
  "GBP": "British Pound Sterling",
  "GEL": "Georgian Lari",
  "GGP": "Guernsey Pound",
  "GHS": "Ghanaian Cedi",
  "GIP": "Gibraltar Pound",
  "GMD": "Gambian Dalasi",
  "GNF": "Guinean Franc",
  "GTQ": "Guatemalan Quetzal",
  "GYD": "Guyanaese Dollar",
  "HKD": "Hong Kong Dollar",
  "HNL": "Honduran Lempira",
  "HRK": "Croatian Kuna",
  "HTG": "Haitian Gourde",
  "HUF": "Hungarian Forint",
  "IDR": "Indonesian Rupiah",
  "ILS": "Israeli New Sheqel",
  "IMP": "Manx pound",
  "INR": "Indian Rupee",
  "IQD": "Iraqi Dinar",
  "IRR": "Iranian Rial",
  "ISK": "Icelandic Króna",
  "JEP": "Jersey Pound",
  "JMD": "Jamaican Dollar",
  "JOD": "Jordanian Dinar",
  "JPY": "Japanese Yen",
  "KES": "Kenyan Shilling",
  "KGS": "Kyrgystani Som",
  "KHR": "Cambodian Riel",
  "KMF": "Comorian Franc",
  "KPW": "North Korean Won",
  "KRW": "South Korean Won",
  "KWD": "Kuwaiti Dinar",
  "KYD": "Cayman Islands Dollar",
  "KZT": "Kazakhstani Tenge",
  "LAK": "Laotian Kip",
  "LBP": "Lebanese Pound",
  "LKR": "Sri Lankan Rupee",
  "LRD": "Liberian Dollar",
  "LSL": "Lesotho Loti",
  "LYD": "Libyan Dinar",
  "MAD": "Moroccan Dirham",
  "MDL": "Moldovan Leu",
  "MGA": "Malagasy Ariary",
  "MKD": "Macedonian Denar",
  "MMK": "Myanma Kyat",
  "MNT": "Mongolian Tugrik",
  "MOP": "Macanese Pataca",
  "MRU": "Mauritanian Ouguiya",
  "MUR": "Mauritian Rupee",
  "MVR": "Maldivian Rufiyaa",
  "MWK": "Malawian Kwacha",
  "MXN": "Mexican Peso",
  "MYR": "Malaysian Ringgit",
  "MZN": "Mozambican Metical",
  "NAD": "Namibian Dollar",
  "NGN": "Nigerian Naira",
  "NIO": "Nicaraguan Córdoba",
  "NOK": "Norwegian Krone",
  "NPR": "Nepalese Rupee",
  "NZD": "New Zealand Dollar",
  "OMR": "Omani Rial",
  "PAB": "Panamanian Balboa",
  "PEN": "Peruvian Nuevo Sol",
  "PGK": "Papua New Guinean Kina",
  "PHP": "Philippine Peso",
  "PKR": "Pakistani Rupee",
  "PLN": "Polish Zloty",
  "PYG": "Paraguayan Guarani",
  "QAR": "Qatari Rial",
  "RON": "Romanian Leu",
  "RSD": "Serbian Dinar",
  "RUB": "Russian Ruble",
  "RWF": "Rwandan Franc",
  "SAR": "Saudi Riyal",
  "SBD": "Solomon Islands Dollar",
  "SCR": "Seychellois Rupee",
  "SDG": "Sudanese Pound",
  "SEK": "Swedish Krona",
  "SGD": "Singapore Dollar",
  "SHP": "Saint Helena Pound",
  "SLL": "Sierra Leonean Leone",
  "SOS": "Somali Shilling",
  "SRD": "Surinamese Dollar",
  "SSP": "South Sudanese Pound",
  "STD": "São Tomé and Príncipe Dobra (pre-2018)",
  "STN": "São Tomé and Príncipe Dobra",
  "SVC": "Salvadoran Colón",
  "SYP": "Syrian Pound",
  "SZL": "Swazi Lilangeni",
  "THB": "Thai Baht",
  "TJS": "Tajikistani Somoni",
  "TMT": "Turkmenistani Manat",
  "TND": "Tunisian Dinar",
  "TOP": "Tongan Pa'anga",
  "TRY": "Turkish Lira",
  "TTD": "Trinidad and Tobago Dollar",
  "TWD": "New Taiwan Dollar",
  "TZS": "Tanzanian Shilling",
  "UAH": "Ukrainian Hryvnia",
  "UGX": "Ugandan Shilling",
  "USD": "United States Dollar",
  "UYU": "Uruguayan Peso",
  "UZS": "Uzbekistan Som",
  "VEF": "Venezuelan Bolívar Fuerte (Old)",
  "VES": "Venezuelan Bolívar Soberano",
  "VND": "Vietnamese Dong",
  "VUV": "Vanuatu Vatu",
  "WST": "Samoan Tala",
  "XAF": "CFA Franc BEAC",
  "XAG": "Silver Ounce",
  "XAU": "Gold Ounce",
  "XCD": "East Caribbean Dollar",
  "XDR": "Special Drawing Rights",
  "XOF": "CFA Franc BCEAO",
  "XPD": "Palladium Ounce",
  "XPF": "CFP Franc",
  "XPT": "Platinum Ounce",
  "YER": "Yemeni Rial",
  "ZAR": "South African Rand",
  "ZMW": "Zambian Kwacha",
  "ZWL": "Zimbabwean Dollar"
}

const currencyFlagCodes = {
  "AED": "AE",
  "AFN": "AF",
  "ALL": "AL",
  "AMD": "AM",
  "ANG": "AN",
  "AOA": "AO",
  "ARS": "AR",
  "AUD": "AU",
  "AWG": "AW",
  "AZN": "AZ",
  "BAM": "BA",
  "BBD": "BB",
  "BDT": "BD",
  "BGN": "BG",
  "BHD": "BH",
  "BIF": "BI",
  "BMD": "BM",
  "BND": "BN",
  "BOB": "BO",
  "BRL": "BR",
  "BSD": "BS",
  "BTC": "BTC", // Bitcoin doesn't have a specific country flag
  "BTN": "BT",
  "BWP": "BW",
  "BYN": "BY",
  "BZD": "BZ",
  "CAD": "CA",
  "CDF": "CD",
  "CHF": "CH",
  "CLF": "CL",
  "CLP": "CL",
  "CNH": "CN",
  "CNY": "CN",
  "COP": "CO",
  "CRC": "CR",
  "CUC": "CU",
  "CUP": "CU",
  "CVE": "CV",
  "CZK": "CZ",
  "DJF": "DJ",
  "DKK": "DK",
  "DOP": "DO",
  "DZD": "DZ",
  "EGP": "EG",
  "ERN": "ER",
  "ETB": "ET",
  "EUR": "EU",
  "FJD": "FJ",
  "FKP": "FK",
  "GBP": "GB",
  "GEL": "GE",
  "GGP": "GG",
  "GHS": "GH",
  "GIP": "GI",
  "GMD": "GM",
  "GNF": "GN",
  "GTQ": "GT",
  "GYD": "GY",
  "HKD": "HK",
  "HNL": "HN",
  "HRK": "HR",
  "HTG": "HT",
  "HUF": "HU",
  "IDR": "ID",
  "ILS": "IL",
  "IMP": "IM",
  "INR": "IN",
  "IQD": "IQ",
  "IRR": "IR",
  "ISK": "IS",
  "JEP": "JE",
  "JMD": "JM",
  "JOD": "JO",
  "JPY": "JP",
  "KES": "KE",
  "KGS": "KG",
  "KHR": "KH",
  "KMF": "KM",
  "KPW": "KP",
  "KRW": "KR",
  "KWD": "KW",
  "KYD": "KY",
  "KZT": "KZ",
  "LAK": "LA",
  "LBP": "LB",
  "LKR": "LK",
  "LRD": "LR",
  "LSL": "LS",
  "LYD": "LY",
  "MAD": "MA",
  "MDL": "MD",
  "MGA": "MG",
  "MKD": "MK",
  "MMK": "MM",
  "MNT": "MN",
  "MOP": "MO",
  "MRU": "MR",
  "MUR": "MU",
  "MVR": "MV",
  "MWK": "MW",
  "MXN": "MX",
  "MYR": "MY",
  "MZN": "MZ",
  "NAD": "NA",
  "NGN": "NG",
  "NIO": "NI",
  "NOK": "NO",
  "NPR": "NP",
  "NZD": "NZ",
  "OMR": "OM",
  "PAB": "PA",
  "PEN": "PE",
  "PGK": "PG",
  "PHP": "PH",
  "PKR": "PK",
  "PLN": "PL",
  "PYG": "PY",
  "QAR": "QA",
  "RON": "RO",
  "RSD": "RS",
  "RUB": "RU",
  "RWF": "RW",
  "SAR": "SA",
  "SBD": "SB",
  "SCR": "SC",
  "SDG": "SD",
  "SEK": "SE",
  "SGD": "SG",
  "SHP": "SH",
  "SLL": "SL",
  "SOS": "SO",
  "SRD": "SR",
  "SSP": "SS",
  "STD": "ST",
  "STN": "ST",
  "SVC": "SV",
  "SYP": "SY",
  "SZL": "SZ",
  "THB": "TH",
  "TJS": "TJ",
  "TMT": "TM",
  "TND": "TN",
  "TOP": "TO",
  "TRY": "TR",
  "TTD": "TT",
  "TWD": "TW",
  "TZS": "TZ",
  "UAH": "UA",
  "UGX": "UG",
  "USD": "US",
  "UYU": "UY",
  "UZS": "UZ",
  "VEF": "VE",
  "VES": "VE",
  "VND": "VN",
  "VUV": "VU",
  "WST": "WS",
  "XAF": "XAF",
  "XAG": "XAG", 
  "XAU": "XAU", 
  "XCD": "XCD", 
  "XDR": "XDR",
  "XOF": "XOF",
  "XPD": "XPD",
  "XPF": "XPF", 
  "XPT": "XPT", 
  "YER": "YE",
  "ZAR": "ZA",
  "ZMW": "ZM",
  "ZWL": "ZW",
};


// convert object to array of objects
export const currencyOptionsArray = Object.entries(currencyListOptions).map(([value, label]) => {
  const flagCode = currencyFlagCodes[value as keyof typeof currencyFlagCodes] || "";
  return { value, label, flagCode };
});

export const currencyValueValidator = (value: string) : boolean => {
  const regex = /^[1-9]\d*(\.\d+)?$/;
  return !regex.test(value);
 };

export const convertCurrency = (targetRate: number, amount: number) : number => { 
  return amount * targetRate;
};

