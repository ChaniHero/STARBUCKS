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

const badgeE1 = document.querySelector('header .badges');

// console.log(badgeE1);
window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 500){
        //뱃지숨기기
        // badgeE1.style.display = 'none';
        //gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeE1,0.6,{
            opacity:0,
            display:'none'
        });
        gsap.to('to-top',0.5,{
            opacity:0,
            display:'none'
        });

    }else{
        gsap.to('to-top',0.5,{
            opacity:0,
            display:'none'
        });
        //뱃지 나오기
        // badgeE1.style.display = 'block';
        gsap.to(badgeE1,0.6,{
            opacity:1
        });
    }
},300));

window.onload = function(){
    if(window.screenY>500){
        gsap.to("#to-top",0.6,{
            x:0
        });
    }else{
        gsap.to("#to-top",0.6,{
            x:100
        });
    }
};

const fadeEs = document.querySelectorAll('#body_layout .fade-in');

fadeEs.forEach(function(fadeEl,index){
    //console.log(fadeEl);
    //console.log(index);
    gsap.to(fadeEl,1,{
        opacity:1,
        delay: (index+1)*0.7
    });
}); 

//new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container',{
    direction : 'vertical',
    autoplay : true, // 자동 슬라이드
    loof : true // 슬라이드가 끝난 후 처음으로 돌아가기
});

new Swiper('.promotion .swiper-container',{
    slidesPerView : 3,//한번에 보여줄 슬라이드 개수
    spaceBetween : 10, // 슬라이드 사이 여백
    centeredSlides : true, //슬라이드 가운데
    autoplay : {
        delay : 5000
    },
    pagination:{
        el: '.swiper-pagination' , //페이지 번호 요소 선택자
        clickable:true // 사용자의 페이지 번호 제어 요소
    },
    navigation:{
        prevEl:'.swiper-button-prev',
        nextEl:'.swiper-button-next'
    },
    loof : true
});

new Swiper('#awards .swiper-container',{
    autoplay:true,
    loop:true,
    spaceBetween:30,
    slidesPerView:5,
    navigation:{
        prevEl : '#awards .swiper-prev',
        nextEl : '#awards .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
// console.log(promotionEl);
const promotionTogglebtn = document.querySelector('.toggle-promoton');
// console.log(promotionTogglebtn);
let isHidePromotion = false;
// true면 숨기기 false 면 보이기 
console.log(isHidePromotion);
promotionTogglebtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        //숨김처리
        promotionEl.classList.add('hide');
    }else{
        //보임처리
        promotionEl.classList.remove('hide');
    }
});

function random(min,max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector,delay,size){
    //gsap.to(요소,시간,옵션)
    gsap.to(selector,random(1.5,2.5),{
        y:20,
        repeat:-1, //반복
        yoyo:true, // 왔다갔다하는 명령문
        ease : Power1.easeInOut,
        delay: random(0,delay)
    });
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',5,15);
floatingObject('.floating3',1.5,20);

const spyEls = document.querySelectorAll('section.scroll-spy');
//console.log(spyEl);

spyEls.forEach(function(sqlEl){
    new ScrollMagic
    .Scene({
        triggerElement: spyEl, //보여짐 여부를 
        triggerHock: .8
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});

const toTopEl = document.querySelector("#to-top");

toTopEl.addEventListener('click',function(){
    gsap.to(window,0.7,{
        scrollTo:0
    });
});