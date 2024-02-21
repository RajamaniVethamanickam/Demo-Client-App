import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'kendo-rating',
    template: `
        <!--Load the font icons package:-->
        <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css" />

        <span *ngFor="let item of stars" [ngClass]="ratingIcon(item)"></span>
    `,
    styles: [
        `
            .yellow {
                color: #ffa600;
            }
        `,
    ],
})
export class RatingComponent implements OnInit {
    @Input() public value: number=0;
    @Input() public max: number=0;

    public stars: number[]=[];

    public ngOnInit(): void {
        this.stars = new Array(this.max).fill(1).map((item, index) => item + index);
    }

    public ratingIcon(item: number): string {
        return item <= this.value ? 'k-icon k-font-icon k-i-star yellow' : 'k-icon k-font-icon k-i-star-outline';
    }
}