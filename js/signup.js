var people = (function(){

  var people = ['Jo'];

  //cacheDom
  $el = $('#container');
  $input = $el.find('input');
  $button = $el.find('button');

  //Bind Events

  $button.on('click',addPerson);
  update();

  //functions

  function addPerson(value){
      var person = (typeof value === "string") ? value : $input.val();
      people.push(person);
      update();
      $input.val('');


  }

  function update(){
      count.updateNum(people.length);

  }


  return {
    addPerson: addPerson
  }
})()
