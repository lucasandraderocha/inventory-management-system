/**
 * 
 * @param {number} obj 
 * @returns {HTMLSpanElement}
 */
export function price(obj) {
    let price = document.createElement("span");
    price.classList.add("flex", "flex-row", "p-0.5", "rounded-lg", "w-fit", "pr-1", "gap-1", "items-center", "bg-primary/15");
    let priceText = obj.price;

    let priceIcon = document.createElement("i");
    priceIcon.classList.add("ph-fill", "ph-coins");

    let priceIconContainer = document.createElement("div");
    priceIconContainer.classList.add("flex", "p-1", "rounded-md", "justify-center", "items-center", "bg-primary/15");

    priceIconContainer.appendChild(priceIcon);
    price.append(priceIconContainer, priceText);

    return price
}