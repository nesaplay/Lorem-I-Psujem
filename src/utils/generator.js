class GenerateNewText {
  sentences = ['Prva', 'Druga', 'Treca', 'Cetvrta']

  getRandomSentence() {
    let randomSentence = this.sentences[
      Math.floor(Math.random() * this.sentences.length)
    ]
    return randomSentence
  }

  getParagraph() {
    let paragraph = ''
    let minimumCharacterLength = 250
    let firstSentence = true

    while (paragraph.length < minimumCharacterLength) {
      if (firstSentence) {
        paragraph = paragraph.concat(this.getRandomSentence())
        firstSentence = false
      } else {
        paragraph = paragraph.concat(' ' + this.getRandomSentence())
      }
    }
    return paragraph.concat('.')
  }

  getAllParagraphs(numberOfParagraphs) {
    let allParagraphs = []

    while (allParagraphs.length < numberOfParagraphs) {
      allParagraphs.push(this.getParagraph())
    }

    return allParagraphs
  }
}

export default new GenerateNewText()
