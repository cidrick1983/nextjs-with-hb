'use client'

import { useEffect } from 'react'

function Error({ error, reset }) {
  useEffect(() => {
    console.log(error)
  }, [error])
  return (
    <div>
      <h2 className='text-red-400 text-sm'>Something went wrong</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  )
}

export default Error
