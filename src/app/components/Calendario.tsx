'use client'

import { useState } from 'react'

interface Evento {
  id: number
  data: Date
  titulo: string
}

export default function Calendario() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [eventos, setEventos] = useState<Evento[]>([])
  const [novoEvento, setNovoEvento] = useState('')

  const diasNoMes = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const primeiroDiaDaSemana = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ]

  const adicionarEvento = (dia: number) => {
    if (novoEvento.trim()) {
      const novaData = new Date(currentDate.getFullYear(), currentDate.getMonth(), dia)
      setEventos([...eventos, { id: Date.now(), data: novaData, titulo: novoEvento }])
      setNovoEvento('')
    }
  }

  const mudarMes = (offset: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1))
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl text-black">
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => mudarMes(-1)} className="text-blue-500 hover:text-blue-700">
            &lt; Anterior
          </button>
          <h2 className="text-xl font-bold text-gray-900">
            {meses[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button onClick={() => mudarMes(1)} className="text-blue-500 hover:text-blue-700">
            Próximo &gt;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {diasDaSemana.map(dia => (
            <div key={dia} className="text-center font-bold text-gray-600">
              {dia}
            </div>
          ))}
          {Array.from({ length: primeiroDiaDaSemana }).map((_, index) => (
            <div key={`empty-${index}`} className="text-center p-2"></div>
          ))}
          {Array.from({ length: diasNoMes }).map((_, index) => {
            const dia = index + 1
            const dataAtual = new Date(currentDate.getFullYear(), currentDate.getMonth(), dia)
            const eventosNoDia = eventos.filter(evento => 
              evento.data.toDateString() === dataAtual.toDateString()
            )
            return (
              <div key={dia} className="text-center p-2 border rounded hover:bg-gray-100">
                <div className="font-semibold">{dia}</div>
                {eventosNoDia.map(evento => (
                  <div key={evento.id} className="text-xs text-blue-600 truncate">
                    {evento.titulo}
                  </div>
                ))}
                <button
                  onClick={() => adicionarEvento(dia)}
                  className="mt-1 text-xs text-gray-600 hover:text-blue-600"
                >
                  +
                </button>
              </div>
            )
          })}
        </div>
        <div className="mt-4">
          <input
            type="text"
            value={novoEvento}
            onChange={(e) => setNovoEvento(e.target.value)}
            placeholder="Novo evento"
            className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  )
}