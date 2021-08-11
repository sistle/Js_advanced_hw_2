console.log(`
***************************************************************************
 -HUMAN-
 ***************************************************************************
`);

class Human {
	constructor() {
		this.sex = 'Human';
		this.weight = 'Normal'
		this.solary = 0;
	}

	getSex() {
		return this.sex;
	}

	getWeight() {
		return this.weight;
	}
	getSolary() {
		return this.solary;
	}
	getDescription() {
		return this.sex, this.solary;
	}
}

class Man extends Human {
	constructor() {
		super()
		this.sex = 'Man';
		this.weight = 'thin';
	}
}

class Woman extends Human {
	constructor() {
		super()
		this.sex = 'Woman';
		this.weight = 'fatty';
	}

}

class Librarian {
	constructor(human) {
		this.human = human;
	}

	getSolary() {
		return `With solary -  ${this.human.getSolary() + 400}$`;
	}

	getSex() {
		return `${this.human.getSex()}  - is a Librarian `
	}
	getProfession() {
		return `Librarian`
	}
	getDescription() {
		return `${this.getSex()}   :  ${this.getSolary()}`
	}
}

class Nurse {
	constructor(human) {
		this.human = human;
	}

	getSolary() {
		return `With solary -  ${this.human.getSolary() + 600}$`;
	}

	getSex() {
		return ` ${this.human.getSex()} - is a ${this.getProfession()} `
	}
	getProfession() {
		return `Nurse`
	}
	getDescription() {
		return `${this.getSex()}   :  ${this.getSolary()}`
	}
}

class Hunter {
	constructor(human) {
		this.human = human;
	}
	getSolary() {
		return `With solary -  ${this.human.getSolary() + 1600}$`;
	}

	getSex() {
		return ` ${this.human.getSex()} - is a Hunter `
	}
	getProfession() {
		return `Hunter`
	}
	getDescription() {
		return `${this.getSex()}   :  ${this.getSolary()}`
	}
}

class Worker {
	constructor(human) {
		this.human = human;
	}
	getSolary() {
		return `With solary -  ${this.human.getSolary() + 150}$`;
	}

	getSex() {
		return ` ${this.human.getSex()} - is a Worker `
	}
	getProfession() {
		return `${this.human.getSex()}`;
	}
	getProfession() {
		return `Worker`
	}
	getDescription() {
		return `${this.getSex()}   :  ${this.getSolary()}`
	}
}

let woman1 = new Woman();
let woman2 = new Woman()
woman1 = new Nurse(woman1);
woman2 = new Librarian(woman2)
console.log(woman1.getDescription() + ' . ' + woman2.getDescription());

let man1 = new Man();
let man2 = new Man();
man1 = new Hunter(man1);
man2 = new Worker(man2);

console.log(man1.getDescription() + ' . ' + man2.getDescription());

// ********************************************************************
console.log(`
***************************************************************************
 -ANIMAL-
 ***************************************************************************
`);
class Mediator {

	constructor() {
		this.typeList = [];
	}

	animalInfo(kindOfAnimal, type, weight) {
		const kind = kindOfAnimal.getKind();

		if (kind == 'predator') {
			console.log(`kind of animal - ${kind} . Type of animal - ${type}. Weight of ${type} is ${weight}`);
			this.predator();
		}
		else {
			console.log(`kind of animal - ${kind} . Type of animal - ${type}. Weight of ${type} is ${weight}`);
			this.herbivorous();

		}

		this.addToKind(type);

	}
	addToKind(kind) {
		this.typeList.push(kind)
	}

	getKindList() {
		return this.typeList;
	}
	predator() {
		console.log(`Я їм м*ясо
		`);
	}
	herbivorous() {
		console.log(`Я їм траву
		`);
	}

}

class Animal {
	constructor(kind, mediator) {
		this.kind = kind;
		this.mediator = mediator;
	}

	getKind() {
		return this.kind;
	}

	animal(type, weight) {
		this.mediator.animalInfo(this, type, weight);
	}
}

let mediator = new Mediator();

let predator = new Animal('predator', mediator);
let herbivorous = new Animal('herbivorous', mediator);

predator.animal('tiger', 600);
predator.animal('wolf', 200);

herbivorous.animal('goat', 100);
herbivorous.animal('cow', 600);

console.log(' Animals : ', mediator.getKindList().toString());

// ********************************************
console.log(`
***************************************************************************
 -ZOO-
 ***************************************************************************
`);

class ZooMediator {

	constructor() {
		this.workers = []
		this.listOfAnimals = mediator.getKindList();
	}

	addWorkers(worker) {
		this.workers.push(worker);
	}
	showWorkers() {
		return this.workers;
	}

	addAnimals(animal) {
		this.listOfAnimals.push(animal);
	}
	showAnimals() {
		return this.listOfAnimals;
	}
	work(kindOfWorker, doing, animal) {
		const worker = kindOfWorker.getWorker();
		console.log(`${worker}  - ${doing}  ${animal} `)
		this.addWorkers(worker);
	}
}

class Workers {
	constructor(name, mediator) {
		this.name = name;
		this.mediator = mediator;
	}
	getWorker() {
		return this.name;
	}
	job(doing, animal = '') {
		this.mediator.work(this, doing, animal)
	}
}

let a = new ZooMediator();
let employee1 = new Workers(woman1.getProfession(), a);
employee1.job('лікує', a.showAnimals());
let employee2 = new Workers(woman2.getProfession(), a);
employee2.job('веде архів');
let employee3 = new Workers(man1.getProfession(), a);
employee3.job('вилавлює тварин', a.showAnimals());
let employee4 = new Workers(man2.getProfession(), a);
employee4.job('доглядає за побутом');

console.log("Zoo workers :", a.showWorkers().toString());

console.log("Zoo animals :", a.showAnimals().toString());
