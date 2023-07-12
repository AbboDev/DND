import { Condition, DamageType } from "~/types/damage";
import { Race, Size } from "~/types/race";

export const races: Race[] = [
  {
    name: "Aarakocra",
    source: "DMG",
    size: [Size.MEDIUM],
    speed: {
      walk: 20,
      fly: 50,
    },
    ability: {
      dexterity: 2,
      wisdom: 2,
    },
    traitTags: ["Natural Weapon", "NPC Race"],
    languageProficiencies: {
      auran: true,
    },
    entries: [
      {
        name: "Dive Attack",
        entries: [
          "If you are flying and dive at least 30 ft. straight toward a target and then hit it with a melee weapon attack, the attack deals an extra {@dice 1d6} damage to the target.",
        ],
        type: "entries",
      },
      {
        name: "Talons",
        entries: [
          "You are proficient with your unarmed strikes, which deal {@damage 1d4} slashing damage on a hit.",
        ],
        type: "entries",
      },
      {
        name: "Language",
        entries: ["You can speak, read, and write Auran."],
        type: "entries",
      },
    ],
  },
  {
    name: "Aarakocra",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.MEDIUM],
    speed: {
      walk: 30,
      fly: true,
    },
    traitTags: ["Natural Weapon"],
    additionalSpells: [
      {
        innate: {
          "3": ["gust of wind"],
        },
        ability: {
          choose: ["intelligence", "wisdom", "charisma"],
        },
      },
    ],
    entries: [
      {
        type: "entries",
        name: "Flight",
        entries: [
          "Because of your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.",
        ],
      },
      {
        type: "entries",
        name: "Talons",
        entries: [
          "You have talons that you can use to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.",
        ],
      },
      {
        type: "entries",
        name: "Wind Caller",
        entries: [
          "Starting at 3rd level, you can cast the {@spell gust of wind} spell with this trait, without requiring a material component. Once you cast the spell with this trait, you can't do so again until you finish a long rest. You can also cast the spell using any spell slots you have of 2nd level or higher.",
          "Intelligence, Wisdom, or Charisma is your spellcasting ability for when you cast {@spell gust of wind} with this trait (choose when you select this race).",
        ],
      },
    ],
  },
  {
    name: "Aasimar",
    source: "DMG",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      wisdom: 1,
      charisma: 2,
    },
    age: {
      mature: 20,
      max: 100,
    },
    darkvision: 60,
    languageProficiencies: {
      common: true,
      celestial: true,
    },

    resist: [DamageType.NECROTIC, DamageType.RADIANT],
    additionalSpells: [
      {
        innate: {
          "3": {
            daily: {
              "1": ["lesser restoration"],
            },
          },
          "5": {
            daily: {
              "1": ["daylight"],
            },
          },
        },
        ability: "charisma",
        known: {
          "1": ["light#c"],
        },
      },
    ],
    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Aasimar mature at the same rate as humans but live a few years longer.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Aasimar are built like well-proportioned humans. Your size is Medium.",
        ],
      },
      {
        name: "Darkvision",
        entries: [
          "Thanks to your celestial heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of grey.",
        ],
        type: "entries",
      },
      {
        name: "Celestial Resistance",
        entries: ["You have resistance to necrotic and radiant damage."],
        type: "entries",
      },
      {
        name: "Celestial Legacy",
        entries: [
          "You know the {@spell light} cantrip. Once you reach 3rd level, you can cast the {@spell lesser restoration} spell once with this trait, and you regain the ability to do so when you finish a long rest. Once you reach 5th level, you can cast the {@spell daylight} spell once with this trait, and you regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        ],
        type: "entries",
      },
      {
        name: "Language",
        entries: ["You can speak, read, and write Common and Celestial."],
        type: "entries",
      },
    ],
  },
  {
    name: "Aasimar",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.SMALL, Size.MEDIUM],
    speed: 30,
    age: {
      max: 180,
    },
    darkvision: 60,
    resist: [DamageType.NECROTIC, DamageType.RADIANT],
    additionalSpells: [
      {
        ability: {
          choose: ["intelligence", "wisdom", "charisma"],
        },
        known: {
          "1": ["light#c"],
        },
      },
    ],
    entries: [
      {
        type: "entries",
        name: "Size",
        entries: [
          "You are Medium or Small. You choose the size when you select this race.",
        ],
      },
      {
        type: "entries",
        name: "Celestial Resistance",
        entries: ["You have resistance to necrotic damage and radiant damage."],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Healing Hands",
        entries: [
          "As an action, you can touch a creature and roll a number of d4s equal to your proficiency bonus. The creature regains a number of hit points equal to the total rolled. Once you use this trait, you can't use it again until you finish a long rest.",
        ],
      },
      {
        type: "entries",
        name: "Light Bearer",
        entries: [
          "You know the {@spell light} cantrip. Charisma is your spellcasting ability for it.",
        ],
      },
      {
        type: "entries",
        name: "Celestial Revelation",
        entries: [
          "When you reach 3rd level, choose one of the revelation options below. Thereafter, you can use a bonus action to unleash the celestial energy within yourself, gaining the benefits of that revelation. Your transformation lasts for 1 minute or until you end it as a bonus action. Once you transform using your revelation below, you can't use it again until you finish a long rest.",
          {
            type: "list",
            items: [
              {
                type: "item",
                name: "Necrotic Shroud",
                entry:
                  "Your eyes briefly become pools of darkness, and ghostly, flightless wings sprout from your back temporarily. Creatures other than your allies within 10 feet of you that can see you must succeed on a Charisma saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or become {@condition frightened} of you until the end of your next turn. Until the transformation ends, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus.",
              },
              {
                type: "item",
                name: "Radiant Consumption",
                entry:
                  "Searing light temporarily radiates from your eyes and mouth. For the duration, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, each creature within 10 feet of you takes radiant damage equal to your proficiency bonus. Until the transformation ends, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus.",
              },
              {
                type: "item",
                name: "Radiant Soul",
                entry:
                  "Two luminous, spectral wings sprout from your back temporarily. Until the transformation ends, you have a flying speed equal to your walking speed, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus.",
              },
            ],
            style: "list-hang-notitle",
          },
        ],
      },
    ],
    _versions: [
      {
        name: "Aasimar; Necrotic Shroud",
        source: "MPMM",
        _mod: {
          entries: {
            mode: "replaceArr",
            replace: "Celestial Revelation",
            items: {
              name: "Celestial Revelation (Necrotic Shroud)",
              type: "entries",
              entries: [
                "When you reach 3rd level, you can use a bonus action to transform yourself. Your transformation lasts for 1 minute or until you end it as a bonus action. Once you transform using your revelation, you can't use it again until you finish a long rest.",
                "Your eyes briefly become pools of darkness, and ghostly, flightless wings sprout from your back temporarily. Creatures other than your allies within 10 feet of you that can see you must succeed on a Charisma saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or become {@condition frightened} of you until the end of your next turn. Until the transformation ends, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus.",
              ],
            },
          },
        },
      },
      {
        name: "Aasimar; Radiant Consumption",
        source: "MPMM",
        _mod: {
          entries: {
            mode: "replaceArr",
            replace: "Celestial Revelation",
            items: {
              name: "Celestial Revelation (Radiant Consumption)",
              type: "entries",
              entries: [
                "When you reach 3rd level, you can use a bonus action to transform yourself. Your transformation lasts for 1 minute or until you end it as a bonus action. Once you transform using your revelation, you can't use it again until you finish a long rest.",
                "Searing light temporarily radiates from your eyes and mouth. For the duration, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, each creature within 10 feet of you takes radiant damage equal to your proficiency bonus. Until the transformation ends, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus.",
              ],
            },
          },
        },
      },
      {
        name: "Aasimar; Radiant Soul",
        source: "MPMM",
        _mod: {
          entries: {
            mode: "replaceArr",
            replace: "Celestial Revelation",
            items: {
              name: "Celestial Revelation (Radiant Soul)",
              type: "entries",
              entries: [
                "When you reach 3rd level, you can use a bonus action to transform yourself. Your transformation lasts for 1 minute or until you end it as a bonus action. Once you transform using your revelation, you can't use it again until you finish a long rest.",
                "Two luminous, spectral wings sprout from your back temporarily. Until the transformation ends, you have a flying speed equal to your walking speed, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus.",
              ],
            },
          },
        },
      },
    ],
  },
  {
    name: "Aetherborn",
    source: "PSK",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      charisma: 2,
      choose: [
        [
          {
            from: [
              "strength",
              "dexterity",
              "constitution",
              "intelligence",
              "wisdom",
            ],
            count: 2,
          },
        ],
      ],
    },
    age: {
      mature: 0,
      max: 3,
    },
    darkvision: 60,
    skillProficiencies: {
      intimidation: true,
    },

    languageProficiencies: {
      common: true,
      anyStandard: 2,
    },
    resist: [DamageType.NECROTIC],
    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Aetherborn come into being as adults and live no more than a few years.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "As a rule, aetherborn are driven by hedonism and self-interest, making them neutral at best and thoroughly evil at worst. Neutral aetherborn might devote much of their time (and wealth) to parties and social activity, while evil aetherborn are usually involved in the criminal underworld.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Aetherborn are about the same size as humans, ranging from 5 to 6 feet tall. They are quite light\u2014only about 100 pounds\u2014and their weight diminishes as they age and more and more of their substance returns to the aethersphere. Your size is Medium.",
        ],
      },
      {
        name: "Darkvision",
        entries: [
          "Thanks to your heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Born of Aether",
        entries: ["You have resistance to necrotic damage."],
        type: "entries",
      },
      {
        name: "Menacing",
        entries: ["You have proficiency in the {@skill Intimidation} skill."],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common and two other languages of your choice.",
        ],
        type: "entries",
      },
      {
        type: "inset",
        name: "Gift of the Aetherborn",
        entries: [
          'An unknown aetherborn, desperately seeking a means to extend their short life, discovered a process of transformation that prolonged their existence\u2014by giving them the ability to feed on the life essence of other beings. Since then, other aetherborn have learned and carried out this monstrous transformation, and aetherborn with this "gift" have become a small minority among an already small population.',
          "A gifted aetherborn has the ability to drain the life essence of other beings. Similar to the way heat is transferred from a warm object to a cold one, a gifted aetherborn need only touch another living being with a clawed hand to draw life essence out, fueling their own continued existence while draining strength and vitality from their victim.",
          'For many aetherborn, living as they do for indulgence and instant gratification, the concepts of "want" and "need" are virtually synonymous. But Aetherborn with this gift understand what it is to truly need, for they develop a hunger for life essence that far exceeds any desires they might have felt before their transformation. A gifted aetherborn who abstains from this feeding deteriorates even more rapidly than other aetherborn, while enduring unspeakable agony caused by the deprivation of life energy.',
          'At the DM\'s option, an aetherborn character can research methods of achieving this dark "gift." The process is similar to inventing and manufacturing a rare magic item (see "Inventing and Manufacturing Devices" earlier in this document). But rather than aether, the process requires a variety of rare unguents and unusual ingredients that make up the cost of researching and undergoing the transformation.',
          "An aetherborn with this gift gains the Drain Life ability: a natural attack that deals {@dice 1d6} necrotic damage and restores the same number of hit points to the aetherborn. However, if the aetherborn goes for 7 days without dealing this damage, their hit point maximum is reduced by {@dice 1d6} per week. This reduction can't be removed until the aetherborn has used their Drain Life ability and completed a long rest.",
        ],
      },
    ],
  },
  {
    name: "Astral Elf",
    source: "AAG",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["humanoid"],
    creatureTypeTags: ["elf"],
    size: [Size.MEDIUM],
    speed: 30,
    age: {
      max: 750,
    },
    darkvision: 60,
    traitTags: ["Improved Resting"],
    skillProficiencies: {
      perception: true,
    },

    additionalSpells: [
      {
        known: {
          "1": ["dancing lights#c"],
        },
        ability: {
          choose: ["intelligence", "wisdom", "charisma"],
        },
      },
      {
        known: {
          "1": ["light#c"],
        },
        ability: {
          choose: ["intelligence", "wisdom", "charisma"],
        },
      },
      {
        known: {
          "1": ["sacred flame#c"],
        },
        ability: {
          choose: ["intelligence", "wisdom", "charisma"],
        },
      },
    ],
    entries: [
      {
        type: "entries",
        name: "Creature Type",
        entries: [
          "You are a Humanoid. You are also considered an elf for any prerequisite or effect that requires you to be an elf.",
        ],
      },
      {
        type: "entries",
        name: "Astral Fire",
        entries: [
          "You know one of the following cantrips of your choice: {@spell dancing lights}, {@spell light}, or {@spell sacred flame}. Intelligence, Wisdom, or Charisma is your spellcasting ability for it (choose when you select this race).",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of yourself as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Fey Ancestry",
        entries: [
          "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself.",
        ],
      },
      {
        type: "entries",
        name: "Keen Senses",
        entries: ["You have proficiency in the {@skill Perception} skill."],
      },
      {
        type: "entries",
        name: "Starlight Step",
        entries: [
          "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        ],
      },
      {
        type: "entries",
        name: "Astral Trance",
        entries: [
          "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you remain conscious.",
          "Whenever you finish this trance, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the {@book Player's Handbook|PHB}. You mystically acquire these proficiencies by drawing them from shared elven memory and the experiences of entities on the Astral Plane, and you retain them until you finish your next long rest.",
        ],
      },
    ],
  },
  {
    name: "Autognome",
    source: "AAG",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["construct"],
    size: [Size.SMALL],
    speed: 30,
    traitTags: ["Improved Resting", "Natural Armor"],
    toolProficiencies: {
      any: 2,
    },
    resist: [DamageType.POISON],
    conditionImmune: [Condition.DISEASE],
    entries: [
      {
        type: "entries",
        name: "Creature Type",
        entries: ["You are a Construct."],
      },
      {
        type: "entries",
        name: "Armored Casing",
        entries: [
          "You are encased in thin metal or some other durable material. While you aren't wearing armor, your base Armor Class is 13 + your Dexterity modifier.",
        ],
      },
      {
        type: "entries",
        name: "Built for Success",
        entries: [
          "You can add a {@dice d4} to one attack roll, ability check, or saving throw you make, and you can do so after seeing the {@dice d20} roll but before the effects of the roll are resolved. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        ],
      },
      {
        type: "entries",
        name: "Healing Machine",
        entries: [
          "If the {@spell mending} spell is cast on you, you can spend a Hit Die, roll it, and regain a number of hit points equal to the roll plus your Constitution modifier (minimum of 1 hit point).",
          "In addition, your creator designed you to benefit from several spells that preserve life but that normally don't affect Constructs: {@spell cure wounds}, {@spell healing word}, {@spell mass cure wounds}, {@spell mass healing word}, and {@spell spare the dying}.",
        ],
      },
      {
        type: "entries",
        name: "Mechanical Nature",
        entries: [
          "You have resistance to poison damage and immunity to disease, and you have advantage on saving throws against being {@condition paralyzed} or {@condition poisoned}. You don't need to eat, drink, or breathe.",
        ],
      },
      {
        type: "entries",
        name: "Sentry's Rest",
        entries: [
          "When you take a long rest, you spend at least 6 hours in an inactive, motionless state, instead of sleeping. In this state, you appear inert, but you remain conscious.",
        ],
      },
      {
        type: "entries",
        name: "Specialized Design",
        entries: [
          "You gain two tool proficiencies of your choice, selected from the {@book Player's Handbook|PHB}.",
        ],
      },
    ],
  },
  {
    name: "Aven",
    source: "PSA",
    size: [Size.MEDIUM],
    speed: {
      walk: 25,
      fly: 30,
    },
    ability: {
      dexterity: 2,
    },

    age: {
      mature: 20,
      max: 100,
    },
    languageProficiencies: {
      common: true,
      other: true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Like humans, aven reach adulthood in their late teens and can theoretically live into their 80s. Of course, most find a glorious (or inglorious) death long before that point.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Most aven lean toward some form of neutrality. Ibis-headed aven, focused more on knowledge than any other virtue, are usually neutral. Hawk-headed aven are inclined toward lawful neutral.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Aven stand from 5 to 6 feet tall, but their bodies are slender and their bones are partially hollow to facilitate their flight. Your size is Medium.",
        ],
      },
      {
        name: "Flight",
        entries: [
          "You have a flying speed of 30 feet. You can't use your flying speed while you wear medium or heavy armor. (If your campaign uses the variant rule for encumbrance, you can't use your flying speed if you are encumbered.) ",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common and Aven."],
        type: "entries",
      },
    ],
  },
  {
    name: "Aven",
    source: "PSD",
    size: [Size.MEDIUM],
    speed: {
      walk: 25,
      fly: 30,
    },
    ability: {
      dexterity: 2,
      wisdom: 2,
    },

    age: {
      mature: 20,
      max: 100,
    },
    skillProficiencies: {
      perception: true,
    },

    languageProficiencies: {
      common: true,
      other: true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Like humans, aven reach adulthood in their late teens and can live into their 80s.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Aven are inclined toward the lawful good alignment of the Church of Serra",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Aven stand from 5 to 6 feet tall, but their bodies are slender and their bones are partially hollow to facilitate their flight. Your size is Medium.",
        ],
      },
      {
        name: "Flight",
        entries: [
          "You have a flying speed of 30 feet. You can't use your flying speed while you wear medium or heavy armor. (If your campaign uses the variant rule for encumbrance, you can't use your flying speed if you are encumbered.) ",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common and Aven."],
        type: "entries",
      },
      {
        name: "Hawkeyed",
        entries: [
          "You have proficiency in the {@skill Perception} skill. In addition, attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Bugbear",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["humanoid"],
    creatureTypeTags: ["goblinoid"],
    size: [Size.MEDIUM],
    speed: 30,
    darkvision: 60,
    traitTags: ["Powerful Build"],
    skillProficiencies: {
      stealth: true,
    },

    entries: [
      {
        type: "entries",
        name: "Creature Type",
        entries: [
          "You are a Humanoid. You are also considered a goblinoid for any prerequisite or effect that requires you to be a goblinoid.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Fey Ancestry",
        entries: [
          "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself.",
        ],
      },
      {
        type: "entries",
        name: "Long-Limbed",
        entries: [
          "When you make a melee attack on your turn, your reach for it is 5 feet greater than normal.",
        ],
      },
      {
        type: "entries",
        name: "Powerful Build",
        entries: [
          "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
        ],
      },
      {
        type: "entries",
        name: "Sneaky",
        entries: [
          "You are proficient in the {@skill Stealth} skill. In addition, without squeezing, you can move through and stop in a space large enough for a Small creature.",
        ],
      },
      {
        type: "entries",
        name: "Surprise Attack",
        entries: [
          "If you hit a creature with an attack roll, the creature takes an extra {@damage 2d6} damage if it hasn't taken a turn yet in the current combat.",
        ],
      },
    ],
  },
  {
    name: "Bullywug",
    source: "DMG",
    size: [Size.MEDIUM],
    speed: {
      walk: 20,
      swim: 40,
    },
    ability: {
      intelligence: -2,
      charisma: -2,
    },

    traitTags: ["Amphibious", "NPC Race"],
    languageProficiencies: {
      other: true,
    },

    entries: [
      {
        type: "entries",
        name: "Amphibious",
        entries: ["You can breathe air and water."],
      },
      {
        name: "Speak with Frogs and Toads",
        type: "entries",
        entries: [
          "You can communicate simple concepts to frogs and toads when you speak in Bullywug.",
        ],
      },
      {
        name: "Swamp Camouflage",
        type: "entries",
        entries: [
          "You have advantage on Dexterity ({@skill Stealth}) checks made to hide in swampy terrain.",
        ],
      },
      {
        name: "Standing Leap",
        type: "entries",
        entries: [
          "Your long jump is up to 20 feet and your high jump is up to 10 feet, with or without a running start.",
        ],
      },
      {
        type: "entries",
        name: "Languages",
        entries: ["You can speak, read, and write Bullywug."],
      },
    ],
  },
  {
    name: "Centaur",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["fey"],
    size: [Size.MEDIUM],
    speed: 40,
    traitTags: ["Natural Weapon", "Powerful Build"],
    skillProficiencies: {
      choose: {
        from: ["animal handling", "medicine", "nature", "survival"],
      },
    },

    entries: [
      {
        type: "entries",
        name: "Creature Type",
        entries: ["You are a Fey."],
      },
      {
        type: "entries",
        name: "Charge",
        entries: [
          "If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves.",
        ],
      },
      {
        type: "entries",
        name: "Equine Build",
        entries: [
          "You count as one size larger when determining your carrying capacity and the weight you can push or drag.",
          "In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet instead of the normal 1 extra foot.",
        ],
      },
      {
        type: "entries",
        name: "Hooves",
        entries: [
          "You have hooves that you can use to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier bludgeoning damage, instead of the bludgeoning damage normal for an unarmed strike.",
        ],
      },
      {
        type: "entries",
        name: "Natural Affinity",
        entries: [
          "Your fey connection to nature gives you an intuitive connection to the natural world and the animals within it. You therefore have proficiency in one of the following skills of your choice: {@skill Animal Handling}, {@skill Medicine}, {@skill Nature}, or {@skill Survival}.",
        ],
      },
    ],
  },
  {
    name: "Changeling",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["fey"],
    size: [Size.SMALL, Size.MEDIUM],
    speed: 30,
    skillProficiencies: {
      choose: {
        from: [
          "deception",
          "insight",
          "intimidation",
          "performance",
          "persuasion",
        ],
        count: 2,
      },
    },

    entries: [
      {
        type: "entries",
        name: "Creature Type",
        entries: ["You are a Fey."],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "You are Medium or Small. You choose the size when you select this race.",
        ],
      },
      {
        type: "entries",
        name: "Changeling Instincts",
        entries: [
          "Thanks to your connection to the fey realm, you gain proficiency with two of the following skills of your choice: {@skill Deception}, {@skill Insight}, {@skill Intimidation}, {@skill Performance}, or {@skill Persuasion}.",
        ],
      },
      {
        type: "entries",
        name: "Shapechanger",
        entries: [
          "As an action, you change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height between Medium and Small. You can make yourself appear as a member of another race, though none of your game statistics change. You can't duplicate the appearance of an individual you've never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren't changed by this trait.",
          "You stay in the new form until you use an action to revert to your true form or until you die.",
        ],
      },
    ],
  },
  {
    name: "Custom Lineage",
    source: "TCE",
    size: [Size.SMALL, Size.MEDIUM],
    speed: 30,
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
        ],
      ],
    },

    darkvision: 60,
    feats: {
      any: 1,
    },

    skillProficiencies: {
      any: 1,
    },

    languageProficiencies: {
      common: true,
      anyStandard: 1,
    },

    entries: [
      "Instead of choosing one of the game's races for your character at 1st level, you can use the following traits to represent your character's lineage, giving you full control over how your character's origin shaped them:",
      {
        type: "entries",
        name: "Creature Type",
        entries: [
          "You are a humanoid. You determine your appearance and whether you resemble any of your kin.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: ["You are Small or Medium (your choice)."],
      },
      {
        type: "entries",
        name: "Feat",
        entries: [
          "You gain one {@5etools feat|feats.html} of your choice for which you qualify.",
        ],
      },
      {
        type: "entries",
        name: "Variable Trait",
        entries: [
          "You gain one of the following options of your choice: (a) {@sense darkvision} with a range of 60 feet or (b) proficiency in one skill of your choice.",
        ],
      },
      {
        type: "entries",
        name: "Languages",
        entries: [
          "You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.",
        ],
      },
      "Your race is considered to be a Custom Lineage for any game feature that requires a certain race, such as elf or dwarf.",
    ],
    _versions: [
      {
        name: "Custom Lineage; Darkvision",
        source: "TCE",
        _mod: {
          entries: {
            mode: "replaceArr",
            replace: "Variable Trait",
            items: {
              name: "Variable Trait; Darkvision",
              type: "entries",
              entries: [
                "You gain {@sense darkvision} with a range of 60 feet.",
              ],
            },
          },
        },
        skillProficiencies: null,
      },
      {
        name: "Custom Lineage; Skill Proficiency",
        source: "TCE",
        _mod: {
          entries: {
            mode: "replaceArr",
            replace: "Variable Trait",
            items: {
              name: "Variable Trait; Skill Proficiency",
              type: "entries",
              entries: ["You gain proficiency in one skill of your choice."],
            },
          },
        },
        darkvision: null,
      },
    ],
  },
  {
    name: "Deep Gnome",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["humanoid"],
    creatureTypeTags: ["gnome"],
    size: [Size.SMALL],
    speed: 30,
    age: {
      max: 500,
    },
    darkvision: 120,
    traitTags: ["Magic Resistance"],
    additionalSpells: [
      {
        innate: {
          "3": {
            daily: {
              "1": ["disguise self"],
            },
          },
          "5": {
            daily: {
              "1": ["nondetection"],
            },
          },
        },
        ability: {
          choose: ["intelligence", "wisdom", "charisma"],
        },
      },
    ],
    entries: [
      {
        type: "entries",
        name: "Creature Type",
        entries: [
          "You are a Humanoid. You are also considered a gnome for any prerequisite or effect that requires you to be a gnome.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Gift of the Svirfneblin",
        entries: [
          "Starting at 3rd level, you can cast the {@spell disguise self} spell with this trait. Starting at 5th level, you can also cast the {@spell nondetection} spell with it, without requiring a material component. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these using spell slots you have of the appropriate level.",
          "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
        ],
      },
      {
        type: "entries",
        name: "Gnomish Magic Resistance",
        entries: [
          "You have advantage on Intelligence, Wisdom, and Charisma saving throws against spells.",
        ],
      },
      {
        type: "entries",
        name: "Svirfneblin Camouflage",
        entries: [
          "When you make a Dexterity ({@skill Stealth}) check, you can make the check with advantage. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        ],
      },
    ],
  },
  {
    name: "Dhampir",
    source: "VRGR",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.SMALL, Size.MEDIUM],
    speed: {
      walk: 35,
      climb: true,
    },
    darkvision: 60,
    traitTags: ["Natural Weapon"],
    entries: [
      {
        type: "entries",
        name: "Size",
        entries: [
          "You are Medium or Small. You choose the size when you gain this lineage.",
        ],
      },
      {
        type: "entries",
        name: "Ancestral Legacy",
        entries: [
          "If you replace a race with this lineage, you can keep the following elements of that race: any skill proficiencies you gained from it and any climbing, flying, or swimming speed you gained from it.",
          "If you don't keep any of those elements or you choose this lineage at character creation, you gain proficiency in two skills of your choice.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Deathless Nature",
        entries: ["You don't need to breathe."],
      },
      {
        type: "entries",
        name: "Spider Climb",
        entries: [
          "You have a climbing speed equal to your walking speed. In addition, at 3rd level, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free.",
        ],
      },
      {
        type: "entries",
        name: "Vampiric Bite",
        entries: [
          "Your fanged bite is a natural weapon, which counts as a simple melee weapon with which you are proficient. You add your Constitution modifier, instead of your Strength modifier, to the attack and damage rolls when you attack with this bite. It deals {@damage 1d4} piercing damage on a hit. While you are missing half or more of your hit points, you have advantage on attack rolls you make with this bite.",
          "When you attack with this bite and hit a creature that isn't a Construct or an Undead, you can empower yourself in one of the following ways of your choice:",
          {
            type: "list",
            items: [
              "You regain hit points equal to the piercing damage dealt by the bite.",
              "You gain a bonus to the next ability check or attack roll you make; the bonus equals the piercing damage dealt by the bite",
            ],
          },
          "You can empower yourself with this bite a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        ],
      },
    ],
  },
  {
    name: "Dragonborn",
    source: "PHB",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      strength: 2,
      charisma: 1,
    },

    age: {
      mature: 15,
      max: 80,
    },
    traitTags: ["Uncommon Race"],
    languageProficiencies: {
      common: true,
      draconic: true,
    },
    resist: {
      choose: {
        from: [
          DamageType.ACID,
          DamageType.COLD,
          DamageType.FIRE,
          DamageType.LIGHTNING,
          DamageType.POISON,
        ],
      },
    },
    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
        ],
      },
      {
        name: "Draconic Ancestry",
        entries: [
          "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
          {
            type: "table",
            caption: "Draconic Ancestry",
            colLabels: ["Dragon", "Damage Type", "Breath Weapon"],
            colStyles: ["col-3 text-center", "col-3 text-center", "col-6"],
            rows: [
              ["Black", DamageType.ACID, "5 by 30 ft. line (Dex. save)"],
              ["Blue", DamageType.LIGHTNING, "5 by 30 ft. line (Dex. save)"],
              ["Brass", DamageType.FIRE, "5 by 30 ft. line (Dex. save)"],
              ["Bronze", DamageType.LIGHTNING, "5 by 30 ft. line (Dex. save)"],
              ["Copper", DamageType.ACID, "5 by 30 ft. line (Dex. save)"],
              ["Gold", DamageType.FIRE, "15 ft. cone (Dex. save)"],
              ["Green", DamageType.POISON, "15 ft. cone (Con. save)"],
              ["Red", DamageType.FIRE, "15 ft. cone (Dex. save)"],
              ["Silver", DamageType.COLD, "15 ft. cone (Con. save)"],
              ["White", DamageType.COLD, "15 ft. cone (Con. save)"],
            ],
          },
        ],
        type: "entries",
      },
      {
        name: "Breath Weapon",
        entries: [
          "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.",
          "When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes {@dice 2d6} damage on a failed save, and half as much damage on a successful one. The damage increases to {@dice 3d6} at 6th level, {@dice 4d6} at 11th level, and {@dice 5d6} at 16th level.",
          "After you use your breath weapon, you can't use it again until you complete a short or long rest.",
        ],
        type: "entries",
      },
      {
        name: "Damage Resistance",
        entries: [
          "You have resistance to the damage type associated with your draconic ancestry.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Dragonborn (Chromatic)",
    source: "FTD",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.MEDIUM],
    speed: 30,
    resist: {
      choose: {
        from: [
          DamageType.ACID,
          DamageType.LIGHTNING,
          DamageType.POISON,
          DamageType.FIRE,
          DamageType.COLD,
        ],
      },
    },
    entries: [
      {
        type: "entries",
        name: "Chromatic Ancestry",
        entries: [
          "You have a chromatic dragon ancestor, granting you a special magical affinity. Choose one kind of dragon from the Chromatic Ancestry table. This determines the damage type for your other traits, as shown in the table.",
          {
            type: "table",
            caption: "Chromatic Ancestry",
            colLabels: ["Dragon", "Damage Type"],
            colStyles: ["col-6 text-center", "col-6 text-center"],
            rows: [
              ["Black", DamageType.ACID],
              ["Blue", DamageType.LIGHTNING],
              ["Green", DamageType.POISON],
              ["Red", DamageType.FIRE],
              ["White", DamageType.COLD],
            ],
          },
        ],
      },
      {
        type: "entries",
        name: "Breath Weapon",
        entries: [
          "When you take the {@action Attack} action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 30-foot line that is 5 feet wide. Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). On a failed save, the creature takes {@damage 1d10} damage of the type associated with your Chromatic Ancestry. On a successful save, it takes half as much damage. This damage increases by {@dice 1d10} when you reach 5th level ({@dice 2d10}), 11th level ({@dice 3d10}), and 17th level ({@dice 4d10}).",
          "You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        ],
      },
      {
        type: "entries",
        name: "Draconic Resistance",
        entries: [
          "You have resistance to the damage type associated with your Chromatic Ancestry.",
        ],
      },
      {
        type: "entries",
        name: "Chromatic Warding",
        entries: [
          "Starting at 5th level, as an action, you can channel your draconic energy to protect yourself. For 1 minute, you become immune to the damage type associated with your Chromatic Ancestry. Once you use this trait, you can't do so again until you finish a long rest.",
        ],
      },
    ],
    _versions: [
      {
        _template: {
          name: "Dragonborn (Chromatic; {{color}})",
          source: "FTD",
          _mod: {
            entries: [
              {
                mode: "removeArr",
                names: "Chromatic Ancestry",
              },
              {
                mode: "replaceArr",
                replace: "Breath Weapon",
                items: {
                  type: "entries",
                  name: "Breath Weapon",
                  entries: [
                    "When you take the {@action Attack} action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 30-foot line that is 5 feet wide. Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). On a failed save, the creature takes {@damage 1d10} {{damageType}} damage. On a successful save, it takes half as much damage. This damage increases by {@dice 1d10} when you reach 5th level ({@dice 2d10}), 11th level ({@dice 3d10}), and 17th level ({@dice 4d10}).",
                    "You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
                  ],
                },
              },
              {
                mode: "replaceArr",
                replace: "Draconic Resistance",
                items: {
                  type: "entries",
                  name: "Draconic Resistance",
                  entries: ["You have resistance to {{damageType}} damage."],
                },
              },
            ],
          },
        },
        _implementations: [
          {
            _variables: {
              color: "Black",
              damageType: DamageType.ACID,
            },
          },
          {
            _variables: {
              color: "Blue",
              damageType: DamageType.LIGHTNING,
            },
          },
          {
            _variables: {
              color: "Green",
              damageType: DamageType.POISON,
            },
          },
          {
            _variables: {
              color: "Red",
              damageType: DamageType.FIRE,
            },
          },
          {
            _variables: {
              color: "White",
              damageType: DamageType.COLD,
            },
          },
        ],
      },
    ],
  },
  {
    name: "Dragonborn (Gem)",
    source: "FTD",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.MEDIUM],
    speed: 30,
    resist: {
      choose: {
        from: [
          DamageType.FORCE,
          DamageType.RADIANT,
          DamageType.PSYCHIC,
          DamageType.THUNDER,
          DamageType.NECROTIC,
        ],
      },
    },

    entries: [
      {
        type: "entries",
        name: "Gem Ancestry",
        entries: [
          "You have a gem dragon ancestor, granting you a special magical affinity. Choose one kind of dragon from the Gem Ancestry table. This determines the damage type for your other traits, as shown in the table.",
          {
            type: "table",
            caption: "Gem Ancestry",
            colLabels: ["Dragon", "Damage Type"],
            colStyles: ["col-6 text-center", "col-6 text-center"],
            rows: [
              ["Amethyst", DamageType.FORCE],
              ["Crystal", DamageType.RADIANT],
              ["Emerald", DamageType.PSYCHIC],
              ["Sapphire", DamageType.THUNDER],
              ["Topaz", DamageType.NECROTIC],
            ],
          },
        ],
      },
      {
        type: "entries",
        name: "Breath Weapon",
        entries: [
          "When you take the {@action Attack} action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 15-foot cone. Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). On a failed save, the creature takes {@damage 1d10} damage of the type associated with your Gem Ancestry. On a successful save, it takes half as much damage. This damage increases by {@dice 1d10} when you reach 5th level ({@dice 2d10}), 11th level ({@dice 3d10}), and 17th level ({@dice 4d10}).",
          "You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        ],
      },
      {
        type: "entries",
        name: "Draconic Resistance",
        entries: [
          "You have resistance to the damage type associated with your Gem Ancestry.",
        ],
      },
      {
        type: "entries",
        name: "Psionic Mind",
        entries: [
          "You can send telepathic messages to any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand these messages, but it must be able to understand at least one language to comprehend them.",
        ],
      },
      {
        type: "entries",
        name: "Gem Flight",
        entries: [
          "Starting at 5th level, you can use a bonus action to manifest spectral wings on your body. These wings last for 1 minute. For the duration, you gain a flying speed equal to your walking speed and can hover. Once you use this trait, you can't do so again until you finish a long rest.",
        ],
      },
    ],
    _versions: [
      {
        _template: {
          name: "Dragonborn (Gem; {{color}})",
          source: "FTD",
          _mod: {
            entries: [
              {
                mode: "removeArr",
                names: "Gem Ancestry",
              },
              {
                mode: "replaceArr",
                replace: "Breath Weapon",
                items: {
                  type: "entries",
                  name: "Breath Weapon",
                  entries: [
                    "When you take the {@action Attack} action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 15-foot cone. Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). On a failed save, the creature takes {@damage 1d10} {{damageType}} damage. On a successful save, it takes half as much damage. This damage increases by {@dice 1d10} when you reach 5th level ({@dice 2d10}), 11th level ({@dice 3d10}), and 17th level ({@dice 4d10}).",
                    "You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
                  ],
                },
              },
              {
                mode: "replaceArr",
                replace: "Draconic Resistance",
                items: {
                  type: "entries",
                  name: "Draconic Resistance",
                  entries: ["You have resistance to {{damageType}} damage."],
                },
              },
            ],
          },
        },
        _implementations: [
          {
            _variables: {
              color: "Amethyst",
              damageType: DamageType.FORCE,
            },
            resist: [DamageType.FORCE],
          },
          {
            _variables: {
              color: "Crystal",
              damageType: DamageType.RADIANT,
            },
            resist: [DamageType.RADIANT],
          },
          {
            _variables: {
              color: "Emerald",
              damageType: DamageType.PSYCHIC,
            },
            resist: [DamageType.PSYCHIC],
          },
          {
            _variables: {
              color: "Sapphire",
              damageType: DamageType.THUNDER,
            },
            resist: [DamageType.THUNDER],
          },
          {
            _variables: {
              color: "Topaz",
              damageType: DamageType.NECROTIC,
            },
            resist: [DamageType.NECROTIC],
          },
        ],
      },
    ],
  },
  {
    name: "Dragonborn (Metallic)",
    source: "FTD",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.MEDIUM],
    speed: 30,
    resist: {
      choose: {
        from: [
          DamageType.FIRE,
          DamageType.LIGHTNING,
          DamageType.ACID,
          DamageType.COLD,
        ],
      },
    },

    entries: [
      {
        type: "entries",
        name: "Metallic Ancestry",
        entries: [
          "You have a metallic dragon ancestor, granting you a special magical affinity. Choose one kind of dragon from the Metallic Ancestry table. This determines the damage type for your other traits, as shown in the table.",
          {
            type: "table",
            caption: "Metallic Ancestry",
            colLabels: ["Dragon", "Damage Type"],
            colStyles: ["col-6 text-center", "col-6 text-center"],
            rows: [
              ["Brass", DamageType.FIRE],
              ["Bronze", DamageType.LIGHTNING],
              ["Copper", DamageType.ACID],
              ["Gold", DamageType.FIRE],
              ["Silver", DamageType.COLD],
            ],
          },
        ],
      },
      {
        type: "entries",
        name: "Breath Weapon",
        entries: [
          "When you take the {@action Attack} action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 15-foot cone. Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). On a failed save, the creature takes {@damage 1d10} damage of the type associated with your Metallic Ancestry. On a successful save, it takes half as much damage. This damage increases by {@dice 1d10} when you reach 5th level ({@dice 2d10}), 11th level ({@dice 3d10}), and 17th level ({@dice 4d10}).",
          "You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        ],
      },
      {
        type: "entries",
        name: "Draconic Resistance",
        entries: [
          "You have resistance to the damage type associated with your Metallic Ancestry.",
        ],
      },
      {
        type: "entries",
        name: "Metallic Breath Weapon",
        entries: [
          "At 5th level, you gain a second breath weapon. When you take the {@action Attack} action on your turn, you can replace one of your attacks with an exhalation in a 15-foot cone. The save DC for this breath is 8 + your Constitution modifier + your proficiency bonus. Whenever you use this trait, choose one:",
          {
            type: "list",
            style: "list-hang-notitle",
            items: [
              {
                type: "item",
                name: "Enervating Breath",
                entries: [
                  "Each creature in the cone must succeed on a Constitution saving throw or become {@condition incapacitated} until the start of your next turn.",
                ],
              },
              {
                type: "item",
                name: "Repulsion Breath",
                entries: [
                  "Each creature in the cone must succeed on a Strength saving throw or be pushed 20 feet away from you and be knocked {@condition prone}.",
                ],
              },
            ],
          },
          "Once you use your Metallic Breath Weapon, you can't do so again until you finish a long rest.",
        ],
      },
    ],
    _versions: [
      {
        _template: {
          name: "Dragonborn (Metallic; {{color}})",
          source: "FTD",
          _mod: {
            entries: [
              {
                mode: "removeArr",
                names: "Metallic Ancestry",
              },
              {
                mode: "replaceArr",
                replace: "Breath Weapon",
                items: {
                  type: "entries",
                  name: "Breath Weapon",
                  entries: [
                    "When you take the {@action Attack} action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 15-foot cone. Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). On a failed save, the creature takes {@damage 1d10} {{damageType}} damage. On a successful save, it takes half as much damage. This damage increases by {@dice 1d10} when you reach 5th level ({@dice 2d10}), 11th level ({@dice 3d10}), and 17th level ({@dice 4d10}).",
                    "You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
                  ],
                },
              },
              {
                mode: "replaceArr",
                replace: "Draconic Resistance",
                items: {
                  type: "entries",
                  name: "Draconic Resistance",
                  entries: ["You have resistance to {{damageType}} damage."],
                },
              },
            ],
          },
        },
        _implementations: [
          {
            _variables: {
              color: "Brass",
              damageType: DamageType.FIRE,
            },
            resist: [DamageType.FIRE],
          },
          {
            _variables: {
              color: "Bronze",
              damageType: DamageType.LIGHTNING,
            },
            resist: [DamageType.LIGHTNING],
          },
          {
            _variables: {
              color: "Copper",
              damageType: DamageType.ACID,
            },
            resist: [DamageType.ACID],
          },
          {
            _variables: {
              color: "Gold",
              damageType: DamageType.FIRE,
            },
            resist: [DamageType.FIRE],
          },
          {
            _variables: {
              color: "Silver",
              damageType: DamageType.COLD,
            },
            resist: [DamageType.COLD],
          },
        ],
      },
    ],
  },
  {
    name: "Duergar",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["humanoid"],
    creatureTypeTags: ["dwarf"],
    size: [Size.MEDIUM],
    speed: 30,
    age: {
      max: 350,
    },
    darkvision: 120,
    resist: [DamageType.POISON],
    additionalSpells: [
      {
        innate: {
          "3": {
            daily: {
              "1": ["enlarge/reduce"],
            },
          },
          "5": {
            daily: {
              "1": ["invisibility"],
            },
          },
        },
        ability: {
          choose: ["intelligence", "wisdom", "charisma"],
        },
      },
    ],
    entries: [
      {
        type: "entries",
        name: "Creature Type",
        entries: [
          "You are a Humanoid. You are also considered a dwarf for any prerequisite or effect that requires you to be a dwarf.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Duergar Magic",
        entries: [
          "Starting at 3rd level, you can cast the {@spell enlarge/reduce} spell on yourself with this trait, without requiring a material component. Starting at 5th level, you can also cast the {@spell invisibility} spell on yourself with this trait, without requiring a material component. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level.",
          "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
        ],
      },
      {
        type: "entries",
        name: "Dwarven Resilience",
        entries: [
          "You have advantage on saving throws you make to avoid or end the {@condition poisoned} condition on yourself. You also have resistance to poison damage.",
        ],
      },
      {
        type: "entries",
        name: "Psionic Fortitude",
        entries: [
          "You have advantage on saving throws you make to avoid or end the {@condition charmed} or {@condition stunned} condition on yourself.",
        ],
      },
    ],
  },
  {
    name: "Dwarf",
    source: "PHB",
    size: [Size.MEDIUM],
    speed: 25,
    ability: {
      constitution: 2,
    },

    age: {
      mature: 20,
      max: 350,
    },
    darkvision: 60,
    traitTags: ["Tool Proficiency"],
    languageProficiencies: {
      common: true,
      dwarvish: true,
    },

    weaponProficiencies: {
      "battleaxe|phb": true,
      "handaxe|phb": true,
      "light hammer|phb": true,
      "warhammer|phb": true,
    },

    resist: [DamageType.POISON],
    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
        ],
      },
      {
        name: "Speed",
        entries: ["Your speed is not reduced by wearing heavy armor."],
        type: "entries",
      },
      {
        name: "Darkvision",
        entries: [
          "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Dwarven Resilience",
        entries: [
          "You have advantage on saving throws against poison, and you have resistance against poison damage.",
        ],
        type: "entries",
      },
      {
        name: "Dwarven Combat Training",
        entries: [
          "You have proficiency with the {@item battleaxe|phb}, {@item handaxe|phb}, {@item light hammer|phb}, and {@item warhammer|phb}.",
        ],
        type: "entries",
      },
      {
        name: "Tool Proficiency",
        entries: [
          "You gain proficiency with the artisan's tools of your choice: {@item Smith's tools|phb}, {@item brewer's supplies|phb}, or {@item mason's tools|phb}.",
        ],
        type: "entries",
      },
      {
        name: "Stonecunning",
        entries: [
          "Whenever you make an Intelligence ({@skill History}) check related to the origin of stonework, you are considered proficient in the {@skill History} skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Dwarf (Kaladesh)",
    source: "PSK",
    size: [Size.MEDIUM],
    speed: 25,
    ability: {
      constitution: 2,
      wisdom: 1,
    },

    age: {
      mature: 20,
      max: 350,
    },
    darkvision: 60,
    traitTags: ["Tool Proficiency"],
    languageProficiencies: {
      common: true,
      dwarvish: true,
    },

    resist: [DamageType.POISON],
    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Dwarves stand around 5 feet tall and average about 150 pounds. Your size is Medium.",
        ],
      },
      {
        name: "Speed",
        entries: ["Your speed is not reduced by wearing heavy armor."],
        type: "entries",
      },
      {
        name: "Darkvision",
        entries: [
          "Accustomed to life underground in your race's ancient past, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Dwarven Resilience",
        entries: [
          "You have advantage on saving throws against poison, and you have resistance against poison damage.",
        ],
        type: "entries",
      },
      {
        name: "Dwarven Toughness",
        entries: [
          "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.",
        ],
        type: "entries",
      },
      {
        name: "Artisan's Expertise",
        entries: [
          "You gain proficiency with two kinds of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} of your choice. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. In addition, whenever you make an Intelligence ({@skill History}) check related to the origin of any architectural construction (including buildings, public works such as canals and aqueducts, and the massive cogwork that underlies much of the construction of Ghirapur), you are considered proficient in the {@skill History} skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Eladrin",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["humanoid"],
    creatureTypeTags: ["elf"],
    size: [Size.MEDIUM],
    speed: 30,
    age: {
      max: 750,
    },
    darkvision: 60,
    traitTags: ["Improved Resting", "Tool Proficiency", "Weapon Proficiency"],
    skillProficiencies: {
      perception: true,
    },

    entries: [
      '{@i Choose your eladrin\'s season: autumn, winter, spring, or summer. When finishing a long rest, you can change your season. See the "Info" tab for more information.}',
      {
        type: "entries",
        name: "Creature Type",
        entries: [
          "You are a Humanoid. You are also considered an elf for any prerequisite or effect that requires you to be an elf.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Fey Ancestry",
        entries: [
          "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself.",
        ],
      },
      {
        type: "entries",
        name: "Fey Step",
        entries: [
          "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
          "When you reach 3rd level, your Fey Step gain an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Intelligence, Wisdom, or Charisma modifier (choose when you select this race):",
          {
            type: "list",
            items: [
              {
                type: "item",
                name: "Autumn",
                entry:
                  "Immediately after you use your Fey Step, up to two creatures of your choice that you can see within 10 feet of you must succeed on a Wisdom saving throw or be {@condition charmed} by you for 1 minute, or until you or your companions deal any damage to the creatures.",
              },
              {
                type: "item",
                name: "Winter",
                entry:
                  "When you use your Fey Step, one creature of your choice that you can see within 5 feet of you before you teleport must succeed on a Wisdom saving throw or be {@condition frightened} of you until the end of your next turn.",
              },
              {
                type: "item",
                name: "Spring",
                entry:
                  "When you use your Fey Step, you can touch one willing creature within 5 feet of you. That creature then teleports instead of you, appearing in an unoccupied space of your choice that you can see within 30 feet of you.",
              },
              {
                type: "item",
                name: "Summer",
                entry:
                  "Immediately after you use your Fey Step, each creature of your choice that you can see within 5 feet of you takes fire damage equal to your proficiency bonus.",
              },
            ],
            style: "list-hang-notitle",
          },
        ],
      },
      {
        type: "entries",
        name: "Keen Senses",
        entries: ["You have proficiency in the {@skill Perception} skill."],
      },
      {
        type: "entries",
        name: "Trance",
        entries: [
          "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
          "Whenever you finish this trance, you can change your season, and you can gain two proficiencies that you don't have, each one with a weapon or a tool of your choice selected from the Player's Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest.",
        ],
      },
    ],
  },
  {
    name: "Elf",
    source: "PHB",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      dexterity: 2,
    },

    age: {
      mature: 100,
      max: 750,
    },
    darkvision: 60,
    traitTags: ["Improved Resting"],
    skillProficiencies: {
      perception: true,
    },

    languageProficiencies: {
      common: true,
      elvish: true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
        ],
      },
      {
        name: "Darkvision",
        entries: [
          "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Keen Senses",
        entries: ["You have proficiency in the {@skill Perception} skill."],
        type: "entries",
      },
      {
        name: "Fey Ancestry",
        entries: [
          "You have advantage on saving throws against being {@condition charmed}, and magic can't put you to sleep.",
        ],
        type: "entries",
      },
      {
        name: "Trance",
        entries: [
          'Elves don\'t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.',
          "{@note If you meditate during a long rest, you finish the rest after only 4 hours. You otherwise obey all the rules for a long rest; only the duration is changed.}",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Elf (Kaladesh)",
    source: "PSK",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      dexterity: 2,
      wisdom: 1,
    },

    age: {
      mature: 100,
      max: 750,
    },
    darkvision: 60,
    traitTags: ["Improved Resting"],
    skillProficiencies: {
      perception: true,
    },

    languageProficiencies: {
      common: true,
      elvish: true,
    },

    weaponProficiencies: {
      "longsword|phb": true,
      "shortsword|phb": true,
      "shortbow|phb": true,
      "longbow|phb": true,
    },
    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
        ],
      },
      {
        name: "Darkvision",
        entries: [
          "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Keen Senses",
        entries: ["You have proficiency in the {@skill Perception} skill."],
        type: "entries",
      },
      {
        name: "Elf Weapon Training",
        entries: [
          "You have proficiency with the {@item longsword|phb}, {@item shortsword|phb}, {@item shortbow|phb}, and {@item longbow|phb}.",
        ],
        type: "entries",
      },
      {
        name: "Fey Ancestry",
        entries: [
          "You have advantage on saving throws against being {@condition charmed}, and magic can't put you to sleep.",
        ],
        type: "entries",
      },
      {
        name: "Trance",
        entries: [
          'Elves don\'t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.',
          "{@note If you meditate during a long rest, you finish the rest after only 4 hours. You otherwise obey all the rules for a long rest; only the duration is changed.}",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Elf (Zendikar)",
    source: "PSZ",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      wisdom: 2,
    },

    age: {
      mature: 100,
      max: 750,
    },
    darkvision: 60,
    skillProficiencies: {
      perception: true,
    },

    languageProficiencies: {
      common: true,
      elvish: true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
        ],
      },
      {
        name: "Darkvision",
        entries: [
          "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Keen Senses",
        entries: ["You have proficiency in the {@skill Perception} skill."],
        type: "entries",
      },
      {
        name: "Fey Ancestry",
        entries: [
          "You have advantage on saving throws against being {@condition charmed}, and magic can't put you to sleep.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Fairy",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["fey"],
    size: [Size.SMALL],
    speed: {
      walk: 30,
      fly: true,
    },
    additionalSpells: [
      {
        innate: {
          "3": {
            daily: {
              "1": ["faerie fire"],
            },
          },
          "5": {
            daily: {
              "1": ["enlarge/reduce"],
            },
          },
        },
        ability: {
          choose: ["intelligence", "wisdom", "charisma"],
        },
        known: {
          "1": ["druidcraft#c"],
        },
      },
    ],
    entries: [
      {
        type: "entries",
        name: "Creature Type",
        entries: ["You are a Fey."],
      },
      {
        type: "entries",
        name: "Fairy Magic",
        entries: [
          "You know the {@spell druidcraft} cantrip. Starting at 3rd level, you can cast the {@spell faerie fire} spell with this trait. Starting at 5th level, you can also cast the {@spell enlarge/reduce} spell with this trait. Once you cast {@spell faerie fire} or {@spell enlarge/reduce} with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.",
          "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
        ],
      },
      {
        type: "entries",
        name: "Flight",
        entries: [
          "Because of your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.",
        ],
      },
    ],
  },
  {
    name: "Firbolg",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.MEDIUM],
    speed: 30,
    age: {
      max: 500,
    },
    traitTags: ["Powerful Build"],
    additionalSpells: [
      {
        ability: {
          choose: ["intelligence", "wisdom", "charisma"],
        },
        innate: {
          "1": ["detect magic", "disguise self"],
        },
      },
    ],
    entries: [
      {
        type: "entries",
        name: "Firbolg Magic",
        entries: [
          "You can cast {@spell detect magic} and {@spell disguise self} spells with this trait. When you use this version of {@spell disguise self}, you can seem up to 3 feet shorter or taller. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have.",
          "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
        ],
      },
      {
        type: "entries",
        name: "Hidden Step",
        entries: [
          "As a bonus action, you can magically turn {@condition invisible} until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        ],
      },
      {
        type: "entries",
        name: "Powerful Build",
        entries: [
          "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
        ],
      },
      {
        type: "entries",
        name: "Speech of Beast and Leaf",
        entries: [
          "You have the ability to communicate in a limited manner with Beasts, Plants, and vegetation. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them.",
        ],
      },
    ],
  },
  {
    name: "Genasi",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.SMALL, Size.MEDIUM],
    speed: 30,
    age: {
      max: 120,
    },
    darkvision: 60,
    entries: [
      {
        type: "entries",
        name: "Size",
        entries: [
          "You are Medium or Small. You choose the size when you select this race.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
    ],
  },
  {
    name: "Giff",
    source: "AAG",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.MEDIUM],
    speed: {
      walk: 30,
      swim: true,
    },
    traitTags: ["Powerful Build"],
    weaponProficiencies: {
      firearms: true,
    },

    entries: [
      {
        type: "entries",
        name: "Astral Spark",
        entries: [
          "Your psychic connection to the Astral Plane enables you to mystically access a spark of divine power, which you can channel through your weapons. When you hit a target with a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon}, you can cause the target to take extra force damage equal to your proficiency bonus.",
          "You can use this trait a number of times equal to your proficiency bonus, but you can use it no more than once per turn. You regain all expended uses when you finish a long rest.",
        ],
      },
      {
        type: "entries",
        name: "Firearms Mastery",
        entries: [
          "You have a mystical connection to firearms that traces back to the gods of the giff, who delighted in such weapons. You have proficiency with all firearms and ignore the loading property of any firearm. In addition, attacking at long range with a firearm doesn't impose disadvantage on your attack roll.",
        ],
      },
      {
        type: "entries",
        name: "Hippo Build",
        entries: [
          "You have advantage on Strength-based ability checks and Strength saving throws. In addition, you count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
        ],
      },
    ],
  },
  {
    name: "Gith",
    source: "MTF",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      intelligence: 1,
    },

    age: {
      mature: 20,
      max: 100,
    },
    languageProficiencies: {
      common: true,
      other: true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Gith reach adulthood in their late teens and live for about a century.",
        ],
      },
      {
        name: "Size",
        type: "entries",
        entries: [
          "Gith are taller and leaner than humans, with most a slender 6 feet in height.",
        ],
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common and Gith."],
        type: "entries",
      },
    ],
  },
  {
    name: "Gith",
    source: "UAEladrinAndGith",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      intelligence: 1,
    },

    age: {
      mature: 20,
      max: 100,
    },
    languageProficiencies: {
      common: true,
      other: true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Gith reach adulthood in their late teens and live for about a century.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Gith are taller and leaner than humans, with most a slender 6 feet in height.",
        ],
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common and Gith."],
        type: "entries",
      },
    ],
  },
  {
    name: "Githyanki",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.MEDIUM],
    speed: 30,
    traitTags: ["Weapon Proficiency"],
    skillProficiencies: {
      any: 1,
    },

    toolProficiencies: {
      any: 1,
    },

    resist: [DamageType.PSYCHIC],
    additionalSpells: [
      {
        innate: {
          "3": {
            daily: {
              "1": ["jump"],
            },
          },
          "5": {
            daily: {
              "1": ["misty step"],
            },
          },
        },
        ability: {
          choose: ["intelligence", "wisdom", "charisma"],
        },
        known: {
          "1": ["mage hand#c"],
        },
      },
    ],
    entries: [
      {
        type: "entries",
        name: "Astral Knowledge",
        entries: [
          "You can mystically access a reservoir of experiences of entities connected to the Astral Plane. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player's Handbook, as you momentarily project your consciousness into the Astral Plane. These proficiencies last until the end of your next long rest.",
        ],
      },
      {
        type: "entries",
        name: "Githyanki Psionics",
        entries: [
          "You know the {@spell mage hand} cantrip, and the hand is {@condition invisible} when you cast the cantrip with this trait.",
          "Starting at 3rd level, you can cast the {@spell jump} spell with this trait. Starting at 5th level, you can also cast {@spell misty step} with it. Once you cast {@spell jump} or {@spell misty step} with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.",
          "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race). None of these spells require spell components when you cast them with this trait.",
        ],
      },
      {
        type: "entries",
        name: "Psychic Resilience",
        entries: ["You have resistance to psychic damage."],
      },
    ],
  },
  {
    name: "Githzerai",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.MEDIUM],
    speed: 30,
    resist: [DamageType.PSYCHIC],
    additionalSpells: [
      {
        innate: {
          "3": {
            daily: {
              "1": ["shield"],
            },
          },
          "5": {
            daily: {
              "1": ["detect thoughts"],
            },
          },
        },
        ability: {
          choose: ["intelligence", "wisdom", "charisma"],
        },
        known: {
          "1": ["mage hand#c"],
        },
      },
    ],
    entries: [
      {
        type: "entries",
        name: "Githzerai Psionics",
        entries: [
          "You know the {@spell mage hand} cantrip, and the hand is {@condition invisible} when you cast the cantrip with this trait.",
          "Starting at 3rd level, you can cast the {@spell shield} spell with this trait. Starting at 5th level, you can also cast the {@spell detect thoughts} spell with it. Once you cast {@spell shield} or {@spell detect thoughts} spell with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.",
          "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race). None of these spells require spell components when you cast them with this trait.",
        ],
      },
      {
        type: "entries",
        name: "Mental Discipline",
        entries: [
          "Your innate psychic defenses grant you advantage on saving throws you make to avoid or end the {@condition charmed} and {@condition frightened} conditions on yourself.",
        ],
      },
      {
        type: "entries",
        name: "Psychic Resilience",
        entries: ["You have resistance to psychic damage."],
      },
    ],
  },
  {
    name: "Glitchling",
    source: "UA2022WondersOfTheMultiverse",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["construct"],
    size: [Size.MEDIUM],
    speed: 30,
    traitTags: ["Natural Armor"],
    entries: [
      {
        type: "entries",
        name: "Creature Type",
        entries: ["You are a Construct."],
      },
      {
        type: "entries",
        name: "Armored Plating",
        entries: [
          "Your metal skin is reinforced with armor plates. While you aren't wearing armor, your base Armor Class is 14 + your Dexterity modifier.",
        ],
      },
      {
        type: "entries",
        name: "Balance Chaos",
        entries: [
          "When you make an attack roll or a saving throw and roll a 9 or lower on the {@dice d20}, you can balance chaos and treat the roll as a 10. You can balance chaos in this way a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        ],
      },
      {
        type: "entries",
        name: "Living Construct",
        entries: [
          "You were created to benefit from several spells that preserve life but that normally don't affect Constructs: {@spell cure wounds}, {@spell healing word}, {@spell mass cure wounds}, {@spell mass healing word}, and {@spell spare the dying}.",
        ],
      },
      {
        type: "entries",
        name: "Ordered Mind",
        entries: [
          "You have advantage on Wisdom ({@skill Insight}) checks and on saving throws made to avoid or end the {@condition charmed} condition on yourself.",
        ],
      },
      {
        type: "entries",
        name: "Vestigial Wings",
        entries: [
          "You have vestigial wings that allow limited flight. When you move, you can engage your wings to gain a flying speed equal to your walking speed until the end of the current turn. If you are still aloft at the end of the turn with nothing else supporting you, you fall. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest",
        ],
      },
    ],
  },
  {
    name: "Gnoll",
    source: "DMG",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      strength: 2,
      intelligence: -2,
    },

    darkvision: 60,
    traitTags: ["Natural Weapon", "NPC Race"],
    entries: [
      {
        name: "Bite",
        entries: [
          "Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to {@damage 1d4} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
        ],
        type: "entries",
      },
      {
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        type: "entries",
        name: "Rampage",
        entries: [
          "When you reduce a creature to 0 hit points with a melee attack on your turn, you can take a bonus action to move up to half your speed and make a bite attack.",
        ],
      },
    ],
  },
  {
    name: "Gnome",
    source: "PHB",
    size: [Size.SMALL],
    speed: 25,
    ability: {
      intelligence: 2,
    },

    age: {
      mature: 40,
      max: 500,
    },
    darkvision: 60,
    traitTags: ["Uncommon Race"],
    languageProficiencies: {
      common: true,
      gnomish: true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.",
        ],
      },
      {
        name: "Darkvision",
        entries: [
          "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Gnome Cunning",
        entries: [
          "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Gnome (Deep)",
    source: "DMG",
    size: [Size.SMALL],
    speed: 20,
    ability: {
      strength: 1,
      dexterity: 2,
    },

    darkvision: 120,
    traitTags: ["NPC Race"],
    languageProficiencies: {
      gnomish: true,
      terran: true,
      undercommon: true,
    },

    additionalSpells: [
      {
        ability: "intelligence",
        known: {
          "1": ["nondetection", "blindness/deafness", "blur", "disguise self"],
        },
      },
    ],
    entries: [
      {
        name: "Innate Spellcasting",
        entries: [
          "You have an innate ability to cast the following spells, requiring no material components:",
          {
            type: "list",
            style: "list-hang-notitle",
            items: [
              {
                type: "itemSpell",
                name: "At will:",
                entry: "{@spell nondetection} (self only)",
              },
              {
                type: "itemSpell",
                name: "1/day each:",
                entry:
                  "{@spell blindness/deafness}, {@spell blur}, {@spell disguise self}",
              },
            ],
          },
          "Intelligence is your spellcasting ability for these spells.",
        ],
        type: "entries",
      },
      {
        name: "Stone Camouflage",
        entries: [
          "You have advantage on Dexterity ({@skill Stealth}) checks to hide in rocky terrain.",
        ],
        type: "entries",
      },
      {
        name: "Gnome Cunning",
        entries: [
          "You have advantage on Intelligence, Wisdom, and Charisma saving throws against magic.",
        ],
        type: "entries",
      },
      {
        name: "Superior Darkvision",
        entries: [
          "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        // data: {
        //   overwrite: "Darkvision",
        // },
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Gnomish, Terran, and Undercommon.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Goblin",
    source: "DMG",
    size: [Size.SMALL],
    speed: 30,
    ability: {
      strength: -2,
      dexterity: 2,
    },

    darkvision: 60,
    traitTags: ["NPC Race"],
    languageProficiencies: {
      common: true,
      goblin: true,
    },

    entries: [
      {
        name: "Nimble Escape",
        entries: [
          "You can take the {@action Disengage} or {@action Hide} action as a bonus action on each of your turns.",
        ],
        type: "entries",
      },
      {
        name: "Darkvision",
        entries: [
          "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common and Goblin."],
        type: "entries",
      },
    ],
  },
  {
    name: "Goblin",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["humanoid"],
    creatureTypeTags: ["goblinoid"],
    size: [Size.SMALL],
    speed: 30,
    darkvision: 60,
    entries: [
      {
        type: "entries",
        name: "Creature Type",
        entries: [
          "You are a Humanoid. You are also considered a goblinoid for any prerequisite or effect that requires you to be a goblinoid.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were in dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Fey Ancestry",
        entries: [
          "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself.",
        ],
      },
      {
        type: "entries",
        name: "Fury of the Small",
        entries: [
          "When you damage a creature with an attack or a spell and the creature's size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your proficiency bonus.",
          "You can use this trait a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest, and you can use it no more than once per turn.",
        ],
      },
      {
        type: "entries",
        name: "Nimble Escape",
        entries: [
          "You can take the {@action Disengage} or {@action Hide} action as a bonus action on each of your turns.",
        ],
      },
    ],
  },
  {
    name: "Goblin (Ixalan)",
    source: "PSX",
    size: [Size.SMALL],
    speed: {
      walk: 25,
      climb: 25,
    },
    ability: {
      dexterity: 2,
    },

    age: {
      mature: 12,
      max: 50,
    },
    darkvision: 60,
    languageProficiencies: {
      common: true,
      goblin: true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Goblins mature faster than humans, reaching adulthood around age 12. They age noticeably faster, and though few goblins live to old age, the most cautious rarely live longer than 50 years.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Most goblins are wildly chaotic, with no particular inclination toward good or evil but a strong tendency toward mischief.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Goblins average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
        ],
      },
      {
        type: "entries",
        name: "Agile Climber",
        entries: [
          "You have a climbing speed of 25 feet. You can't use your climbing speed while you wear medium or heavy armor. (If your campaign uses the variant rule for encumbrance, you can't use your climbing speed if you are encumbered.)",
        ],
      },
      {
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common (if it exists in your campaign) and Goblin.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Goblin (Zendikar)",
    source: "PSZ",
    size: [Size.SMALL],
    speed: 25,
    ability: {
      constitution: 2,
    },

    age: {
      mature: 12,
      max: 50,
    },
    darkvision: 60,
    traitTags: ["Natural Armor"],
    languageProficiencies: {
      common: true,
      goblin: true,
    },

    resist: [DamageType.FIRE, DamageType.PSYCHIC],
    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Goblins mature faster than humans, reaching adulthood at around age 12. They also age noticeably faster than humans, and even the most cautious goblins rarely live longer than 50 years.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Most goblins are wildly chaotic, though they have no particular inclination toward good or evil.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Goblins average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
        ],
      },
      {
        name: "Darkvision",
        entries: [
          "Thanks to your heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Grit",
        entries: [
          "You have resistance to fire damage and psychic damage. In addition, when you are wearing no armor, your AC is equal to 11 + your Dexterity modifier.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common and Goblin."],
        type: "entries",
      },
    ],
  },
  {
    name: "Goliath",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.MEDIUM],
    speed: 30,
    traitTags: ["Powerful Build"],
    skillProficiencies: {
      athletics: true,
    },

    resist: [DamageType.COLD],
    entries: [
      {
        type: "entries",
        name: "Little Giant",
        entries: [
          "You have proficiency in the {@skill Athletics} skill, and you count as one size larger when determining your carrying weight and the weight you can push, drag, or lift.",
        ],
      },
      {
        type: "entries",
        name: "Mountain Born",
        entries: [
          "You have resistance to cold damage. You also naturally acclimate to high altitudes, even if you've never been to one. This includes elevations above 20,000 feet.",
        ],
      },
      {
        type: "entries",
        name: "Stone's Endurance",
        entries: [
          "You can supernaturally draw on unyielding stone to shrug off harm. When you take damage, you can use your reaction to roll a {@dice d12}. Add your Constitution modifier to the number rolled and reduce the damage by that total.",
          "You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        ],
      },
    ],
  },
  {
    name: "Grimlock",
    source: "DMG",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      strength: 2,
      charisma: -2,
    },

    blindsight: 30,
    traitTags: ["NPC Race"],
    languageProficiencies: {
      undercommon: true,
    },

    entries: [
      {
        name: "Blindsight",
        entries: [
          "You have no eyes, and cannot be {@condition blinded}. You can perceive your surroundings within 30 ft., or 10 ft. while {@condition deafened}. You are considered blind beyond this radius.",
        ],
        type: "entries",
      },
      {
        type: "entries",
        name: "Keen Hearing and Smell",
        entries: [
          "You have advantage on Wisdom ({@skill Perception}) checks that rely on hearing or smell.",
        ],
      },
      {
        type: "entries",
        name: "Stone Camouflage",
        entries: [
          "You have advantage on Dexterity ({@skill Stealth}) checks made to hide in rocky terrain.",
        ],
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Undercommon."],
        type: "entries",
      },
    ],
  },
  {
    name: "Grung",
    source: "OGA",
    size: [Size.SMALL],
    speed: {
      walk: 25,
      climb: 25,
    },
    ability: {
      dexterity: 2,
      constitution: 1,
    },

    age: {
      mature: 1,
      max: 50,
    },
    traitTags: ["Amphibious"],
    skillProficiencies: {
      perception: true,
    },

    languageProficiencies: {
      other: true,
    },

    immune: [DamageType.POISON],
    conditionImmune: [Condition.POISONED],
    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Grungs mature to adulthood in a single year, but have been known to live up to 50 years.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Most grungs are lawful, having been raised in a strict caste system. They tend toward evil as well, coming from a culture where social advancement occurs rarely, and most often because another member of your army has died and there is no one else of that caste to fill the vacancy.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Grungs stand between 2½ and 3½ feet tall and average about 30 pounds. Your size is Small.",
        ],
      },
      {
        type: "entries",
        name: "Arboreal Alertness",
        entries: ["You have proficiency in the {@skill Perception} skill."],
      },
      {
        type: "entries",
        name: "Amphibious",
        entries: ["You can breathe air and water."],
      },
      {
        type: "entries",
        name: "Poison Immunity",
        entries: [
          "You're immune to poison damage and the {@condition poisoned} condition.",
        ],
      },
      {
        type: "entries",
        name: "Poisonous Skin",
        entries: [
          "Any creature that grapples you or otherwise comes into direct contact with your skin must succeed on a DC 12 Constitution saving throw or become {@condition poisoned} for 1 minute. A {@condition poisoned} creature no longer in direct contact with you can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
          "You can also apply this poison to any piercing weapon as part of an attack with that weapon, though when you hit the poison reacts differently. The target must succeed on a DC 12 Constitution saving throw or take {@dice 2d4} poison damage.",
        ],
      },
      {
        type: "entries",
        name: "Standing Leap",
        entries: [
          "Your long jump is up to 25 feet and your high jump is up to 15 feet, with or without a running start.",
        ],
      },
      {
        type: "entries",
        name: "Water Dependency",
        entries: [
          "If you fail to immerse yourself in water for at least 1 hour during a day, you suffer one level of {@condition exhaustion} at the end of that day. You can only recover from this {@condition exhaustion} through magic or by immersing yourself in water for at least 1 hour.",
        ],
      },
      {
        type: "entries",
        name: "Languages",
        entries: ["You can speak, read, and write Grung."],
      },
    ],
  },
  {
    name: "Hadozee",
    source: "AAG",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.SMALL, Size.MEDIUM],
    speed: {
      walk: 30,
      climb: true,
    },
    entries: [
      {
        type: "entries",
        name: "Size",
        entries: [
          "You are Medium or Small. You choose the size when you select this race.",
        ],
      },
      {
        type: "entries",
        name: "Dexterous Feet",
        entries: [
          "As a bonus action, you can use your feet to manipulate an object, open or close a door or container, or pick up or set down a Tiny object.",
        ],
      },
      {
        type: "entries",
        name: "Glide",
        entries: [
          "When you fall at least 10 feet above the ground, you can use your reaction to extend your skin membranes to glide horizontally a number of feet equal to your walking speed, and you take 0 damage from the fall. You determine the direction of the glide.",
        ],
      },
      {
        type: "entries",
        name: "Hadozee Dodge",
        entries: [
          "The magic that runs in your veins heightens your natural defenses. When you take damage, you can use your reaction to roll a {@dice d6}. Add your proficiency bonus to the number rolled, and reduce the damage you take by an amount equal to that total (minimum of 0 damage).",
          "You can use this trait a number of times equal to your proficiency bonus. You regain all expended uses when you finish a long rest.",
        ],
      },
    ],
  },
  {
    name: "Half-Elf",
    source: "PHB",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      charisma: 2,
      choose: [
        [
          {
            from: [
              "strength",
              "dexterity",
              "constitution",
              "intelligence",
              "wisdom",
            ],
            count: 2,
          },
        ],
      ],
    },

    age: {
      mature: 20,
      max: 180,
    },
    darkvision: 60,
    traitTags: ["Uncommon Race"],
    skillProficiencies: {
      any: 2,
    },

    languageProficiencies: {
      common: true,
      elvish: true,
      anyStandard: 1,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",
        ],
      },
      {
        name: "Darkvision",
        entries: [
          "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Fey Ancestry",
        entries: [
          "You have advantage on saving throws against being {@condition charmed}, and magic can't put you to sleep.",
        ],
        type: "entries",
      },
      {
        name: "Skill Versatility",
        entries: ["You gain proficiency in two skills of your choice."],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common, Elvish, and one extra language of your choice.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Half-Orc",
    source: "PHB",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      strength: 2,
      constitution: 1,
    },

    age: {
      mature: 14,
      max: 75,
    },
    darkvision: 60,
    traitTags: ["Uncommon Race"],
    skillProficiencies: {
      intimidation: true,
    },

    languageProficiencies: {
      common: true,
      orc: true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.",
        ],
      },
      {
        name: "Darkvision",
        entries: [
          "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Menacing",
        entries: ["You gain proficiency in the {@skill Intimidation} skill."],
        type: "entries",
      },
      {
        name: "Relentless Endurance",
        entries: [
          "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
        ],
        type: "entries",
      },
      {
        name: "Savage Attacks",
        entries: [
          "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Halfling",
    source: "PHB",
    size: [Size.SMALL],
    speed: 25,
    ability: {
      dexterity: 2,
    },

    age: {
      mature: 20,
      max: 250,
    },
    languageProficiencies: {
      common: true,
      halfling: true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
        ],
      },
      {
        name: "Lucky",
        entries: [
          "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
        ],
        type: "entries",
      },
      {
        name: "Brave",
        entries: [
          "You have advantage on saving throws against being {@condition frightened}.",
        ],
        type: "entries",
      },
      {
        name: "Halfling Nimbleness",
        entries: [
          "You can move through the space of any creature that is of a size larger than yours.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Harengon",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.SMALL, Size.MEDIUM],
    speed: 30,
    skillProficiencies: {
      perception: true,
    },

    entries: [
      {
        type: "entries",
        name: "Size",
        entries: [
          "You are Medium or Small. You choose the size when you select this race.",
        ],
      },
      {
        type: "entries",
        name: "Hare-Trigger",
        entries: [
          "You can add your proficiency bonus to your initiative rolls.",
        ],
      },
      {
        type: "entries",
        name: "Leporine Senses",
        entries: ["You have proficiency in the {@skill Perception} skill."],
      },
      {
        type: "entries",
        name: "Lucky Footwork",
        entries: [
          "When you fail a Dexterity saving throw, you can use your reaction to roll a {@dice d4} and add it to the save, potentially turning the failure into a success. You can't use this reaction if you're {@condition prone} or your speed is 0.",
        ],
      },
      {
        type: "entries",
        name: "Rabbit Hop",
        entries: [
          "As a bonus action, you can jump a number of feet equal to five times your proficiency bonus, without provoking opportunity attacks. You can use this trait only if your speed is greater than 0. You can use it a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        ],
      },
    ],
  },
  {
    name: "Hexblood",
    source: "VRGR",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["fey"],
    size: [Size.SMALL, Size.MEDIUM],
    speed: 30,
    darkvision: 60,
    skillProficiencies: {
      any: 2,
    },

    additionalSpells: [
      {
        ability: {
          choose: ["intelligence", "wisdom", "charisma"],
        },
        known: {
          "1": ["disguise self", "hex"],
        },
      },
    ],
    entries: [
      {
        type: "entries",
        name: "Creature Type",
        entries: ["You are a Fey."],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "You are Medium or Small. You choose the size when you gain this lineage.",
        ],
      },
      {
        type: "entries",
        name: "Ancestral Legacy",
        entries: [
          "If you replace a race with this lineage, you can keep the following elements of that race: any skill proficiencies you gained from it and any climbing, flying, or swimming speed you gained from it.",
          "If you don't keep any of those elements or you choose this lineage at character creation, you gain proficiency in two skills of your choice.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Eerie Token",
        entries: [
          "As a bonus action, you can harmlessly remove a lock of your hair, one of your nails, or one of your teeth. This token is imbued with magic until you finish a long rest. While the token is imbued in this way, you can take these actions:",
          {
            type: "list",
            style: "list-hang-notitle",
            items: [
              {
                type: "item",
                name: "Telepathic Message",
                entry:
                  "As an action, you can send a telepathic message to the creature holding or carrying the token, as long as you are within 10 miles of it. The message can contain up to twenty-five words.",
              },
              {
                type: "item",
                name: "Remote Viewing",
                entry:
                  "If you are within 10 miles of the token, you can enter a trance as an action. The trance lasts for 1 minute, but it ends early if you dismiss it (no action required) or are {@condition incapacitated}. During this trance, you can see and hear from the token as if you were located where it is. While you are using your senses at the token's location, you are {@condition blinded} and {@condition deafened} in regard to your own surroundings. When the trance ends, the token is harmlessly destroyed.",
              },
            ],
          },
          "Once you create a token using this feature, you can't do so again until you finish a long rest, at which point your missing part regrows.",
        ],
      },
      {
        type: "entries",
        name: "Hex Magic",
        entries: [
          "You can cast the {@spell disguise self} and {@spell hex} spells with this trait. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have.",
          "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells (choose the ability when you gain this lineage).",
          {
            type: "inset",
            name: "Becoming a Hag",
            entries: [
              "Hags can undertake a ritual to irreversibly transform a hexblood they created into a new hag, either one of their own kind or that embodies the hexblood's nature. This requires that both the hag and hexblood be in the same place and consent to the lengthy ritual\u2014circumstances most hexbloods shun but might come to accept over the course of centuries. Once a hexblood undergoes this irreversible ritual, they emerge as a hag NPC no longer under the control of the hexblood's player, unless the DM rules otherwise.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Hobgoblin",
    source: "DMG",
    size: [Size.MEDIUM],
    speed: 30,
    darkvision: 60,
    traitTags: ["NPC Race"],
    languageProficiencies: {
      common: true,
      goblin: true,
    },

    entries: [
      {
        type: "entries",
        name: "Martial Advantage",
        entries: [
          "Once per turn, you can deal an extra {@dice 2d6} damage to a creature you hit with a weapon attack if that creature is within 5 ft. of an ally of yours that isn't {@condition incapacitated}.",
        ],
      },
      {
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common and Goblin."],
        type: "entries",
      },
    ],
  },
  {
    name: "Hobgoblin",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["humanoid"],
    creatureTypeTags: ["goblinoid"],
    size: [Size.MEDIUM],
    speed: 30,
    darkvision: 60,
    entries: [
      {
        type: "entries",
        name: "Creature Type",
        entries: [
          "You are a Humanoid.You are also considered a goblinoid for any prerequisite or effect that requires you to be a goblinoid.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Fey Ancestry",
        entries: [
          "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself.",
        ],
      },
      {
        type: "entries",
        name: "Fey Gift",
        entries: [
          "You can use this trait to take the {@action Help} action as a bonus action, and you can do so a number of times equal to your proficiency bonus. You regain all expended uses when you finish a long rest.",
          "Starting at 3rd level, choose one of the options below each time you take the {@action Help} action with this trait:",
          {
            type: "list",
            items: [
              {
                type: "item",
                name: "Hospitality",
                entry:
                  "You and the creature you help each gain a number of temporary hit points equal to {@dice 1d6} plus your proficiency bonus.",
              },
              {
                type: "item",
                name: "Passage",
                entry:
                  "You and the creature you help each increase your walking speeds by 10 feet until the start of your next turn.",
              },
              {
                type: "item",
                name: "Spite",
                entry:
                  "Until the start of your next turn, the first time the creature you help hits a target with an attack roll, that target has disadvantage on the next attack roll it makes within the next minute.",
              },
            ],
            style: "list-hang-notitle",
          },
        ],
      },
      {
        type: "entries",
        name: "Fortune from the Many",
        entries: [
          "If you miss with an attack roll or fail an ability check or a saving throw, you can draw on your bonds of reciprocity to gain a bonus to the roll equal to the number of allies you can see within 30 feet of you (maximum bonus of +3). You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        ],
      },
    ],
  },
  {
    name: "Human",
    source: "PHB",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      strength: 1,
      dexterity: 1,
      constitution: 1,
      intelligence: 1,
      wisdom: 1,
      charisma: 1,
    },
    age: {
      mature: 20,
      max: 100,
    },
    languageProficiencies: {
      common: true,
      anyStandard: 1,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Humans reach adulthood in their late teens and live less than a century.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
        ],
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Human (Amonkhet)",
    source: "PSA",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      choose: [
        [
          {
            from: [
              "strength",
              "dexterity",
              "constitution",
              "intelligence",
              "wisdom",
              "charisma",
            ],
            count: 2,
          },
        ],
      ],
    },

    age: {
      mature: 20,
      max: 100,
    },
    feats: {
      any: 1,
    },

    skillProficiencies: {
      any: 1,
    },

    languageProficiencies: {
      common: true,
      anyStandard: 1,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Humans reach adulthood in their late teens. Most human initiates have completed the trials and found a glorious or inglorious death before they turn 30. Viziers can enjoy longer service to their gods, in theory living up to a century.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Humans tend toward no particular alignment. The best and the worst are found among them.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium",
        ],
      },
      {
        name: "Skills",
        entries: ["You gain proficiency in one skill of your choice."],
        type: "entries",
      },
      {
        name: "Feat",
        entries: ["You gain one {@5etools feat|feats.html} of your choice."],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common and one extra language of your choice.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Kalashtar",
    source: "ERLW",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      wisdom: 2,
      charisma: 1,
    },

    age: {
      mature: 20,
      max: 100,
    },
    languageProficiencies: {
      common: true,
      other: true,
      anyStandard: 1,
    },

    resist: [DamageType.PSYCHIC],
    entries: [
      {
        name: "Age",
        entries: ["Kalashtar mature and age at the same rate as humans."],
        type: "entries",
      },
      {
        type: "entries",
        name: "Alignment",
        entries: [
          "The noble spirit tied to a kalashtar drives it toward lawful and good behavior. Most kalashtar combine strong self-discipline with compassion for all beings, but some kalashtar resist the virtuous influence of their spirit.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: ["Your size is Medium."],
      },
      {
        type: "entries",
        name: "Dual Mind",
        entries: ["You have advantage on all Wisdom saving throws."],
      },
      {
        type: "entries",
        name: "Mental Discipline",
        entries: ["You have resistance to psychic damage."],
      },
      {
        type: "entries",
        name: "Mind Link",
        entries: [
          "You can speak telepathically to any creature you can see, provided the creature is within a number of feet of you equal to 10 times your level. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language.",
          "When you're using this trait to speak telepathically to a creature, you can use your action to give that creature the ability to speak telepathically with you for 1 hour or until you end this effect as an action. To use this ability, the creature must be able to see you and must be within this trait's range. You can give this ability to only one creature at a time; giving it to a creature takes it away from another creature who has it.",
        ],
      },
      {
        type: "entries",
        name: "Severed from Dreams",
        entries: [
          "Kalashtar sleep, but they don't connect to the plane of dreams as other creatures do. Instead, their minds draw from the memories of their otherworldly spirit while they sleep. As such, you are immune to spells and other magical effects that require you to dream, like {@spell dream}, but not to spells and other magical effects that put you to sleep, like {@spell sleep}.",
        ],
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common, Quori, and one other language of your choice.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Kender",
    source: "DSotDQ",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.SMALL],
    speed: 30,
    skillProficiencies: {
      choose: {
        from: [
          "insight",
          "investigation",
          "sleight of hand",
          "stealth",
          "survival",
        ],
      },
    },

    entries: [
      {
        type: "entries",
        name: "Fearless",
        entries: [
          "You have advantage on saving throws you make to avoid or end the {@condition frightened} condition on yourself. When you fail a saving throw to avoid or end the {@condition frightened} condition on yourself, you can choose to succeed instead. Once you succeed on a saving throw in this way, you can't do so again until you finish a long rest.",
        ],
      },
      {
        type: "entries",
        name: "Kender Curiosity",
        entries: [
          "Thanks to the mystical origin of your people, you gain proficiency with one of the following skills of your choice: {@skill Insight}, {@skill Investigation}, {@skill Sleight of Hand}, {@skill Stealth}, or {@skill Survival}.",
        ],
      },
      {
        type: "entries",
        name: "Taunt",
        entries: [
          "You have an extraordinary ability to fluster creatures. As a bonus action, you can unleash a string of provoking words at a creature within 60 feet of yourself that can hear and understand you. The target must succeed on a Wisdom saving throw, or it has disadvantage on attack rolls against targets other than you until the start of your next turn. The DC equals 8 + your proficiency bonus + your Intelligence, Wisdom, or Charisma modifier (choose when you select this race).",
          "You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        ],
      },
    ],
  },
  {
    name: "Kenku",
    source: "DMG",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      dexterity: 2,
    },

    darkvision: 60,
    traitTags: ["NPC Race"],
    languageProficiencies: {
      common: true,
      auran: true,
    },

    entries: [
      {
        name: "Ambusher",
        entries: [
          "In the first round of a combat, you have advantage on attack rolls against any creature who is {@quickref Surprise|PHB|3|0|surprised}.",
        ],
        type: "entries",
      },
      {
        name: "Mimicry",
        entries: [
          "You can mimic any sounds you have heard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom ({@skill Insight}) check.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can read and write Common and Auran, but you can only speak using your Mimicry trait.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Kenku",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.SMALL, Size.MEDIUM],
    speed: 30,
    skillProficiencies: {
      any: 2,
    },

    entries: [
      {
        type: "entries",
        name: "Size",
        entries: [
          "Your size is Medium or Small. You choose the size when you select this race.",
        ],
      },
      {
        type: "entries",
        name: "Expert Duplication",
        entries: [
          "When you copy writing or craftwork produced by yourself or someone else, you have advantage on any ability checks you make to produce an exact duplicate.",
        ],
      },
      {
        type: "entries",
        name: "Kenku Recall",
        entries: [
          "Thanks to your supernaturally good memory, you have proficiency in two skills of your choice.",
          "Moreover, when you make an ability check using any skill in which you have proficiency, you can give yourself advantage on the check before rolling the {@dice d20}. You can give yourself advantage in this way a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        ],
      },
      {
        type: "entries",
        name: "Mimicry",
        entries: [
          "You can accurately mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations only with a successful Wisdom ({@skill Insight}) check against a DC of 8 + your proficiency bonus + your Charisma modifier.",
        ],
      },
    ],
  },
  {
    name: "Khenra",
    source: "PSA",
    size: [Size.MEDIUM],
    speed: 35,
    ability: {
      dexterity: 2,
      strength: 1,
    },

    age: {
      mature: 13,
      max: 60,
    },
    languageProficiencies: {
      common: true,
      other: true,
    },

    weaponProficiencies: {
      "longsword|phb": true,
      "spear|phb": true,
      "javelin|phb": true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Khenra mature quickly, reaching adulthood in their early teens. Khenra initiates are usually the youngest in a crop, completing the trials by their late teens. Even without a violent death, they rarely live past 60.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Most khenra lean toward chaotic alignments. They have no particular inclination toward good or evil.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: ["Khenra have similar builds to humans. Your size is Medium."],
      },
      {
        name: "Khenra Weapon Training",
        entries: [
          "You have proficiency with the khopesh ({@item longsword|phb}), {@item spear|phb}, and {@item javelin|phb}.",
        ],
        type: "entries",
      },
      {
        name: "Khenra Twins",
        entries: [
          "If your twin is alive and you can see your twin, whenever you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll. If your twin is dead (or if you were born without a twin), you can't be {@condition frightened}.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common and Khenra."],
        type: "entries",
      },
    ],
  },
  {
    name: "Kobold",
    source: "DMG",
    size: [Size.SMALL],
    speed: 30,
    ability: {
      dexterity: 2,
      strength: -4,
    },
    darkvision: 60,
    traitTags: ["NPC Race", "Sunlight Sensitivity"],
    languageProficiencies: {
      common: true,
      draconic: true,
    },
    entries: [
      {
        name: "Pack Tactics",
        entries: [
          "You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn't {@condition incapacitated}.",
        ],
        type: "entries",
      },
      {
        name: "Sunlight Sensitivity",
        entries: [
          "You have disadvantage on attack rolls and on Wisdom ({@skill Perception}) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.",
        ],
        type: "entries",
      },
      {
        name: "Darkvision",
        entries: [
          "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common and Draconic."],
        type: "entries",
      },
    ],
  },
  {
    name: "Kobold",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.SMALL],
    speed: 30,
    darkvision: 60,
    skillProficiencies: {
      choose: {
        from: [
          "arcana",
          "investigation",
          "medicine",
          "sleight of hand",
          "survival",
        ],
      },
    },

    additionalSpells: [
      {
        ability: {
          choose: ["intelligence", "wisdom", "charisma"],
        },
        known: {
          _: [
            {
              choose: "level=0|class=Sorcerer",
              count: 1,
            },
          ],
        },
      },
    ],
    entries: [
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were in dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Draconic Cry",
        entries: [
          "As a bonus action, you let out a cry at your enemies within 10 feet of you. Until the start of your next turn, you and your allies have advantage on attack rolls against any of those enemies who could hear you. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        ],
      },
      {
        type: "entries",
        name: "Kobold Legacy",
        entries: [
          "Kobold's connections to dragons can manifest in unpredictable ways in an individual kobold. Choose one of the following legacy options for your kobold.",
          {
            type: "list",
            items: [
              {
                type: "item",
                name: "Craftiness",
                entry:
                  "You have proficiency in one of the following skills of your choice: {@skill Arcana}, {@skill Investigation}, {@skill Medicine}, {@skill Sleight of Hand}, or {@skill Survival}.",
              },
              {
                type: "item",
                name: "Defiance",
                entry:
                  "You have advantage on saving throws to avoid or end the {@condition frightened} condition on yourself.",
              },
              {
                type: "item",
                name: "Draconic Sorcery",
                entry:
                  "You know one {@filter cantrip of your choice from the sorcerer spell list|spells|level=0|class=Sorcerer}. Intelligence, Wisdom, or Charisma is your spellcasting ability for that cantrip (choose when you select this race).",
              },
            ],
            style: "list-hang-notitle",
          },
        ],
      },
    ],
    _versions: [
      {
        name: "Kobold; Craftiness",
        source: "MPMM",
        _mod: {
          entries: {
            mode: "replaceArr",
            replace: "Kobold Legacy",
            items: {
              name: "Kobold Legacy (Craftiness)",
              type: "entries",
              entries: [
                "You have proficiency in one of the following skills of your choice: {@skill Arcana}, {@skill Investigation}, {@skill Medicine}, {@skill Sleight of Hand}, or {@skill Survival}.",
              ],
            },
          },
        },
        additionalSpells: null,
      },
      {
        name: "Kobold; Defiance",
        source: "MPMM",
        _mod: {
          entries: {
            mode: "replaceArr",
            replace: "Kobold Legacy",
            items: {
              name: "Kobold Legacy (Defiance)",
              type: "entries",
              entries: [
                "You have advantage on saving throws to avoid or end the {@condition frightened} condition on yourself.",
              ],
            },
          },
        },
        skillProficiencies: null,
        additionalSpells: null,
      },
      {
        name: "Kobold; Draconic Sorcery",
        source: "MPMM",
        _mod: {
          entries: {
            mode: "replaceArr",
            replace: "Kobold Legacy",
            items: {
              name: "Kobold Legacy (Draconic Sorcery)",
              type: "entries",
              entries: [
                "You know one {@filter cantrip of your choice from the sorcerer spell list|spells|level=0|class=Sorcerer}. Intelligence, Wisdom, or Charisma is your spellcasting ability for that cantrip (choose when you select this race).",
              ],
            },
          },
        },
        skillProficiencies: null,
      },
    ],
  },
  {
    name: "Kor",
    source: "PSZ",
    size: [Size.MEDIUM],
    speed: {
      walk: 30,
      climb: 30,
    },
    ability: {
      dexterity: 2,
      wisdom: 1,
    },

    age: {
      mature: 20,
      max: 100,
    },
    skillProficiencies: {
      athletics: true,
      acrobatics: true,
    },

    languageProficiencies: {
      common: true,
      other: true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Kor mature at the same rate as humans and live about as long.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Most kor are lawful good, with a strong dedication to community and the traditions of their ancestors.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Kor average nearly 6 feet tall, but are much lighter and more slender than humans. Your size is Medium.",
        ],
      },
      {
        name: "Brave",
        entries: [
          "You have advantage on saving throws against being {@condition frightened}.",
        ],
        type: "entries",
      },
      {
        name: "Climbing",
        entries: [
          "You also have a climbing speed of 30 feet as long as you are not encumbered or wearing heavy armor.",
        ],
        type: "entries",
      },
      {
        name: "Kor Climbing",
        entries: [
          "You have proficiency in the {@skill Athletics} and {@skill Acrobatics} skills.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common, and communicate in the silent speech of the Kor.",
        ],
        type: "entries",
      },
      {
        name: "Lucky",
        entries: [
          "When you roll a 1 on the {@dice d20} for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Kuo-Toa",
    source: "DMG",
    size: [Size.MEDIUM],
    speed: {
      walk: 30,
      swim: 30,
    },
    darkvision: 120,
    traitTags: ["Amphibious", "NPC Race", "Sunlight Sensitivity"],
    languageProficiencies: {
      undercommon: true,
    },

    entries: [
      {
        name: "Amphibious",
        type: "entries",
        entries: ["You can breathe air and water."],
      },
      {
        name: "Otherworldly Perception",
        type: "entries",
        entries: [
          "You can sense the presence of any creature within 30 feet of you that is {@condition invisible} or on the Ethereal Plane. You can pinpoint such a creature that is moving.",
        ],
      },
      {
        name: "Slippery",
        type: "entries",
        entries: [
          "You have advantage on ability checks and saving throws made to escape a grapple.",
        ],
      },
      {
        name: "Sunlight Sensitivity",
        type: "entries",
        entries: [
          "While in sunlight, you have disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight.",
        ],
      },
      {
        name: "Superior Darkvision",
        entries: [
          "You have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Undercommon."],
        type: "entries",
      },
    ],
  },
  {
    name: "Leonin",
    source: "MOT",
    size: [Size.MEDIUM],
    speed: 35,
    ability: {
      strength: 1,
      constitution: 2,
    },

    age: {
      mature: 20,
      max: 100,
    },
    darkvision: 60,
    traitTags: ["Natural Weapon"],
    skillProficiencies: {
      choose: {
        from: ["athletics", "intimidation", "perception", "survival"],
      },
    },

    languageProficiencies: {
      common: true,
      other: true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: ["Leonin mature and age at about the same rate as humans."],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Leonin tend toward good alignments. Leonin who are focused on the pride lean toward lawful good.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Leonin are typically over 6 feet tall, with some standing over 7 feet. Your size is Medium.",
        ],
      },
      {
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Claws",
        entries: [
          "Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you can deal slashing damage equal to {@damage 1d4} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
        ],
        type: "entries",
      },
      {
        name: "Hunter's Instincts",
        entries: [
          "You have proficiency in one of the following skills of your choice: {@skill Athletics}, {@skill Intimidation}, {@skill Perception}, or {@skill Survival}.",
        ],
        type: "entries",
      },
      {
        name: "Daunting Roar",
        entries: [
          "As a bonus action, you can let out an especially menacing roar. Creatures of your choice within 10 feet of you that can hear you must succeed on a Wisdom saving throw or become {@condition frightened} of you until the end of your next turn. The DC of the save equals 8 + your proficiency bonus + your Constitution modifier. Once you use this trait, you can't use it again until you finish a short or long rest.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common and Leonin."],
        type: "entries",
      },
    ],
  },
  {
    name: "Lizardfolk",
    source: "DMG",
    size: [Size.MEDIUM],
    speed: {
      walk: 30,
      swim: 30,
    },
    ability: {
      strength: 2,
      intelligence: -2,
    },

    traitTags: ["Natural Armor", "NPC Race"],
    languageProficiencies: {
      draconic: true,
    },

    entries: [
      {
        name: "Hold Breath",
        entries: ["You can hold your breath for up to 15 minutes at a time."],
        type: "entries",
      },
      {
        name: "Natural Armor",
        entries: [
          "Your scales function as natural armor, granting you a +3 bonus to Armor Class.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Draconic."],
        type: "entries",
      },
    ],
  },
  {
    name: "Lizardfolk",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.MEDIUM],
    speed: {
      walk: 30,
      swim: true,
    },
    traitTags: ["Natural Armor", "Natural Weapon"],
    skillProficiencies: {
      choose: {
        from: [
          "animal handling",
          "medicine",
          "nature",
          "perception",
          "stealth",
          "survival",
        ],
        count: 2,
      },
    },

    entries: [
      {
        type: "entries",
        name: "Speed",
        entries: [
          "Your walking speed is 30 feet, and you have a swimming speed equal to your walking speed.",
        ],
      },
      {
        type: "entries",
        name: "Bite",
        entries: [
          "You have a fanged maw that you can use to make unarmed strikes. When you hit with it, the strike deals {@damage 1d6} + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.",
        ],
      },
      {
        type: "entries",
        name: "Hold Breath",
        entries: ["You can hold your breath for up to 15 minutes at a time."],
      },
      {
        type: "entries",
        name: "Hungry Jaws",
        entries: [
          "You can throw yourself into a feeding frenzy. As a bonus action, you can make a special attack with your Bite. If the attack hits, it deals its normal damage, and you gain temporary hit points equal to your proficiency bonus. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        ],
      },
      {
        type: "entries",
        name: "Natural Armor",
        entries: [
          "You have tough, scaly skin. When you aren't wearing armor, your base AC is 13 + Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.",
        ],
      },
      {
        type: "entries",
        name: "Nature's Intuition",
        entries: [
          "Thanks to your mystical connection to nature, you gain proficiency with two of the following skills of your choice: {@skill Animal Handling}, {@skill Medicine}, {@skill Nature}, {@skill Perception}, {@skill Stealth}, or {@skill Survival}.",
        ],
      },
    ],
  },
  {
    name: "Locathah",
    source: "LR",
    size: [Size.MEDIUM],
    speed: {
      walk: 30,
      swim: 30,
    },
    ability: {
      strength: 2,
      dexterity: 1,
    },

    age: {
      mature: 10,
      max: 80,
    },
    traitTags: ["Amphibious", "Natural Armor"],
    skillProficiencies: {
      athletics: true,
      perception: true,
    },

    languageProficiencies: {
      aquan: true,
      common: true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Locathah mature to adulthood by the age of 10 but have been known to live up to 80 years.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Most locathah are true neutral or have some aspect of neutrality in their alignment. They tend toward good, coming from a culture where compassion for the downtrodden is a commonality.",
        ],
      },
      {
        name: "Natural Armor",
        entries: [
          "You have tough, scaly skin. When you aren't wearing armor, your AC is 12 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.",
        ],
        type: "entries",
      },
      {
        name: "Observant & Athletic",
        entries: [
          "You have proficiency in the {@skill Athletics} and {@skill Perception} skills.",
        ],
        type: "entries",
      },
      {
        name: "Leviathan Will",
        entries: [
          "You have advantage on saving throws against being {@condition charmed}, {@condition frightened}, {@condition paralyzed}, {@condition poisoned}, {@condition stunned}, or put to sleep.",
        ],
        type: "entries",
      },
      {
        name: "Limited Amphibiousness",
        entries: [
          "You can breathe air and water, but you need to be submerged at least once every 4 hours to avoid suffocating.",
        ],
        type: "entries",
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Locathah stand between 5 and 6 feet tall and average about 150 pounds. Your size is Medium.",
        ],
      },
      {
        name: "Language",
        entries: ["You can speak, read, and write Aquan and Common."],
        type: "entries",
      },
    ],
  },
  {
    name: "Loxodon",
    source: "GGR",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      constitution: 2,
      wisdom: 1,
    },

    age: {
      mature: 20,
      max: 450,
    },
    traitTags: ["Natural Armor", "Powerful Build"],
    languageProficiencies: {
      common: true,
      other: true,
    },

    entries: [
      {
        type: "entries",
        name: "Age",
        entries: [
          "Loxodons physically mature at the same rate as humans, but they live about 450 years. They highly value the weight of wisdom and experience and are considered young until they reach the age of 60.",
        ],
      },
      {
        type: "entries",
        name: "Alignment",
        entries: [
          "Most loxodons are lawful, believing in the value of a peaceful, ordered life. They also tend toward good.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Loxodons stand between 7 and 8 feet tall. Their massive bodies weigh between 300 and 400 pounds. Your size is Medium.",
        ],
      },
      {
        type: "entries",
        name: "Powerful Build",
        entries: [
          "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
        ],
      },
      {
        type: "entries",
        name: "Loxodon Serenity",
        entries: [
          "You have advantage on saving throws against being {@condition charmed} or {@condition frightened}.",
        ],
      },
      {
        type: "entries",
        name: "Natural Armor",
        entries: [
          "You have thick, leathery skin. When you aren't wearing armor, your AC is 12 + your Constitution modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.",
          {
            type: "inset",
            name: "Tip: AC Calculations Don't Stack",
            entries: [
              "When the game gives you more than one way to calculate your Armor Class, you can use only one of them. You choose the one to use. For example, if you have the loxodon's Natural Armor trait and the monk's Unarmored Defense feature, you don't mix them together. Instead, you choose which one determines your AC.",
            ],
          },
        ],
      },
      {
        type: "entries",
        name: "Trunk",
        entries: [
          "You can grasp things with your trunk, and you can use it as a snorkel. It has a reach of 5 feet, and it can lift a number of pounds equal to five times your Strength score. You can use it to do the following simple tasks: lift, drop, hold, push, or pull an object or a creature; open or close a door or a container; grapple someone; or make an unarmed strike. Your DM might allow other simple tasks to be added to that list of options.",
          "Your trunk can't wield weapons or shields or do anything that requires manual precision, such as using tools or magic items or performing the somatic components of a spell.",
        ],
      },
      {
        type: "entries",
        name: "Keen Smell",
        entries: [
          "Thanks to your sensitive trunk, you have advantage on Wisdom ({@skill Perception}), Wisdom ({@skill Survival}), and Intelligence ({@skill Investigation}) checks that involve smell.",
        ],
      },
      {
        type: "entries",
        name: "Languages",
        entries: ["You can speak, read, and write Common and Loxodon."],
      },
    ],
  },
  {
    name: "Merfolk",
    source: "DMG",
    size: [Size.MEDIUM],
    speed: {
      walk: 10,
      swim: 40,
    },
    traitTags: ["Amphibious", "NPC Race"],
    languageProficiencies: {
      common: true,
      aquan: true,
    },

    entries: [
      {
        name: "Amphibious",
        entries: ["You can breathe air and water."],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common and Aquan."],
        type: "entries",
      },
    ],
  },
  {
    name: "Minotaur",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.MEDIUM],
    speed: 30,
    traitTags: ["Natural Weapon"],
    entries: [
      {
        type: "entries",
        name: "Horns",
        entries: [
          "You have horns that you can use to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier piercing damage, instead of the bludgeoning damage normal for an unarmed strike.",
        ],
      },
      {
        type: "entries",
        name: "Goring Rush",
        entries: [
          "Immediately after you take the {@action Dash} action on your turn and move at least 20 feet, you can make one melee attack with your Horns as a bonus action.",
        ],
      },
      {
        type: "entries",
        name: "Hammering Horns",
        entries: [
          "Immediately after you hit a creature with a melee attack as part of the {@action Attack} action on your turn, you can use a bonus action to attempt to push that target with your horns. The target must be within 5 feet of you and no more than one size larger than you. Unless it succeeds on a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Strength modifier, you can push it up to 10 feet away from you.",
        ],
      },
      {
        type: "entries",
        name: "Labyrinthine Recall",
        entries: [
          "You always know which direction is north, and you have advantage on any Wisdom ({@skill Survival}) check you make to navigate or track.",
        ],
      },
    ],
  },
  {
    name: "Minotaur (Amonkhet)",
    source: "PSA",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      strength: 2,
      constitution: 1,
    },
    age: {
      mature: 20,
      max: 40,
    },
    traitTags: ["Natural Weapon"],
    skillProficiencies: {
      intimidation: true,
    },

    languageProficiencies: {
      common: true,
      other: true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Minotaurs develop more slowly than humans, reaching full maturity around the age of 20. They typically become acolytes at around 8 or 9 years old, making them among the older members of their crops. Once they reach maturity, though, minotaurs age quickly, rushing headlong through the trials (as they do all aspects of life) to complete them before they pass their peak. A minotaur allowed to die of old age would rarely live beyond 40.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Most minotaurs lean toward chaotic alignments, and they have a slight inclination toward evil.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Minotaurs average over 6 feet in height, and they have strong, stocky builds. Your size is Medium.",
        ],
      },
      {
        name: "Natural Weapon",
        entries: [
          "You can use your horns as a natural weapon to make unarmed strikes. If you hit with your horns, you deal bludgeoning damage equal to {@dice 1d6} + your Strength modifier.",
        ],
        type: "entries",
      },
      {
        name: "Menacing",
        entries: ["You gain proficiency in the {@skill Intimidation} skill."],
        type: "entries",
      },
      {
        name: "Relentless Endurance",
        entries: [
          "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
        ],
        type: "entries",
      },
      {
        name: "Savage Attacks",
        entries: [
          "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common and Minotaur."],
        type: "entries",
      },
    ],
  },
  {
    name: "Minotaur (Krynn)",
    source: "UAWaterborneAdventures",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      strength: 1,
      choose: [
        [
          {
            from: ["strength", "intelligence", "wisdom"],
            count: 1,
          },
        ],
      ],
    },

    age: {
      mature: 17,
      max: 150,
    },
    traitTags: ["Natural Weapon", "Tool Proficiency"],
    languageProficiencies: {
      common: true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Minotaurs enter adulthood at around the age of 17 and can live up to 150 years.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Minotaurs believe in a strict code of honor, and thus tend toward law. They are loyal to the death and make implacable enemies, even as their brutal culture and disdain for weakness push them toward evil.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Minotaurs typically stand well over 6 feet tall and weigh an average of 300 pounds. Your size is Medium.",
        ],
      },
      {
        name: "Conqueror's Virtue",
        entries: [
          "From a young age, you focused on one of the three virtues of strength, cunning, or intellect. Your choice of your Strength, Intelligence, or Wisdom score increases by 1.",
        ],
        type: "entries",
      },
      {
        name: "Horns",
        entries: [
          "You are never unarmed. You are proficient with your horns, which are a melee weapon that deals {@dice 1d10} piercing damage. Your horns grant you advantage on all checks made to shove a creature, but not to avoid being shoved yourself.",
        ],
        type: "entries",
      },
      {
        name: "Goring Rush",
        entries: [
          "When you use the {@action Dash} action during your turn, you can make a melee attack with your horns as a bonus action.",
        ],
        type: "entries",
      },
      {
        name: "Hammering Horns",
        entries: [
          "When you use the {@action Attack} action during your turn to make a melee attack, you can attempt to shove a creature with your horns as a bonus action. You cannot use this shove attempt to knock a creature {@condition prone}.",
        ],
        type: "entries",
      },
      {
        name: "Labyrinthine Recall",
        entries: ["You can perfectly recall any path you have traveled."],
        type: "entries",
      },
      {
        name: "Sea Reaver",
        entries: [
          "You gain proficiency with {@item navigator's tools|phb} and {@filter vehicles (water)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (water)}.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common."],
        type: "entries",
      },
    ],
  },
  {
    name: "Naga",
    source: "PSA",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      constitution: 2,
      intelligence: 1,
    },

    age: {
      mature: 20,
      max: 100,
    },
    traitTags: ["Natural Weapon", "Tool Proficiency"],
    languageProficiencies: {
      common: true,
      other: true,
    },

    immune: [DamageType.POISON],
    conditionImmune: [Condition.POISONED],
    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Like humans, naga reach adulthood in their late teens. They show no signs of aging beyond that point except for growing larger, so in theory, a naga could live well over a century.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: ["Most naga are either neutral or neutral evil in alignment."],
      },
      {
        name: "Size",
        entries: [
          "Naga stand about 5 feet tall when upright, but the total length of their bodies, head to tail, ranges from 10 to as much as 20 feet. Your size is Medium.",
        ],
        type: "entries",
      },
      {
        name: "Speed Burst",
        entries: [
          "By lowering your body to the ground and propelling yourself with your arms, you can move more quickly for a time. As a bonus action on your turn, if you have both hands free, you can increase your walking speed by 5 feet until the end of your turn.",
        ],
        type: "entries",
      },
      {
        name: "Natural Weapons",
        entries: [
          "Your fanged maw and constricting serpentine body are natural weapons, which you can use to make unarmed strikes.",
          "If you hit with your bite, you deal piercing damage equal to {@damage 1d4} + your Strength modifier, and your target must make a Constitution saving throw (DC 8 + your proficiency bonus + your Constitution modifier). On a failed save, the target takes {@damage 1d4} poison damage.",
          "If you hit with your constrict attack, you deal bludgeoning damage equal to {@dice 1d6} + your Strength modifier, and the target is {@condition grappled} (escape DC 8 + your proficiency bonus + your Strength modifier). Until this grapple ends, the target is {@condition restrained}, and you can't constrict another target.",
        ],
        type: "entries",
      },
      {
        name: "Poison Immunity",
        entries: [
          "You are immune to poison damage and can't be {@condition poisoned}.",
        ],
        type: "entries",
      },
      {
        name: "Poison Affinity",
        entries: ["You gain proficiency with the {@item poisoner's kit|phb}."],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common and Naga."],
        type: "entries",
      },
    ],
  },
  {
    name: "Orc",
    source: "DMG",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      strength: 2,
      intelligence: -2,
    },

    darkvision: 60,
    traitTags: ["NPC Race"],
    languageProficiencies: {
      common: true,
      orc: true,
    },

    entries: [
      {
        name: "Aggressive",
        entries: [
          "As a bonus action, you can move up to your speed toward a hostile creature that you can see.",
        ],
        type: "entries",
      },
      {
        name: "Darkvision",
        entries: [
          "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common and Orc."],
        type: "entries",
      },
    ],
  },
  {
    name: "Orc",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.MEDIUM],
    speed: 30,
    darkvision: 60,
    traitTags: ["Powerful Build"],
    entries: [
      {
        type: "entries",
        name: "Adrenaline Rush",
        entries: [
          "You can take the {@action Dash} action as a bonus action. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
          "Whenever you use this trait, you gain a number of temporary hit points equal to your proficiency bonus.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Powerful Build",
        entries: [
          "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
        ],
      },
      {
        type: "entries",
        name: "Relentless Endurance",
        entries: [
          "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. Once you use this trait, you can't do so again until you finish a long rest.",
        ],
      },
    ],
  },
  {
    name: "Orc (Ixalan)",
    source: "PSX",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      strength: 2,
      constitution: 1,
    },

    age: {
      mature: 14,
      max: 75,
    },
    darkvision: 60,
    skillProficiencies: {
      intimidation: true,
    },

    languageProficiencies: {
      common: true,
      orc: true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Most orcs lean toward chaotic alignments, and many serve on pirate ships that encourage an inclination toward evil.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Orcs average over 6 feet in height, and they have strong, stocky builds. Your size is Medium.",
        ],
      },
      {
        type: "entries",
        name: "Menacing",
        entries: ["You gain proficiency in the {@skill Intimidation} skill."],
      },
      {
        type: "entries",
        name: "Relentless Endurance",
        entries: [
          "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
        ],
      },
      {
        type: "entries",
        name: "Savage Attacks",
        entries: [
          "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
        ],
      },
      {
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common (if it exists in your campaign) and Orc.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Owlin",
    source: "SCC",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.SMALL, Size.MEDIUM],
    speed: {
      walk: 30,
      fly: true,
    },
    darkvision: 120,
    skillProficiencies: {
      stealth: true,
    },

    entries: [
      {
        type: "entries",
        name: "Size",
        entries: [
          "You are Medium or Small. You choose the size when you select this race.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 120 feet of yourself as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Flight",
        entries: [
          "Thanks to your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.",
        ],
      },
      {
        type: "entries",
        name: "Silent Feathers",
        entries: ["You have proficiency in the {@skill Stealth} skill."],
      },
    ],
  },
  {
    name: "Plasmoid",
    source: "AAG",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["ooze"],
    size: [Size.SMALL, Size.MEDIUM],
    speed: 30,
    darkvision: 60,
    resist: [DamageType.ACID, DamageType.POISON],
    entries: [
      {
        type: "entries",
        name: "Creature Type",
        entries: ["You are an Ooze."],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "You are Medium or Small. You choose the size when you select this race.",
        ],
      },
      {
        type: "entries",
        name: "Amorphous",
        entries: [
          "You can squeeze through a space as narrow as 1 inch wide, provided you are wearing and carrying nothing. You have advantage on ability checks you make to initiate or escape a grapple.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of yourself as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Hold Breath",
        entries: ["You can hold your breath for 1 hour."],
      },
      {
        type: "entries",
        name: "Natural Resilience",
        entries: [
          "You have resistance to acid and poison damage, and you have advantage on saving throws against being {@condition poisoned}.",
        ],
      },
      {
        type: "entries",
        name: "Shape Self",
        entries: [
          "As an action, you can reshape your body to give yourself a head, one or two arms, one or two legs, and makeshift hands and feet, or you can revert to a limbless blob. While you have a humanlike shape, you can wear clothing and armor made for a Humanoid of your size.",
          "As a bonus action, you can extrude a pseudopod that is up to 6 inches wide and 10 feet long or reabsorb it into your body. As part of the same bonus action, you can use this pseudopod to manipulate an object, open or close a door or container, or pick up or set down a Tiny object. The pseudopod contains no sensory organs and can't attack, activate magic items, or lift more than 10 pounds.",
        ],
      },
    ],
  },
  {
    name: "Reborn",
    source: "VRGR",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.SMALL, Size.MEDIUM],
    speed: 30,
    traitTags: ["Improved Resting"],
    resist: [DamageType.POISON],
    entries: [
      {
        type: "entries",
        name: "Size",
        entries: [
          "You are Medium or Small. You choose the size when you gain this lineage.",
        ],
      },
      {
        type: "entries",
        name: "Ancestral Legacy",
        entries: [
          "If you replace a race with this lineage, you can keep the following elements of that race: any skill proficiencies you gained from it and any climbing, flying, or swimming speed you gained from it.",
          "If you don't keep any of those elements or you choose this lineage at character creation, you gain proficiency in two skills of your choice.",
        ],
      },
      {
        type: "entries",
        name: "Deathless Nature",
        entries: [
          "You have escaped death, a fact represented by the following benefits:",
          {
            type: "list",
            items: [
              "You have advantage on saving throws against disease and being {@condition poisoned}, and you have resistance to poison damage.",
              "You have advantage on death saving throws.",
              "You don't need to eat, drink, or breathe.",
              "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in an inactive, motionless state, during which you retain consciousness.",
            ],
          },
        ],
      },
      {
        type: "entries",
        name: "Knowledge from a Past Life",
        entries: [
          "You temporarily remember glimpses of the past, perhaps faded memories from ages ago or a previous life. When you make an ability check that uses a skill, you can roll a {@dice d6} immediately after seeing the number on the {@dice d20} and add the number on the {@dice d6} to the check. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        ],
      },
    ],
  },
  {
    name: "Satyr",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["fey"],
    size: [Size.MEDIUM],
    speed: 35,
    traitTags: ["Magic Resistance", "Natural Weapon"],
    skillProficiencies: {
      performance: true,
      persuasion: true,
    },
    toolProficiencies: {
      "musical instrument": true,
    },
    entries: [
      {
        type: "entries",
        name: "Creature Type",
        entries: ["You are a Fey."],
      },
      {
        type: "entries",
        name: "Ram",
        entries: [
          "You can use your head and horns to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier bludgeoning damage, instead of the bludgeoning damage normal for an unarmed strike.",
        ],
      },
      {
        type: "entries",
        name: "Magic Resistance",
        entries: ["You have advantage on saving throws against spells."],
      },
      {
        type: "entries",
        name: "Mirthful Leaps",
        entries: [
          "Whenever you make a long jump or a high jump, you can roll a {@dice d8} and add the number rolled to the number of feet you cover, even when making a standing jump. This extra distance costs movement as usual.",
        ],
      },
      {
        type: "entries",
        name: "Reveler",
        entries: [
          "As an embodiment of revelry, you have proficiency in the {@skill Performance} and {@skill Persuasion} skills, and you have proficiency with one {@item musical instrument|PHB} of your choice.",
        ],
      },
    ],
  },
  {
    name: "Sea Elf",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["humanoid"],
    creatureTypeTags: ["elf"],
    size: [Size.MEDIUM],
    speed: {
      walk: 30,
      swim: true,
    },
    age: {
      max: 750,
    },
    darkvision: 60,
    traitTags: [
      "Amphibious",
      "Improved Resting",
      "Tool Proficiency",
      "Weapon Proficiency",
    ],
    skillProficiencies: {
      perception: true,
    },

    resist: [DamageType.COLD],
    entries: [
      {
        type: "entries",
        name: "Creature Type",
        entries: [
          "You are a Humanoid. You are also considered an elf for any prerequisite or effect that requires you to be an elf.",
        ],
      },
      {
        type: "entries",
        name: "Speed",
        entries: [
          "Your walking speed is 30 feet, and you have a swimming speed equal to your walking speed.",
        ],
      },
      {
        type: "entries",
        name: "Child of the Sea",
        entries: [
          "You can breathe air and water, and you have a resistance to cold damage.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Fey Ancestry",
        entries: [
          "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself.",
        ],
      },
      {
        type: "entries",
        name: "Friend of the Sea",
        entries: [
          "Aquatic animals have an extraordinary affinity with your people. You can communicate simple ideas to any Beast that has a swimming speed. It can understand your words, though you have no special ability to understand it in return.",
        ],
      },
      {
        type: "entries",
        name: "Keen Senses",
        entries: ["You have proficiency in the {@skill Perception} skill."],
      },
      {
        type: "entries",
        name: "Trance",
        entries: [
          "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
          "Whenever you finish this trance, you can gain two proficiencies that you don't have, each one with a weapon or a tool of your choice selected from the Player's Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest.",
        ],
      },
    ],
  },
  {
    name: "Shadar-Kai",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["humanoid"],
    creatureTypeTags: ["elf"],
    size: [Size.MEDIUM],
    speed: 30,
    age: {
      max: 750,
    },
    darkvision: 60,
    traitTags: ["Improved Resting", "Tool Proficiency", "Weapon Proficiency"],
    skillProficiencies: {
      perception: true,
    },

    resist: [DamageType.NECROTIC],
    entries: [
      {
        type: "entries",
        name: "Creature Type",
        entries: [
          "You are a Humanoid. You are also considered an elf for any prerequisite or effect that requires you to be an elf.",
        ],
      },
      {
        type: "entries",
        name: "Blessing of the Raven Queen",
        entries: [
          "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
          "Start at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Fey Ancestry",
        entries: [
          "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself.",
        ],
      },
      {
        type: "entries",
        name: "Keen Senses",
        entries: ["You have proficiency in the {@skill Perception} skill."],
      },
      {
        type: "entries",
        name: "Necrotic Resistance",
        entries: ["You have resistance to necrotic damage."],
      },
      {
        type: "entries",
        name: "Trance",
        entries: [
          "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
          "Whenever you finish this trance, you can gain two proficiencies that you don't have, each one with a weapon or a tool of your choice selected from the Player's Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest.",
        ],
      },
    ],
  },
  {
    name: "Shifter",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.MEDIUM],
    speed: 30,
    darkvision: 60,
    skillProficiencies: {
      choose: {
        from: ["acrobatics", "athletics", "intimidation", "survival"],
      },
    },

    entries: [
      {
        type: "entries",
        name: "Bestial Instincts",
        entries: [
          "Channeling the beast within, you have proficiency in one of the following skills of your choice: {@skill Acrobatics}, {@skill Athletics}, {@skill Intimidation}, or {@skill Survival}.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were in dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Shifting",
        entries: [
          "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 × your proficiency bonus. You can shift a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
          "Whenever you shift, you gain an additional benefit based on one of the following options (choose when you select this race):",
          {
            type: "list",
            items: [
              {
                type: "item",
                name: "Beasthide",
                entry:
                  "You gain {@dice 1d6} additional temporary hit points. While shifted, you have a +1 bonus to your Armor Class.",
              },
              {
                type: "item",
                name: "Longtooth",
                entry:
                  "When you shift and as a bonus action on your other turns while shifted, you can use your elongated fangs to make an unarmed strike. If you hit with your fangs, you can deal piercing damage equal to {@dice 1d6} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
              },
              {
                type: "item",
                name: "Swiftstride",
                entry:
                  "While shifted, your walking speed increases by 10 feet. Additionally, you can move up to 10 feet as a reaction when a creature ends its turn within 5 feet of you. This reactive movement doesn't provoke opportunity attacks.",
              },
              {
                type: "item",
                name: "Wildhunt",
                entry:
                  "While shifted, you have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you unless you're {@condition incapacitated}.",
              },
            ],
            style: "list-hang-notitle",
          },
        ],
      },
    ],
    _versions: [
      {
        name: "Shifter; Beasthide",
        source: "MPMM",
        _mod: {
          entries: {
            mode: "replaceArr",
            replace: "Shifting",
            items: {
              name: "Shifting (Beasthide)",
              type: "entries",
              entries: [
                "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 × your proficiency bonus + {@dice 1d6}, and you regain all expended uses when you finish a long rest.",
                "While shifted, you have a +1 bonus to your Armor Class.",
              ],
            },
          },
        },
      },
      {
        name: "Shifter; Longtooth",
        source: "MPMM",
        _mod: {
          entries: {
            mode: "replaceArr",
            replace: "Shifting",
            items: {
              name: "Shifting (Longtooth)",
              type: "entries",
              entries: [
                "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 × your proficiency bonus, and you regain all expended uses when you finish a long rest.",
                "When you shift and as a bonus action on your other turns while shifted, you can use your elongated fangs to make an unarmed strike. If you hit with your fangs, you can deal piercing damage equal to {@dice 1d6} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
              ],
            },
          },
        },
      },
      {
        name: "Shifter; Swiftstride",
        source: "MPMM",
        _mod: {
          entries: {
            mode: "replaceArr",
            replace: "Shifting",
            items: {
              name: "Shifting (Swiftstride)",
              type: "entries",
              entries: [
                "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 × your proficiency bonus, and you regain all expended uses when you finish a long rest.",
                "While shifted, your walking speed increases by 10 feet. Additionally, you can move up to 10 feet as a reaction when a creature ends its turn within 5 feet of you. This reactive movement doesn't provoke opportunity attacks.",
              ],
            },
          },
        },
      },
      {
        name: "Shifter; Wildhunt",
        source: "MPMM",
        _mod: {
          entries: {
            mode: "replaceArr",
            replace: "Shifting",
            items: {
              name: "Shifting (Wildhunt)",
              type: "entries",
              entries: [
                "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 × your proficiency bonus, and you regain all expended uses when you finish a long rest.",
                "While shifted, you have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you unless you're {@condition incapacitated}.",
              ],
            },
          },
        },
      },
    ],
  },
  {
    name: "Shifter",
    source: "UARacesOfEberron",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      dexterity: 1,
    },

    age: {
      mature: 10,
      max: 70,
    },
    darkvision: 60,
    skillProficiencies: {
      perception: true,
    },

    languageProficiencies: {
      common: true,
    },

    entries: [
      {
        name: "Age",
        entries: [
          "Shifters are quick to mature both physically and emotionally, reaching young adulthood at age 10. They rarely live to be more than 70 years old.",
        ],
        type: "entries",
      },
      {
        type: "entries",
        name: "Alignment",
        entries: [
          "Shifters tend toward neutrality, being more focused on survival than concepts of good and evil. A love of personal freedom can drive shifters toward chaotic alignments.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Shifters range from 5 to almost 7 feet tall, depending on their subrace. Your size is Medium.",
        ],
      },
      {
        name: "Darkvision",
        entries: [
          "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        type: "entries",
        name: "Keen Senses",
        entries: ["You have proficiency with the {@skill Perception} skill."],
      },
      {
        type: "entries",
        name: "Shifting",
        entries: [
          "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to your level + your Constitution modifier (minimum of 1 temporary hit point). You also gain additional benefits that depend on your shifter subrace, described below.",
          "Once you shift, you can't do so again until you finish a short or long rest.",
        ],
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common."],
        type: "entries",
      },
    ],
  },
  {
    name: "Simic Hybrid",
    source: "GGR",
    size: [Size.MEDIUM],
    speed: {
      walk: 30,
    },
    ability: {
      constitution: 2,
      choose: [
        [
          {
            from: [
              "strength",
              "dexterity",
              "intelligence",
              "wisdom",
              "charisma",
            ],
            count: 1,
          },
        ],
      ],
    },

    darkvision: 60,
    traitTags: ["Amphibious", "Natural Armor", "Natural Weapon"],
    languageProficiencies: {
      common: true,
      choose: {
        from: ["elvish", "other"],
        count: 1,
      },
    },

    entries: [
      {
        type: "entries",
        name: "Age",
        entries: [
          "Hybrids begin their lives as adult humans, elves, or vedalken. They age at a slightly accelerated rate, so their maximum life spans are probably reduced somewhat. The Guardian Project has not been operating long enough to observe the full effect of this phenomenon.",
        ],
      },
      {
        type: "entries",
        name: "Alignment",
        entries: [
          "Most hybrids share the generally neutral outlook of the Simic Combine. They are more interested in scientific research and the standing of their guild than in moral or ethical questions. Those who leave the Combine, however, often do so because their philosophical outlook and alignment are more in line with a different guild's.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Your size is Medium, within the normal range of your humanoid base race.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Languages",
        entries: [
          "You can speak, read, and write Common and your choice of Elvish or Vedalken.",
        ],
      },
      {
        type: "entries",
        name: "Animal Enhancement",
        entries: [
          "Your body has been altered to incorporate certain animal characteristics. You choose one animal enhancement now and a second enhancement at 5th level.",
          "At 1st level, choose one of the following options:",
          {
            type: "list",
            style: "list-hang-notitle",
            items: [
              {
                type: "item",
                name: "Manta Glide",
                entry:
                  "You have ray-like fins that you can use as wings to slow your fall or allow you to glide. When you fall and aren't {@condition incapacitated}, you can subtract up to 100 feet from the fall when calculating falling damage, and you can move up to 2 feet horizontally for every 1 foot you descend.",
              },
              {
                type: "item",
                name: "Nimble Climber",
                entry: "You have a climbing speed equal to your walking speed.",
              },
              {
                type: "item",
                name: "Underwater Adaptation",
                entry:
                  "You can breathe air and water, and you have a swimming speed equal to your walking speed.",
              },
            ],
          },
          "At 5th level, your body evolves further, developing new characteristics. Choose one of the options you didn't take at 1st level, or one of the following options:",
          {
            type: "list",
            style: "list-hang-notitle",
            items: [
              {
                type: "item",
                name: "Grappling Appendage",
                entry:
                  "You have two special appendages growing alongside your arms. Choose whether they're both claws or tentacles. As an action, you can use one of them to try to grapple a creature. Each one is also a natural weapon, which you can use to make an unarmed strike. If you hit with it, the target takes bludgeoning damage equal to {@dice 1d6} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. Immediately after hitting, you can try to grapple the target as a bonus action. These appendages can't precisely manipulate anything and can't wield weapons, magic items, or other specialized equipment.",
              },
              {
                type: "item",
                name: "Carapace",
                entry:
                  "Your skin in places is covered by a thick shell. You gain a +1 bonus to AC when you're not wearing heavy armor.",
              },
              {
                type: "item",
                name: "Acid Spit",
                entry:
                  "As an action, you can spray acid from glands in your mouth, targeting one creature or object you can see within 30 feet of you. The target takes {@dice 2d10} acid damage unless it succeeds on a Dexterity saving throw against a DC equal to 8 + your Constitution modifier + your proficiency bonus. This damage increases by {@dice 1d10} when you reach 11th level ({@dice 3d10}) and 17th level ({@dice 4d10}). You can use this trait a number of times equal to your Constitution modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Siren",
    source: "PSX",
    size: [Size.MEDIUM],
    speed: {
      walk: 25,
      fly: 30,
    },
    ability: {
      charisma: 2,
    },

    languageProficiencies: {
      common: true,
      other: true,
    },

    additionalSpells: [
      {
        known: {
          "1": ["friends#c"],
        },
      },
    ],
    entries: [
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Most sirens lean toward chaotic alignment, cherishing the freedom and independence that comes from joining a pirate crew.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Sirens stand about 5 to 6 feet tall, but their bodies are slender and their bones partially hollow to facilitate their flight. Your size is Medium.",
        ],
      },
      {
        type: "entries",
        name: "Siren's Song",
        entries: [
          "You know the {@spell friends} cantrip and can cast it without material components.",
        ],
      },
      {
        type: "entries",
        name: "Flight",
        entries: [
          "You have a flying speed of 30 feet. You can't use your flying speed while you wear medium or heavy armor. (If your campaign uses the variant rule for encumbrance, you can't use your flying speed if you are encumbered.)",
        ],
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common (if it exists in your campaign) and Siren.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Skeleton",
    source: "DMG",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      dexterity: 2,
      intelligence: -4,
      charisma: -4,
    },

    darkvision: 60,
    traitTags: ["Improved Resting", "NPC Race"],
    immune: [DamageType.POISON],
    vulnerable: [DamageType.BLUDGEONING],
    conditionImmune: [Condition.EXHAUSTION, Condition.POISONED],
    entries: [
      {
        type: "entries",
        name: "Brittle Bones",
        entries: ["You are vulnerable to bludgeoning damage."],
      },
      {
        type: "entries",
        name: "Undead Nature",
        entries: [
          "You are immune to poison damage and {@condition exhaustion}, and you can't be {@condition poisoned}. You don't require air, food, drink, or sleep.",
        ],
      },
      {
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can't speak, but you can understand the languages you knew in life.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Tabaxi",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.SMALL, Size.MEDIUM],
    speed: {
      walk: 30,
      climb: true,
    },
    darkvision: 60,
    traitTags: ["Natural Weapon"],
    skillProficiencies: {
      perception: true,
      stealth: true,
    },

    entries: [
      {
        type: "entries",
        name: "Size",
        entries: [
          "You are Medium or Small. You choose the size when you select this race.",
        ],
      },
      {
        type: "entries",
        name: "Speed",
        entries: [
          "Your walking speed is 30 feet, and you have a climbing speed equal to your walking speed.",
        ],
      },
      {
        type: "entries",
        name: "Cat's Claws",
        entries: [
          "You can use your claws to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.",
        ],
      },
      {
        type: "entries",
        name: "Cat's Talent",
        entries: [
          "You have proficiency in the {@skill Perception} and {@skill Stealth} skills.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Feline Agility",
        entries: [
          "Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.",
        ],
      },
    ],
  },
  {
    name: "Thri-kreen",
    source: "AAG",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    creatureTypes: ["monstrosity"],
    size: [Size.SMALL, Size.MEDIUM],
    speed: 30,
    darkvision: 60,
    traitTags: ["Improved Resting", "Natural Armor"],
    entries: [
      {
        type: "entries",
        name: "Creature Type",
        entries: ["You are a Monstrosity."],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "You are Medium or Small. You choose the size when you select this race.",
        ],
      },
      {
        type: "entries",
        name: "Chameleon Carapace",
        entries: [
          "While you aren't wearing armor, your carapace gives you a base Armor Class of 13 + your Dexterity modifier.",
          "As an action, you can change the color of your carapace to match the color and texture of your surroundings, giving you advantage on Dexterity ({@skill Stealth}) checks made to {@action hide} in those surroundings.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of yourself as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Secondary Arms",
        entries: [
          "You have two slightly smaller secondary arms below your primary pair of arms. The secondary arms can manipulate an object, open or close a door or container, pick up or set down a Tiny object, or wield a weapon that has the light property.",
        ],
      },
      {
        type: "entries",
        name: "Sleepless",
        entries: [
          "You do not require sleep and can remain conscious during a long rest, though you must still refrain from strenuous activity to gain the benefit of the rest.",
        ],
      },
      {
        type: "entries",
        name: "Thri-kreen Telepathy",
        entries: [
          "Without the assistance of magic, you can't speak the non-thri-kreen languages you know. Instead you use telepathy to convey your thoughts. You have the magical ability to transmit your thoughts mentally to willing creatures within 120 feet of yourself. A contacted creature doesn't need to share a language with you to understand your thoughts, but it must be able to understand at least one language. Your telepathic link to a creature is broken if you and the creature move more than 120 feet apart, if either of you is {@condition incapacitated}, or if either of you mentally breaks the contact (no action required).",
        ],
      },
    ],
  },
  {
    name: "Tiefling",
    source: "PHB",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      charisma: 2,
      intelligence: 1,
    },
    age: {
      mature: 20,
      max: 100,
    },
    darkvision: 60,
    traitTags: ["Uncommon Race"],
    languageProficiencies: {
      common: true,
      infernal: true,
    },

    resist: [DamageType.FIRE],
    additionalSpells: [
      {
        innate: {
          "3": {
            daily: {
              "1": ["hellish rebuke#2"],
            },
          },
          "5": {
            daily: {
              "1": ["darkness"],
            },
          },
        },
        ability: "charisma",
        known: {
          "1": ["thaumaturgy#c"],
        },
      },
    ],
    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Tieflings mature at the same rate as humans but live a few years longer.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Tieflings are about the same size and build as humans. Your size is Medium.",
        ],
      },
      {
        name: "Darkvision",
        entries: [
          "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Hellish Resistance",
        entries: ["You have resistance to fire damage."],
        type: "entries",
      },
      {
        name: "Infernal Legacy",
        entries: [
          "You know the {@spell thaumaturgy} cantrip. Once you reach 3rd level, you can cast the {@spell hellish rebuke} spell as a 2nd-level spell with this trait; you regain the ability to cast it when you finish a long rest. Once you reach 5th level, you can also cast the {@spell darkness} spell once per day with this trait; you regain the ability to cast it when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common and Infernal."],
        type: "entries",
      },
    ],
  },
  {
    name: "Tortle",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.SMALL, Size.MEDIUM],
    speed: 30,
    traitTags: ["Natural Armor", "Natural Weapon"],
    skillProficiencies: {
      choose: {
        from: [
          "animal handling",
          "medicine",
          "nature",
          "perception",
          "stealth",
          "survival",
        ],
      },
    },

    entries: [
      {
        type: "entries",
        name: "Size",
        entries: [
          "You are Medium or Small. You choose the size when you select this race.",
        ],
      },
      {
        type: "entries",
        name: "Claws",
        entries: [
          "You have claws that you can use to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.",
        ],
      },
      {
        type: "entries",
        name: "Hold Breath",
        entries: ["You can hold your breath for up to 1 hour."],
      },
      {
        type: "entries",
        name: "Natural Armor",
        entries: [
          "Your shell provides you a base AC of 17 (your Dexterity modifier doesn't affect this number). You can't wear light, medium, or heavy armor, but if you are using a shield, you can apply the shield's bonus as normal.",
        ],
      },
      {
        type: "entries",
        name: "Nature's Intuition",
        entries: [
          "Thanks to your mystical connection to nature, you gain proficiency with one of the following skills of your choice: {@skill Animal Handling}, {@skill Medicine}, {@skill Nature}, {@skill Perception}, {@skill Stealth}, or {@skill Survival}.",
        ],
      },
      {
        type: "entries",
        name: "Shell Defense",
        entries: [
          "You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to your AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are {@condition prone}, your speed is 0 and can't increase, you have disadvantage on Dexterity saving throws, you can't take reactions, and the only action you can take is a bonus action to emerge from your shell.",
        ],
      },
    ],
  },
  {
    name: "Triton",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.MEDIUM],
    speed: {
      walk: 30,
      swim: true,
    },
    darkvision: 60,
    traitTags: ["Amphibious"],
    resist: [DamageType.COLD],
    additionalSpells: [
      {
        innate: {
          "1": {
            daily: {
              "1": ["fog cloud"],
            },
          },
          "3": {
            daily: {
              "1": ["gust of wind"],
            },
          },
          "5": {
            daily: {
              "1": ["water walk"],
            },
          },
        },
        ability: {
          choose: ["intelligence", "wisdom", "charisma"],
        },
      },
    ],
    entries: [
      {
        type: "entries",
        name: "Speed",
        entries: [
          "Your walking speed is 30 feet, and you have a swimming speed equal to your walking speed.",
        ],
      },
      {
        type: "entries",
        name: "Amphibious",
        entries: ["You can breathe air and water."],
      },
      {
        type: "entries",
        name: "Control Air and Water",
        entries: [
          "You can cast {@spell fog cloud} with this trait. Starting at 3rd level, you can cast the {@spell gust of wind} spell with this trait. Starting at 5th level, you can also cast the {@spell water walk} spell with it. Once you cast any of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have of the appropriate level.",
          "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Emissary of the Sea",
        entries: [
          "You can communicate simple ideas to any Beast, Elemental, or Monstrosity that has a swimming speed. It can understand your words, though you have no special ability to understand it in return.",
        ],
      },
      {
        type: "entries",
        name: "Guardian of the Depths",
        entries: [
          "Adapted to the frigid ocean depths, you have resistance to cold damage.",
        ],
      },
    ],
  },
  {
    name: "Troglodyte",
    source: "DMG",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      strength: 2,
      constitution: 2,
      intelligence: -4,
      charisma: -4,
    },

    darkvision: 60,
    traitTags: ["Natural Armor", "NPC Race", "Sunlight Sensitivity"],
    languageProficiencies: {
      other: true,
    },
    entries: [
      {
        name: "Chameleon Skin",
        type: "entries",
        entries: [
          "You have advantage on Dexterity ({@skill Stealth}) checks made to hide.",
        ],
      },
      {
        name: "Stench",
        type: "entries",
        entries: [
          "Any creature other than a troglodyte that starts its turn within 5 ft. of you must succeed on a DC 12 Constitution saving throw or be {@condition poisoned} until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of all troglodytes for 1 hour.",
        ],
      },
      {
        name: "Sunlight Sensitivity",
        type: "entries",
        entries: [
          "While in sunlight, you have disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight.",
        ],
      },
      {
        name: "Natural Armor",
        entries: ["Your thick hide grants you a +1 bonus to Armor Class."],
        type: "entries",
      },
      {
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Troglodyte."],
        type: "entries",
      },
    ],
  },
  {
    name: "Vampire (Ixalan)",
    source: "PSX",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      charisma: 2,
      wisdom: 1,
    },

    darkvision: 60,
    languageProficiencies: {
      common: true,
      other: true,
    },

    resist: [DamageType.NECROTIC],
    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Vampires don't mature and age in the same way that other races do.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Vampires might not have an innate tendency toward evil, but many of them end up there. Evil or not, their strict hierarchies incline them toward a lawful alignment.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Vampires are the same size and build as humans. Your size is Medium.",
        ],
      },
      {
        type: "entries",
        name: "Bloodthirst",
        entries: [
          "You can drain blood and life energy from a willing creature, or one that is {@condition grappled} by you, {@condition incapacitated}, or {@condition restrained}. Make a melee attack against the target. If you hit, you deal 1 piercing damage and {@dice 1d6} necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and you regain hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces it's hit point maximum to 0.",
        ],
      },
      {
        type: "entries",
        name: "Feast of Blood",
        entries: [
          "When you drain blood with your Bloodthirst ability, you experience a surge of vitality. Your speed increases by 10 feet, and you gain advantage on Strength and Dexterity checks and saving throws for 1 minute.",
        ],
      },
      {
        type: "entries",
        name: "Vampiric Resistance",
        entries: ["You have resistance to necrotic damage."],
      },
      {
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common (if it exists in your campaign) and Vampire.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Vampire (Zendikar)",
    source: "PSZ",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      intelligence: 1,
      charisma: 2,
    },

    darkvision: 60,
    languageProficiencies: {
      common: true,
      other: true,
    },

    resist: [DamageType.NECROTIC],
    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Vampires don't mature and age in the same way that other races do. Every living vampire is either a bloodchief, infected by Ulamog's influence in the distant reaches of history, or was spawned by a bloodchief from a living human. Most vampires are thus very old, but few have any memory of their earliest years.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Vampires have no innate tendency toward evil, but consuming the life energy of other creatures often pushes them to that end. Regardless of their moral bent, the strict hierarchies of their bloodchiefs inclines them toward a lawful alignment.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Vampires are about the same size and build as humans. Your size is Medium.",
        ],
      },
      {
        name: "Blood Thirst",
        entries: [
          "You can drain blood and life energy from a willing creature, or one that is {@condition grappled} by you, {@condition incapacitated}, or {@condition restrained}. Make a melee attack against the target. If you hit, you deal 1 piercing damage and {@dice 1d6} necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and you regain hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid killed in this way becomes a {@creature zombie||null}.",
        ],
        type: "entries",
      },
      {
        name: "Darkvision",
        entries: [
          "Thanks to your heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: ["You can speak, read, and write Common and Vampire."],
        type: "entries",
      },
      {
        name: "Vampiric Resistance",
        entries: ["You have resistance to necrotic damage."],
        type: "entries",
      },
    ],
  },
  {
    name: "Vedalken",
    source: "GGR",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      intelligence: 2,
      wisdom: 1,
    },

    age: {
      mature: 40,
      max: 500,
    },
    traitTags: ["Skill Bonus Dice", "Tool Bonus Dice"],
    skillProficiencies: {
      choose: {
        from: [
          "arcana",
          "history",
          "investigation",
          "medicine",
          "performance",
          "sleight of hand",
        ],
      },
    },

    languageProficiencies: {
      common: true,
      other: true,
      anyStandard: 1,
    },

    toolProficiencies: {
      any: 1,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Vedalken mature slower than humans do, reaching maturity around age 40. Their life span is typically 350 years, with some living to the age of 500.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: ["Vedalken are usually lawful and non-evil."],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Tall and slender, Vedalken stand 6 to 6½ feet tall on average and usually weigh less than 200 pounds. Your size is Medium.",
        ],
      },
      {
        type: "entries",
        name: "Vedalken Dispassion",
        entries: [
          "You have advantage on all Intelligence, Wisdom, and Charisma saving throws.",
        ],
      },
      {
        name: "Tireless Precision",
        entries: [
          "You are proficient in one of the following skills of your choice: {@skill Arcana}, {@skill History}, {@skill Investigation}, {@skill Medicine}, {@skill Performance}, or {@skill Sleight of Hand}. You are also proficient with one {@book tool|phb|5|tools} of your choice.",
          "Whenever you make an ability check with the chosen skill or tool, roll a {@dice d4} and add the number rolled to the check's total.",
        ],
        type: "entries",
      },
      {
        type: "entries",
        name: "Partially Amphibious",
        entries: [
          "By absorbing oxygen through your skin, you can breathe underwater for up to 1 hour. Once you've reached that limit, you can't use this trait again until you finish a long rest.",
        ],
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common, Vedalken, and one other language of your choice.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Vedalken",
    source: "PSK",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      intelligence: 2,
      wisdom: 1,
    },

    age: {
      mature: 40,
      max: 500,
    },
    languageProficiencies: {
      common: true,
      other: true,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Vedalken mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: ["Vedalken are most often lawful and rarely evil."],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Vedalken are taller than humans but more slender. They average 6 to 6½ feet tall, but usually weigh less than 200 pounds. Your size is Medium.",
        ],
      },
      {
        name: "Languages",
        entries: [
          "You can speak, read, and write Common and Vedalken. The Vedalken language is renowned for its technical treatises and its catalogs of knowledge about the natural world and the aether that pervades it.",
        ],
        type: "entries",
      },
      {
        name: "Vedalken Cunning",
        entries: [
          "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
        ],
        type: "entries",
      },
      {
        name: "Aether Lore",
        entries: [
          "Whenever you make an Intelligence ({@skill History}) check related to magic items or aether-powered technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Verdan",
    source: "AI",
    size: [Size.SMALL, Size.MEDIUM],
    speed: 30,
    ability: {
      constitution: 1,
      charisma: 2,
    },

    age: {
      mature: 24,
      max: 200,
    },
    skillProficiencies: {
      persuasion: true,
    },

    languageProficiencies: {
      common: true,
      goblin: true,
      anyStandard: 1,
    },

    entries: [
      {
        name: "Age",
        type: "entries",
        entries: [
          "Verdan reach adulthood at around the age of 24, and it is thought that they might live to nearly 200 years old. However, because no verdan has died of old age since the race's initial creation, their upper age limits remain subject to speculation.",
        ],
      },
      {
        name: "Alignment",
        type: "entries",
        entries: [
          "Verdan are generally good, although their absence of racial identity and shared history can sometimes see individual verdan become untethered from any moral or ethical framework.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Verdan start out similar in size to the goblins they were created from, ranging from 3 to 4 feet in height. But at some point after reaching maturity, each verdan undergoes a sudden growth spurt of 2 feet or more. At 1st level, you are a Small creature. When you reach 5th level, you become a Medium creature.",
        ],
      },
      {
        name: "Black Blood Healing",
        entries: [
          "The black blood that is a sign of your people's connection to That-Which-Endures boosts your natural healing. When you roll a 1 or 2 on any Hit Die you spend at the end of a short rest, you can reroll the die and must use the new roll.",
        ],
        type: "entries",
      },
      {
        name: "Limited Telepathy",
        entries: [
          "You can telepathically speak to any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathy, but it must be able to understand at least one language. This process of communication is slow and limited, allowing you to transmit and receive only simple ideas and straightforward concepts.",
        ],
        type: "entries",
      },
      {
        name: "Persuasive",
        entries: [
          "Your people's lack of history makes you trustworthy and humble. You have proficiency in the {@skill Persuasion} skill.",
        ],
        type: "entries",
      },
      {
        name: "Telepathic Insight",
        entries: [
          "Your mind's connection to the world around you strengthens your will. You have advantage on all Wisdom and Charisma saving throws.",
        ],
        type: "entries",
      },
      {
        name: "Language",
        entries: [
          "You speak, read, and write Common, Goblin, and one additional language of your choice. This language typically has some connection to one of the areas or cultures that has been part of your life.",
        ],
        type: "entries",
      },
    ],
  },
  {
    name: "Viashino",
    source: "UARacesOfRavnica",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      dexterity: 2,
      strength: 1,
    },
    age: {
      mature: 13,
      max: 60,
    },
    traitTags: ["Natural Weapon"],
    skillProficiencies: {
      choose: {
        from: ["acrobatics", "stealth"],
      },
    },
    languageProficiencies: {
      common: true,
      draconic: true,
    },
    entries: [
      {
        type: "entries",
        name: "Age",
        entries: [
          "Viashino mature quickly, reaching adulthood in their early teens. They live violent lives and rarely die of old age, but they would rarely live past 60 anyway.",
        ],
      },
      {
        type: "entries",
        name: "Alignment",
        entries: [
          "Viashino strongly tend toward chaotic alignments. They have no particular inclination toward good or evil.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: [
          "Viashino are about as tall as humans, but they have lithe, wiry frames. Your size is Medium.",
        ],
      },
      {
        type: "entries",
        name: "Bite",
        entries: [
          "Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to {@damage 1d4} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
        ],
      },
      {
        type: "entries",
        name: "Lashing Tail",
        entries: [
          "Your semi-prehensile tail is tipped with a bony blade. Immediately after a creature within 5 feet of you deals damage to you with a melee attack, you can use your reaction to make an unarmed strike against that creature with your tail. If you hit, you deal slashing damage equal to {@damage 1d4} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
        ],
      },
      {
        type: "entries",
        name: "Wiry Frame",
        entries: [
          "You gain proficiency in the {@skill Acrobatics} or the {@skill Stealth} skill (your choice).",
        ],
      },
      {
        type: "entries",
        name: "Languages",
        entries: ["You can speak, read, and write Common and Draconic."],
      },
    ],
  },
  {
    name: "Warforged",
    source: "ERLW",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      constitution: 2,
      choose: [
        [
          {
            from: [
              "strength",
              "dexterity",
              "intelligence",
              "wisdom",
              "charisma",
            ],
            count: 1,
          },
        ],
      ],
    },
    age: {
      mature: 2,
      max: 30,
    },
    traitTags: ["Improved Resting", "Natural Armor"],
    skillProficiencies: {
      any: 1,
    },

    languageProficiencies: {
      common: true,
      anyStandard: 1,
    },

    toolProficiencies: {
      any: 1,
    },
    resist: [DamageType.POISON],
    conditionImmune: [Condition.DISEASE],
    entries: [
      {
        name: "Age",
        entries: [
          "A typical warforged is between two and thirty years old. The maximum warforged lifespan remains a mystery; so far, warforged have shown no signs of deterioration due to age. You are immune to magical aging effects.",
        ],
        type: "entries",
      },
      {
        type: "entries",
        name: "Alignment",
        entries: [
          "Most warforged take comfort in order and discipline, tending toward law and neutrality. But some have absorbed the morality, or lack thereof, of the beings with which they served.",
        ],
      },
      {
        type: "entries",
        name: "Size",
        entries: ["Your size is Medium."],
      },
      {
        type: "entries",
        name: "Constructed Resilience",
        entries: [
          "You were created to have remarkable fortitude, represented by the following benefits:",
          {
            type: "list",
            items: [
              "You have advantage on saving throws against being {@condition poisoned}, and you have resistance to poison damage.",
              "You don't need to eat, drink, or breathe.",
              "You are immune to disease.",
              "You don't need to sleep, and magic can't put you to sleep.",
            ],
          },
        ],
      },
      {
        type: "entries",
        name: "Sentry's Rest",
        entries: [
          "When you take a long rest, you must spend at least six hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn't render you {@condition unconscious}, and you can see and hear as normal.",
        ],
      },
      {
        type: "entries",
        name: "Integrated Protection",
        entries: [
          "Your body has built-in defensive layers, which can be enhanced with armor:",
          {
            type: "list",
            items: [
              "You gain a +1 bonus to Armor Class.",
              "You can don only armor with which you have proficiency. To don armor other than a shield, you must incorporate it into your body over the course of 1 hour, during which you remain in contact with the armor. To doff armor, you must spend 1 hour removing it. You can rest while donning or doffing armor in this way.",
              "While you live, the armor incorporated into your body can't be removed against your will.",
            ],
          },
        ],
      },
      {
        type: "entries",
        name: "Specialized Design",
        entries: [
          "You gain one skill proficiency and one tool proficiency of your choice.",
        ],
      },
      {
        type: "entries",
        name: "Languages",
        entries: [
          "You can speak, read, and write Common and one other language of your choice.",
        ],
      },
    ],
  },
  {
    name: "Yuan-Ti",
    source: "MPMM",
    ability: {
      choose: [
        [
          {
            from: "any",
            count: 2,
          },
          {
            from: "any",
            count: 1,
          },
        ],
        [
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
          {
            from: "any",
            count: 1,
          },
        ],
      ],
    },
    size: [Size.SMALL, Size.MEDIUM],
    speed: 30,
    darkvision: 60,
    traitTags: ["Magic Resistance"],
    resist: [DamageType.POISON],
    additionalSpells: [
      {
        innate: {
          "1": ["animal friendship"],
          "3": {
            daily: {
              "1": ["suggestion"],
            },
          },
        },
        ability: {
          choose: ["intelligence", "wisdom", "charisma"],
        },
        known: {
          "1": ["poison spray#c"],
        },
      },
    ],
    entries: [
      {
        type: "entries",
        name: "Size",
        entries: [
          "You are Medium or Small. You choose the size when you select this race.",
        ],
      },
      {
        type: "entries",
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
        ],
      },
      {
        type: "entries",
        name: "Magic Resistance",
        entries: ["You have advantage on saving throws against spells."],
      },
      {
        type: "entries",
        name: "Poison Resilience",
        entries: [
          "You have advantage on saving throws you make to avoid or end the {@condition poisoned} condition on yourself. You also have resistance to poison damage.",
        ],
      },
      {
        type: "entries",
        name: "Serpentine Spellcasting",
        entries: [
          "You know the {@spell poison spray} cantrip. You can cast {@spell animal friendship} an unlimited number of times with this trait, but you can target only snakes with it. Starting at 3rd level, you can also cast {@spell suggestion} with this trait. Once you cast it, you can't do so again until you finish a long rest. You can also cast it using any spell slots you have of 2nd level or higher.",
          "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
        ],
      },
    ],
  },
  {
    name: "Zombie",
    source: "DMG",
    size: [Size.MEDIUM],
    speed: 30,
    ability: {
      strength: 1,
      constitution: 2,
      intelligence: -6,
      wisdom: -4,
      charisma: -4,
    },
    darkvision: 60,
    traitTags: ["Improved Resting", "NPC Race"],
    immune: [DamageType.POISON],
    conditionImmune: [Condition.POISONED],
    entries: [
      {
        type: "entries",
        name: "Undead Fortitude",
        entries: [
          "If damage reduces you to 0 hit points, you must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, you drop to 1 hit point instead.",
        ],
      },
      {
        type: "entries",
        name: "Undead Nature",
        entries: [
          "You are immune to poison damage, and you can't be {@condition poisoned}. You don't require air, food, drink, or sleep.",
        ],
      },
      {
        name: "Darkvision",
        entries: [
          "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        ],
        type: "entries",
      },
      {
        name: "Languages",
        entries: [
          "You can't speak, but you can understand the languages you knew in life.",
        ],
        type: "entries",
      },
    ],
  },
];
