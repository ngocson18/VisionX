import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  listUserTest = [];
  constructor(
  ) {
    
  }

  ngOnInit(): void {
    this.getAllDataTest();
  }

  public getAllDataTest(): void {
    
  }
}
