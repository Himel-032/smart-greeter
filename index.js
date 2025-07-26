const greetings = require('./greetings.json');
function getGreeting(nameOfOptions='', options = {}) {
    let name = '';
    if(typeof nameOfOptions === 'object')
        options = nameOfOptions;
    else
        name = nameOfOptions;
    const lang = options.lang || 'en';
    const emoji = options.emoji ? ' 👋' : '';
    const hour = new Date().getHours();
    let time = 'morning';
    if(hour >= 12 && hour < 17) time = 'afternoon';
    else if(hour >= 17 && hour < 21) time = 'evening';
    else if(hour >= 21 || hour < 5) time = 'night';
    const message = greetings[lang]?.[time] || greetings['en'][time];
    if(name === '')
        return `${message}!${emoji}`;
    else
        return `${message}, ${name}!${emoji}`;

}
module.exports = {getGreeting};