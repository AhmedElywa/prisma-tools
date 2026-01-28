import { useEffect, useState } from 'react';

export const useFilter = (init: any, setFilter: (value: any) => void, number?: boolean) => {
  const [state, setState] = useState<{
    value: any;
    typingTimeout?: NodeJS.Timeout;
  }>({
    value: init ?? {},
  });

  useEffect(() => {
    setState({ value: init || {} });
  }, [init]);

  const onChangeHandler = (newValue: any) => {
    let search: any = false;
    Object.keys(newValue).forEach((key) => {
      if (newValue[key] !== undefined) {
        if (!search) {
          search = {};
        }
        if (['in', 'notIn'].includes(key)) {
          search[key] = (newValue[key] as string).split(',').map((item) => (number ? Number.parseFloat(item) : item));
        } else {
          search[key] = number ? Number.parseFloat(newValue[key]) : newValue[key];
        }
      }
    });
    setFilter(search ?? undefined);
  };

  const onChange: (options?: { name?: string; value?: any; wait?: boolean }) => void = (options) => {
    if (!options) {
      setState({ value: {} });
      onChangeHandler({});
    } else if (options.name) {
      const { name, value, wait } = options;
      const search: string = value;
      if (state.typingTimeout) clearTimeout(state.typingTimeout);

      const newValue = {
        [name]: search || value === false ? search : undefined,
      };
      setState({
        value: newValue,
        typingTimeout: setTimeout(
          () => {
            onChangeHandler(newValue);
          },
          !wait ? 1 : 1000,
        ),
      });
    }
  };

  return {
    value: state.value,
    onChange,
  };
};
