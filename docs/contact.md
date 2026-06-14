---
icon: material/card-account-mail
---

# 📬 Contact Me

---

## 📬 Let's Connect
Feel free to reach out for collaboration, freelance work, or any project discussion 🚀

---

## 🌐 Social Links

[![GitHub](https://img.shields.io/badge/GitHub-black?logo=github)](https://github.com/rmszk)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?logo=linkedin)](https://linkedin.com/in/yourusername)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?logo=instagram&logoColor=white)](https://www.instagram.com/r_m_sz/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?logo=whatsapp&logoColor=white)](https://wa.me/923028124650?text=Hello%20I%20visited%20your%20portfolio)
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?logo=facebook&logoColor=white)](https://www.facebook.com/raoshahroz44204)
[![TikTok](https://img.shields.io/badge/TikTok-000000?logo=tiktok&logoColor=white)](https://www.tiktok.com/@r_m_sz)
[![Discord](https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=white)](https://discord.com/users/909385603513196574)
[![Kaggle](https://img.shields.io/badge/Kaggle-20BEFF?logo=kaggle&logoColor=white)](https://www.kaggle.com/raoshahroz)

---

## 📍 Direct Contact

📞 **Call:** [+92 302 8124650](tel:+923028124650)  
📧 **Email:** [raoshahrozmunim777@gmail.com](mailto:raoshahrozmunim777@gmail.com)  
💬 **WhatsApp:** [Chat on WhatsApp](https://wa.me/923028124650?text=Hello%20I%20visited%20your%20portfolio)

---

## ⚡ Availability

✔ Freelance: Available  
✔ Response time: 24 hours  
✔ Timezone: PKT (Pakistan)

---

## 📩 Send Me a Message

Koi sawaal ya kaam hai? Message karo — jald reply karunga!

<form action="https://formspree.io/f/mwvjwzbd" method="POST" class="contact-form">

  <div class="form-group">
    <label>👤 Your Name</label>
    <input type="text" name="name" placeholder="John Doe" required>
  </div>

  <div class="form-group">
    <label>📧 Your Email</label>
    <input type="email" name="email" placeholder="john@email.com" required>
  </div>

  <div class="form-group">
    <label>💬 Message</label>
    <textarea name="message" rows="5" placeholder="Your message..." required></textarea>
  </div>

  <button type="submit" class="form-btn">Send Message 📨</button>

  <!-- Success message — submit ke baad dikhega -->
  <div class="form-success" id="form-success">
    ✅ Thank you! Your message has been sent. I'll reply within 24 hours! 😊
  </div>

</form>

<script>
  var form = document.querySelector('.contact-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var data = new FormData(form);

    fetch('https://formspree.io/f/mwvjwzbd', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(function(response) {
      if (response.ok) {
        form.reset();
        document.getElementById('form-success').style.display = 'block';
      }
    });
  });
</script>