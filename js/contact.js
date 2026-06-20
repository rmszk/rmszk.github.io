document.addEventListener('DOMContentLoaded', function() {
  
  // ==========================================
  // 🚀 PART 1: AOS ANIMATION INJECTION & INIT
  // ==========================================
  
  // 1. AOS ki CSS inject karna
  if (!document.getElementById('aos-css')) {
    const aosStyles = document.createElement('link');
    aosStyles.id = 'aos-css';
    aosStyles.rel = 'stylesheet';
    aosStyles.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
    document.head.appendChild(aosStyles);
  }

  // 2. AOS ki JavaScript Library load aur initialize karna
  if (!document.getElementById('aos-js')) {
    const aosScript = document.createElement('script');
    aosScript.id = 'aos-js';
    aosScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
    aosScript.onload = function() {
      // Library load hote hi premium settings ke sath initialize karein
      AOS.init({
        duration: 1000,   // Animation ki speed (1 second)
        once: true,       // Srif pehli dafa scroll par slide ho
        offset: 120,      // Element screen par thoda sa upar aaye tab chalay
        easing: 'ease-out-cubic' // Smooth cubic easing transition
      });
    };
    document.body.appendChild(aosScript);
  }

  // ==========================================
  // 💬 PART 2: FLOATING BUBBLE & LAYOUT STYLES
  // ==========================================
  
  // Inject Dynamic Styles with Premium Animations & Structural Adjustments
  const style = document.createElement('style');
  style.textContent = `
    /* Floating Form Input Styles */
    #float-name, #float-email, #float-message {
      width: 100%;
      padding: 10px;
      margin-bottom: 12px;
      border: 1px solid var(--md-default-fg-color--textest, rgba(0,0,0,0.15));
      border-radius: 8px;
      box-sizing: border-box;
      outline: none;
      font-size: 14px;
      background: var(--md-default-bg-color, #ffffff);
      color: var(--md-default-fg-color, #333333);
    }
    #float-name:focus, #float-email:focus, #float-message:focus {
      border-color: #2196F3;
      box-shadow: 0 0 0 3px rgba(33,150,243,.2);
    }
    #float-submit:hover { opacity: .9; }
    
    /* Overlay to close when clicking outside */
    .float-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      z-index: 9997; display: none;
      background: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(2px);
      transition: opacity 0.3s ease;
    }

    /* Keyframes for Smooth Pop-up Animation */
    @keyframes popupSlideUp {
      from {
        transform: translateY(30px) scale(0.92);
        opacity: 0;
      }
      to {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
    }

    /* Keyframes for Smooth Hide Animation */
    @keyframes popupSlideDown {
      from {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
      to {
        transform: translateY(30px) scale(0.92);
        opacity: 0;
      }
    }

    /* Active State Classes */
    .modal-show {
      display: block !important;
      animation: popupSlideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }
    .modal-hide {
      animation: popupSlideDown 0.25s ease-in forwards;
    }

    /* 🛠️ FIXES FOR LANDSCAPE LAYOUT & PADDING (Aapka CSS safe zone mein) */
    
    /* 1. Edit/View Source icons ko hide karna taake top space flush ho sake */
    .md-content__action {
      display: none !important;
    }

    /* 2. Home page ke main article block ki padding/margin override karna */
    .md-content__inner {
      margin-top: 0 !important;
      padding-top: 0 !important;
    }

    /* 3. Avatar ko har haal mein round rakhna aur layout responsive rakhna */
    .profile-pic {
      border-radius: 50% !important;
    }
  `;
  document.head.appendChild(style);

  // Background overlay element
  var overlay = document.createElement('div');
  overlay.className = 'float-overlay';
  document.body.appendChild(overlay);

  // Floating bubble button
  var bubble = document.createElement('div');
  bubble.innerHTML = '💬';
  bubble.style.cssText = `
    position: fixed; bottom: 30px; right: 30px;
    width: 60px; height: 60px; background: #2196F3;
    border-radius: 50%; display: flex; align-items: center;
    justify-content: center; font-size: 28px; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3); z-index: 9999;
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  `;
  bubble.onmouseenter = () => bubble.style.transform = 'scale(1.1) rotate(-5deg)';
  bubble.onmouseleave = () => bubble.style.transform = 'scale(1) rotate(0deg)';
  document.body.appendChild(bubble);

  // Modal Structure
  var modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed; bottom: 100px; right: 30px;
    width: 320px; 
    background: var(--md-default-bg-color, white); 
    color: var(--md-default-fg-color, #333);
    border: 1px solid var(--md-card-border, rgba(0,0,0,0.1));
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.2); padding: 24px;
    z-index: 9998; display: none; font-family: sans-serif;
    transform-origin: bottom right;
  `;

  modal.innerHTML = `
    <h3 style="margin:0 0 16px 0; color: var(--md-default-fg-color);">📩 Send a Message</h3>
    
    <form id="floating-contact-form">
      <input type="hidden" name="access_key" value="3219be8c-50f4-4981-86d4-7eb006e85650">
      <input type="hidden" name="redirect" value="false">

      <input type="text" id="float-name" name="name" placeholder="👤 Your Name" required>
      <input type="email" id="float-email" name="email" placeholder="📧 Your Email" required>
      <textarea id="float-message" name="message" placeholder="💬 Your Message..." rows="4" required></textarea>

      <button type="submit" id="float-submit" style="
        width:100%; padding:12px; background:#2196F3; color:white;
        border:none; border-radius:8px; cursor:pointer; font-size:15px; font-weight: bold;">
        Send Message 📨
      </button>

      <div id="float-success" style="display:none; color:#2e7d32; margin-top:10px; text-align:center; font-weight:bold;">
        ✅ Message sent successfully!
      </div>
      <div id="float-error" style="display:none; color:#d32f2f; margin-top:10px; text-align:center; font-weight:bold;">
        ❌ Something went wrong.
      </div>
    </form>
  `;
  document.body.appendChild(modal);

  // Smooth Open Function
  function openModal() {
    modal.classList.remove('modal-hide');
    modal.classList.add('modal-show');
    overlay.style.display = 'block';
    overlay.style.opacity = '1';
  }

  // Smooth Close Function
  function closeModal() {
    modal.classList.add('modal-hide');
    overlay.style.opacity = '0';
    setTimeout(() => {
      modal.classList.remove('modal-show');
      overlay.style.display = 'none';
    }, 250);
  }

  // Toggle Function
  function toggleModal() {
    if (!modal.classList.contains('modal-show')) {
      openModal();
    } else {
      closeModal();
    }
  }

  bubble.addEventListener('click', toggleModal);
  overlay.addEventListener('click', closeModal);

  // Floating Form Submission Logic
  var floatForm = document.getElementById('floating-contact-form');
  if (floatForm) {
    floatForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var floatSubmitBtn = document.getElementById('float-submit');
      floatSubmitBtn.disabled = true;
      floatSubmitBtn.innerText = 'Sending...';

      var floatFormData = new FormData(floatForm);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: floatFormData
      })
      .then(function(res) { return res.json(); })
      .then(function(json) {
        if (json.success) {
          floatForm.reset();
          document.getElementById('float-success').style.display = 'block';
          document.getElementById('float-error').style.display = 'none';
          floatSubmitBtn.innerText = 'Sent ✅';
          
          setTimeout(closeModal, 2500);
        } else {
          document.getElementById('float-error').style.display = 'block';
          document.getElementById('float-success').style.display = 'none';
          floatSubmitBtn.disabled = false;
          floatSubmitBtn.innerText = 'Send Message 📨';
        }
      })
      .catch(function() {
        document.getElementById('float-error').style.display = 'block';
        floatSubmitBtn.disabled = false;
        floatSubmitBtn.innerText = 'Send Message 📨';
      });
    });
  }
});