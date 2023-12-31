import { Component, Input,EventEmitter, Output } from '@angular/core';
import { producerAccessed } from '@angular/core/primitives/signals';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
instock:number=0;
@Input()
outofstk:number=0;
@Input()
all:number=0;

@Output()
selectedradiobuttonevent: EventEmitter<string>= new EventEmitter<string>();
selectedradiobutton:string='All';

onselectedradiobuttonevent()
{
  // console.log(this.selectedradiobutton);
this.selectedradiobuttonevent.emit(this.selectedradiobutton);
}
}
