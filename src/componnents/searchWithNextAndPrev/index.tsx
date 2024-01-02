import Icon from '../../assets/images/mainSearchIcon.svg';
import convertNumberPersian from '../../utilities/convertNumberPersian';
import { PaginationDataEnterModel } from './index.interface';
import styles from './scss/index.module.scss';

const SearchWithNextAndPrev: React.FC<PaginationDataEnterModel> = ({
  paginationData,
  setPaginationData,
  setSearchClicked,
  disabled,
}) => {
  let { next, prev, masterId } = paginationData;
  return (
    <div
      className={`${styles.mainSearchWrapper} ${disabled && styles.disabled}`}
      title={disabled ? 'لطفا حالت ویرایش یا جدید را غیرفعال کنید' : ''}
    >
      <img
        src={Icon}
        alt="searching"
        onClick={() => {
          !disabled && setSearchClicked((pre) => !pre);
        }}
      />
      <div className={styles.paginationContainer}>
        <p>کدشناسایی</p>
        <p className={styles.pagination}>
          <span
            className={prev === null || disabled ? styles.disabled : ''}
            onClick={() => {
              if (prev && !disabled) {
                setPaginationData({
                  ...paginationData,
                  current: prev,
                });
              }
            }}
          >
            &lt;
          </span>
          <span>{convertNumberPersian(masterId?.toString())}</span>
          <span
            className={next === null || disabled ? styles.disabled : ''}
            onClick={() => {
              if (next && !disabled) {
                setPaginationData({ ...paginationData, current: next });
              }
            }}
          >
            &gt;
          </span>
        </p>
      </div>
    </div>
  );
};
export default SearchWithNextAndPrev;
