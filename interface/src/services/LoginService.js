import swal from 'sweetalert';
import Api from './Api';

export default {
  //(POST): localhost:3000/api/v1/login
  async loginUser(user) {
    try {
      const response = await Api().post('/login', user);
      const { token } = response.data;
      localStorage.setItem('jwt', token);

      if (token) {
        swal({
          title: 'Sucesso!',
          text: 'Usuário(a) logado com sucesso!',
          icon: 'success',
        });
      }
    } catch (error) {
      swal({
        title: 'Erro!',
        text: 'Existe um erro!',
        icon: 'error',
      });
      this.$router.push('/');
    }
  },
};
