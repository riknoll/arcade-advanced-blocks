interface Array<T> {
    //% blockId=advanced_arrayJoin
    //% block="$this join elements in string||with separator $sep"
    //% this.shadow=variables_get
    //% this.defl=list
    //% blockNamespace=arrays
    //% group=Advanced
    join(sep?: string): string;

    // below this line are functions that we should add but are not currently
    // supported by our blocks type inference


    concat(arr: T[]): T[];
    slice(start?: number, end?: number): T[];
}