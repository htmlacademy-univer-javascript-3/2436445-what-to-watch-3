import {FimlType} from '../../types/film.ts';
import {useState} from 'react';
import {Tab} from '../../consts';
import OverviewTab from './overview-tab';
import DetailsTab from './details-tab';
import ReviewsTab from './reviews-tab';

type TabsProps = {
  film: FimlType;
};

function Tabs(props: TabsProps): JSX.Element {
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.OVERVIEW);
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
          <li className={`film-nav__item ${currentTab === Tab.OVERVIEW && 'film-nav__item--active'}`}>
            <a href="#overviews" className="film-nav__link" data-testid='overview-tab' onClick={
              (evt) => {
                evt.preventDefault();
                setCurrentTab(Tab.OVERVIEW);
              }
            }
            >
              {Tab.OVERVIEW}
            </a>
          </li>
          {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
          <li className={`film-nav__item ${currentTab === Tab.DETAILS && 'film-nav__item--active'}`}>
            <a href="#details" className="film-nav__link" data-testid='details-tab' onClick={
              (evt) => {
                evt.preventDefault();
                setCurrentTab(Tab.DETAILS);
              }
            }
            >
              {Tab.DETAILS}
            </a>
          </li>
          {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
          <li className={`film-nav__item ${currentTab === Tab.REVIEWS && 'film-nav__item--active'}`}>
            <a href="#reviews" className="film-nav__link" data-testid='reviews-tab' onClick={
              (evt) => {
                evt.preventDefault();
                setCurrentTab(Tab.REVIEWS);
              }
            }
            >
              {Tab.REVIEWS}
            </a>
          </li>
        </ul>
      </nav>
      {currentTab === Tab.OVERVIEW && <OverviewTab film={props.film} />}
      {currentTab === Tab.DETAILS && <DetailsTab film={props.film} />}
      {currentTab === Tab.REVIEWS && <ReviewsTab />}
    </div>
  );
}

export default Tabs;
