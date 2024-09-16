'use client'

import { useState } from 'react'

interface LoginProps {
  onLogin: (email: string, password: string) => void
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin(email, password)
  }

  return (
    <div
    className="min-h-screen flex items-center justify-center bg-gray-100"
    style={{
      backgroundImage: "url('https://images.pexels.com/photos/28277459/pexels-photo-28277459/free-photo-of-agua-onda-azul-oceano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="max-w-md w-full space-y-8 p-8 bg-blue-100 rounded-lg shadow-2xl opacity-85">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Entrar no Estudo Colaborativo
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              e-mail
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Endereço de e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
           
          </div>
          
          
        </div>
  
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:bg-blue-400"
          >
            Entrar
          </button>
          
          
        </div>
        <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:bg-blue-400 "
          >
            Esqueceu sua senha
          </button>
      </form>
    </div>
  </div>
  
  )
}