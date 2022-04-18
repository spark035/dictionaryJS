class Definition {
  constructor(query) {
    this.apiKey = 'cd45d618-b719-4c32-a488-aa2a6c3f0ea1';
    this.query = query;
  }

  //Fetch definition
  async getDefinition() {
    const definition = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.query}?key=${this.apiKey}`);

    const defData = await definition.json();

    return defData;
  }
  
  changeQuery(newQuery) {
    this.query = newQuery;
  }
}