import inquirer from 'inquirer';

interface Test  {
    name: string;
    callback: Function;
}

  class Runner {
     tests: Test[] = [];
    addTest(name: string, callback: Function) {
        this.tests.push({ name, callback });
    }
    async run() {
        const { test } = await inquirer.prompt([
            {
                type: 'list',
                name: 'test',
                message: 'Select a test:',
                choices: this.tests.map(test => test.name)
            }
        ]);
        const selectedTest = this.tests.find(t => t.name === test);
        if (selectedTest) {
            await selectedTest.callback();
        }
    }

}
export { Runner, Test }