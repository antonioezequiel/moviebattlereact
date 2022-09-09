import { IMovie } from 'interface/IMovie';
import { IUserToken } from 'interface/IUserToken';
import { IUsuario } from 'interface/IUsuario';
import { User } from 'interface/User';
import http from './index';

//export declare const BuscaRestaurantes: () => IRestaurante[];

/*export const buscaRestaurantes = async () => {
    const result = await http.get<IRestaurante[]>('restaurantes/')
        .then(resp => {
            return resp.data;
        })
        .catch(erro => {
            console.log(erro);
        });

    return result;
}

export async function apagaRestaurante(restauranteExcluir: IRestaurante) {
    return await http.delete<IRestaurante[]>(`restaurantes/${restauranteExcluir.id}/`)
      .then(resp => {
        return true;
      })
      .catch(erro => {
        console.log(erro);
        return false;
      });
}
*/

export async function cadastrarUsuarioService(login: string, senha: string) {
  return http.post<IUsuario>(`create/new-user`, { nome: login, senha })
    .then(resp => {
      return true;
    })
    .catch(erro => {
      console.log(erro);
      return false;
    });
}

export async function listarCampeoes(pagina: number) {
  console.log(`api/movieshow/ranking?page=${pagina}`);
  return http.get<User[]>(`api/movieshow/ranking?page=${pagina}`)
    .then(resp => {
      //console.log(resp.data);
      return resp.data;
    })
    .catch(erro => {
      console.log(erro);
    });
}

export async function logarUsuarioService(login: string, senha: string) {
  return http.post<IUserToken>(`auth`, { login, senha })
    .then(resp => {
      return resp.data;
    })
    .catch(erro => {
      throw new Error('Dados de acesso do usuário inválido');
    });
}

export async function iniciarPartidaService() {
  return http.get<User>(`api/movieshow/iniciar`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(resp => {
      return resp.data;
    })
    .catch(erro => {
      throw new Error('Não foi possível iniciar uma nova partida');
    });
}

export async function buscarMidiasService() {
  return http.get<IMovie[]>(`api/movieshow/sortear`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(resp => {
      return resp.data;
    })
    .catch(erro => {
      throw new Error('Não foi possível sortear as mídias');
    });
}

export async function jogarService(imdbId: number) {
  console.log(imdbId);
  return http.post<User>(`api/movieshow/jogar`, { imdbID: imdbId }, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(resp => {
      return resp.data;
    })
    .catch(erro => {
      console.log(erro);
      throw new Error('Não foi possível realizar a jogada');
    });
}

export async function finalizarJogoService() {
  return http.get<User>(`api/movieshow/finalizar`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(resp => {
      return resp.data;
    })
    .catch(erro => {
      console.log(erro);
      throw new Error('Não foi possível finalizar a partida');
    });
}