import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


import thumbAttention from '../public/images/blog-images/attention.png'


const Blogs = () => (
  <Layout title="Blogs">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Explore AI
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={8}>
        <Section>
          <WorkGridItem
            id="attention"
            title="Attention is all you need"
            thumbnail={thumbAttention}
          >
          A new simple network architecture, the Transformer, 
          based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.
          </WorkGridItem>
        </Section>


      </SimpleGrid>
    </Container>
  </Layout>
)

export default Blogs
export { getStaticProps } from "../components/chakra"
