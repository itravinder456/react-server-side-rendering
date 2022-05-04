import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { App } from './app/src/App';
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({}));
app.use(express.static('build'))

app.get("*", (req, res) => {
    const context = {};
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    )

    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id='root'>${content}</div>
    </body>
    </html>`
    res.send(html)
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})