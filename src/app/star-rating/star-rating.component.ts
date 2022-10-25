import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'mat-star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls: ['./star-rating.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class StarRatingComponent implements OnInit {
    @Input('worker') public worker: any = null;
    @Input('rating') public rating: number = 3.5;
    @Input('starCount') public starCount: number = 5;
    @Output() public ratingUpdated = new EventEmitter();

    public ratingArr = [];

    constructor() { }

    ngOnInit() {
        console.log('a ' + this.starCount);
        for (let index = 0; index < this.starCount; index++) {
            this.ratingArr.push(index);
        }
    }
    onClick(rating: number) {

    }

    showIcon(index: number) {
        if (this.rating >= index + 1) {
            return 'star';
        } else {
            return 'star_border';
        }
    }
}
export enum StarRatingColor {
    primary = 'primary',
    accent = 'accent',
    warn = 'warn',
}
