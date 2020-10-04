// is to share common functionality without repete the ConvolverNode.

// import React from "react"

// const UpdateComponent = OriginalComponent => {
//     class NewComponent extends React.Component {
//         render(){
//             return <OriginalComponent/>
//         }
//     }
//     return NewComponent
// }

import React from 'react'

const withCounter = (WrappedComponent, incrementNumber) => {
	class WithCounter extends React.Component {
		constructor(props) {
			super(props)

			this.state = {
				count: 0
			}
		}

		incrementCount = () => {
			this.setState(prevState => {
				return { count: prevState.count + incrementNumber }
			})
		}
    render() {
      console.log('HOC', this.props.name)
			return (
				<WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props.name}
				/>
			)
		}
	}
	return WithCounter
}

export default withCounter