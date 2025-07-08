'use client'
import Link from 'next/link'
import styles from './Header.module.scss'

export function Header() {
	return (
		<header>
			<nav className={styles.nav}>
				<Link className={styles.navLink} href='/'>
					Главная
				</Link>
				<Link className={styles.navLink} href='/about'>
					О нас
				</Link>
				<Link className={styles.navLink} href='/contact'>
					Контакты
				</Link>
				<Link className={styles.navLink} href='/posts'>
					Посты
				</Link>
			</nav>
		</header>
	)
}
