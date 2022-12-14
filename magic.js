let output = document.getElementById("output");

document.getElementById("btn").addEventListener("click", calcAns);

function calcAns (){
let input = document.getElementById("qin").value.toLowerCase();    
    let ans = Math.random();
    if (input === "star treatment" || input === "blade runner") {
        output.innerHTML = "What do you mean you've never seen Blade Runner?"
    } else if (input === "r u mine" || input === "are you mine") {
        output.innerHTML = "*nick o'malley riff*"
    } else if (input === "do you love me") {
        output.innerHTML = "get help"
    } else if (input === "james mcavoy") {
        let num = Math.random()
        if (num < .1) {
        output.innerHTML = "STRACCIATELLA <i>WITH A FLAKE INNIT</i>"            
        } else if (num < 0.2 ) {
        output.innerHTML = "...it feels a bit wet..."              
        } else if (num < .3) {
        output.innerHTML = "I wear it because my calves are shredded."
        } else if (num < .4) {
        output.innerHTML = "the professor is dead."
        } else if (num < .5) {
        output.innerHTML = "Can we fire her? Can we get her fired? No?"
        } else if (num < .6) {
        output.innerHTML = "I'm just thrilled I'm in a film."
        } else if (num < .7) {
        output.innerHTML = "Take care--WHOOoo I dropped my phone!...Aaand I dropped my phone."
        } else if (num < .8) {
        output.innerHTML = "And the Oscar goes to Bohemian Rhapsody!"
        } else if (num < .9) {
        output.innerHTML = "but you know, darling, my face is my fortune."
        } else {
        output.innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"    
        }
    } else if (input === "what's a flake" || input === "what is a flake") {
        output.innerHTML = "what is a--'WHAT IS A FLAKE?'"
    } else if (input === "do you miss playing charles xavier" || input === "are you in doctor strange 2") {
        output.innerHTML = "uh, NO. next question..."
    } else if (input === "") {
        output.innerHTML = "ask a question, buddy"
    } else if (ans < 0.05) {
        output.innerHTML = "It is certain."
    } else if (ans < 0.1) {
        output.innerHTML = "It is decidedly so."
    } else if (ans < 0.15) {
        output.innerHTML = "Without a doubt."
    } else if (ans < 0.2) {
        output.innerHTML = "Yes definitely."
    } else if (ans < 0.25) {
        output.innerHTML = "You may rely on it."
    } else if (ans < 0.3) {
        output.innerHTML = "As I see it, yes."
    } else if (ans < 0.35) {
        output.innerHTML = "Most likely."
    } else if (ans < 0.4) {
        output.innerHTML = "Outlook good."
    } else if (ans < 0.45) {
        output.innerHTML = "Yes."
    } else if (ans < 0.5) {
        output.innerHTML = "Signs point to yes."
    } else if (ans < 0.55) {
        output.innerHTML = "Reply hazy, try again."
    } else if (ans < 0.6) {
        output.innerHTML = "Ask again later."
    } else if (ans < 0.65) {
        output.innerHTML = "Better not tell you now."
    } else if (ans < 0.7) {
        output.innerHTML = "Cannot predict now."
    } else if (ans < 0.75) {
        output.innerHTML = "Concentrate and ask again."
    } else if (ans < 0.8) {
        output.innerHTML = "Don't count on it."
    } else if (ans < 0.85) {
        output.innerHTML = "My reply is no."
    } else if (ans < 0.9) {
        output.innerHTML = "My sources say no."
    } else if (ans < 0.95) {
        output.innerHTML = "Outlook not so good."
    } else {
        output.innerHTML = "Very doubtful."
    }
}