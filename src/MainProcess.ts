import { Queue } from './Queue';
import { MinionProcess } from './MinionProcess';
import { Mapper } from './Mapper'

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
        this.forkMinion(1, queue, Mapper)
    }

    public delegateReduce() {
        
    }
    
    public concatResults(): Results {
        return {}
    }

    private enqueueInputs(): Queue {
        return new Queue(this.words)
    }

    private forkMinion(number: number, queue: Queue, Process: new (input: string, storage: TemporaryStorage) => MinionProcess) {
        while (queue.peek()) {
            const minion = new Process(queue.dequeue()!, {})
            minion.compute()
            minion.writeToTempStorage()
        }
    }
}