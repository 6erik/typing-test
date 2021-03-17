const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')
const buttonElement = document.getElementById('startButton')


let timerOn = false

quoteInputElement.addEventListener('input', () => {
  
  const arrayQuote = quoteDisplayElement.querySelectorAll('span')
  const arrayValue = quoteInputElement.value.split('')

  let correct = true
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index]

    if (character == null) {
      characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      correct = false
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
    } else {
      characterSpan.classList.remove('correct')
      characterSpan.classList.add('incorrect')
      correct = false
    }
  })

  //if (correct) renderNewQuote()
  if (correct) stopTimer()
})

buttonElement.addEventListener("click", () => {
  console.log("start button pressed - timer started")
  startTimer()
});

body.addEventListener('keyup',function(e){
  if (!timerOn) {
    if (e.keyCode === 13) {
      console.log("enter key pressed - timer started")
      startTimer()
    }
  }
});

async function renderNewQuote() {
  const quote = "public final class HelloWorld {\n" + 
                "public static void main(String[] args) {\n" +
                "System.out.println(\"Hello, World!\")\;\n" +
                "}\n" +
                "}";
  quoteDisplayElement.innerHTML = ''
  quote.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    if (character == "\t") {
      //character = "&#160"
      characterSpan.innerHTML = character
    } else {
      characterSpan.innerText = character
    }
    quoteDisplayElement.appendChild(characterSpan)
  })
  quoteInputElement.value = null
}


let startTime
let counterInterval

function startTimer() {
  counterInterval = setInterval(() => {
    timerElement.innerText = getTimerTime()
  }, 1000)

  timerOn = true
  timerElement.innerText = 0
  startTime = new Date()
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000)
}

function stopTimer() {
  timerOn = false
  clearInterval(counterInterval);
  timerElement.innerText = getTimerTime();
}

renderNewQuote()