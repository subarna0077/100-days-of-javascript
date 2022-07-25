const quote = document.querySelector('.quote'),
quotebtn = document.querySelector('button');
const author = document.querySelector('.name');
sound = document.querySelector('.sound');
copy = document.querySelector('.copy');
sound = document.querySelector('.sound');

const api = 'https:/api.quotable.io/random';
function randomquote(){
    quotebtn.classList.add('loading');
    quotebtn.innerText = 'loading Quote...';
    fetch(api).then(res => res.json()).then(val =>{
        quote.textContent = val.content;
        author.textContent = val.author;
        console.log(val);
        quotebtn.innerText = 'New Quote';
        quotebtn.classList.remove('loading')

        

    } );
}

sound.addEventListener('click',() => {
    let voicee = new SpeechSynthesisUtterance(`${quote.textContent} by ${author.textContent} `);
    speechSynthesis.speak(voicee);
})

copy.addEventListener('click',() => {
    navigator.clipboard.writeText(quote.textContent);
})

quotebtn.addEventListener('click', randomquote);