---
id: changelog
title: Changelog
---

## 0.9.0
**Date:** 2021-10-02
* **Breaking Change**: `Context.state` has been renamed to `Context.data` to prevent confusion when using Durable Objects.
* The Sunder app constructor now takes a `state` argument for injecting Durable Object state.
* `Context.state` now contains a Durable Worker state (if any), this means that Sunder now has first class Durable Objects support!

## 0.8.0
**Date:** 2021-09-27

* **Breaking Change:** All Sunder types now take an additional `EnvironmentType` generic type argument, it is the first such argument (before `ParamsType` and `StateType`).  
    The *tl;dr* fix is to replace `Context<{id: string}>` with `Context<{}, {id: string}>`.
* Performance improvement for `get`, `set` and `has` shorthands on `ctx.request` an anonymous function was created on every invocation before this change.
* Support for `modules` build-mode in Cloudflare Workers.
  * A new `fetch` method was added to `Sunder` applications that has the same signature as the 
  * The `handle` method on `Sunder` now takes a second argument where you can provide your own `env` in case you are not using `modules`.
  * The Sunder Context now has a `env` field, which is type-checked by the Typescript compiler (and supports auto-completion!). 

## 0.7.2
**Date:** 2021-05-24

* Changed `self.Blob` to `globalThis.Blob` to support different environments more easily.

## 0.7.1
**Date:** 2021-02-14

* Added missing `Router#options` function to the router to handle OPTIONS requests.


## 0.7.0
**Date:**: 2021-01-31

* Potentially breaking change: Rename `createError` to `createHttpError` (not exposed from top level Sunder package, but you may have imported it anyway).
* Handlers and Middleware now have a second generic argument, their `StateType`, which allows you to type what `context.state` your handler/middleware expects.
* The `Router` class now has a generic type argument, which allows you to define the type of `context.state` when it enters your Router.