import React, { createContext, useState } from "react"

const WrapContext = createContext()
const WrapProvider = ({ children }) => {
  const [modal, setModal] = useState("")
  let values = {
    modal,
    setModal
  }
  return <WrapContext.Provider value={values}>{children}</WrapContext.Provider>
}

export default WrapContext
export { WrapProvider }
