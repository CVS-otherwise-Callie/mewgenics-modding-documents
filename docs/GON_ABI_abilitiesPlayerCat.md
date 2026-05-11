---
tags:
  - SWF
  - File
---

###### This article is a subsection of [abilities.](GON_ABI_abilitieshome.md)

# Player Cat Abilities

This article exists only to document each ability for player cats.
Each ability overview contains the title, a description, and it's base code.

## BUTCHER

### HogRush () {: aria-label='GON' }

Trample over to a tile with meat on it.

???- code Hog Rush Code
    ```txt
        HogRush {
            template move
            
            meta {
                name "ABILITY_HOGRUSH_NAME"
                desc "ABILITY_HOGRUSH_DESC"
                animate_name true
                class Butcher
            }

            graphics {
                speed 2
                animation dash
            }

            cost {
                infcantrip true
                mana 7
            }

            temporary_effects {
                Trample 3
            }

            target {
                max_range 100
                restrictions [must_be_moveable must_have_tag must_move]
                target_requires_tag food
                trample_allies_too true
            }
        }
        HogRush2 {
            variant_of HogRush
            
            meta {
                desc "ABILITY_HOGRUSH2_DESC"
            }

            damage_instance {
                damage 3
                override_trample_damage true

                effects {
                    Cleave 1
                }
            }
        }
    ```

