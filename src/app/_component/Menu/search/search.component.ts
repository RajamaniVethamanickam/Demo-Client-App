import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { SVGIcon, filePdfIcon, fileExcelIcon } from '@progress/kendo-svg-icons';
import { process } from '@progress/kendo-data-query';
import { employees } from '../../../_model/employee';
import { images } from '../../../_model/images';
import { PalmapiServices } from '../../../_services/palmapiservices.service';
import { SearchGridResult, SearchResult } from '../../../_model/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  public gridData: unknown[] = employees;
  public gridView: unknown[];
  public searchResult : unknown[];
  public mySelection: string[] = [];
  public pdfSVG: SVGIcon = filePdfIcon;
  public excelSVG: SVGIcon = fileExcelIcon;
  data:any={
    ShowroomId:"20171",
    AccountManagerPEID:"26463",
    LoggedIn_PEID:"26463"
  };

  constructor(private palmApi:PalmapiServices){}


 
  public ngOnInit(): void {
    debugger;
    this.palmApi.postAsync("Menu/RetriveSearchRecords", this.data).subscribe({
      next: (response:any) => {
        debugger;
        this.searchResult = response.searchGridResultDTO;
        this.gridView = this.searchResult;
        console.log(this.searchResult);
      },
      error: error =>console.log(error),
      complete:()=>console.log('complete')
    })
      // this.gridView = this.searchResult;
  }
  Search(){
   
  }
  public onFilter(value: Event): void {
      const inputValue = value;

      this.gridView = process(this.gridData, {
          filter: {
              logic: 'or',
              filters: [
                {
                  field: 'pmFlag',
                  operator: 'contains',
                  value: inputValue,
              },
              {
                field: 'name',
                operator: 'contains',
                value: inputValue,
            },
              {
                field: 'memberAssignedTO',
                operator: 'contains',
                value: inputValue,
            },              
                  
                  {
                      field: 'businessName',
                      operator: 'contains',
                      value: inputValue,
                  },
                  {
                    field: 'preferredPhone',
                    operator: 'contains',
                    value: inputValue,
                },
                {
                  field: 'homePhone',
                  operator: 'contains',
                  value: inputValue,
              },
                  {
                      field: 'accountManager',
                      operator: 'contains',
                      value: inputValue,
                  },
                  {
                    field: 'dateofLastActivity',
                    operator: 'contains',
                    value: inputValue,
                },
                  {
                      field: 'businessPhone',
                      operator: 'contains',
                      value: inputValue,
                  },
                  {
                  field: 'email',
                  operator: 'contains',
                  value: inputValue,
                  },
                  {
                      field: 'address',
                      operator: 'contains',
                      value: inputValue,
                  },
                  {
                    field: 'salesTotal',
                    operator: 'contains',
                    value: inputValue,
                },
                {
                  field: 'createdDate',
                  operator: 'contains',
                  value: inputValue,
              },
              ],
          },
      }).data;

      this.dataBinding.skip = 0;
  }

  // public photoURL(dataItem: { img_id: string; gender: string }): string {
  //     const code: string = dataItem.img_id + dataItem.gender;
  //     const image: { [Key: string]: string } = images;

  //     return image[code];
  // }

  // public flagURL(dataItem: { country: string }): string {
  //     const code: string = dataItem.country;
  //     const image: { [Key: string]: string } = images;

  //     return image[code];
  // }

}
