import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider as ReduxProvider } from 'react-redux'
import store from "./store/store.ts";

createRoot(document.getElementById('root')!).render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
)
