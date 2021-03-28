// libs
// src
import { Link } from 'react-router-dom';
import './ThemeItem.scss';

function ThemeItem({
  theme
}) {
  if(!theme) return null;

  return (
    <div>
      <div className="theme-card">
          <Link to={`/product/${theme.key}/`}>
              <img src={theme.imageSrc} alt="" />
          </Link>
          <a rel="noreferrer" className="theme-card overlay" target="_blank" href={theme.previewLink}>Live preview</a>
      </div>
      <div className="theme-card__footer">
          <div className="theme-card__footer__item">
            <Link to={`/product/${theme.key}/`}>{theme.name}</Link>
              <p className="theme-card__info"></p>
              <ul className="prod_cats_list">
                <li>
                  <Link to={`/product-category/${theme.categoryKey}/`}>{theme.categoryName}</Link>
                </li>
              </ul>
          </div>
          <div className="theme-card__footer__item">
              <p className="theme-card__price">
                <span className="amount">
                  <span className="price-currency">$</span>
                  49.00
                </span>
              </p>
              <ul className="rating">
                <li className="rating__item rating__item--active"></li>
                <li className="rating__item rating__item--active"></li>
                <li className="rating__item rating__item--active"></li>
                <li className="rating__item rating__item--active"></li>
                <li className="rating__item rating__item--active"></li>
              </ul>
          </div>
      </div>
    </div>
  );
}

export default ThemeItem;
