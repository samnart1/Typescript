import { jwt } from "hono/jwt";
import { env } from "hono/adapter";

import type { Context } from "hono";
import {
    API_PREFIX,
    AUTH_ROUTE,
    LOGIN_ROUTE,
    REGISTER_ROUTE,
} from "../constants";
import { APIUser } from "../models/api";

export async function checkJWTAuth(
    c: Context,
    next: () => Promise<void>
): Promise<Response | void> {
    if (
        c.req.path === API_PREFIX + AUTH_ROUTE + REGISTER_ROUTE ||
        c.req.path === API_PREFIX + AUTH_ROUTE + LOGIN_ROUTE
    ) {
        return await next();
    } else {
        const { JWT_SECRET } = env<{ JWT_SECRET: string }, typeof c>(c);
        const jwtMiddleware = jwt({
            secret: JWT_SECRET,
        });
        return jwtMiddleware(c, next);
    }
}

export async function attachUserId(
    c: Context,
    next: () => Promise<void>
): Promise<Response | void> {
    const payload = c.get("jwtPayload") as APIUser;
    if (payload) {
        const id = payload.id;
        c.set("userId", id);
    }
    await next();
}
