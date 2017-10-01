const obj = { name: 'Artem', lastname: 'Makatera' };

const { name, lastname: last } = obj;

const test = msg => console.log(`${msg} ${name} ${last}`);

export default test;
