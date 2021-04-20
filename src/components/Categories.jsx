import React from 'react'

class Categories extends React.Component {
	state = {
		activeItem: 3,
	}

	onSelectItem = (index) => {
		this.setState({
			activeItem: index,
		})
	}

	render() {
		const { items, onClickItem } = this.props
		console.log(this.state)
		return (
			<div className='categories'>
				<ul>
					<li>Все</li>
					{items.map((name, index) => (
						<li
							className={this.state.activeItem === index ? 'active' : ''}
							onClick={() => this.onSelectItem(index)}
							key={`${name}_${index}`}>
							{name}
						</li>
					))}
				</ul>
			</div>
		)
	}
}

// function Categories({ items }) {
// 	return (
// 		<div className='categories'>
// 			<ul>
// 				<li>Все</li>
// 				{items.map((name, index) => (
// 					<li onClick={() => onClickItem(name)} key={`${name}_${index}`}>
// 						{name}
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	)
// }

export default Categories
