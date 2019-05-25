import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'

const store = createStore(rootReducer,
    {
        cart: {  },
        items: [
            {
                id: 0,
                name: "Product1",
                description: "Science means constantly walking a tightrope between blind faith and curiosity; between expertise and creativity; between bias and openness; between experience and epiphany; between ambition and passion; and between arrogance and conviction - in short, between an old today and a new tomorrow.",
                img: "https://naqyr37xcg93tizq734pqsx1-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/dd.jpg"
                },
                {
                id: 1,
                name: "Product2",
                description: "Once you have an innovation culture, even those who are not scientists or engineers - poets, actors, journalists - they, as communities, embrace the meaning of what it is to be scientifically literate. They embrace the concept of an innovation culture. They vote in ways that promote it. They don't fight science and they don't fight technology.",
                img: "https://naqyr37xcg93tizq734pqsx1-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/The-Inspiration-Imperative-Finding-Your-Recipe-to-Inspire-the-World.jpg"
                }
        ]
    }
    );

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
