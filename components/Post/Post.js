import Link from "next/link";
import { Card, Date, PostTitle } from "./PostStyles";
import { Button, useColorModeValue } from "@chakra-ui/react";

export default function Post({ post }) {
  return (
    <Card bg={useColorModeValue("", "#283e52")}>
      <PostTitle>{post.frontmatter.title}</PostTitle>

      <Date>{post.frontmatter.date}</Date>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`} passHref>
        <Button mt="1rem">Read More</Button>
      </Link>
    </Card>
  );
}
