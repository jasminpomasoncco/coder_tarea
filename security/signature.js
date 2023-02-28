const alfabeto = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'o', 'n', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', ' ', '"', '{', '}', ',', ':',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'o', 'n', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', ' ', '"', '{', '}', ',', ':',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
]

function encrypt(letter, corrimiento) {
    const index = alfabeto.findIndex(l => l === letter)
    const nuevoIndice = index + corrimiento
    return alfabeto[nuevoIndice]
}

function encryptFrase(frase, corrimiento) {
    return frase.split('').map(letter => encrypt(letter, corrimiento)).join('')
}

function sign(objeto, secret) {
    objeto.signature = encryptFrase(JSON.stringify(objeto), secret.length)
    return objeto
}

const PALABRA_SECRETA = 'marian'

function validar(objeto) {
    const signatureOriginal = objeto.signature
    delete objeto.signature
    const { signature: signatureNueva } = sign(objeto, PALABRA_SECRETA)
    return signatureNueva === signatureOriginal
}

// console.log(validar({ saldo: 100, signature: '32ygrjt267ff4' }))
// console.log(validar({ saldo: 200, signature: '32ygrjt267ff4' }))