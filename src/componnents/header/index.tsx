import * as React from 'react';
import { useHistory } from 'react-router-dom';
import './scss/index.scss';

const Header: React.FC = (): JSX.Element => {
  const data = [
    {
      image: './pic/Rectangle 216.png',
      title: 'عوارض نوسازی ',
      address: '/renovation',
    },
    {
      image: './pic/Rectangle 334.png',
      title: 'عوارض مشاغل صنفی ',
      address: '/guild-jobs',
    },
    {
      image: './pic/Rectangle 333.png',
      title: 'عوارض مشاغل غیر صنفی ',
      address: '/non-union-jobs',
    }
  ];
  const history = useHistory();
  return (
    <div className="master">
      <ul className="header">
        {data.map((value) => {
          return (
            <li key={Math.random()}>
              <div
                onClick={() => {
                  history.push(`${value.address}`);
                }}
                className="link"
              >
                <img
                  src={require(`${value.image}`)}
                  alt="Header-items"
                  className="pic"
                />
                <p className="link">{value.title}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Header;
