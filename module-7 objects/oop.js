{   //1 как метод объекта
    const user = {
        name: 'usman',
        getName: function () {
            console.log(this);
        }
    }
    user.getName();

    //call, apply, bind


    user.getName.call({surname: 'kamaylaev'});

//2 как обычная функция declaration

    function func () {
        console.log(this);
    }

    func();

// как функция конструктор


    // const ex = new func();
    //
    // function Candy (weight) {
    //     this.tasty = 'delicious';
    //     this.getWeight = function () {
    //         console.log(`The weight is ${weight} g`);
    //     }
    // }
    //
    // const twix = new Candy(50);
    // twix.getWeight();

    function Candy (name) {
            this.tasty = 'delicious';
            this.name = name
        }

    Candy.prototype.getWeight = function (weight) {
        console.log(`The weight is ${weight} g`);
    }
        const twix = new Candy('twix');
        twix.getWeight(46);


    function ChocoCandy (name, choco) {
        this.name = name;
        this.choco = choco;
        return true;
    }

    ChocoCandy.prototype = new Candy();
    ChocoCandy.prototype.getWeight = function (weight) {
        console.log(`Candy weight is ${weight} g`);
    }

    const twix1 = new ChocoCandy('twix1', 'milk');
    twix1.getWeight(46);
    //console.log(twix1);

    const snikers = new Candy('snikers');
    snikers.getWeight(53);
    //console.log(snikers);


}


