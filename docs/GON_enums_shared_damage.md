---
tags:
  - GON
---

# Abilities Damage

???+ info 
    These variables can be used in the following objects:
    ???- info
        - Abilities
        - Ability_Templates 

| Field Name | Input Type | Description |
|:--|:--|:--|
| ai_base_score | int | (AI) Base score that dictates the ai's willingness to cast this ability |
| type | damage type | Damage type [ranged, melee, generic_physical, spell, status_spell, spell_cost] |
| damage | int | Damage dealt by the ability |
| raw_damage | int | Raw damage dealt by the ability (Isn't changed by other thing?) [TEST] |
| heal | int | Healing dealt by the ability |
| knockback | int | knockback dealt by the ability |
| override_trample_damage | int | Overrides the trample damage with X |
| incidentally_collects_pickups | bool | If the ability collects pickupcs from the tiles it hits |
| cant_miss | bool | If the ability can't miss |
| piercing | bool | If the ability ignores shield |
| makes_contact | bool | If the ability counts as contact with the tile |
| force_no_contact | bool | If the ability forces to be no contact to the targetted tile |
| hit_animation_alt | frame label | Change the hit animation for this damage instance |
| force_play_hit_animation | bool | If the ability forces the target to play it's hit animation |
| disallow_modifications | bool | [TEST] |
| layer | layer name | On what entity layer this ability effects are applied [self, characters, pickups, gas, all] |
| elements | [[element]](GON_enums_elements.html) | The element of the ability |