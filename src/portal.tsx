import React, { FC, PropsWithChildren, useEffect } from 'react'
import { usePortals } from './use-portals.js'

export type PortalProps = PropsWithChildren & {}

export const Portal: FC<PortalProps> = ({ children }) => {
  const { openPortal, closePortal } = usePortals()
  useEffect(() => {
    const index = openPortal(children)
    return () => closePortal(index)
  }, [children])
  return null
}