import { Dispatch, SetStateAction } from 'react';

const onClickPreviuseArrow = (
      path: boolean[],
      setPath: Dispatch<SetStateAction<boolean[]>>,
) => {
      let options = [...path];
      const headIndex = options.findIndex((option) => option);
      let prevOption = options[headIndex - 1];
      if (prevOption !== undefined) {
            options[headIndex] = false;
            options[headIndex - 1] = true;
      }
      setPath(options);
};

export default onClickPreviuseArrow;
