import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { FunctionalRequirements } from '../functional-requirements/functional-requirements';
import { MockData } from '../../../assets/mock-data';
 
const EVALUATION_TOPIC_LABELS: string[] = [
  'Mock JSON – Users',
  'Mock JSON – Menus',
  'Mock JSON – Tickets',
  'Interpolation {{ }}',
  'Two-way binding [(ngModel)]',
  'User identification using UserId',
  'User JSON contains: UserId',
  'User JSON contains: Name',
  'User JSON contains: Role',
  'Error message on invalid login',
  'Angular Material: MatInput',
  'Angular Material: MatButton',
  '@if',
  '@else',
  '@for',
  '@empty',
  '@switch',
  '@case',
  '@default',
  'Menu rendered based on role',
  'End User menu items',
  'Support Engineer menu items',
  'Supervisor menu items',
  'Angular Material: MatSidenav',
  'Angular Material: MatIcon',
  'End User: Sees only tickets created by him',
  'Support Engineer: Sees tickets assigned to him',
  'Support Engineer: Sees unassigned tickets',
  'Supervisor: Sees all tickets',
  'Tickets displayed using MatTable',
  'Column: Ticket Id',
  'Column: Created By',
  'Column: Description',
  'Column: Priority',
  'Column: Status',
  'Column: Age',
  'Column: Assignee',
  'Structural directives used for iteration',
  '[ngClass]',
  '[ngStyle]',
  'Priority-based color logic (alpha mapping)',
  'Custom directive exists',
  'Uses @HostBinding',
  'Uses @HostListener',
  'Uses ElementRef',
  'Directive is reusable',
  'Applied on ticket rows',
  'Built-in pipe: date',
  'Built-in pipe: uppercase / lowercase',
  'Built-in pipe: number',
  'Built-in pipe: json (optional)',
  'Custom pipe (ticket status)',
  'Pipe is pure',
  'Pipe used in template',
  'Angular Material: Toolbar',
  'Angular Material: Sidenav',
  'Angular Material: Menu',
  'Angular Material: Icons',
  'Angular Material: Table',
  'Angular Material: Buttons',
  'Bootstrap: Grid layout',
  'Bootstrap: Responsive spacing',
];
 
@Component({
  selector: 'app-resource',
  imports: [CommonModule,
    RouterModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTabsModule,
    FunctionalRequirements],
  templateUrl: './resource.html',
  styleUrl: './resource.scss',
})
export class Resource implements OnInit {
 
  private readonly evaluationStorageKey = 'l1m3_evaluation_parameters';
 
  evaluationTopics: string[] = EVALUATION_TOPIC_LABELS;
 
  evaluationState: Record<string, boolean> = {};
 
  users = MockData.users;
  menus = MockData.menus;
  roleMenuMapping = MockData.roleMenuMapping;
  tickets = MockData.tickets;
 
  ngOnInit(): void {
    this.evaluationState = this.loadEvaluationState();
  }
 
  isTopicChecked(topic: string): boolean {
    return !!this.evaluationState[topic];
  }
 
  onTopicCheckedChange(topic: string, checked: boolean): void {
    this.evaluationState = {
      ...this.evaluationState,
      [topic]: checked,
    };
    this.saveEvaluationState();
  }
 
  private loadEvaluationState(): Record<string, boolean> {
    try {
      if (typeof window === 'undefined') return {};
      const raw = window.localStorage.getItem(this.evaluationStorageKey);
      if (!raw) return {};
 
      const parsed = JSON.parse(raw) as unknown;
      if (!parsed || typeof parsed !== 'object') return {};
 
      const record: Record<string, boolean> = {};
      for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
        record[key] = value === true;
      }
      return record;
    } catch {
      return {};
    }
  }
 
  private saveEvaluationState(): void {
    try {
      if (typeof window === 'undefined') return;
      window.localStorage.setItem(this.evaluationStorageKey, JSON.stringify(this.evaluationState));
    } catch {
      // ignore storage quota / blocked storage
    }
  }
 
}