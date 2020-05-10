import * as React from 'react'
declare function require(x: string): any;
const containerStyles = require('./container.module.css');

const Container: React.FC = ({children}) => (
  <div className={containerStyles.container}>{children}</div>
)

export default Container