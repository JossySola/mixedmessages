const space = {
    objects: ['asteroid', 'star', 'comet', 'satelite', 'reinforcement', 'ally', 'enemy', 'unidentified spaceship', 'unidentified planet', 'meteoroid', 'Nebulae', 'dwarf planet'],
    effects: ['an explosion', 'a laseration', 'critical damage', 'an infinite loop', 'a Ran Out of Memory error', 'a shutdown', 'a gas cloud', 'drama in the spacecrew', 'a crash', 'a Windows restart to install Updates (0/374)'],
    zones: ['Meteor Belt', 'Cloud Belt', 'Matrix Constellation', 'Star Cluster', 'Time Out Galaxy', 'Let Me Refuel Galaxy', 'Sucking Black Hole', 'Zion Constellation', 'Orion Constellation'],
    spaceships: [{name: 'Codecademyzor', structure: ['panels', 'tank', 'nose cone', 'propulsion system', 'eleveons', 'engines', 'flight deck', 'wings', 'payload doors']}, 
                 {name: 'Codenizer', structure: ['panels', 'tank', 'nose cone', 'propulsion system', 'eleveons', 'engines', 'flight deck', 'wings', 'payload doors']}],
    /*
    **************************************
    */
   get object() {
       const len = this.objects.length -1;
       let obj = this.objects[Math.round(Math.random()*len)];
       return obj;
   },
   get effect() {
        const len = this.effects.length -1;
        let eff = this.effects[Math.round(Math.random()*len)];
        return eff;
   },
   get zone() {
        const len = this.zones.length -1;
        let zone = this.zones[Math.round(Math.random()*len)];
        return zone;
   },
   get spaceshipName() {
        let spaceship = this.spaceships[Math.round(Math.random())].name;
        return spaceship;
   },
   get spaceshipPart() {
       // In this case the different objects for both spaceships is pointless because both have the same structure list
       let part = this.spaceships[0].structure[Math.round(Math.random()*8)];
       return part;
   }
};

const words = {
    starters: ['The', 'A'],
    verbs: {
        passive: ['passes', 'approaches', 'goes', 'moves', 'travels', 'advances', 'dodges'],
        continuous: ['passing', 'approaching', 'going to', 'collapsing', 'emerging from', 'flying', 'travelling', 'avoiding', 'escaping', 'entering'],
        actions: ['collides', 'smashes', 'crashes', 'explodes'],
        causation: ['causing', 'making', 'generating', 'provoking', 'letting in', 'giving'],
        attack: ['fires', 'sends', 'attacks with', 'directs', 'targets']
    },
    location: ['in the', 'near the', 'right into the', 'beneath the', 'inside the', 'by the', 'through the', 'on the', 'above the', 'beside the', 'in front of the'],
    quantity: ['a', 'one'],
    weapons: ['missile', 'rocket', 'radiation ray', 'spicebomb', 'bunch of code', 'virus attached to an e-mail', 'bug', '#FatalError', 'ton of MDN documentation', 'Codecademy Challenge'],
    adjectives: ['a solid', 'a damned', 'an encrypted', 'a dangerous', 'a hard', 'a pointy', 'an unexpected', 'a sharp', 'a powerful', 'a confusing', 'an enormous', 'a massive'],
    adding: ['while', 'when'],
    end: '...',
    /*
    **************************************
    */
    get start() {
        return this.starters[Math.round(Math.random())];
    },
    get attack() {
        let len = this.verbs.attack.length-1;
        return this.verbs.attack[Math.round(Math.random()*len)];
    },
    get cause() {
        let len = this.verbs.causation.length-1;
        return this.verbs.causation[Math.round(Math.random()*len)];
    },
    get passive() {
        let len = this.verbs.passive.length-1;
        return this.verbs.passive[Math.round(Math.random()*len)];
    },
    get continue() {
        let len = this.verbs.continuous.length-1;
        return this.verbs.continuous[Math.round(Math.random()*len)];
    },
    get action() {
        let len = this.verbs.actions.length-1;
        return this.verbs.actions[Math.round(Math.random()*len)];
    },
    get locate() {
        let len = this.location.length-1;
        return this.location[Math.round(Math.random()*len)];
    },
    get quant() {
        let len = this.quantity.length-1;
        return this.quantity[Math.round(Math.random()*len)];
    },
    get weapon() {
        let len = this.weapons.length-1;
        return this.weapons[Math.round(Math.random()*len)];
    },
    get adjective() {
        let len = this.adjectives.length-1;
        return this.adjectives[Math.round(Math.random()*len)];
    },
    get add() {
        let len = this.adding.length-1;
        return this.adding[Math.round(Math.random()*len)];
    },
};

/* FIRST COMMIT DONE */
/*
    SECOND COMMIT DONE
    Adds continuous and action words
    Adds .continue and .action
*/

function listenCommentator() {
    let msg = [];

    // Make choice
    const choice1 = words.start;
    if (choice1 === 'A') {
        
        // Make choice
        const choice2 = Math.round(Math.random());
        if (choice2 === 1) {
            const selectObj = space.object;
            if (selectObj[0] === 'a' || selectObj[0] === 'e' || selectObj[0] === 'i' || selectObj[0] === 'o' || selectObj[0] === 'u') {
                msg.push('An');
                msg.push(selectObj);
                msg.push(words.passive);
                msg.push(words.locate);
                msg.push(space.zone);
                msg.push(words.end);
                return msg.join(' ');
            } else {
                // Log choice
                msg.push(choice1);
                msg.push(selectObj);
                msg.push(words.passive);
                msg.push(words.locate);
                msg.push(space.zone);
                msg.push(words.end);
                return msg.join(' ');
            }
        } else if (choice2 === 0) {
            // Log choice
            msg.push(choice1);
            msg.push(words.weapon);
            msg.push(words.action);
            msg.push(words.locate);

            const choice3 = Math.round(Math.random());
            if (choice3 === 1) {
                // Log choice
                msg.push(space.zone);
                msg.push(words.end);
                return msg.join(' ');
            } else if (choice3 === 0) {
                // Log choice
                msg.push(space.spaceshipPart);
                msg.push('of')
                msg.push(space.spaceshipName);
                msg.push(words.cause);
                msg.push(space.effect);
                msg.push(words.end);
                return msg.join(' ');
            }
        }
    /* THIRD COMMIT DONE
        Adds the right 
    */
    } else if (choice1 === 'The') {
        // Log choice
        msg.push(choice1);
        msg.push(space.spaceshipName);
        const choice4 = Math.round(Math.random());
        if (choice4 === 1) {
            msg.push(words.passive);
            msg.push(words.locate);
            msg.push(words.weapon);
            msg.push(words.add);
            msg.push(words.continue);
            msg.push('the');
            msg.push(space.zone);
            msg.push(words.end);
            return msg.join(' ');
        } else if (choice4 === 0) {
            msg.push(words.attack);
            const choice5 = Math.round(Math.random());
            if (choice5 === 1) {
                msg.push(words.adjective);
            } else if (choice5 === 0) {
                msg.push("a");
            }
            msg.push(words.weapon);

            const choice6 = Math.round(Math.random());
            if (choice6 === 1) {
                msg.push(words.add);
                msg.push('a');
                msg.push(words.weapon);
                msg.push(words.action);
                msg.push('its');
                msg.push(space.spaceshipPart);
                msg.push(words.end);
                return msg.join(' ');
            } else if (choice6 === 0) {
                msg.push(words.cause);
                msg.push(space.effect);
                msg.push('to the enemy')
                msg.push(words.end);
                return msg.join(' ');
            }
        }
    }
}

console.log(listenCommentator())