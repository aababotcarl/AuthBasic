function formatUSD(stripeAmount){
    return `$${(stripeAmount / 100).toFixed(2)}`;
}

function formatStripeAmount(USDstirng){
    return parseFloat(USDstirng) * 100;
}

module.exports = {
    formatUSD,
    formatStripeAmount
};