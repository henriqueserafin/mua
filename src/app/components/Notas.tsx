'use client'

import { useState } from 'react'

export default function Notas() {
  const [notas, setNotas] = useState<{ disciplina: string; n1: number; n2: number; n3?: number; mediaFinal: number; precisaN3: boolean; status: string }[]>([])
  const [novaDisciplina, setNovaDisciplina] = useState('')
  const [novaN1, setNovaN1] = useState('')
  const [novaN2, setNovaN2] = useState('')
  const [novaN3, setNovaN3] = useState('')
  const [mediaAprovacao, setMediaAprovacao] = useState('7.0') // Média inicial é 7.0, mas pode ser alterada pelo usuário

  const adicionarNota = () => {
    if (novaDisciplina.trim() && novaN1.trim() && novaN2.trim()) {
      const n1 = parseFloat(novaN1)
      const n2 = parseFloat(novaN2)
      const mediaMinima = parseFloat(mediaAprovacao) // Usa a média inserida pelo usuário
      let mediaFinal = (n1 + n2) / 2
      let precisaN3 = mediaFinal < mediaMinima
      let status = mediaFinal >= mediaMinima ? 'Aprovado' : 'Reprovado'

      if (!precisaN3) {
        setNotas([...notas, { disciplina: novaDisciplina, n1, n2, mediaFinal, precisaN3, status }])
      } else if (novaN3.trim()) {
        const n3 = parseFloat(novaN3)
        mediaFinal = (n1 + n2 + n3) / 3
        status = mediaFinal >= mediaMinima ? 'Aprovado' : 'Reprovado'
        setNotas([...notas, { disciplina: novaDisciplina, n1, n2, n3, mediaFinal, precisaN3, status }])
      }

      setNovaDisciplina('')
      setNovaN1('')
      setNovaN2('')
      setNovaN3('')
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Minhas Notas</h2>

      {/* Campo para o usuário inserir a média mínima para aprovação */}
      <div className="flex items-center space-x-2">
        <label className="text-gray-700">Média mínima para aprovação:</label>
        <input
          type="number"
          value={mediaAprovacao}
          onChange={(e) => setMediaAprovacao(e.target.value)}
          className="w-20 px-3 py-2 border rounded text-gray-800 bg-white"
          placeholder="Média"
          min="0"
          max="10"
          step="0.1"
        />
      </div>

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
          value={novaN1}
          onChange={(e) => setNovaN1(e.target.value)}
          className="w-20 px-3 py-2 border rounded text-gray-800 bg-white"
          placeholder="Nota N1"
          min="0"
          max="10"
          step="0.1"
        />
        <input
          type="number"
          value={novaN2}
          onChange={(e) => setNovaN2(e.target.value)}
          className="w-20 px-3 py-2 border rounded text-gray-800 bg-white"
          placeholder="Nota N2"
          min="0"
          max="10"
          step="0.1"
        />
        {parseFloat(novaN1) && parseFloat(novaN2) && (parseFloat(novaN1) + parseFloat(novaN2)) / 2 < parseFloat(mediaAprovacao) && (
          <input
            type="number"
            value={novaN3}
            onChange={(e) => setNovaN3(e.target.value)}
            className="w-20 px-3 py-2 border rounded text-gray-800 bg-white"
            placeholder="Nota N3"
            min="0"
            max="10"
            step="0.1"
          />
        )}
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
            <span className="font-semibold">
              N1: {nota.n1.toFixed(1)}, N2: {nota.n2.toFixed(1)}{' '}
              {nota.precisaN3 && nota.n3 !== undefined ? `, N3: ${nota.n3.toFixed(1)}` : ''}
              {' '}| Média Final: {nota.mediaFinal.toFixed(1)} - {nota.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
