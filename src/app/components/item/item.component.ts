import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {Item} from 'src/app/modelos/item';
import { ItemService } from 'src/app/services/item.service';




@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item:Item;
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      item: true,
      'completed': this.item.completed
    };

    return classes;
  }

  onToggle(item){
    item.completed = !item.completed;
    /* this.itemService.toggleCompleted(item).subscribe(item => {
      
    }); */
    this.toggleItem.emit(item);
  }

  onDelete(item){
    this.deleteItem.emit(item);
  }

}
