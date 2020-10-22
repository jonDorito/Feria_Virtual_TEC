import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ServerService} from '../../../../server.service';
import {Category} from '../../../../models/category.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  @ViewChild('newCategoryForm') categoryForm: NgForm;

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
  }

  onAddCategory(){
    const catName = this.categoryForm.value.newCategoryName;
    const catID = this.serverService.categoryID;
    const newCategory = new Category(catName, catID);

    this.serverService.addCategory(newCategory);

    console.log(newCategory);

    this.categoryForm.reset();
  }
}

