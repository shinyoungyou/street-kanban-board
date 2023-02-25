import { ColumnType } from '../utils/enums';

export const columnList = [
  {
    id: 0,
    name: ColumnType.BACKLOG,
    color: 'primary'
  },
  {
    id: 1,
    name: ColumnType.IN_PROGRESS,
    color: 'secondary'
  },
  {
    id: 2,
    name: ColumnType.VALIDATE,
    color: 'error'
  },
  {
    id: 3,
    name: ColumnType.COMPLETE,
    color: 'success'
  },
]