// 1. เลือกซองจดหมาย (ตัว .envelope-wrapper หรือ .envelope ก็ได้)
const envelope = document.querySelector('.envelope');

// 2. เพิ่ม Event Listener ให้ "คลิก"
envelope.addEventListener('click', () => {
    // 3. ทุกครั้งที่คลิก ให้สลับ (toggle) คลาส 'open'
    // ถ้าคลิกอีกครั้ง มันจะพับกลับและเลื่อนลงไป (เล่นย้อนกลับ)
    envelope.classList.toggle('open');
});