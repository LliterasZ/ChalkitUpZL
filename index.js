const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
const log = console.log;


log(chalk.bold.italic('Nemesis'));

log('Thro’ the' + chalk.green.bgGray(' ghoul-guarded gateways of slumber,'));
log(chalk.black.bgWhite.dim('Past the wan-moon’d abysses of night,'));
log('I have liv’d o’er my lives without number,');
log(chalk.blackBright('I have sounded all things with my sight;'));
log('And I struggle and shriek ere the ' + chalk.yellowBright.bgWhite.bold('daybreak') + ', being driven to madness with fright.');
log('');
log('I have whirl’d with the earth at the dawning,');
log('When the sky was a ' + chalk.black.bgYellowBright('vaporous flame;'));
log(chalk.white.bgMagenta('I have seen the dark universe yawning,'));
log(chalk.cyanBright('Where the black planets roll without aim;'));
log(chalk.blackBright.strikethrough('Where they roll in their horror unheeded, without knowledge or lustre or name.'));
chalkAnimation.radar('By H.P. Lovecraft', .5);
