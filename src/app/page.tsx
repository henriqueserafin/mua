'use client'

import { useState } from 'react'
import Anotacoes from './components/Anotacoes'
import Notas from './components/Notas'
import Comunidades from './components/Comunidades'

export default function Home() {
  const [activeTab, setActiveTab] = useState('anotacoes')

  return (
    <div className="min-h-screen bg-gray-800">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold text-center">Estudo Colaborativo</h1>
        <h1 className="text-2xl font-bold">Logo</h1>

        
        
      </header>
      <nav className="bg-blue-500 p-2">
        <ul className="flex space-x-4">
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
        </ul>
      </nav>
      <main className="p-4">
        {activeTab === 'anotacoes' && <Anotacoes />}
        {activeTab === 'notas' && <Notas />}
        {activeTab === 'comunidades' && <Comunidades />}
      </main>
    </div>
  )
}