import { FC } from 'react';
import Button from '../button';
import NationalCodeForm from './nationalCodeForm';
import submitButtonOnClick from './submitButtonOnCilck';
import { useHistory } from 'react-router-dom';

const NationalCodePage: FC = () => {
      const history = useHistory();
      return (
            <div className="national-code-page">
                  <div className="national-code-page__wrapper">
                        <span className="national-code-page__title">
                              لطفا کد ملی خود را وارد کنید
                        </span>
                        <div className="national-code-page__input-wrapper">
                              <NationalCodeForm />
                        </div>
                        <Button
                              className="national-code-page__button"
                              onClick={() => submitButtonOnClick(history)}
                        >
                              ورود به برنامه
                        </Button>
                        <span className="national-code-page__caption">
                              شما میتوانید با واردکردن کدملی خود و ورود به
                              سامانه،
                              <br /> عوارض تمامی وسایل نقلیه متعلق به خود را
                              وارد کنید.
                        </span>
                  </div>
            </div>
      );
};

export default NationalCodePage;
