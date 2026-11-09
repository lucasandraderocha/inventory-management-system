import { container} from "../components"
import queryElement from "../utils/queryElements";

export default function render(products) {
    const gridItems = queryElement("#grid-items");

    products.forEach(item => {
        let article = container(item);

        gridItems.appendChild(article);
    });
}