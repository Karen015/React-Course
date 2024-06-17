import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App' 

const rootElement = document.getElementById('root');


const root = ReactDOM.createRoot(rootElement);

//  hin dzev, fuuu

// root.render(
//     React.createElement('a', null, 'Hello react')
// )

// JSX 

// const content = (
//     <div>
//         <a href='link'>Hello World</a>
//     </div>
// )

root.render(
    <App />
)