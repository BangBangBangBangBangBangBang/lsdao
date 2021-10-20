import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as styles from './button.module.scss'

const Button = ({ href, twitter, children }) => {
	const classes = classnames(twitter && styles.twitter, styles.button)

	return (
		<a href={href} className={classes} target='_blank' rel='noreferrer'>
			{children}
		</a>
	)
}

export default Button

Button.propTypes = {
	href: PropTypes.string,
	twitter: PropTypes.bool,
	children: PropTypes.node.isRequired,
}
