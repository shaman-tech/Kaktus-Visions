/* A function that counts the number of signups*/
var count = (function(){


    var number = 0;
    var $div = $('#stats');
    var template = $div.find('#stats-temp').html();

    _render();

    function _render(){

    $div.html(Mustache.render(template, {number: number}));

    }

    function updateNum(value){
        number = value;
        _render();
    }

    return {
        updateNum: updateNum
      }

})()
