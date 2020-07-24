import { MinionProcess } from './MinionProcess';



export class Mapper extends MinionProcess {
    public compute(): void {
        const result: MapperResult[] = this.input.map(word => ({ [word]: 1 }));

        this.tempStorage.write("/results/mapper", result);

    }

    // TODO: maybe delete?
    public writeToTempStorage(): void {
        //
    }
}