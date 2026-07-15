'use client'

import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { ArrowLeftRight, Globe, ChevronDown, RotateCcw, Search, Star } from 'lucide-react'
import { SiteHeader } from '@/components/marketing/SiteHeader'

// ── Popular timezones shown at the top ──────────────────────────────────────
const POPULAR: TzEntry[] = [
  { tz: 'Asia/Kolkata',                        label: 'India Standard Time',             abbr: 'IST',  flag: '🇮🇳' },
  { tz: 'UTC',                                  label: 'Coordinated Universal Time',      abbr: 'UTC',  flag: '🌐' },
  { tz: 'America/New_York',                     label: 'US Eastern Time',                 abbr: 'EST',  flag: '🇺🇸' },
  { tz: 'America/Los_Angeles',                  label: 'US Pacific Time',                 abbr: 'PST',  flag: '🇺🇸' },
  { tz: 'America/Chicago',                      label: 'US Central Time',                 abbr: 'CST',  flag: '🇺🇸' },
  { tz: 'Europe/London',                        label: 'Greenwich Mean Time',             abbr: 'GMT',  flag: '🇬🇧' },
  { tz: 'Europe/Paris',                         label: 'Central European Time',           abbr: 'CET',  flag: '🇫🇷' },
  { tz: 'Europe/Moscow',                        label: 'Moscow Standard Time',            abbr: 'MSK',  flag: '🇷🇺' },
  { tz: 'Asia/Dubai',                           label: 'Gulf Standard Time',              abbr: 'GST',  flag: '🇦🇪' },
  { tz: 'Asia/Karachi',                         label: 'Pakistan Standard Time',          abbr: 'PKT',  flag: '🇵🇰' },
  { tz: 'Asia/Dhaka',                           label: 'Bangladesh Standard Time',        abbr: 'BST',  flag: '🇧🇩' },
  { tz: 'Asia/Singapore',                       label: 'Singapore Time',                  abbr: 'SGT',  flag: '🇸🇬' },
  { tz: 'Asia/Shanghai',                        label: 'China Standard Time',             abbr: 'CST',  flag: '🇨🇳' },
  { tz: 'Asia/Tokyo',                           label: 'Japan Standard Time',             abbr: 'JST',  flag: '🇯🇵' },
  { tz: 'Australia/Sydney',                     label: 'Australia Eastern Time',          abbr: 'AEST', flag: '🇦🇺' },
  { tz: 'America/Sao_Paulo',                    label: 'Brazil Time',                     abbr: 'BRT',  flag: '🇧🇷' },
  { tz: 'Africa/Johannesburg',                  label: 'South Africa Standard Time',      abbr: 'SAST', flag: '🇿🇦' },
  { tz: 'Africa/Nairobi',                       label: 'East Africa Time',                abbr: 'EAT',  flag: '🇰🇪' },
  { tz: 'Asia/Seoul',                           label: 'Korea Standard Time',             abbr: 'KST',  flag: '🇰🇷' },
  { tz: 'Pacific/Auckland',                     label: 'New Zealand Standard Time',       abbr: 'NZST', flag: '🇳🇿' },
]

// ── All remaining IANA zones (deduplicated against POPULAR) ─────────────────
const ALL_OTHER_TZ: TzEntry[] = [
  { tz: 'America/Denver',                       label: 'US Mountain Time',                abbr: 'MST',  flag: '🇺🇸' },
  { tz: 'America/Phoenix',                      label: 'US Mountain (no DST)',            abbr: 'MST',  flag: '🇺🇸' },
  { tz: 'America/Anchorage',                    label: 'Alaska Time',                     abbr: 'AKST', flag: '🇺🇸' },
  { tz: 'Pacific/Honolulu',                     label: 'Hawaii-Aleutian Time',            abbr: 'HST',  flag: '🇺🇸' },
  { tz: 'America/Toronto',                      label: 'Canada Eastern Time',             abbr: 'EST',  flag: '🇨🇦' },
  { tz: 'America/Vancouver',                    label: 'Canada Pacific Time',             abbr: 'PST',  flag: '🇨🇦' },
  { tz: 'America/Winnipeg',                     label: 'Canada Central Time',             abbr: 'CST',  flag: '🇨🇦' },
  { tz: 'America/Halifax',                      label: 'Canada Atlantic Time',            abbr: 'AST',  flag: '🇨🇦' },
  { tz: 'America/St_Johns',                     label: 'Newfoundland Time',               abbr: 'NST',  flag: '🇨🇦' },
  { tz: 'America/Mexico_City',                  label: 'Mexico Central Time',             abbr: 'CST',  flag: '🇲🇽' },
  { tz: 'America/Cancun',                       label: 'Mexico Eastern Time',             abbr: 'EST',  flag: '🇲🇽' },
  { tz: 'America/Tijuana',                      label: 'Mexico Pacific Time',             abbr: 'PST',  flag: '🇲🇽' },
  { tz: 'America/Bogota',                       label: 'Colombia Time',                   abbr: 'COT',  flag: '🇨🇴' },
  { tz: 'America/Lima',                         label: 'Peru Time',                       abbr: 'PET',  flag: '🇵🇪' },
  { tz: 'America/Santiago',                     label: 'Chile Standard Time',             abbr: 'CLT',  flag: '🇨🇱' },
  { tz: 'America/Argentina/Buenos_Aires',       label: 'Argentina Time',                  abbr: 'ART',  flag: '🇦🇷' },
  { tz: 'America/Caracas',                      label: 'Venezuela Time',                  abbr: 'VET',  flag: '🇻🇪' },
  { tz: 'America/Guyana',                       label: 'Guyana Time',                     abbr: 'GYT',  flag: '🇬🇾' },
  { tz: 'America/La_Paz',                       label: 'Bolivia Time',                    abbr: 'BOT',  flag: '🇧🇴' },
  { tz: 'America/Montevideo',                   label: 'Uruguay Time',                    abbr: 'UYT',  flag: '🇺🇾' },
  { tz: 'America/Asuncion',                     label: 'Paraguay Time',                   abbr: 'PYT',  flag: '🇵🇾' },
  { tz: 'America/Guayaquil',                    label: 'Ecuador Time',                    abbr: 'ECT',  flag: '🇪🇨' },
  { tz: 'America/Havana',                       label: 'Cuba Standard Time',              abbr: 'CST',  flag: '🇨🇺' },
  { tz: 'America/Jamaica',                      label: 'Jamaica Time',                    abbr: 'EST',  flag: '🇯🇲' },
  { tz: 'America/Panama',                       label: 'Panama Time',                     abbr: 'EST',  flag: '🇵🇦' },
  { tz: 'America/Costa_Rica',                   label: 'Costa Rica Time',                 abbr: 'CST',  flag: '🇨🇷' },
  { tz: 'America/Guatemala',                    label: 'Guatemala Time',                  abbr: 'CST',  flag: '🇬🇹' },
  { tz: 'America/Managua',                      label: 'Nicaragua Time',                  abbr: 'CST',  flag: '🇳🇮' },
  { tz: 'America/Tegucigalpa',                  label: 'Honduras Time',                   abbr: 'CST',  flag: '🇭🇳' },
  { tz: 'America/El_Salvador',                  label: 'El Salvador Time',                abbr: 'CST',  flag: '🇸🇻' },
  { tz: 'America/Belize',                       label: 'Belize Time',                     abbr: 'CST',  flag: '🇧🇿' },
  { tz: 'America/Santo_Domingo',                label: 'Dominican Republic Time',         abbr: 'AST',  flag: '🇩🇴' },
  { tz: 'America/Port-au-Prince',               label: 'Haiti Time',                      abbr: 'EST',  flag: '🇭🇹' },
  { tz: 'America/Puerto_Rico',                  label: 'Puerto Rico Time',                abbr: 'AST',  flag: '🇵🇷' },
  { tz: 'America/Barbados',                     label: 'Barbados Time',                   abbr: 'AST',  flag: '🇧🇧' },
  { tz: 'America/Trinidad',                     label: 'Trinidad & Tobago Time',          abbr: 'AST',  flag: '🇹🇹' },
  { tz: 'Europe/Berlin',                        label: 'Germany Time',                    abbr: 'CET',  flag: '🇩🇪' },
  { tz: 'Europe/Madrid',                        label: 'Spain Time',                      abbr: 'CET',  flag: '🇪🇸' },
  { tz: 'Europe/Rome',                          label: 'Italy Time',                      abbr: 'CET',  flag: '🇮🇹' },
  { tz: 'Europe/Amsterdam',                     label: 'Netherlands Time',                abbr: 'CET',  flag: '🇳🇱' },
  { tz: 'Europe/Brussels',                      label: 'Belgium Time',                    abbr: 'CET',  flag: '🇧🇪' },
  { tz: 'Europe/Vienna',                        label: 'Austria Time',                    abbr: 'CET',  flag: '🇦🇹' },
  { tz: 'Europe/Zurich',                        label: 'Switzerland Time',                abbr: 'CET',  flag: '🇨🇭' },
  { tz: 'Europe/Stockholm',                     label: 'Sweden Time',                     abbr: 'CET',  flag: '🇸🇪' },
  { tz: 'Europe/Oslo',                          label: 'Norway Time',                     abbr: 'CET',  flag: '🇳🇴' },
  { tz: 'Europe/Copenhagen',                    label: 'Denmark Time',                    abbr: 'CET',  flag: '🇩🇰' },
  { tz: 'Europe/Helsinki',                      label: 'Finland Time',                    abbr: 'EET',  flag: '🇫🇮' },
  { tz: 'Europe/Warsaw',                        label: 'Poland Time',                     abbr: 'CET',  flag: '🇵🇱' },
  { tz: 'Europe/Prague',                        label: 'Czech Republic Time',             abbr: 'CET',  flag: '🇨🇿' },
  { tz: 'Europe/Budapest',                      label: 'Hungary Time',                    abbr: 'CET',  flag: '🇭🇺' },
  { tz: 'Europe/Bucharest',                     label: 'Romania Time',                    abbr: 'EET',  flag: '🇷🇴' },
  { tz: 'Europe/Athens',                        label: 'Greece Time',                     abbr: 'EET',  flag: '🇬🇷' },
  { tz: 'Europe/Sofia',                         label: 'Bulgaria Time',                   abbr: 'EET',  flag: '🇧🇬' },
  { tz: 'Europe/Kiev',                          label: 'Ukraine Time',                    abbr: 'EET',  flag: '🇺🇦' },
  { tz: 'Europe/Minsk',                         label: 'Belarus Time',                    abbr: 'FET',  flag: '🇧🇾' },
  { tz: 'Europe/Lisbon',                        label: 'Portugal Time',                   abbr: 'WET',  flag: '🇵🇹' },
  { tz: 'Europe/Dublin',                        label: 'Ireland Time',                    abbr: 'GMT',  flag: '🇮🇪' },
  { tz: 'Europe/Istanbul',                      label: 'Turkey Time',                     abbr: 'TRT',  flag: '🇹🇷' },
  { tz: 'Europe/Riga',                          label: 'Latvia Time',                     abbr: 'EET',  flag: '🇱🇻' },
  { tz: 'Europe/Tallinn',                       label: 'Estonia Time',                    abbr: 'EET',  flag: '🇪🇪' },
  { tz: 'Europe/Vilnius',                       label: 'Lithuania Time',                  abbr: 'EET',  flag: '🇱🇹' },
  { tz: 'Europe/Sarajevo',                      label: 'Bosnia Time',                     abbr: 'CET',  flag: '🇧🇦' },
  { tz: 'Europe/Belgrade',                      label: 'Serbia Time',                     abbr: 'CET',  flag: '🇷🇸' },
  { tz: 'Europe/Zagreb',                        label: 'Croatia Time',                    abbr: 'CET',  flag: '🇭🇷' },
  { tz: 'Europe/Ljubljana',                     label: 'Slovenia Time',                   abbr: 'CET',  flag: '🇸🇮' },
  { tz: 'Europe/Bratislava',                    label: 'Slovakia Time',                   abbr: 'CET',  flag: '🇸🇰' },
  { tz: 'Europe/Skopje',                        label: 'North Macedonia Time',            abbr: 'CET',  flag: '🇲🇰' },
  { tz: 'Europe/Tirane',                        label: 'Albania Time',                    abbr: 'CET',  flag: '🇦🇱' },
  { tz: 'Europe/Nicosia',                       label: 'Cyprus Time',                     abbr: 'EET',  flag: '🇨🇾' },
  { tz: 'Europe/Luxembourg',                    label: 'Luxembourg Time',                 abbr: 'CET',  flag: '🇱🇺' },
  { tz: 'Europe/Malta',                         label: 'Malta Time',                      abbr: 'CET',  flag: '🇲🇹' },
  { tz: 'Europe/Reykjavik',                     label: 'Iceland Time',                    abbr: 'GMT',  flag: '🇮🇸' },
  { tz: 'Asia/Riyadh',                          label: 'Saudi Arabia Time',               abbr: 'AST',  flag: '🇸🇦' },
  { tz: 'Asia/Kuwait',                          label: 'Kuwait Time',                     abbr: 'AST',  flag: '🇰🇼' },
  { tz: 'Asia/Qatar',                           label: 'Qatar Time',                      abbr: 'AST',  flag: '🇶🇦' },
  { tz: 'Asia/Bahrain',                         label: 'Bahrain Time',                    abbr: 'AST',  flag: '🇧🇭' },
  { tz: 'Asia/Muscat',                          label: 'Oman Time',                       abbr: 'GST',  flag: '🇴🇲' },
  { tz: 'Asia/Baghdad',                         label: 'Iraq Time',                       abbr: 'AST',  flag: '🇮🇶' },
  { tz: 'Asia/Tehran',                          label: 'Iran Standard Time',              abbr: 'IRST', flag: '🇮🇷' },
  { tz: 'Asia/Jerusalem',                       label: 'Israel Standard Time',            abbr: 'IST',  flag: '🇮🇱' },
  { tz: 'Asia/Amman',                           label: 'Jordan Time',                     abbr: 'EET',  flag: '🇯🇴' },
  { tz: 'Asia/Beirut',                          label: 'Lebanon Time',                    abbr: 'EET',  flag: '🇱🇧' },
  { tz: 'Asia/Damascus',                        label: 'Syria Time',                      abbr: 'EET',  flag: '🇸🇾' },
  { tz: 'Asia/Nicosia',                         label: 'Cyprus Asia Time',                abbr: 'EET',  flag: '🇨🇾' },
  { tz: 'Asia/Kabul',                           label: 'Afghanistan Time',                abbr: 'AFT',  flag: '🇦🇫' },
  { tz: 'Asia/Tashkent',                        label: 'Uzbekistan Time',                 abbr: 'UZT',  flag: '🇺🇿' },
  { tz: 'Asia/Almaty',                          label: 'Kazakhstan Time',                 abbr: 'ALMT', flag: '🇰🇿' },
  { tz: 'Asia/Yekaterinburg',                   label: 'Russia Yekaterinburg Time',       abbr: 'YEKT', flag: '🇷🇺' },
  { tz: 'Asia/Omsk',                            label: 'Russia Omsk Time',                abbr: 'OMST', flag: '🇷🇺' },
  { tz: 'Asia/Krasnoyarsk',                     label: 'Russia Krasnoyarsk Time',         abbr: 'KRAT', flag: '🇷🇺' },
  { tz: 'Asia/Irkutsk',                         label: 'Russia Irkutsk Time',             abbr: 'IRKT', flag: '🇷🇺' },
  { tz: 'Asia/Yakutsk',                         label: 'Russia Yakutsk Time',             abbr: 'YAKT', flag: '🇷🇺' },
  { tz: 'Asia/Vladivostok',                     label: 'Russia Vladivostok Time',         abbr: 'VLAT', flag: '🇷🇺' },
  { tz: 'Asia/Magadan',                         label: 'Russia Magadan Time',             abbr: 'MAGT', flag: '🇷🇺' },
  { tz: 'Asia/Kamchatka',                       label: 'Russia Kamchatka Time',           abbr: 'PETT', flag: '🇷🇺' },
  { tz: 'Asia/Tbilisi',                         label: 'Georgia Time',                    abbr: 'GET',  flag: '🇬🇪' },
  { tz: 'Asia/Yerevan',                         label: 'Armenia Time',                    abbr: 'AMT',  flag: '🇦🇲' },
  { tz: 'Asia/Baku',                            label: 'Azerbaijan Time',                 abbr: 'AZT',  flag: '🇦🇿' },
  { tz: 'Asia/Bishkek',                         label: 'Kyrgyzstan Time',                 abbr: 'KGT',  flag: '🇰🇬' },
  { tz: 'Asia/Dushanbe',                        label: 'Tajikistan Time',                 abbr: 'TJT',  flag: '🇹🇯' },
  { tz: 'Asia/Ashgabat',                        label: 'Turkmenistan Time',               abbr: 'TMT',  flag: '🇹🇲' },
  { tz: 'Asia/Kathmandu',                       label: 'Nepal Time',                      abbr: 'NPT',  flag: '🇳🇵' },
  { tz: 'Asia/Colombo',                         label: 'Sri Lanka Time',                  abbr: 'SLST', flag: '🇱🇰' },
  { tz: 'Asia/Yangon',                          label: 'Myanmar Time',                    abbr: 'MMT',  flag: '🇲🇲' },
  { tz: 'Asia/Bangkok',                         label: 'Thailand Time',                   abbr: 'ICT',  flag: '🇹🇭' },
  { tz: 'Asia/Ho_Chi_Minh',                     label: 'Vietnam Time',                    abbr: 'ICT',  flag: '🇻🇳' },
  { tz: 'Asia/Phnom_Penh',                      label: 'Cambodia Time',                   abbr: 'ICT',  flag: '🇰🇭' },
  { tz: 'Asia/Vientiane',                       label: 'Laos Time',                       abbr: 'ICT',  flag: '🇱🇦' },
  { tz: 'Asia/Kuala_Lumpur',                    label: 'Malaysia Time',                   abbr: 'MYT',  flag: '🇲🇾' },
  { tz: 'Asia/Jakarta',                         label: 'Indonesia Western Time',          abbr: 'WIB',  flag: '🇮🇩' },
  { tz: 'Asia/Makassar',                        label: 'Indonesia Central Time',          abbr: 'WITA', flag: '🇮🇩' },
  { tz: 'Asia/Jayapura',                        label: 'Indonesia Eastern Time',          abbr: 'WIT',  flag: '🇮🇩' },
  { tz: 'Asia/Manila',                          label: 'Philippines Time',                abbr: 'PST',  flag: '🇵🇭' },
  { tz: 'Asia/Taipei',                          label: 'Taiwan Time',                     abbr: 'CST',  flag: '🇹🇼' },
  { tz: 'Asia/Hong_Kong',                       label: 'Hong Kong Time',                  abbr: 'HKT',  flag: '🇭🇰' },
  { tz: 'Asia/Macau',                           label: 'Macau Time',                      abbr: 'CST',  flag: '🇲🇴' },
  { tz: 'Asia/Ulaanbaatar',                     label: 'Mongolia Time',                   abbr: 'ULAT', flag: '🇲🇳' },
  { tz: 'Asia/Pyongyang',                       label: 'North Korea Time',                abbr: 'KST',  flag: '🇰🇵' },
  { tz: 'Africa/Cairo',                         label: 'Egypt Time',                      abbr: 'EET',  flag: '🇪🇬' },
  { tz: 'Africa/Lagos',                         label: 'Nigeria Time',                    abbr: 'WAT',  flag: '🇳🇬' },
  { tz: 'Africa/Accra',                         label: 'Ghana Time',                      abbr: 'GMT',  flag: '🇬🇭' },
  { tz: 'Africa/Abidjan',                       label: "Côte d'Ivoire Time",              abbr: 'GMT',  flag: '🇨🇮' },
  { tz: 'Africa/Dakar',                         label: 'Senegal Time',                    abbr: 'GMT',  flag: '🇸🇳' },
  { tz: 'Africa/Casablanca',                    label: 'Morocco Time',                    abbr: 'WET',  flag: '🇲🇦' },
  { tz: 'Africa/Tunis',                         label: 'Tunisia Time',                    abbr: 'CET',  flag: '🇹🇳' },
  { tz: 'Africa/Algiers',                       label: 'Algeria Time',                    abbr: 'CET',  flag: '🇩🇿' },
  { tz: 'Africa/Tripoli',                       label: 'Libya Time',                      abbr: 'EET',  flag: '🇱🇾' },
  { tz: 'Africa/Khartoum',                      label: 'Sudan Time',                      abbr: 'CAT',  flag: '🇸🇩' },
  { tz: 'Africa/Addis_Ababa',                   label: 'Ethiopia Time',                   abbr: 'EAT',  flag: '🇪🇹' },
  { tz: 'Africa/Kampala',                       label: 'Uganda Time',                     abbr: 'EAT',  flag: '🇺🇬' },
  { tz: 'Africa/Dar_es_Salaam',                 label: 'Tanzania Time',                   abbr: 'EAT',  flag: '🇹🇿' },
  { tz: 'Africa/Lusaka',                        label: 'Zambia Time',                     abbr: 'CAT',  flag: '🇿🇲' },
  { tz: 'Africa/Harare',                        label: 'Zimbabwe Time',                   abbr: 'CAT',  flag: '🇿🇼' },
  { tz: 'Africa/Maputo',                        label: 'Mozambique Time',                 abbr: 'CAT',  flag: '🇲🇿' },
  { tz: 'Africa/Gaborone',                      label: 'Botswana Time',                   abbr: 'CAT',  flag: '🇧🇼' },
  { tz: 'Africa/Windhoek',                      label: 'Namibia Time',                    abbr: 'WAT',  flag: '🇳🇦' },
  { tz: 'Africa/Douala',                        label: 'Cameroon Time',                   abbr: 'WAT',  flag: '🇨🇲' },
  { tz: 'Africa/Kinshasa',                      label: 'DR Congo Time',                   abbr: 'WAT',  flag: '🇨🇩' },
  { tz: 'Africa/Luanda',                        label: 'Angola Time',                     abbr: 'WAT',  flag: '🇦🇴' },
  { tz: 'Africa/Bamako',                        label: 'Mali Time',                       abbr: 'GMT',  flag: '🇲🇱' },
  { tz: 'Africa/Conakry',                       label: 'Guinea Time',                     abbr: 'GMT',  flag: '🇬🇳' },
  { tz: 'Africa/Freetown',                      label: 'Sierra Leone Time',               abbr: 'GMT',  flag: '🇸🇱' },
  { tz: 'Africa/Mogadishu',                     label: 'Somalia Time',                    abbr: 'EAT',  flag: '🇸🇴' },
  { tz: 'Africa/Djibouti',                      label: 'Djibouti Time',                   abbr: 'EAT',  flag: '🇩🇯' },
  { tz: 'Australia/Perth',                      label: 'Australia Western Time',          abbr: 'AWST', flag: '🇦🇺' },
  { tz: 'Australia/Darwin',                     label: 'Australia Central Time',          abbr: 'ACST', flag: '🇦🇺' },
  { tz: 'Australia/Brisbane',                   label: 'Australia Eastern (no DST)',      abbr: 'AEST', flag: '🇦🇺' },
  { tz: 'Australia/Adelaide',                   label: 'Australia Central Standard Time', abbr: 'ACST', flag: '🇦🇺' },
  { tz: 'Australia/Melbourne',                  label: 'Australia Victoria Time',         abbr: 'AEST', flag: '🇦🇺' },
  { tz: 'Pacific/Guam',                         label: 'Guam Time',                       abbr: 'ChST', flag: '🇬🇺' },
  { tz: 'Pacific/Port_Moresby',                 label: 'Papua New Guinea Time',           abbr: 'PGT',  flag: '🇵🇬' },
  { tz: 'Pacific/Fiji',                         label: 'Fiji Time',                       abbr: 'FJT',  flag: '🇫🇯' },
  { tz: 'Pacific/Tongatapu',                    label: 'Tonga Time',                      abbr: 'TOT',  flag: '🇹🇴' },
  { tz: 'Pacific/Apia',                         label: 'Samoa Time',                      abbr: 'WST',  flag: '🇼🇸' },
  { tz: 'Pacific/Tahiti',                       label: 'Tahiti Time',                     abbr: 'TAHT', flag: '🇵🇫' },
  { tz: 'Pacific/Noumea',                       label: 'New Caledonia Time',              abbr: 'NCT',  flag: '🇳🇨' },
  { tz: 'Pacific/Pago_Pago',                    label: 'American Samoa Time',             abbr: 'SST',  flag: '🇦🇸' },
  { tz: 'Pacific/Midway',                       label: 'Midway Islands Time',             abbr: 'SST',  flag: '🇺🇲' },
  { tz: 'Atlantic/Azores',                      label: 'Azores Time',                     abbr: 'AZOT', flag: '🇵🇹' },
  { tz: 'Atlantic/Cape_Verde',                  label: 'Cape Verde Time',                 abbr: 'CVT',  flag: '🇨🇻' },
  { tz: 'Atlantic/Reykjavik',                   label: 'Iceland Time',                    abbr: 'GMT',  flag: '🇮🇸' },
  { tz: 'Indian/Maldives',                      label: 'Maldives Time',                   abbr: 'MVT',  flag: '🇲🇻' },
  { tz: 'Indian/Mauritius',                     label: 'Mauritius Time',                  abbr: 'MUT',  flag: '🇲🇺' },
  { tz: 'Indian/Reunion',                       label: 'Réunion Time',                    abbr: 'RET',  flag: '🇷🇪' },
  { tz: 'Indian/Mahe',                          label: 'Seychelles Time',                 abbr: 'SCT',  flag: '🇸🇨' },
]

const POPULAR_TZ_SET = new Set(POPULAR.map((p) => p.tz))
const ALL_TIMEZONES: TzEntry[] = [
  ...POPULAR,
  ...ALL_OTHER_TZ.filter((t) => !POPULAR_TZ_SET.has(t.tz)),
]

type TzEntry = { tz: string; label: string; abbr: string; flag: string }

function detectUserTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  } catch {
    return 'Asia/Kolkata'
  }
}

function formatTime(date: Date, tz: string): string {
  try {
    return date.toLocaleTimeString('en-US', {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    })
  } catch {
    return '--:-- --'
  }
}

function formatDate(date: Date, tz: string): string {
  try {
    return date.toLocaleDateString('en-IN', {
      timeZone: tz,
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  } catch {
    return ''
  }
}

function toInputValue(date: Date, tz: string): string {
  try {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: tz,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(date)
    const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '00'
    const h = get('hour') === '24' ? '00' : get('hour')
    return `${get('year')}-${get('month')}-${get('day')}T${h}:${get('minute')}`
  } catch {
    return ''
  }
}

/** localStorage can throw (private browsing, storage disabled, blocked by
 *  extension) — a saved timezone preference is nice-to-have, never critical. */
function readStoredTz(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function writeStoredTz(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Unavailable — the choice just won't persist across visits.
  }
}

function inputToUtc(localValue: string, tz: string): Date {
  const [datePart, timePart] = localValue.split('T')
  const [year, month, day] = datePart.split('-').map(Number)
  const [hour, minute] = timePart.split(':').map(Number)
  const tempDate = new Date(Date.UTC(year, month - 1, day, hour, minute))
  const offsetMs = getTimezoneOffsetMs(tempDate, tz)
  return new Date(tempDate.getTime() - offsetMs)
}

function getTimezoneOffsetMs(date: Date, tz: string): number {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).formatToParts(date)
    const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '0'
    const hour = get('hour') === '24' ? '0' : get('hour')
    const asUtc = Date.UTC(
      Number(get('year')),
      Number(get('month')) - 1,
      Number(get('day')),
      Number(hour),
      Number(get('minute')),
      Number(get('second'))
    )
    return asUtc - date.getTime()
  } catch {
    return 0
  }
}

function getOffsetLabel(date: Date, tz: string): string {
  const totalMinutes = Math.round(getTimezoneOffsetMs(date, tz) / 60000)
  const sign = totalMinutes >= 0 ? '+' : '-'
  const abs = Math.abs(totalMinutes)
  const h = Math.floor(abs / 60)
  const m = abs % 60
  return `GMT${sign}${h}${m ? ':' + String(m).padStart(2, '0') : ''}`
}

function getDiffLabel(date: Date, fromTz: string, toTz: string): string {
  const fromMs = getTimezoneOffsetMs(date, fromTz)
  const toMs = getTimezoneOffsetMs(date, toTz)
  const diffMin = Math.round((toMs - fromMs) / 60000)
  if (diffMin === 0) return 'Same time'
  const abs = Math.abs(diffMin)
  const h = Math.floor(abs / 60)
  const m = abs % 60
  const parts = []
  if (h) parts.push(`${h}h`)
  if (m) parts.push(`${m}m`)
  return diffMin > 0 ? `+${parts.join(' ')} ahead` : `${parts.join(' ')} behind`
}

type Side = 'left' | 'right'

export default function TimeConverterPage() {
  const [leftTz, setLeftTz] = useState(POPULAR[0].tz)
  const [rightTz, setRightTz] = useState(POPULAR[1].tz)
  const [anchor, setAnchor] = useState<Date>(new Date())
  const [ticking, setTicking] = useState(true)
  const [leftOpen, setLeftOpen] = useState(false)
  const [rightOpen, setRightOpen] = useState(false)

  useEffect(() => {
    const savedLeft = readStoredTz('tc_left')
    const savedRight = readStoredTz('tc_right')
    const userTz = detectUserTimezone()
    const defaultLeft = ALL_TIMEZONES.find((t) => t.tz === userTz)?.tz ?? POPULAR[0].tz
    setLeftTz(savedLeft ?? defaultLeft)
    if (savedRight) setRightTz(savedRight)
  }, [])

  useEffect(() => {
    if (!ticking) return
    const id = setInterval(() => setAnchor(new Date()), 1000)
    return () => clearInterval(id)
  }, [ticking])

  const handleTimeChange = useCallback(
    (side: Side, value: string) => {
      if (!value) return
      const tz = side === 'left' ? leftTz : rightTz
      try {
        setAnchor(inputToUtc(value, tz))
        setTicking(false)
      } catch {}
    },
    [leftTz, rightTz]
  )

  const updateLeftTz = (tz: string) => { setLeftTz(tz); writeStoredTz('tc_left', tz) }
  const updateRightTz = (tz: string) => { setRightTz(tz); writeStoredTz('tc_right', tz) }

  const swapZones = () => { updateLeftTz(rightTz); updateRightTz(leftTz) }
  const resetToNow = () => { setAnchor(new Date()); setTicking(true) }

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const leftInfo  = ALL_TIMEZONES.find((t) => t.tz === leftTz)  ?? POPULAR[0]
  const rightInfo = ALL_TIMEZONES.find((t) => t.tz === rightTz) ?? POPULAR[1]
  const diffLabel = mounted ? getDiffLabel(anchor, leftTz, rightTz) : ''

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#FAFAF8] font-sans text-gray-900 antialiased">
      <SiteHeader />

      <main className="flex flex-1 flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 font-display text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          Convert time across{' '}
          <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            any timezone
          </span>
        </h1>

        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <TimePanel
              info={leftInfo}
              allZones={ALL_TIMEZONES}
              popularZones={POPULAR}
              anchor={anchor}
              mounted={mounted}
              open={leftOpen}
              onOpenChange={(v) => { setLeftOpen(v); if (v) setRightOpen(false) }}
              onZoneChange={updateLeftTz}
              onTimeChange={(v) => handleTimeChange('left', v)}
            />

            <div className="flex flex-row items-center justify-center gap-3 lg:flex-col lg:gap-4">
              <button
                onClick={swapZones}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white shadow-soft transition-all hover:border-orange-300 hover:bg-orange-50 active:scale-95"
                aria-label="Swap timezones"
              >
                <ArrowLeftRight className="h-4 w-4 text-stone-400 transition-colors group-hover:text-orange-500" />
              </button>
              <div className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-stone-500 shadow-soft">
                {diffLabel}
              </div>
            </div>

            <TimePanel
              info={rightInfo}
              allZones={ALL_TIMEZONES}
              popularZones={POPULAR}
              anchor={anchor}
              mounted={mounted}
              open={rightOpen}
              onOpenChange={(v) => { setRightOpen(v); if (v) setLeftOpen(false) }}
              onZoneChange={updateRightTz}
              onTimeChange={(v) => handleTimeChange('right', v)}
            />
          </div>

          <div className="mt-4 flex items-center justify-center">
            {ticking ? (
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-500" />
                </span>
                Live
              </div>
            ) : (
              <button
                onClick={resetToNow}
                className="flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold text-stone-500 shadow-soft transition-all hover:border-orange-200 hover:text-orange-600"
              >
                <RotateCcw className="h-3 w-3" />
                Reset to now
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

function TimePanel({
  info,
  allZones,
  popularZones,
  anchor,
  mounted,
  open,
  onOpenChange,
  onZoneChange,
  onTimeChange,
}: {
  info: TzEntry
  allZones: TzEntry[]
  popularZones: TzEntry[]
  anchor: Date
  mounted: boolean
  open: boolean
  onOpenChange: (v: boolean) => void
  onZoneChange: (tz: string) => void
  onTimeChange: (value: string) => void
}) {
  const [query, setQuery] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)

  // Auto-focus search when dropdown opens
  useEffect(() => {
    if (open) {
      setQuery('')
      setTimeout(() => searchRef.current?.focus(), 0)
    }
  }, [open])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return allZones
    return allZones.filter(
      (z) =>
        z.label.toLowerCase().includes(q) ||
        z.abbr.toLowerCase().includes(q) ||
        z.tz.toLowerCase().includes(q)
    )
  }, [query, allZones])

  const showPopularSection = query.trim() === ''

  const [timePart, ampm] = mounted ? formatTime(anchor, info.tz).split(' ') : ['--:--:--', '']
  const dateStr = mounted ? formatDate(anchor, info.tz) : ''
  const offsetLabel = mounted ? getOffsetLabel(anchor, info.tz) : ''
  const inputVal = mounted ? toInputValue(anchor, info.tz) : ''

  return (
    <div className="rounded-2xl border border-stone-200/70 bg-white p-5 shadow-soft">
      {/* Timezone selector trigger */}
      <div className="relative">
        <button
          onClick={() => onOpenChange(!open)}
          className="group flex w-full items-center justify-between gap-3 rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-3 text-left transition-all hover:border-orange-300 hover:bg-orange-50/40 focus:outline-none focus:ring-2 focus:ring-orange-400/30"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-xl leading-none">{info.flag}</span>
            <div>
              <div className="text-sm font-bold text-gray-900">{info.abbr}</div>
              <div className="text-xs text-stone-400">{info.label}</div>
            </div>
          </div>
          <ChevronDown className={`h-3.5 w-3.5 flex-shrink-0 text-stone-400 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>

        {open && (
          <div className="absolute left-0 right-0 top-full z-40 mt-1.5 rounded-xl border border-stone-200 bg-white shadow-soft-lg">
            {/* Search input */}
            <div className="border-b border-stone-100 p-2">
              <div className="flex items-center gap-2 rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-400/20">
                <Search className="h-3.5 w-3.5 flex-shrink-0 text-stone-400" />
                <input
                  ref={searchRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search timezone or country…"
                  className="w-full bg-transparent text-sm text-gray-900 placeholder-stone-400 focus:outline-none"
                />
              </div>
            </div>

            {/* List */}
            <div className="max-h-60 overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="px-4 py-6 text-center text-sm text-stone-400">No results for &quot;{query}&quot;</div>
              ) : showPopularSection ? (
                <>
                  <div className="sticky top-0 flex items-center gap-1.5 bg-stone-50/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-stone-400 backdrop-blur-sm">
                    <Star className="h-3 w-3" /> Popular
                  </div>
                  {popularZones.map((z) => (
                    <TzRow key={z.tz} z={z} selected={z.tz === info.tz} onSelect={() => { onZoneChange(z.tz); onOpenChange(false) }} />
                  ))}
                  <div className="sticky top-0 flex items-center gap-1.5 bg-stone-50/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-stone-400 backdrop-blur-sm">
                    <Globe className="h-3 w-3" /> All timezones
                  </div>
                  {allZones.filter((z) => !popularZones.some((p) => p.tz === z.tz)).map((z) => (
                    <TzRow key={z.tz} z={z} selected={z.tz === info.tz} onSelect={() => { onZoneChange(z.tz); onOpenChange(false) }} />
                  ))}
                </>
              ) : (
                filtered.map((z) => (
                  <TzRow key={z.tz} z={z} selected={z.tz === info.tz} onSelect={() => { onZoneChange(z.tz); onOpenChange(false) }} />
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Offset */}
      <div className="mt-2 flex items-center gap-1.5">
        <Globe className="h-3 w-3 text-stone-400" />
        <span className="text-xs text-stone-400">{offsetLabel} · {info.tz}</span>
      </div>

      {/* Time display */}
      <div className="mt-4 rounded-xl bg-gradient-to-br from-orange-50/60 to-amber-50/30 px-4 py-4">
        <div className="flex items-end gap-2">
          <span className="font-display text-4xl font-extrabold tracking-tight text-gray-900 tabular-nums sm:text-5xl">
            {timePart}
          </span>
          <span className="mb-1 text-lg font-bold text-orange-500">{ampm}</span>
        </div>
        <div className="mt-1 text-xs font-medium text-stone-400">{dateStr}</div>
      </div>

      {/* Edit input */}
      <div className="mt-3">
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-stone-300">
          Edit time
        </label>
        <input
          type="datetime-local"
          value={inputVal}
          onChange={(e) => onTimeChange(e.target.value)}
          className="block w-full rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-soft transition-colors focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
        />
      </div>
    </div>
  )
}

function TzRow({ z, selected, onSelect }: { z: TzEntry; selected: boolean; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm transition-colors hover:bg-orange-50 ${
        selected ? 'bg-orange-50/80 font-semibold text-orange-700' : 'text-gray-700'
      }`}
    >
      <span className="w-5 text-center text-base leading-none">{z.flag}</span>
      <span className="font-medium text-gray-900">{z.abbr}</span>
      <span className="text-stone-400">—</span>
      <span className="truncate">{z.label}</span>
    </button>
  )
}
