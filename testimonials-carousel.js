// testimonials-carousel.js

// Testimonios dinámicos y auto-scroll vertical
(function(){
  const data = [
  { name: "Ezequiel D.", city: "Tucumán", time: "10:28", text: "Vi el anuncio en Instagram y entré por curiosidad, ¡terminé ganando! 🎉" },
  { name: "Camila R.", city: "Neuquén", time: "21:34", text: "El bono del 200% me ayudó a duplicar mis chances. ¡Increíble!" },
  { name: "Rodrigo M.", city: "Bahía Blanca", time: "19:20", text: "Los cajeros son muy buena onda, te explican todo si tenés dudas 😉" },
  { name: "Florencia T.", city: "Formosa", time: "08:57", text: "Entré por una historia de Instagram y no me arrepiento. Muy divertido." },
  { name: "Agustín L.", city: "San Luis", time: "15:46", text: "Los retiros por QR fueron rapidísimos, todo perfecto ⚡" },
  { name: "Milagros J.", city: "Río Gallegos", time: "17:55", text: "Aproveché el 200% y pude jugar más tiempo, ¡vale la pena!" },
  { name: "Tomás G.", city: "Concordia", time: "11:03", text: "Te atienden con buena onda, es como ir a jugar con amigos." },
  { name: "Natalia M.", city: "Chaco", time: "20:18", text: "No soy de confiar mucho, pero esta vez me sorprendieron para bien 😊" },
  { name: "Franco E.", city: "San Rafael", time: "09:42", text: "Me recomendaron esta app y ahora soy yo el que la recomienda 👍" },
  { name: "Bianca Z.", city: "Villa María", time: "12:30", text: "Ideal para pasar el rato y ganar algo extra." },
  { name: "Facundo C.", city: "Catamarca", time: "14:48", text: "La atención al cliente fue excelente, muy amables todos." },
  { name: "Juliana B.", city: "Misiones", time: "13:17", text: "¡Qué suerte tuve! Entré por Instagram y retiré en la misma tarde." },
  { name: "Ramiro T.", city: "La Rioja", time: "16:10", text: "El bono inicial te da una gran ventaja para arrancar." },
  { name: "Micaela A.", city: "Corrientes", time: "18:00", text: "La mejor parte es lo amable que son los que atienden. Da gusto." },
  { name: "Gonzalo N.", city: "Pergamino", time: "19:45", text: "Entré sin expectativas y terminé recomendándoselo a mis amigos." },
  { name: "Noelia S.", city: "Trelew", time: "10:05", text: "Me encanta jugar desde la cama y encima gané dos veces 🛏️💸" },
  { name: "Matías I.", city: "Olavarría", time: "22:30", text: "Vi el bono del 200% y no lo dudé. ¡Vale totalmente la pena!" },
  { name: "Cintia Q.", city: "San Fernando", time: "07:59", text: "El trato fue excelente, te hacen sentir segura y bienvenida." },
  { name: "Esteban Y.", city: "Esquel", time: "23:12", text: "Muy recomendable, tanto por la app como por la gente detrás." },
  { name: "Valeria P.", city: "Salta", time: "09:15", text: "Las tragamonedas de WonBet son lo más 🎰 ¡Me pasé horas jugando!" },
  { name: "Hugo S.", city: "Mar del Plata", time: "20:45", text: "El servicio de chat en vivo respondió al toque, muy rápido." },
  { name: "Danilo F.", city: "Bahía Blanca", time: "13:22", text: "Me encanta el torneo semanal de póker, ¡la adrenalina al máximo!" },
  { name: "Lucía N.", city: "Bariloche", time: "17:30", text: "Recomendada por un amigo y ¡ya somos todos usuarios felices!" },
  { name: "Ignacio V.", city: "Mendoza", time: "21:10", text: "Cobré mis ganancias en minutos, super eficiente ⏱️" },
  { name: "Sofía K.", city: "Rosario", time: "12:05", text: "La app es muy intuitiva, encontrás todo al toque." },
  { name: "Germán L.", city: "Posadas", time: "18:40", text: "Los botes progresivos de blackjack son una locura, gané un buen extra 🃏" },
  { name: "Sandra M.", city: "Salto", time: "08:25", text: "El bono de bienvenida me permitió probar varios juegos gratis." },
  { name: "Marcos R.", city: "Santiago del Estero", time: "15:55", text: "La sección de apuestas deportivas está genial, ¡a 5 estrellas!" },
  { name: "Paula G.", city: "Santa Fe", time: "11:48", text: "Me llamó la atención la variedad de ruletas, muy realistas." },
  { name: "Diego C.", city: "Ushuaia", time: "22:01", text: "Mis amigos y yo competimos en el chat de torneos, muy divertido 😎" },
  { name: "Ana T.", city: "Paraná", time: "16:37", text: "El retiro por transferencia bancaria fue instantáneo, ¡ni lo esperaba!" },
  { name: "Federico U.", city: "Junín", time: "19:27", text: "Las bonificaciones semanales me tienen enganchado, siempre algo nuevo." }
];

  const container = document.getElementById('testimonialsCarousel');
  let idx = 0, timer;

  // Crear y anexar elementos al contenedor
  data.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'testimonial-item';
    div.innerHTML = `
      <p>"${item.text}"</p>
      <div class="meta">${item.name}, ${item.city} · ${item.time}</div>
    `;
    container.appendChild(div);
  });

  const items = container.querySelectorAll('.testimonial-item');

  function show(index) {
    items.forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });
  }

  function next() {
    idx = (idx + 1) % items.length;
    show(idx);
  }

  // Mostrar el primero y lanzar auto-scroll
  show(0);
  timer = setInterval(next, 4000);

  // Pausar al hacer hover o touch
  container.addEventListener('mouseenter', () => clearInterval(timer));
  container.addEventListener('mouseleave', () => timer = setInterval(next, 4000));
  container.addEventListener('touchstart', () => clearInterval(timer));
  container.addEventListener('touchend', () => timer = setInterval(next, 4000));
})();
