function destructureExample()
{

    const arr = ['name', 'height', 'weight']

    const person = {
        name: 'demouser',
        age: 30,
        address: {
            street: '123 main st',
            city: 'Mumbai',
            country: 'India'
        }
    }

    const {name, age, address: {city}} = person;
    const [first] = arr;

    console.log('Name: '+ name, ' Age: '+ age, ' City: '+ city);
    console.log(first);
}

destructureExample();