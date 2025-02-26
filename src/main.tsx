import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { KindeProvider } from '@kinde-oss/kinde-auth-react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KindeProvider
		clientId="e9b6460b3ebb45779f3e7389b65387e9"
		domain="https://devgypsy.kinde.com"
		redirectUri={
      process.env.NODE_ENV === 'production' ?
        'https://todo-with-auth-two.vercel.app/' :
        'http://localhost:5173'
      }
		logoutUri={
      process.env.NODE_ENV === 'production' ?
        'https://todo-with-auth-two.vercel.app/' :
        'http://localhost:5173'
      }
	  >
    <App />
  </KindeProvider>
    
  </StrictMode>,
)
