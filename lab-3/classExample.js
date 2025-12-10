function classExample()
{
    class Person{

        constructor(name, age)
        {
            this.name = name;
            this.age = age;
        }

        display()
        {
            console.log(`Name: ${this.name}, Age: ${this.age}`)
        }

    }
    const p1 = new Person("Dhairya", 19)
    const p2 = new Person("Manav", 20)

    p1.display();
    p2.display();
}

classExample();