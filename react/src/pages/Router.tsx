import { BrowserRouter, Route, Routes } from 'react-router'
import Initial from './Initial'
import Dashboard from '../components/molecule/dashboard.tsx/Dashboard'
import NotFound from './guest/NotFound'
import Home from './guest/Home'
import About from './guest/About'
import secret from '../config/secret'

function Router() {
  return (
    <BrowserRouter basename={secret.APP_BASE_URL}>
      <Routes>
        <Route element={<Initial />}>
          <Route element={<Dashboard />}>
            <Route index element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
