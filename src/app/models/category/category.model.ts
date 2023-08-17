export class Category {
    id?:string
    categoryName?: string | undefined | null
    fileName?: File | undefined
    imageUrl?: string | undefined | null
    status?: boolean
    
    constructor(file: File, categoryName: string, status: boolean) {
        this.fileName = file;
        this.categoryName = categoryName;
        this.status = status;
    }

}