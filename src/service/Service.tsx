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

export async function listarCampeoes(pagina: string) {
  return await http.get<User[]>(`api/movieshow/ranking?page=${pagina}`)
    .then(resp => {
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

export async function buscarMidiasService() {
  return await http.get<IMovie[]>(`api/movieshow/sortear`, {
        headers: {
          'Authorization':  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqb2dvIGRlIGZpbG1lc…kzNn0.ObOSmv3EteeQJ_j9p6C4sHqTExlo4MI6xGE-cov6Crc',
          'Content-Type': 'application/json',
          'x-api-key': 'key',
          'x-api-secret': 'key',
          "Accept": "application/json"
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