import { IProject } from "../types/IProject";
import { faker } from "@faker-js/faker";

import SoftreamingImg from "../public/assets/projects/softreaming.png";
import MiniblogImg from "../public/assets/projects/miniblog.png";
import TaskmanagerImg from "../public/assets/projects/taskmanager.png";
import SearchHubImg from "../public/assets/projects/searchhub.png";

export const projectsDataList: IProject[] = [
  {
    id: faker.datatype.uuid(),
    title: "TaskManager",
    projectUrl: "/taskmanager",
    projectStack: "Java, Spring Boot, React e TypeScript",
    backgroundImg: TaskmanagerImg,
  },
  {
    id: faker.datatype.uuid(),
    title: "Softreaming",
    projectUrl: "/softreaming",
    projectStack: "NodeJS, ExpressJS, React e TypeScript",
    backgroundImg: SoftreamingImg,
  },
  {
    id: faker.datatype.uuid(),
    title: "MiniBlog",
    projectUrl: "/miniblog",
    projectStack: "ReactJS",
    backgroundImg: MiniblogImg,
  },
  {
    id: faker.datatype.uuid(),
    title: "SearchHub",
    projectUrl: "/searchhub",
    projectStack: "React e TypeScript",
    backgroundImg: SearchHubImg,
  },
];
