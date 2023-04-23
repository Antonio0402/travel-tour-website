import {
  Wrap,
  WrapItem,
  Select,
  Box,
  Heading,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";
import { FilterScheme, filterScheme, FilterValue } from "../data/filterScheme";
import { filteredDataAtom, filtersAtom } from "../store";
import { atom, useAtom, useAtomValue } from "jotai";
import { Suspense, createRef, useDeferredValue, useMemo } from "react";
import TourCard from "../components/TourCard";
import Amount from "../components/Amount";
import Total from "../components/Total";
import Loading from "../components/Loading";

const filtersSchemeAtom = atom<FilterScheme>(filterScheme);

const elRefsAtom = atom<React.RefObject<HTMLDivElement>[]>([]);

const Filters = () => {
  const filters = useAtomValue(filtersSchemeAtom);
  const [filterData, setFilterData] = useAtom(filtersAtom);
  const filteredData = useAtomValue(filteredDataAtom);
  console.table(filteredData);

  const mountingElRefsAtom = useMemo(() => {
    const refsAtom = atom(
      (get) => get(elRefsAtom),
      (_get, set, update: Array<any>) => {
        set(elRefsAtom, (refs) => {
          return Array(update.length)
            .fill(0)
            .map((_, index) => refs[index] || createRef());
        });
      }
    );
    refsAtom.onMount = (set) => {
      set(filteredData.length ? filteredData : []);
    };
    return refsAtom;
  }, [filteredData]);

  const elRefs = useAtomValue(mountingElRefsAtom);

  return (
    <Grid
      h="full"
      bg="orange.50"
      gap="10"
      position="relative"
      gridTemplateRows="auto 1fr auto"
    >
      <Wrap
        py="8"
        w="full"
        justify="center"
        spacing="4"
        shouldWrapChildren={true}
      >
        {filters.map((filter) => (
          <WrapItem key={filter.queryName} as="div">
            <Select
              placeholder={filter.placeholder}
              w="full"
              p="2"
              value={filterData[filter.queryName as keyof FilterValue]!}
              onChange={(e) =>
                setFilterData({
                  [filter.queryName]: e.target.value,
                })
              }
              border="1px"
              borderColor="orange.400"
              disabled={
                !filterData.categoryCode && filter.queryName !== "categoryCode"
              }
            >
              {filter.items.map((item) =>
                item?.location ? (
                  item?.location === filterData.locationCode && (
                    <option value={item.value} key={item.name}>
                      {item.name}
                    </option>
                  )
                ) : (
                  <option value={item.value} key={item.name}>
                    {item.name}
                  </option>
                )
              )}
            </Select>
          </WrapItem>
        ))}
        <WrapItem
          as="div"
          minW="320px"
          display="flex"
          gap="6"
          alignItems="center"
        >
          <Amount />
        </WrapItem>
      </Wrap>
      <Box>
        <Heading as="h4" mb="4" px="8" fontSize="3xl" color="orange.400">
          Tours:{" "}
        </Heading>
        <SimpleGrid justifyItems="center" gap="6" height="75vh" overflow="auto">
          <Suspense fallback={<Loading />}>
            {filteredData.map((filter, index) => (
              <Box
                ref={elRefs[index]}
                key={filter.tourId}
                scrollMarginBottom="4"
              >
                <TourCard element={elRefs[index]} filter={filter} />
              </Box>
            ))}
          </Suspense>
        </SimpleGrid>
      </Box>
      <Total />
    </Grid>
  );
};

export default Filters;
