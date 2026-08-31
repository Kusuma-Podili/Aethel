import { SpellDefinition, CastType } from '../gameplay/spells/SpellDefinition.js';
import { DamageType } from '../gameplay/combat/DamagePipeline.js';

export const SpellCompendium = {
  FIREBALL: () => new SpellDefinition({
    id: 'spell_fireball',
    name: 'Fireball',
    castType: CastType.PROJECTILE,
    manaCost: 20,
    cooldown: 0.8,
    castRange: 450,
    damageType: DamageType.FIRE,
    baseDamage: 55,
    spellPowerScaling: 1.2,
    projectileSpeed: 500,
    icon: '🔥',
    description: 'Hurls a fiery blast that scorches the target enemy.'
  }),

  FROST_NOVA: () => new SpellDefinition({
    id: 'spell_frost_nova',
    name: 'Frost Nova',
    castType: CastType.AREA_OF_EFFECT,
    manaCost: 35,
    cooldown: 4.0,
    castRange: 200,
    damageType: DamageType.COLD,
    baseDamage: 80,
    radius: 120,
    icon: '❄️',
    description: 'Unleashes an icy explosion around the caster, freezing nearby enemies.'
  }),

  LIGHTNING_STRIKE: () => new SpellDefinition({
    id: 'spell_lightning_strike',
    name: 'Lightning Strike',
    castType: CastType.INSTANT,
    manaCost: 40,
    cooldown: 2.5,
    castRange: 400,
    damageType: DamageType.LIGHTNING,
    baseDamage: 110,
    icon: '⚡',
    description: 'Calls down thunder from the heavens onto target location.'
  }),

  DIVINE_SHIELD: () => new SpellDefinition({
    id: 'spell_divine_shield',
    name: 'Divine Shield',
    castType: CastType.INSTANT,
    manaCost: 50,
    cooldown: 12.0,
    icon: '🛡️',
    description: 'Surrounds the caster with holy barrier absorbing 1,000 incoming damage.'
  }),

  DASH_BLINK: () => new SpellDefinition({
    id: 'spell_dash_blink',
    name: 'Shadow Blink',
    castType: CastType.INSTANT,
    manaCost: 15,
    cooldown: 2.0,
    icon: '💨',
    description: 'Instantly teleports forward in the direction of movement.'
  })
};
