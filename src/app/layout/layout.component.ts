import { Component, OnInit  } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    standalone: true,
    imports: [NzLayoutModule, RouterLink, NzMenuModule, NzButtonModule, NzIconModule, RouterOutlet]
})
export class LayoutComponent implements OnInit {
  isCollapsed = true;
  constructor(
  ) {
    
  }

  ngOnInit(): void {
    this.getAllDataTest();
  }

  public getAllDataTest(): void {
    
  }
}
