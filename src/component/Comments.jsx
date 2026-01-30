const Comments = props => (
  <>
    { props.isError && (
      <div className='p-4 bg-red-500/10 backdrop-blur-md border border-red-400/30 rounded-2xl'>
        <p className='text-red-300 font-semibold'>Error</p>
        <p className='text-red-200/80 mt-1'>{ props.error.message }</p>
      </div>
    ) }
    { props.isSuccess && (
      <div className='space-y-3'>
        { props.data.map(comment => (
          <div key={comment.id} className='p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-300 hover:bg-white/15'>
            <p className='text-white/90'>{ comment.text }</p>
          </div>
        )) }
      </div>
    ) }
  </>
)

export default Comments
