import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [status, setStatus] = useState('Carregando...')
  const [mensagem, setMensagem] = useState('')

  useEffect(() => {
    async function buscarStatus() {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/status'
        )

        setStatus(response.data.status)
        setMensagem(response.data.mensagem)
      } catch (error) {
        setStatus('erro')
        setMensagem('Não foi possível conectar ao backend')
        console.error(error)
      }
    }

    buscarStatus()
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial',
        gap: '20px',
      }}
    >
      <h1>e-Saúde</h1>

      <div
        style={{
          padding: '20px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          minWidth: '300px',
          textAlign: 'center',
        }}
      >
        <h2>Status da API:</h2>

        <p>
          <strong>{status}</strong>
        </p>

        <p>{mensagem}</p>
      </div>
    </div>
  )
}

export default App