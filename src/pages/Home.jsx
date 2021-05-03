import { Categories, SortPopup, PizzaBlock } from '../components'

import { useSelector } from 'react-redux'

function Home() {
	const { items } = useSelector(({ pizzas }) => {
		return {
			items: pizzas.items,
		}
	})

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories items={['Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые']} />
				<SortPopup
					items={[
						{ name: 'Популярности', type: 'popular' },
						{ name: 'Цене', type: 'price' },
						{ name: 'Алфавиту', type: 'alphabet' },
					]}
				/>
			</div>
			<h2 className='content__title'>Все пиццы</h2>

			<div className='content__items'>
				{items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
			</div>
		</div>
	)
}

export default Home
