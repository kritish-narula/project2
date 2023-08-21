export class Manageitems {
    id?:string
    productname?: string | undefined | null
    price?:string
    fileName?: File | undefined
    imageUrl?: string | undefined | null
    category?:string
    status?: boolean
    
    constructor(file: File, productname: string, status: boolean) {
        this.fileName = file;
        this.productname = productname;
        this.status = status;
    }

}
