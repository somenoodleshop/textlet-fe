import { useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'

import './App.css'

import Comments from './component/Comments'

const { VITE_API_URL: API_URL = '' } = import.meta.env

const onSuccess = response =>
  !response.ok ? Promise.reject(response) : response.json()

const get = url => fetch(url).then(onSuccess)
const post = url => data => fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(onSuccess)

const handleSubmit = props => e => {
  e.preventDefault()
  props.mutation.mutate({ text: props.comment })
  props.setComment('')
}

const App = () => {
  const query = useQuery({ queryKey: ['comments'], queryFn: () => get(`${API_URL}/comments`), retry: false })
  const mutation = useMutation({ mutationFn: comment => post(`${API_URL}/comments`, comment) })
  const [comment, setComment] = useState('')
  return (
    <div className='min-h-screen p-8'>
      <h1 className='text-3xl font-bold underline mb-6'>Hello World</h1>
      <Comments {...query} />
      <form onSubmit={handleSubmit({ comment, mutation, setComment })}>
        <input type='text' value={comment} onChange={e => setComment(e.target.value)} />
      </form>
    </div>
  )
}

export default App
