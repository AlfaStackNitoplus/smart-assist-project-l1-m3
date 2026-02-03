import { Menu } from "../core/models/menu.model";
import { RoleMenuMapping } from "../core/models/role-menu.model";
import { Ticket } from "../core/models/ticket.model";
import { User } from "../core/models/user.model";


export class MockData {

    // USERS
    static users: User[] = [
        {
            userId: 'U001',
            name: 'AAA',
            role: 'USER',
            email: 'aaa@smartassist.com',
            password: '12345'
        },
        {
            userId: 'U002',
            name: 'Vishnu',
            role: 'SUPPORT_ENGINEER',
            email: 'vishnu@smartassist.com',
            password: '12345'
        },
        {
            userId: 'U003',
            name: 'Venkatesh',
            role: 'SUPPORT_ENGINEER',
            email: 'venkatesh@smartassist.com',
            password: '12345'
        },
        {
            userId: 'U004',
            name: 'Vrushabh',
            role: 'ADMIN',
            email: 'admin@smartassist.com',
            password: '12345'
        }
    ];

    // MENUS
    static menus: Menu[] = [
        { menuId: 1, menuName: 'Home', icon: 'home', route: '/home' },
        { menuId: 2, menuName: 'Create Ticket', icon: 'add_circle', route: '/create-ticket' },
        { menuId: 3, menuName: 'My Tickets', icon: 'confirmation_number', route: '/my-tickets' },
        { menuId: 4, menuName: 'Track Ticket', icon: 'track_changes', route: '/track-ticket' },
        { menuId: 5, menuName: 'Live Chat', icon: 'chat', route: '/live-chat' },
        { menuId: 6, menuName: 'AI Assistant', icon: 'smart_toy', route: '/ai-assistant' }
    ];

    // ROLE ↔ MENU
    static roleMenuMapping: RoleMenuMapping[] = [
        { role: 'USER', menuIds: [1, 2, 3, 4] },
        { role: 'SUPPORT_ENGINEER', menuIds: [1, 3, 4, 5] },
        { role: 'ADMIN', menuIds: [1, 5, 6] }
    ];

    // TICKETS
    static tickets: Ticket[] = [
        {
            ticketId: 23,
            createdByUserId: 'U001',
            description: 'Home page is not loading',
            priority: 1,
            status: 2,
            createdAt: '2026-01-20T10:30:00Z',
            age: 1,
            assignedToUserId: 'U002'
        },
        {
            ticketId: 22,
            createdByUserId: 'U001',
            description: 'Unable to login',
            priority: 3,
            status: 3,
            createdAt: '2026-01-19T09:00:00Z',
            age: 2,
            assignedToUserId: 'U003'
        },
        {
            ticketId: 21,
            createdByUserId: 'U002',
            description: 'Chat window not opening',
            priority: 2,
            status: 1,
            createdAt: '2026-01-21T08:15:00Z',
            age: 0
        }
    ];
}
