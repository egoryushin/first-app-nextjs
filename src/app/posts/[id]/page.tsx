type Post = {
	params: {
		id: string
	}
}

export default async function Page({ params }: Post) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	)
	const post = await res.json()

	if (!res.ok) {
		throw new Error('не удалось загрузить посты')
	}

	return (
		<div>
			<h1>Информация о посте</h1>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
		</div>
	)
}
