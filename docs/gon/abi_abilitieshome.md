---
tags:
  - SWF
  - File
---
# Abilties

Abilities are active moves a entity can do. Abilities are designated to **[player cats](https://cvs-otherwise-callie.github.io/mewgenics-modding-documents/gon/abi_catabilities.html)**, **[enemies](https://cvs-otherwise-callie.github.io/mewgenics-modding-documents/gon/abi_enemyabilities.html)**, and **[bosses](https://cvs-otherwise-callie.github.io/mewgenics-modding-documents/gon/abi_bosscatabilities.html)**.

Because abilities are called by their name and are not file-specific, ability files can be named whatever.
It is highly recommended to put your abilities in a abilities folder.

## Setup

Abilities are constructed like a .gon objects. For what that means, read **[here.](https://cvs-otherwise-callie.github.io/mewgenics-modding-documents/GONOverview.html)**. 

Here are the enums of a ability.

???+ info
    When a string is put in brackets, it indicates the variable supports multiple strings within a required bracket.

    ???+ example "Example Code"
        `tags [summon musical]`

| Variable Name | Possible Values | Description |
|:--|:--|:--|
| Class | string | Ability class, only used when making a template [check ablity_template.gon for classes] |
| template | string | Used for upgraded abilities, the upgraded ability needs the same name with a 2 after it (AbilityName2), will inherit configurations |
| variant_of | string | Used for upgraded abilities, the upgraded ability needs the same name with a 2 after it (AbilityName2), will inherit configurations |
| tags | [ string ] | List of ability tags |
| chain_ability | string | Ability casted right after this one |
| ai_ability | string | (AI) Another ability that is used to calculate the ai chance for this one |
| meta | table | Contains the information about the ability |
| graphics | table | Contains the graphical properties of the ability |
| cost | table | Contains the costs and requirements of the ability |
| target | table | Contains the targetting properties of the ability |
| damage_instance | table | Contains the damage properties of the ability |
| spawn | table | Used for spawning abilities, contains the spawn properties of the ability |
| sounds | table | Contains the sound properties of the ability >note add where sounds are located |
| self_damage | table | Same as damage_instance but applied on the source |
| bonus_passives | table | Contains bonus passives applied to the source when it has this ability |
| temporary_effects | table | Contains effects applied to the source for the duration of the ability |


## Format

This page is currently under creation or awaiting editing.