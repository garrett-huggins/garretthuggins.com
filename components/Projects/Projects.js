import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import {
  Card,
  CardInfo,
  ExternalLinks,
  GridContainer,
  Title,
  Hr,
  Tag,
  TagList,
  UtilityList,
  ProjectSection,
} from "./ProjectsStyles";
import { projects } from "../../data/projects";

const Projects = () => {
  const colorMode = useColorModeValue("grey", "#6b3030");
  const hoverMode = useColorModeValue("#5c5c5c", "#6b2323");
  const linkColor = useColorModeValue("white", "#d4c0c0");

  // use this section when there are more projects to load
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("/api/projects")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return <Text>Loading projects...</Text>;
  // }

  return (
    <ProjectSection>
      <GridContainer>
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => {
            return (
              <Card key={id}>
                <Image
                  src={image}
                  width="400"
                  height="200"
                  layout="responsive"
                  alt="Project Image"
                />
                <Title>
                  <Text as="h3">{title}</Text>
                </Title>
                <Hr />
                <CardInfo>
                  <Text as="p">{description}</Text>
                </CardInfo>
                <div>
                  <TagList>
                    {tags.map((tag, i) => {
                      return (
                        <Tag key={i}>
                          <Text>/{tag}/</Text>
                        </Tag>
                      );
                    })}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks
                    colorMode={colorMode}
                    hoverMode={hoverMode}
                    href={visit}
                    target="_blank"
                  >
                    <Text color={linkColor}>Demo</Text>
                  </ExternalLinks>
                  <ExternalLinks
                    colorMode={colorMode}
                    hoverMode={hoverMode}
                    href={source}
                    target="_blank"
                  >
                    <Text color={linkColor}>Source</Text>
                  </ExternalLinks>
                </UtilityList>
              </Card>
            );
          }
        )}
      </GridContainer>
    </ProjectSection>
  );
};

export default Projects;
