---
tags:
  - GON
---

# Abilities Meta

???+ info 
    These variables can be used in the following objects:
    ???- info
        - Abilities
        - Ability_Templates 

| Field Name | Input Type | Description |
|:--|:--|:--|
| name | "string" | Name of the ability, can be directly written as a string or point to the translation file |
| desc | "string" | Description of the ability, can be directly written as a string or point to the translation file |
| class | class id | What cat class this ability is part of |
| type_icon | "string" | Top icon of the ability [movement, spawn, debuff, buff, misc, unknown, heal, defense, ranged, magic] |
| is_move | bool | If this ability is the character movement |
| is_basic_attack | bool | If this ability is the character's basic attack |
| animate_name | bool | If ability name should be shown when used (default true) |
| icon_shell_frame | string | [attack, big_damage, damage] |
| icon_damage_display_eq | int | Changes the damage display on the ability with X |
| icon_damage_type | string | Changes the damage icon type [physical, heal, contextual, magic, combo, contextualspell] |
| is_trinket | bool | If this ability is a trinket ability |