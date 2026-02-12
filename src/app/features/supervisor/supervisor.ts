import { Component } from '@angular/core';
import { TicketDashboard } from '../../shared/ticket-dashboard/ticket-dashboard';
import { Ticket } from '../../core/models/ticket.model';

@Component({
  selector: 'app-supervisor',
  imports: [TicketDashboard],
  templateUrl: './supervisor.html',
  styleUrl: './supervisor.scss',
})
export class Supervisor {

  viewTicketDetails(ticket: Ticket): void {
    alert(`Viewing details for ticket: ${ticket.title}`);

  }
}
