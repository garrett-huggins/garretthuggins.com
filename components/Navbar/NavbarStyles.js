import NextLink from "next/link";
import {
  Link,
  useColorModeValue,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const LinkItem = ({ href, path, children, noPadding }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref>
      <Link
        p={noPadding ? 0 : 2}
        borderRadius="base"
        bg={active ? "blackAlpha.600" : undefined}
        color={active ? "white" : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export const HomePaths = ({ path }) => {
  if (path == "/" || path == "/#projects" || path == "/#about") {
    return (
      <>
        <Menu>
          <MenuButton
            as={Button}
            bg="blackAlpha.600"
            color="white"
            rightIcon={<ChevronDownIcon />}
            _hover={{ textDecoration: "underline" }}
          >
            Home
          </MenuButton>
          <MenuList margin={0}>
            <LinkItem href="#about" noPadding>
              <MenuItem>About</MenuItem>
            </LinkItem>
            <LinkItem href="#projects" noPadding>
              <MenuItem>Projects</MenuItem>
            </LinkItem>
          </MenuList>
        </Menu>
      </>
    );
  } else {
    return (
      <>
        <LinkItem href="/" path={path}>
          Home
        </LinkItem>
      </>
    );
  }
};

export const MenuHomePaths = ({ path }) => {
  if (path == "/" || path == "/#projects" || path == "/#about") {
    return (
      <>
        <NextLink href="#about" passHref>
          <MenuItem as={Link}>About</MenuItem>
        </NextLink>
        <NextLink href="#projects" passHref>
          <MenuItem as={Link}>Projects</MenuItem>
        </NextLink>
      </>
    );
  } else {
    return (
      <>
        <NextLink href="/" passHref>
          <MenuItem as={Link}>Home</MenuItem>
        </NextLink>
      </>
    );
  }
};
