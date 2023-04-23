import { TypeEqualityComparator, createCustomEqual, deepEqual } from "fast-equals";
import { EffectCallback, useEffect, useRef } from "react";
import { isLatLngLiteral } from "@googlemaps/typescript-guards"

const areObjectsEqual: TypeEqualityComparator<google.maps.LatLng, undefined> = (a: any, b: any) => {
    if(
    isLatLngLiteral(a) 
    || a instanceof google.maps.LatLng
    || isLatLngLiteral(b) 
    || b instanceof google.maps.LatLng
  ) {
    return new google.maps.LatLng(a).equals(new google.maps.LatLng(b))
  }
  return deepEqual(a, b);
}

const deepCompareEqualsForMaps = createCustomEqual({ createCustomConfig: () => ({ areObjectsEqual })});
function useDeepcompareMemoize(
  value: any
) {
  const ref = useRef();

  if(!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

const useDeepCompareEffectForMaps = (
  callback: EffectCallback,
  dependencies: any[]
) => {
  useEffect(callback, dependencies.map(useDeepcompareMemoize))
}

export default useDeepCompareEffectForMaps;