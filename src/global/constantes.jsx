const VALID_BLACK_KEYS = ['2','3','5','6','7','s', 'd', 'g', 'h', 'j'];
const VALID_WHITE_KEYS = ['q','w','e','r','t','y','u','z', 'x', 'c', 'v', 'b', 'n', 'm'];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];


const NOTES = [
    "do", "c2", "re", "d2", "mi", "fa", "f2", "sol",
    "g2", "la", "a2", "si",
];

const KEY_TO_NOTE = {
    q: 'do',
    2: 'c2',
    w: 're',
    3: 'd2',
    e: 'mi',
    r: 'fa',
    5: 'f2',
    t: 'sol',
    6: 'g2',
    y: 'la',
    7: 'a2',
    u: 'si',
};

const NOTE_TO_KEY = {
    do: 'q',
    'c2' : '2',
    re: 'w',
    'd2': '3',
    mi: 'e',
    fa: 'r',
    'f2': '5',
    sol: 't',
    'g2': '6',
    la: 'y',
    'a2': '7',
    si: 'u',
}

export {
    NOTES,
    VALID_KEYS,
    NOTE_TO_KEY,
    KEY_TO_NOTE,
  };