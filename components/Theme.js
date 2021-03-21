import { css, Global } from '@emotion/react'

const colors = {
  background: "#8c6815",
  text: '#ffffff',
  grey: '#333333',
  yellow: '#F0CC44'
}

const fontSizes = [ 
  '.72em', 
  '.95em', 
  '1em', 
  '1.2em', 
  '1.6em', 
  '1.8em',
  '2em',
  '2.6em',
  '3.2em',
]

export const Breakpoints = [
  '639px',
  '900px',
  '1124px',
  '1480px',
]

export const Theme = {
  Breakpoints,
  colors,
  fontSizes,
  space: [0, 2, 4, 8, 16, 32, 64 ],
  transition: { 
    default: {
      initial: { 
        y: 5, 
        opacity: .5 
      },
      enter: { 
        y: 0, 
        opacity: 1 
      },
      exit: { 
        y: 5, 
        opacity: .5
      }
    }    
  }
}

Breakpoints.sm = Breakpoints[0],
Breakpoints.md = '900px',
Breakpoints.lg = Breakpoints[2],
Breakpoints.xl = Breakpoints[3],
fontSizes.body = fontSizes[3]

export const GlobalStyles = (
  <Global
    styles={css`
      div{
        box-sizing: border-box;
      }
      a{
        color: #8c6815;
      }
      html{
        background: #8c6815;
        height: 100%;
        max-height: 100%;
      }
      img{
        max-width: 100%;
      }
      a{
        text-decoration: none;
      }
      body{
        margin: 0;
        min-height: 100%;
        background: #8c6815;
        font-family: "Ideal Sans A", "Ideal Sans B";
        padding-bottom: 2em;
        background: url('/img/main-back.jpg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        padding-bottom: 2em;
        color: black;
        font-size: 1.2em;
      }
      @media all and (max-width: ${Breakpoints.md}){
        body{
          background-size: cover;
          font-size: 1em;
        }
      }
      p, h2, h3 {
        font-family: 'Rubik', serif;
        font-weight: 400;
      }

      h1, h4 {
        font-family: "Ideal Sans A", "Ideal Sans B";
        color: ${Theme.colors.background}
      }
    `}
  />
)
