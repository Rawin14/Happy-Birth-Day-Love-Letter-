const envelope = document.querySelector('.envelope');
const vinylContainer = document.getElementById('vinylContainer');
const vinylRecord = document.getElementById('vinylRecord');
const playButton = document.getElementById('playButton');
const musicPlayer = document.getElementById('musicPlayer');

let isPlaying = false;
let isEnvelopeOpen = false;

// ฟังก์ชันเล่นเพลง
function playMusic(targetVolume = 0.7) {
  if (!isPlaying) {
    musicPlayer.play();
    vinylRecord.classList.add('playing');
    playButton.classList.add('playing');
    isPlaying = true;
  }
  
  // Fade to target volume
  musicPlayer.volume = 0;
  let volume = 0;
  const fadeIn = setInterval(function() {
    if (volume < targetVolume) {
      volume += 0.05;
      musicPlayer.volume = Math.min(volume, targetVolume);
    } else {
      clearInterval(fadeIn);
    }
  }, 100);
}

// ฟังก์ชันปรับระดับเสียง
function adjustVolume(targetVolume) {
  let currentVolume = musicPlayer.volume;
  const step = (targetVolume - currentVolume) / 20;
  
  const adjust = setInterval(function() {
    currentVolume += step;
    if ((step > 0 && currentVolume >= targetVolume) || 
        (step < 0 && currentVolume <= targetVolume)) {
      musicPlayer.volume = targetVolume;
      clearInterval(adjust);
    } else {
      musicPlayer.volume = currentVolume;
    }
  }, 50);
}

// ฟังก์ชันหยุดเพลง
function pauseMusic() {
  let volume = musicPlayer.volume;
  const fadeOut = setInterval(function() {
    if (volume > 0.05) {
      volume -= 0.05;
      musicPlayer.volume = Math.max(volume, 0);
    } else {
      clearInterval(fadeOut);
      musicPlayer.pause();
      vinylRecord.classList.remove('playing');
      playButton.classList.remove('playing');
      isPlaying = false;
    }
  }, 50);
}

// 🎯 เหตุการณ์เมื่อคลิกซอง
envelope.addEventListener('click', () => {
    if (envelope.classList.contains('open') || envelope.classList.contains('closing')) {
        if (envelope.classList.contains('closing')) return;
        
        envelope.classList.remove('open');
        envelope.classList.add('closing');
        isEnvelopeOpen = false;
        
        // ลดเสียงเป็นเพลงพื้นหลัง (หรือหยุดเลย)
        if (isPlaying) {
            adjustVolume(0.3); // เบาลง
            // pauseMusic(); // หรือหยุดเลย
        }
        
        setTimeout(() => {
            envelope.classList.remove('closing');
        }, 1900);
        
    } else {
        envelope.classList.add('open');
        isEnvelopeOpen = true;
        
        // เล่นเพลงเต็มเสียง
        setTimeout(() => {
            if (isPlaying) {
                adjustVolume(0.7); // เพิ่มเสียง
            } else {
                playMusic(0.7); // เริ่มเล่น
            }
        }, 1400);
    }
});

// คลิกที่แผ่นเสียง
vinylContainer.addEventListener('click', function(e) {
  e.stopPropagation();
  
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic(isEnvelopeOpen ? 0.7 : 0.3);
  }
});

// ❄️ สร้างหิมะ
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

window.addEventListener('load', createSnowflakes);

// 🎼 เล่นเพลงพื้นหลังเบาๆ (เลือกใช้หรือไม่ก็ได้)
// window.addEventListener('load', function() {
//   setTimeout(() => playMusic(0.3), 1000);
// });