
// mobile menu

document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector('.mobile-header .container .menu-btn');
  var menu = document.querySelector('.mobile-header .container nav');

  button.addEventListener("click", function() {
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
  });

  document.addEventListener("click", function(event) {
    var isClickInside = menu.contains(event.target) || button.contains(event.target);
    if (!isClickInside) {
      menu.style.display = "none";
    }
  });
});

// Test 
//50 projects in 50 days Udemy

const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'محمد',
    position: 'باسل',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخ',
  },
  {
    name: 'محمد',
    position: 'باسل',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخ',
  },
  {
    name: 'محمد',
    position: 'باسل',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخ',
  },
]


let idx = 1;

function updateTestimonials(){
  const {name, position, photo, text} = testimonials[idx];
  
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  
  idx++;
  
  if(idx > testimonials.length - 1){
    idx = 0;
  }
}

setInterval(updateTestimonials, 10000);