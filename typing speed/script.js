const random_quote_api = 'http://api.quotable.io/random';
const displayquote= document.getElementById('quoteDisplay');
const quoteInput = document.getElementById('quoteInput');
quoteInput.innerText = '';

function getquote() {
    return fetch(random_quote_api)
    .then(response => response.json())
    .then(data => data.content)

}
async function renderquote(){
    const quote = await getquote();
    displayquote.innerText = quote;
    quote.split('').forEach(char => {
        const charspan = document.createElement('span');
        charspan.innerText = char;

        
    });
    quoteInput.innerText = '';

}
renderquote();

