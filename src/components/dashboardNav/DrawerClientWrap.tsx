'use client'

import { useState } from 'react'
import Drawer from './Drawer'

function DrawerClientWrap() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>cacaculo</div>
        <div>cacaculo</div>
        <div>cacaculo</div>
        <div>cacaculo</div>
      </Drawer>
      <div className=" absolute top-1 left-1 lg:hidden">
        <div>
          <button onClick={() => setIsOpen(true)}>abrir</button>
        </div>
      </div>
    </>
  )
}

export default DrawerClientWrap
