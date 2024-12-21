import {
    DBUser,
    DBCreateUser,
    DBTask,
    DBCreateTask,
    DBProject,
    DBCreateProject,
    DBCategory,
    DBCreateCategory,
} from "./db";

export type APIUser = Omit<DBUser, "password">;
export type APICreateUser = DBCreateUser;
export type APITask = DBTask;
export type APICreateTask = DBCreateTask;
export type APIProject = DBProject;
export type APICreateProject = DBCreateProject;
export type APICategory = DBCategory;
export type APICreateCategory = DBCreateCategory;
