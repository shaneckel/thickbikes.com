/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React from 'react'
import { motion } from 'framer-motion'
import { Theme } from './Theme';
import { shadow } from 'styled-system';

const Path = props => (
  <motion.path
    strokeWidth="2"
    stroke={Theme.colors.text}
    {...props}
  />
);

const Burger = ({ open, setOpen, ...props }) => {
  return (
    <motion.nav
      initial={false}
      animate={open ? "open" : "closed"}
      css={css`
        background: ${Theme.colors.background};
        top: -8px;
        position: relative;
        right: -2px;
        height: 52px;
        border-radius: 0px 0px 0px 12px;
      `}
    >
      <svg 
        open={open} 
        onClick={() => setOpen(!open)} {...props} 
        width="30" 
        height="30" 
        viewBox="0 0 30 30"
        style={{
          opacity: 1,
          padding: '16px',
          shadow: 1
      }}>
      <Path
        variants={{
          closed: { d: "M 3 2.5 L 30 2.5" },
          open: { d: "M 4 18.5 L 22 0.5" }
        }}
      />
      <Path
        d="M 3 9.423 L 30 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 3 16.346 L 30 16.346" },
          open: { d: "M 4 0.5 L 22 18.346" }
        }}
      />
      </svg>
    </motion.nav>
  )
}

export default Burger;
