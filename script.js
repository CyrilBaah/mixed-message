const messages = [
    ['Love For All, Hatred For None'],
    ['Change the world by being yourself.'],
    ['Every moment is a fresh beginning.'],
    ['Never regret anything that made you smile.'],
    ['Die with memories, not dreams.'],
    ['Aspire to inspire before we expire.']
]

let inspirationalMessage = () => {
    let randomNumber = Math.floor(Math.random() * messages.length);
    console.log(`Inspirational Message: ${messages[randomNumber]}`);
}

inspirationalMessage();