import { faker } from "@faker-js/faker";
import { ITech } from "../types/ITech";

export const miniBlogTechList: ITech[] = [
  {
    id: faker.datatype.uuid(),
    name: "ReactJS",
  },
  {
    id: faker.datatype.uuid(),
    name: "JavaScript",
  },
  {
    id: faker.datatype.uuid(),
    name: "FireBase",
  },
  {
    id: faker.datatype.uuid(),
    name: "HTML",
  },
  {
    id: faker.datatype.uuid(),
    name: "CSS",
  },
];
