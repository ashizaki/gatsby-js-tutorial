import * as React from "react"
import Container from "../components/container"
const styles = require('./about-css-modules.module.css');
console.log(styles)

type UserProps = {
  avatar: string
  username: string;
  excerpt: string;
}

const User:React.FC<UserProps> = ({avatar, username, excerpt}) => (
  <div className={styles.user}>
    <img src={avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{username}</h2>
      <p className={styles.excerpt}>{excerpt}</p>
    </div>
  </div>
)

const AboutCssModulePage = () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
)

export default AboutCssModulePage