---
tags:
  - GON
---

# Abilities Cost

| Field Name | Input Type | Description |
|:--|:--|:--|
| move_points | int | If this ability uses the character movement points = 1 |
| act_points | int | If this ability uses the character attack points = 1 |
| charge | bit | 1 = When used the ability loses it's charge, and can't be used for the whole fight, 0 = No charge loss when used |
| initial_charge | 1 | If the charge is restored on the start of the turn |
| mana | int | Mana cost |
| infcantrip | bool | Infinite castable ability |
| cantrip | bool | Ability castable only once per turn |
| cantrip_group | string | Ability will share it's used state with every other ability in the group |
| prime | int | (AI) Ability is cast next turn |
| coins | int | Coin cost of the ability |
| requires_reload | bool | If ability requires to be reloaded to be used |
| minimum_STAT | int | Ability castable if STAT is more or equal than X |
| once_per_fight | bool | If ability is castable only once per fight |
| main_turn_only | bool | If ability is castable only during a main turn (No bonus turn) |
| requires_destructible_weapon | bool | If this ability requires a destructible weapon to cast |
| requires_attack_damage_threshold | int | If this ability requires the basic attack damage to be over X |
| must_have_weapon | bool | If this ability requires a weapon to cast |
| must_not_be_consuming | bool | If thi ability requires not having the consuming status |
| cant_cast | bool | If this ability can't be cast |
| allow_offmap_casts | bool | If this ability can be cast when the character is not on the map |
| must_be_offmap | bool | If this ability can be cast only when the character is not on the map |