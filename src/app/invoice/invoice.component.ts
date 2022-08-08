import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  public invoiceId:any;
  public invoiceProduct:any=[];

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('invoiceId')) {
      this.router.navigate(['/checkout']);
    }

    if (localStorage.getItem('invoiceId')) {
      this.invoiceId = localStorage.getItem('invoiceId');
      this.api.invoice(parseInt(this.invoiceId)).subscribe((data) => {
        this.invoiceProduct=data;
        console.log(this.invoiceProduct);
      });
    }
  }

  public clearInvoice(){
    localStorage.removeItem('invoiceId');
    this.router.navigate(['/home']);
  }

}
