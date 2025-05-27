// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    initializeWebServer();
});

function initializeWebServer() {
    // Animasi loading
    document.body.classList.add('loading');
    
    // Update informasi server
    updateServerInfo();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup auto-refresh untuk waktu
    setupAutoRefresh();
    
    console.log('🚀 Web Server Jeri Parura - NIM: 048081509 initialized!');
}

function updateServerInfo() {
    // Update uptime
    updateUptime();
    
    // Update last update time
    updateLastUpdate();
    
    // Update status
    updateServerStatus();
}

function updateUptime() {
    const startTime = new Date();
    // Simulasi server mulai beberapa jam yang lalu
    startTime.setHours(startTime.getHours() - Math.floor(Math.random() * 72));
    
    function calculateUptime() {
        const now = new Date();
        const diff = now - startTime;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    
    const uptimeElement = document.getElementById('uptime');
    if (uptimeElement) {
        uptimeElement.textContent = calculateUptime();
        
        // Update setiap detik
        setInterval(() => {
            uptimeElement.textContent = calculateUptime();
        }, 1000);
    }
}

function updateLastUpdate() {
    const lastUpdateElement = document.getElementById('lastUpdate');
    if (lastUpdateElement) {
        const now = new Date();
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Jakarta'
        };
        lastUpdateElement.textContent = now.toLocaleDateString('id-ID', options);
    }
}

function updateServerStatus() {
    // Simulasi pemeriksaan status server
    const statusElement = document.querySelector('.status');
    if (statusElement) {
        // Server selalu online untuk demo
        statusElement.innerHTML = `
            <span class="status-dot"></span>
            Online
        `;
    }
}

function setupEventListeners() {
    // Animasi hover untuk kartu info
    const infoCard = document.querySelector('.info-card');
    if (infoCard) {
        infoCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        infoCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    // Animasi untuk feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Easter egg - klik logo server
    const serverIcon = document.querySelector('.server-icon');
    if (serverIcon) {
        let clickCount = 0;
        serverIcon.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 5) {
                showEasterEgg();
                clickCount = 0;
            }
        });
    }
}

function showEasterEgg() {
    const originalBg = document.body.style.background;
    document.body.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)';
    document.body.style.backgroundSize = '400% 400%';
    document.body.style.animation = 'rainbow 2s ease infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        document.body.style.background = originalBg;
        document.body.style.animation = '';
        document.head.removeChild(style);
    }, 3000);
    
    console.log('🎉 Easter egg activated! Jeri Parura - 048081509');
}

function setupAutoRefresh() {
    // Refresh informasi server setiap 30 detik
    setInterval(() => {
        updateLastUpdate();
        updateServerStatus();
    }, 30000);
}

// Fungsi utilitas
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function getRandomServerStat() {
    const stats = [
        'CPU: ' + (Math.random() * 30 + 5).toFixed(1) + '%',
        'RAM: ' + (Math.random() * 40 + 20).toFixed(1) + '%',
        'Disk: ' + (Math.random() * 60 + 10).toFixed(1) + '%'
    ];
    return stats[Math.floor(Math.random() * stats.length)];
}

// Export untuk penggunaan global jika diperlukan
window.WebServerJeri = {
    updateServerInfo,
    showEasterEgg,
    version: '1.0.0',
    student: {
        name: 'Jeri Parura',
        nim: '048081509'
    }
};