import {createAsyncThunk} from '@reduxjs/toolkit';
import {State} from '../types/state.ts';
import {APIRoute} from '../consts';
import {Auth} from '../types/auth.ts';
import {UserTypes} from '../types/user-types.ts';
import {FimlType} from '../types/film.ts';
import {AxiosInstance} from 'axios';
import {Review} from '../types/review-type.ts';

export const fetchFilmsAction = createAsyncThunk<FimlType[], undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms', async (_arg, { extra: api }) => {
    const {data} = await api.get<FimlType[]>('/films');
    return data;
  });

export const checkAuthAction = createAsyncThunk<UserTypes, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth', async (_arg, { extra: api }) => {
    const {data} = await api.get<UserTypes>(APIRoute.LOGIN);
    return data;
  });

export const loginAction = createAsyncThunk<UserTypes, Auth, {
  state: State;
  extra: AxiosInstance;
}>(
  'login', async ({email, password}, { extra: api }) => {
    const { data} = await api.post<UserTypes>(APIRoute.LOGIN, {email, password});
    return data;
  });

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'logout', async (_arg, { extra: api }) => {
    await api.delete(APIRoute.LOGOUT);
  });

export const getPromoFilm = createAsyncThunk<FimlType, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'fetchPromoFilm', async (_arg, { extra: api }) => {
    const { data } = await api.get<FimlType>(APIRoute.PROMO);
    return data;
  });

export const getFilm = createAsyncThunk<FimlType, string, {
  state: State;
  extra: AxiosInstance;
}>(
  'getFilm', async (filmId: string, { extra: api }) => {
    const { data } = await api.get<FimlType>(`${APIRoute.FILMS}/${filmId}`);
    return data;
  });

export const getSimilarFilms = createAsyncThunk<FimlType[], string, {
  state: State;
  extra: AxiosInstance;
}>(
  'getSimilarFilms', async (filmId: string, { extra: api }) => {
    const { data } = await api.get<FimlType[]>(
      `${APIRoute.FILMS}/${filmId}${APIRoute.SIMILAR}`
    );
    return data;
  });

export const getFilmReviews = createAsyncThunk<Review[], string, {
  state: State;
  extra: AxiosInstance;
}>(
  'getFilmReviews', async (filmId: string, { extra: api }) => {
    const { data } = await api.get<Review[]>(
      `${APIRoute.COMMENTS}/${filmId}`
    );
    return data;
  });

export const postFilmReview = createAsyncThunk<void, {
  id: number;
  comment: string;
  rating: number;
},
{
  state: State;
  extra: AxiosInstance;
}
>(
  'data/postCommentById',
  async ({ id, comment, rating }, { extra: api }) => {
    await api.post<Review[]>(`${APIRoute.COMMENTS}/${id}`, {comment, rating});
  });

export const fetchFavoriteFilms = createAsyncThunk<FimlType[], undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavoriteFilms', async (_arg, { extra: api }) => {
    const { data } = await api.get<FimlType[]>(APIRoute.FAVORITE);
    return data;
  });

export const changeFilmFavoriteStatus = createAsyncThunk<FimlType, {
  filmId: number;
  status: number;
}, {
  state: State;
  extra: AxiosInstance;
}>(
  'changeFilmFavoriteStatus', async ({ filmId: id, status: isFavorite }, { extra: api }) => {
    const { data } = await api.post<FimlType>(`${APIRoute.FAVORITE}/${id}/${isFavorite}`);
    return data;
  });

export const changePromoFavoriteStatus = createAsyncThunk<FimlType, {
  filmId: number;
  status: number;
}, {
  state: State;
  extra: AxiosInstance;
}>(
  'changePromoFavoriteStatus', async ({ filmId: id, status: isFavorite }, { extra: api }) => {
    const { data } = await api.post<FimlType>(`${APIRoute.FAVORITE}/${id}/${isFavorite}`);
    return data;
  });
