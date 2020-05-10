import * as React from 'react'

const Layout:React.FC = ({children}) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <h3>MySweetSite</h3>
    {children}
  </div>
)

export default Layout