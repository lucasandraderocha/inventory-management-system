import { price, title } from "./";

export function container(item) {
    const container = document.createElement("article");
    container.classList.add("p-2", "flex", "flex-col", "h-48", "justify-between", "ring", "ring-inset", "ring-default", "hover:ring-accent/20", "hover:ring-2", "rounded-xl", "cursor-pointer", "hover:scale-[0.99]", "transition-all");
    let heading = title();
    let priceTag = price(item);
    container.append(heading, priceTag);

    heading.textContent = item.name;

    return container;
}