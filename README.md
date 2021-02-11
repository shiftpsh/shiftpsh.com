# shiftpsh.com

[shiftpsh.com](https://shiftpsh.com) website (2021)

## Build & Run

1. Set API secret: `nano .env`

```
API_SECRET=<api secret>
```

2. Configure database: `cp db_config.sample.ts db_config.ts && nano db_config.ts`

```
import { SequelizeOptions } from 'sequelize-typescript'

export default {
  dialect: 'mysql',
  database: '<database name>>',
  username: '<database username>',
  password: '<database password>',
} as SequelizeOptions
```

3. `npm i && npm run build && npm run start`

Optionally set up the [crawler](https://github.com/shiftpsh/shiftpsh.com-crawler) to update values if needed

## TODO

* Use markdown or similar to write articles
* Translate
* Dark theme
