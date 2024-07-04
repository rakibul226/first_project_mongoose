import config from './app/config'
import mongoose from 'mongoose'
import app from './app'
import { error, log } from 'console'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(error)
  }
}
