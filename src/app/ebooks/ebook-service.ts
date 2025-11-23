import { Injectable,signal } from '@angular/core';
import { IEbook } from './iebook';

@Injectable({
  providedIn: 'root'
})
export class EbookService { 
  ebooks = signal<IEbook[]>([
    {id : 1, title : "Atomic Habits", author : "James Clear", price : 30},
    {id : 2, title : "The slight edge", author : "Jeff Olsen", price : 25}
  ]);


  getEbookById(id: number) : IEbook | undefined{
    return this.ebooks().find(ebook => ebook.id === id);
  }

  getEbooks() : IEbook[]{
    return [...this.ebooks()];
  }

  getLastId() : number{
    const ebooks_s = this.ebooks();
    return ebooks_s[ebooks_s.length - 1].id;
  }

  addEbook(ebook : IEbook){
    this.ebooks.update(ebooks_s =>[...ebooks_s, ebook]);
  }
  editbook(ebook : IEbook): void{
    this.ebooks.update(ebooks_s => ebooks_s.map(
      e => e.id === ebook.id?ebook:e)
    );
  }
  deleteEbook(id :number){
    if(confirm("Sure to delete !!!")){
      this.ebooks.update(ebooks_s =>ebooks_s.filter(
        ebook => ebook.id !== id)
      );
    }
  }
  
}
