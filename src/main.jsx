import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <App className="h-screen bg-cover bg-center bg-[url(https://res.cloudinary.com/decks92gf/image/upload/v1751993164/wmremove-transformed_c9nmsq.webp)] object-fill w-full bg-[#000]" />
    </Provider>
  </StrictMode>,
)
