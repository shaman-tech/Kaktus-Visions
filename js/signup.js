/* collects and stores signups */


var people = {

    people: [],

    init: function () {
          this.cacheDom();
          this.bindEvents();
          //this.render();

    },
    cacheDom: function() {
        this.$el = $('#container');
        this.$input = this.$el.find('input');
        this.$button = this.$el.find('button');

    },

    bindEvents: function(){

        this.$button.on("click", this.addPerson.bind(this));
    },
    render: function(){

            //print results

    },
    addPerson: function(){

            console.log('hello');

    }

  };

  people.init();
