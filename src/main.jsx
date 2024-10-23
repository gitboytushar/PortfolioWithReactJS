import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Loading from './components/Loading.jsx'
import DelayedRender from './components/DelayedRender.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DelayedRender delay={1500} fallback={<Loading />}>
      <App />
    </DelayedRender>
  </StrictMode>
)
