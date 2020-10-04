
import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class ComponentF extends Component {
	render() {
		return (
			<UserConsumer>
				{username => {
					return <div>Hello {username}</div>
				}}
			</UserConsumer>
		)
	}
}

export default ComponentF

//context provides a way that we can pass the data through the component tree without having to pass props down manually at every level.