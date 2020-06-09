

type Dictionary<V> = { [key: string]: V };

// ISO 3166-1 for country codes; country names slightly normalized
export const countryNameByCountryCodes: Dictionary<string> = {
	"AF": "Afghanistan",
	"AX": "Åland Islands",
	"AL": "Albania",
	"DZ": "Algeria",
	"AS": "American Samoa",
	"AD": "Andorra",
	"AO": "Angola",
	"AI": "Anguilla",
	"AQ": "Antarctica",
	"AG": "Antigua and Barbuda",
	"AR": "Argentina",
	"AM": "Armenia",
	"AW": "Aruba",
	"AU": "Australia",
	"AT": "Austria",
	"AZ": "Azerbaijan",
	"BS": "Bahamas",
	"BH": "Bahrain",
	"BD": "Bangladesh",
	"BB": "Barbados",
	"BY": "Belarus",
	"BE": "Belgium",
	"BZ": "Belize",
	"BJ": "Benin",
	"BM": "Bermuda",
	"BT": "Bhutan",
	"BO": "Bolivia",
	"BQ": "Bonaire, Sint Eustatius and Saba",
	"BA": "Bosnia and Herzegovina",
	"BW": "Botswana",
	"BV": "Bouvet Island",
	"BR": "Brazil",
	"IO": "British Indian Ocean Territory",
	"BN": "Brunei Darussalam",
	"BG": "Bulgaria",
	"BF": "Burkina Faso",
	"BI": "Burundi",
	"CV": "Cabo Verde",
	"KH": "Cambodia",
	"CM": "Cameroon",
	"CA": "Canada",
	"KY": "Cayman Islands",
	"CF": "Central African Republic",
	"TD": "Chad",
	"CL": "Chile",
	"CN": "China",
	"CX": "Christmas Island",
	"CC": "Cocos (Keeling) Islands",
	"CO": "Colombia",
	"KM": "Comoros",
	"CG": "Congo",
	"CD": "Democratic Republic of the Congo",
	"CK": "Cook Islands",
	"CR": "Costa Rica",
	"CI": "Côte d'Ivoire",
	"HR": "Croatia",
	"CU": "Cuba",
	"CW": "Curaçao",
	"CY": "Cyprus",
	"CZ": "Czechia",
	"DK": "Denmark",
	"DJ": "Djibouti",
	"DM": "Dominica",
	"DO": "Dominican Republic",
	"EC": "Ecuador",
	"EG": "Egypt",
	"SV": "El Salvador",
	"GQ": "Equatorial Guinea",
	"ER": "Eritrea",
	"EE": "Estonia",
	"SZ": "Eswatini",
	"ET": "Ethiopia",
	"FK": "Falkland Islands",
	"FO": "Faroe Islands",
	"FJ": "Fiji",
	"FI": "Finland",
	"FR": "France",
	"GF": "French Guiana",
	"PF": "French Polynesia",
	"TF": "French Southern Territories",
	"GA": "Gabon",
	"GM": "Gambia",
	"GE": "Georgia",
	"DE": "Germany",
	"GH": "Ghana",
	"GI": "Gibraltar",
	"GR": "Greece",
	"GL": "Greenland",
	"GD": "Grenada",
	"GP": "Guadeloupe",
	"GU": "Guam",
	"GT": "Guatemala",
	"GG": "Guernsey",
	"GN": "Guinea",
	"GW": "Guinea-Bissau",
	"GY": "Guyana",
	"HT": "Haiti",
	"HM": "Heard Island and McDonald Islands",
	"VA": "Holy See",
	"HN": "Honduras",
	"HK": "Hong Kong",
	"HU": "Hungary",
	"IS": "Iceland",
	"IN": "India",
	"ID": "Indonesia",
	"IR": "Iran",
	"IQ": "Iraq",
	"IE": "Ireland",
	"IM": "Isle of Man",
	"IL": "Israel",
	"IT": "Italy",
	"JM": "Jamaica",
	"JP": "Japan",
	"JE": "Jersey",
	"JO": "Jordan",
	"KZ": "Kazakhstan",
	"KE": "Kenya",
	"KI": "Kiribati",
	"KP": "North Korea",
	"KR": "South Korea",
	"KW": "Kuwait",
	"KG": "Kyrgyzstan",
	"LA": "Laos",
	"LV": "Latvia",
	"LB": "Lebanon",
	"LS": "Lesotho",
	"LR": "Liberia",
	"LY": "Libya",
	"LI": "Liechtenstein",
	"LT": "Lithuania",
	"LU": "Luxembourg",
	"MO": "Macao",
	"MG": "Madagascar",
	"MW": "Malawi",
	"MY": "Malaysia",
	"MV": "Maldives",
	"ML": "Mali",
	"MT": "Malta",
	"MH": "Marshall Islands",
	"MQ": "Martinique",
	"MR": "Mauritania",
	"MU": "Mauritius",
	"YT": "Mayotte",
	"MX": "Mexico",
	"FM": "Micronesia",
	"MD": "Moldova",
	"MC": "Monaco",
	"MN": "Mongolia",
	"ME": "Montenegro",
	"MS": "Montserrat",
	"MA": "Morocco",
	"MZ": "Mozambique",
	"MM": "Myanmar",
	"NA": "Namibia",
	"NR": "Nauru",
	"NP": "Nepal",
	"NL": "Netherlands",
	"NC": "New Caledonia",
	"NZ": "New Zealand",
	"NI": "Nicaragua",
	"NE": "Niger",
	"NG": "Nigeria",
	"NU": "Niue",
	"NF": "Norfolk Island",
	"MK": "North Macedonia",
	"MP": "Northern Mariana Islands",
	"NO": "Norway",
	"OM": "Oman",
	"PK": "Pakistan",
	"PW": "Palau",
	"PS": "Palestine",
	"PA": "Panama",
	"PG": "Papua New Guinea",
	"PY": "Paraguay",
	"PE": "Peru",
	"PH": "Philippines",
	"PN": "Pitcairn",
	"PL": "Poland",
	"PT": "Portugal",
	"PR": "Puerto Rico",
	"QA": "Qatar",
	"RE": "Réunion",
	"RO": "Romania",
	"RU": "Russia",
	"RW": "Rwanda",
	"BL": "Saint Barthélemy",
	"SH": "Saint Helena, Ascension and Tristan da Cunha",
	"KN": "Saint Kitts and Nevis",
	"LC": "Saint Lucia",
	"MF": "Saint Martin",
	"PM": "Saint Pierre and Miquelon",
	"VC": "Saint Vincent and the Grenadines",
	"WS": "Samoa",
	"SM": "San Marino",
	"ST": "Sao Tome and Principe",
	"SA": "Saudi Arabia",
	"SN": "Senegal",
	"RS": "Serbia",
	"SC": "Seychelles",
	"SL": "Sierra Leone",
	"SG": "Singapore",
	"SX": "Sint Maarten",
	"SK": "Slovakia",
	"SI": "Slovenia",
	"SB": "Solomon Islands",
	"SO": "Somalia",
	"ZA": "South Africa",
	"GS": "South Georgia and the South Sandwich Islands",
	"SS": "South Sudan",
	"ES": "Spain",
	"LK": "Sri Lanka",
	"SD": "Sudan",
	"SR": "Suriname",
	"SJ": "Svalbard and Jan Mayen",
	"SE": "Sweden",
	"CH": "Switzerland",
	"SY": "Syrian Arab Republic",
	"TW": "Taiwan",
	"TJ": "Tajikistan",
	"TZ": "Tanzania",
	"TH": "Thailand",
	"TL": "Timor-Leste",
	"TG": "Togo",
	"TK": "Tokelau",
	"TO": "Tonga",
	"TT": "Trinidad and Tobago",
	"TN": "Tunisia",
	"TR": "Turkey",
	"TM": "Turkmenistan",
	"TC": "Turks and Caicos Islands",
	"TV": "Tuvalu",
	"UG": "Uganda",
	"UA": "Ukraine",
	"AE": "United Arab Emirates",
	"GB": "United Kingdom of Great Britain and Northern Ireland",
	"US": "USA",
	"UM": "United States Minor Outlying Islands",
	"UY": "Uruguay",
	"UZ": "Uzbekistan",
	"VU": "Vanuatu",
	"VE": "Venezuela",
	"VN": "Viet Nam",
	"VG": "Virgin Islands (British)",
	"VI": "Virgin Islands (U.S.)",
	"WF": "Wallis and Futuna",
	"EH": "Western Sahara",
	"YE": "Yemen",
	"ZM": "Zambia",
	"ZW": "Zimbabwe",
};

export const countryCodeByCountryName: Dictionary<string> = {};

for (const countryCode of Object.keys(countryNameByCountryCodes)) {
	const countryName = countryNameByCountryCodes[countryCode];
	countryCodeByCountryName[countryName] = countryCode;
}

// ISO 639-3
export const languageNameByLanguageCode: Dictionary<string> = {
	"abk": "Abkhazian",
	"aar": "Afar",
	"afr": "Afrikaans",
	"aka": "Akan",
	"sqi": "Albanian",
	"amh": "Amharic",
	"ara": "Arabic",
	"arg": "Aragonese",
	"hye": "Armenian",
	"asm": "Assamese",
	"ava": "Avaric",
	"ave": "Avestan",
	"aym": "Aymara",
	"aze": "Azerbaijani",
	"bam": "Bambara",
	"bak": "Bashkir",
	"eus": "Basque",
	"bel": "Belarusian",
	"ben": "Bengali",
	"bis": "Bislama",
	"bos": "Bosnian",
	"bre": "Breton",
	"bul": "Bulgarian",
	"mya": "Burmese",
	"cat": "Catalan",
	"cha": "Chamorro",
	"che": "Chechen",
	"nya": "Chichewa",
	"zho": "Chinese",
	"chv": "Chuvash",
	"cor": "Cornish",
	"cos": "Corsican",
	"cre": "Cree",
	"hrv": "Croatian",
	"ces": "Czech",
	"dan": "Danish",
	"div": "Divehi",
	"nld": "Dutch",
	"dzo": "Dzongkha",
	"eng": "English",
	"epo": "Esperanto",
	"est": "Estonian",
	"ewe": "Ewe",
	"fao": "Faroese",
	"fij": "Fijian",
	"fin": "Finnish",
	"fra": "French",
	"ful": "Fulah",
	"glg": "Galician",
	"kat": "Georgian",
	"deu": "German",
	"ell": "Greek",
	"grn": "Guarani",
	"guj": "Gujarati",
	"hat": "Haitian",
	"hau": "Hausa",
	"heb": "Hebrew",
	"her": "Herero",
	"hin": "Hindi",
	"hmo": "Hiri Motu",
	"hun": "Hungarian",
	"ina": "Interlingua",
	"ind": "Indonesian",
	"ile": "Interlingue",
	"gle": "Irish",
	"ibo": "Igbo",
	"ipk": "Inupiaq",
	"ido": "Ido",
	"isl": "Icelandic",
	"ita": "Italian",
	"iku": "Inuktitut",
	"jpn": "Japanese",
	"jav": "Javanese",
	"kal": "Kalaallisut",
	"kan": "Kannada",
	"kau": "Kanuri",
	"kas": "Kashmiri",
	"kaz": "Kazakh",
	"khm": "Central Khmer",
	"kik": "Kikuyu, Gikuyu",
	"kin": "Kinyarwanda",
	"kir": "Kirghiz",
	"kom": "Komi",
	"kon": "Kongo",
	"kor": "Korean",
	"kur": "Kurdish",
	"kua": "Kuanyama",
	"lat": "Latin",
	"ltz": "Luxembourgish",
	"lug": "Ganda",
	"lim": "Limburgan",
	"lin": "Lingala",
	"lao": "Lao",
	"lit": "Lithuanian",
	"lub": "Luba-Katanga",
	"lav": "Latvian",
	"glv": "Manx",
	"mkd": "Macedonian",
	"mlg": "Malagasy",
	"msa": "Malay",
	"mal": "Malayalam",
	"mlt": "Maltese",
	"mri": "Maori",
	"mar": "Marathi",
	"mah": "Marshallese",
	"mon": "Mongolian",
	"nau": "Nauru",
	"nav": "Navajo",
	"nde": "North Ndebele",
	"nep": "Nepali",
	"ndo": "Ndonga",
	"nob": "Norwegian Bokmål",
	"nno": "Norwegian Nynorsk",
	"nor": "Norwegian",
	"iii": "Sichuan Yi",
	"nbl": "South Ndebele",
	"oci": "Occitan",
	"oji": "Ojibwa",
	"chu": "Church Slavonic",
	"orm": "Oromo",
	"ori": "Oriya",
	"oss": "Ossetian",
	"pan": "Punjabi",
	"pli": "Pali",
	"fas": "Persian",
	"pol": "Polish",
	"pus": "Pashto",
	"por": "Portuguese",
	"que": "Quechua",
	"roh": "Romansh",
	"run": "Rundi",
	"ron": "Romanian",
	"rus": "Russian",
	"san": "Sanskrit",
	"srd": "Sardinian",
	"snd": "Sindhi",
	"sme": "Northern Sami",
	"smo": "Samoan",
	"sag": "Sango",
	"srp": "Serbian",
	"gla": "Gaelic",
	"sna": "Shona",
	"sin": "Sinhala",
	"slk": "Slovak",
	"slv": "Slovenian",
	"som": "Somali",
	"sot": "Southern Sotho",
	"spa": "Spanish",
	"sun": "Sundanese",
	"swa": "Swahili",
	"ssw": "Swati",
	"swe": "Swedish",
	"tam": "Tamil",
	"tel": "Telugu",
	"tgk": "Tajik",
	"tha": "Thai",
	"tir": "Tigrinya",
	"bod": "Tibetan",
	"tuk": "Turkmen",
	"tgl": "Tagalog",
	"tsn": "Tswana",
	"ton": "Tonga",
	"tur": "Turkish",
	"tso": "Tsonga",
	"tat": "Tatar",
	"twi": "Twi",
	"tah": "Tahitian",
	"uig": "Uighur",
	"ukr": "Ukrainian",
	"urd": "Urdu",
	"uzb": "Uzbek",
	"ven": "Venda",
	"vie": "Vietnamese",
	"vol": "Volapük",
	"wln": "Walloon",
	"cym": "Welsh",
	"wol": "Wolof",
	"fry": "Western Frisian",
	"xho": "Xhosa",
	"yid": "Yiddish",
	"yor": "Yoruba",
	"zha": "Zhuang",
	"zul": "Zulu",
};

export function countrySuggestionsFor(country: string): string[] {
	const sugg = [] as string[];
	for (const c of Object.values(countryNameByCountryCodes)) {
		const dist = levenshteinDistance(country, c);
		if (dist <= 3) {
			sugg.push(c);
		}
	}
	return sugg;
}

function levenshteinDistance(a: string, b: string): number {
	if (a.length === 0) { return b.length; }
	if (b.length === 0) { return a.length; }

	const matrix = [];
	let i: number, j: number;

	// increment along the first column of each row
	for (i = 0; i <= b.length; i++) {
		matrix[i] = [i];
	}

	// increment each column in the first row
	for (j = 0; j <= a.length; j++) {
		matrix[0][j] = j;
	}

	// Fill in the rest of the matrix
	for (i = 1; i <= b.length; i++) {
		for (j = 1; j <= a.length; j++) {
			if (b.charAt(i - 1) === a.charAt(j - 1)) {
				matrix[i][j] = matrix[i - 1][j - 1];
			} else {
				matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
					Math.min(matrix[i][j - 1] + 1, // insertion
						matrix[i - 1][j] + 1)); // deletion
			}
		}
	}

	return matrix[b.length][a.length];
};