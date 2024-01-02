import { Dispatch, SetStateAction } from 'react';

const onClickOptions = (
      path: boolean[],
      setPath: Dispatch<SetStateAction<boolean[]>>,
      index: number,
) => {
      let options = [...path];
      const headIndex = options.findIndex((option) => option);
      options[headIndex] = false;
      options[index] = true;
      setPath(options);
};

export default onClickOptions;
