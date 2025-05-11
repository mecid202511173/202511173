function showLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    
    const loadingText = document.createElement('div');
    loadingText.className = 'loading-text';
    loadingText.textContent = 'Yükleniyor...';
    
    loadingScreen.appendChild(spinner);
    loadingScreen.appendChild(loadingText);
    document.body.appendChild(loadingScreen);
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1000);
    });
}

document.addEventListener('DOMContentLoaded', showLoadingScreen);
