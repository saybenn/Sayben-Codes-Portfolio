import React from 'react'
import Sidebar from '../../components/Sidebar'
import NavBar from '../../components/NavBar'
import { useRouter } from 'next/router'

const Project = () => {
  const router = useRouter()
  const { title } = router.query
  console.log(title)
  return (
    <div>
      <Sidebar />
      <NavBar />
      {title}
    </div>
  )
}

export default Project
