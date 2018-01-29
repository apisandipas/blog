import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'
import Routes from '../client/Routes'

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  )

  const hemlet = Helmet.renderStatic()

  return `
    <html>
      <head>
        ${hemlet.title.toString()}
        ${hemlet.meta.toString()}
        ${hemlet.link.toString()}
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.css">  
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        <script src="bundle.js"></script>
       </body>
    </html>  
  `

}