import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { SVGIcon, filePdfIcon, fileExcelIcon } from '@progress/kendo-svg-icons';
import { process } from '@progress/kendo-data-query';
import { employees } from './_model/employee';
import { images } from './_model/images';

@Component({
    selector: 'my-app',
    template: `
        <app-search></app-search>
    `,
    styles: [
        `
            .customer-photo {
                display: inline-block;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background-size: 32px 35px;
                background-position: center center;
                vertical-align: middle;
                line-height: 32px;
                box-shadow: inset 0 0 1px #999, inset 0 0 10px rgba(0, 0, 0, 0.2);
                margin-left: 5px;
            }

            .customer-name {
                display: inline-block;
                vertical-align: middle;
                line-height: 32px;
                padding-left: 10px;
            }

            .red {
                color: #d9534f;
            }

            .text-bold {
                font-weight: 600;
            }
        `,
    ],
})
export class AppComponent implements OnInit {
    @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
    public gridData: unknown[] = employees;
    public gridView: unknown[];

    public mySelection: string[] = [];
    public pdfSVG: SVGIcon = filePdfIcon;
    public excelSVG: SVGIcon = fileExcelIcon;

    public ngOnInit(): void {
        this.gridView = this.gridData;
    }

    public onFilter(value: Event): void {
        const inputValue = value;

        this.gridView = process(this.gridData, {
            filter: {
                logic: 'or',
                filters: [
                    {
                        field: 'full_name',
                        operator: 'contains',
                        value: inputValue,
                    },
                    {
                        field: 'job_title',
                        operator: 'contains',
                        value: inputValue,
                    },
                    {
                        field: 'budget',
                        operator: 'contains',
                        value: inputValue,
                    },
                    {
                        field: 'phone',
                        operator: 'contains',
                        value: inputValue,
                    },
                    {
                        field: 'address',
                        operator: 'contains',
                        value: inputValue,
                    },
                ],
            },
        }).data;

        this.dataBinding.skip = 0;
    }

    public photoURL(dataItem: { img_id: string; gender: string }): string {
        const code: string = dataItem.img_id + dataItem.gender;
        const image: { [Key: string]: string } = images;

        return image[code];
    }

    public flagURL(dataItem: { country: string }): string {
        const code: string = dataItem.country;
        const image: { [Key: string]: string } = images;

        return image[code];
    }
}
