class Instructor {
  constructor({ name, role = 'assistant' }) {
    this.name = name;
    this.role = role;
  }

  renderDetails() {
    console.log(`${this.name}: ${this.role}`);
  }

  // Teaching static methods start
  static helloWorld() {
    console.log('Hi there');
  }

  static canTeach(instructor) {
    return (instructor.role === 'classroom');
  }
  // static methods finish
}

const jon = new Instructor({ name: 'Jon Snow'});
const brayden = new Instructor({ name: 'Brayden Raiden', role: 'Instructor'});
const alice = new Instructor({ name: 'Alice Simmons', role: 'classroom'});

// jon.renderDetails();
// brayden.renderDetails();

// Static method start
Instructor.helloWorld();
console.log(`${jon.name} can teach: ${Instructor.canTeach(jon)}`);
console.log(`${alice.name} can teach: ${Instructor.canTeach(alice)}`);
// static method finish