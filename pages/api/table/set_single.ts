import type { NextApiRequest, NextApiResponse } from 'next'
import { initDatabase } from '../../../database/Database'
import MapEntry from '../../../database/model/MapEntry'

const SetSingle = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  if (method !== 'POST') {
    res.status(400).send('Unsupported operation.')
    return
  }
  if (req.headers['shiftpsh-secret'] !== process.env.API_SECRET) {
    res.status(401).send('Unauthorized.')
    return
  }
  
  const db = await initDatabase()
  if (db === undefined) {
    res.status(500).send('Internal server error.')
    return
  }

  const {
    body: { key, value },
  } = req

  if ((await MapEntry.findOne({ where: { key } })) === null) {
    await MapEntry.create({ key, value })
  } else {
    await MapEntry.update({ value }, { where: { key } })
  }

  const entry = await MapEntry.findOne({
    where: { key },
    attributes: ['key', 'value'],
  })
  res.status(200).json({ result: entry })
}

export default SetSingle
