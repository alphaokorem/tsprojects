#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import { knife, pistol, grenade, claw, bite, axe, club, wizardspell, } from "./functions.js";
let player_status = {
    health: 100,
    weapons: ["Knife: 12 dmg", "\n\t  Pistol: 30 dmg", "\n\t  Grenade: 50 dmg"],
    bandages: 1,
};
let goblins = 200;
let wolves = 100;
let trolls = 300;
function status() {
    console.log(chalk.green(`\n\t Status:\n Health: ${player_status.health}\n Weapons: ${player_status.weapons}\n Bandages: ${player_status.bandages}\n`));
}
console.log(chalk.red("Welcome Wanderer!! I am a wizard who will accompany you from now on."));
let player = await inquirer.prompt({
    name: "confirm",
    type: "confirm",
    message: chalk.red("Do you wish to start your journey?"),
});
if (player.confirm) {
    console.log(chalk.red("Well then, let's begin."));
    status();
    console.log(`Your journey from your tavern, back to your village starts at dawn the next day.`);
    let player1 = await inquirer.prompt({
        name: "choice1",
        type: "list",
        message: "As you move through the forest you encounter a pack of wolves\nYou wish to: ",
        choices: ["Flee", "Fight"],
    });
    console.log("\n");
    if (player1.choice1 === "Fight") {
        for (wolves && player_status.health; wolves >= 0 && player_status.health >= 0; wolves && player_status.health) {
            let num = Math.floor(Math.random() * 10);
            console.log(chalk.magenta(`Enemy Health: ${wolves}`));
            if (num <= 2) {
                wolves = knife(wolves);
                console.log(chalk.magenta(`Enemy Health: ${wolves}`));
                if (wolves <= 0) {
                    console.log(chalk.cyan("Enemy is dead.\n"));
                    break;
                }
                player_status.health = claw(player_status.health);
                console.log(chalk.red(`Your Health: ${player_status.health}`));
                console.log("\n");
            }
            else if (num >= 3 && num <= 6) {
                wolves = pistol(wolves);
                console.log(chalk.magenta(`Enemy Health: ${wolves}`));
                if (wolves <= 0) {
                    console.log(chalk.cyan("Enemy is dead.\n"));
                    break;
                }
                console.log(chalk.magenta(`Enemy attacks but you dodge.`));
                console.log(chalk.red(`Your Health: ${player_status.health}`));
                console.log("\n");
            }
            else if (num >= 7) {
                wolves = grenade(wolves);
                console.log(chalk.magenta(`Enemy Health: ${wolves}`));
                if (wolves <= 0) {
                    console.log(chalk.cyan("Enemy is dead.\n"));
                    break;
                }
                player_status.health = bite(player_status.health);
                console.log(chalk.red(`Your Health: ${player_status.health}`));
                console.log("\n");
            }
        }
    }
    else if (player1.choice1 === "Flee") {
        let num = Math.floor(Math.random() * 10);
        // random number generates to see if you escape or not
        if (num <= 3) {
            console.log("You escaped successfully.");
        }
        else if (num >= 4) {
            console.log(`You try to sneak away quitely, but one of the wolves notice you and now you are surrounded.`);
            let player2 = await inquirer.prompt({
                name: "fight1",
                message: "You wish to: ",
                type: "list",
                choices: ["Engage", "Do nothing"],
            });
            console.log("\n");
            if (player2.fight1 === "Engage") {
                for (wolves && player_status.health; wolves >= 0 && player_status.health >= 0; wolves && player_status.health) {
                    let num = Math.floor(Math.random() * 10);
                    console.log(chalk.magenta(`Enemy Health: ${wolves}`));
                    if (num <= 2) {
                        wolves = knife(wolves);
                        console.log(chalk.magenta(`Enemy Health: ${wolves}`));
                        if (wolves <= 0) {
                            console.log(chalk.cyan("Enemy is dead.\n"));
                            break;
                        }
                        player_status.health = claw(player_status.health);
                        console.log(chalk.red(`Your Health: ${player_status.health}`));
                        console.log("\n");
                    }
                    else if (num >= 3 && num <= 6) {
                        wolves = pistol(wolves);
                        console.log(chalk.magenta(`Enemy Health: ${wolves}`));
                        if (wolves <= 0) {
                            console.log(chalk.cyan("Enemy is dead.\n"));
                            break;
                        }
                        console.log(chalk.magenta(`Enemy attacks but you dodge.`));
                        console.log(chalk.red(`Your Health: ${player_status.health}`));
                        console.log("\n");
                    }
                    else if (num >= 7) {
                        wolves = grenade(wolves);
                        console.log(chalk.magenta(`Enemy Health: ${wolves}`));
                        if (wolves <= 0) {
                            console.log(chalk.cyan("Enemy is dead.\n"));
                            break;
                        }
                        player_status.health = bite(player_status.health);
                        console.log(chalk.red(`Your Health: ${player_status.health}`));
                        console.log("\n");
                    }
                }
            }
            else if (player2.fight1 === "Do nothing") {
                console.log("The pack of wolves go home with full bellies.");
                console.log(chalk.bgRed("You died!!"));
                console.log(chalk.red("What the hell were you aiming for? A peace treaty with a bunch of dogs? You got what you asked for, you dolt."));
                player_status.health = 0;
                process.exit(0);
            }
        }
    }
    console.log(chalk.red("Oh good riddance!! Let us continue..."));
    console.log("You continue through the woods...\n\n");
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("A few days pass by...");
        }, 6000);
    }).then((resolve) => {
        console.log(resolve);
    });
    console.log("While moving through the forest, you stumble upon a cave.\nYou look at the sun and it was almost dusk.");
    let player3 = await inquirer.prompt({
        name: "choice2",
        type: "list",
        message: chalk.red("Would you like to camp or move ahead?"),
        choices: ["Camp", "Move ahead"],
    });
    if (player3.choice2 === "Camp") {
        console.log(chalk.red("Alright then, I'll set up the bonfire."));
        status();
        console.log("You set camp and the wizard starts making a broth.");
        player3 = await inquirer.prompt({
            name: "broth",
            type: "confirm",
            message: "The wizard offers you some. Do you accept?",
        });
        if (player3.broth) {
            player_status.health = player_status.health + 30;
            console.log(chalk.cyan(`Your Health: +${30}`));
            status();
        }
        console.log("You spend some time chatting and trading past experiences when you suddenly hear a sharp screeching sound.");
        console.log("You ready yourself for danger and sure enough, as you move out of the cave, you find yourself surrounded by a group of vicious goblins.");
    }
    else if (player3.choice2 === "Move ahead") {
        console.log(chalk.red("Alright then! Onward we go!"));
        status();
        console.log("While you keep moving through the forest, darkness sets in and you find yourselves a little lost in the thick woods.");
        console.log("You sense danger in every shadow and ready yourself for a fight. Sure enough, you find yourself surrounded by a group of vile goblins.");
    }
    console.log("You engage in battle.");
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("");
        }, 4000);
    }).then((resolve) => {
        console.log(resolve);
    });
    for (goblins && player_status.health; goblins >= 0 && player_status.health >= 0; goblins && player_status.health) {
        let num = Math.floor(Math.random() * 10);
        console.log(chalk.magenta(`Goblins' Health: ${goblins}`));
        if (num <= 2) {
            goblins = knife(goblins);
            console.log(chalk.magenta(`Goblins' Health: ${goblins}`));
            if (goblins <= 0) {
                console.log(chalk.cyan("All Goblins are dead."));
                status();
                break;
            }
            player_status.health = claw(player_status.health);
            console.log(chalk.red(`Your Health: ${player_status.health}`));
            if (player_status.health <= 30 && player_status.bandages == 1) {
                let bandages = await inquirer.prompt({
                    name: "use",
                    type: "confirm",
                    message: `There is only ${player_status.bandages} bandage. Do you wish to  use it?`,
                });
                if (bandages.use) {
                    player_status.health = player_status.health + 50;
                    player_status.bandages--;
                    await new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve("");
                        }, 2000);
                    }).then((resolve) => {
                        console.log(resolve);
                    });
                    console.log(chalk.cyan(`Your Health: +${50}`));
                }
                status();
            }
            if (player_status.health <= 0) {
                console.log(chalk.bgRed("You died!!"));
                break;
            }
            console.log("\n");
        }
        else if (num >= 3 && num <= 6) {
            goblins = pistol(goblins);
            console.log(chalk.magenta(`Goblins' Health: ${goblins}`));
            if (goblins <= 0) {
                console.log(chalk.cyan("All Goblins are dead."));
                status();
                break;
            }
            player_status.health = axe(player_status.health);
            console.log(chalk.red(`Your Health: ${player_status.health}`));
            if (player_status.health <= 30 && player_status.bandages == 1) {
                let bandages = await inquirer.prompt({
                    name: "use",
                    type: "confirm",
                    message: `There is only ${player_status.bandages} bandage. Do you wish to  use it?`,
                });
                if (bandages.use) {
                    player_status.health = player_status.health + 50;
                    player_status.bandages--;
                    await new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve("");
                        }, 2000);
                    }).then((resolve) => {
                        console.log(resolve);
                    });
                    console.log(chalk.cyan(`Your Health: +${50}`));
                }
                status();
            }
            if (player_status.health <= 0) {
                console.log(chalk.bgRed("You died!!"));
                break;
            }
            console.log("\n");
        }
        else if (num >= 7) {
            goblins = grenade(goblins);
            console.log(chalk.magenta(`Goblins' Health: ${goblins}`));
            if (goblins <= 0) {
                console.log(chalk.cyan("All Goblins are dead."));
                status();
                break;
            }
            player_status.health = bite(player_status.health);
            console.log(chalk.red(`Your Health: ${player_status.health}`));
            if (player_status.health <= 30 && player_status.bandages == 1) {
                let bandages = await inquirer.prompt({
                    name: "use",
                    type: "confirm",
                    message: `There is only ${player_status.bandages} bandage. Do you wish to  use it?`,
                });
                if (bandages.use) {
                    player_status.health = player_status.health + 50;
                    player_status.bandages--;
                    await new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve("");
                        }, 2000);
                    }).then((resolve) => {
                        console.log(resolve);
                    });
                    console.log(chalk.cyan(`Your Health: +${50}`));
                }
                status();
            }
            if (player_status.health <= 0) {
                console.log(chalk.bgRed("You died!!"));
                break;
            }
            console.log("\n");
        }
    }
    if (player_status.health > 0) {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Dawn breaks. You look around and see all goblins are now dead.\nYou feel very tired and exhausted. So you decide to rest a while.");
            });
        }).then((resolve) => {
            console.log(resolve);
        });
        player_status.health += 20;
        console.log(chalk.cyan(`Your Health: +${20}`));
        status();
        console.log("You wake up to find yourself still in pain.");
        console.log(chalk.red("Come on lad, we must keep moving if we are to survive."));
        console.log("Moving through the forest, you end up in a small tribal village.\nSeeing your state, the people usher you to their herbalist.\nHere, you spend a few days recovering your health.");
        player_status.health += 100;
        console.log(chalk.cyan(`Your Health + 100`));
        status();
        console.log(chalk.red("Haha! You look well. May we continue the journey?"));
        let player4 = await inquirer.prompt({
            name: "leave",
            message: "Should we be on our way now?",
            type: "confirm",
        });
        if (player4.leave) {
            console.log(chalk.red("Good lad, let us hurry then."));
            console.log("You pack your belongings and rations.\nThe herbalist provides you with fresh bandages and you thank all the villagers for their hospitality.");
            player_status.bandages++;
            status();
            console.log("When you reached a few miles ahead, you turn around to see the a huge cloud of smoke rising from the direction of the village.");
            let player5 = await inquirer.prompt({
                name: "village",
                type: "confirm",
                message: chalk.red("Oh no! Looks like the vilage is in trouble. Let us go and help..."),
            });
            if (player5.village) {
                console.log("You run back to find the village in turmoil.\nYou rush to the village borders to see trolls invading the village. The men were trying to hold them back by spears but failing miserably.");
            }
            else {
                console.log(chalk.red("WHAT? AFTER THEY TOOK YOU IN WHEN YOU WERE BLEEDING ALONE IN THE FOREST? HOW CAN YOU SAY THIS? ARE YOU EVEN HUMAN?\nPREPARE YOURSELF FOR MY WRATH...."));
                wizardspell();
                process.exit(0);
            }
        }
        else {
            console.log(chalk.red("Alright then, take your time."));
            console.log("As you spend the time helping the villagers in their daily chores, the village warning bell starts to ring.\nYou rush to the village borders to see trolls invading the village. The men were trying to hold them back by spears but failing miserably.");
        }
        let player6 = await inquirer.prompt({
            name: "trolls",
            message: "Upon seeing the massive trolls, you decide to: ",
            type: "list",
            choices: ["Escape", "Defend"],
        });
        if (player6.trolls === "Escape") {
            console.log(chalk.red("Wait!! Where are you going??\n"));
            await new Promise((reslove, reject) => {
                setTimeout(() => {
                    reslove(chalk.red("ESCAPING??"));
                }, 5000);
            }).then((resolve) => {
                console.log(resolve);
            });
            console.log(chalk.red("have you already forgotten the hospitality of the villagers? you truly have no shame...\nforget about the trolls. your death will come by my hands...".toUpperCase()));
            wizardspell();
        }
        else if (player6.trolls === "Defend") {
            for (trolls && player_status.health; trolls >= 0 && player_status.health >= 0; trolls && player_status.health) {
                let num = Math.floor(Math.random() * 10);
                console.log(chalk.magenta(`Trolls' Health: ${trolls}`));
                if (num <= 2) {
                    trolls = knife(trolls);
                    console.log(chalk.magenta(`Trolls' Health: ${trolls}`));
                    if (trolls <= 0) {
                        console.log(chalk.cyan("All Trolls are dead."));
                        status();
                        break;
                    }
                    player_status.health = club(player_status.health);
                    console.log(chalk.red(`Your Health: ${player_status.health}`));
                    if (player_status.health <= 30 && player_status.bandages >= 1) {
                        let bandages = await inquirer.prompt({
                            name: "use",
                            type: "confirm",
                            message: `${player_status.bandages} bandages left. Do you wish to use?`,
                        });
                        if (bandages.use) {
                            player_status.health = player_status.health + 50;
                            player_status.bandages--;
                            await new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    resolve("");
                                }, 2000);
                            }).then((resolve) => {
                                console.log(resolve);
                            });
                            console.log(chalk.cyan(`Your Health +${50}`));
                        }
                        status();
                    }
                    if (player_status.health <= 0) {
                        console.log(chalk.bgRed("You died!!"));
                        break;
                    }
                    console.log("\n");
                }
                else if (num >= 3 && num <= 6) {
                    trolls = pistol(trolls);
                    console.log(chalk.magenta(`Trolls' Health: ${trolls}`));
                    if (trolls <= 0) {
                        console.log(chalk.cyan("All Trolls are dead."));
                        status();
                        break;
                    }
                    player_status.health = axe(player_status.health);
                    console.log(chalk.red(`Your Health: ${player_status.health}`));
                    if (player_status.health <= 30 && player_status.bandages >= 1) {
                        let bandages = await inquirer.prompt({
                            name: "use",
                            type: "confirm",
                            message: `${player_status.bandages} bandages left. Do you wish to use?`,
                        });
                        if (bandages.use) {
                            player_status.health = player_status.health + 50;
                            player_status.bandages--;
                            await new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    resolve("");
                                }, 2000);
                            }).then((resolve) => {
                                console.log(resolve);
                            });
                            console.log(chalk.cyan(`Your Health: +${50}`));
                        }
                        status();
                    }
                    if (player_status.health <= 0) {
                        console.log(chalk.bgRed("You died!!"));
                        break;
                    }
                    console.log("\n");
                }
                else if (num >= 7) {
                    trolls = grenade(trolls);
                    console.log(chalk.magenta(`Trolls' Health: ${trolls}`));
                    if (trolls <= 0) {
                        console.log(chalk.cyan("All Trolls are dead."));
                        status();
                        break;
                    }
                    player_status.health = bite(player_status.health);
                    console.log(chalk.red(`Your Health: ${player_status.health}`));
                    if (player_status.health <= 30 && player_status.bandages >= 1) {
                        let bandages = await inquirer.prompt({
                            name: "use",
                            type: "confirm",
                            message: `${player_status.bandages} bandages left. Do you wish to use?`,
                        });
                        if (bandages.use) {
                            player_status.health = player_status.health + 50;
                            player_status.bandages--;
                            await new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    resolve("");
                                }, 2000);
                            }).then((resolve) => {
                                console.log(resolve);
                            });
                            console.log(chalk.cyan(`Your Health: +${50}`));
                        }
                        status();
                    }
                    if (player_status.health <= 0) {
                        console.log(chalk.bgRed("You died!!"));
                        break;
                    }
                    console.log("\n");
                }
            }
            if (player_status.health > 0) {
                console.log(chalk.red("Ah! We survived. You killed most of the strolls and the rest of them scrambled.\nHey, are you alri...?"));
                console.log("You woke up and the wizard told you that you had passed out soon after the trolls escaped.");
                console.log(chalk.red("Had me worried. You've been passed out for three days."));
                console.log("You recover a day later and the bid the villagers farewell.");
                console.log("After another day of travelling, you reach your destination\nBack to your village, home and your wife.");
                console.log(chalk.bgWhite(chalk.black("\n\n\n\t\t\t\tHappy Ending")));
            }
        }
    }
}
else if (!player.confirm) {
    console.log(chalk.red("Ahh well! I'll just wait for another traveller then.\nFarewell!"));
}
