import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import resnet from '../public/images/contents/resnet.png'
import attention from '../public/images/contents/attention.png'
import glove from '../public/images/contents/glove.png'
import bert from '../public/images/contents/bert.png'
import pneumonia from '../public/images/project-images/pneumonia.png'
import dti from '../public/images/project-images/dti.png'
import mvs from '../public/images/project-images/mvs.png'
import food from '../public/images/project-images/food.png'

const pr = () => (
  <Layout title="Papers & Projects">

<Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Paper Published
      </Heading>

      <Section delay={0.4}>
        <p>No papers published yet.</p><br></br>
        <p></p>
      </Section>
    </Container>


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



    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <Section delay={0.4}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="CNN Classification for Pneumonia using lungs X-ray"
            thumbnail={pneumonia}
            href="https://github.com/mridul3301/CNN-Classification"
          />
          <GridItem
           title="Drug Target Integration for assisting Drug Discovery"
           thumbnail={dti}
           href="https://github.com/mridul3301/Drug-Target-Integration"
          />
          <GridItem
            title="Movie Recommendation System"
            thumbnail={mvs}
            href="https://github.com/mridul3301/Movie-Recommendation-System-"
          />
          <GridItem
            title="FoodVision - Classify foods"
            thumbnail={food}
            href="https://github.com/mridul3301/Computer-Vision/tree/main/PyTorch"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default pr
export { getStaticProps } from "../components/chakra"
