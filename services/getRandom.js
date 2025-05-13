export function getRandom(from, to, floor = true) {
    const rand = Math.random() * to + from;
    if (!floor) return rand;
    return Math.floor(rand);
}
