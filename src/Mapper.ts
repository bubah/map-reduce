import { MinionProcess } from './MinionProcess';



export class Mapper extends MinionProcess {
    public compute(): void {
        this.input
            .map(word => word.toLowerCase())
            .forEach(word => {
                const result: MapperResult = {[word]: 1}
                this.tempStorage.write(`/results/mapper/${word[0]}`, result);
            });
    }
}