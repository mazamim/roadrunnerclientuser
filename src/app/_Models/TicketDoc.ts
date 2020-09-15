export interface TicketDoc {
  id: number;
  url: string;
  description: string;
  dateAdded: Date;
  isMain: boolean;
  isApproved: boolean;
}
