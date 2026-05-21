'use client'
import {useEffect} from "react";


interface ErrorProps{
error:Error&{digest?:string}
reset:()=>void

}

export default function Error({error,reset}:ErrorProps) {
useEffect(()=>{
  console.log(error)
},[error])


  return (
<div>

<h1>somethign happened !</h1>
      <button onClick={() => reset()}>Try Again</button>

</div>

  )
}












