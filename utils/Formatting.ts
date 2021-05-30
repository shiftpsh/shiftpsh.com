const numberFormat = (value: number, decimalPlaces?: number) => {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  })
}

const codeforcesTitle = (rating: number) => {
  if (rating >= 3000) return 'Legendary Grandmaster'
  if (rating >= 2600) return 'International Grandmaster'
  if (rating >= 2400) return 'Grandmaster'
  if (rating >= 2300) return 'International Master'
  if (rating >= 2100) return 'Master'
  if (rating >= 1900) return 'Candidate Master'
  if (rating >= 1600) return 'Expert'
  if (rating >= 1400) return 'Specialist'
  if (rating >= 1200) return 'Pupil'
  return 'Newbie'
}

const sinoNumerals = [
  '〇',
  '初',
  '二',
  '三',
  '四',
  '五',
  '六',
  '七',
  '八',
  '九',
  '十',
]

const atcoderTitle = (highest: number) => {
  if (highest >= 4200) return '極伝'
  if (highest >= 4000) return '皆伝'
  if (highest >= 2000) {
    // 一段 = 2000 ... 十段 = 3800
    const dan = Math.floor(highest / 200) - 9
    return `${sinoNumerals[dan]}段`
  }
  if (highest >= 400) {
    // 8級 = 400 ... 1級 = 1800
    const kyu = 10 - Math.floor(highest / 200)
    return `${kyu} 級`
  }
  if (highest >= 243) return '9 級'
  if (highest >= 147) return '10 級'
  if (highest >= 90) return '11 級'
  if (highest >= 54) return '12 級'
  if (highest >= 33) return '13 級'
  if (highest >= 20) return '14 級'
  if (highest >= 13) return '15 級'
  if (highest >= 8) return '16 級'
  if (highest >= 5) return '17 級'
  if (highest >= 3) return '18 級'
  if (highest >= 2) return '19 級'
  return '20 級'
}

const topcoderTitle = (rating: number) => {
  if (rating >= 2200) return 'Red'
  if (rating >= 1500) return 'Yellow'
  if (rating >= 1200) return 'Blue'
  if (rating >= 900) return 'Green'
  return 'Gray'
}

export { numberFormat, codeforcesTitle, atcoderTitle, topcoderTitle }
