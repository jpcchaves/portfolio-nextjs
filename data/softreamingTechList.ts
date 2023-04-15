import { faker } from "@faker-js/faker";
import { ITech } from "../types/ITech";

export const softreamingTechList: ITech[] = [
  {
    id: faker.datatype.uuid(),
    name: "TypeScript",
  },
  {
    id: faker.datatype.uuid(),
    name: "ReactJS",
  },
  {
    id: faker.datatype.uuid(),
    name: "Styled Components",
  },
  {
    id: faker.datatype.uuid(),
    name: "NodeJS",
  },
  {
    id: faker.datatype.uuid(),
    name: "ExpressJS",
  },
  {
    id: faker.datatype.uuid(),
    name: "TypeORM",
  },
  {
    id: faker.datatype.uuid(),
    name: "PostgreSQL",
  },
];
