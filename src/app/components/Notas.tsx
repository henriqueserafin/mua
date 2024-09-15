'use client'

import { useState } from 'react'

export default function Notas() {
  const [notas, setNotas] = useState<{ disciplina: string; nota: number }[]>([])
  const [novaDisciplina, setNovaDisciplina] = useState('')
  const [novaNota, setNovaNota] = useState('')

  const adicionarNota = () => {
    if (novaDisciplina.trim() && novaNota.trim()) {
      setNotas([...notas, { disciplina: novaDisciplina, nota: parseFloat(novaNota) }])
      setNovaDisciplina('')
      setNovaNota('')
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Minhas Notas</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          value={novaDisciplina}
          onChange={(e) => setNovaDisciplina(e.target.value)}
          className="flex-grow px-3 py-2 border rounded text-gray-800 bg-white"
          placeholder="Disciplina"
        />
        <input
          type="number"
          value={novaNota}
          onChange={(e) => setNovaNota(e.target.value)}
          className="w-24 px-3 py-2 border rounded text-gray-800 bg-white"
          placeholder="Nota"
          min="0"
          max="10"
          step="0.1"
        />
        <button
          onClick={adicionarNota}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Adicionar
        </button>
      </div>
      <ul className="space-y-2">
        {notas.map((nota, index) => (
          <li key={index} className="p-2 bg-white rounded shadow flex justify-between text-gray-800">
            <span>{nota.disciplina}</span>
            <span className="font-semibold">{nota.nota.toFixed(1)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}