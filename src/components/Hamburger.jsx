import React, { useState } from 'react'


const Hamburger = () => {
    const [open, setOpen] = useState(seconfalse);



  return (
    <div>
        
      <button className='md:hidden text-2xl '
      onClick={()=> setOpen(!open)}
      >
        ☰
      </button>
    </div>
  )
}

export default Hamburger
