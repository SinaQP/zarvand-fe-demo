import { Dispatch, SetStateAction } from 'react';

const onClickNextArrow = (
      path: boolean[],
      setPath: Dispatch<SetStateAction<boolean[]>>,
) => {
      let options = [...path];
      const headIndex = options.findIndex((option) => option);
      let nextOption = options[headIndex + 1];
      if (nextOption !== undefined) {
            options[headIndex] = false;
            options[headIndex + 1] = true;
      }
      setPath(options);
};

export default onClickNextArrow;
