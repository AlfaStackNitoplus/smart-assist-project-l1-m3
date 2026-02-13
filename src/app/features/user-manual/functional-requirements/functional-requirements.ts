import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-functional-requirements',
  imports: [CommonModule, RouterModule, MatCardModule, MatDividerModule],
  templateUrl: './functional-requirements.html',
  styleUrl: './functional-requirements.scss',
})
export class FunctionalRequirements {

}
