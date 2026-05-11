---
tags:
  - GON
---

# Abilities Graphics

???+ info 
    These variables can be used in the following objects:
    - Abilities
    - Ability_Templates 

| Field Name | Input Type | Description |
|:--|:--|:--|
| animation | frame label | Animation played [check catanims.swf or enemies.swf] |
| prime_animation | frame label | Animation played when ability is primed |
| custom_priming_animation | frame label | Idle animation used while this ability is primed |
| jump_attack_animation | frame label | Landing animation for jumps |
| dash_start_animation | frame label | Start dash animation |
| dash_animation | frame label | Dash animation loop |
| dash_attack_animation | frame label | End dash animation |
| move_start_animation | frame label | Start move animation |
| move_end_animation | frame label | End move animation |
| use_projectile | bool | If projectile is used |
| beam_clip | motionClip name | Laser body graphics |
| beam_cap | motionClip name | Laser end part graphics |
| lob | bool | If the projectile is lobbed |
| lob_height | int | Lobbed projectile height |
| lob_speed | int | Lobbed projectile speed |
| fall_from_sky | bool | If the projectile falls from the sky |
| bounce_on_hit | bool | If the projectile bounces when hitting something |
| projectile | motionClip name | Projectile graphics used |
| single_projectile | bool | If the projectile is only one (shot at the center of the aoe area) |
| speed | int | Speed of the projectile |
| chain_movieclip | motionClip name | Chain graphics used to connect source and projectile |
| chain_distance | int | distance between the chain parts? [TEST] |
| particle | motionClip name | Particle played on hit characters |
| affected_particle | motionClip name | Particle played on affected tiles |
| miss_particle | motionClip name | Particle played on missed tiles (empty or character evaded) |
| area_particle | motionClip name | Particle played in the aoe tiles |
| center_particle | motionClip name | Particle played in the center tile of the aoe |
| darken_screen | bool | If the screen goes dark during the ability |
| darken_screen_exclude_characters_on_tile | bool | If the characters on the targetted tiles are excluded from the darken screen |
| delay | int | Abiltiy graphics cast delay |
| miss_delay | int | Abiltiy graphics cast delay on miss |
| random_delay | [int, int] | Abiltiy graphics cast delay between two random intervals |
| miss_random_delay | [int, int] | Abiltiy graphics cast delay between two random intervals on miss |
| visual_delay_but_simultaneous_damage | int | Delay between the particle effects showing up on every targetted tile, doesn't effect the cast time [TEST] |
| uncatchable | bool | If the projectile is uncatchable |
| palette | int | Palette used for the ability graphics |