// Dependencies
import React from 'react';
import { renderToString } from 'react-dom/server';
// import { matchPath } from 'react-router-dom';
// import { Provider } from 'react-redux';

// Redux Store
//import configureStore from '../shared/configureStore';

// Containers
import App from '../app/App';

// HTML
import html from './html';

// Routes
// import routes from '../shared/routes';

export default function serverRender() {
    return (req, res, next) => {
        const context = {};

        const markup = renderToString(
            <App
                server
                location={req.url}
                context={context}
            />
        );
  
        if (context.url) {
            res.redirect(301, context.url);
        } else {
            res.send(html({
                markup
            }));
        }
    };
}