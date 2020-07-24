import { ChunkyQueue } from './ChunkyQueue';
import { MinionProcess } from './MinionProcess';
import { Mapper } from './Mapper'

type MinionImplementation = typeof MinionProcess & { new (...args: any[]): any; };

export class MainProcess {
    private words: string[]
    private CHUNK_SIZE = 10

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

    private enqueueInputs(): ChunkyQueue {
        return new ChunkyQueue(this.words, this.CHUNK_SIZE)
    }

    
    private forkMinion<C extends MinionImplementation>(number: number, queue: ChunkyQueue, Process: C) {
        while (queue.peek()) {
            const minion = new Process(queue.dequeue(), {})
            minion.compute()
            minion.writeToTempStorage()
        }
    }
}