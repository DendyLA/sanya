/* https://greensock.com/gsap */
TweenLite.set("#petals", { perspective:600 })
TweenLite.set("img", { xPercent:"-50%", yPercent:"-50%" })


alert('P.S.:  Незнаю зачем это я сделал но наверное творческое я хочет как то так выразить восхищение и любовь к тебе, аааа незнаю как выразить может кринжово может нет но вот я сделал это, нажми просто ок и читай')
var total = 50;
var warp = document.getElementById("petals"),
    w = window.innerWidth,
    h = window.innerHeight;

for (i = 0; i < total; i++) {
    var Div = document.createElement('div');
    TweenLite.set(Div, { attr: { class:'dot' }, x:R(0,w), y:R(-200,-150), z:R(-200,200)});
    warp.appendChild(Div);
    animm(Div);
}


function animm(elm) {
    TweenMax.to(elm,R(6,15), { y:h+100, ease:Linear.easeNone, repeat:-1, delay:-15 });
    TweenMax.to(elm,R(4,8), { x:'+=100', rotationZ:R(0,180), repeat:-1, yoyo:true, ease:Sine.easeInOut });
    TweenMax.to(elm,R(2,8), { rotationX:R(0,360), rotationY:R(0,360), repeat:-1, yoyo:true, ease:Sine.easeInOut, delay:-5 });
};

function R(min,max) { return min+Math.random() * (max-min) };


/* https://mattboldt.com/typed.js/ */
var typed = new Typed('#text', {
    strings: ['Приём Приём, трудно выражать эмоции но я могу сказать одно: Ты стала дорогим мне человеком, нооо..., Каким приворотом надо пользоваться чтобы делать так что человек который не говорит никакие нежности людям вдруг изменился и начал говорить и чувствовать. хаха. Ну секретов не надо расскрывать главное я рад этому, так как я впервые чтото необычное чувствую. Странное тепло в груди и странные переживания, всё в новинку. Такое ощущение что я ребенок который познает себя.  коротко: проводить время с тобой самое лучшее что у меня есть на данный момент и я офигиваю что реально люблю Саню (О_о). Мировозрение, вкусы, комфорт, взгляд, щеки угадай что их объединяет? это ты, и часть того что прекрасно в тебе. Незнаю что будет через месяц, два или год но знаю что  в эти минуты и дни хочу быть с тобой Всьоооо отключаюсь а то от кринжа и смущения расстаю. Еще и сакуры, хотя искал теннисные мячи'],
    startDelay: 2000,
    typeSpeed: 40,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    showCursor: false,
    onComplete: function() {
        var author = document.getElementById("author");
        author.style.opacity = 1;
    }
});
