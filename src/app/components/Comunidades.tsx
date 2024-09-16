'use client'

import { useState } from 'react'

export default function Comunidades() {
  const [comunidades, setComunidades] = useState([
    { id: 1, nome: 'Calculo 2', membros: 120 },
    { id: 2, nome: 'Frontend', membros: 85 },
    { id: 3, nome: 'Física Quântica', membros: 50 },
  ])

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Comunidades</h2>
      <ul className="space-y-2">
        {comunidades.map((comunidade) => (
          <li key={comunidade.id} className="p-4 bg-white shadow text-blue-600 rounded-lg">
            <h3 className="font-semibold ">{comunidade.nome}</h3>
            <p className="text-sm text-gray-600">{comunidade.membros} membros</p>
            <button className="mt-2 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
              Participar
            </button>
          </li>
         
        ))}
      </ul>
    </div>
  )
}