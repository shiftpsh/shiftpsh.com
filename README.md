# shiftpsh.com

[shiftpsh.com](https://shiftpsh.com) website (2021년)

## Build & Run

1. Set API secret: `nano .env`

```
API_SECRET=<api secret>
```

1. Configuring database: `cp db_config.sample.ts db_config.ts && nano db_config.ts`

```
import { SequelizeOptions } from 'sequelize-typescript'

export default {
  dialect: 'mysql',
  database: '<database name>>',
  username: '<database username>',
  password: '<database password>',
} as SequelizeOptions
```

1. `npm i && npm run build && npm run start`
