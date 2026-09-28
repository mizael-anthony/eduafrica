import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { createSchoolForUser, getSchoolsForUser } from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  schools: router({
    list: protectedProcedure.query(({ ctx }) => getSchoolsForUser(ctx.user.id)),
    create: protectedProcedure
      .input(
        z.object({
          name: z.string().trim().min(2).max(180),
          country: z.string().trim().min(2).max(80),
          city: z.string().trim().min(2).max(100),
          currency: z.string().trim().min(2).max(40).default("FCFA"),
        }),
      )
      .mutation(({ ctx, input }) => createSchoolForUser({ ...input, ownerId: ctx.user.id })),
  }),
});

export type AppRouter = typeof appRouter;
