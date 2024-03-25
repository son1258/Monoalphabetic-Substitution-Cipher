// Hàm mã hóa văn bản sử dụng Mã đơn chữ cái Monoalphabetic
function encrypt() {
    const inputText = document.getElementById('input-str').value.toLowerCase(); // Lấy văn bản nhập vào và chuyển thành chữ thường
    let outputText = '';
    const key = generateKey(); // Tạo một khóa ngẫu nhiên

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        if (char >= 'a' && char <= 'z') {
            const index = char.charCodeAt(0) - 97; // Chuyển đổi ký tự thành chỉ mục (0-25)
            outputText += key[index]; // Thay thế ký tự với ký tự tương ứng trong khóa
        } else {
            outputText += char; // Giữ nguyên các ký tự không phải chữ cái
        }
    }

    document.getElementById('result').innerHTML = 'Văn bản đã mã hóa: ' + outputText;
}

// Hàm giải mã văn bản sử dụng Mã đơn chữ cái Monoalphabetic
function decrypt() {
    const inputText = document.getElementById('input-str').value.toLowerCase(); // Lấy văn bản nhập vào và chuyển thành chữ thường
    let outputText = '';
    const key = generateKey(); // Tạo một khóa ngẫu nhiên

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        if (char >= 'a' && char <= 'z') {
            const index = key.indexOf(char); // Tìm chỉ mục của ký tự trong khóa
            outputText += String.fromCharCode(index + 97); // Chuyển đổi chỉ mục thành ký tự và thêm vào kết quả
        } else {
            outputText += char; // Giữ nguyên các ký tự không phải chữ cái
        }
    }

    document.getElementById('result').innerHTML = 'Văn bản đã giải mã: ' + outputText;
}

// Hàm tạo một khóa ngẫu nhiên cho Mã đơn chữ cái Monoalphabetic
function generateKey() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let shuffledAlphabet = alphabet.split('');
    for (let i = shuffledAlphabet.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledAlphabet[i], shuffledAlphabet[j]] = [shuffledAlphabet[j], shuffledAlphabet[i]];
    }
    return shuffledAlphabet.join('');
}
