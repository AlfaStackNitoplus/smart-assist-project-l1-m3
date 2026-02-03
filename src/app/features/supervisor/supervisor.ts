import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';
import { MockData } from '../../assets/mock-data';
import { Ticket, TicketPriority, TicketStatus } from '../../core/models/ticket.model';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { InteractiveRow } from '../../shared/directive/interactive-row';
import { TicketStatusPipe } from '../../shared/pipes/ticket-status-pipe';

@Component({
  selector: 'app-supervisor',
  imports: [MatToolbarModule, MatCardModule, MatTableModule, CommonModule, InteractiveRow, TicketStatusPipe],
  templateUrl: './supervisor.html',
  styleUrl: './supervisor.scss',
})
export class Supervisor {
  userName: string = '';
  userId: string = '';
  userTickets: Ticket[] = [];
  ticketPriority = TicketPriority;
  ticketStatus = TicketStatus;
  displayedColumns: string[] = [
    'ticketId',
    'description',
    'priority',
    'status',
    'createdAt',
    'age',
    'assignee'
  ];
  constructor(
    private route: ActivatedRoute
  ) {
    route.queryParams.subscribe(params => {
      this.userId = params['id'];
    });
    this.userName = MockData.users.find(u => u.userId === this.userId)?.name || '';
    this.userTickets = MockData.tickets;
  }
  getAssigneeName(assigneeId?: string): string {
    if (!assigneeId) return '-';
    return MockData.users.find(u => u.userId === assigneeId)?.name ?? '-';
  }
 
}
