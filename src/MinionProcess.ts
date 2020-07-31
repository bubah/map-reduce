import { TempStorage } from './TempStorage'

export abstract class MinionProcess {
    protected readonly input: string[];
    protected readonly tempStorage: TempStorage;

    constructor(input: string[], tempStorage: TempStorage) {
        this.input = input;
        this.tempStorage = tempStorage;
    }

    public abstract compute(): void;
}