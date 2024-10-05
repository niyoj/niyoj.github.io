/**
 * creates a delayed variable that reacts after x seconds
 * @param {*} dependency - the variable it looks for change
 * @param {number} [delay=1] - the time of delay
 *
 * @returns {*} the delayed reaction variable
 */

import { useEffect, useState } from "react";

export function useDelay(dependency, delay = 1) {
  const [delayedVar, setDelayedVar] = useState(dependency);

  useEffect(() => {
    const timeout = setTimeout(() => setDelayedVar(dependency), delay * 1000);

    return () => clearTimeout(timeout);
  }, [dependency]);

  return delayedVar;
}
