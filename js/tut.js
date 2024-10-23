// window.onload = function () {
//   document
//     .getElementById('contact-form')
//     .addEventListener('submit', function (event) {
//       event.preventDefault();
//       // generate a five digit number for the contact_number variable
//       this.contact_number.value = (Math.random() * 100000) | 0;
//       // these IDs from the previous steps
//       emailjs.sendForm('contact_service', 'contact_form', this).then(
//         function () {
//           console.log('SUCCESS!');
//         },
//         function (error) {
//           console.log('FAILED...', error);
//         }
//       );
//     });
// };

// function sendMail(params) {
//   const tempParams = {
//     name: document.getElementById('fname').value,
//     user_email: document.getElementById('email').value,
//     message: document.getElementById('comment').value,
//   };

//   emailjs
//     .sendForm('service_fr1qs3k', 'template_tq05r9d', tempParams)
//     .then(() => {
//       console.log('Success!');
//       console.log(res.status)
//     })
//     .catch((err) => {
//         console.log('Error...')
//       console.log(err);
//     });
// }

// emailjs
//   .sendForm(
//     'service_fr1qs3k',
//     'template_tq05r9d',
//     e.target,
//     'user_yqXy8VZ74Cv2Ehx5XfKlw'
//   )
//   .then((res) => {
//     console.log(res);
//     setError(true);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// -------------------------------------------------------

// window.onload = function () {
//   document
//     .getElementById('contact-form')
//     .addEventListener('submit', function (event) {
//       event.preventDefault();
//       const tempParams = {
//         contact_number: (Math.random() * 100000) | 0,
//         name: document.getElementById('fname').value,
//         user_email: document.getElementById('email').value,
//         message: document.getElementById('comment').value,
//       };
//       //   contact_number: document.getElementById('contact_number').value,

//       // generate a five digit number for the contact_number variable
//       //   this.contact_number.value = (Math.random() * 100000) | 0;

//       console.log(this);

//       // these IDs from the previous steps
//       //   emailjs.sendForm('service_fr1qs3k', 'template_tq05r9d', this).then(
//       emailjs.sendForm('service_fr1qs3k', 'template_tq05r9d', this).then(
//         function () {
//           console.log('SUCCESS!');
//         },
//         function (error) {
//           console.log('FAILED...', error);
//         }
//       );

//       console.log(this);
//     });
// };

// window.onload = function () {
//   document
//     .getElementById('contact-form')
//     .addEventListener('submit', function (event) {
//       event.preventDefault();
//       // generate a five digit number for the contact_number variable
//       this.contact_number.value = (Math.random() * 100000) | 0;
//       // these IDs from the previous steps
//       emailjs.sendForm('contact_service', 'contact_form', this).then(
//         function () {
//           console.log('SUCCESS!');
//         },
//         function (error) {
//           console.log('FAILED...', error);
//         }
//       );
//     });
// };

// -------------------------------------------------------

// function sendMail() {
//     const params = {
//       name: document.getElementById('fname').value,
//       user_email: document.getElementById('email').value,
//       message: document.getElementById('comment').value,
//     };

//     emailjs
//       .send('service_fr1qs3k', 'template_tq05r9d', params)
//     .then(function (res) {
//       console.log('Success!', res.status);
//     });

//   //   emailjs
//   //     .send('service_fr1qs3k', 'template_tq05r9d', {
//   //       name: document.getElementById('fname').value,
//   //       message: document.getElementById('comment').value,
//   //       user_email: document.getElementById('email').value,
//   //     })
//   //     .then(function (res) {
//   //       console.log('Success!');
//   //       console.log(res.status);
//   //     });
// }

// emailjs.send('service_fr1qs3k', 'template_tq05r9d', {
//   name: 'Slobe Bryant',
//   message: 'Yeeeeet',
//   user_email: 'nahmeen@gmail.com',
// });

// -------------------------------------------------------

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_fr1qs3k';
   const templateID = 'template_tq05r9d';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

