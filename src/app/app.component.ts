import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AutoCompleteCompleteEvent} from "primeng/autocomplete";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dialogVis = true;

  /* Search */

  searchItems =  [
    {
    "name": "Táblázatok"
    },
    {
      "name": "Szövegek",
    },
    {
      "name": "Szemetes",
    },
    {
      "name": "TBJ",
    },
    {
      "name": "Székhelyszolgáltatók",
    }
  ];


  formGroup = new FormGroup({
    selectedFile: new FormControl<object | null>(null)
  });

  //@ts-ignore
  filteredFiles: any[];

  filterCountry(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.searchItems as any[]).length; i++) {
      let country = (this.searchItems as any[])[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredFiles = filtered;
  }

  /* Create */

  fileManagerOpt = [
    {
      label: 'Létrehozás',
      icon: 'pi pi-plus',
      command: () => {

      }
    },
  ];

  /* files Table */

  files = [
    {
      name: 'TBJ',
      modified: '2023.09.12.',
      size: '09kb'
    },
    {
      name: 'Székhelyszolgáltatók',
      modified: '2023.09.11.',
      size: '04kb'
    },
  ];

}
