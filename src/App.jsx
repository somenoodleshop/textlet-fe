import { useQuery } from '@tanstack/react-query'

import './App.css'

import Comments from './component/Comments'

const { VITE_API_URL: API_URL = '' } = import.meta.env

const get = url => fetch(url).then(response => !response.ok ? Promise.reject(response) : response.json())

const App = () => {
  const query = useQuery({ queryKey: 'comments', queryFn: () => get(`${API_URL}/comments`) })
  return (
    <div className='min-h-screen p-8 bg-gray-50'>
      <h1 className='text-3xl font-bold underline mb-6'>Hello World</h1>
      <Comments {...query} />
      { query.isLoading && (
        <div className='flex items-center gap-2 text-gray-600'>
          <div className='w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin' />
          <p className='text-lg'>Loading...</p>
        </div>
      ) }
      { query.isError && (
        <div className='p-4 bg-red-50 border border-red-200 rounded-lg'>
          <p className='text-red-800 font-semibold'>Error</p>
          <p className='text-red-600 mt-1'>{query.error.message}</p>
        </div>
      ) }
      { query.isSuccess && (
        <div className='space-y-3'>
          { query.data.map(comment => (
            <div key={comment.id} className='p-4 bg-white rounded-lg shadow-sm border border-gray-200'>
              <p className='text-gray-800'>{comment.content}</p>
            </div>
          )) }
        </div>
      ) }
    </div>
  )
}

export default App
