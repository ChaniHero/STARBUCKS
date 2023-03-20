const serchE1 = document.querySelector('.serch_bar');
const serchInputE1 = serchE1.querySelector('input');
console.log(serchE1);
console.log(serchInputE1);

serchE1.addEventListener('click', function(){
    serchInputE1.focus();
});

serchInputE1.addEventListener('focus',function(){
    serchE1.classList.add('focused');
    serchInputE1.setAttribute('placeholder','Serch Keyword')
});

serchInputE1.addEventListener('blur',function(){
    serchE1.classList.remove('focused');
    serchInputE1.setAttribute('placeholder','')
});