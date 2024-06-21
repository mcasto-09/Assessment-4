import express from 'express'
import session from 'express-session'
import morgan from 'morgan'
import ViteExpress from 'vite-express'

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
ViteExpress.config({printViteDevServerHost: true})

ViteExpress.listen(app, port, () => {
    console.log(`App is listening on port http://localhost:${port}`)
})

app.get('/spells', (req, res) => {
     res.render('index.html');
  });
