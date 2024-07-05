import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})


const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m Mridul Sharma.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mridul Sharma
          </Heading>
          <p>Aspiring AI Researcher</p>

        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="200px"
            h="200px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/mridul_new.png"
              alt="Profile image"
              borderRadius="full"
              width="200"
              height="200"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About 🙋🏻‍♂️
        </Heading>
        <p>
        I&apos;m a Computer Engineer passionate about AI research and continuous learning. 
        I aim to contribute to AI advancements, collaborate with brilliant minds, and drive innovation for a smarter, sustainable future.
        </p>
        <Box align="center" my={8}>
          <Button
            as={NextLink}
            onClick={() => {window.open('https://drive.google.com/file/d/1Q1C4u0r1POOAGItVrJCesrMJUPM3quAC/view?usp=sharing', '_blank')}}
            href={'/'}
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Here&apos;s my CV
          </Button>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        I love ❤️
        </Heading>
        <Paragraph>
          Mathematics,
          Artificial Intelligence,
          Probability,
          & Problem solving.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Education 👨🏻‍🎓
        </Heading>
        <List>
        <ListItem>
        <Paragraph>
        &nbsp;&nbsp;<strong>Bachelors in Computer Engineering</strong><br></br>
        <Button
                onClick={() => {window.open("https://acem.edu.np/", '_blank')}}
                variant="ghost"
              >ACEM college</Button><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;2018 - 2023
        </Paragraph>
        </ListItem>
        <ListItem>
        <Paragraph>
          <br></br>
        &nbsp;&nbsp;<strong>Microdegree in Artificial Intelligence</strong><br></br>
        <Button
                onClick={() => {window.open("https://fuse.ai/", '_blank')}}
                variant="ghost"
              >Fusemachines AI fellowship</Button><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;2023 - 2024
        </Paragraph>
        </ListItem>

        </List>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
         Experience 👨🏽‍💻
        </Heading>
        <List>
        <ListItem>
        <Paragraph>
        &nbsp;&nbsp;<strong>1. AI Research Intern (Part-time)</strong><br></br>
        <Button
                variant="ghost"
              >Modulo Research</Button><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;<i>(May 2024 - Present)</i>
        </Paragraph>
        </ListItem>
        <ListItem>
        <Paragraph>
          <br></br>
        &nbsp;&nbsp;<strong>2. Machine Learning Engineer (Full-time)</strong><br></br>
        <Button
                variant="ghost"
              >ICEBRKR, A Virtly Company, Switzerland</Button><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;<i>(March 2024 - Present)</i>
        </Paragraph>
        </ListItem>
        <ListItem>
        <Paragraph>
          <br></br>
        &nbsp;&nbsp;<strong>3. Research Assistant (Full Time)</strong><br></br>
        <Button
                
                variant="ghost"
              >Artificial Intelligence Research Center, ACEM College</Button><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;(October 2023 - February 2024)
        </Paragraph>
        </ListItem>

        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Socials 📱
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/mridul3301" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                mridul3301
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/mridul3301/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Mridul Sharma
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/mriiidullll" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                mriiidullll
              </Button>
            </Link>
          </ListItem>
          <ListItem>
          </ListItem>
          
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home

export { getStaticProps } from "../components/chakra"
