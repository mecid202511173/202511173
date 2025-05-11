document.addEventListener('DOMContentLoaded', function() {
    const root = document.documentElement;
    const toggle = document.querySelector('.checkbox');
    
    if (toggle) {
        toggle.addEventListener('change', function() {
            const isDarkMode = this.checked;
            
            if (isDarkMode) {
                
                 document.body.classList.remove('dark-mode');
                 root.style.setProperty('--primary-color', '#FFD600');
                 root.style.setProperty('--secondary-color', '#2E2E2E');
                 root.style.setProperty('--dark-bg', '#121212');
                 root.style.setProperty('--dark-bg-lighter', '#1E1E1E');
                 root.style.setProperty('--text-color', '#FAFAFA');
                 root.style.setProperty('--dark-bg-lightest', '#2E2E2E');
            } else {
                
               

                document.body.classList.add('dark-mode');
                root.style.setProperty('--primary-color', '#366ded');
                root.style.setProperty('--secondary-color', '#1e293b');
                root.style.setProperty('--dark-bg', '#0f172a');
                root.style.setProperty('--dark-bg-lighter', '#1e293b');
                root.style.setProperty('--text-color', '#f1f5f9');
                root.style.setProperty('--dark-bg-lightest', '#334155');
            }
        });
    }

    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-box, .about-img, .about-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };
    window.addEventListener('scroll', animateOnScroll);

    document.addEventListener('copy', function(e) {
        e.preventDefault();
        alert('Bu içerik koruma altındadır!');
    });
});

//3
const aciklamalar = [
    {
      text: "Arduino Uno: Protez elin beyin kısmıdır. Tüm kontrol ve sensör işlerini yönetir.",
      img: "img/Arduino.png"  // Fotoğrafın yolu
    },
    {
      text: "Servo Motor: Parmakların hassas şekilde hareket etmesini sağlar.",
      img: "img/servo.png"  // Fotoğrafın yolu
    },
    {
      text: "Flex Sensör: Parmakların bükülme durumunu algılayan sensördür.",
      img: "img/flex.png"  // Fotoğrafın yolu
    },
    {
      text: "Li-Po Batarya: Yüksek enerji yoğunluğuna sahip bataryadır.",
      img: "img/header.png"  // Fotoğrafın yolu
    },
    {
      text: "Bluetooth Modülü: Telefonla kablosuz bağlantı kurmaya yarar.",
      img: "img/header.png"  // Fotoğrafın yolu
    },
    {
      text: "3D Baskı Parçalar: Mekanik gövde bu parçalarla oluşturulur.",
      img: "img/header.png"  // Fotoğrafın yolu
    },
    {
      text: "Breadboard: Devre elemanlarını geçici olarak test etmek için kullanılır.",
      img: "img/header.png"  // Fotoğrafın yolu
    },
    {
      text: "Jumper Kablolar: Devre bağlantılarında kullanılır.",
      img: "img/header.png"  // Fotoğrafın yolu
    },
    {
      text: "Sensör Kalkanı: Arduino'ya birden fazla sensör bağlamak için kullanılır.",
      img: "img/header.png"  // Fotoğrafın yolu
    },
    {
      text: "Potansiyometre: Motor hız ayarları gibi kontrollerde kullanılır.",
      img: "img/header.png"  // Fotoğrafın yolu
    }
  ];

  function gosterAciklama(index) {
    const kutu = document.getElementById("aciklamaKutusu");
    const yazi = document.getElementById("malzemeYazi");
    const foto = document.getElementById("malzemeFoto");

    kutu.classList.add("active");
    yazi.textContent = aciklamalar[index].text;
    foto.src = aciklamalar[index].img;  
  }

  function scrollToContent() {
    window.scrollTo({ top: document.querySelector('.malzeme-container').offsetTop, behavior: 'smooth' });
  }


  
$(document).ready(function() {
    $('.protez-about-content, .protez-about-header').css({
        'opacity': '0',
        'transform': 'translateY(20px)',
        'transition': 'opacity 0.6s ease, transform 0.6s ease'
    });
    
    function animateOnScroll() {
        $('.protez-about-content, .protez-about-header').each(function() {
            const elementTop = $(this).offset().top;
            const windowHeight = $(window).height();
            const scrollTop = $(window).scrollTop();
            
            if (elementTop < scrollTop + windowHeight - 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    }
    
    animateOnScroll();
    
    $(window).scroll(animateOnScroll);
    
    $('.protez-skill-progress').each(function() {
        const width = $(this).attr('style').match(/width: (.*?);/)[1];
        $(this).css('width', '0');
        setTimeout(() => {
            $(this).css({
                'width': width,
                'transition': 'width 1.5s ease-out'
            });
        }, 300);
    });
});


