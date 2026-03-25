---
tags:
  - GON
---

# Abilities Target

| Field Name | Input Type | Description |
|:--|:--|:--|
| target_mode | target mode | How the target tile(s) can be selected [tile, direction, direction8, random_tile, none = No selection] |
| range_mode | range mode | How the range of the ability is selected [standard, square, water_move, groud_move, cross, 8cross, custom, none] |
| aoe_mode | aoe mode | How the area is selected [standard, line, square, circle, perpline, cross, diagcross, 8cross, pierce_cross, map_edges, all, all_except_edges, occupied_tiles, hit_consumer, custom] |
| allow_diagonals | bool | AI Stuff [TEST] |
| min_range | int | Minimum target range of the ability |
| max_range | int | Maximum target range of the ability |
| min_aoe | int | Minimum aoe range of the ability |
| max_aoe | int | Maximum aoe range of the ability |
| custom_range | [[int, int]] | (RANGE_MODE CUSTOM) define a list of tiles with [x,y] |
| custom_aoe | [[int, int]] | (AOE_MODE CUSTOM) define a list of tiles with [x,y] |
| dont_orient | bool | If the character should not orient the in the casting direction |
| aoe_considers_character_size | bool | If the aoe size considers the target's size |
| aoe_excludes_self | bool | If the ability aoe should exclude the source |
| aoe_symmetry | symmetry type | How symmetry is handled for the aoe [none, four_way, eight_way] |
| range_symmetry | symmetry type | How symmetry is handled for the range [none, four_way, eight_way] |
| max_targets | int | Target only a Maximum of X tiles |
| can_multihit | bool | If the ability can hit multiple times |
| multihit | int | The ability hits X times |
| shotgun_mode | bool | If the ability behaves like the shotgun item (projectiles come from you and hit the first thing they come in contact with) |
| stagger_multihit_targets | bool | [TEST] |
| prioritize_face_camera | bool | (AI) if the character should prioritize facing the camera when casting this ability |
| dont_orient_aoe | bool | [TEST] |
| straight_shot | bool | If the targetting is done in a straight line, stopped by objects |
| upgrade_straight_shot_to_piercing | bool | If the straight targetting becomes piercing, passing through objects [TEST] |
| reverse_target_direction | bool | If the character has to flip direction when casting the ability (From the butt) |
| range_considers_character_size | bool | If the range is affected by the character size |
| range_display_include_character_size | bool | [TEST] |
| knockback_mode | knockback mode | how knockback is handled [zero, character_to_tile, target_to_tile] |
| always_bounce | bool | [TEST] |
| delayed_trigger | bool | If the ability is casted next turn |
| shuffle_tile_order | bool | If the ability shuffles the order the tiles are targetted |
| toss_direction_restriction | toss restriction | Restriction that need to be followed when tossing an entity [forward, backwards] |
| aoe_restrictions | [[aoe restriction]](enums/aoe_restrictions.html) | AOE Restrictions that need to be followed for a tile to be accepted in the aoe |
| restrictions | [[restriction]](enums/restrictions.html) | Restrictions that need to be followed for a tile to be accepted as targettable |
| target_requires_tag | string | (MUST_HAVE_TAG) tag check |
| target_requires_element | [element](enums/elements.html) | (MUST_HAVE_ELEMENT) Element check |
| low_health_character_threshold | int | (MUST_HAVE_LOW_HEALTH_CHARACTER) Sets the treshold of a low damage unit to equal or less than X |
| X_is | [X variable](enums/abi_xis.html) | X becomes a chosen variable |
| N | int | N becomes the given int, used for X_is random_0_to_N |
