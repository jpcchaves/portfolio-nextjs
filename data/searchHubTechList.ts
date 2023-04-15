import { faker } from "@faker-js/faker";
import { ITech } from "../types/ITech";

export const searchHubTechList: ITech[] = [
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
    name: "TailwindCSS",
  },
  {
    id: faker.datatype.uuid(),
    name: "Axios",
  },
];
