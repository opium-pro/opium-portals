import React, { FC } from 'react'
import { Portal } from './portal.js'

export type WithPortalProps = {
  inPortal?: boolean
}

export type WithPortal<Props = WithPortalProps> = FC<Props & WithPortalProps>

export function withPortal(Compoenent, defaultProps: WithPortalProps = {}) {
  return function (props) {
    const { inPortal, ...rest } = Object.assign(defaultProps, props)
    return inPortal ? <Portal><Compoenent {...rest} inPortal={inPortal} /></Portal> : <Compoenent {...rest} inPortal={inPortal} />
  }
}