import {
  Badge,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Attention">
      <Title>
        Why Attention works? <Badge>2023-04-07</Badge>
      </Title>
      <Heading as="h4" fontSize={14} my={6}>
        <Center>I&apos;ve created this website recently. So, this is some random intro for test purpose, I will push the real blog content soon.</Center>
        <Center>Introduction</Center>
      </Heading>
      <P style={{ width: '750px', textAlign: 'left' }}>
        
      
      <span>The &quot;Attention is All You Need&quot; paper, published in 2017 by Vaswani et al., introduced
      the Transformer model, a revolutionary architecture for sequence transduction tasks, such 
      as machine translation. The paper presented a new approach to eliminate recurrent neural 
      networks (RNNs) and convolutional neural networks (CNNs) in favor of a purely attention-based 
      model. This approach achieved state-of-the-art results on machine translation benchmarks with 
      significantly faster training times.</span><br /><br />
      </P>
      <Heading as="h4" fontSize={14} my={6}>
        <Center>Key Concepts :<br /></Center>
      </Heading>

      <List ml={6} my={6}>
        <ListItem>
          <Meta>1. Attention Mechanism :<br /></Meta>
          <P style={{ width: '750px', textAlign: 'left' }}>
      
          <span>The paper introduces the attention mechanism as a fundamental building block for sequence 
          modeling. Attention allows the model to focus on different parts of the input sequence when 
          making predictions. It computes attention weights that represent the relevance or importance 
          of different elements in the input sequence.</span><br /><br />
          </P>
        </ListItem>
        <ListItem>
          <Meta>2. Transformer Architecture :<br /></Meta>
          <P style={{ width: '750px', textAlign: 'left' }}>
      
          <span>The authors propose the Transformer, a novel neural network architecture based solely on 
          attention mechanisms, without any recurrent or convolutional components. The Transformer 
          consists of an encoder and a decoder. Both encoder and decoder are composed of multiple 
          layers, each containing a multi-head self-attention mechanism and a position-wise 
          feed-forward network.</span><br /><br />
          </P>
        </ListItem>
        <ListItem>
          <Meta>3. Self Attention :<br /></Meta>
          <P style={{ width: '750px', textAlign: 'left' }}>
      
          <span>Self-attention is a mechanism that computes attention weights within a sequence itself. 
          In the Transformer, self-attention is employed to model dependencies between different 
          positions within the input sequence. It allows the model to attend to all positions 
          simultaneously, capturing both short-range and long-range dependencies.</span><br /><br />
          </P>
        </ListItem>
        <ListItem>
          <Meta>4. Multi Head Attention :<br /></Meta>
          <P style={{ width: '750px', textAlign: 'left' }}>
      
          <span>To enhance the modeling capacity and enable capturing different types of dependencies, the 
          authors introduce multi-head attention. This mechanism performs multiple parallel 
          self-attention operations with different learned linear projections, allowing the model 
          to jointly attend to information from different representation subspaces.</span><br /><br />
          </P>
        </ListItem>
        <ListItem>
          <Meta>5. Positional Encoding :<br /></Meta>
          <P style={{ width: '750px', textAlign: 'left' }}>
      
          <span>Since the Transformer lacks sequential information, positional encodings are introduced to 
          provide the model with information about the order of elements in the sequence. These 
          positional encodings are added to the input embeddings and provide the model with a sense 
          of sequence order.</span><br /><br />
          </P>
        </ListItem>
        <ListItem>
          <Meta>6. Training and Inference :<br /></Meta>
          <P style={{ width: '750px', textAlign: 'left' }}>
      
          <span>The paper describes the training process for the Transformer using the attention-based 
          sequence-to-sequence framework. During training, the model is optimized with respect to 
          a maximum likelihood objective. During inference, the model generates translations 
          autoregressively, where each output token is generated based on previously generated tokens.</span><br /><br />
          </P>
        </ListItem>

      </List>
      <Center><WorkImage src="https://jalammar.github.io/images/t/transformer_decoding_2.gif" alt="amembo" /></Center>
      
      
  </Layout>
)

export default Work
export { getStaticProps } from "../../components/chakra"
