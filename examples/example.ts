import { Runner } from "../dist/index.js"



const runner = new Runner();

runner.addTask('Test 1 with input', async () => {
    const value= await runner.input('Enter a value:');
    console.log(value);
});

runner.run();