import { initDatabase } from '../database/Database'
import MapEntry from '../database/model/MapEntry'

const seed = async () => {
  return await MapEntry.bulkCreate([
    {
      key: 'cf_rating',
      value: '2117',
    },
    {
      key: 'cf_rating_highest',
      value: '2117',
    },
    {
      key: 'ac_rating',
      value: '1874',
    },
    {
      key: 'ac_rating_highest',
      value: '1874',
    },
    {
      key: 'tc_rating',
      value: '1821',
    },
    {
      key: 'djmax_description',
      value: 'DIAMOND IV @ PRE-SEASON',
    },
    {
      key: 'maple_level',
      value: '233',
    },
    {
      key: 'maimai_rating',
      value: '8743',
    },
    {
      key: 'maimai_class',
      value: '九段',
    },
    {
      key: 'sdvx_rating',
      value: '19.03',
    },
    {
      key: 'sdvx_class',
      value: 'Lv.∞ 蘭華',
    },
  ])
}

void (async (): Promise<void> => {
  const db = await initDatabase()
  await seed()
  console.log('db:seed finished.')
})()
