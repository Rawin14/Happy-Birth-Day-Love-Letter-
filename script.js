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


// สร้างหิมะตกอัตโนมัติ
function createSnowflakes() {
  const snowContainer = document.body;
  const snowflakeSymbols = ['❄', '❅', '❆', '✻', '✼', '❉'];
  
  for (let i = 0; i < 20; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
    snowContainer.appendChild(snowflake);
  }
}

// เรียกใช้เมื่อโหลดหน้าเว็บ
window.addEventListener('load', createSnowflakes);

// 🎵 Vinyl Record Player Script
const vinylContainer = document.getElementById('vinylContainer');
const vinylRecord = document.getElementById('vinylRecord');
const playButton = document.getElementById('playButton');
const musicPlayer = document.getElementById('musicPlayer');

let isPlaying = false;

// คลิกที่แผ่นเสียงหรือปุ่มเล่น
vinylContainer.addEventListener('click', function() {
  if (isPlaying) {
    // หยุดเพลง
    musicPlayer.pause();
    vinylRecord.classList.remove('playing');
    playButton.classList.remove('playing');
    isPlaying = false;
  } else {
    // เล่นเพลง
    musicPlayer.play();
    vinylRecord.classList.add('playing');
    playButton.classList.add('playing');
    isPlaying = true;
  }
});

// Auto-play เมื่อโหลดหน้าเว็บ (บางเบราว์เซอร์อาจบลอก)
// ถ้าต้องการให้เล่นอัตโนมัติ ให้เอาคอมเมนต์ออก
// window.addEventListener('load', function() {
//   vinylContainer.click();
// });