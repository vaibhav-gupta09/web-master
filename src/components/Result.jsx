import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../context/DataProvider'
import {Box, styled} from '@mui/material'

const Container = styled(Box)`
 height: 37vh;
`

const Result = () => {
  const [src, setSrc] = useState('')
  const {html, css, js} = useContext(DataContext);
  const srcCode = `
    <html>
       <body>${html} </body>
       <style>${css} </style>
       <script> ${js}</script> 
    </html>
  `
  useEffect(()=>{
    const time = setTimeout(()=>{
        setSrc(srcCode);
    }, 1000)

    return ()=> clearTimeout(time);
  }, [html, css, js])
  return (
    <Container>
       <iframe
         srcDoc = {src}
         title = "Output"
         sandbox='allow-scripts'
         width="100%"
         frameBorder={0}
         height="100%"
       />
    </Container>
  )
}

export default Result