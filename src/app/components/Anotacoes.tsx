'use client'

import { useState } from 'react'

export default function Anotacoes() {
  const [anotacoes, setAnotacoes] = useState<string[]>([])
  const [novaAnotacao, setNovaAnotacao] = useState('')

  const adicionarAnotacao = () => {
    if (novaAnotacao.trim()) {
      setAnotacoes([...anotacoes, novaAnotacao])
      setNovaAnotacao('')
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Minhas Anotações</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          value={novaAnotacao}
          onChange={(e) => setNovaAnotacao(e.target.value)}
          className="flex-grow px-3 py-2 border rounded text-gray-800 bg-white"
          placeholder="Digite sua anotação"
        />
        <button
          onClick={adicionarAnotacao}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Adicionar
        </button>
      </div>
      <ul className="space-y-2">
        {anotacoes.map((anotacao, index) => (
          <li key={index} className="p-2 bg-white rounded shadow text-gray-800">
            {anotacao}
          </li>
        ))}
      </ul>
    </div>
  )
}