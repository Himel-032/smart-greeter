const greetings = require('./greetings.json');
function getGreeting(name = 'User', options = {}) {
    const lang = options.lang || 'en';
    const emoji = options.emoji ? ' 👋' : '';
    const hour = new Date().getHours();
    let time = 'morning';
    if(hour >= 12 && hour < 17) time = 'afternoon';
    else if(hour >= 17 && hour < 21) time = 'evening';
    else if(hour >= 21 || hour < 5) time = 'night';
    const message = greetings[lang]?.[time] || greetings['en'][time];
    return `${message}, ${name}!${emoji}`;

}
MediaSourceHandle.exports = {getGreeting};