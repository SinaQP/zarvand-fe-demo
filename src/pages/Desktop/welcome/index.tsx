import Button from '../../../containers/desktop/button';
import Layout from '../../../containers/desktop/layout';

const Welcome = () => {
      return (
            <Layout>
                  <div className="welcome">
                        <div className="welcome__information">
                              <span>شهروند گرامی</span>
                              <span>
                                    به سامانه پرداخت عوارض شهرداری زرندخوش
                                    آمدید.
                              </span>
                              <span>
                                    لطفا به جهت پرداخت عوارض مد نظر خود یکی از
                                    موارد زیر را انتخاب کنید.
                              </span>
                        </div>

                        {/* <div className="welcome__buttons">
                            <Button className='welcome__button welcome__active-button'>عوارض کسب پیشه</Button>
                            <Button className='welcome__button welcome__outline-button'>عوارض نوسازی</Button>
                        </div> */}
                  </div>
            </Layout>
      );
};

export default Welcome;
