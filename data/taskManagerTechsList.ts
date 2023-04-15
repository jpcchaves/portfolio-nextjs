import { faker } from "@faker-js/faker";
import { ITech } from "../types/ITech";

export const taskManagerTechsList: ITech[] = [
  {
    id: faker.datatype.uuid(),
    name: "Java",
  },
  {
    id: faker.datatype.uuid(),
    name: "Spring Boot",
  },
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
    name: "ChakraUI",
  },
];
