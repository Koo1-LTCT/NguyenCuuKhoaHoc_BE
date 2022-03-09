import { format } from 'date-fns';
import { Constant } from 'src/constants/constant';

export class DateTime {
  formatDate(value: string, dateFormat?: string): string {
    if (!value) {
      return '';
    }
    const date = new Date(value);
    return format(date, dateFormat || Constant.DATE_FORMAT);
  }
}

export const dateTime = new DateTime();
