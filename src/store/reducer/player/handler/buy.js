export default function buyItem(state, payload) {
	return {
		...state,
		gold: state.gold - payload.price,
		inventory: [...state.inventory, payload],
	};
}
