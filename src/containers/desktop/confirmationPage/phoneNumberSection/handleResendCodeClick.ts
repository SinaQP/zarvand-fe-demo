import Swal from 'sweetalert2';

const handleResendCodeClick = () => {
      const Toast = Swal.mixin({
            toast: true,
            width: '55rem',
            position: 'bottom',

            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
            },
      });
      Toast.fire({
            icon: 'success',
            title: 'کد با موفقیت برای شما ارسال شد.',
      });
};

export default handleResendCodeClick;
