import { Component, OnChanges, Input} from "@angular/core";


@Component({
    selector:'app-star',
    templateUrl:'./star.component.html',
    styleUrls:['star.component.css']
    
})
export class StarComponent implements OnChanges{
     
    @Input() 
    rating: number = 0; 
    starWidth:number = 0;

  

    ngOnChanges():void{
        this.starWidth = this.rating *74/5;
    }

}

//@Component({
//    selector: 'app-star', 
//    template: `...`
//})
//class MyComponent implements OnChanges {
//  @Input() prop: number = 0;
//
//  ngOnChanges(changes: SimpleChanges) {
//    // changes.prop contains the old and the new value...
//  }
//}