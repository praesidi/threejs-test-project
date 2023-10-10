import React from 'react'
import ReactDOM from 'react-dom/client'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Loader />
  </React.StrictMode>,
)
