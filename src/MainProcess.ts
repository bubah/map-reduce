import { Queue } from './Queue';

export class MainProcess {
    private words: string[]

    constructor(input: string) {
        this.words = this.splitInput(input)
    }

    private splitInput(input: string) {
        return input.split(' ')
    }

    public delegateMap() {
        const queue = this.enqueueInputs()
        this.forkMinion(1, queue)
    }

    public delegateReduce() {
        
    }
    
    public concatResults(): Results {
        return {}
    }

    private enqueueInputs(): Queue {
        return new Queue(this.words)
    }

    private forkMinion(number: number, queue: Queue) {
        
        while (queue.peek()) {
            const minion = new MinionProcess(queue.dequeue())
            minion.compute()
            minion.writeToTempStorage()
        }
    }
}