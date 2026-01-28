import { useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'

import './App.css'

import Comments from './component/Comments'

const { VITE_API_URL: API_URL = '' } = import.meta.env

const get = url => fetch(url).then(response => !response.ok ? Promise.reject(response) : response.json())

const App = () => {
  const query = useQuery({ queryKey: 'comments', queryFn: () => get(`${API_URL}/comments`) })
  const [comment, setComment] = useState('')
  return (
    <div className='min-h-screen p-8 bg-gray-50'>
      <h1 className='text-3xl font-bold underline mb-6'>Hello World</h1>
      <Comments {...query} />
      <form>
        <input type='text' value={comment} onChange={e => setComment(e.target.value)} />
      </form>
    </div>
  )
}

export default App
