var noOfButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < noOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        onHover(this.innerHTML);
    });
}

document.addEventListener('keydown', function (event) {
    makeSound(event.key)
    onHover(event.key)
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('./assets/sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio('./assets/sounds/tom-2.mp3');
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio('./assets/sounds/tom-3.mp3');
            tom3.play();
            break;
        
        case "d":
            var snare = new Audio('./assets/sounds/snare.mp3');
            snare.play();
            break;
        
        case "j":
            var crash = new Audio('./assets/sounds/crash.mp3');
            crash.play();
            break;
        
        case "k":
            var kickBass = new Audio('./assets/sounds/kick-bass.mp3');
            kickBass.play();
            break;
        
        case "l":
            var kickBass1 = new Audio('./assets/sounds/kick-bass.mp3');
            kickBass1.play();
            break;   
        default:
            console.log("Unexpected key");
            break;
    }
}

function onHover(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
}



