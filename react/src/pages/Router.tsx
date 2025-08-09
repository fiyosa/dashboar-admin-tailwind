import { BrowserRouter, Route, Routes } from 'react-router'
import Initial from './Initial'
import Dashboard from '../components/molecule/dashboard.tsx/Dashboard'
import NotFound from './guest/NotFound'
import Home from './guest/Home'
import About from './guest/About'

function Router() {
  return (
    <BrowserRouter>
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
