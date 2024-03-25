import React from 'react'
import Link from 'next/link'
const Notfound = () => {
  return (
    <div>
        <h1>404</h1>
        <p>Page not found or it is under maintanence to return back to Home use the below link</p>
        <Link href="/">Home</Link>
    </div>
  )
}

export default Notfound