import React from 'react'
import styled from 'styled-components'


const DropdownHousing = ({ children }) => {
  return (
    <S.DropdownHousing>
      <S.DropdownList children={children} />
    </S.DropdownHousing>
  )
}

const S = {
  DropdownHousing: styled.div`
  
  `,
  DropdownList: styled.ul`

  `
}


export default DropdownHousing
