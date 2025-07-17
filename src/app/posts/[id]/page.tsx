import { notFound } from 'next/navigation'

type Post = {
	id: number
	title: string
	body: string
}

type Params = {
	params: Promise<{
		id: string
	}>
}

export default async function Page(props: Params) {
	const { id } = await props.params
	await new Promise(resolve => setTimeout(resolve, 2000)) // Имитация задержки загрузки
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		next: { revalidate: 600 }, // Кэширование на 10 минут, ISR (Incremental Static Regeneration)
	})

	if (!res.ok) {
		return notFound()
	}

	const post = await res.json()

	return (
		<div>
			<h1>Информация о посте</h1>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
		</div>
	)
}

// SSG: Генерация статических параметров
export async function generateStaticParams() {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts')

		if (!res.ok) {
			return notFound()
		}

		const posts: Post[] = await res.json()

		return posts.slice().map(post => ({ id: post.id.toString() }))
	} catch (error) {
		console.error('Ошибка при загрузке постов', error)
	}
	return []
}

// Генерация метаданных для страницы поста
// Используется для SEO, заголовок и описание
export async function generateMetadata({ params }: Params) {
	const { id } = await params
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

	if (!res.ok) {
		return {
			title: 'Пост не найден',
			description: 'Такого поста не существует',
		}
	}

	const post: Post = await res.json()
	return {
		title: post.title,
		description: post.body.slice(0, 100), // первые 100 символов
	}
}
