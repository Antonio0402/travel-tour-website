import {
  Flex,
  Link,
  Heading,
  Spacer,
  HStack,
  Text,
  Box,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  faBars,
  faHouse,
  faMagnifyingGlass,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <Flex
      p="4"
      borderBottom="1px"
      borderColor="gray.100"
      align="center"
      gap="4"
    >
      <Heading as="h2" size="3xl" color="orange.400">
        <Link href="/" style={{ textDecoration: "none" }}>
          Travel Tourist Web
        </Link>
      </Heading>
      <Spacer />
      <HStack as="nav" gap="4" fontSize="xl" fontWeight="bold" hideBelow="md">
        <Link href="/" textUnderlineOffset="4px">
          <Text>Home</Text>
        </Link>
        {/* <Link href="/search" textUnderlineOffset="4px">
          <Text>Search</Text>
        </Link>
        <Link href="/about" textUnderlineOffset="4px">
          <Text>About</Text>
        </Link> */}
      </HStack>
      <Box hideFrom="md">
        <Menu isLazy={true}>
          <MenuButton
            as={IconButton}
            icon={<FontAwesomeIcon icon={faBars} />}
            aria-label="Home button"
            variant="outline"
            colorScheme="orange"
          />
          <MenuList>
            <Link href="/">
              <MenuItem
                icon={<FontAwesomeIcon icon={faHouse} color="orange" />}
              >
                Home
              </MenuItem>
            </Link>
            <Link href="/">
              <MenuItem
                icon={
                  <FontAwesomeIcon icon={faMagnifyingGlass} color="orange" />
                }
              >
                Search
              </MenuItem>
            </Link>
            <Link href="/">
              <MenuItem
                icon={<FontAwesomeIcon icon={faGraduationCap} color="orange" />}
              >
                About
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Header;
