export interface Message {
  id: number;
  senderId: string,
  receiverId: string,
  receiverName: string,
  content: string,
  sentAt: string,
}
