import chalk from "chalk";
let player_status = {
    health: 100,
    weapons: ["Knife: 12 dmg", "\n\t  Pistol: 30 dmg", "\n\t  Grenade: 50 dmg"],
    bandages: 1,
};
export function claw(health) {
    let damage = 10;
    console.log(chalk.magenta("Enemy uses claws!!"));
    console.log(`You recieve damage: ${damage}`);
    let result = health - damage;
    return result;
}
export function bite(health) {
    let damage = 15;
    console.log(chalk.magenta("Enemy bites!!"));
    console.log(`You recieve damage: ${damage}`);
    let result = health - damage;
    return result;
}
export function axe(health) {
    let damage = 25;
    console.log(chalk.magenta("Enemy throws axe!!"));
    console.log(`You recieve damage: ${damage}`);
    let result = health - damage;
    return result;
}
export function club(health) {
    let damage = 30;
    console.log(chalk.magenta("Enemy swings club!!"));
    console.log(`You recieve damage: ${damage}`);
    let result = health - damage;
    return result;
}
export function knife(enemyHealth) {
    let damage = 12;
    console.log("You use knife.");
    console.log(`You gave damage: ${damage}`);
    let result = enemyHealth - damage;
    return result;
}
export function pistol(enemyHealth) {
    let damage = 30;
    console.log(`You use pistol.`);
    console.log(`You gave damage: ${damage}`);
    let result = enemyHealth - damage;
    return result;
}
export function grenade(enemyHealth) {
    let damage = 50;
    console.log("You use grenade.");
    console.log(`You gave damage: ${damage}`);
    let result = enemyHealth - damage;
    return result;
}
let wizard = 1000;
export function wizardspell() {
    wizard = grenade(wizard);
    console.log(chalk.magenta("Wizard's health: " + wizard));
    console.log(chalk.magenta("The wizard raises his staff and stomps it down on the ground."));
    console.log(chalk.bgRed("DEATH SPELL!!"));
    for (player_status.health; player_status.health >= 0; player_status.health -= 10) {
        console.log(chalk.red(`Your health: ${player_status.health}`));
        if (player_status.health == 0) {
            console.log(chalk.bgRed("You died!!"));
        }
    }
}
