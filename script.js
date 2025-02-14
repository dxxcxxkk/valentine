let currentMessageIndex = 0;
function showLoveMessage() {
    const messages = [
        "น่ารักมั้ย",
        "โอนมา200",
        "คือก็กดไม่หยุดเนอะ",
        "ชอบมั้ยโดนด่า",
        "คำชมก็มีลองหาดู",
        "ไอโง่โดนหลอก",
        "5557887556657656655555เหงา5555665665655656565656"
    ];
    document.getElementById("message").innerText = messages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
}