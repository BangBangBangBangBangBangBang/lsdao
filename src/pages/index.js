import React from 'react'
import Reveal, { Fade } from 'react-awesome-reveal'
import ReactPlayer from 'react-player/lazy'
import { Layout, Seo } from '@global'
import { Container, Title, Button } from '@UI'
import { Twitter, Link } from '@images/icons'
import videoFile from '@videos/lsdaopamp.mp4'
import { keyframes } from '@emotion/react'

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
const IndexPage = () => {
	return (
		<Layout>
			<Seo />
			<Container>
				<ReactPlayer
					url={videoFile}
					width='100%'
					height='100%'
					controls
					fallback={<div style={{ height: '100vh' }} />}
				/>
			</Container>

			<Container section wrapper textCenter>
				<Fade triggerOnce fraction={0.6}>
					<div className='flex'>
						<div className='titleContainer'>
							<Title tag='h1'>LSDao</Title>
						</div>
					</div>
				</Fade>

				<div className='buttonContainer'>
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
			</Container>
		</Layout>
	)
}

export default IndexPage
