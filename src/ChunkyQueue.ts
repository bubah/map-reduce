export class ChunkyQueue {
    private words: string[]
    private chunkSize: number

    constructor(words: string[], chunkSize: number) {
        this.words = words;
        this.chunkSize = chunkSize;
    }

    public dequeue(): string[] {
       return this.words.splice(0, this.chunkSize-1);
    }

    public peek(): boolean {
        return this.words.length > 0;
    }
} 