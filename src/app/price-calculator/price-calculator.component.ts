import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

interface CompanyType {
  name: string;
  value: number;
}

@Component({
  selector: 'app-price-calculator',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './price-calculator.component.html',
  styleUrl: './price-calculator.component.scss'
})


export class PriceCalculatorComponent {
  companyTypes: CompanyType[] = [{ name: "Trabalhador Independente", value: 1 }, { name: "Startup", value: 2 }, { name: "PME", value: 3 }, { name: "Grande Empresa", value: 4 }];


}
