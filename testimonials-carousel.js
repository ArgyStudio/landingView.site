// testimonials-carousel.js

// Testimonios dinámicos y auto-scroll vertical
(function(){
  const data = [
    {name: "Ezequiel D.", city: "Tucumán", time: "10:28", text: "Vi el anuncio en Instagram y entré por curiosidad, ¡terminé ganando!"},
    {name: "Camila R.", city: "Neuquén", time: "21:34", text: "El bono del 200% me ayudó a duplicar mis chances. ¡Increíble!"},
    {name: "Rodrigo M.", city: "Bahía Blanca", time: "19:20", text: "Los cajeros son muy buena onda, te explican todo si tenés dudas."},
    {name: "Florencia T.", city: "Formosa", time: "08:57", text: "Entré por una historia de Instagram y no me arrepiento. Muy divertido."},
    {name: "Agustín L.", city: "San Luis", time: "15:46", text: "Los retiros por QR fueron rapidísimos, todo perfecto."},
    {name: "Milagros J.", city: "Río Gallegos", time: "17:55", text: "Aproveché el 200% y pude jugar más tiempo, ¡vale la pena!"},
    {name: "Tomás G.", city: "Concordia", time: "11:03", text: "Te atienden con buena onda, es como ir a jugar con amigos."},
    {name: "Natalia M.", city: "Chaco", time: "20:18", text: "No soy de confiar mucho, pero esta vez me sorprendieron para bien."},
    {name: "Franco E.", city: "San Rafael", time: "09:42", text: "Me recomendaron esta app y ahora soy yo el que la recomiendo."},
    {name: "Bianca Z.", city: "Villa María", time: "12:30", text: "Ideal para pasar el rato y ganar algo extra."},
    {name: "Facundo C.", city: "Catamarca", time: "14:48", text: "La atención al cliente fue excelente, muy amables todos."},
    {name: "Juliana B.", city: "Misiones", time: "13:17", text: "¡Qué suerte tuve! Entré por Instagram y retiré en la misma tarde."},
    {name: "Ramiro T.", city: "La Rioja", time: "16:10", text: "El bono inicial te da una gran ventaja para arrancar."},
    {name: "Micaela A.", city: "Corrientes", time: "18:00", text: "La mejor parte es lo amable que son los que atienden. Da gusto."},
    {name: "Gonzalo N.", city: "Pergamino", time: "19:45", text: "Entré sin expectativas y terminé recomendándoselo a mis amigos."},
    {name: "Noelia S.", city: "Trelew", time: "10:05", text: "Me encanta jugar desde la cama y encima gané dos veces."},
    {name: "Matías I.", city: "Olavarría", time: "22:30", text: "Vi el bono del 200% y no lo dudé. ¡Vale totalmente la pena!"},
    {name: "Cintia Q.", city: "San Fernando", time: "07:59", text: "El trato fue excelente, te hacen sentir segura y bienvenida."},
    {name: "Esteban Y.", city: "Esquel", time: "23:12", text: "Muy recomendable, tanto por la app como por la gente detrás."}
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
