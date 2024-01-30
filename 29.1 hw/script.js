// #1

const dog = {
    dogName: "Charlie",
    dogBreed: "Golden Retriever",
    dogAge: 4,
    bark: function () {
        console.log("Woof!")
    }
};

console.log("Dog's name:", dog.dogName);
console.log("Dog's breed:", dog.dogBreed);
console.log("Dog's age:", dog.dogAge);

dog.bark();


// #2

function Cat(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
}
  
Cat.prototype.mischiefs = ["broke the vase", "scratched the sofa", "knocked over the plant", "spilled water on the floor"];
  
Cat.prototype.mischief = function() {
    const randomIndex = Math.floor(Math.random() * this.mischiefs.length);
    const randomMischief = this.mischiefs[randomIndex];
    console.log(`${this.name} ${randomMischief}`);
};

  const whiskers = new Cat("Whiskers", "British Shorthair", 2);
  const amenhotep = new Cat("Amenhotep", "Sphynx", 4);

  whiskers.mischief();
  amenhotep.mischief();



// #3.1

const names = ["Whiskers", "Fluffy", "Leo", "Luna", "Misty"];
const breeds = ["British Shorthair", "Siamese", "Maine Coon", "Persian", "Sphynx"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const cats = [];

for (let i = 0; i < 50; i++) {
  const name = names[getRandomInt(0, names.length)];
  const breed = breeds[getRandomInt(0, breeds.length)];
  const age = getRandomInt(1, 15);
  const cat = { name, breed, age };
  cats.push(cat);
}

console.log(cats);


// #3.2

cats.sort((cat1, cat2) => cat1.name.localeCompare(cat2.name));

console.log(cats);


// #3.3

const britishShorthairs = cats.filter(cat => cat.breed === "British Shorthair");

console.log(britishShorthairs);


// #3.4

const smolCats = cats.filter(cat => cat.age <= 1);

console.log(smolCats);