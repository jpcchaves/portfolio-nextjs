import {StaticImageData} from "next/image";

export interface IProject {
    id: string | number;
    title: string;
    backgroundImg: StaticImageData;
    projectUrl: string;
    projectStack: string;
}