const space = {
    objects: ['asteroid', 'star', 'comet', 'planet', 'meteoroid', 'Nebulae'],
    effects: ['an explosion', 'a laseration', 'damage', 'an infinite loop', 'it run out of memory', 'a shutdown', 'a gas cloud', 'a scene', 'drama'],
    zones: ['Meteor Belt', 'Cloud Belt', 'Matrix Constellation', 'Star Cluster', 'Time Out Galaxy', 'Let Me Refuel Galaxy', 'sucking Black Hole'],
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
        passive: ['refuels', 'passes', 'approaches', 'relocates', 'goes', 'vibrates', 'hides', 'flies', 'travels'],
        continuous: ['passing', 'approaching', 'going', 'vibrating', 'collapsing', 'emerging', 'flying', 'travelling'],
        actions: ['collides', 'smashes', 'affects', 'crashes'],
        causation: ['causing', 'making', 'generating', 'provoking', 'letting in'],
        attack: ['fires', 'sends', 'attacks with', 'directs', 'targets']
    },
    location: ['in the', 'at the', 'near the', 'right into the', 'below the', 'inside the', 'by the', 'through the', 'among the', 'above the', 'besides the', 'in front the'],
    quantity: [' some', ' many', ' a few', ' a handful of'],
    weapons: ['missile', 'rocket', 'ray', 'spicebomb', 'bunch of code', 'virus in an e-mail', 'bug', '#FatalError', 'lot of MDN documentation', 'Codecademy Challenge'],
    adjectives: ['solid', 'pointy', 'infectious', 'dangerous', 'hard', 'damned', 'unexpected', 'sharp', 'powerful', 'confusing', 'enormous', 'massive'],
    adding: ['while', 'and', 'when'],
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
        // Log choice
        msg.push(choice1);
        // Make choice
        const choice2 = Math.round(Math.random());
        if (choice2 === 1) {
            const selectObj = space.object;
            if (selectObj[0] === 'a' || selectObj[0] === 'e' || selectObj[0] === 'i' || selectObj[0] === 'o' || selectObj[0] === 'u') {
                msg.push('n ');
                msg.push(selectObj);
                msg.push(words.passive);
                msg.push(words.locate);
                msg.push(space.zone);
                msg.push(words.end);
                return msg.join(' ');
            } else {
                msg.push(selectObj);
                msg.push(words.passive);
                msg.push(words.locate);
                msg.push(space.zone);
                msg.push(words.end);
                return msg.join(' ');
            }
        } else if (choice2 === 0) {
            // Log choice
            msg.push(words.weapon);
            msg.push(words.action);
            msg.push(words.locate);

            const choice3 = Math.round(Math.random());;
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

    }
}

console.log(listenCommentator())