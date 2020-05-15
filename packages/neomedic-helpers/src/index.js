import {
  useMemo,
  useReducer as _useReducer,
} from 'react';

/**
 * Hook to memoize store state.
 */
export const useStoreModule = (state, actions, extra = {}) => useMemo(() => ({
  ...state,
  ...extra,

  /**
   * Call an action.
   */
  run (key, ...payload) {
    const action = actions[key];

    if (! action) {
      throw new Error(`Action ${key} not defined`);
    }

    return action(...payload);
  },
}), [state]);


/**
 * Abstraction on top of use reducer.
 */
export const useReducer = (reducer, initial, init) => {
  const [state, _dispatch] = _useReducer(reducer, initial, init);

  const dispatch = (type, payload) => {
    _dispatch({
      type,
      payload,
    });
  };

  return [state, dispatch];
};
