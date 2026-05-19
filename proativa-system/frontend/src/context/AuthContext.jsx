import { createContext, useContext, useState, useEffect } from 'react'
import api from '../services/api'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('@Proativa:token')
    const storedUser = localStorage.getItem('@Proativa:user')

    if (token && storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/auth/login', { email, password })
      const { token, user } = response.data.data

      localStorage.setItem('@Proativa:token', token)
      localStorage.setItem('@Proativa:user', JSON.stringify(user))

      setUser(user)
      return true
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      return false
    }
  }

  function signOut() {
    localStorage.removeItem('@Proativa:token')
    localStorage.removeItem('@Proativa:user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
