import React, { useEffect, useState } from 'react'


const CustomProgress = () => {
  const [width,setWidth]= useState(1)



  return (
    <div>
     <div className='progress-container' >
<div className='progress' style={{width: `${width}%`}} >
</div>
     </div>


     <input
      type="number"
     value={width}
     onChange={(e)=> {

setWidth(e.target.value)

     }}
     />
    </div>
  )
}

export default CustomProgress
