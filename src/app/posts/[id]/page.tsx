import { notFound } from 'next/navigation'

type Post = {
	id: number
	title: string
	body: string
}

type Params = {
	params: {
		id: string
	}
}

export default async function Page({ params }: Params) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	)

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
