class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.damage = damage;
        this.health -= damage;
    }
}

module.exports = Soldier;
