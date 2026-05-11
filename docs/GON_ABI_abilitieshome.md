---
tags:
  - SWF
  - File
---
# Abilties

Abilities belong to the "abilities" folder in Data.

Abilities are what constitue changes to different entities. These can be attacks on another entity, healing an entityn, spawning an entity, and much more. There are many more abilities and functions for abilities outside of just player abilities.

Because abilities are called by their name and are not file-specific, ability files can be named whatever.
It is necessary to put your abilities in a abilities folder.

## Format

???+ example "Example Ability"
    Here is a broken down example ability. It uses common parts of a ability.
      ```txt
          None { //name of the ability
              template melee_attack //template of the ability

              graphics {
                  animation DoNone
              }
              
              meta { //meta. 
                  name "None"
                  desc "nothing"
              }

              damage {
                  damage 0
                  type none
              }

              target {
                min_range 1
                max_range 1
                range_mode cross
                restrictions must_have_living_character
                }

              damage_instance {
                damage 0
                type none

                effects {
                    ConstitutionUp 1
                    SpeedUp -1
                }
              }

              sounds {
                oncastpoint AirHorn
                ontrigger AirHorn
              }


          }
      ```

## Setup

Abilities are constructed as a non-file-dependant .gon objects. For what that means, read **[here.](GONOverview.md)**

Here are the enums of a ability.

???+ info
    When a string is put in brackets, it indicates the variable supports multiple strings within a required bracket.

    ???+ example "Example Code"
        `tags [summon musical]`

| Field Name | Input Type | Description |
|:--|:--|:--|
| [Class](GON_enums_shared_meta.md) | string | Ability class, mostly used when making a template [check ablity_template.gon for classes] |
| template | template id | Template the ability will inherit configurations from [check ablity_template.gon for classes] |
| variant_of | ability id | Used for upgraded abilities, the upgraded ability needs the same name with a 2 after it (AbilityName2), will inherit configurations |
| tags | [ string ] | List of ability tags |
| chain_ability | ability id | Ability casted right after this one |
| ai_ability | ability id | (AI) Another ability that is used to calculate the ai's behaviour when using this |
| [meta](GON_enums_shared_meta.md) | table | Contains the informations about the ability |
| [graphics](GON_enums_shared_graphics.md) | table | Contains the graphical properties of the ability |
| [cost](GON_enums_abilities_cost.md) | table | Contains the costs and requirements of the ability |
| [target](GON_enums_shared_target.md) | table | Contains the targetting properties of the ability |
| damage_instance | table | Contains the damage properties of the ability |
| splash_damage | table | Same as damage_instance but applied to the area tiles isntead if present |
| self_damage | table | Same as damage_instance but applied on the source |
| spawn | table | Used for spawning abilities, contains the spawn properties of the ability |
| sounds | table | Contains the sound properties of the ability |
| bonus_passives | table | Contains bonus passives applied to the source when it has this ability |
| temporary_effects | table | Contains effects applied to the source for the duration of the ability |

## Variables

Anywhere iside the ability structure variables can be used to make certain stats of the ability change based on different factors.

| Variable Name | Type | Description |
|:--|:--|:--|
| bonus_range | int | Bonus range value based on the character's dexterity  |
| bonus_ranged_damage | int | Bonus ranged damage value based on the character's dexterity |
| bonus_meele_range | int |  |
| bonus_meele_damage | int | Bonus melee damage value based on the character's strenght |
| bonus_basic_spell_damage | int |   |
| level | int | The level of the ability |
| str | int | The character's strenght |
| spd | int | The character's speed |
| int | int | The character's intelligence |
| cha | int | The character's charisma |
| con | int | The character's constitution |
| dex | int | The character's dexterity |
| lck | int | The character's luck |
| X | int | Value based on what is put in X_is |