import React from 'react'
import { UserContext, DropdownList } from './index'


const DropdownList = () => {
  const allSanityWork = useContext(UserContext)

  return (
    <>
      {allSanityWork.edges.map(({ node: work }) => (
        <li key={work.slug.current}>
          <Link to={`/${work.slug.current}`}>
            {work.title}
          </Link>
        </li>
      ))}
    </>
  )
}

export default DropdownList
