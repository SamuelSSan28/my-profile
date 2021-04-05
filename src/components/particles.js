const particles = {
    "particles": {
       "number": {
         "value": 130,
         "density": {
           "enable": true,
           "value_area": 800
         }, "line_linked": {
          "color":"#FFFFFF"
          },
       },
       "color": {
         "value": "#ffffff"
       },
       "shape": {
         "type": "circle",
         "stroke": {
           "width": 3,
           "color": "#000000"
         },
         "polygon": {
           "nb_sides": 5
         },
         "image": {
           "src": "img/github.svg",
           "width": 100,
           "height": 100
         }
       },
       "opacity": {
         "value": 0.5,
         "random": true,
         "anim": {
           "enable": false,
           "speed": 1,
           "opacity_min": 0.1,
           "sync": false
         }
       },
       "size": {
         "value": 4,
         "random": true,
         "anim": {
           "enable": false,
           "speed": 40,
           "size_min": 0.1,
           "sync": false
         }
       },
       "line_linked": {
         "enable": true,
         "distance": 150,
         "color": "#ffffff",
         
         "width": 1
       },
       "move": {
         "enable": true,
         "speed": 2,
         "direction": "none",
         "random": false,
         "straight": false,
         "out_mode": "out",
         "bounce": true,
         "attract": {
           "enable": false,
           "rotateX": 600,
           "rotateY": 1200
         }
       }
     },
      "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    },
     "retina_detect": true
   } 

   export default particles