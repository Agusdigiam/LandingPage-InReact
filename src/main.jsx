import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header} from './components/Header'
import {Main} from './components/Main'
import {CardMain} from './components/CardMain'
import {CardMainTwo} from './components/CardMainTwo'
import {CardMainThree} from './components/CardMainThree'
import {Testimonials} from './components/Testimonials'
import {Footer} from './components/Footer'
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Main />
    <CardMain />
    <CardMainTwo />
    <CardMainThree />
    <Testimonials />
    <Footer />
  </React.StrictMode>,
)
