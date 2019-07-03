import 'reflect-metadata'
import express from 'express'
import morgan from 'morgan'
import path from 'path'

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

app.get('/', (req, res) => {
  res.status(200).sendFile('main.png', options)
})

app.listen(5000, () => {
  console.log('Server started at port 5000....')
})
