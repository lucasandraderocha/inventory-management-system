const goldEnough = (state, payload) => state.gold >= payload.price ? state.gold - payload.price : state.gold;

const weightEnough = (state, payload) => max < state.capacity.weight + payload.weight ? state.capacity.weight + payload.weight : state.capacity.weight

export default function buyItem(state, payload) {
	return {
		...state,
		gold: goldEnough(state, payload),
		capacity: {
			...state.capacity,
			weight: weightEnough(state, payload),
		},
		inventory: [...state.inventory, payload],
	};
}
