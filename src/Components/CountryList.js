const countryList = [
{ text: "United States", key: "US", value: "United States" },
  { text: "Afghanistan", key: "AF", value: "Afghanistan" },
  { text: "Åland Islands", key: "AX", value: "Åland Islands" },
  { text: "Albania", key: "AL", value: "Albania" },
  { text: "Algeria", key: "DZ", value: "Algeria" },
  { text: "American Samoa", key: "AS", value: "American Samoa" },
  { text: "Andorra", key: "AD", value: "Andorra" },
  { text: "Angola", key: "AO", value: "Angola" },
  { text: "Anguilla", key: "AI", value: "Anguilla" },
  { text: "Antarctica", key: "AQ", value: "Antarctica" },
  { text: "Antigua and Barbuda", key: "AG", value: "Antigua and Barbuda" },
  { text: "Argentina", key: "AR", value: "Argentina" },
  { text: "Armenia", key: "AM", value: "Armenia" },
  { text: "Aruba", key: "AW", value: "Aruba" },
  { text: "Australia", key: "AU", value: "Australia" },
  { text: "Austria", key: "AT", value: "Austria" },
  { text: "Azerbaijan", key: "AZ", value: "Azerbaijan" },
  { text: "Bahamas", key: "BS", value: "Bahamas" },
  { text: "Bahrain", key: "BH", value: "Bahrain" },
  { text: "Bangladesh", key: "BD", value: "Bangladesh" },
  { text: "Barbados", key: "BB", value: "Barbados" },
  { text: "Belarus", key: "BY", value: "Belarus" },
  { text: "Belgium", key: "BE", value: "Belgium" },
  { text: "Belize", key: "BZ", value: "Belize" },
  { text: "Benin", key: "BJ", value: "Benin" },
  { text: "Bermuda", key: "BM", value: "Bermuda" },
  { text: "Bhutan", key: "BT", value: "Bhutan" },
  {
    text: "Bolivia",
    key: "BO",
    value: "Bolivia",
  },
  {
    text: "Bonaire, Sint Eustatius and Saba",
    key: "BQ",
    value: "Bonaire, Sint Eustatius and Saba",
  },
  { text: "Bosnia and Herzegovina", key: "BA", value: "Bosnia and Herzegovina"},
  { text: "Botswana", key: "BW", value: "Botswana"},
  { text: "Bouvet Island", key: "BV", value: "Bouvet Island"},
  { text: "Brazil", key: "BR", value: "Brazil"},
  {
    text: "British Indian Ocean Territory",
    key: "IO",
    value: "British Indian Ocean Territory",
  },
  { text: "Brunei Darussalam", key: "BN", value: "Brunei Darussalam"},
  { text: "Bulgaria", key: "BG", value: "Bulgaria"},
  { text: "Burkina Faso", key: "BF", value: "Burkina Faso"},
  { text: "Burundi", key: "BI", value: "Burundi"},
  { text: "Cambodia", key: "KH", value: "Cambodia"},
  { text: "Cameroon", key: "CM", value: "Cameroon"},
  { text: "Canada", key: "CA", value: "Canada"},
  { text: "Cape Verde", key: "CV", value: "Cape Verde"},
  { text: "Cayman Islands", key: "KY", value: "Cayman Islands"},
  { text: "Central African Republic", key: "CF", value: "Central African Republic"},
  { text: "Chad", key: "TD", value: "Chad"},
  { text: "Chile", key: "CL", value: "Chile"},
  { text: "China", key: "CN", value: "China"},
  { text: "Christmas Island", key: "CX", value: "Christmas Island"},
  { text: "Cocos (Keeling) Islands", key: "CC", value: "Cocos (Keeling) Islands"},
  { text: "Colombia", key: "CO", value: "Colombia"},
  { text: "Comoros", key: "KM", value: "Comoros"},
  { text: "Congo", key: "CG", value: "Congo"},
  {
    text: "Congo, the Democratic Republic of the",
    key: "CD",
    value: "Congo, the Democratic Republic of the",
  },
  { text: "Cook Islands", key: "CK", value: "Cook Islands"},
  { text: "Costa Rica", key: "CR", value: "Costa Rica"},
  { text: "Côte d'Ivoire", key: "CI", value: "Côte d'Ivoire"},
  { text: "Croatia", key: "HR", value: "Croatia"},
  { text: "Cuba", key: "CU", value: "Cuba"},
  { text: "Curaçao", key: "CW", value: "Curaçao"},
  { text: "Cyprus", key: "CY", value: "Cyprus"},
  { text: "Czech Republic", key: "CZ", value: "Czech Republic"},
  { text: "Denmark", key: "DK", value: "Denmark"},
  { text: "Djibouti", key: "DJ", value: "Djibouti"},
  { text: "Dominica", key: "DM", value: "Dominica"},
  { text: "Dominican Republic", key: "DO", value: "Dominican Republic"},
  { text: "Ecuador", key: "EC", value: "Ecuador"},
  { text: "Egypt", key: "EG", value: "Egypt"},
  { text: "El Salvador", key: "SV", value: "El Salvador"},
  { text: "Equatorial Guinea", key: "GQ", value: "Equatorial Guinea"},
  { text: "Eritrea", key: "ER", value: "Eritrea"},
  { text: "Estonia", key: "EE", value: "Estonia"},
  { text: "Ethiopia", key: "ET", value: "Ethiopia"},
  { text: "Falkland Islands (Malvinas)", key: "FK", value: "Falkland Islands (Malvinas)"},
  { text: "Faroe Islands", key: "FO", value: "Faroe Islands"},
  { text: "Fiji", key: "FJ", value: "Fiji"},
  { text: "Finland", key: "FI", value: "Finland"},
  { text: "France", key: "FR", value: "France"},
  { text: "French Guiana", key: "GF", value: "French Guiana"},
  { text: "French Polynesia", key: "PF", value: "French Polynesia"},
  { text: "French Southern Territories", key: "TF", value: "French Southern Territories"},
  { text: "Gabon", key: "GA", value: "Gabon"},
  { text: "Gambia", key: "GM", value: "Gambia"},
  { text: "Georgia", key: "GE", value: "Georgia"},
  { text: "Germany", key: "DE", value: "Germany"},
  { text: "Ghana", key: "GH", value: "Ghana"},
  { text: "Gibraltar", key: "GI", value: "Gibraltar"},
  { text: "Greece", key: "GR", value: "Greece"},
  { text: "Greenland", key: "GL", value: "Greenland"},
  { text: "Grenada", key: "GD", value: "Grenada"},
  { text: "Guadeloupe", key: "GP", value: "Guadeloupe"},
  { text: "Guam", key: "GU", value: "Guam"},
  { text: "Guatemala", key: "GT", value: "Guatemala"},
  { text: "Guernsey", key: "GG", value: "Guernsey"},
  { text: "Guinea", key: "GN", value: "Guinea"},
  { text: "Guinea-Bissau", key: "GW", value: "Guinea-Bissau"},
  { text: "Guyana", key: "GY", value: "Guyana"},
  { text: "Haiti", key: "HT", value: "Haiti"},
  {
    text: "Heard Island and McDonald Islands",
    key: "HM",
    value: "Heard Island and McDonald Islands",
  },
  { text: "Vatican City", key: "VA", value: "Vatican City"},
  { text: "Honduras", key: "HN", value: "Honduras"},
  { text: "Hong Kong", key: "HK", value: "Hong Kong"},
  { text: "Hungary", key: "HU", value: "Hungary"},
  { text: "Iceland", key: "IS", value: "Iceland"},
  { text: "India", key: "IN", value: "India"},
  { text: "Indonesia", key: "ID", value: "Indonesia"},
  { text: "Iran", key: "IR", value: "Iran"},
  { text: "Iraq", key: "IQ", value: "Iraq"},
  { text: "Ireland", key: "IE", value: "Ireland"},
  { text: "Isle of Man", key: "IM", value: "Isle of Man"},
  { text: "Israel", key: "IL", value: "Israel"},
  { text: "Italy", key: "IT", value: "Italy"},
  { text: "Jamaica", key: "JM", value: "Jamaica"},
  { text: "Japan", key: "JP", value: "Japan"},
  { text: "Jersey", key: "JE", value: "Jersey"},
  { text: "Jordan", key: "JO", value: "Jordan"},
  { text: "Kazakhstan", key: "KZ", value: "Kazakhstan"},
  { text: "Kenya", key: "KE", value: "Kenya"},
  { text: "Kiribati", key: "KI", value: "Kiribati"},


  { text: "South Korea", key: "KR", value: "South Korea"},
  { text: "Kuwait", key: "KW", value: "Kuwait"},
  { text: "Kyrgyzstan", key: "KG", value: "Kyrgyzstan"},
  {
    text: "Lao People's Democratic Republic",
    key: "LA",
    value: "Lao People's Democratic Republi",
  },
  { text: "Latvia", key: "LV", value: "Latvia"},
  { text: "Lebanon", key: "LB", value: "Lebanon"},
  { text: "Lesotho", key: "LS", value: "Lesotho"},
  { text: "Liberia", key: "LR", value: "Liberia"},
  { text: "Libya", key: "LY", value: "Libya"},
  { text: "Liechtenstein", key: "LI", value: "Liechtenstein"},
  { text: "Lithuania", key: "LT", value: "Lithuania"},
  { text: "Luxembourg", key: "LU", value: "Luxembourg"},
  { text: "Macao", key: "MO", value: "Macao"},
  {
    text: "Macedonia",
    key: "MK",
    value: "Macedonia",
  },
  { text: "Madagascar", key: "MG", value: "Madagascar"},
  { text: "Malawi", key: "MW", value: "Malawi"},
  { text: "Malaysia", key: "MY", value: "Malaysia"},
  { text: "Maldives", key: "MV", value: "Maldives"},
  { text: "Mali", key: "ML", value: "Mali"},
  { text: "Malta", key: "MT", value: "Malta"},
  { text: "Marshall Islands", key: "MH", value: "Marshall Islands"},
  { text: "Martinique", key: "MQ", value: "Martinique"},
  { text: "Mauritania", key: "MR", value: "Mauritania"},
  { text: "Mauritius", key: "MU", value: "Mauritius"},
  { text: "Mayotte", key: "YT", value: "Mayotte"},
  { text: "Mexico", key: "MX", value: "Mexico"},
  {
    text: "Micronesia",
    key: "FM",
    value: "Micronesia",
  },
  { text: "Moldova", key: "MD", value: "Moldova"},
  { text: "Monaco", key: "MC", value: "Monaco"},
  { text: "Mongolia", key: "MN", value: "Mongolia"},
  { text: "Montenegro", key: "ME", value: "Montenegro"},
  { text: "Montserrat", key: "MS", value: "Montserrat"},
  { text: "Morocco", key: "MA", value: "Morocco"},
  { text: "Mozambique", key: "MZ", value: "Mozambique"},
  { text: "Myanmar", key: "MM", value: "Myanmar"},
  { text: "Namibia", key: "NA", value: "Namibia"},
  { text: "Nauru", key: "NR", value: "Nauru"},
  { text: "Nepal", key: "NP", value: "Nepal"},
  { text: "Netherlands", key: "NL", value: "Netherlands"},
  { text: "New Caledonia", key: "NC", value: "New Caledonia"},
  { text: "New Zealand", key: "NZ", value: "New Zealand"},
  { text: "Nicaragua", key: "NI", value: "Nicaragua"},
  { text: "Niger", key: "NE", value: "Niger"},
  { text: "Nigeria", key: "NG", value: "Nigeria"},
  { text: "Niue", key: "NU", value: "Niue"},
  { text: "Norfolk Island", key: "NF", value: "Norfolk Island"},
  { text: "Northern Mariana Islands", key: "MP", value: "Northern Mariana Islands"},
  { text: "Norway", key: "NO", value: "Norway"},
  { text: "Oman", key: "OM", value: "Oman"},
  { text: "Pakistan", key: "PK", value: "Pakistan"},
  { text: "Palau", key: "PW", value: "Palau"},
  { text: "Palestine", key: "PS", value: "Palestine"},
  { text: "Panama", key: "PA", value: "Panama"},
  { text: "Papua New Guinea", key: "PG", value: "Papua New Guinea"},
  { text: "Paraguay", key: "PY", value: "Paraguay"},
  { text: "Peru", key: "PE", value: "Peru"},
  { text: "Philippines", key: "PH", value: "Philippines"},
  { text: "Pitcairn", key: "PN", value: "Pitcairn"},
  { text: "Poland", key: "PL", value: "Poland"},
  { text: "Portugal", key: "PT", value: "Portugal"},
  { text: "Puerto Rico", key: "PR", value: "Puerto Rico"},
  { text: "Qatar", key: "QA", value: "Qatar"},
  { text: "Réunion", key: "RE", value: "Réunion"},
  { text: "Romania", key: "RO", value: "Romania"},
  { text: "Russian Federation", key: "RU", value: "Russian Federation"},
  { text: "Rwanda", key: "RW", value: "Rwanda"},
  { text: "Saint Barthélemy", key: "BL", value: "Saint Barthélemy"},
  {
    text: "Saint Helena, Ascension and Tristan da Cunha",
    key: "SH",
    value: "Saint Helena, Ascension and Tristan da Cunha",
  },
  { text: "Saint Kitts and Nevis", key: "KN", value: "Saint Kitts and Nevis"},
  { text: "Saint Lucia", key: "LC", value: "Saint Lucia"},
  { text: "Saint Martin", key: "MF", value: "Saint Martin"},
  { text: "Saint Pierre and Miquelon", key: "PM", value: "Saint Pierre and Miquelon"},
  {
    text: "Saint Vincent and the Grenadines",
    key: "VC",
    value: "Saint Vincent and the Grenadines",
  },
  { text: "Samoa", key: "WS", value: "WSamoaS"},
  { text: "San Marino", key: "SM", value: "San Marino"},
  { text: "Sao Tome and Principe", key: "ST", value: "Sao Tome and Principe"},
  { text: "Saudi Arabia", key: "SA", value: "Saudi Arabia"},
  { text: "Senegal", key: "SN", value: "Senegal"},
  { text: "Serbia", key: "RS", value: "Serbia"},
  { text: "Seychelles", key: "SC", value: "Seychelles"},
  { text: "Sierra Leone", key: "SL", value: "Sierra Leone"},
  { text: "Singapore", key: "SG", value: "Singapore"},
  { text: "Sint Maarten", key: "SX", value: "Sint Maarten"},
  { text: "Slovakia", key: "SK", value: "Slovakia"},
  { text: "Slovenia", key: "SI", value: "Slovenia"},
  { text: "Solomon Islands", key: "SB", value: "Solomon Islands"},
  { text: "Somalia", key: "SO", value: "Somalia"},
  { text: "South Africa", key: "ZA", value: "South Africa"},
  {
    text: "South Georgia and the South Sandwich Islands",
    key: "GS",
    value: "South Georgia and the South Sandwich Islands",
  },
  { text: "South Sudan", key: "SS", value: "South Sudan"},
  { text: "Spain", key: "ES", value: "Spain"},
  { text: "Sri Lanka", key: "LK", value: "Sri Lanka"},
  { text: "Sudan", key: "SD", value: "Sudan"},
  { text: "Suriname", key: "SR", value: "Suriname"},
  { text: "Svalbard and Jan Mayen", key: "SJ", value: "Svalbard and Jan Mayen"},
  { text: "Swaziland", key: "SZ", value: "Swaziland"},
  { text: "Sweden", key: "SE", value: "Sweden"},
  { text: "Switzerland", key: "CH", value: "Switzerland"},
  { text: "Syria", key: "SY", value: "Syria"},
  { text: "Taiwan", key: "TW", value: "Taiwan"},
  { text: "Tajikistan", key: "TJ", value: "Tajikistan"},
  { text: "Tanzania", key: "TZ", value: "Tanzania"},
  { text: "Thailand", key: "TH", value: "Thailand"},
  { text: "Timor-Leste", key: "TL", value: "Timor-Leste"},
  { text: "Togo", key: "TG", value: "Togo"},
  { text: "Tokelau", key: "TK", value: "Tokelau"},
  { text: "Tonga", key: "TO", value: "Tonga"},
  { text: "Trinidad and Tobago", key: "TT", value: "Trinidad and Tobago"},
  { text: "Tunisia", key: "TN", value: "Tunisia"},
  { text: "Turkey", key: "TR", value: "Turkey"},
  { text: "Turkmenistan", key: "TM", value: "Turkmenistan"},
  { text: "Turks and Caicos Islands", key: "TC", value: "Turks and Caicos Islands"},
  { text: "Tuvalu", key: "TV", value: "Tuvalu"},
  { text: "Uganda", key: "UG", value: "Uganda"},
  { text: "Ukraine", key: "UA", value: "Ukraine"},
  { text: "United Arab Emirates", key: "AE", value: "United Arab Emirates"},
  { text: "United Kingdom", key: "GB", value: "United Kingdom"},
  {
    text: "United States Minor Outlying Islands",
    key: "UM",
    value: "United States Minor Outlying Islands",
  },
  { text: "Uruguay", key: "UY", value: "Uruguay"},
  { text: "Uzbekistan", key: "UZ", value: "Uzbekistan"},
  { text: "Vanuatu", key: "VU", value: "Vanuatu"},
  {
    text: "Venezuela",
    key: "VE",
    value: "Venezuela",
  },
  { text: "Vietnam", key: "VN", value: "Vietnam"},
  { text: "Virgin Islands, British", key: "VG", value: "Virgin Islands, British"},
  { text: "Virgin Islands, U.S.", key: "VI", value: "Virgin Islands, U.S."},
  { text: "Wallis and Futuna", key: "WF", value: "Wallis and Futuna"},
  { text: "Western Sahara", key: "EH", value: "Western Sahara"},
  { text: "Yemen", key: "YE", value: "Yemen"},
  { text: "Zambia", key: "ZM", value: "Zambia"},
  { text: "Zimbabwe", key: "ZW", value: "Zimbabwe"},
];

export default countryList


