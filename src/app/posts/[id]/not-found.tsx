import Link from 'next/link'

export default function NotFound() {
	return (
		<div>
			<h1>404 - пост не найден</h1>
			<p>
				Проверь, правильно ли указан адрес или вернись на{' '}
				<Link href='/posts'>список постов</Link>.
			</p>
		</div>
	)
}
