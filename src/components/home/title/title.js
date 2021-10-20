import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './title.module.scss'

const Title = ({ children }) => {
	return (
		<div className={styles.flex}>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>{children}</h1>
			</div>
		</div>
	)
}

export default Title

Title.propTypes = {
	children: PropTypes.node.isRequired,
}
