
class Place{
  constructor(name,buildYear){
    this.name = name;
    this.buildYear = buildYear;
  }
}


class Park extends Place{


  constructor(name,buildYear,trees,area){
    super(name,buildYear);
    this.trees = trees;
    this.area = area;
  }

  printTreeDensity(){
    console.log(`${this.name} has a tree density of ${this.trees / this.area} trees oer square/km`);
  }

  getAge(){
    return new Date().getFullYear() - this.buildYear;
  }

  hasThousandTrees(){
    return this.trees > 1000;
  }

  getName(){
    return this.name;
  }

}

class Street extends Place{
  constructor(name,buildYear,length,size = "normal"){
    super(name,buildYear);
    this.length = length;
    this.size = size;
  }

  getLength(){
    return this.length;
  }

  printInfo(){
    console.log(`${this.name}, built in ${this.buildYear}, is a ${this.size} street!`)
  }

}

const nationalPark = new Park("National Park",1950,999,20);
const greenPark = new Park("Green Park",1630,285,25);
const oakPark = new Park("Oak Park",1150,5000,40);

const oceanAvenue = new Street("Ocean Avenue",1950,5,"big");
const evergreenStreet = new Street("Evergreen Street",1630,3);
const fourthStreet = new Street("4'th Street",1990,1,"smal");
const sunsetBoulevard = new Street("Sunset Boulevard",1845,10,"huge");


const places = new Map();
places.set("park1", nationalPark);
places.set("park2", greenPark);
places.set("park3", oakPark);

places.set("street1", oceanAvenue);
places.set("street2", evergreenStreet);
places.set("street3", fourthStreet);
places.set("street4", sunsetBoulevard);


console.log("------- PARK REPORT -----------");

function treeDensityForEachPark(){
  places.forEach((value, key)=>{
  
    if(key.includes("park")){
    value.printTreeDensity();
    }
  });

}

treeDensityForEachPark()

function aveAgeForEachPark(){
  let sum = 0;
  let number = 0;
  places.forEach((value,key) => {
    if(key.includes("park")){
      sum += value.getAge();
      number++;
    }
  });

  console.log(`Our ${number} parks have an average age of ${sum / number} years`);
}

aveAgeForEachPark();

function parkHasMoreThanThousandTrees(){
  places.forEach((value,key) => {
    if(key.includes("park")){
      if(value.hasThousandTrees()){
          console.log(`${value.getName()} has more than 1000 trees! `);
      }
    }
  });
}

parkHasMoreThanThousandTrees();

console.log("------- STREET REPORT -----------");

function totalAndAveLengthOfTownStreets(){

  let total =0;
  let amount =0;

  places.forEach((value,key) => {
    if(key.includes("street")){
      total += value.getLength();
      amount++;
    }
  });

  console.log(`Out street have a total length of ${total} km, with a ave length of ${total/amount} km`);

}

totalAndAveLengthOfTownStreets();

function printStreetInfo(){

  places.forEach((value,key) => {
    if(key.includes("street")){
      value.printInfo();
    }
  });
}

printStreetInfo();
