const spanishData = {
    name: "Spanish",
    notablePeople: [
      "Antonio Banderas",
      "John Cena",
      "Enrique Iglesias",
      "Rita Moreno",
      "Penelope Cruz"
    ],
    funFacts: {
      relatedLanguages: ["Catalan", "Italian", "French", "Portuguese", "Romanian"],
      lettersInAlphabet: 27,
      numberOfSpeakers: "more than 437 million"
    },
    countriesSpoken: [
      "Argentina",
      "Bolivia",
      "Chile",
      "Colombia",
      "Costa Rica",
      "Cuba",
      "Dominican Republic",
      "Equador",
      "El Salvador",
      "Equatorial Guinea",
      "Guetemala",
      "Honduras",
      "Mexico",
      "Nicaragua",
      "Panama",
      "Mali",
      "Monaco",
      "Paraguay",
      "Peru",
      "Puerto Rico",
      "Spain",
      "Uruguay",
      "Venezuela"
    ],
    dictionary: {
      hello: "Hola",
      goodbye: "Adiós",
      thankYou: "Gracias",
      goodEvening: "Buena noches",
      howAreYou: "¿cómo estás?",
      whatsYourName: "cuál es tu nombre?"
    }
  };






  // Function that builds a paragraph
  // Accepts a string, returns a HTML string with <p> tags
  function buildParagph(stringParam){
    return `<p>${stringParam}</p>`
  }

  // const buildParagph = stringParam => `<p>${stringParam}</p>`

  // Function that builds a heading
  // Accepts a heading type (h1, h2, h3) and a string (language name, countries spoken, etc) and returns an HTML string <headingType>string</headingType>
  const buildHeading = (headingTypeParam, stringParam) => `<${headingTypeParam}>${stringParam}</${headingTypeParam}>`


// Function that builds a list
// Accepts an array and returns an HTML string of everything in the array
// Call buildParagph function
const buildList = (arrayParam, listHeading) => {
  let htmlString = buildHeading("h3", listHeading)
  for(let i = 0; i < arrayParam.length; i++){
    htmlString += buildParagph(arrayParam[i])
  }
  console.log(htmlString)
  return htmlString
}



// Function that builds fun facts
// Returns an HTML string of fun facts


  // Add click event listener to "spanish" nav link
  document.querySelector("#spanish").addEventListener("click", () => {
    // 1. Select #language-container
  const languageContainer = document.querySelector("#language-container")
  const giantHTMLString = `${buildHeading("h1", spanishData.name)}
    <div class="flex-container">
      <div id="spanish-notable-people">
      ${buildList(spanishData.notablePeople, "Notable People")}
      </div>
      <div id="spanish-countries-spoken">
      ${buildList(spanishData.countriesSpoken, "Countries Spoken")}
      </div>
    </div>
  `
  languageContainer.innerHTML = giantHTMLString


// 2. call printEverything Function
// 3. use .innerHTML to put the HTML string in the DOM


})