import React from 'react'
import { Link } from 'gatsby'
import { Layout, Seo } from '@global'
import { Container } from '@UI'

const NotFoundPage = () => {
	return (
		<Layout>
			<Seo title='Not Found' />
			<Container section wrapperSm textBlock textCenter>
				<h1>Page Not Found</h1>
				<p>The page you were looking for does not exist.</p>
				<Link to='/'>Return Home</Link>
			</Container>
		</Layout>
	)
}

export default NotFoundPage
