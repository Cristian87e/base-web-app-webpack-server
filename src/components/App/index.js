import './App.scss'

const App = document.createElement('div');
App.className = 'app'
const message = 'Hello Webpack 2'
/* lodash is required for the next line to work */
App.innerHTML = `
  <h1>${message}</h1>
`;

export default App
