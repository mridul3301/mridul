import {
    Badge,
    Heading,
    Center
  } from '@chakra-ui/react'
  import { NewTitle} from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'


  const Work = () => (
    <Layout title="Maximum Likelihood Estimate (MLE)">
        <NewTitle>
          Maximum Likelihood Estimate (MLE) <Badge>2023-04-07</Badge>
        </NewTitle>
        <Heading as="h4" fontSize={14} my={6}>
        <Center>I&apos;ve created this website recently. So, this is some random intro for test purpose, I will push the real blog content soon.</Center>
          <Center>Concept</Center>
        </Heading>
        <P style={{ width: '750px', textAlign: 'left' }}>
        <span>Let&#39;s say we have some data,<br />
        The goal of maximum likelihood is to find the optimal way to fit a desired distribution to the data.<br />
        <br />
        The reason behind fitting a distribution to our data is that it can be easier to work with 
        the data and it is also more general i.e. applies to every experiment of same type.</span>
        </P>
        <P>
        </P>
    </Layout>
  )
  
  export default Work
  export { getStaticProps } from "../../components/chakra"
  