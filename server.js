import express from 'express'
import session from 'express-session'
import morgan from 'morgan'
import nunjucks from 'nunjucks'

const app = express()
const port = '8000'

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(session({
    secret: 'shh',
    saveUninitialized: true,
    resave: false
}))
nunjucks.configure('views', {
    autoescape:true,
    express: app,
})

app.get('/', (req, res) => {
    res.sendFile('C:/Users/Mary Castorani/src/assessment 4/views/index.js')
})

app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`)
})

// app.get('/pokemon', (req, res) => {
//      res.render('Public/index.html');
//   });
