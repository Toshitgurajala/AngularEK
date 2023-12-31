import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule,SearchComponent,ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
 liststring:string[] =['Mark','Steve','Kolin','Heman','Zimp','Sarah']

}
