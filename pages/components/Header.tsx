import { NextComponentType } from 'next'
import Link from 'next/link'
import styles from './Header.module.scss'

const Header: NextComponentType = () => {
  return (
    <header className={ styles.container }>
      <li className={ styles.logoStart }>   
        <Link href="/">
          <a>  
            _D.<span className={ styles.logoEnd }>io</span>
          </a>
        </Link>
      </li>
      <ul className={ styles.menu }>
        <li>Chi siamo</li>   
        <li>Cosa facciamo</li>  
        <li>Lavora con noi</li>  
        <li>Contatti</li>  
      </ul>  
    </header>
  )  
}

export default Header