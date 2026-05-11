---
tags:
  - GON
  - Enums
  - Template
---
# Ability Templates

Abilities belong to the "ability_templates" folder in Data.

Ability templates are, as the name suggests, a base for different abilities to be created off of. Because each ability template corrosponds to a internal "class" which actually codes the movement or action, templates are merely a set of stats for the class that determine how the most basic version of the movement or action should go, usually giving it a cost, target, and damage_instance. Each of these are tables that contain variables belonging to them. This article, then, means moreover to show users both the internal stats of each ability template, as well as how one should use the ability template when making their own ability.

## Overall Structure

Ability templates are found in the **data** folder **ability_templates** in a .gon file the same name. Here is a example of the first, and most basic, ability template.

???+ example "Example Ability"
    Here is a broken down example ability. It uses the most common template of abilities, damaging abilities.
      ```txt
      template_melee_attack { // name of the template. When writing a ability, this is the enum used in the "template" variable.
        class MeleeAttackAbility // the class. These are hardcoded "actions" of the game, but require inputs to proceed.
        graphics { // graphics. gives the animation, speed, and some data for projectile anims, and can be overwritten.
            animation Default
        }
        
        cost { // the cost of the move for the game. Does it use up your action or movement stat? 
            move_points 0
            act_points 1
        }
        // note that, unlike graphics or target, this and an ability's cost are different. An ability's cost tells the game it's mana and such, while the ability_template cost only tells the game which of the two stats are being used up - or both or neither.
        
        target {  // target tells the game what tiles are available. stats such as "mov" are the player's speed stat.
            target_mode direction  //tile, direction, none
            
            aoe_mode line //standard, line, cross, custom
            min_aoe 1
            max_aoe 1
            
            aoe_considers_character_size true
            aoe_excludes_self true

            knockback_mode character_to_tile
        }
        
        damage_instance { // most attacking moves use this. 
            damage 5+bonus_melee_damage
            type melee
            incidentally_collects_pickups true
        }
      }
      ```

## Setup

Here are the enums of a ability template. You'll notice, it is extremely similar to abilities.

???+ info
    When a string is put in brackets, it indicates the variable supports multiple strings within a required bracket.

    ???+ example "Example Code"
        `tags [summon musical]`

| Field Name | Input Type | Description |
|:--|:--|:--|
| [Class](GON_enums_shared_meta.md) | string | Ability class, mostly used when making a template [check ablity_template.gon for classes] |
| [meta](GON_enums_shared_meta.md) | table | Contains the informations about the ability |
| [graphics](GON_enums_shared_graphics.md) | table | Contains the graphical properties of the ability |
| [cost](GON_enums_abilities_cost.md) | table | Contains the costs and requirements of the ability |
| [target](GON_enums_shared_target.md) | table | Contains the targetting properties of the ability |
| damage_instance | table | Contains the damage properties of the ability |
| spawn | table | Used for spawning abilities, contains the spawn properties of the ability |

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