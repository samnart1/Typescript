export type Email = `${string}@${string}.${string}`;
export type Priority = "low" | "medium" | "high";
export type Status = "pending" | "in-progress" | "completed" | "archived";

export interface DBEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface DBUser extends DBEntity {
    name: string;
    username: string;
    email: Email;
    password: string;
}

export interface DBTask extends DBEntity {
    title: string;
    description?: string;
    dueDate: Date;
    priority: Priority;
    status: Status;
    assignedTo?: DBUser["id"];
    categoryId?: DBCategory["id"];
    projectId?: DBProject["id"];
}

export interface DBCategory extends DBEntity {
    name: string;
    description?: string;
}

export interface DBProject extends DBEntity {
    name: string;
    description?: string;
    ownerId: DBUser["id"];
}

export type DBCreateUser = Pick<
    DBUser,
    "name" | "username" | "email" | "password"
>;
export type DBCreateTask = Pick<
    DBTask,
    | "title"
    | "description"
    | "dueDate"
    | "priority"
    | "status"
    | "assignedTo"
    | "categoryId"
    | "projectId"
>;
export type DBCreateCategory = Pick<DBCategory, "name" | "description">;
export type DBCreateProject = Pick<
    DBProject,
    "name" | "description" | "ownerId"
>;
