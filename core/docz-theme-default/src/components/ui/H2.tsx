import * as React from 'react'
import { SFC } from 'react'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import Hash from 'react-feather/dist/icons/hash'
import { Link } from 'docz'

import { get } from '@utils/theme'
import { mq } from '@styles/responsive'

const Icon = styled(Hash)`
  position: absolute;
  display: inline-block;
  top: 11px;
  left: -28px;
  opacity: 0;
  transition: opacity 0.2s;
  color: ${get('colors.primary')};
`

const Heading = styled('h2')`
  position: relative;
  border-bottom: 1px dashed ${get('colors.border')};
  padding-bottom: 5px;
  ${p => mq(get('styles.h2')(p))};

  &:hover .heading--Icon {
    opacity: 1;
  }
`

export const H2: SFC<React.HTMLAttributes<any>> = ({ children, ...props }) => (
  <Heading {...props}>
    <Link aria-hidden to={{ hash: `#${props.id}` }}>
      <Icon className="heading--Icon" height={20} />
    </Link>
    {children}
  </Heading>
)