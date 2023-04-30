export class OracleResponse<T> {
    public count!: number;
    public hasMore!: boolean;
    public items?: T[];
    public limit!: number;
    public links?: link[];
}

class link {
    public href!: string;
    public rel!: string;
}