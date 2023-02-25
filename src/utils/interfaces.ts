import { ColumnType } from '../utils/enums';

export interface Task {
  id: string;
  title: string;
  column: ColumnType;
  color: string;
}