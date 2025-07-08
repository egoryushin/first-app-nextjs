import Link from 'next/link'

type Posts = {
	id: number
	title: string
}

export default async function PostsPage() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
	const post: Posts[] = await res.json()

	return (
		<div>
			<h1>Список постов</h1>
			<ul>
				{post.slice(0, 10).map(post => (
					<li key={post.id}>
						<Link href={`/posts/${post.id}`}> {post.title} </Link>
					</li>
				))}
			</ul>
		</div>
	)
}
