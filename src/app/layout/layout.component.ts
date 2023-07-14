import { Component, OnInit  } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  listUserTest = [];
  constructor(
    private testService: TestService
  ) {
    
  }

  ngOnInit(): void {
    this.getAllDataTest();
  }

  public getAllDataTest(): void {
    this.testService.getAll()
    .pipe(
      tap(res => {
        if (res) {
          this.listUserTest = res;
          console.log(this.listUserTest);
        }
      })
    )
    .subscribe();
  }
}
