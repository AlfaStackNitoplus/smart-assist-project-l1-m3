import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { Ticket, TicketPriority, TicketStatus } from '../../core/models/ticket.model';
import { User, UserRole } from '../../core/models/user.model';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MockData } from '../../assets/mock-data';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InteractiveRow } from '../directive/interactive-row';
import { AgePipe } from '../pipes/age-pipe-pipe';
import { TicketStatusPipe } from '../pipes/ticket-status-pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-dashboard',
  imports: [CommonModule, MatTableModule, MatChipsModule, MatIconModule,
    MatExpansionModule, MatInputModule, MatTooltipModule,
    AgePipe, InteractiveRow, TicketStatusPipe,
    MatButtonModule],
  templateUrl: './ticket-dashboard.html',
  styleUrl: './ticket-dashboard.scss',
})
export class TicketDashboard {
  @Output() viewDetails = new EventEmitter<Ticket>();
  @Output() feedBack = new EventEmitter<Ticket>();

  TicketStatus = TicketStatus;

  // Enum exposure for template
  public UserRole = UserRole;

  public currentUser!: User;
  public tickets: Ticket[] = [];
  public userId: string = '';
  cols = ['title', 'status', 'priority', 'age'];
  public displayedColumns: string[] = [];
  constructor(
    private route: ActivatedRoute
  ) {
    route.queryParams.subscribe(params => {
      this.userId = params['id'];
    });
    this.currentUser = MockData.users.find(u => u.userId === this.userId)!;
    if (this.currentUser?.role !== UserRole.END_USER) {
      this.displayedColumns = [...this.cols];
      this.displayedColumns.push('createdBy');
    } else {
      this.displayedColumns = this.cols;
    }
    this.tickets = MockData.tickets.filter(t => {
      const role = this.currentUser?.role;
      const userId = this.currentUser?.userId;
      if (role === UserRole.END_USER) {
        return t.createdByUserId === userId;
      } else if (role === UserRole.SUPPORT_ENGINEER) {
        return t.assignedToUserId === userId;
      } else {
        return true;
      }
    });


  }


  ticketStatus = TicketStatus;
  ticketPriority = TicketPriority;

  getUserName(assigneeId?: string): string {
    if (!assigneeId) return '-';
    return MockData.users.find(u => u.userId === assigneeId)?.name ?? '-';
  }

  getPriorityClass(priority: TicketPriority) {
    return {
      'priority-low': priority === TicketPriority.Low,
      'priority-medium': priority === TicketPriority.Medium,
      'priority-high': priority === TicketPriority.High
    };
  }

  // Action Methods
  provideInput(t: Ticket) { console.log('Input requested for', t.ticketId); }
  resolve(t: Ticket) { console.log('Resolving', t.ticketId); }
  delegate(t: Ticket) { console.log('Delegating', t.ticketId); }
  requestInput(t: Ticket) { console.log('Requesting input for', t.ticketId); }
  assign(t: Ticket) {
    this.viewDetails.emit(t);
  }
  close(t: Ticket) { console.log('Closing', t.ticketId); }
  reopen(t: Ticket) { console.log('Reopening', t.ticketId); }
  feedback(t: Ticket) {
    this.feedBack.emit(t);
  }
}