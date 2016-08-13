import * as express from 'express';

const app: express.Application = express()
const PORT: number = process.env.PORT || 8000

app.use('/', express.static(__dirname))

app.listen(PORT, function(){
  console.log(`Listening on port: ${PORT}`)
})