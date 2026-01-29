const Comments = props => (
  <>
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
