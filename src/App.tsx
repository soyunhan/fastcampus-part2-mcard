import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from '@shared/ScrollToTop'
import HomePage from '@pages/Home'
import TestPage from '@pages/Test'
import CardPage from '@pages/Card'
import SigninPage from '@pages/Signin'
import SignupPage from '@pages/Signup'
import ApplyPage from '@pages/Apply'
import ApplyDone from '@pages/ApplyDone'

import PrivateRoute from '@components/auth/PrivateRoute'
import Navbar from '@shared/Navbar'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/signin" Component={SigninPage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/card/:id" Component={CardPage} />
        <Route
          path="/apply/:id"
          element={
            <PrivateRoute>
              <ApplyPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/apply/done"
          element={
            <PrivateRoute>
              <ApplyDone />
            </PrivateRoute>
          }
        />
        <Route path="/test" Component={TestPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
