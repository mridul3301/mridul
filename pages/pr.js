import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import resnet from '../public/images/contents/resnet.png'
import attention from '../public/images/contents/attention.png'
import yolo from '../public/images/contents/yolo.png'
import pneumonia from '../public/images/project-images/pneumonia.png'
import dti from '../public/images/project-images/dti.png'
import mvs from '../public/images/project-images/mvs.png'
import food from '../public/images/project-images/food.png'
import cb from '../public/images/project-images/cb.png'
import vit from  '../public/images/contents/vit.png'
import unet from '../public/images/contents/unet.png'

const pr = () => (
  <Layout title="Papers & Projects">


    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Paper Replications
      </Heading>

      <Section delay={0.4}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>

        <GridItem
            title="U-Net: Convolutional Networks for Biomedical Image Segmentation"
            thumbnail={unet}
            href="https://github.com/mridul3301/U-Net"
          />
          

        <GridItem
            title="An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale (ViT)"
            thumbnail={vit}
            href="https://github.com/33-Papers/ViT-Vision-Transformers"
          />
          
          <GridItem
           title="Attention is all you need (Transformers)"
           thumbnail={attention}
           href="https://github.com/33-Papers/Attention-Is-All-You-Need"
          />
          <GridItem
            title="YOLOv1"
            thumbnail={yolo}
            href="https://github.com/33-Papers/YOLOv1"
          />
          
          <GridItem
            title="Deep Residual Learning for Image Recognition (ResNet)"
            thumbnail={resnet}
            href="https://github.com/33-Papers/Deep-Residual-Learning-for-Image-Recognition"
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
            title="Document summarizer with Chatbot"
            thumbnail={cb}
            href="https://github.com/mridul3301/Document-Summarizer-with-Chatbot"
          />
          <GridItem
            title="FoodVision - Classify foods"
            thumbnail={food}
            href="https://github.com/mridul3301/Computer-Vision/tree/main/PyTorch"
          />
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
          
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default pr
export { getStaticProps } from "../components/chakra"
