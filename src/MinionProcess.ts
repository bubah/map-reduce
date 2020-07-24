export abstract class MinionProcess {
    protected readonly input: string[];
    protected readonly tempStorage: TemporaryStorage;

    constructor(input: string[], tempStorage: TemporaryStorage) {
        this.input = input;
        this.tempStorage = tempStorage;
    }

    public abstract compute(): void;
    public abstract writeToTempStorage(): void;
}