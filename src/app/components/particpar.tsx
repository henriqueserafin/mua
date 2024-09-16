'use client'

import { useState } from 'react'

export default function Participar() {
  const router = useRouter()
  const { id } = router.query // Aqui você pega o ID da comunidade da URL

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Participar da Comunidade</h1>
      <p>Você está participando da comunidade com ID: {id}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => router.push('/comunidades')} // Volta para a página de comunidades
      >
        Voltar para Comunidades
      </button>
    </div>
  )
}
