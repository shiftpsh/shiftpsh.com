import type { NextApiRequest, NextApiResponse } from 'next'
import { Op } from 'sequelize'
import { dbInstance } from '../../../database/Database'
import MapEntry from '../../../database/model/MapEntry'

const GetAll = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await dbInstance()
  if (db === undefined) {
    res.status(500).send('Internal server error.')
    return
  }

  try {
    await db.authenticate()
  } catch (error) {
    res.status(500).send('Internal server error.')
    return
  }

  const mapEntry = await MapEntry(db)
  const allMapEntries = await mapEntry.findAll({
    where: { key: { [Op.ne]: null } },
    attributes: ['key', 'value'],
  })

  db.close()
  res.status(200).json({ result: allMapEntries })
}

export default GetAll
