---
tags:
  - GON
---

# Abilities Spawn

| Field Name | Input Type | Description |
|:--|:--|:--|
| ai_base_score | int | (AI) Base score that dictates the ai's willingness to cast this ability |
| object | [entity id] | Entity or list of possible entities to spawn |
| faction | faction type | Faction of the spawned entity [self, default, enemy, solitary_enemies, auto] |
| layer | layer name | Entity layer where the entity is spawned [self, characters, pickups] |
| post_spawn_statuses | table | Statuses given to the spawned entity |
| additional_passives | table | Passives given to the spawned entity |