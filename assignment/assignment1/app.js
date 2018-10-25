new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gamesStart: false,
        turns: [],
    },
    methods: {
        startGames: function () {
            this.gamesStart = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            const damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player Attack! Monster for ' + damage
            });
            if (this.isWiner()) {
                return;
            }

            this.monsterAttack();
        },
        specialAttack: function () {
            const damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player 「Special」Attack! Monster for ' + damage
            });
            if (this.isWiner()) {
                return;
            }
            this.monsterAttack();

        },
        monsterAttack: function () {
            const damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.isWiner();

            this.turns.unshift({
                isPlayer: false,
                text: 'Monster Attack! Player for ' + damage
            });
        },
        playerAction: function () {

        },
        heal: function () {

            this.playerHealth <= 90
                ? this.playerHealth += 10
                : this.playerHealth = 100;

            this.turns.unshift({
                isPlayer: true,
                text: 'Player Healing Monster for 10'
            });

            this.monsterAttack();
        },
        run: function () {
            this.gamesStart = false;
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        isWiner: function () {
            if (this.monsterHealth <= 0) {
                confirm('You won! play again??')
                    ? this.startGames()
                    : this.gamesStart = false;
                return true;
            } else if (this.playerHealth <= 0) {
                confirm('You loses! play again??')
                    ? this.startGames()
                    : this.gamesStart = false;
                return true;
            }
            return false;
        }

    },
})



// new Vue({
//     el: "#app",
//     data: {
//         monsterData: { health: 100 },
//         youData: { health: 100 },
//         toggleStart: false,
//         battleLog: [],
//     },
//     methods: {
//         abandon: function () {
//             this.toggleStart = false;
//             this.monsterData.health = 100;
//             this.youData.health = 100;
//         },
//         fight: function (isUlti) {

//             this.youAttack();
//             this.monsterAttack();

//             battleLog.push({
//                 monster: this.monsterData.health,
//                 you: this.youData.health
//             });
//             console.log(battleLog);

//         },
//         youAttack: function (isUlti) {
//             this.monsterData.health -= this.randomDamage(isUlti);
//         },
//         monsterAttack: function (isUlti) {
//             this.youData.health -= this.randomDamage(isUlti);
//         },
//         start: function () {
//             this.toggleStart = true
//         },
//         randomDamage(isUlti) {
//             return Math.floor(Math.random() * isUlti ? 50 : 10) + 1;
//         }
//     }
// })