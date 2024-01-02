import { LayoutProps } from './index.interface';
import './scss/index.scss';

const Layout: React.FC<LayoutProps> = ({
  leftSideBar,
  children,
  header,
  rightSideBar,
  className,
  staticHeader,
}) => {
  return (
    <div className={`layoutWrapper ${className}`}>
      {rightSideBar ? (
        <section className="rightSideBarSection">{rightSideBar}</section>
      ) : (
        <></>
      )}
      <main className={`mainContentWrapper`}>
        {header ? (
          <header id="header-id" className={`headerSection`}>
            <div
              id="arrow-id"
              className={`arrow`}
              onClick={() => {
                (
                  document.getElementById('header-id') as HTMLElement
                ).classList.toggle('open');
                (
                  document.getElementById('arrow-id') as HTMLElement
                ).classList.toggle('close');
                (
                  document.getElementById('main-header-content') as HTMLElement
                ).classList.toggle('none');
              }}
            >
              <span className="span"></span>
              <span className="span"></span>
            </div>
            <div className={'none'} id="main-header-content">
              {header}
            </div>
          </header>
        ) : (
          <></>
        )}
        {staticHeader ? (
          <header id="header-id" className={`headerSection  isStatic `}>
            <div className={'isStatic'} id="main-header-content">
              {staticHeader}
            </div>
          </header>
        ) : (
          <></>
        )}
        <main className="mainWrapper">{children}</main>
      </main>
      {leftSideBar ? (
        <section className="leftSideBarSection">{leftSideBar}</section>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Layout;
