import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


import thumbMLE from '../public/images/blog-images/mle.png'


const matBlogs = () => (
  <Layout title="Mathematics Blog">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Explore Mathematics
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={8}>
        <Section delay={0.4}>
          <WorkGridItem id="mle" title="Maximum Likelihood Estimate (MLE)" thumbnail={thumbMLE}>
          Estimating the parameters of an assumed probability distribution, given some observed data.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default matBlogs
export { getServerSideProps } from '../components/chakra'
