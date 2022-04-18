const definition = new Definition('space');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getDefinition);

function getDefinition(){
  definition.getDefinition()
    .then(results => {
      console.log(results);
      
      ui.fill(results);
    })
    .catch(err => console.log(err));
}

document.getElementById('w-change-btn').addEventListener('click',(e) => {
  e.preventDefault();
  const query = document.getElementById('word');

  definition.changeQuery(query.value.replace(" ", '%20'));

  getDefinition();

  // Closing modal
  $('#locModal').modal('hide');
});
