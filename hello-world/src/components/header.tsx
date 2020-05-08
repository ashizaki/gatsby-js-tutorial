import * as React from 'react'

type HeaderProps = {
  headerText: string;
}

const Header:React.FC<HeaderProps> = ({headerText}) => (
  <h1>{headerText}</h1>
)

export default Header