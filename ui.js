class UI {
  constructor(){
    this.queryWord = document.getElementById('queryword');
    this.pronunciation = document.getElementById('d-pronun');
    this.definition = document.getElementById('d-def');
    this.sample = document.getElementById('d-icon');
  }

  fill(defjson){
    this.queryWord.textContent = defjson[0].hwi.hw;
    this.pronunciation.textContent = defjson[0].hwi.prs[0]['mw'];
    this.definition.textContent = defjson[0].shortdef;
    if (defjson[0].art) {
      this.sample.setAttribute('src', `https://www.merriam-webster.com/assets/mw/static/art/dict/${defjson[0].art.artid}.gif`);
    } else {
      this.sample.setAttribute('src', "./img/D1nM11A - Imgur.png")
    }
  }
}