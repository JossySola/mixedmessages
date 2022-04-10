const space = {
    objects: ['asteroid', 'star', 'comet', 'planet', 'meteoroids', 'Nebulae'],
    effects: [' an explosion', ' a laseration', ' damage', ' an infinite loop', ' it run out of memory', ' a shutdown', ' a gas cloud', ' a scene', ' drama'],
    zones: [' Meteor Belt', ' Cloud Belt', ' Matrix Constellation', ' Star Cluster', ' Time Out Galaxy', ' Let Me Refuel Galaxy', ' sucking Black Hole'],
    spaceships: [{name: ' Codecademyzor', structure: [' panels', ' tank', ' nose cone', ' propulsion system', ' eleveons', ' engines', ' flight deck', ' wings', ' payload doors']}, 
                 {name: ' Codenizer', structure: [' panels', ' tank', ' nose cone', ' propulsion system', ' eleveons', ' engines', ' flight deck', ' wings', ' payload doors']}],
    /*
    **************************************
    */
   get object() {
       const len = this.objects.length -1;
       let obj = this.objects[Math.floor(Math.random()*len)];
       return obj;
   },
   get effect() {
        const len = this.effects.length -1;
        let eff = this.effects[Math.floor(Math.random()*len)];
        return eff;
   },
   get zone() {
        const len = this.zones.length -1;
        let zone = this.zones[Math.floor(Math.random()*len)];
        return zone;
   },
   get spaceshipName() {
        let spaceship = this.spaceships[Math.round(Math.random())].name;
        return spaceship;
   },
   get spaceshipPart() {
       // In this case the different objects for both spaceships is pointless because both have the same structure list
       let part = this.spaceships[0].structure[Math.floor(Math.random()*8)];
       return part;
   }
};

const words = {
    starters: ['The', 'A'],
    verbs: {
        passive: [' refuel', ' passes', ' approaches', ' relocates', ' goes', ' vibrates', ' hides', ' flies'],
        causation: [' causing', ' making', ' generating', ' provoking', ' letting'],
        attack: [' fires', ' sends', ' attacks with', ' directs', ' targets']
    },
    location: [' in the', ' at the', ' near the', ' right into the', ' below the', ' inside the', ' by'],
    quantity: [' some', ' many', ' few', ' handful'],
    weapons: [' missile', ' rocket', ' spicebomb', ' bunch of code', ' virus in an e-mail', ' bug', ' #FatalError', ' lot of documentation', ' Codecademy Challenge'],
    adjectives: [' a solid', ' a pointy', ' an infectious', ' a dangerous', ' a hard', ' a damned', ' an unexpected', ' a sharp', ' a powerful', ' a confusing'],
    adding: [' while', ' and', ' when'],
    end: '...',
    /*
    **************************************
    */
    get start() {
        return this.starters[Math.round(Math.random())];
    },
    get attack() {
        let len = this.verbs.attack.length-1;
        return this.verbs.attack[Math.floor(Math.random()*len)];
    },
    get cause() {
        let len = this.verbs.causation.length-1;
        return this.verbs.causation[Math.floor(Math.random()*len)];
    },
    get passive() {
        let len = this.verbs.passive.length-1;
        return this.verbs.passive[Math.floor(Math.random()*len)];
    },
    get locate() {
        let len = this.location.length-1;
        return this.location[Math.floor(Math.random()*len)];
    },
    get quant() {
        let len = this.quantity.length-1;
        return this.quantity[Math.floor(Math.random()*len)];
    },
    get weapon() {
        let len = this.weapons.length-1;
        return this.weapons[Math.floor(Math.random()*len)];
    },
    get adjective() {
        let len = this.adjectives.length-1;
        return this.adjectives[Math.floor(Math.random()*len)];
    },
    get add() {
        let len = this.adding.length-1;
        return this.adding[Math.floor(Math.random()*len)];
    },
};

