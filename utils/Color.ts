import Color from 'color'

const codeforcesColor = (rating: number) => {
  if (rating >= 3000) return new Color('#d32f2f')
  if (rating >= 2600) return new Color('#e53935')
  if (rating >= 2400) return new Color('#f44336')
  if (rating >= 2300) return new Color('#fb8c00')
  if (rating >= 2100) return new Color('#ff9800')
  if (rating >= 1900) return new Color('#673ab7')
  if (rating >= 1600) return new Color('#03a9f4')
  if (rating >= 1400) return new Color('#26a69a')
  if (rating >= 1200) return new Color('#4caf50')
  return new Color('#78909c')
}

const atcoderColor = (rating: number) => {
  if (rating >= 2800) return new Color('#f44336')
  if (rating >= 2400) return new Color('#ff9800')
  if (rating >= 2000) return new Color('#ffc107')
  if (rating >= 1600) return new Color('#03a9f4')
  if (rating >= 1200) return new Color('#26a69a')
  if (rating >= 800) return new Color('#4caf50')
  if (rating >= 400) return new Color('#795548')
  return new Color('#78909c')
}

const topcoderColor = (rating: number) => {
  if (rating >= 2200) return new Color('#f44336')
  if (rating >= 1500) return new Color('#ffc107')
  if (rating >= 1200) return new Color('#03a9f4')
  if (rating >= 900) return new Color('#4caf50')
  return new Color('#78909c')
}

const maimaiTitleColor = (title: string) => {
  if (title.endsWith('皆伝')) return new Color('#673ab7')
  if (title === '十段' || title === '九段') return new Color('#ffc107')
  if (title === '八段' || title === '七段') return new Color('#607d8b')
  if (title === '八段' || title === '七段') return new Color('#607d8b')
  if (title === '六段' || title === '五段') return new Color('#ff5722')
  return new Color('#78909c')
}

const sdvxColor = (title: string) => {
  if (title === '暴龍天') return new Color('#673ab7')
  if (title === '或帝滅斗') return new Color('#f44336')
  if (title === '剛力羅') return new Color('#ffc107')
  if (title === '魔騎士') return new Color('#607d8b')
  if (title === '麗華') return new Color('#f06292')
  if (title === '雷電') return new Color('#e91e63')
  if (title === '烈風') return new Color('#26a69a')
  if (title === '天極') return new Color('#00bcda')
  return new Color('#78909c')
}

export {
    codeforcesColor,
    atcoderColor,
    topcoderColor,
    maimaiTitleColor,
    sdvxColor,
}

