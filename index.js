function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  const newshout = string.toUpperCase()
  console.log(newshout)
}

function logWhisper(string) {
  const newwhisper = string.toLowerCase()
  console.log(newwhisper)
}

function sayHiToHeadphonedRoommate(string) {
  const me = string
  const meLow = string.toLowerCase()
  const meUpper = string.toUpperCase()
  if (me === meLow) return `I can't hear you!`
  else if (me === meUpper) return 'YES INDEED!'
  else if (me === "Let's have dinner together!") return 'I would love to!'
}
