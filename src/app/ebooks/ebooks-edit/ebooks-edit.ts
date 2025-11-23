import { Component, importProvidersFrom, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { EbookService } from '../ebook-service';
import { NgForm } from '@angular/forms';
import { IEbook } from '../iebook';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ebooks-edit',
  standalone: false,
  templateUrl: './ebooks-edit.html',
  styleUrl: './ebooks-edit.css'
})
export class EbooksEdit implements OnInit{
  ebook? : IEbook={
    id : 0,
    title : "",
    author : "",
    price : 0
  };

  constructor(private acivatedRoute : ActivatedRoute, private service: EbookService, private router : Router){}
  ngOnInit(): void {
      const id = this.acivatedRoute.snapshot.paramMap.get('id');
      this.ebook = this.service.getEbookById(+id!);
  }

  editbook(){
    this.service.editbook(this.ebook!);
    this.router.navigate(['/ebooks']);
  }
}
