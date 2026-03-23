---
tags:
  - Compile
---
# Status Effect Modding — What We Can Do and How

## The Goal

Add brand-new status effects to Mewgenics with their own names, icons, tooltips, and gameplay behavior. Multiple mods can each add their own statuses without stepping on each other.

## What We Can Do Right Now

* **Create fully original status effects** that the game treats as first-class citizens. They show up in the UI with icons and stack counters, have working tooltips, and tick/expire like any vanilla status.
* **Give custom statuses different gameplay properties** from whatever vanilla status they're based on. Our proof-of-concept creates a Bleed variant that's categorized as a buff instead of a debuff, so it survives debuff cleanses. Any property the game tracks per-status (damage type, tick behavior, immunity flags, etc.) can be customized independently.
* **Run multiple custom statuses at once** on the same entity, alongside vanilla statuses, with no conflicts. Each custom status has its own identity, so the game never confuses it with another.
* **Ship as a DLL mod with GON companion.** The mod is a single compiled DLL (renamed to .asi) loaded by [Ultimate ASI Loader](https://github.com/ThirteenAG/Ultimate-ASI-Loader), plus some GON data files. For now it runs as a sideloaded ASI mod with a companion Mewtator-style GON mod.

## What We Don't Touch

We never modify the game's executable on disk. Everything happens in memory at runtime. The game loads our mod and our code redirects a few specific internal paths while the game is running. If our mod isn't installed, the game behaves exactly as normal.

## The Key Insight

Mewgenics handles status effects using a common game-engine pattern: every status is an object, and each object has a table of function pointers (a "vtable") that tells the engine what to do with it. When the game needs to tick a status, display its icon, check its name, or remove it, it looks up the right function in that table and calls it. It doesn't care *where* the function came from, it just calls whatever's in the table.

This means that once a status object exists in memory with a valid function table, the engine's runtime systems (ticking, display, removal, etc.) all work with it automatically. The only parts of the engine that reject unknown status names are the creation paths, i.e. the places where the game reads a status name from data and decides what object to build.

So our strategy is: intercept those few creation paths, trick them into building a vanilla status object, then swap in our own function table so the object identifies itself as our custom status from that point forward.

## How It Works (Simplified)

**Step 1: Registration.** When the game starts up, it builds a registry of all 792 vanilla status effects. We hook into that startup process and insert our custom status name into the same registry, copying most properties from a vanilla "template" status (like Bleed) but changing whichever ones we want to customize (like category).

**Step 2: Creation interception.** The game has two main functions that create status instances: one for loading statuses from data files, and one for applying them at runtime. Both of these contain hardcoded lists of every vanilla status name, and they reject anything not on the list. We intercept these functions. When they receive our custom status name, we temporarily swap it for the template's name so the function builds the object successfully. As soon as the object is created, we swap in our custom function table so it reports our name, our type ID, and our display properties.

**Step 3: Display.** The game's display system looks up icons and rendering info by status name. Since our custom name isn't in that lookup table, we override the display function so it borrows rendering properties from the template (getting its icon and visual style) but tweaks one value so the game treats it as a *separate* UI entry rather than merging it with the template's icon.

**Step 4: Data files.** We provide a small GON data file that maps our internal status name to a player-facing display name and tooltip text. From the player's perspective, it just looks like a new status.

## What Each Piece Does

|Component|Purpose|
|-|-|
|Compiled DLL (.asi via Ultimate ASI Loader)|Runs at game startup, sets up hooks and the custom function table|
|6 hooks|Intercept the creation paths, registration, and warning-log functions|
|Custom function table|5 overridden entries (name, type ID, type hierarchy, name matching, display) out of 172 total|
|Registry entries|Our status registered in the same 10 internal lookup tables as vanilla statuses|
|GON data files|Display name, tooltip, and test entity that uses the new status|

## Limitations and Caveats

* **Version-specific.** The hook addresses are tied to one specific build of the game executable. A game update will change these addresses, and the mod needs to be updated to match. Genericizing the project is a current WIP.
* **Template-dependent visuals.** Custom statuses borrow their icon from the template they're based on. Fully custom icons would require additional work on the display config registry.
* **No custom tick logic yet.** The proof-of-concept inherits all gameplay behavior from the template (Bleed). The function table has slots for custom per-tick behavior, turn-end behavior, initialization, and more. They're ready to be overridden, but we haven't built examples of custom gameplay logic yet.

## Extension Opportunities

The function table has 172 slots. We currently override 5 for identity and display. The remaining 167 are all replaceable using the same mechanism. Interesting ones for gameplay modding include per-tick behavior, end-of-turn behavior, initialization logic, immunity flags, and stack-change callbacks.

The registration infrastructure is also generic, so adding a second or third custom status type means adding another function table, another set of registry entries, and another name check in the creation hooks, which are all theoretically possible but currently untested. The hook framework itself is shared.



## More Info

Feel free to reach out to @Maishul on Frank's Mewtastic Workshop for more details. I have lots of info in a mess of a workspace so I can probably answer any questions.

