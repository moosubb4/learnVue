new Vue({
    el: "#app",
    data: {
        monsterData: { health: 100 },
        youData: { health: 100 },
        toggleStart: false,
        battleLog: [],
    },
    methods: {
        abandon: function () {
            this.toggleStart = false;
            this.monsterData.health = 100;
            this.youData.health = 100;
        },
        fight: function (isUlti) {
            this.monsterData.health -= this.randomDamage(isUlti);
            this.youData.health -= this.randomDamage(isUlti);
            battleLog.push({
                monster: this.monsterData.health,
                you: this.youData.health
            });
            console.log(battleLog);

        },
        start: function () {
            this.toggleStart = true
        },
        randomDamage(isUlti) {
            return Math.floor(Math.random() * isUlti ? 50 : 10) + 1;
        }
    }
})