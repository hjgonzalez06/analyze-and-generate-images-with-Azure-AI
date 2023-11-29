import ReactDOM from 'react-dom'

import classes from './styles/root.module.scss'

import App from './home'

import './styles/global.scss'

const root = document.getElementById('root')

root.classList.add(classes.root)

ReactDOM.render(<App />, root)
