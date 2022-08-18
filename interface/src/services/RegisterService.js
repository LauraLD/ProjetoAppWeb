import swal from 'sweetalert';
import Api from './Api';

export default {
  // (POST): localhost:3000/api/v1/register
  async registerNewUser(newUser) {
    try {
      const response = await Api().post('/register', newUser);
      const { token } = response.data;

      if (token) {
        localStorage.setItem('jwt', token);
        swal({
          title: 'Excelente!',
          text: 'Usuário(a) cadastrado com sucesso!',
          icon: 'success',
        });
      }
    } catch (error) {
      swal({
        title: 'Erro!',
        text: 'Existe um erro!',
        icon: 'error',
      });
    }
  },
};
