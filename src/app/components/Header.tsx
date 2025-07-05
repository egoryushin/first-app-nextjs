'use client'
import Link from 'next/link'
import styles from './Header.module.scss'

export function Header() {
	return (
		<header>
			<nav className={styles.nav}>
				<Link href='/'>Главная</Link>
				<Link href='/about'>О нас</Link>
				<Link href='/contact'>Контакты</Link>
			</nav>
		</header>
	)
}
