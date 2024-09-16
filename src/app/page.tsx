'use client'

import { useState } from 'react'
import Login from './components/Login'
import Anotacoes from './components/Anotacoes'
import Notas from './components/Notas'
import Comunidades from './components/Comunidades'
import Calendario from './components/Calendario'
import Participar from './components/particpar'
import Esqueceu from './components/Esqueceu'


export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('anotacoes')

  const handleLogin = (email: string, password: string) => {
    // Aqui você deve implementar a lógica real de autenticação
    // Por enquanto, vamos apenas simular um login bem-sucedido
    console.log('Login attempt:', email, password)
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-blue-200 text-center">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold text-center">Estudo Colaborativo</h1>
        <p>logo</p>
      </header>
      <nav className="bg-blue-500 p-2 ">
        <ul className="flex space-x-4 gap-4">
          <li>
            <button
              className={`px-3 py-2 rounded ${activeTab === 'anotacoes' ? 'bg-white text-blue-600' : 'text-white'}`}
              onClick={() => setActiveTab('anotacoes')}
            >
              Anotações
            </button>
          </li>
          <li>
            <button
              className={`px-3 py-2 rounded ${activeTab === 'notas' ? 'bg-white text-blue-600' : 'text-white'}`}
              onClick={() => setActiveTab('notas')}
            >
              Notas
            </button>
          </li>
          <li>
            <button
              className={`px-3 py-2 rounded ${activeTab === 'comunidades' ? 'bg-white text-blue-600' : 'text-white'}`}
              onClick={() => setActiveTab('comunidades')}
            >
              Comunidades
            </button>
            
          </li>
          <li>
            <button
              className={`px-3 py-2 rounded ${activeTab === 'calendario' ? 'bg-white text-blue-600' : 'text-white'}`}
              onClick={() => setActiveTab('calendario')}
            >
              Calendario
            </button>
          </li>
          <li>
            <button
              className={`px-3 py-2 rounded ${activeTab === 'esqueceu' ? 'bg-white text-blue-600' : 'text-white'}`}
              onClick={() => setActiveTab('esqueceu')}
            >
              Esqueceu
            </button>
          </li>
          
        </ul>
      </nav>
      <main className="p-4">
        {activeTab === 'anotacoes' && <Anotacoes />}
        {activeTab === 'notas' && <Notas />}
        {activeTab === 'comunidades' && <Comunidades />}
        {activeTab === 'calendario' && <Calendario/>}
        {activeTab === 'participar' && <Participar/>}
        {activeTab === 'esqueceu' && <Esqueceu/>}
      </main>
    </div>
  )
}