class Storage {
  constructor() {
    this.query;
    this.defaultQuery = 'heart';
  }

  getDefData() {
    if(localStorage.getItem('query') === null) {
      this.query = this.defaultQuery;
    } else {
      this.query = localStorage.getItem('query');
    }

    return {
      query: this.query
    }
  }

  setDefData(query) {
    localStorage.setItem('query', query);
  }
}