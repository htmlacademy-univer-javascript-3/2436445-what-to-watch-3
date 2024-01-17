import {Fragment} from 'react';
import {FimlType} from '../../types/film.ts';

type OverviewTabProps = {
  film: FimlType;
}

enum Rating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'VeryGood',
  Awesome = 'Awesome'
}
function getRatingLevel(rating: number): string {
  if (rating < 3) {
    return Rating.Bad;
  }
  if (rating < 5) {
    return Rating.Normal;
  }
  if (rating < 8) {
    return Rating.Good;
  }
  if (rating < 10) {
    return Rating.VeryGood;
  }
  return Rating.Awesome;
}
function OverviewTab(props: OverviewTabProps): JSX.Element {
  const {film} = props;
  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>
          {film.description}
        </p>
        <p className="film-card__director">
          <strong>Director: {film.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>Starring: {film.starring.join(', ')} and other</strong>
        </p>
      </div>
    </Fragment>
  );
}

export default OverviewTab;


