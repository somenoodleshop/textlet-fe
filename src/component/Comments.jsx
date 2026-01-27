const Comments = props => (
  <>
    { props.isLoading && (
      <div className='flex items-center gap-2 text-gray-600'>
        <div className='w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin' />
        <p className='text-lg'>Loading...</p>
      </div>
    ) }
    { props.isError && (
      <div className='p-4 bg-red-50 border border-red-200 rounded-lg'>
        <p className='text-red-800 font-semibold'>Error</p>
        <p className='text-red-600 mt-1'>{ props.error.message }</p>
      </div>
    ) }
    { props.isSuccess && (
      <div className='space-y-3'>
        { props.data.map(comment => (
          <div key={comment.id} className='p-4 bg-white rounded-lg shadow-sm border border-gray-200'>
            <p className='text-gray-800'>{ comment.text }</p>
          </div>
        )) }
      </div>
    ) }
  </>
)

export default Comments
