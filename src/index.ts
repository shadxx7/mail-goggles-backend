import 'reflect-metadata'
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import db from './config/database'

const app = express()

app.use(morgan('tiny'))

app.use(express.json())

let options = {
  root: path.join(__dirname, 'assets'),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true,
  },
}

// Test Database Connection
db()
  .then(() => {
    console.log('Database connection successful!')
  })
  .catch(err => {
    console.log('Something went wrong. Error: ', err)
  })

app.get('/', (req, res) => {
  console.log(req)
  res.status(200).sendFile('main.png', options)
})

app.listen(5000, () => {
  console.log('Server started at port 5000....')
})
