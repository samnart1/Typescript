export const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-GH", {
        style: "currency",
        currency: "GHS",
    }).format(amount);
};

export const formatPriceCalculation = (quantity: number, price: number) => {
    return (Number(quantity) * Number(price)).toFixed(2);
};
