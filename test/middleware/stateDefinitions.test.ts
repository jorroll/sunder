import { Context, MiddlewareNextFunction, Router } from "../../lib";
import { Handler } from "../../lib/middleware/router";

describe("Defining a state type is enforced", () => {
  test("Basic state example", async () => {
    const myRoute = (ctx: Context<{}, {session: "123" | "234"}>) => {

    };

    const wrapperThatAddsSession = (handler: Handler<{}, {session: "123"}>) => {
        return async (ctx: Context<any>, next: MiddlewareNextFunction) => {
            ctx.state.session = "123";
            handler(ctx as Context<any, {session: "123"}>, next)
        }
    }

    const router = new Router();
    router.get("/ex1", wrapperThatAddsSession(myRoute));

    // This test is only for the type system, so no need to actually check anything here.
    expect(true).toEqual(true);

    // In this case we don't define what the state looks like, so anything goes, the router won't complain either
    const uncheckedRoute = (ctx: Context) => {
        console.log(ctx.state.doesntexist)
    };
    router.get("/ex2", uncheckedRoute);
  });
});
