function hero(name, age, power, gender) {
  this.name = name;
  this.age = parseInt(age);
  this.power = power;
  this.gender = gender;

  this.status = function() {
    console.log(
      " name : " +
        this.name +
        " age : " +
        this.age +
        " power : " +
        this.power +
        " gender : " +
        this.gender
    );
  };
}

var newhero = new hero("spiderman", "23", "web", "male");
newhero.status();
