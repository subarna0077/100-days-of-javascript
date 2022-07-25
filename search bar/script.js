const wrapper = document.querySelector('.search-input');
const inputbox = wrapper.querySelector('input');
const suggbox = wrapper.querySelector('.autocom-box');


inputbox.addEventListener('keyup', e => {
    let userdata = e.target.value;
    let emptyarray = [];
    if(userdata){
        emptyarray = suggestion.filter((data)=> {
            return data.toLocaleLowerCase().startsWith(userdata.toLocaleLowerCase());
        });
        emptyarray = emptyarray.map((data) => {
            return data = `<li>${data}</li>`;
        });
    console.log(emptyarray);
    wrapper.classList.add('active');
    showSuggestions(emptyarray);
    let allList = suggbox.querySelectorAll('li'); 
    for(let i =0; i< allList.length; i++){
        allList[i].setAttribute('onclick','select(this)');
    }
    } 
    else{
        wrapper.classList.remove('active');

    }

});

function select(element){
    let selectUserdata = element.textContent;
    inputbox.value = selectUserdata;
    wrapper.classList.remove('active'); 
}

function showSuggestions(list){
    let listdata;
    if(!list.length){
        userval = inputbox.value;
        listdata = `<li>${userval}</li>`;
    }else{
        listdata = list.join('');
        
    }
    suggbox.innerHTML = listdata;
}