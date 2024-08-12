export class Category {
    id!: number;
    name!: string;
    gstRate!: number;
  
    constructor(id?: number, name?: string, gstRate?: number) {
      this.id = id || 0;
      this.name = name || '';
      this.gstRate = gstRate || 0;
    }
  }
  