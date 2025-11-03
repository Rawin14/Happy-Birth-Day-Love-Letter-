const envelope = document.querySelector('.envelope');

envelope.addEventListener('click', () => {
    // 1. ถ้าซองจดหมายเปิดอยู่ (หรือกำลังปิด)
    if (envelope.classList.contains('open') || envelope.classList.contains('closing')) {
        
        // 2. ถ้ามันกำลังปิดอยู่ (คลิกซ้ำตอนกำลังปิด) ไม่ต้องทำอะไร
        if (envelope.classList.contains('closing')) return;

        // 3. เริ่มลำดับการปิด
        envelope.classList.remove('open');
        envelope.classList.add('closing');

        // 4. ตั้งเวลาลบคลาส .closing ออก (1.9 วินาที)
        // เพื่อให้พร้อมสำหรับการคลิกเปิดครั้งต่อไป
        setTimeout(() => {
            envelope.classList.remove('closing');
        }, 1900); // 1.9 วินาที (ต้องตรงกับแอนิเมชันตอนปิด)

    } else {
        // 5. ถ้าซองปิดอยู่ ให้เริ่มลำดับการเปิด
        envelope.classList.add('open');
    }
});