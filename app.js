const express = require('express')

const app = express()

app.get('',(req, res) => res.send('hello world!'))

app.listen(process.env.PORT || 3333, () => console.log('Api up and runnig !'))