import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      {new Date().getFullYear()} <span> Mridul Sharma. All Rights Reserved.<br />
      This is not my original concept. Website concept is taken from : https://www.craftz.dog/<br />
      3D PC info : &quot;Dibesfer Voxel PC&quot;(https://skfb.ly/otTJP) by dibesfer is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
      </span>
    </Box>
  )
}

export default Footer
