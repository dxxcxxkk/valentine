let currentMessageIndex = 0;
function showLoveMessage() {
    const messages = [
        "กดทำเหี้ยไร",
        "คาดหวังอะไรที่กด",
        "กดแล้วต้องโอน200",
        "คือก็กดไม่หยุดเนอะ",
        "โอนมาไอเหี้ย จะเอาไปทำเล็บ",
        "ล้อเล่น เอาดีๆละ",
        "อาจจะไม่ชอบที่กูด่า",
        "คำชมก็มีลองกดอีกทีดู",
        "ไอโง่โดนหลอก",
        "5557887556657656655555เหงา5555665665655656565656"
    ];
    document.getElementById("message").innerText = messages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
}
