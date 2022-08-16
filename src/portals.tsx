import React, { FC, PropsWithChildren } from 'react'
import { portals } from './state.js'


export type PortalsProps = {
  Wrapper?: ({children}: PropsWithChildren) => any,
}

export const Portals: FC<PortalsProps> = ({ Wrapper = ({ children }: PropsWithChildren) => children }) => {
  return (<>
    {Array.from(portals).map(([index, value], i) => (
      <Wrapper key={index}>{value}</Wrapper>
    ))}
  </>)
}