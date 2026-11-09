export const SHOP_BUY = "BUY";
export const SHOP_SELL = "SELL";

export const actionShopBuy = (type = SHOP_BUY, payload) => ({ type, payload })
export const actionShopSell = (type = SHOP_SELL, payload) => ({ type, payload })
