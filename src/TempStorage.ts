export class TempStorage {
    private storage: { [key: string]: MapperResult[] } = {}

    public write(directory: string, result: MapperResult): void {
        if (this.storage[directory]){
            this.storage[directory].push(result);
        } else {
            this.storage[directory] = [result];
        }
    }
}