import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Routes>
        <Route path="/content" element={
          <ProtectedRoute permission="content">
            <ContentModule />
          </ProtectedRoute>
        } />
      </Routes>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        {adminRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<Navigate to="/unauthorized" />} />
      </Routes>
      <Routes>
        <Route path="/users" element={
          <ProtectedRoute permission="users">
            <Users />
          </ProtectedRoute>
        } />
        <Route path="/stats" element={
          <ProtectedRoute permission="stats">
            <Statistics />
          </ProtectedRoute>
        } />
        <Route path="/roles" element={
          <ProtectedRoute permission="roles">
            <Roles />
          </ProtectedRoute>
        } />
        <Route path="/content" element={
          <ProtectedRoute permission="content">
            <ContentModule />
          </ProtectedRoute>
        } />
        <Route path="/hr" element={
          <ProtectedRoute permission="hr">
            <HRModule />
          </ProtectedRoute>
        } />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<Navigate to="/unauthorized" />} />
      </Routes>
    </>
  )
}

export default App
