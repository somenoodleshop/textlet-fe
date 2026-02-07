import { useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'

import './App.css'

import data from './util/data.json'
import { get, post } from './util/request'

import Comments from './component/Comments'

const { VITE_API_URL: API_URL = '' } = import.meta.env

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
      <Comments {...{ ...query, data }} />
      <form onSubmit={handleSubmit({ comment, mutation, setComment })} className='mt-8'>
        <input
          type='text'
          placeholder='Write a comment...'
          value={comment}
          onChange={e => setComment(e.target.value)}
          className='w-full px-5 py-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:bg-white/15 focus:border-white/40 focus:shadow-lg focus:shadow-white/5'
        />
      </form>
    </div>
  )
}

export default App
