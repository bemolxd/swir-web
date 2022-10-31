export interface ItemAvailability {
  itemId: string;
  isNowAvailable: boolean;
  availableNowCount: number;
  occupiedDates: OccupiedDate[];
}

export interface OccupiedDate {
  dateFrom: string;
  dateTo: string;
  occupiedQuantity: number;
  orderDoc: string;
  techId: string;
  isOutOfBounds?: boolean;
}
