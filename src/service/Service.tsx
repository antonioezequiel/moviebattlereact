import { IMovie } from 'interface/IMovie';
import { IUserToken } from 'interface/IUserToken';
import { IUsuario } from 'interface/IUsuario';
import { User } from 'interface/User';
import React from 'react';
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
  return await http.post<IUsuario>(`create/new-user`, { nome: login, senha })
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
  return await http.get<User[]>(`api/movieshow/ranking?page=${pagina}`)
    .then(resp => {
      //console.log(resp.data);
      return resp.data;
    })
    .catch(erro => {
      console.log(erro);
      return false;
    });
}

export async function logarUsuarioService(login: string, senha: string) {
  return await http.post<IUserToken>(`auth`, { login, senha })
    .then(resp => {
      return resp.data;
    })
    .catch(erro => {
      console.log(erro);
      return { token: '', tipo: '' };
    });
}

export async function iniciarPartidaService() {
  return await http.get<User>(`api/movieshow/iniciar`, {
        headers: {
          'Authorization':  `Bearer ${localStorage.getItem('token')}`
        }
      })
    .then(resp => {
      return resp.data;
    })
    .catch(erro => {
      console.log(erro);
      return {
        position: 0,
        title: '',
        year: 0,
        imdbId: 1,
        score: 0,
        foto: '',
        categoria: ''
      };
    });
}

export async function buscarMidiasService() {
  return await http.get<IMovie[]>(`api/movieshow/sortear`, {
        headers: {
          'Authorization':  `Bearer ${localStorage.getItem('token')}`
        }
      })
    .then(resp => {
      return resp.data;
    })
    .catch(erro => {
      console.log(erro);
      return {
        position: 0,
        title: '',
        year: 0,
        imdbId: 1,
        foto: '',
        categoria: ''
      };
    });
}

export async function jogarService(imdbId: number) {
  console.log(imdbId);
  return await http.post<User>(`api/movieshow/jogar`, {imdbID: imdbId}, {
        headers: {
          'Authorization':  `Bearer ${localStorage.getItem('token')}`
        }
      })
    .then(resp => {
      return resp.data;
    })
    .catch(erro => {
      console.log(erro);
      return {
        position: 0,
        title: '',
        year: 0,
        imdbId: 1,
        score: 0,
        foto: '',
        categoria: ''
      };
    });
}

export async function finalizarJogoService() {
  return await http.get<User>(`api/movieshow/finalizar`, {
        headers: {
          'Authorization':  `Bearer ${localStorage.getItem('token')}`
        }
      })
    .then(resp => {
      return resp.data;
    })
    .catch(erro => {
      console.log(erro);
      return {
        position: 0,
        title: '',
        year: 0,
        imdbId: 1,
        score: 0,
        foto: '',
        categoria: ''
      };
    });
}