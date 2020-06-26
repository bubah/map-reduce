export class Queue {
    private words: string[]

    constructor(words: string[]) {
        this.words = words;
    }

    public dequeue(): string | undefined {
       return this.words.shift();
    }

    public peek(): boolean {
        return this.words.length > 0;
    }
} 