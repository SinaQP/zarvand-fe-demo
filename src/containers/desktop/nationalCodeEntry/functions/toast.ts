import Swal from 'sweetalert2';

export default Swal.mixin({
   toast: true,
   width: '60rem',
   position: 'bottom',
   showConfirmButton: false,
   timer: 3000,
   timerProgressBar: true,
   didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
   },
});
