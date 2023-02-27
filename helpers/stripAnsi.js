const stripAnsi = (text)=>text.replace(/\x1b\[[0-9;]*m/g, "");

module.exports = stripAnsi;