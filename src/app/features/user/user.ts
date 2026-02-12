import { Component } from '@angular/core';
import { TicketDashboard } from '../../shared/ticket-dashboard/ticket-dashboard';
import { Ticket, TicketStatus } from '../../core/models/ticket.model';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TicketDashboard],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class UserComponent {

  feedback(ticket: Ticket): void {
    alert(`Providing feedback for ticket: ${ticket.title}`);
  }
}