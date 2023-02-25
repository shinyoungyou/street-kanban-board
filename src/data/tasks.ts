import { ColumnType } from '../utils/enums';

import shortId from 'shortid';
import { faker } from '@faker-js/faker/locale/en_CA';

export const generateTaskList = [
  {
    id: shortId.generate(),
    title: faker.address.streetAddress(),
    column: ColumnType.BACKLOG,
    color: '#63B3ED',
  },
  {
    id: shortId.generate(),
    title: faker.address.streetAddress(),
    column: ColumnType.IN_PROGRESS,
    color: '#F687B3',
  },
  {
    id: shortId.generate(),
    title: faker.address.streetAddress(),
    column: ColumnType.VALIDATE,
    color: '#FC8181',
  },
  {
    id: shortId.generate(),
    title: faker.address.streetAddress(),
    column: ColumnType.COMPLETE,
    color: '#68D391',
  },
  {
    id: shortId.generate(),
    title: faker.address.streetAddress(),
    column: ColumnType.BACKLOG,
    color: '#76E4F7'
  },
  {
    id: shortId.generate(),
    title: faker.address.streetAddress(),
    column: ColumnType.IN_PROGRESS,
    color: '#F6E05E',
  },
  {
    id: shortId.generate(),
    title: faker.address.streetAddress(),
    column: ColumnType.VALIDATE,
    color: '#F6AD55',
  },
  {
    id: shortId.generate(),
    title: faker.address.streetAddress(),
    column: ColumnType.COMPLETE,
    color: '#4FD1C5',
  },
]