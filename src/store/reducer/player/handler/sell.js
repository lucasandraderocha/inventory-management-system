export default function sellItem(state, payload) {
	return {
		...state,
		gold: state.gold + payload.price * 0.5,
		capacity: {
			...state.capacity,
			weight: state.capacity.weight - payload.weight
		},
		inventory: state.inventory.filter((item) => item.id !== payload.id),
	};
}
