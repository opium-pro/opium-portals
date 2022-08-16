import React, { FC, PropsWithChildren } from 'react'
import { PortalsContext } from './use-portals.js'
import { Portals } from './portals.js'
import { useForceUpdate } from './utils/use-force-update.js'
import { portals } from './state.js'


let id = 0

export type PortalsProviderProps = PropsWithChildren & {
  Wrapper?: any,
}

export const PortalsProvider: FC<PortalsProviderProps> = ({ children, Wrapper }) => {
  const [update] = useForceUpdate()

  function closePortal(index: number) {
    portals.delete(index)
    update()
  }

  function openPortal(value: any) {
    const index = id++
    portals.set(index, value)
    update()
    return index
  }

  return (
    <PortalsContext.Provider
      value={{
        portals,
        openPortal,
        closePortal,
        update,
      }}
    >
      {children}
      <Portals Wrapper={Wrapper} />
    </PortalsContext.Provider>
  )
}