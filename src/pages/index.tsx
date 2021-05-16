import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
// Components
import {
	Layout,
	SEO,
	Bio,
	Skills,
	SocialMedia
} from '../components'

const IndexContainer = styled.section`
	display: flex;
`;

const AvatarWrapper = styled.div`
	width: 100%;
	height: auto;
	margin: auto;

	.gatsby-image-wrapper {
		border-radius: 100%;
		box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
	}
`

export default function IndexPage() {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<Layout>
			<SEO title="Home" />
			<IndexContainer>
				<AvatarWrapper>
					<Img fluid={data.placeholderImage.childImageSharp.fluid} />
				</AvatarWrapper>
				<Skills />
				<Bio />
			</IndexContainer>
			<SocialMedia />
		</Layout>
	)
}