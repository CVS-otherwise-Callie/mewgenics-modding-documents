---
tags:
  - SWF
---
# GON Modding

GON modding is the first of two major parts of modding. GON files, located in the Data folder, are the code that the game reads. The [GON section of this wiki](GON_home.md) explains this further in detail.

## .GON objects

GON objects are, in many facets, technically a table with a name attached to it. These "tables" are given certain metas and assigned different specifications based on the file they show up as. For instance, a object defined in "**furniture.gon.append**" would not be recognized as a enemy, nor the other way around.

### Creating new .GON files and objects

There are two ways to do this; the first way is just by appending to a file that already exists (read more [here](GON_home.md)). The second is by making a new file with a new name; as long as a file is in a certain folder, it is identified as a specific object. (**CITATION NEEDED**)

For instance, if you have made a new class through classes.gon.patch, you could make a .gon file in the abilities folder for it using _your own class name_, such as "mynewclass_abilities". These abilities will then be read by the game and "approved" as a ability object, which can then be thrown into your class's ability pool.

**It is highly recommended to append to a pre-existing file if that's what the scenario calls for.** New enemies should still be in characters/enemies if possible; new disorder abilities should be in abilities/disorders.

### Creating new objects outside of .GON capabilities

Because the base code for most methods in the game is hardcoded under a name or variable, _outside of DLL modding_ we are unable to create "new" objects for anything **outside** of the base .gon files. (For example, a DLL mod could make a extra button, but a .gon mod cannot because we are limited to the functions in the .gon files) You can learn more about that in the [DLL section](DLL_home.md) of this wiki.

## Pre-existing .GON file names

While it's highly suggested to look in the files yourself using the official [File Unpacker](TOOLS_tools.md), here's a handy list of what we can edit/add to for each major .gon file!

A "/" at the end of a header name means it is folder.

### Abilities/

Abilities are coded actives in the game. They constitue what should happen to a subject, who the subject is, and how it affects others in the battle. Read more about abilities [here](GON_ABI_abilitieshome.md)

We've split up the files of Abilities into 3 tables.

???+ info "Allies / Classes"

  These do not include passives.

  | .GON Name | Implement/Purpose |
  |:--|:--|
  | butcher_abilities | Butcher's abilities. |
  | colorless_abilities | Colorless abilities. |
  | druid_abilities | Druid's abilities. |
  | fighter_abilities | Melee's abilities. |
  | hunter_abilities | Hunter's abilities. |
  | jester_abilities | Jester's abilities. |
  | mage_abilities | Mage's abilities. |
  | medic_abilities | Cleric's abilities. |
  | monk_abilities | Monk's abilities. |
  | necromancer_abilities | Necromancer's abilities. |
  | psychic_abilities | Psychic's abilities. |
  | tank_abilities | Tank's abilities. |
  | theif_abilities | Theif's abilities. |
  | Tinkerer | Tinkerer's abilities. |


???+ info "Enemies"

  | .GON Name | Implement/Purpose |
  |:--|:--|
  | finalboss_abilities | The Creator's abilities / attacks. |
  | guillotina_abilities | Guillotina's abilities / attacks. |
  | kaiju_abilities | Both kaiju's abilities / attacks. |
  | rifthead_abilities | Soach's abilities. |
  | special_enemy_abilities | Every non-boss's ability. This basically contains every enemy ability in the game. |
  | throbbing_king_abilities | Throbbing King's abilities. |

???+ info "Misc / Neither"

  | .GON Name | Implement/Purpose |
  |:--|:--|
  | abilities | Provides a basic ability template. Do not use. |
  | armor_abilities | Abilities specifically set from armor. |
  | basic_attacks | Sets up basic cat attacks. |
  | basic_movement | Sets up basic movement styles and abilities. |
  | consumable_item_abilities | "Abilities" - effects for each consumable. |
  | contextual_abilities | Specific abilities for when the player is under a certain status, like trapped or short circuited. |
  | disorder_abilities | Sets up abilities unique to disorders. |
  | event_abilities | Despite the name, these are not abilities from events. Instead, these are used for certain in-battle events, such as rocks falling in the Caves. |
  | item_abilities | Each item's abilities. Weapons, consumables, and head, neck, and face pieces. Base position for AOE usually starts at cat wearing it. |
  | misc_abilities | These are a collection of random abilities too small to meet requirements as a actual ability. I.e. "Move One", "Form Shrink Two", "Do Nothing". |
  | test_abilities | Seems to be a mishmash of unused, half-formed, or unfinished versions of actual abilities. |
  | util_abilities | Contains the basic attack for each class. |




### Ability Templates/

Contains one file, with each ability template. Learn more about them [here.](GON_ABI_abilitytemplates.md)

### AI Presets/

Contains two major files, decision_presets and move_presets.

These presets are used for their respective file names. **Decision** partially controls the AI "thoughts" of a unit, while **move** controls how it should move on the map in relativeness to enemies and friends. You can learn more about them [here.](GON_AP_aipresets.md)

### Characters/

These are the entities of the game, what you see when you open up a battle.

???+ info "Allies"

  | .GON Name | Implement/Purpose |
  |:--|:--|
  | druid_friends | Crow, Squirrel, etc. |
  | familiars | Maggots, pooters, etc. Most of these are variants of enemies. |
  | player_cat | Constitutes the base player cat, shade cat, etc |
  | rare_cat_tests | Constitutes the look for rare enemy cats; Pigs, Dog, Tyler, Sonichu, etc |
  |  |  |

???+ info "Enemies"

  | .GON Name | Implement/Purpose |
  |:--|:--|
  | bosses | Boss enemies. |
  | cat_enemies | Because most cat-shaped enemies use the same system for appearance that player cats use, the game places them in this file to read their meta differently. |
  | cat_minibosses | Same applies as cat_enemies. |
  | enemies | All non-cat, non-small enemies. |
  | guillotina | Guillotina's AI. |
  | rifthead | Soach's AI. |
  | small_enemies | Small enemy AI, like Dips and Maggots. |
  | terminator | Both C-800 and C-1000's AI. |
  | throbbing_king | Throbbing King's AI. |


???+ info "Neither / Misc"

  | .GON Name | Implement/Purpose |
  |:--|:--|
  | bonus_birds | Neutral bird enemies. |
  | inanimate_objects | Ice blocks, gas clouds, bombs, tumor (grid), poops, Gambit's die, etc. |
  | pickups | While what a pickup does is defined in abilities, it's entity is defined here. It's ability is in the passive table. |
  | test_enemies | Half-baked test enemies. Has "Spear Guy" and "Dummy". |
  | world_event_specials | Any part of the world that is added or altered from external AI (like a enemy); i.e. DeadPinky, AlienEgg, SeducedBoulder etc. |