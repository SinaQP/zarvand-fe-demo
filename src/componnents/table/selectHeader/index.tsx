import { useEffect, useState } from 'react';
import { OptionSelectBoxProps, SelectHeaderProps } from './index.interface';
import styles from './scss/index.module.scss';
import useWindowDimensions from '../../../utilities/getWindowsDimensions';

const SelectHeader: React.FC<SelectHeaderProps> = (props) => {
  const {
    element,
    kindOfColumn,
    newData,
    setNewData,
    data,
    setAllFieldEditData,
    isFromBody,
    allFieldEditData,
    index,
  } = props;
  let { height } = useWindowDimensions();
  const [searchValue, setSearchValue] = useState('');
  const [focus, setFocus] = useState<{
    isOpen: boolean;
    event: React.FocusEvent<HTMLInputElement, Element> | null;
  }>({
    isOpen: false,
    event: null,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOptionHeaderClick = (option: OptionSelectBoxProps) => {
    if (
      (data && data[element] && option.value === data[element]?.toString()) ||
      !option.value.length
    ) {
      let tempD = newData;
      delete tempD[element];
      if (kindOfColumn) {
        let relation = kindOfColumn.filter((kind) => kind.key === element)[0]
          ?.relation;
        relation?.forEach((elementLoop) => {
          delete tempD?.[elementLoop.name];
        });
      }
      setNewData({
        ...tempD,
      });
    } else {
      let tempNewData = {
        ...newData,
        [element]: option,
      };
      if (kindOfColumn) {
        let relation = kindOfColumn.filter((kind) => kind.key === element)[0]
          ?.relation;
        relation?.forEach((elementLoop) => {
          let temp = kindOfColumn
            .find((kind) => kind.key === element)
            ?.selectOption?.find((op) => op.id === option.id)![
            elementLoop.valueKey
          ];
          tempNewData = {
            ...tempNewData,
            [elementLoop.name]: temp,
          };
        });
      }
      setNewData({ ...tempNewData });
      setFocus((prevStyle) => ({
        ...prevStyle,
        isOpen: false,
      }));
      setSearchValue('');
    }
  };
  const handleOptionBodyClick = (option: OptionSelectBoxProps) => {
    // setSearchValue(option.value);
    let kindTemp = kindOfColumn?.filter((kind) => kind.key === element)[0];
    let relation = kindTemp?.relation;

    let temp = [...allFieldEditData];
    let tempR = {
      ...allFieldEditData[index],
      [element.toString()]: option.id,
    };
    relation?.forEach((element) => {
      tempR = {
        ...tempR,
        [element?.name]: option[element?.valueKey],
      };
    });
    let tempD = temp
      .slice(0, index)
      .concat([{ ...tempR }])
      .concat(temp.slice(index + 1));
    setAllFieldEditData && setAllFieldEditData([...tempD]);
    setSearchValue('');
    setFocus((prevStyle) => ({
      ...prevStyle,
      isOpen: false,
    }));
  };
  const filteredOptions = kindOfColumn
    ?.filter((kind) => kind.key === element)[0]
    ?.selectOption?.filter((option) =>
      option.value.toLowerCase().includes(searchValue.toLowerCase()),
    );

  const setStyleProperty = () => {
    let selectElement = document.getElementById(
      `${isFromBody ? 'body' : 'head'}-${element?.toString()}-${index}`,
    );
    let inputSearch = document.getElementById(
      `input-${
        isFromBody ? 'body' : 'head'
      }-search-${element?.toString()}-${index}`,
    );
    if (selectElement && inputSearch) {
      const { top: t } = inputSearch.getBoundingClientRect();
      selectElement.style.width = `${inputSearch.clientWidth}px`;
      if (t + 46 + 150 < height) {
        selectElement.style.top = `calc(${t}px + ${4.2}rem)`;
      } else {
        selectElement.style.top = `calc(${t}px - ${
          filteredOptions && filteredOptions?.length < 4
            ? filteredOptions.length * 4.2
            : 15.2
        }rem)`;
      }
    }
  };
  const findPlaceHolder = () => {
    let temp: any = '';
    if (!isFromBody) {
      temp =
        data && !newData[element] && typeof data[element] === 'number'
          ? kindOfColumn
              ?.filter((kind) => kind.key === element)[0]
              ?.selectOption?.filter((item) => item.id === data?.[element])[0]
              ?.value
          : data && !newData[element]
          ? data[element]
          : newData[element] !== undefined &&
            typeof newData[element] !== 'number'
          ? newData[element].value
          : newData[element] !== undefined &&
            typeof newData[element] === 'number'
          ? kindOfColumn
              ?.filter((kind) => kind.key === element)[0]
              ?.selectOption?.filter(
                (item) => item.id === +newData?.[element],
              )[0]?.value
          : '';
    } else {
      if (typeof allFieldEditData?.[index]?.[element] === 'object') {
        temp = allFieldEditData ? allFieldEditData[index][element].value : '';
      } else if (typeof allFieldEditData?.[index]?.[element] === 'number') {
        temp = kindOfColumn
          ?.filter((kind) => kind.key === element)[0]
          ?.selectOption?.filter(
            (item) => item.id === allFieldEditData?.[index]?.[element],
          )[0]?.value;
      } else {
        temp = allFieldEditData ? allFieldEditData?.[index]?.[element] : '';
      }
    }
    return temp;
  };

  useEffect(() => {
    focus.isOpen && setStyleProperty();
  }, [focus.isOpen]);
  return (
    <div
      id={`container-${
        isFromBody ? 'body' : 'head'
      }-search-${element?.toString()}-${index}`}
      className={styles['searchableSelectBoxContainer']}
    >
      <div className={styles['innerContainer']}>
        <input
          id={`input-${
            isFromBody ? 'body' : 'head'
          }-search-${element?.toString()}-${index}`}
          className={styles['searchInput']}
          value={searchValue}
          onChange={handleInputChange}
          onFocus={(e) => {
            let temp = document.querySelectorAll('div');
            temp.forEach((element) => {
              if (element.className.indexOf('tableWrapper') !== -1) {
                element.classList.add('disabled');
              }
            });
            if (e.currentTarget) {
              setFocus((prevStyle) => ({
                ...prevStyle,
                isOpen: true,
                event: e,
              }));
            }
          }}
          onBlur={(e) => {
            let temp = document.querySelectorAll('div');
            temp.forEach((element) => {
              if (element.className.indexOf('tableWrapper') !== -1) {
                element.classList.remove('disabled');
              }
            });
            setFocus((prevStyle) => ({
              ...prevStyle,
              isOpen: false,
            }));
            setSearchValue('');
          }}
          placeholder={findPlaceHolder()}
        />
        <span
          className={`${styles[`iconStyle`]} ${focus.isOpen && styles['open']}`}
        ></span>
      </div>
      {focus.isOpen && (
        <ul
          className={styles['listContainer']}
          id={`${isFromBody ? 'body' : 'head'}-${element?.toString()}-${index}`}
        >
          {filteredOptions?.map((option) => (
            <li
              key={option.id}
              onMouseDown={() => {
                isFromBody
                  ? handleOptionBodyClick(option)
                  : handleOptionHeaderClick(option);
              }}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectHeader;
function getWindowDimensions(): { height: any } {
  throw new Error('Function not implemented.');
}
