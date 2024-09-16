'use client'

import { useState } from 'react'

interface EsqueceuSenhaProps {
  onVoltar: () => void
  onEnviar: (email: string) => void
}

export default function EsqueceuSenha({ onVoltar, onEnviar }: EsqueceuSenhaProps) {
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      onEnviar(email)
      setMensagem('Se o e-mail estiver cadastrado, você receberá instruções para redefinir sua senha.')
      setEmail('')
    } else {
      setMensagem('Por favor, insira um e-mail válido.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Recuperação de Senha
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Insira seu e-mail para receber instruções de recuperação de senha.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Endereço de e-mail
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Endereço de e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {mensagem && (
            <div className="text-sm text-center text-gray-700" role="alert">
              {mensagem}
            </div>
          )}

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={onVoltar}
              className="text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline"
            >
              Voltar para o login
            </button>
            <button
              type="submit"
              className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Enviar instruções
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}