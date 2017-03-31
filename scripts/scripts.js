/* A function that counts the number of signups*/
var count = (function(){

    var number = 0;
    var $span = $('#stats').find('span');
    var template = $('#stats-temp').html();

    alert(people);

    function _render(){

      $span.html(Mustache.render(template, {number: number}));

    }

    function updateNum(value){
        number = value;
        _render();



    }

    return {
        updateNum: updateNum

    }

})()

/*function determines how many pizzas should be ordered
creates html doc */

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

// Pub sub pattern

var pubsub = {

      pubsub: {},
      subscribe: function(eventName,fn) {
          this.pubsub[eventName] = this.publish[publisher] || [];
          this.pubsub[eventName].push(fn);

      },

      unsubscribe: function(eventName,fn){
          if (this.pubsub[eventName]){
            for(var i=0; i < this.pubsub[eventName].length; i++ ){
                if (this.pubsub[eventName][i] === fn){
                    this.pubsub[evenntName].splice(i,1);
                    break;

                }

            };

          }


      },

      publish: function(eventName,data){

        if (this.pubsub[eventName]){

          this.pubsub[eventName].forEach(function(fn) {
            fn(data);
          });
        }
      }


};
