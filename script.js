const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteContainerElement = document.getElementById('quoteContainer')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('info')
const buttonElement = document.getElementById('startButton')
const inputElement = document.getElementById("quoteInput")

inputElement.disabled = true
let timerOn = false

timerElement.innerText = "time: -- / wpm: --"

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

  if (correct) stopTimer()
})

buttonElement.addEventListener("click", () => {
  if (!timerOn) {
    console.log("start button pressed - timer started")
    renderNewQuote()
    inputElement.disabled = false
    inputElement.focus()
    startTimer()
  } else {
    console.log("start button pressed while game already started")
  }
});


quoteContainerElement.addEventListener("click", () => {
  if (timerOn) {

    inputElement.focus()
  }
});

let typedChars
body.addEventListener('keyup',function(e){
  if (!timerOn) {
    if (e.keyCode === 13) {
      console.log("enter key pressed - timer started")
      renderNewQuote()
      inputElement.disabled = false
      inputElement.focus()
      startTimer()
    }
  } else {
    typedChars += 1
  }
});

let charCount
async function renderNewQuote_x() {
  const quote = "public final class HelloWorld {\n" + 
                "public static void main(String[] args) {\n" +
                "System.out.println(\"Hello, World!\")\;\n" +
                "}\n" +
                "}"
  charCount = quote.length
  quoteDisplayElement.innerHTML = ''
  quoteInputElement.value = ''
  quote.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    if (character == "\t") {
      characterSpan.innerHTML = character
    } else {
      characterSpan.innerText = character
    }
    quoteDisplayElement.appendChild(characterSpan)
  })
  quoteInputElement.value = null
}

async function renderNewQuote() {
  var randomCode = new RandomCode();
  var quote = randomCode.generateCodeBlock();


  charCount = quote.length
  quoteDisplayElement.innerHTML = ''
  quoteInputElement.value = ''
  quote.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    if (character == "\t") {
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
  timerElement.innerText = "time: -- / wpm: --"
  buttonElement.innerHTML = "▶"
  typedChars = 0

  counterInterval = setInterval(() => {
    let seconds = getTimerTime()
    timerElement.innerText = "time: " + seconds + " / wpm: --"
  }, 1000)

  timerOn = true
  startTime = new Date()
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000)
}

function getWPM(sec) {
  let min = sec/60
  let wpm = (charCount/5)/min
  return Math.round(wpm * 10) / 10
}

function getAccuracy() {
  console.log(charCount + " / " + typedChars)
  let pctAcc = charCount/typedChars
  return Math.round(pctAcc * 1000) / 10
}

function refreshMetrics() {
  let sec = getTimerTime()
  let wpm = getWPM(sec)
  let acc = getAccuracy()

  timerElement.innerText = "time: " + sec + "s / wpm: " + wpm + " / acc: " + acc + "%"
}

function stopTimer() {
  timerOn = false
  buttonElement.innerHTML = "🗘"
  inputElement.disabled = true
  clearInterval(counterInterval)

  refreshMetrics()
}

//renderNewQuote1()