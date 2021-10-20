import React from 'react'
import Reveal from 'react-awesome-reveal'
import { Twitter, Link } from '@images/icons'
import { Button } from '@UI'
import { keyframes } from '@emotion/react'
import * as styles from './buttons.module.scss'

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Buttons = () => {
	return (
		<div className={styles.buttonContainer}>
			<Reveal keyframes={customAnimation} triggerOnce>
				<Button href='https://twitter.com/lovesocietydao' twitter>
					<span>
						<Twitter />
					</span>
					Twitter
				</Button>
			</Reveal>

			<Reveal keyframes={customAnimation} delay={300} triggerOnce>
				<Button href='https://haveaniceday.wtf/'>
					<span>
						<Link />
					</span>
					Haveaniceday.wtf
				</Button>
			</Reveal>
		</div>
	)
}

export default Buttons
