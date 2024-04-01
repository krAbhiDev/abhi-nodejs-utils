import inquirer from 'inquirer';

interface Task {
    name: string;
    callback: Function;
}

class Runner {
    private tasks: Task[] = [];
    addTask(name: string, callback: Function) {
        this.tasks.push({ name, callback });
    }

    async input(message: string) {
        const { value } = await inquirer.prompt([
            {
                type: 'input',
                name: 'value',
                message
            }
        ]);
        return value as string
    }
    async run() {
        const { test } = await inquirer.prompt([
            {
                type: 'list',
                name: 'test',
                message: 'Select a test:',
                choices: this.tasks.map(test => test.name)
            }
        ]);
        const selectedTest = this.tasks.find(t => t.name === test);
        if (selectedTest) {
            await selectedTest.callback();
        }
    }

}
export { Runner, Task }