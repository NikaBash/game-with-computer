const plays = document.querySelector('#myButton');
const audio = document.querySelector('#myAudio');

plays.addEventListener('click', function() {
    if(audio.paused) {
        audio.play();
        plays.classList.toggle('pause');
    }
    else {
        audio.pause();
        plays.classList.toggle("pause");
    }
})

const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener("keypress", function(e){
    if(e.keyCode === 13)
    play()
})

button.addEventListener("click", play);

function play() {
    const userNumber = document.querySelector("#guess").value;
    if(userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Введи число от 1 до 20!',
          })
    }
    else if(isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Нужно ввести число!',
          })
    }
    else {
        if (userNumber < answer) {
            Swal.fire('Попробуй число повыше!',
            'Компютер пока побеждает!')
        }
        else if (userNumber > answer) {
            Swal.fire('Попробуй число пониже!!',
            'Компютер пока побеждает!')
        }
        else {
            Swal.fire({
                title: 'Победа!!!',
                imageUrl: 'photo1.jpg',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Победа',
              })
        }
    }
    input.value = "";
}

gsap.to("#par", {
    text: "Добро пожаловать в игру!",
    duration: 3,
    ease: "power1.in",
})

gsap.to("#par2", {
    text: "Выберите правильный ответ.",
    duration: 4,
    repeat: -1,
    repeatDelay: .1,
    ease: "power1.in",
    yoyo: true
})
