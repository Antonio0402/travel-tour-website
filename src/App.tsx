import { Container, Grid, GridItem } from "@chakra-ui/react";
import { Header, Footer, Filters, Map } from "./sections";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { ReactElement } from "react";
import Loading from "./components/Loading";
import { useAtom, Provider as JotaiProvider } from "jotai";
import { useHydrateAtoms } from "jotai/react/utils";
import { dataAtom, dataQueryAtom } from "./store";

const render = (status: Status): ReactElement => {
  if (status === Status.FAILURE) {
    return <h2>Map cannot be loaded right now, sorry.</h2>;
  }
  return <Loading />;
};

const HydrateAtoms = ({
  initialValues,
  children,
}: {
  initialValues: any;
  children: JSX.Element;
}) => {
  // initialising on state with prop on render here
  useHydrateAtoms(initialValues);
  return children;
};

function App() {
  const [data] = useAtom(dataQueryAtom);
  return (
    <Container
      maxW="1440px"
      minH="100vh"
      display="grid"
      gridTemplateRows="auto 1fr auto"
    >
      <header>
        <Header />
      </header>
      <JotaiProvider>
        <HydrateAtoms initialValues={[[dataAtom, data]]}>
          <Grid templateColumns="minmax(auto, 400px) 1fr" gap="6">
            <GridItem>
              <Filters />
            </GridItem>
            <GridItem position="relative">
              <Wrapper
                apiKey={import.meta.env.VITE_GOOGLE_MAP_API}
                render={render}
                version="beta"
                libraries={["marker"]}
              >
                <Map />
              </Wrapper>
            </GridItem>
          </Grid>
        </HydrateAtoms>
      </JotaiProvider>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
}

export default App;
