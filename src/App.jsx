import { useQuery } from '@tanstack/react-query'

import './App.css'

const App = () => {
  const query = useQuery({ queryKey: 'comments', queryFn: () => {} })
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello World</h1>
    </div>
  )
}

export default App
