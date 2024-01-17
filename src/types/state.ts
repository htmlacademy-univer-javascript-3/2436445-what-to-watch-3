import {store} from '../store';
import {FimlType} from './film.ts';
import {AuthorizationStatus} from '../consts';
import {Review} from './review-type.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppState = {
  films: FimlType[];
  dataIsLoading: boolean;
  promo: FimlType | null;
  currentGenre: string;
  filteredFilms: FimlType[];
  favoriteFilms: FimlType[];
  favoriteFilmsLength: number;
  shownCount: number;
}

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  avatar: string | null;
}

export type FilmState = {
  film: FimlType | null;
  comments: Review[];
  similarFilms: FimlType[];
}
