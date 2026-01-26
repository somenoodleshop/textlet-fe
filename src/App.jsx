import { useQuery } from '@tanstack/react-query'

import './App.css'

const { VITE_API_URL: API_URL = '' } = import.meta.env

const get = url => fetch(url).then(response => !response.ok ? Promise.reject(response) : response.json())

const App = () => {
  const query = useQuery({ queryKey: 'comments', queryFn: () => get(`${API_URL}/comments`) })
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello World</h1>
    </div>
  )
}

export default App
