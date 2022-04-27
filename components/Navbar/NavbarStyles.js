import NextLink from "next/link";
import { Link, useColorModeValue, MenuItem } from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

export const LinkItem = ({ home, href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        borderRadius="base"
        bg={active || home ? "blackAlpha.600" : undefined}
        color={active || home ? "white" : inactiveColor}
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
        <LinkItem href="/" home={true}>
          Home
        </LinkItem>
        <LinkItem href="#projects">
          <ArrowRightIcon mr="5px" />
          Projects
        </LinkItem>
        <LinkItem href="#about">
          <ArrowRightIcon mr="5px" />
          About
        </LinkItem>
      </>
    );
  } else {
    return (
      <>
        <LinkItem href="/" path={path}>
          <ArrowLeftIcon mr="5px" />
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
        <NextLink href="#projects" passHref>
          <MenuItem as={Link}>Projects</MenuItem>
        </NextLink>
        <NextLink href="#about" passHref>
          <MenuItem as={Link}>About</MenuItem>
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
