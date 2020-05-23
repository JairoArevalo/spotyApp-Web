import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  
  
  constructor(private spinner: NgxSpinnerService) { 
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 5000);
  }

  ngOnInit(): void {
  }

}
