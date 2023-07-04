import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import resnet from '../public/images/contents/resnet.png'
import attention from '../public/images/contents/attention.png'
import glove from '../public/images/contents/glove.png'
import bert from '../public/images/contents/bert.png'

const pr = () => (
  <Layout title="Paper Replications">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Paper Replications
      </Heading>

      <Section delay={0.4}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Deep Residual Learning for Image Recognition (ResNet)"
            thumbnail={resnet}
            href="https://github.com/33-Papers/Deep-Residual-Learning-for-Image-Recognition"
          />
          <GridItem
           title="Attention is all you need (Transformers)"
           thumbnail={attention}
           href="https://github.com/33-Papers/Attention-Is-All-You-Need"
          />
          <GridItem
            title="Global Vectors for Word Representation (GloVe)"
            thumbnail={glove}
            href="https://github.com/33-Papers/GloVe-Global-Vectors-for-Word-Representation"
          />
          <GridItem
            title="Pre training of Deep Bidirectional Transformers for Language Understanding (BERT)"
            thumbnail={bert}
            href="https://github.com/33-Papers/BERT-Pre-training-of-Deep-Bidirectional-Transformers-for-Language-Understanding"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default pr
export { getServerSideProps } from '../components/chakra'
