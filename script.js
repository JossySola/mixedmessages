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
        passive: [' refuel', ' passes', ' approaches', ' relocates', ' goes', ' vibrates', ' hides', ' flies', ' travels'],
        continuous: [' passing', ' approaching', ' going', ' vibrating', ' collapsing', ' emerging', ' flying', ' travelling'],
        actions: [' collides', ' smashes', ' affects', ' crashes'],
        causation: [' causing', ' making', ' generating', ' provoking', ' letting'],
        attack: [' fires', ' sends', ' attacks with', ' directs', ' targets']
    },
    location: [' in the', ' at the', ' near the', ' right into the', ' below the', ' inside the', ' by the', ' through the', ' among the', ' above the', ' besides the', ' in front the'],
    quantity: [' some', ' many', ' a few', ' a handful of'],
    weapons: [' missiles', ' rockets', ' rays', ' spicebombs', ' bunch of code', ' virus in an e-mail', ' bugs', ' #FatalError', ' lot of documentation', ' Codecademy Challenges'],
    adjectives: [' solid', ' pointy', ' infectious', ' dangerous', ' hard', ' damned', ' unexpected', ' sharp', ' powerful', ' confusing', ' enormous', ' massive'],
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
/* SECOND COMMIT DONE
    Adds continuous and action words
    Adds .continue and .action
*/