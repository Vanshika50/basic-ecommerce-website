import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { DataContextProvider } from './context/DataContextProvider.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ClerkProvider publishableKey={clerkKey}>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
)