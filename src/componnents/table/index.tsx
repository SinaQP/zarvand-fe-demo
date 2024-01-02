import THead from './header';
import { TableProps } from './index.interface';
import Tr from './row';
import styles from './scss/index.module.scss';
import Th from './headerDetail';
import Tbody from './body';
import Td from './tableDetail';
import PlusIcon from './img/plusTableIcon.svg';
import IsOpenModal from './img/linkOpenModalIcon.svg';
import Editicon from './img/greenEditIconTable.svg';
import MarkIcon from './img/markIconTable.svg';
import UnMarkIcon from './img/unMarkIconShowTable.svg';
import DeleteIcon from './img/deleteTableIcon.svg';
import CancelIcon from './img/cancelTableIcon.svg';
import EnterIcon from './img/enterTableIcon.svg';
import EnterIconDisabled from './img/enterIconTableDisabled.svg';
import { useState } from 'react';
import React from 'react';
import Swal from 'sweetalert2';
import ModalDangerIcon from '../../assets/images/modal_danger_icon.svg';
import convertNumberPersian from '../../utilities/convertNumberPersian';
import SelectHeader from './selectHeader';

const Table: React.FC<TableProps> = ({
  children,
  classname,
  style,
  headerTitels,
  widths,
  bodyValue,
  hasCreateButton,
  canDelete,
  canEdit,
  setData,
  externalNewClick,
  data,
  skipKey,
  kindOfColumn,
  setOpenModal,
  requairField,
  allFieldEditable,
  allFieldEditData,
  setAllFieldEditData,
  idName,
  setCreateButtonClicked,
}) => {
  const [newData, setNewData] = useState<any>();
  const existKey = headerTitels
    ? headerTitels
        .map((value) => value.key)
        .filter((lastValue) => !skipKey?.includes(lastValue))
    : bodyValue && bodyValue.length
    ? (Object.keys(bodyValue[0]) as Array<keyof (typeof bodyValue)[0]>).filter(
        (element) => !skipKey?.includes(element?.toString()),
      )
    : [];
  let defaultWidth =
    100 / (canDelete || canEdit ? existKey.length + 1 : existKey.length);
  const [newClicked, setNewClicked] = useState<boolean>(
    externalNewClick ? externalNewClick : false,
  );
  const [editIndex, setEditIndex] = useState<number>(-1);

  return (
    <div
      className={`${styles['tableWrapper']} ${
        hasCreateButton && newClicked && styles['disabled']
      }`}
    >
      <table
        className={`${styles['tableContainer']} ${classname}`}
        style={style}
      >
        <THead>
          {headerTitels ? (
            <Tr className="header">
              {headerTitels
                .filter((exist) => !skipKey?.includes(exist.key))
                .map((value) => {
                  return (
                    <Th
                      key={value.key}
                      style={{
                        width: `${
                          widths
                            ? widths.filter(
                                (widthkey) => widthkey.key === value.key,
                              )[0].value
                            : defaultWidth + '%'
                        }`,
                      }}
                    >
                      {value.value}
                    </Th>
                  );
                })}
              {canDelete || canEdit || setOpenModal ? (
                <Th
                  style={{
                    width: `${
                      widths
                        ? widths.filter(
                            (widthkey) => widthkey.key === 'operation',
                          )[0]?.value
                        : defaultWidth + '%'
                    }`,
                  }}
                >
                  عملیات
                </Th>
              ) : (
                <></>
              )}
            </Tr>
          ) : (
            <></>
          )}
          {hasCreateButton && !newClicked ? (
            <Tr
              className="createButton"
              onClick={() => {
                setNewData({
                  ...newData,
                  operation: 'new',
                });
                setNewClicked(true);
                setCreateButtonClicked !== undefined &&
                  setCreateButtonClicked(true);
              }}
            >
              <Th>
                <img width={30} height={30} src={PlusIcon} alt="plus icon" />
              </Th>
            </Tr>
          ) : hasCreateButton && newClicked ? (
            <Tr className="editCreateRowStyles">
              {existKey &&
                existKey.map((element, index) => {
                  return (
                    <Th
                      key={index}
                      className={
                        // allFieldEditable && index === existKey.length - 1
                        // ?
                        'operation'
                        // : ''
                      }
                      style={{
                        width: `${
                          widths
                            ? widths.filter(
                                (widthkey) => widthkey.key === element,
                              )[0].value
                            : defaultWidth + '%'
                        }`,
                      }}
                    >
                      {kindOfColumn &&
                      kindOfColumn.filter((kind) => kind.key === element)[0]
                        ?.value === 'boolean' ? (
                        <label>
                          <input
                            defaultChecked={data && data[element]}
                            name={element?.toString()}
                            type="checkbox"
                            onChange={(e) => {
                              if (
                                data &&
                                e.currentTarget.checked === data[element]
                                // ||
                                // !e.currentTarget.checked
                              ) {
                                let tempD = newData;
                                delete tempD[element];
                                setNewData({
                                  ...tempD,
                                });
                              } else {
                                setNewData({
                                  ...newData,
                                  [element]: e.currentTarget.checked,
                                });
                              }
                            }}
                          />
                          <p>
                            {headerTitels
                              ? headerTitels[
                                  headerTitels.findIndex(
                                    (value) => value.key === element,
                                  )
                                ].value
                              : element?.toString()}
                          </p>
                        </label>
                      ) : kindOfColumn &&
                        kindOfColumn.filter(
                          (kind, index) => kind.key === element,
                        )[0]?.value === 'select' ? (
                        <SelectHeader
                          data={data}
                          element={element}
                          headerTitels={headerTitels}
                          kindOfColumn={kindOfColumn}
                          newData={newData}
                          setNewData={setNewData}
                          index={-1}
                          idName={idName}
                          setAllFieldEditData={setAllFieldEditData}
                        />
                      ) : kindOfColumn &&
                        kindOfColumn.filter((kind) => kind.key === element)[0]
                          ?.value === 'row' ? null : (
                        <input
                          id={`${element?.toString()}`}
                          type={
                            kindOfColumn &&
                            kindOfColumn.filter(
                              (kind) => kind.key === element,
                            )[0]?.value === 'number'
                              ? 'number'
                              : 'text'
                          }
                          min={
                            kindOfColumn &&
                            kindOfColumn.filter(
                              (kind) => kind.key === element,
                            )[0]?.minValue
                              ? kindOfColumn.filter(
                                  (kind) => kind.key === element,
                                )[0]?.minValue
                              : -Infinity
                          }
                          max={
                            kindOfColumn &&
                            kindOfColumn.filter(
                              (kind) => kind.key === element,
                            )[0]?.maxValue
                              ? kindOfColumn.filter(
                                  (kind) => kind.key === element,
                                )[0]?.maxValue
                              : Infinity
                          }
                          disabled={
                            headerTitels
                              ? headerTitels[
                                  headerTitels.findIndex(
                                    (value) => value.key === element,
                                  )
                                ].disabled
                              : // && (newData['operation'] === 'edit' || )
                                false
                          }
                          placeholder={
                            newData && newData[element] !== undefined
                              ? newData[element]
                              : data && data[element] !== undefined
                              ? data[element]
                              : headerTitels
                              ? headerTitels[
                                  headerTitels.findIndex(
                                    (value) => value.key === element,
                                  )
                                ].value
                              : element?.toString()
                          }
                          // value={
                          //   newData && newData[element] !== undefined
                          //     ? newData[element]
                          //     : data && data[element] !== undefined
                          //     ? data[element]
                          //     : ''
                          // }
                          onChange={(e) => {
                            let tempNewData = {
                              ...newData,
                              [element]:
                                kindOfColumn &&
                                kindOfColumn.filter(
                                  (kind) => kind.key === element,
                                )[0]?.value === 'number'
                                  ? +e.currentTarget.value
                                  : e.currentTarget.value,
                            };
                            if (e.currentTarget.value.length) {
                              if (kindOfColumn) {
                                const findElement = kindOfColumn
                                  .filter((KF) => KF.relation)
                                  .find(
                                    (item) =>
                                      item.relation &&
                                      item.relation.some(
                                        (rel) => rel.name === element,
                                      ),
                                  );
                                if (findElement) {
                                  let tempEle = findElement.relation?.find(
                                    (ele) => ele.name === element,
                                  );
                                  if (tempEle !== undefined) {
                                    let tempSelectFind =
                                      findElement.selectOption?.find(
                                        (sel) =>
                                          (sel?.[
                                            tempEle!.valueKey
                                          ]).toString() ===
                                          e.currentTarget.value,
                                      );
                                    if (tempSelectFind) {
                                      tempNewData = {
                                        ...tempNewData,
                                        [findElement.key]: +tempSelectFind.id,
                                      };
                                    } else {
                                      delete tempNewData[findElement.key];
                                    }
                                    findElement.relation &&
                                      findElement.relation?.forEach(
                                        (TempElement) => {
                                          if (TempElement.name !== element) {
                                            if (tempSelectFind) {
                                              tempNewData = {
                                                ...tempNewData,
                                                [TempElement.name]:
                                                  tempSelectFind![
                                                    TempElement.valueKey
                                                  ],
                                              };
                                            } else {
                                              delete tempNewData[
                                                TempElement.name
                                              ];
                                            }
                                          }
                                        },
                                      );
                                  }
                                }
                              }
                              setNewData({
                                ...tempNewData,
                              });
                            } else {
                              let tempD = newData;
                              delete tempD[element];
                              if (kindOfColumn) {
                                const findElement = kindOfColumn
                                  .filter((KF) => KF.relation)
                                  .find(
                                    (item) =>
                                      item.relation &&
                                      item.relation.some(
                                        (rel) => rel.name === element,
                                      ),
                                  );
                                if (findElement?.relation) {
                                  findElement.relation?.forEach(
                                    (elementTemp) => {
                                      delete tempD[elementTemp.name];
                                    },
                                  );
                                  delete tempD[findElement.key];
                                }
                              }
                              setNewData({
                                ...tempD,
                              });
                            }
                          }}
                        ></input>
                      )}
                    </Th>
                  );
                })}
              <Th
                style={{
                  width: `${
                    widths
                      ? widths.filter(
                          (widthkey) => widthkey.key === 'operation',
                        )[0]?.value
                      : defaultWidth + '%'
                  }`,
                }}
                className={'operation'}
              >
                <img
                  width={30}
                  height={30}
                  src={
                    (Object.values(newData) as Array<keyof string>).length > 1
                      ? EnterIcon
                      : EnterIconDisabled
                  }
                  alt="enter icon"
                  onClick={() => {
                    let temp = Object.keys(newData) as Array<keyof string>;
                    let emptyString = '';
                    requairField &&
                      requairField?.forEach((element) => {
                        if (
                          !temp?.filter(
                            (value) => value === element.englishName,
                          ).length &&
                          newData['operation'] === 'new'
                        ) {
                          emptyString += element.persianName + ', ';
                        }
                      });
                    if (emptyString.replaceAll(',', '').trim().length) {
                      Swal.fire({
                        title: '',
                        text: `فیلدهای (${emptyString}) باید دارای مقدار باشند`,
                        imageUrl: ModalDangerIcon,
                        imageWidth: 90,
                        imageHeight: 90,
                        cancelButtonText: 'بستن',
                        showCancelButton: true,
                        showConfirmButton: false,
                      });
                    } else if (
                      (Object.values(newData) as Array<keyof string>).length > 1
                    ) {
                      !setAllFieldEditData &&
                        setData &&
                        setData({ ...newData, enterButton: true });
                      setAllFieldEditData && setData && setData(undefined);
                      setAllFieldEditData &&
                        setAllFieldEditData([
                          ...allFieldEditData,
                          { ...newData },
                        ]);
                      setNewData(undefined);
                      setNewClicked(false);
                    }
                    setCreateButtonClicked !== undefined &&
                      setCreateButtonClicked(false);
                  }}
                />
                <img
                  width={20}
                  height={20}
                  src={CancelIcon}
                  alt="cancel icon"
                  onClick={() => {
                    setData && setData(undefined);
                    setNewData(undefined);
                    setNewClicked(false);
                    setCreateButtonClicked !== undefined &&
                      setCreateButtonClicked(false);
                  }}
                />
              </Th>
            </Tr>
          ) : (
            <></>
          )}
        </THead>

        {bodyValue && bodyValue.length ? (
          <Tbody className={`${hasCreateButton && newClicked && 'disabled'}`}>
            <Tr
              className={`${
                hasCreateButton && newClicked ? 'disabled' : 'none'
              }`}
            ></Tr>
            {bodyValue.map((value, index) => {
              if (!allFieldEditable) {
                return (
                  <Tr key={index}>
                    {existKey.map((key, tdIndex) => {
                      return (
                        <Td
                          style={{
                            width: `${
                              widths
                                ? widths.filter(
                                    (widthkey) => widthkey.key === key,
                                  )[0].value
                                : defaultWidth + '%'
                            }`,
                          }}
                          key={tdIndex}
                        >
                          {kindOfColumn &&
                          kindOfColumn.filter((kind) => kind.key === key)[0]
                            ?.value === 'boolean' ? (
                            <img
                              width={20}
                              height={20}
                              src={value[key] ? MarkIcon : UnMarkIcon}
                              alt="cancel icon"
                            />
                          ) : kindOfColumn &&
                            kindOfColumn.filter((kind) => kind.key === key)[0]
                              ?.value === 'row' ? (
                            convertNumberPersian((index + 1)?.toString())
                          ) : kindOfColumn &&
                            kindOfColumn.filter((kind) => kind.key === key)[0]
                              ?.value === 'select' &&
                            allFieldEditData ? (
                            convertNumberPersian(
                              kindOfColumn
                                .filter((kind) => kind.key === key)[0]
                                .selectOption?.filter(
                                  (selectItem) =>
                                    selectItem.id ===
                                      allFieldEditData[index][key] ||
                                    selectItem.value ===
                                      allFieldEditData[index][key],
                                )[0]
                                ?.value?.toString() || '',
                            )
                          ) : //     (
                          // kindOfColumn.filter((kind) => kind.key === key)[0]
                          //   .selectOption.find(
                          // (selectItem) =>

                          // )
                          // )
                          // )[0]?.value
                          value[key] !== null &&
                            value[key] !== undefined &&
                            value[key]?.toString().length > 0 ? (
                            convertNumberPersian(value[key]?.toString())
                          ) : (
                            '-'
                          )}
                        </Td>
                      );
                    })}
                    {(canDelete || canEdit || setOpenModal) &&
                    !allFieldEditable ? (
                      <Td
                        style={{
                          width: `${
                            widths
                              ? widths.filter(
                                  (widthkey) => widthkey.key === 'operation',
                                )[0]?.value
                              : defaultWidth + '%'
                          }`,
                        }}
                        className={'operation'}
                      >
                        {setOpenModal && (
                          <img
                            width={30}
                            src={IsOpenModal}
                            alt="open modal icon"
                            onClick={() => {
                              setOpenModal(value);
                            }}
                          />
                        )}
                        {canEdit && (
                          <img
                            width={30}
                            src={Editicon}
                            alt="edit icon"
                            onClick={() => {
                              setNewData({
                                ...newData,
                                operation: 'edit',
                                id: value.id,
                              });
                              setData &&
                                setData({
                                  ...value,
                                  operation: 'edit',
                                });
                              setNewClicked(true);
                              setEditIndex(index !== editIndex ? index : -1);
                            }}
                          />
                        )}
                        {canDelete && (
                          <img
                            width={30}
                            src={DeleteIcon}
                            alt="delete icon"
                            onClick={() => {
                              setData &&
                                setData({
                                  ...value,
                                  operation: 'delete',
                                });
                              setEditIndex(index !== editIndex ? index : -1);
                            }}
                          />
                        )}
                      </Td>
                    ) : (
                      <></>
                    )}
                  </Tr>
                );
              } else {
                return (
                  <Tr key={index}>
                    {existKey.map((key, tdIndex) => {
                      return (
                        <Td
                          style={{
                            width: `${
                              widths
                                ? widths.filter(
                                    (widthkey) => widthkey.key === key,
                                  )[0].value
                                : defaultWidth + '%'
                            }`,
                          }}
                          key={tdIndex}
                        >
                          {kindOfColumn &&
                          kindOfColumn.filter((kind) => kind.key === key)[0]
                            ?.value === 'boolean' ? (
                            <label>
                              <input
                                defaultChecked={value[key]}
                                name={value[key]?.toString()}
                                type="checkbox"
                                onChange={(e) => {
                                  let tempD = allFieldEditData.map(
                                    (temp: any) =>
                                      temp[`${idName}`] === value[`${idName}`]
                                        ? {
                                            ...temp,
                                            [key?.toString()]: !temp[key],
                                          }
                                        : temp,
                                  );
                                  setAllFieldEditData &&
                                    setAllFieldEditData([...tempD]);
                                }}
                              />
                            </label>
                          ) : kindOfColumn &&
                            kindOfColumn.filter((kind) => kind.key === key)[0]
                              ?.value === 'row' ? (
                            convertNumberPersian((index + 1)?.toString())
                          ) : kindOfColumn &&
                            kindOfColumn.filter((kind) => kind.key === key)[0]
                              ?.value === 'select' ? (
                            <SelectHeader
                              data={data}
                              element={key}
                              headerTitels={headerTitels}
                              kindOfColumn={kindOfColumn}
                              newData={newData}
                              setNewData={setNewData}
                              allFieldEditData={allFieldEditData}
                              index={index}
                              idName={idName}
                              setAllFieldEditData={setAllFieldEditData}
                              isFromBody={true}
                            />
                          ) : (
                            <input
                              id={`${value[key]?.toString()}`}
                              type={
                                kindOfColumn &&
                                kindOfColumn.filter(
                                  (kind) => kind.key === key,
                                )[0]?.value === 'number'
                                  ? 'number'
                                  : 'text'
                              }
                              disabled={
                                headerTitels
                                  ? headerTitels[
                                      headerTitels.findIndex(
                                        (value) => value.key === key,
                                      )
                                    ].disabled
                                  : // && (newData['operation'] === 'edit' || )
                                    false
                              }
                              min={
                                kindOfColumn &&
                                kindOfColumn.filter(
                                  (kind) => kind.key === key,
                                )[0]?.minValue
                                  ? kindOfColumn.filter(
                                      (kind) => kind.key === key,
                                    )[0]?.minValue
                                  : -Infinity
                              }
                              max={
                                kindOfColumn &&
                                kindOfColumn.filter(
                                  (kind) => kind.key === key,
                                )[0]?.maxValue
                                  ? kindOfColumn.filter(
                                      (kind) => kind.key === key,
                                    )[0]?.maxValue
                                  : Infinity
                              }
                              placeholder={value[key]}
                              // value={
                              //   allFieldEditData && !data
                              //     ? allFieldEditData[index][key]
                              //     : ''
                              // }
                              onChange={(e) => {
                                let convertValue =
                                  kindOfColumn &&
                                  kindOfColumn.filter(
                                    (kind) => kind.key === key,
                                  )[0]?.value === 'number' &&
                                  e.currentTarget.value.length
                                    ? +e.currentTarget.value
                                    : e.currentTarget.value;
                                if (kindOfColumn) {
                                  const findElement = kindOfColumn
                                    .filter((KF) => KF.relation)
                                    .find(
                                      (item) =>
                                        item.relation &&
                                        item.relation.some(
                                          (rel) => rel.name === key,
                                        ),
                                    );
                                  if (findElement) {
                                    let tempSelect =
                                      findElement.selectOption?.find(
                                        (select) => select.id === convertValue,
                                      );
                                    let tempD = allFieldEditData.map(
                                      (temp: any) => {
                                        if (
                                          temp[`${idName}`] ===
                                          value[`${idName}`]
                                        ) {
                                          findElement.relation?.forEach(
                                            (element) => {
                                              if (tempSelect) {
                                                temp = {
                                                  ...temp,
                                                  [element.name]:
                                                    tempSelect[
                                                      element.valueKey
                                                    ],
                                                  [findElement.key]:
                                                    tempSelect['value'],
                                                };
                                              } else {
                                                temp = {
                                                  ...temp,
                                                  [element.name]: '',
                                                  [findElement.key]: '',
                                                };
                                              }
                                            },
                                          );
                                          return temp;
                                        } else {
                                          return temp;
                                        }
                                      },
                                    );
                                    setAllFieldEditData &&
                                      setAllFieldEditData([...tempD]);
                                  } else {
                                    let temp = allFieldEditData
                                      ? allFieldEditData
                                      : [];
                                    temp[index][key] = convertValue;
                                    setAllFieldEditData &&
                                      setAllFieldEditData([...temp]);
                                  }
                                }
                              }}
                            ></input>
                          )}
                        </Td>
                      );
                    })}
                    {canDelete || canEdit || setOpenModal ? (
                      <Td
                        style={{
                          width: `${
                            widths
                              ? widths.filter(
                                  (widthkey) => widthkey.key === 'operation',
                                )[0]?.value
                              : defaultWidth + '%'
                          }`,
                        }}
                        className={'operation'}
                      >
                        {setOpenModal && (
                          <img
                            width={30}
                            src={IsOpenModal}
                            alt="open modal icon"
                            onClick={() => {
                              setOpenModal(value);
                            }}
                          />
                        )}
                        {canEdit && (
                          <img
                            width={30}
                            src={Editicon}
                            alt="edit icon"
                            onClick={() => {
                              setNewData({
                                ...newData,
                                operation: 'edit',
                                id: value.id,
                              });
                              setData &&
                                setData({
                                  ...value,
                                  operation: 'edit',
                                });
                              setNewClicked(true);
                              setEditIndex(index !== editIndex ? index : -1);
                            }}
                          />
                        )}
                        {canDelete && (
                          <img
                            width={30}
                            src={DeleteIcon}
                            alt="delete icon"
                            onClick={() => {
                              setData &&
                                setData({
                                  ...value,
                                  operation: 'delete',
                                });
                              setEditIndex(index !== editIndex ? index : -1);
                            }}
                          />
                        )}
                      </Td>
                    ) : (
                      <></>
                    )}
                  </Tr>
                );
              }
            })}
          </Tbody>
        ) : (
          <></>
        )}
        {children}
      </table>
    </div>
  );
};
export default Table;
