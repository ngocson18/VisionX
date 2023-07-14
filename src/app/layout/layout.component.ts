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
  constructor(
    private testService: TestService
  ) {
    
  }

  ngOnInit(): any {
    this.testService.getAll()
    .pipe(
      tap(res => {
        console.log(res);
      })
    ).subscribe()
  }
}
