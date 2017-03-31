/* A function that counts the number of signups*/
var count = (function(){

    var number = 0;
    var $span = $('#stats').find('span');
    var template = $('#stats-temp').html();

    alert(people);

    function _render(){

      $span.html(Mustache.render(template, {number: number}))

    }

    function updateNum(value){
        number = value;
        _render();



    }

    return {
        updateNum: updateNum

    }

})()
