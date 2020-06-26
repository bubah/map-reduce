import { MainProcess } from './MainProcess'

export class MapReduce {

    // may return Promise<Results> once we move computation to minions
    public do(input: string): Results {

        const main = new MainProcess(input);
        main.delegateMap();
        main.delegateReduce();

        return main.concatResults();
    }
}