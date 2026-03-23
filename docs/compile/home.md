---
tags:
  - Compile
---
# Compile-Level Modding General

Compile-level modding goes beyond data-file edits (GON, SWF) by injecting compiled code into the game at runtime. This lets modders add entirely new systems and behaviors that the engine doesn't expose through its normal data pipeline.

## What does "compile-level" mean?

Instead of editing the game's data files, compile-level mods ship as compiled DLLs (renamed to `.asi` and loaded by [Ultimate ASI Loader](https://github.com/ThirteenAG/Ultimate-ASI-Loader)). The mod code runs at game startup, redirecting specific internal paths in memory so the engine picks up custom objects, registries, and function tables alongside the vanilla ones.

The game's executable should never be modified on disk. Everything should happen in memory at runtime.

## When would I need this?

If you need to create something the game doesn't have a data-file slot for. If you want a brand-new status effect type, a new entity class, or custom engine-level behavior, compile-level modding is the way to get there. We're currently focusing on status effects.

## Current state

This area of modding is early and experimental. The pages in this section document what has been proven to work so far. Feel free to reach out to @Maishul on Frank's Mewtastic Workshop if you have questions.
