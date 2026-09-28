import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createContext(user: AuthenticatedUser | null): TrpcContext {
  return {
    user,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

const sampleUser: AuthenticatedUser = {
  id: 99,
  openId: "eduafrica-test-user",
  email: "direction@eduafrica.test",
  name: "Aïcha Diallo",
  loginMethod: "manus",
  role: "user",
  createdAt: new Date(),
  updatedAt: new Date(),
  lastSignedIn: new Date(),
};

describe("schools router", () => {
  it("refuses school queries without an authenticated user", async () => {
    const caller = appRouter.createCaller(createContext(null));
    await expect(caller.schools.list()).rejects.toMatchObject({ code: "UNAUTHORIZED" });
  });

  it("validates the school name before attempting persistence", async () => {
    const caller = appRouter.createCaller(createContext(sampleUser));
    await expect(
      caller.schools.create({
        name: "A",
        country: "Sénégal",
        city: "Dakar",
        currency: "FCFA",
      }),
    ).rejects.toMatchObject({ code: "BAD_REQUEST" });
  });

  it("returns an array for an authenticated school list", async () => {
    const caller = appRouter.createCaller(createContext(sampleUser));
    const result = await caller.schools.list();
    expect(Array.isArray(result)).toBe(true);
  });
});
