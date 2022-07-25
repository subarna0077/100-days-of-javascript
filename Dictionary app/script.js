const wrapper = document.querySelector('.wrapper'),
results = wrapper.querySelector('.result-wrapper'),
searchInput = wrapper.querySelector('input'),
info_msg = wrapper.querySelector('.msg'),
text = wrapper.querySelector('.input_text span'),
adj = wrapper.querySelector('.input_text .adj'),
meaning = wrapper.querySelector('.mean')
;

let inputVal;
searchInput.addEventListener('keyup', e => {
    if(e.target.value){
        document.querySelector('.cross').style.display = 'block';
    }
    else{
        document.querySelector('.cross').style.display = 'none'
    }   
    if(e.key === 'Enter' && e.target.value){
       inputVal = e.target.value;
     fetchapi(inputVal);
     
    }
})

function fetchapi(word) { 
     info_msg.style.color = '#000';
     info_msg.style = '#000';
    info_msg.innerText = `Searching the meaning of ${word}`;
     let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then(res => res.json())
    .then(result => data(result,word));
    
   
        // console.log(data[0]);
        // text.textContent = data[0].word;
        // adj.textContent = data[0].word.phonetics[1].text;
        // meaning.textContent = data[0].meanings[0].definitions[0].definition
}

function data (result,word) {
     if(result.title){
        info_msg.innerText = `Can't find the result of ${word}.Please try with another word`;
     }else{
        let definitions = result[0].meanings[0];

        console.log(result);
        results.classList.add('active');
        text.textContent = word;
        document.querySelector(".mean").innerText = definitions.definitions[0].definition;
        adj.textContent = definitions.partOfSpeech;
        for(let i=0;i< 5;i++){
            let tag = `<span>${definitions.synonyms[i]},</span>`;
            document.querySelector(".syno").insertAdjacentHTML('beforebegin',tag);
        }
       

     }
}

document.querySelector('.cross').addEventListener('click',e =>{
    results.classList.remove('active');
    info_msg.textContent =   'Type a word and press enter to get meaning, example, prounciation, and synonyms of the typed word';
    searchInput.value='';
    document.querySelector('.cross').style.display = 'none'


})
document.addEventListener('click',e=>{
    console.log(e.target)
    
     if (!wrapper.contains(e.target)){
       results.style.display = 'none';
     }

})