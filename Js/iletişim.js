document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('protezForm');
    
    if (form) { 
        const mesajKutusu = document.getElementById('protezMesajKutusu') || 
                            document.createElement('div'); 
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            submitButton.textContent = 'Gönderiliyor...';
            submitButton.disabled = true;
            
            const formData = new FormData(form);
            
            setTimeout(function() {
                mesajKutusu.textContent = "Formunuz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.";
                mesajKutusu.className = "protez-message protez-message-success";
                mesajKutusu.style.display = "block";
                
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                
                mesajKutusu.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                setTimeout(function() {
                    mesajKutusu.style.display = "none";
                }, 5000);
                
                 form.reset();
            }, 1500);
            
            
            
            
        });
    }
  });