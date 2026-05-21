
interface PageProps {
  params:{
    id:string
  }
}


const page =({params}:PageProps) => {
  const {id}=params
  return (
    <div>
      this is my product:{id}
    </div>
  )
}

export default page
